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
    "-9": `It's funny how what we'd probably consider our "first date" wasn't even supposed to be a "date". Neither of us \
    had to explicitly make a move, but ever since we started texting, there was definitely a connection and that spark \
    grew so large that the world finally set us up for an amazing night. I'm so glad it turned out this way, and that day \
    was filled with so much excitement and joy, where I felt so comfortable to be around you, feeling like I never want to \
    leave your side. That day I felt like the world was just us two, with carefree enjoyment, and the world around us surrounded \
    by playful butterflies and colorful rainbows, all singing melodic tunes to grow the affectionate feelings in our hearts. \
    One such song was IVE's "Eleven", which played at the Korean BBQ restaurant we were at, and after finally feeling comfortable \
    enough to sing in front of you, I sang this song for you as well. You said you enjoyed my singing of this song in particular, \
    and much like you do every day of my life, you give me confidence, strength, and comfort in everyday life. You really do "make \
    me feel like eleven". `,
    "-2": `You really make my life so much better, and ever since I met you, I felt like you radiate a big glow of happiness \
    for everyone around you, and it makes me feel difficult when I'm not by your side. At some point we both knew exactly where \
    life was going to take us, and I felt such a strong attraction that I couldn't wait to be with your forever, and yet you asked \
    me to wait for two weeks before officially labeling us together. A few days later, we went shopping together and even though \
    we hadn't officially defined anything, it felt like we were a couple for the first time. That day, I also played piano in front \
    of you for the first time, where I played my signature song "Turkish March". Two days later, we ended up officially getting together, \
    and I think we both couldn't wait the full two weeks. Since then, we both enjoyed many piano sessions together, but we do need to \
    practice more :) (I also think it's cool that the first time I played piano with you was "Turkish March", and during your first birthday \
    together, it's my first time going to Turkey.)`,
    "12": `I feel like our connection was so strong ever since the beginning and fate was pulling us so close together, that we didn't \
    really have a dating period before we got together. Anything we do together and every moment I spend with you feels so sweet, loving, \
    enjoyable, and romantic that we seemingly got so close so fast. I'm much more of a romantic, so I felt like I wanted to plan actual \
    dates with you, going on unique adventures, exploring the world together, and creating everlasting memories. So, we needed to establish \
    Sunday as our official date day. On our first Sunday together, we finally had our first formal date night, and we ended the night with \
    our first piano session together, and we started learning a piano duet together, "The All-American Hometown Band".`,
}

var xiToImg = {
    "126": undefined,
    "-9": "photos/collage_photos/-9.jpeg",
    "-2": "photos/collage_photos/-2.jpg",
    "12": "photos/collage_photos/12.jpeg",
}

function setScene(element) {
    var song = xiToSong[element.innerText];
    document.getElementById("title").innerText = song.name;
    document.getElementById("contentText").innerText = xiToContent[element.innerText];
    if (xiToImg[element.innerText] != undefined) {
        document.getElementById("contentImage").src = xiToImg[element.innerText];
        document.getElementById("contentImage").visibility = "visible";
    } else {
        document.getElementById("contentImage").src = "";
        document.getElementById("contentImage").visibility = "hidden";
    }
    
    document.getElementById("heartText").innerText = element.innerText;
    document.getElementById("heart").onclick = function() {
        heartAnimation();
        song.play();
    }
    closeNav();
}