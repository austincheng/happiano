function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function setupSidenav() {
    var sidenav = document.getElementById("sidenav");

    for (var i in xis) {
        let xi = xis[i];
        var a = document.createElement("a");
        a.innerText = xi.xi;
        a.setAttribute("href", "javascript:void(0)");
        a.setAttribute("id", xi.xi)
        a.onclick = function() {
            if (!document.getElementById("keyboard").classList.contains("playing")) {
                setScene(xi);
            }
        }
        sidenav.appendChild(a);

        if (xi.xi === "126") {
            setScene(xi);
        }
    }
}

function getOrEnglish(string) {
    var language = window.navigator.language;
    if (!(language in string) || string[language] == "") {
        language = "en-US";
    }
    return string[language];
}

function setScene(xi) {
    var currentXi = document.getElementById("heartText").innerText;
    if (currentXi != "") {
        document.getElementById(currentXi).style.fontWeight = "normal";
    }

    var language = window.navigator.language;
    if (!(language in xi.title) || xi.title[language] == "") {
        language = "en-US";
    }
    document.getElementById("title").innerText = getOrEnglish(xi.title);
    document.getElementById("contentText").innerText = getOrEnglish(xi.message);
    
    if (xi.img != undefined) {
        document.getElementById("contentImage").src = xi.img;
        document.getElementById("contentImage").visibility = "visible";
        adjustImageSize();
    } else {
        document.getElementById("contentImage").src = "";
        document.getElementById("contentImage").visibility = "hidden";
        adjustContentMaxHeight();
    }
    
    document.getElementById("heartText").innerText = xi.xi;
    document.getElementById("heart").onclick = function() {
        heartAnimation();
        xi.song.play();
    }

    document.getElementById(xi.xi).style.fontWeight = "bold";
    closeNav();
}



