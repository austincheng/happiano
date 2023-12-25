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

function setScene(xi) {
    var currentXi = document.getElementById("heartText").innerText;
    document.getElementById(currentXi).style.fontWeight = "normal";

    document.getElementById("title").innerText = xi.title[window.navigator.language];
    document.getElementById("contentText").innerText = xi.message[window.navigator.language];
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



