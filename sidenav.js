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

function setScene(element) {
    var song = xiToSong[element.innerText];
    document.getElementById("title").innerText = song.name;
    closeNav();
}