function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

var xiToSong = {
    "126": happyBirthday(),
    "-9": eleven(),
    "-2": turkishMarch(),
    "12": allAmericanHometownBand(),
}

var xiToContent = {
    "126": "Happy Birthday!",
    "-9": `On our first`,
    "-2": `The first time`,
    "12": `Duet time`,
}

function setScene(element) {
    var song = xiToSong[element.innerText];
    document.getElementById("title").innerText = song.name;
    document.getElementById("contentText").innerText = xiToContent[element.innerText];
    document.getElementById("heartText").innerText = element.innerText;
    document.getElementById("heart").onclick = function() {
        heartAnimation();
        song.play();
    }
    closeNav();
}