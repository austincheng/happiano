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
        "collage_photos/-9.jpeg"
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
        "collage_photos/-2.jpg"
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
        "collage_photos/12.jpeg"
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
        "collage_photos/30.jpeg"
    ),
    new Xi(
        "31",
        niBeiXieZaiWoDeGeLi(),
        `There's so much to enjoy in life when I'm around you, even the simple things. As long as you're around me, I feel like I can do anything and \
        it makes everday life a pleasure to enjoy. I used to not enjoy driving very much, especially my hour-long commute to and from work, which used \
        to be a tedious and tiring chore for me, especially in the early morning and after a long day of work. I was so excited to hear that your home \
        and work was on the way for my commute to work, and after eventually mustering up the courage to ask if you want to carpool, I was beyond elated \
        when you agreed. The previous night I was so happy that I couldn't fall asleep and in the morning, for the first time I was looking forward to going \
        to work. These days, I still feel so lucky that when I wake up, the first thing I get to see is the face of my beautiful girlfriend, and I feel so \
        lucky that you still accompany me on my way to and from work. Even before we got together, there was even a period of time where we would call \
        each other on our way to and from work, and even when you're not physically by my side, I still feel your presence and it makes everything better. \
        We are able to find ways to make our lives more fun, like I remember that time when we were just calling on our commutes and I was able to find you \
        through the traffic. Even after all this time, we still happily sing duets in the car, holding hands and enjoying the loving ride, and I will never get \
        tired of your presence around me. Like the title of the song "你被寫在我的歌裡" says, you are written into the song of my life and love story, so no matter \
        where we are, I can always feel and hear your loving presence, making everything in life infinitely times better.`,
        "collage_photos/31.jpg"
    ),
    new Xi(
        "33",
        dontYouKnowYet(),
        `As we learn more and more songs, we find more and more songs that describe our love story, as if the world is pulling us together \
        and describing our story. I love reminiscing about our "小時候", and why it took so long for the world to bring us together, the whole time \
        thinking to tell you "不要告訴我的你還不知道 I love you baby."`,
        "collage_photos/33.jpeg"
    ),
    new Xi(
        "34",
        whyNotLove(),
        `The more I spend time with you, the more fun we have together and the more I love you, as we have more and more shared experiences. \
        The first time I learned a Chinese rap verse with you was from "你怎麼還不愛", and it always makes me so happy when I see the joy on your \
        face when I learn a new song, especially the tougher Chinese raps. I like this song especially because it reminds me of our love story, where \
        when you said you needed two weeks before we got together, I kept thinking to myself "你怎麼還不愛？"`,
        "collage_photos/34.jpeg"
    ),
    new Xi(
        "37",
        dimples(),
        `I feel so lucky I get to live in a world with you in it, and I am able to see your face everyday, whether it be face-to-face, through video call, or \
        just through pictures. Everytime I look at you, I fall more and more in love and wonder how life treated me with the most beautiful girl in the world \
        to be my girlfriend. I remember very early on, when I saw you walk into the badminton courts, my heart would flutter and I couldn't stop staring, losing \
        focus of my badminton game. I remember seeing your eyes sparkle and thinking about how cute you are with your fair and round cheeks and large, circular glasses. \ \
        I love the way your gorgeous hair flows, and you always pull them back with a hair band and tie them when you play badminton, and no matter how you style \
        your hair, I'm always mesmerized by the attractiveness. When you look back at me and acknowledge me with a smile, it feels like the world completely stops and \
        is lit up by the radiance of your beaming happiness. Then, your one-sided "小酒窩" appears and I remember thinking how unique it is, and I felt like it was the \
        cutest thing I ever seen. Then your smile exposes your teeth, and the cuteness just multiplies, and I see your "tiger tooth" and you somehow just keep getting \
        cuter and cuter. The first time I noticed your "tiger tooth", I really was in awe and I couldn't stop looking at how cute you are, and in that moment, I remember \
        feeling like I was no longer shy and I just couldn't resist continuously complimenting you. Whenever I see you, you really do get prettier and prettier everytime, \
        and it always makes me want to stop and take a photo, making my phone storage full of your stunning face, and allowing myself to enjoy your beauty at any time. \
        You also are so good at posing for photos, and making so many different kinds of faces and smiles, and somehow every expression you make is the most wonderful \
        thing I've ever seen. Even after all this time and seeing your face millions of times, I still wonder how such a heavenly and dreamy goddess can walk this earth, \
        and no matter how many times I look at you, I will never get tired of your beauty.`,
        "collage_photos/37.jpeg"
    ),
    new Xi(
        "38",
        lianXiAiQing(),
        `It always feels like our relationship is a dream, as I feel like you are the perfect girlfriend anyone can ask for, and so much in our relationship \
        goes smoothly and exactly how I want it. Of course as with anything in life, there will be setbacks and things that are out of our control, but our \
        love is so powerful that it can endure anything and we are able to get through anything together. We are able to learn and grow together from these \
        experiences, and it only makes our love get stronger and stronger. It's definitely a shame that I am not able to spend your birthday this year physically \
        with you, and I'm so sorry it turned out this way, but I'm hoping I will be able to make it up with you. I am excited to always learn to love with you, \
        grow together in experiences, and continue to "練習愛情".`,
        "collage_photos/38.jpeg"
    ),
    new Xi(
        "39",
        youDianTian(),
        `I really love how our relationship became so sweet and open with each other, constantly embracing, saying loving words, and sticking to each other like \
        sweet honey. I keep wanting to tell you how much I love you and how much I appreciate you, and I think we can never say it enough. Even in front of other \
        people, I'm usually very shy and don't like to show too much about myself, but when I'm with you, the love is so overwhelming that it's hard to resist \
        our sweetness, and I just feel like I always want to show my sweet love in front of you. Hopefully our friends don't find it too annoying when we "閃瞎", \
        but it's just so hard to resist getting close to you and becoming sweet with you. We are not just "有點甜", we are definitely "非常甜".`,
        "collage_photos/39.jpeg"
    ),
    new Xi(
        "41",
        iWillBeByYourSide(),
        `My happiness is really immeasurable when I'm with you, that I never want to leave your side, and even when we're apart for a little bit, I always feel like \
        a part of me is missing. Whenever you had to go on a business trip, or when we have to be apart now for vacations and trips, my life becomes so much more empty. \
        I always want to be by your side and even when I'm with you, I always want to be as physically close to you as possible, always wanting to sit next to you, \
        holding hands, and hugging, even when I'm driving. Although a month isn't too long in the grand scheme of things, this month of time while we're apart feels \
        like an eternity and I miss everything about you and lack the loving sweetness that makes life so much better. I also keep feeling helpless when you \
        have struggles and I can't be there to protect you or help you. In the future, I promise "我會在你身邊" so that we can walk together in loving embrace until eternity.`,
        "collage_photos/41.jpeg"
    ),
    new Xi(
        "49",
        messedUp(),
        `When we first started learning duets, I remember only wanting to sing love songs or songs that actually described our story and how much we love each other. \
        However, at some point I realized that no matter what gets in the way, no matter what other people say, no matter what the world around us does, our love will \
        continuously get stronger. Although I still feel like singing love songs while looking into your eyes is romantic and makes my mood very good, we definitely \
        don't need songs to prove our love as our love stands strong no matter what. The first non-love song we learned was "Messed Up", and I still think it's so fun \
        to sing at karaoke or performing in front of other people.`,
        "collage_photos/49.jpeg"
    ),
    new Xi(
        "50",
        zhiShanShanLaiChiDeNi(),
        `I remember the first time hearing you sing casually was on the car ride from the day we watched Mission Impossible, where you just casually sang along with some \
        K-pop songs. Even though you weren't very familiar with the lyrics, I still remember how fun you make everything and you just radiate the vibe of a joyful flow of \
        sunshine, even when just singing casually. When I finally got to carpool and hear you sing more songs, I absolutely fell in love with your voice and your singing voice \
        is warm yet heavenly. Not only are you an extremely talented singer, you also memorized the lyrics to basically every song, and it's so cool hearing you sing song after \
        song without messing up tune or lyrics. Even rap songs with rap verses that are a few minutes long, you manage to keep up and continuously put on a show of fantasic music. \
        I'm so fortunate to have such a beautiful voice be my duet partner, and it's a pleasure hearing you sing every day in the car. I remember one of the first times we carpooled, \
        we switched over to listening to your music for the first time, and it made my day hearing you sing properly for the first time. I'm so glad we decided to switch from my music \
        to your music, as we now have so many songs we can sing together as duets. One of the first songs I remember hearing you sing was "致姗姗来迟的你", and I loved the way you \
        seamlessly transitioned from singing to rapping, and your rapping of this song I think is espcially cool. I love seeing you perform more and more talents, from \
        playing piano, singing, and rapping to playing ping-pong and badminton, and I can't wait to discover every part of my amazing girlfriend.`,
        "collage_photos/50.jpeg"
    ),
    new Xi(
        "51",
        loveDoesntNeedToPretend(),
        `I'm so glad we started to explore more and more kinds of songs, and taking on more and more challenges in songs. "愛不需要裝乖" was the first time \
        I learned an extensive rap with you, and I found it so fun to learn with you. Hearing you do the rap is so cool, and I'm so happy you are there to \
        guide and teach me the more difficult songs and raps. As an added bonus, you teach me so much Chinese when learning these songs, especially the more \
        complex raps, and it's so fun having an activity to do together that is both fun and educational. I'm looking forward to learning more and more with you \
        and taking on more and more challenges while discovering new activities with you!`,
        "collage_photos/51.jpeg"
    ),
    new Xi(
        "59",
        aiDeZhuXuanLu(),
        `The first time you went on a business trip was pretty tough for me, since I had gotten so accustomed to you being around, and I felt like I forgot \
        how to live without you. I lost motivation to do many things, like going to work became a chore again and I didn't really have much motivation to \
        learn songs anymore. You really make my life so much better by being my encouragement and support, and I felt lost again with you. The day you were coming \
        back from the business trip, I remember thinking I was supposed to learn many songs and surprise you with my progress when you got back. However, I ended \
        up procrastinating and I tried cramming learning the song "愛的主旋律" the day you were getting back. I found that after much practice in learning songs \
        and having a wonderful singing teacher helped me a lot, as I was not only able to finish learning the song, I was also able to learn another song.`,
        "collage_photos/59_1.jpeg"
    ),
    new Xi(
        "59",
        liangShanBoYuZhuLiYe(),
        `Whenever you go on a trip, I always hope to learn some songs and I always hope to surprise and impress you with my progress. You are such an amazing \
        girlfriend that I always try to find ways to keep up with your awesomeness, so I keep trying to find ways to show off in front of you. I tried learning \
        "梁山伯與茱麗葉" before you got back from your trip, and I was surprised by how fast I started learning songs now, as I was able to learn two songs in one day. \
        I also remember everytime you come back from your trip, I get so nervous to perform in front of you, wanting to show you my best and show you how fast \
        I learn songs. Fortunately for that day, even though I tried cramming two songs in one day, I think I still did relatively well hehe."`,
        "collage_photos/59_2.jpeg"
    ),
    new Xi(
        "62",
        nianNian(),
        `One of my favorite songs now is "黏黏", as I think it encapsulates our love pretty well. Even though the lyrics are fairly typical, as they just \
        describe wanting to spend every minute and every second with you, I think the part that I love about this song is that it's not an exaggeration and \
        the words used in the song are exactly how I'd describe it. I think "黏" is a very fitting description for our relationship, and I always feel like \
        I'm overly clingy to you, but you always assure me that you like me being this way and that I have to be this way towards you forever. It honestly \
        makes me so happy when you say that, since I can just continue being myself and continue having the very best sweet and loving relationship with you. \
        People say we may start to get tired of each other and the honeymoon period will eventually end, but even after spending every second with you, not only \
        am I not tired at all, I always want more no matter how much time we've already spent together. I will never get tired of you by my side and I wish I can \
        be stuck to you forever.`,
        "collage_photos/62.jpeg"
    ),
    new Xi(
        "63",
        shaXiao(),
        `Even though we've only been together for four months, I think it's amazing that we were lucky enough to go on trips together already, such as our \
        trip to Hawaii and the fun we were able to have in Taiwan. I love exploring new places with you, seeing beautiful landmarks, and enjoying amazing views, \
        all while by your side, holding your hand, as if I get to walk the world around us while holding my world in front of me. I love taking pictures everywhere \
        with you, since we get to capture our loving relationship in so many cool places. I also think it's so cool how great of a photographer you are, and you are \
        always teaching me new things on better ways to capture the moments. I'm so appreciative that you are patient with me and are willing to teach me so much, so \
        that I don't just make the same "傻笑" for every photo.`,
        "collage_photos/63.jpeg"
    ),
    new Xi(
        "81",
        rewriteTheStars(),
        `There are so many places we get inspiration for new duets to learn, and I was glad when we finally learned a song that I already knew and that it was \
        an English song, "Rewrite the Stars". I love musicals and I'm happy we finally found a song that we both knew, and I think we can probably take more \
        inspiration from musicals, since you already know how much I love "Hamilton". The day we got to watch "Hamilton" together was so fun, and I'm hoping \
        we can watch more movies and musicals together, and maybe find new songs in them to learn together.`,
        "collage_photos/81.jpeg"
    ),
    new Xi(
        "83",
        imAlive(),
        `The last song we learned before heading to our winter trips and Taiwan was "I'm Alive". I remember thinking I can probably start learning this before going \
        to Taiwan so that I can have the whole time in Taiwan to learn it, since this is one of the toughest raps. However, I was so surprised how fast I ended \
        up learning the song, as I finished learning the song before even heading to Taiwan. Our power of love definitely helps us in so many ways and helps us \
        accomplish so many things together. I was so proud to learn this song and I'm so proud to have you as a girlfriend to perform this song with me, as even \
        my mom was impressed to hear us perform this song. In retrospect, I'm glad we finished learning the song before heading to Taiwan since I didn't end up \
        having much time to learn songs in Taiwan, and if I hadn't finished learning we wouldn't be able to perform it for my mom. I'm also glad we freed up some \
        time to have fun together in Taiwan, and all the experiences we had all over Taiwan from Taipei to Taoyuan to Taichung to Tainan were so fun and will forever \
        be beloved memories. I'm looking forward to making more memories with you and exploring more places around the world with you, and even though we don't \
        have time to learn new songs while vacationing, I'm also looking forward to learning new songs and discovering new activities with you.`,
        "collage_photos/83.jpeg"
    ),
    new Xi(
        "126",
        happyBirthday(),
        `My dearest and most precious 的最親愛的可可愛愛寶貝 baby,
        Happy 26th birthday! I know you don't like talking about our age gap and getting old, but I like to think about it as us growing older and \
        learning together, our love getting stronger, and experiencing life together, forming fond memories, and writing the most beautiful and precious \
        life story there ever was. Ever since the very first moment I met you, you've brought an immense amount of joy into my life and you truly changed my \
        life for the better, being my sturdy support in every situation, guiding me through struggles and life, and shaping my personality and behavior into \
        a better person. I always like to think back to the moment we met and before we got together and wonder how such a seemingly innocent meeting flourished \
        into the sweetest relationship we have now. The more I think about it, the less I need to wonder, since it seems like we are meant to be together and that \
        it was always going turn out this way, as us being together is the way things are supposed to be. It really feels as if life, fate, and everything in \
        the world is pulling us together, and we always find our way back to each other, and no matter what happens, we always end up loving each other more than ever. \
        You really are the perfect key to my lock, and you are the only person who can open the door to my heart. I really appreciate how patient you are with me \
        when I don't act like the way you are used to, and how you are so accepting of my many quirks, and how you are always there for me and supporting me when \
        I'm having a tough time. I also appreciate when you teach me new things, when you are very willing to share everything about you and your days, when you \
        show me new fun activities to do together, and how comfortable, open, and honest you are when you are around me. You also do so much for me, like cooking for me, \
        buying and picking clothes for me, doing chores around the house, cutting my hair, and there really are an endless amount of things I'm grateful for. \
        You also take care of me when I'm not feeling well, when I get injured, or the very rare times I get drunk, and I honestly can't appreciate you enough \
        for everything you do for me. You truly are the most generous, caring, supportive, fun, talented, smart, savvy, candid, patient person I've ever met, and I \
        can't find a suitable way to describe you other than the best and perfect girlfriend. It continuously amazes me more and more of how much of a perfect \
        girlfriend you are, and somehow you just keep getting better and better. You really entered my life at the perfect time and I'll be forever grateful that you did, \
        as I finally feel like a big hole in my life has been filled. Ever since we started texting and getting to know each other more, you were always \
        willing to accompany me and spend so much time out of your day to make me happy. I'm generally very shy, not great at social interactions, and slow at \
        texting, but you were very patient with me, and you make me feel comfortable to talk with you and be around you, slowly bringing me out of my shell from \
        texting to audio messages to phone calls to video calls to face-to-face interactions. I often feel socially anxious and overthink a lot of things when \
        I'm around other people, which is why I also don't like texting too much, but you completely changed everything for me. You were one of the first people \
        I actually enjoyed texting with, and nowadays I feel like you're the only person in the world with whom I can truly be myself around. Sometimes it feels as if \
        you're not really another person, but rather an extension of myself, a part of me that I was missing for most of my life, so it's so easy to be myself around you \
        since I don't have any of the worries I usually have in social situations. This has also extended to my everyday life, especially when I'm around you, where \
        I start to feel less and less shy, as you are always so encouraging and supportive, and it makes me feel more confident about myself. You always believe in me \
        and never judge me for any of my strange behaviors, and it makes my life so much less anxious. Nowadays, when we are together with other people, I'm so overwhelmed \
        by our love that I no longer feel shy and feel like our love is the one part of my life I never want to hide. Nothing else matters when I'm with you, and I often \
        completely lose track of our surroundings and only want to focus on you and our love. Sometimes I remember how amazing of a girlfriend you are and just lose \
        myself in your eyes and keep staring at you in public, especially after a day of not seeing you. In those moments I just completely forget that I'm usually shy, \
        and a lot of the times when we do something affectionately in public, I think it's funny how it often ends up with you being more shy than me. When you're not around, \
        I really can't stop thinking about you and thinking about how much I love you, so when you are with me, I feel like I want to keep saying I love you, and it's often \
        hard to resist saying it in front of other people. The times that we are together are always so fond, sweet, and affectionate and even though we spend a lot \
        of time together already, it never fails to make me happy and it always leaves me longing for more. It really feels like everyday is our honeymoon, as I somehow \
        fall in love with you again and again everyday. Your personality is so positive and outgoing that you make everyone's lives around you so much better, and your beauty, \
        cuteness, and bubbly behavior makes everyone want to get close to you. I know for me it's often hard to stop staring and admiring your personality and beauty, and I \
        feel like the luckiest person in the world because I get to enjoy your presence the most, and no matter how much time I spend with you, I always feel like it's never enough \
        and I'll never get tired of it. Because I keep wanting to spend time with you, I remember always trying to find excuses to try to get more time with you, and I wanted to \
        actively find romantic activities to do together. However, eventually I realized that it really doesn't matter what we're doing, as our power of love is so strong that \
        we always find ways to make anything romantic, sweet, and affectionate. I started to enjoy even the simple things and even the things that I never liked to do. I keep \
        imagining our bright future as I envision spending everyday with you, enjoying every part of life with you.

        Through our many activites and time we spent together, we have formed so many loving memories and I always find it enjoyable to look back and think about \
        our experiences together. One of our most beloved activites is playing music together, whether it be playing piano or singing duets, and in honor of this, I have placed \
        a piano below so that we can play and practice from anywhere. We are writing the best life story ever together, and I hope you enjoy our life story so far \
        with stories told through our songs or inspired by our songs. I am looking forward to writing every single 夕 with you into our life story until eternity.
        I love you so much forever and always <3
        With much love and yours truly,
        Your 寶貝`,
        undefined
    )

]

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

    document.getElementById("title").innerText = xi.song.name;
    document.getElementById("contentText").innerText = xi.content;
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



