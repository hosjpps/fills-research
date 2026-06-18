// Добавить оборотную инфу (состав, КБЖУ, изготовитель, QR, штрихкод, lytkarin.ru)
// в ТЕКУЩИЙ открытый документ. Новый слой INFO_BACK. Ручные правки не трогает.
// Запуск: открой свой .ai → Файл → Сценарии → Другой сценарий → этот файл

#target illustrator

if (app.documents.length === 0) {
    alert("Открой свой .ai файл сначала, потом запускай скрипт.");
} else {

var doc = app.activeDocument;
var W = doc.width;
var H = doc.height;

var QR_PATH      = "/Users/mac/Documents/ЛытракинЪ продукция /assets/qr.jpg";
var BARCODE_PATH = "/Users/mac/Documents/ЛытракинЪ продукция /assets/barcode.jpg";

// Слой
var layer = doc.layers.add();
layer.name = "INFO_BACK";

// Шрифт
function pickFont() {
    var c = ["Inter-Regular","HelveticaNeue","Helvetica","ArialMT","Arial-Regular"];
    for (var i=0;i<c.length;i++){ try{var f=app.textFonts.getByName(c[i]); if(f) return f;}catch(e){} }
    return app.textFonts[0];
}
var font = pickFont();

var black = new CMYKColor();
black.cyan=0; black.magenta=0; black.yellow=0; black.black=100;

// --- Левая колонка: вёрстка по образцу оригинала ---
// Все координаты в points от низа (Illustrator Y up). Кладём в левую часть.

var marginL = W * 0.035;        // левый отступ
var colW    = W * 0.26;         // ширина колонки текста
var topY    = H * 0.93;         // верх колонки (от низа документа)

var fontSizeTitle = H * 0.0125;
var fontSizeBody  = H * 0.0115;

// QR + lytkarin.ru сверху колонки (рядом с названием)
var qrSize = W * 0.05;
var qr = layer.placedItems.add();
qr.file = new File(QR_PATH);
qr.embed();
qr.width = qrSize; qr.height = qrSize;
qr.position = [marginL + colW*0.45, topY];

// Название напитка (слева от QR)
function areaText(content, x, yTop, w, h, size) {
    var rect = layer.pathItems.rectangle(yTop, x, w, h);
    var tf = layer.textFrames.areaText(rect);
    tf.contents = content;
    var ca = tf.textRange.characterAttributes;
    ca.textFont = font;
    ca.size = size;
    ca.fillColor = black;
    ca.autoLeading = false;
    tf.textRange.paragraphAttributes.leading = size * 1.15;
    return tf;
}

var titleTxt =
"Напиток безалкогольный слабогазированный на пряно-ароматическом растительном сырье «ФИЛЛС» (клубника, базилик)";
areaText(titleTxt, marginL, topY, colW*0.42, H*0.10, fontSizeTitle);

// lytkarin.ru под QR
var url = layer.textFrames.add();
url.contents = "lytkarin.ru";
url.textRange.characterAttributes.textFont = font;
url.textRange.characterAttributes.size = fontSizeBody;
url.textRange.characterAttributes.fillColor = black;
url.position = [marginL + colW*0.45, topY - qrSize - H*0.008];

// Состав + КБЖУ + срок + изготовитель — один блок area text
var bodyTxt =
"Состав: вода подготовленная (исправленная), сукралоза, сок клубники, ароматизатор клубники и базилика, лимонная кислота, бензоат натрия.\r" +
"\r" +
"Пищевая ценность в 100 г: Белки — 0 г, жиры — 0 г, углеводы — 6,6 г. Энергетическая ценность — 26 ккал / 110 кДж.\r" +
"\r" +
"Срок годности 365 суток с даты розлива при температуре от +4 до +20 °C, при влажности не более 85 %. После вскрытия банки хранению не подлежит.\r" +
"\r" +
"Изготовитель: ООО «ЗДОРОВОЕ ПРОСТРАНСТВО» Юр. адрес: 125284, г. Москва, вн.тер.г. муниципальный округ Беговой, ул. Беговая, д. 13, помещ. 8П. Факт. адрес: 140080, Россия, Московская обл., Лыткарино г.о., г. Лыткарино, тер. Детский городок ЗИЛ, стр. 39/1. Страна происхождения: Российская Федерация. Изготовлено в соответствии с ГОСТ 28188-2014.";

var bodyTop = topY - H*0.11;
areaText(bodyTxt, marginL, bodyTop, colW, H*0.62, fontSizeBody);

// Штрихкод внизу колонки
var bcW = W * 0.11;
var bcH = bcW * (350/1031);
var bc = layer.placedItems.add();
bc.file = new File(BARCODE_PATH);
bc.embed();
bc.width = bcW; bc.height = bcH;
bc.position = [marginL, bodyTop - H*0.60];

alert(
    "Готово!\n\n" +
    "Добавлен слой INFO_BACK:\n" +
    "  • Название напитка\n" +
    "  • Состав / КБЖУ / срок / изготовитель\n" +
    "  • QR-код\n" +
    "  • lytkarin.ru\n" +
    "  • Штрихкод\n\n" +
    "Всё в левой части. Выдели слой INFO_BACK целиком → подвинь/масштабируй под свою раскладку.\n" +
    "Текст — живой, редактируемый. QR/штрихкод — растровые картинки из оригинала."
);

}
