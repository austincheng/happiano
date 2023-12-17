function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

class Xi {
    constructor(xi, song, content, img) {
        this.xi = xi;
        this.song = song;
        this.content = content;
        this.img = img;
    }
}

var xis = [
    new Xi(
        "126",
        happyBirthday(),
        "Happy Birthday!",
        undefined
    ),
    new Xi(
        "-9",
        eleven(),
        `It's funny how what we'd probably consider our "first date" wasn't even supposed to be a "date". Neither of us \
        had to explicitly make a move, but ever since we started texting, there was definitely a connection and that spark \
        grew so large that the world finally set us up for an amazing night. I'm so glad it turned out this way, and that day \
        was filled with so much excitement and joy, where I felt so comfortable to be around you, feeling like I never want to \
        leave your side. That day I felt like the world was just us two, with carefree enjoyment, and the world around us surrounded \
        by playful butterflies and colorful rainbows, all singing melodic tunes to grow the affectionate feelings in our hearts. \
        One such song was IVE's "Eleven", which played at the Korean BBQ restaurant we were at, and after finally feeling comfortable \
        enough to sing in front of you, I sang this song for you as well. You said you enjoyed my singing of this song in particular, \
        and much like you do every day of my life, you give me confidence, strength, and comfort in everyday life. You really do "make \
        me feel like eleven".`,
        "photos/collage_photos/-9.jpeg"
    ),
    new Xi(
        "-2",
        turkishMarch(),
        `You really make my life so much better, and ever since I met you, I felt like you radiate a big glow of happiness \
        for everyone around you, and it makes me feel difficult when I'm not by your side. At some point we both knew exactly where \
        life was going to take us, and I felt such a strong attraction that I couldn't wait to be with your forever, and yet you asked \
        me to wait for two weeks before officially labeling us together. A few days later, we went shopping together and even though \
        we hadn't officially defined anything, it felt like we were a couple for the first time. That day, I also played piano in front \
        of you for the first time, where I played my signature song "Turkish March". Two days later, we ended up officially getting together, \
        and I think we both couldn't wait the full two weeks. Since then, we both enjoyed many piano sessions together, but we do need to \
        practice more :) (I also think it's cool that the first time I played piano with you was "Turkish March", and during your first birthday \
        together, it's my first time going to Turkey.)`,
        "photos/collage_photos/-2.jpg"
    ),
    new Xi(
        "12",
        allAmericanHometownBand(),
        `I feel like our connection was so strong ever since the beginning and fate was pulling us so close together, that we didn't \
        really have a dating period before we got together. Anything we do together and every moment I spend with you feels so sweet, loving, \
        enjoyable, and romantic that we seemingly got so close so fast. I'm much more of a romantic, so I felt like I wanted to plan actual \
        dates with you, going on unique adventures, exploring the world together, and creating everlasting memories. So, we needed to establish \
        Sunday as our official date day. On our first Sunday together, we finally had our first formal date night, and we ended the night with \
        our first piano session together, and we started learning a piano duet together, "The All-American Hometown Band".`,
        "photos/collage_photos/12.jpeg"
    ),
    new Xi(
        "30",
        elopingToTheMoon(),
        `Everyday I become more and more excited at the thought of experiencing life together with you, finding activities to do together, \
        spending romantic time together, and writing more and more into our life story. I become increasingly convinced that we are the perfect \
        couple, realizing more and more how compatible we are and how we are the only fit for each other. One of our most beloved activities that \
        I enjoy doing with you so much is our singing duets together, which is not only enjoyable, but I think we are also able to learn from these \
        experiences together. The first song we learned together was "私奔到月球", which perfectly describes our compatability and constant bond to be \
        together, hoping one day we can "私奔到月球" and be worry-free and spend the rest of our lives together in eternal bliss.`,
        "photos/collage_photos/30.jpeg"
    ),
    new Xi(
        "31",
        niBeiXieZaiWoDeGeLi(),
        `Driving to work chore`,
        "photos/collage_photos/31.jpg"
    ),
    new Xi(
        "33",
        dontYouKnowYet(),
        `As we learn more and more songs, we find more and more songs that describe our love story, as if the world is pulling us together \
        and describing our story. I love reminiscing about our "小時候", and why it took so long for the world to bring us together, the whole time \
        thinking to tell you "不要告訴我的你還不知道 I love you baby."`,
        "photos/collage_photos/33.jpeg"
    ),
    new Xi(
        "34",
        whyNotLove(),
        `The more I spend time with you, the more fun we have together and the more I love you, as we have more and more shared experiences. \
        The first time I learned a Chinese rap verse with you was from "你怎麼還不愛", and it always makes me so happy when I see the joy on your \
        face when I learn a new song, especially the tougher Chinese raps. I like this song especially because it reminds me of our love story, where \
        when you said you needed two weeks before we got together, I kept thinking to myself "你怎麼還不愛？"`,
        "photos/collage_photos/34.jpeg"
    )
]

function setupSidenav() {
    var sidenav = document.getElementById("sidenav");

    for (var i in xis) {
        let xi = xis[i];
        var a = document.createElement("a");
        a.innerText = xi.xi;
        a.setAttribute("href", "javascript:void(0)");
        a.onclick = function() {
            if (!document.getElementById("keyboard").classList.contains("playing")) {
                setScene(xi);
            }
        }
        if (i == 0) {
            setScene(xi);
        }
        sidenav.appendChild(a);
    }
}

function setScene(xi) {
    document.getElementById("title").innerText = xi.song.name;
    document.getElementById("contentText").innerText = xi.content;
    if (xi.img != undefined) {
        document.getElementById("contentImage").src = xi.img;
        document.getElementById("contentImage").visibility = "visible";
    } else {
        document.getElementById("contentImage").src = "";
        document.getElementById("contentImage").visibility = "hidden";
    }
    
    document.getElementById("heartText").innerText = xi.xi;
    document.getElementById("heart").onclick = function() {
        heartAnimation();
        xi.song.play();
    }
    closeNav();
}