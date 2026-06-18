// Пересобрать ТОЛЬКО клюкву из шаблона базилика. Остальные вкусы не трогает.
// Свопает фон + ФИЛЛС + штрихкод + название. Состав останется базиликовый (подменить вручную).
// Запуск: НЕ открывая ничего → Файл → Сценарии → Другой сценарий → этот файл.

#target illustrator

var BASE = "/Users/mac/Documents/ЛытракинЪ продукция /редактируемые этикетки/клубника_базилик_clean.ai";
var ASSETS = "/Users/mac/Documents/ЛытракинЪ продукция /assets/";
var BC = ASSETS + "barcodes/";
var OUT = "/Users/mac/Documents/ЛытракинЪ продукция /редактируемые этикетки/клюква_апельсин_розмарин_clean.ai";

var FL = {
    bg:"фон_клюква-апельсин-розмарин.png",
    fills:"fills_клюква-апельсин-розмарин.png",
    n1:"КЛЮКВА АПЕЛЬСИН", n2:"РОЗМАРИН",
    bc:"klukva.jpg"
};

var doc = app.open(new File(BASE));
var bgRatio=5056/3392, fillsRatio=3208/801, bcRatio=1031/350;

var bgR=null, fillsR=null, bcR=null;
var rasters=doc.rasterItems;
for (var i=0;i<rasters.length;i++){
    var r=rasters[i], ar=r.width/r.height;
    if (Math.abs(ar-fillsRatio)<0.6){ if(!fillsR) fillsR=r; }
    else if (Math.abs(ar-bcRatio)<0.4){ if(!bcR) bcR=r; }
    else if (Math.abs(ar-bgRatio)<0.3){ if(!bgR) bgR=r; }
}

function placeAt(layer,path,l,t,w,h){
    var p=layer.placedItems.add(); p.file=new File(path);
    p.position=[l,t]; p.width=w; p.height=h; return p;
}

// background
if (bgR){
    var L=bgR.position[0],T=bgR.position[1],W=bgR.width,H=bgR.height,lay=bgR.layer;
    bgR.remove();
    var nb=placeAt(lay,ASSETS+FL.bg,L,T,W,H); nb.embed(); nb.zOrder(ZOrderMethod.SENDTOBACK);
}
// fills — keep base WIDTH, center on base fills center, height by new aspect
if (fillsR){
    var fL=fillsR.position[0],fT=fillsR.position[1],fW=fillsR.width,fH=fillsR.height;
    var cx=fL+fW/2, cy=fT-fH/2, flay=fillsR.layer;
    fillsR.remove();
    var tmp=flay.placedItems.add(); tmp.file=new File(ASSETS+FL.fills);
    var nAR=tmp.width/tmp.height; var newW=fW, newH=fW/nAR;
    tmp.width=newW; tmp.height=newH; tmp.position=[cx-newW/2, cy+newH/2];
    tmp.embed();
}
// barcode
if (bcR){
    var bL=bcR.position[0],bT=bcR.position[1],bW=bcR.width,bH=bcR.height,blay=bcR.layer;
    bcR.remove();
    var nc=placeAt(blay,BC+FL.bc,bL,bT,bW,bH); nc.embed();
}
// name text
for (var t=0;t<doc.textFrames.length;t++){
    var tf=doc.textFrames[t], c=tf.contents;
    if (c.indexOf("КЛУБНИКА")>-1 && c.indexOf("БАЗИЛИК")>-1){ tf.contents=FL.n1+"\r"+FL.n2; }
    else if (c.indexOf("БАЗИЛИК")>-1){ tf.contents=FL.n2; }
    else if (c.indexOf("КЛУБНИКА")>-1 && c.length<20){ tf.contents=FL.n1; }
}

var so=new IllustratorSaveOptions();
so.compatibility=Compatibility.ILLUSTRATOR17; so.pdfCompatible=true; so.embedICCProfile=true;
doc.saveAs(new File(OUT), so);
doc.close(SaveOptions.DONOTSAVECHANGES);
alert("Клюква пересобрана:\n"+OUT+"\n\nСостав базиликовый — подмени вручную из старого PDF клюквы.");
