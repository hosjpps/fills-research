// Клонирование этикетки ФИЛЛС на 5 вкусов из шаблона клубника-базилик.
// Картинки в шаблоне ВСТРОЕНЫ (RasterItem) — свопаем удалением + новой вставкой.
// Свопает: фон + ФИЛЛС + штрихкод + название вкуса. Геометрию сохраняет.
// Состав остаётся базиликовый — подменить вручную копипастом.
// Запуск: НЕ открывая ничего → Файл → Сценарии → Другой сценарий → этот файл.

#target illustrator

var BASE = "/Users/mac/Documents/ЛытракинЪ продукция /редактируемые этикетки/клубника_базилик_clean.ai";
var ASSETS = "/Users/mac/Documents/ЛытракинЪ продукция /assets/";
var BC = ASSETS + "barcodes/";
var OUTDIR = "/Users/mac/Documents/ЛытракинЪ продукция /редактируемые этикетки/";

var flavors = [
    { bg:"фон_виноград-крем-сода.png",             fills:"fills_виноград-крем-сода.png",             n1:"ВИНОГРАД", n2:"КРЕМ-СОДА",          bc:"vinograd.jpg", out:"виноград_крем-сода_clean.ai" },
    { bg:"фон_клюква-апельсин-розмарин.png",        fills:"fills_клюква-апельсин-розмарин.png",        n1:"КЛЮКВА АПЕЛЬСИН", n2:"РОЗМАРИН",     bc:"klukva.jpg",   out:"клюква_апельсин_розмарин_clean.ai" },
    { bg:"фон_клубника-арбуз.png",                  fills:"fills_клубника-арбуз.png",                  n1:"КЛУБНИКА", n2:"АРБУЗ",              bc:"arbuz.jpg",    out:"клубника_арбуз_clean.ai" },
    { bg:"фон_гранат-клубника-грейпфрут-чили-.png", fills:"fills_гранат-клубника-грейпфрут-чили.png",  n1:"ГРАНАТ КЛУБНИКА", n2:"ГРЕЙПФРУТ ЧИЛИ", bc:"granat.jpg", out:"гранат_клубника_грейпфрут_чили_clean.ai" },
    { bg:"фон_огурец-лимон-лайм.png",               fills:"fills_огурец-лимон-лайм.png",               n1:"ОГУРЕЦ ЛИМОН", n2:"ЛАЙМ",            bc:"ogurec.jpg",   out:"огурец_лимон_лайм_clean.ai" }
];

// поместить картинку на слой с заданной геометрией, вернуть placedItem
function placeAt(layer, path, left, top, w, h) {
    var pl = layer.placedItems.add();
    pl.file = new File(path);
    pl.position = [left, top];
    pl.width = w;
    pl.height = h;
    return pl;
}

var report = [];
var errors = [];

for (var f=0; f<flavors.length; f++) {
    var fl = flavors[f];
    try {
        var doc = app.open(new File(BASE));

        var bgRatio=5056/3392, fillsRatio=3212/804, bcRatio=1031/350, qrRatio=268/264;

        // собрать ВСЕ растры (встроенные картинки)
        var rasters = doc.rasterItems;
        var bgR=null, fillsR=null, bcR=null;
        for (var i=0;i<rasters.length;i++){
            var r=rasters[i];
            var ar=r.width/r.height;
            if (Math.abs(ar-fillsRatio)<0.6) { if(!fillsR) fillsR=r; }
            else if (Math.abs(ar-bcRatio)<0.4) { if(!bcR) bcR=r; }
            else if (Math.abs(ar-bgRatio)<0.3) { if(!bgR) bgR=r; }
        }

        // --- BACKGROUND ---
        if (bgR){
            var L=bgR.position[0], T=bgR.position[1], W=bgR.width, H=bgR.height;
            var lay=bgR.layer;
            bgR.remove();
            var np=placeAt(lay, ASSETS+fl.bg, L, T, W, H);
            np.embed();
            np.zOrder(ZOrderMethod.SENDTOBACK);
        } else errors.push(fl.out+": фон не найден");

        // --- FILLS (центр сохранить, высоту по новому аспекту) ---
        if (fillsR){
            var fL=fillsR.position[0], fT=fillsR.position[1], fW=fillsR.width, fH=fillsR.height;
            var cx=fL+fW/2, cy=fT-fH/2;
            var flay=fillsR.layer;
            fillsR.remove();
            // временно вставить чтобы узнать аспект
            var tmp=flay.placedItems.add();
            tmp.file=new File(ASSETS+fl.fills);
            var nAR=tmp.width/tmp.height;
            var newW=fW, newH=fW/nAR;
            tmp.width=newW; tmp.height=newH;
            tmp.position=[cx-newW/2, cy+newH/2];
            tmp.embed();
        } else errors.push(fl.out+": ФИЛЛС не найден");

        // --- BARCODE ---
        if (bcR){
            var bL=bcR.position[0], bT=bcR.position[1], bW=bcR.width, bH=bcR.height;
            var blay=bcR.layer;
            bcR.remove();
            var nb=placeAt(blay, BC+fl.bc, bL, bT, bW, bH);
            nb.embed();
        } else errors.push(fl.out+": штрихкод не найден");

        // --- название вкуса ---
        for (var t=0;t<doc.textFrames.length;t++){
            var tf=doc.textFrames[t];
            var c=tf.contents;
            if (c.indexOf("КЛУБНИКА")>-1 && c.indexOf("БАЗИЛИК")>-1){ tf.contents=fl.n1+"\r"+fl.n2; }
            else if (c.indexOf("БАЗИЛИК")>-1){ tf.contents=fl.n2; }
            else if (c.indexOf("КЛУБНИКА")>-1 && c.length<20){ tf.contents=fl.n1; }
        }

        var so=new IllustratorSaveOptions();
        so.compatibility=Compatibility.ILLUSTRATOR17;
        so.pdfCompatible=true; so.embedICCProfile=true;
        doc.saveAs(new File(OUTDIR+fl.out), so);
        doc.close(SaveOptions.DONOTSAVECHANGES);
        report.push(fl.out);
    } catch(e){
        errors.push(fl.out+": ОШИБКА "+e);
        try{ app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); }catch(e2){}
    }
}

var msg = "Создано "+report.length+" файлов:\n"+report.join("\n");
if (errors.length) msg += "\n\nПРОБЛЕМЫ:\n"+errors.join("\n");
msg += "\n\nОСТАЛОСЬ: состав базиликовый — подмени вручную копипастом из старого PDF каждого вкуса.";
alert(msg);
