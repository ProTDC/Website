function openInNewTab() {
    var url = 'https://protdc.itch.io/cubeman';
    window.open(url, '_blank');
}

var texts = [
    "I am a sentence.",
    "Some nice stuff.",
    "I am random too!"
];

document.getElementById('randomText').value = texts[Math.floor(Math.random() * texts.length)];


