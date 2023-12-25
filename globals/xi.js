class Xi {
    constructor(xi, song, img) {
        if (xi.indexOf("_") != -1) {
            this.xi = xi.substr(0, xi.indexOf("_"));
        } else {
            this.xi = xi;
        }
        this.title = xiToLocaleToTitle[xi];
        this.song = song;
        this.img = img;
        this.message = xiToLocaleToMessage[xi];
    }
}

var xis = [
    new Xi(
        "-9",
        eleven(),
        "collage_photos/-9.jpeg"
    ),
    new Xi(
        "-2",
        turkishMarch(),
        "collage_photos/-2.jpg"
    ),
    new Xi(
        "12",
        allAmericanHometownBand(),
        "collage_photos/12.jpeg"
    ),
    new Xi(
        "30",
        elopingToTheMoon(),
        "collage_photos/30.jpeg"
    ),
    new Xi(
        "31",
        niBeiXieZaiWoDeGeLi(),
        "collage_photos/31.jpg"
    ),
    new Xi(
        "33",
        dontYouKnowYet(),
        "collage_photos/33.jpeg"
    ),
    new Xi(
        "34",
        whyNotLove(),
        "collage_photos/34.jpeg"
    ),
    new Xi(
        "37",
        dimples(),
        "collage_photos/37.jpeg"
    ),
    new Xi(
        "38",
        lianXiAiQing(),
        "collage_photos/38.jpeg"
    ),
    new Xi(
        "39",
        youDianTian(),
        "collage_photos/39.jpeg"
    ),
    new Xi(
        "41",
        iWillBeByYourSide(),
        "collage_photos/41.jpeg"
    ),
    new Xi(
        "49",
        messedUp(),
        "collage_photos/49.jpeg"
    ),
    new Xi(
        "50",
        zhiShanShanLaiChiDeNi(),
        "collage_photos/50.jpeg"
    ),
    new Xi(
        "51",
        loveDoesntNeedToPretend(),
        "collage_photos/51.jpeg"
    ),
    new Xi(
        "59_1",
        aiDeZhuXuanLu(),
        "collage_photos/59_1.jpeg"
    ),
    new Xi(
        "59_2",
        liangShanBoYuZhuLiYe(),
        "collage_photos/59_2.jpeg"
    ),
    new Xi(
        "62",
        nianNian(),
        "collage_photos/62.jpeg"
    ),
    new Xi(
        "63",
        shaXiao(),
        "collage_photos/63.jpg"
    ),
    new Xi(
        "81",
        rewriteTheStars(),
        "collage_photos/81.jpeg"
    ),
    new Xi(
        "83",
        imAlive(),
        "collage_photos/83.jpeg"
    ),
    new Xi(
        "126",
        happyBirthday(),
        undefined
    )
]