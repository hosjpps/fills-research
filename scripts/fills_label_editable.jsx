// ФИЛЛС — добавить векторный ФИЛЛС + название вкуса поверх растрового PDF
// Сохранить как редактируемый CMYK AI
// Запуск: Illustrator → File → Scripts → Other Script → выбрать этот файл

#target illustrator

// =============== КОНФИГ — поменяй пути под другие вкусы ===============
var PDF_PATH = "/Users/mac/Documents/ЛытракинЪ продукция /готовые обложки V2 (с qr)/клубника базилик.pdf";
var OUT_PATH = "/Users/mac/Documents/ЛытракинЪ продукция /редактируемые этикетки/клубника_базилик_editable.ai";

var FLAVOR_LINE_1 = "КЛУБНИКА";
var FLAVOR_LINE_2 = "БАЗИЛИК";

// Координаты в PDF points (для клубники-базилика, выявлены из растра)
var FILLS_CENTER_X  = 2103;
var FILLS_CENTER_Y  = 1515;   // от верха страницы
var FILLS_FONT_SIZE = 278;    // даёт ширину ~1057pt

var FLAVOR_CENTER_X = 2900;
var FLAVOR_LINE1_Y  = 2300;
var FLAVOR_LINE2_Y  = 2380;
var FLAVOR_FONT_SIZE = 30;

var VOLUME_CENTER_X = 2900;
var VOLUME_CENTER_Y = 2520;
var VOLUME_FONT_SIZE = 22;

// =============== ВЫПОЛНЕНИЕ ===============

// Создать output папку
var outDir = new Folder("/Users/mac/Documents/ЛытракинЪ продукция /редактируемые этикетки");
if (!outDir.exists) outDir.create();

// Открыть PDF
var pdfFile = new File(PDF_PATH);
if (!pdfFile.exists) {
    alert("PDF не найден: " + PDF_PATH);
    throw new Error("PDF not found");
}

var doc = app.open(pdfFile);
var pageH = doc.height;
var pageW = doc.width;

// Конвертация документа в CMYK (если он RGB)
try {
    if (doc.documentColorSpace != DocumentColorSpace.CMYK) {
        doc.documentColorSpace = DocumentColorSpace.CMYK;
    }
} catch (e) {
    // Если не получилось — продолжаем, при сохранении AI всё равно отрисуется
}

// Переименовать существующий первый слой как RASTER_BACKGROUND
if (doc.layers.length > 0) {
    doc.layers[doc.layers.length - 1].name = "RASTER_BACKGROUND";
}

// Создать слои поверх
var layerLogo = doc.layers.add();
layerLogo.name = "LOGO_FILLS_VECTOR";

var layerFlavor = doc.layers.add();
layerFlavor.name = "FLAVOR_NAME_VECTOR";

var layerVolume = doc.layers.add();
layerVolume.name = "VOLUME_VECTOR";

// === Подобрать шрифт (fallback) ===
function pickFont() {
    var candidates = ["Inter-Black", "SFProDisplay-Black", "HelveticaNeue-Bold", "Helvetica-Bold", "Helvetica"];
    for (var i = 0; i < candidates.length; i++) {
        try {
            var f = app.textFonts.getByName(candidates[i]);
            if (f) return f;
        } catch (e) {}
    }
    return app.textFonts[0];
}
var bodyFont = pickFont();

// === ФИЛЛС вектор ===
var fillsText = layerLogo.textFrames.add();
fillsText.contents = "ФИЛЛС";
fillsText.textRange.characterAttributes.textFont = bodyFont;
fillsText.textRange.characterAttributes.size = FILLS_FONT_SIZE;
fillsText.textRange.characterAttributes.tracking = -30;

// Цвет — тёплый коралл CMYK
var coralFills = new CMYKColor();
coralFills.cyan = 0;
coralFills.magenta = 58;
coralFills.yellow = 55;
coralFills.black = 8;
fillsText.textRange.characterAttributes.fillColor = coralFills;

// Позиция: Illustrator Y — снизу. Центрируем по визуальному центру букв.
var fillsBounds = fillsText.geometricBounds; // [left, top, right, bottom] от верха-низа артборда (Y growing up)
var fillsW = fillsBounds[2] - fillsBounds[0];
var fillsH = fillsBounds[1] - fillsBounds[3];
fillsText.position = [
    FILLS_CENTER_X - fillsW / 2,
    pageH - FILLS_CENTER_Y + fillsH / 2
];

// === Название вкуса ===
var white = new CMYKColor();
white.cyan = 0; white.magenta = 0; white.yellow = 0; white.black = 0;

function addFlavorLine(text, yFromTop) {
    var t = layerFlavor.textFrames.add();
    t.contents = text;
    t.textRange.characterAttributes.textFont = bodyFont;
    t.textRange.characterAttributes.size = FLAVOR_FONT_SIZE;
    t.textRange.characterAttributes.tracking = 300;
    t.textRange.characterAttributes.fillColor = white;
    var b = t.geometricBounds;
    var w = b[2] - b[0];
    var h = b[1] - b[3];
    t.position = [
        FLAVOR_CENTER_X - w / 2,
        pageH - yFromTop + h / 2
    ];
    return t;
}
addFlavorLine(FLAVOR_LINE_1, FLAVOR_LINE1_Y);
addFlavorLine(FLAVOR_LINE_2, FLAVOR_LINE2_Y);

// === 330мл ===
var volume = layerVolume.textFrames.add();
volume.contents = "330мл";
volume.textRange.characterAttributes.textFont = bodyFont;
volume.textRange.characterAttributes.size = VOLUME_FONT_SIZE;
volume.textRange.characterAttributes.tracking = 100;
volume.textRange.characterAttributes.fillColor = white;
var vb = volume.geometricBounds;
var vw = vb[2] - vb[0];
var vh = vb[1] - vb[3];
volume.position = [
    VOLUME_CENTER_X - vw / 2,
    pageH - VOLUME_CENTER_Y + vh / 2
];

// === Сохранение ===
var saveOpts = new IllustratorSaveOptions();
saveOpts.compatibility = Compatibility.ILLUSTRATOR17;
saveOpts.pdfCompatible = true;
saveOpts.embedICCProfile = true;

doc.saveAs(new File(OUT_PATH), saveOpts);

alert(
    "Готово!\n\n" +
    "Файл: " + OUT_PATH + "\n\n" +
    "Слои:\n" +
    "  • RASTER_BACKGROUND (исходный растр)\n" +
    "  • LOGO_FILLS_VECTOR (редактируемый ФИЛЛС)\n" +
    "  • FLAVOR_NAME_VECTOR (название вкуса)\n" +
    "  • VOLUME_VECTOR (330мл)\n\n" +
    "Если позиция текста не совпала — подкрути координаты в начале скрипта и перезапусти."
);
