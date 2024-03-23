function showAlert() {
    alert("Hello, world!");
}

function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function makeTextUppercase() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;

    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length > 0) {
            var words = sentence.split(" ");
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    text = sentences.join(". ");
    textArea.value = text.toUpperCase();
}

function changeTextStyle() {
    var fancy = document.getElementById("FancyShmancy").checked;
    var textArea = document.getElementById("textArea");

    if (fancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        //alert("Fancy Shmancy selected");
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        //alert("Boring Betty selected");
    }
}