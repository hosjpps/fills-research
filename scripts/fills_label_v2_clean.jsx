// ФИЛЛС — сборка с чистого фона + crop ФИЛЛС из старого растра + вектор текст
// План B: чистый CMYK файл, всё на отдельных слоях
// Запуск: Illustrator → Файл → Сценарии → Другой сценарий → выбрать этот файл

#target illustrator

// =============== КОНФИГ — поменяй пути под другие вкусы ===============
var BG_PATH    = "/Users/mac/Documents/ЛытракинЪ продукция /hf_20260612_214133_c3b5a9b0-780f-48b5-900b-59a0de1f6406.png";
var FILLS_CROP = "/Users/mac/Documents/ЛытракинЪ продукция /assets/fills_klubnika_bazilik.png";
var OUT_PATH   = "/Users/mac/Documents/ЛытракинЪ продукция /редактируемые этикетки/клубника_базилик_clean.ai";

var FLAVOR_LINE_1 = "КЛУБНИКА";
var FLAVOR_LINE_2 = "БАЗИЛИК";

// Чистый фон 5056×3392 — основа документа
var DOC_W = 5056;
var DOC_H = 3392;

// ФИЛЛС crop position/size (in document points)
// Original crop = 1210x470 px from 2840-wide label area
// Scale crop ширину ~42% от ширины документа
var FILLS_CROP_W   = DOC_W * 0.46;          // ширина ФИЛЛС
var FILLS_CROP_H   = FILLS_CROP_W * (827/3227);  // aspect нового clean PNG
var FILLS_CENTER_X = DOC_W * 0.50;          // центр горизонтально
var FILLS_CENTER_Y_FROM_TOP = DOC_H * 0.45;  // 45% сверху

// Подпись вкуса (правый низ)
var FLAVOR_CENTER_X = DOC_W * 0.50;
var FLAVOR_LINE1_Y  = DOC_H * 0.78;
var FLAVOR_LINE2_Y  = DOC_H * 0.82;
var FLAVOR_FONT_SIZE = 50;

// 330мл (ниже подписи)
var VOLUME_CENTER_X = DOC_W * 0.50;
var VOLUME_CENTER_Y = DOC_H * 0.90;
var VOLUME_FONT_SIZE = 36;

// =============== ВЫПОЛНЕНИЕ ===============

// Создать output папку
var outDir = new Folder("/Users/mac/Documents/ЛытракинЪ продукция /редактируемые этикетки");
if (!outDir.exists) outDir.create();

// Создать новый CMYK документ
var doc = app.documents.add(DocumentColorSpace.CMYK, DOC_W, DOC_H);

// Слой 1: фон
var layerBg = doc.layers[0];
layerBg.name = "BACKGROUND_CLEAN";

var bgFile = new File(BG_PATH);
if (!bgFile.exists) {
    alert("Чистый фон не найден: " + BG_PATH);
    throw new Error("BG not found");
}
var bg = layerBg.placedItems.add();
bg.file = bgFile;
bg.embed();
// Развернуть на весь документ
bg.position = [0, DOC_H];
bg.width = DOC_W;
bg.height = DOC_H;

// Слой 2: ФИЛЛС raster crop
var layerLogo = doc.layers.add();
layerLogo.name = "LOGO_FILLS_RASTER";

var fillsFile = new File(FILLS_CROP);
if (!fillsFile.exists) {
    alert("FILLS crop не найден: " + FILLS_CROP);
    throw new Error("FILLS crop not found");
}
var fills = layerLogo.placedItems.add();
fills.file = fillsFile;
fills.embed();
fills.width = FILLS_CROP_W;
fills.height = FILLS_CROP_H;
// Position: Illustrator y from bottom, account for image origin at top-left
fills.position = [
    FILLS_CENTER_X - FILLS_CROP_W / 2,
    DOC_H - FILLS_CENTER_Y_FROM_TOP + FILLS_CROP_H / 2
];

// Слой 3: название вкуса (вектор)
var layerFlavor = doc.layers.add();
layerFlavor.name = "FLAVOR_NAME_VECTOR";

// Pick font fallback
function pickFont() {
    var candidates = ["Inter-Black", "InterDisplay-Black", "SFProDisplay-Black", "HelveticaNeue-Bold", "Helvetica-Bold", "Helvetica"];
    for (var i = 0; i < candidates.length; i++) {
        try {
            var f = app.textFonts.getByName(candidates[i]);
            if (f) return f;
        } catch (e) {}
    }
    return app.textFonts[0];
}
var bodyFont = pickFont();

var white = new CMYKColor();
white.cyan = 0; white.magenta = 0; white.yellow = 0; white.black = 0;

function addText(layer, text, cx, cyFromTop, size, tracking, color) {
    var t = layer.textFrames.add();
    t.contents = text;
    t.textRange.characterAttributes.textFont = bodyFont;
    t.textRange.characterAttributes.size = size;
    t.textRange.characterAttributes.tracking = tracking;
    t.textRange.characterAttributes.fillColor = color;
    var b = t.geometricBounds;
    var w = b[2] - b[0];
    var h = b[1] - b[3];
    t.position = [cx - w/2, DOC_H - cyFromTop + h/2];
    return t;
}

addText(layerFlavor, FLAVOR_LINE_1, FLAVOR_CENTER_X, FLAVOR_LINE1_Y, FLAVOR_FONT_SIZE, 400, white);
addText(layerFlavor, FLAVOR_LINE_2, FLAVOR_CENTER_X, FLAVOR_LINE2_Y, FLAVOR_FONT_SIZE, 400, white);

// Слой 4: 330мл
var layerVolume = doc.layers.add();
layerVolume.name = "VOLUME_VECTOR";
addText(layerVolume, "330мл", VOLUME_CENTER_X, VOLUME_CENTER_Y, VOLUME_FONT_SIZE, 200, white);

// Сохранение
var saveOpts = new IllustratorSaveOptions();
saveOpts.compatibility = Compatibility.ILLUSTRATOR17;
saveOpts.pdfCompatible = true;
saveOpts.embedICCProfile = true;

doc.saveAs(new File(OUT_PATH), saveOpts);

alert(
    "Готово!\n\n" +
    "Файл: " + OUT_PATH + "\n\n" +
    "Слои (снизу вверх):\n" +
    "  1. BACKGROUND_CLEAN (чистый фон растром)\n" +
    "  2. LOGO_FILLS_RASTER (вырезанный ФИЛЛС из старого PDF)\n" +
    "  3. FLAVOR_NAME_VECTOR (КЛУБНИКА БАЗИЛИК — вектор)\n" +
    "  4. VOLUME_VECTOR (330мл — вектор)\n\n" +
    "CMYK документ.\n\n" +
    "Дальше в Illustrator можно:\n" +
    "  • Выделить LOGO_FILLS_RASTER → Object → Image Trace → Make → векторизация (опционально)\n" +
    "  • Передвинуть/разменить размер любого слоя\n" +
    "  • Изменить шрифт/цвет в FLAVOR / VOLUME"
);
