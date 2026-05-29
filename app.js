(function () {
  "use strict";

  const CATEGORIES = [
    {
      id: "overall",
      name: "総合人気賞",
      icon: "✦",
      accent: "#35e7ff",
      description: "奈落鯖でもっとも愛される存在を決める中心部門。",
    },
    {
      id: "funny",
      name: "おもしろ賞",
      icon: "☄",
      accent: "#ff4fd8",
      description: "チャットもVCも一瞬で明るくするエンタメ担当。",
    },
    {
      id: "chaos",
      name: "狂人賞",
      icon: "⚡",
      accent: "#ffd66b",
      description: "予測不能なムーブで記憶に残る混沌の主役。",
    },
    {
      id: "vc",
      name: "神対応賞",
      icon: "◌",
      accent: "#47ffb5",
      description: "初心者支援、相談対応、優しさなどで評価された人物。",
    },
    {
      id: "demon",
      name: "新星賞",
      icon: "◆",
      accent: "#8f63ff",
      description: "最近現れたにも関わらず一気に知名度を上げた新人。",
    },
    {
      id: "troublemaker",
      name: "問題児賞",
      icon: "!",
      accent: "#ff496d",
      description: "良くも悪くも“話題の中心”になった人物へ贈られる賞。",
    },
    {
      id: "bomber",
      name: "爆撃機賞",
      icon: "✹",
      accent: "#ff8a35",
      description: "VC・チャット・ゲーム内、全てを破壊級の勢いで荒ら…盛り上げた人物へ。",
    },
    {
      id: "stalker",
      name: "ストーカー賞",
      icon: "◍",
      accent: "#35e7ff",
      description: "気づけば居る。どこに行っても居る。なぜか視界に入る。",
    },
    {
      id: "quote",
      name: "名言製造機賞",
      icon: "“",
      accent: "#ffd66b",
      description: "数々の迷言・格言・黒歴史を生み出した人物へ。スクショ保存率No.1。",
    },
    {
      id: "intense",
      name: "キャラ濃すぎ賞",
      icon: "◈",
      accent: "#ff4fd8",
      description: "存在感が濃すぎて一瞬で覚えられる人物へ。もはや説明不要。",
    },
    {
      id: "evangelist",
      name: "布教王賞",
      icon: "⇡",
      accent: "#47ffb5",
      description: "とにかく奈落鯖を広めまくった人物へ。勧誘力が異常。",
    },
    {
      id: "online",
      name: "ニート疑惑賞",
      icon: "∞",
      accent: "#8f63ff",
      description: "常にオンラインな人物へ。学校・仕事・睡眠の所在は不明。",
    },
    {
      id: "statue",
      name: "石像賞",
      icon: "▣",
      accent: "#9aa9c7",
      description: "VCに居るのに全く喋らない人物へ。でも退出すると寂しい。",
    },
  ];

  const CANDIDATES = [
    {
        "id":  "1487446435854024825",
        "username":  "よーそつじい",
        "title":  "@yousotu3_",
        "bio":  "参加日: 2026-03-28 / Discord ID: 1487446435854024825",
        "avatar":  "https://cdn.discordapp.com/avatars/1487446435854024825/cb7320efcfc5edd529cc38308390b711.png?size=1024",
        "joinedAt":  "2026-03-28 13:55:55",
        "discordUsername":  "yousotu3_",
        "discordId":  "1487446435854024825",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1472397502622859436",
        "username":  "やまそ",
        "title":  "@kusunoki0126_88010",
        "bio":  "参加日: 2026-05-02 / Discord ID: 1472397502622859436",
        "avatar":  "https://cdn.discordapp.com/avatars/1472397502622859436/8c24bdf668f7156e531611c0cc06847a.png?size=1024",
        "joinedAt":  "2026-05-02 13:22:03",
        "discordUsername":  "kusunoki0126_88010",
        "discordId":  "1472397502622859436",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1104282784052289566",
        "username":  "𝔾𝔸𝕐_らー_𝔾𝔸𝕐 #援交",
        "title":  "@ra3ds0309",
        "bio":  "参加日: 2026-02-21 / Discord ID: 1104282784052289566",
        "avatar":  "https://cdn.discordapp.com/avatars/1104282784052289566/e3d3683cbb70d10b76e6e612dafd0302.png?size=1024",
        "joinedAt":  "2026-02-21 09:16:43",
        "discordUsername":  "ra3ds0309",
        "discordId":  "1104282784052289566",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1078994572962701322",
        "username":  "ヘルパーちん細胞",
        "title":  "@yua_y2q",
        "bio":  "参加日: 2025-10-20 / Discord ID: 1078994572962701322",
        "avatar":  "https://cdn.discordapp.com/avatars/1078994572962701322/bbeed83cf576e58b562a9aa20d160b49.png?size=1024",
        "joinedAt":  "2025-10-20 13:31:04",
        "discordUsername":  "yua_y2q",
        "discordId":  "1078994572962701322",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1056594519690313739",
        "username":  "そーめ",
        "title":  "@sobieto1991",
        "bio":  "参加日: 2026-04-25 / Discord ID: 1056594519690313739",
        "avatar":  "https://cdn.discordapp.com/avatars/1056594519690313739/4f6f90ea160ebe9347a0bda5851d793e.png?size=1024",
        "joinedAt":  "2026-04-25 12:05:31",
        "discordUsername":  "sobieto1991",
        "discordId":  "1056594519690313739",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "698773716800372737",
        "username":  "幼ﾝﾎｫ卒。",
        "title":  "@yakekusolsu",
        "bio":  "参加日: 2024-02-21 / Discord ID: 698773716800372737",
        "avatar":  "https://cdn.discordapp.com/avatars/698773716800372737/091eb025519d14d2b55ab40b71560f7b.png?size=1024",
        "joinedAt":  "2024-02-21 08:38:54",
        "discordUsername":  "yakekusolsu",
        "discordId":  "698773716800372737",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1299952297476100199",
        "username":  "ざくころっ！",
        "title":  "@zakukoro_75036",
        "bio":  "参加日: 2026-04-19 / Discord ID: 1299952297476100199",
        "avatar":  "https://cdn.discordapp.com/avatars/1299952297476100199/633501d1dc68a3bf443806637ccd4654.png?size=1024",
        "joinedAt":  "2026-04-19 05:48:57",
        "discordUsername":  "zakukoro_75036",
        "discordId":  "1299952297476100199",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1327260349291827293",
        "username":  "そーた",
        "title":  "@sou005779",
        "bio":  "参加日: 2026-04-22 / Discord ID: 1327260349291827293",
        "avatar":  "https://cdn.discordapp.com/avatars/1327260349291827293/126e6eac80752302cc095629f3097e2e.png?size=1024",
        "joinedAt":  "2026-04-22 08:08:11",
        "discordUsername":  "sou005779",
        "discordId":  "1327260349291827293",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1507281747203588147",
        "username":  "不動前",
        "title":  "@asasio_0025",
        "bio":  "参加日: 2026-05-26 / Discord ID: 1507281747203588147",
        "avatar":  "https://cdn.discordapp.com/avatars/1507281747203588147/fde5c53a8a53767722550cd713d2c6c0.png?size=1024",
        "joinedAt":  "2026-05-26 09:24:32",
        "discordUsername":  "asasio_0025",
        "discordId":  "1507281747203588147",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1479318095322415228",
        "username":  "社不",
        "title":  "@shebu0852",
        "bio":  "参加日: 2026-04-28 / Discord ID: 1479318095322415228",
        "avatar":  "https://cdn.discordapp.com/avatars/1479318095322415228/9a6c16302f767113171c4761a15697d3.png?size=1024",
        "joinedAt":  "2026-04-28 12:01:44",
        "discordUsername":  "shebu0852",
        "discordId":  "1479318095322415228",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "884696708192296990",
        "username":  "あ",
        "title":  "@agwg246",
        "bio":  "参加日: 2026-04-30 / Discord ID: 884696708192296990",
        "avatar":  "https://cdn.discordapp.com/avatars/884696708192296990/858d0d58b065b83e8ce8d89d502db092.png?size=1024",
        "joinedAt":  "2026-04-30 13:54:21",
        "discordUsername":  "agwg246",
        "discordId":  "884696708192296990",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1465007094821290251",
        "username":  "🤔",
        "title":  "@ko077372",
        "bio":  "参加日: 2026-04-23 / Discord ID: 1465007094821290251",
        "avatar":  "https://cdn.discordapp.com/avatars/1465007094821290251/31d367ecd5831245fdbaec32748239de.png?size=1024",
        "joinedAt":  "2026-04-23 08:54:47",
        "discordUsername":  "ko077372",
        "discordId":  "1465007094821290251",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1200983777208442911",
        "username":  "glorious_courgette_13095",
        "title":  "@glorious_courgette_13095",
        "bio":  "参加日: 2026-04-22 / Discord ID: 1200983777208442911",
        "avatar":  "https://cdn.discordapp.com/avatars/1200983777208442911/1628fc11e7961d85181295493426b775.png?size=1024",
        "joinedAt":  "2026-04-22 12:44:23",
        "discordUsername":  "glorious_courgette_13095",
        "discordId":  "1200983777208442911",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1468561594102448230",
        "username":  "たいこ",
        "title":  "@iroha08852",
        "bio":  "参加日: 2026-02-04 / Discord ID: 1468561594102448230",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-02-04 13:54:07",
        "discordUsername":  "iroha08852",
        "discordId":  "1468561594102448230",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1185730031381655572",
        "username":  "De Kommer, Hjælp Os!",
        "title":  "@leaderlanternman",
        "bio":  "参加日: 2026-05-01 / Discord ID: 1185730031381655572",
        "avatar":  "https://cdn.discordapp.com/avatars/1185730031381655572/c943da98a02b29b83340879fb5166ddd.png?size=1024",
        "joinedAt":  "2026-05-01 16:07:08",
        "discordUsername":  "leaderlanternman",
        "discordId":  "1185730031381655572",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1469998712519393484",
        "username":  "おでん",
        "title":  "@shikaku1938",
        "bio":  "参加日: 2026-02-08 / Discord ID: 1469998712519393484",
        "avatar":  "https://cdn.discordapp.com/avatars/1469998712519393484/10f98ab18604dbc7b7d40ca6effa5107.png?size=1024",
        "joinedAt":  "2026-02-08 15:27:57",
        "discordUsername":  "shikaku1938",
        "discordId":  "1469998712519393484",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1455559765085392959",
        "username":  "さちこ",
        "title":  "@sarabu_90380",
        "bio":  "参加日: 2025-12-30 / Discord ID: 1455559765085392959",
        "avatar":  "https://cdn.discordapp.com/avatars/1455559765085392959/c6c1d433e50b2732fd8a428aa867b283.png?size=1024",
        "joinedAt":  "2025-12-30 13:56:51",
        "discordUsername":  "sarabu_90380",
        "discordId":  "1455559765085392959",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1456923107909570612",
        "username":  "るーねー",
        "title":  "@rune9191",
        "bio":  "参加日: 2026-05-07 / Discord ID: 1456923107909570612",
        "avatar":  "https://cdn.discordapp.com/avatars/1456923107909570612/028d06c1c9f388e25752a81fd5c8b08d.png?size=1024",
        "joinedAt":  "2026-05-07 11:37:38",
        "discordUsername":  "rune9191",
        "discordId":  "1456923107909570612",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1231481541549363271",
        "username":  "篠突鬼",
        "title":  "@koyou404_shinotsuki",
        "bio":  "参加日: 2026-05-09 / Discord ID: 1231481541549363271",
        "avatar":  "https://cdn.discordapp.com/avatars/1231481541549363271/2729e1fa0ddd0a03fe6f4902f70810bb.png?size=1024",
        "joinedAt":  "2026-05-09 15:40:55",
        "discordUsername":  "koyou404_shinotsuki",
        "discordId":  "1231481541549363271",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1232253034579623948",
        "username":  "ゆうちゃんたか",
        "title":  "@yuucyantaka_33372",
        "bio":  "参加日: 2026-04-26 / Discord ID: 1232253034579623948",
        "avatar":  "https://cdn.discordapp.com/avatars/1232253034579623948/889d47c3bdc7eb11822a8e403a74307a.png?size=1024",
        "joinedAt":  "2026-04-26 14:03:19",
        "discordUsername":  "yuucyantaka_33372",
        "discordId":  "1232253034579623948",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1500860576014798920",
        "username":  "じぇーむズ",
        "title":  "@ziemuzu0297_79906",
        "bio":  "参加日: 2026-05-04 / Discord ID: 1500860576014798920",
        "avatar":  "https://cdn.discordapp.com/avatars/1500860576014798920/80c36e313f26041d475f35ee11fbd684.png?size=1024",
        "joinedAt":  "2026-05-04 14:11:16",
        "discordUsername":  "ziemuzu0297_79906",
        "discordId":  "1500860576014798920",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1485001544544944130",
        "username":  "Linux for love",
        "title":  "@ip_log.txt",
        "bio":  "参加日: 2026-04-26 / Discord ID: 1485001544544944130",
        "avatar":  "https://cdn.discordapp.com/avatars/1485001544544944130/a_d47f5535d74d0e3b2efd67cfa3fcaa9a.gif?size=1024",
        "joinedAt":  "2026-04-26 17:11:00",
        "discordUsername":  "ip_log.txt",
        "discordId":  "1485001544544944130",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1435933139871727616",
        "username":  "ち  く  わ  だ  ぜ  ☆",
        "title":  "@samuichikuwahou0501",
        "bio":  "参加日: 2025-11-30 / Discord ID: 1435933139871727616",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2025-11-30 00:59:26",
        "discordUsername":  "samuichikuwahou0501",
        "discordId":  "1435933139871727616",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1330536306463477791",
        "username":  "なお⊿",
        "title":  "@xizhuobasami0775",
        "bio":  "参加日: 2026-04-26 / Discord ID: 1330536306463477791",
        "avatar":  "https://cdn.discordapp.com/avatars/1330536306463477791/88dfdd45f8d9c0783c0fd4ae31d4de4c.png?size=1024",
        "joinedAt":  "2026-04-26 16:47:38",
        "discordUsername":  "xizhuobasami0775",
        "discordId":  "1330536306463477791",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1506261287795953829",
        "username":  "まるいねこのすけ",
        "title":  "@maruruinekonosuke",
        "bio":  "参加日: 2026-05-19 / Discord ID: 1506261287795953829",
        "avatar":  "https://cdn.discordapp.com/avatars/1506261287795953829/0999f0219636827f8bea6b8ddc87a2e9.png?size=1024",
        "joinedAt":  "2026-05-19 13:03:01",
        "discordUsername":  "maruruinekonosuke",
        "discordId":  "1506261287795953829",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1493528094034624623",
        "username":  "倉斗康臣",
        "title":  "@kuratoyasuomi115_61674",
        "bio":  "参加日: 2026-04-28 / Discord ID: 1493528094034624623",
        "avatar":  "https://cdn.discordapp.com/avatars/1493528094034624623/1426f763c884a5ae9b41af539eb97dcb.png?size=1024",
        "joinedAt":  "2026-04-28 16:43:06",
        "discordUsername":  "kuratoyasuomi115_61674",
        "discordId":  "1493528094034624623",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1373129905717641337",
        "username":  "そらって名前を付けてもらった人",
        "title":  "@sora31584",
        "bio":  "参加日: 2026-04-22 / Discord ID: 1373129905717641337",
        "avatar":  "https://cdn.discordapp.com/avatars/1373129905717641337/4b31d80e412144133870ee56ed3d8819.png?size=1024",
        "joinedAt":  "2026-04-22 08:59:30",
        "discordUsername":  "sora31584",
        "discordId":  "1373129905717641337",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1491564443526627612",
        "username":  "Davidbooksplays",
        "title":  "@davidbooksplays.",
        "bio":  "参加日: 2026-05-04 / Discord ID: 1491564443526627612",
        "avatar":  "https://cdn.discordapp.com/avatars/1491564443526627612/5445ffd7ffb201a98393cbdf684ea4b1.png?size=1024",
        "joinedAt":  "2026-05-04 10:35:47",
        "discordUsername":  "davidbooksplays.",
        "discordId":  "1491564443526627612",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1498162494802231538",
        "username":  "muskJ",
        "title":  "@muskj.",
        "bio":  "参加日: 2026-04-27 / Discord ID: 1498162494802231538",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-27 05:06:56",
        "discordUsername":  "muskj.",
        "discordId":  "1498162494802231538",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1353163245372051559",
        "username":  "ぱ～る",
        "title":  "@paru08906",
        "bio":  "参加日: 2026-02-13 / Discord ID: 1353163245372051559",
        "avatar":  "https://cdn.discordapp.com/avatars/1353163245372051559/62ac1e0ebbb5ae6bdcb740b662d97c33.png?size=1024",
        "joinedAt":  "2026-02-13 09:58:36",
        "discordUsername":  "paru08906",
        "discordId":  "1353163245372051559",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1507628221577822242",
        "username":  "かしゆぅ【虚滅龍ギルド】",
        "title":  "@kashiyuuxumielonggirudo",
        "bio":  "参加日: 2026-05-23 / Discord ID: 1507628221577822242",
        "avatar":  "https://cdn.discordapp.com/avatars/1507628221577822242/a15b66b2c4441ff952ac2ba857c03895.png?size=1024",
        "joinedAt":  "2026-05-23 06:25:18",
        "discordUsername":  "kashiyuuxumielonggirudo",
        "discordId":  "1507628221577822242",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1394868317386444851",
        "username":  "奇奇",
        "title":  "@rinricrisis",
        "bio":  "参加日: 2026-02-02 / Discord ID: 1394868317386444851",
        "avatar":  "https://cdn.discordapp.com/avatars/1394868317386444851/24ec790528ac370ebdd06f7b9e17ddbe.png?size=1024",
        "joinedAt":  "2026-02-02 04:15:52",
        "discordUsername":  "rinricrisis",
        "discordId":  "1394868317386444851",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1211649569243275275",
        "username":  "~~**ダニ**~~【ヘルパー】",
        "title":  "@dnmn._.",
        "bio":  "参加日: 2024-08-26 / Discord ID: 1211649569243275275",
        "avatar":  "https://cdn.discordapp.com/avatars/1211649569243275275/63b83802309cfdcc6d0b6337a7f8812f.png?size=1024",
        "joinedAt":  "2024-08-26 21:38:45",
        "discordUsername":  "dnmn._.",
        "discordId":  "1211649569243275275",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1008274649198624778",
        "username":  "Tori",
        "title":  "@nari_ark",
        "bio":  "参加日: 2024-03-01 / Discord ID: 1008274649198624778",
        "avatar":  "https://cdn.discordapp.com/avatars/1008274649198624778/8bb77ceaed233e1c8d15af9d80ad0137.png?size=1024",
        "joinedAt":  "2024-03-01 09:11:20",
        "discordUsername":  "nari_ark",
        "discordId":  "1008274649198624778",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1469298528919490712",
        "username":  "y",
        "title":  "@yuuu.13",
        "bio":  "参加日: 2026-04-22 / Discord ID: 1469298528919490712",
        "avatar":  "https://cdn.discordapp.com/avatars/1469298528919490712/29cf371714db8a3b04102237bf04ee7f.png?size=1024",
        "joinedAt":  "2026-04-22 13:53:02",
        "discordUsername":  "yuuu.13",
        "discordId":  "1469298528919490712",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1485826506750951424",
        "username":  "トマト真理教",
        "title":  "@tomatozhenlijiao_50668",
        "bio":  "参加日: 2026-04-14 / Discord ID: 1485826506750951424",
        "avatar":  "https://cdn.discordapp.com/avatars/1485826506750951424/4f62d401333235e36b549798b73fee47.png?size=1024",
        "joinedAt":  "2026-04-14 19:21:30",
        "discordUsername":  "tomatozhenlijiao_50668",
        "discordId":  "1485826506750951424",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1403971959427174460",
        "username":  "ゆゆ",
        "title":  "@yakitori0438",
        "bio":  "参加日: 2026-04-22 / Discord ID: 1403971959427174460",
        "avatar":  "https://cdn.discordapp.com/avatars/1403971959427174460/8984e44102f34ff6db904dad91219847.png?size=1024",
        "joinedAt":  "2026-04-22 12:50:50",
        "discordUsername":  "yakitori0438",
        "discordId":  "1403971959427174460",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1328748447242911852",
        "username":  "いちご",
        "title":  "@superior845434",
        "bio":  "参加日: 2026-04-18 / Discord ID: 1328748447242911852",
        "avatar":  "https://cdn.discordapp.com/avatars/1328748447242911852/999ec0d2caf5b99f8000c3022dc8b1e9.png?size=1024",
        "joinedAt":  "2026-04-18 04:09:52",
        "discordUsername":  "superior845434",
        "discordId":  "1328748447242911852",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1500858928299507782",
        "username":  "くらた",
        "title":  "@kurata05815",
        "bio":  "参加日: 2026-05-04 / Discord ID: 1500858928299507782",
        "avatar":  "https://cdn.discordapp.com/avatars/1500858928299507782/1a87cd2e4c09ef5241f1b1add4ba9ec3.png?size=1024",
        "joinedAt":  "2026-05-04 14:11:49",
        "discordUsername":  "kurata05815",
        "discordId":  "1500858928299507782",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1277166338657226798",
        "username":  "Lill",
        "title":  "@totsupo0686",
        "bio":  "参加日: 2026-04-17 / Discord ID: 1277166338657226798",
        "avatar":  "https://cdn.discordapp.com/avatars/1277166338657226798/734a08e5fd9d1013dbc12bdb002647b5.png?size=1024",
        "joinedAt":  "2026-04-17 11:30:19",
        "discordUsername":  "totsupo0686",
        "discordId":  "1277166338657226798",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1393856947194957905",
        "username":  "りん",
        "title":  "@rin093873",
        "bio":  "参加日: 2026-04-25 / Discord ID: 1393856947194957905",
        "avatar":  "https://cdn.discordapp.com/avatars/1393856947194957905/ec06812fb905270eb4a281e9a64247e4.png?size=1024",
        "joinedAt":  "2026-04-25 15:29:14",
        "discordUsername":  "rin093873",
        "discordId":  "1393856947194957905",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1493989218458800128",
        "username":  "ebisen",
        "title":  "@ebisen0703",
        "bio":  "参加日: 2026-04-17 / Discord ID: 1493989218458800128",
        "avatar":  "https://cdn.discordapp.com/avatars/1493989218458800128/d42f46e0e29be95da3161f7a29b6313c.png?size=1024",
        "joinedAt":  "2026-04-17 12:15:42",
        "discordUsername":  "ebisen0703",
        "discordId":  "1493989218458800128",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1495371037376778331",
        "username":  "わあ",
        "title":  "@tranquil_sparrow_89327",
        "bio":  "参加日: 2026-04-19 / Discord ID: 1495371037376778331",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-19 11:35:21",
        "discordUsername":  "tranquil_sparrow_89327",
        "discordId":  "1495371037376778331",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1505367805011431528",
        "username":  "sh_1.sh",
        "title":  "@sh_1.sh",
        "bio":  "参加日: 2026-05-17 / Discord ID: 1505367805011431528",
        "avatar":  "https://cdn.discordapp.com/avatars/1505367805011431528/6c5996770c985bcd6e5b68131ff2ba04.png?size=1024",
        "joinedAt":  "2026-05-17 00:48:45",
        "discordUsername":  "sh_1.sh",
        "discordId":  "1505367805011431528",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1489971835595526165",
        "username":  "Fredx1267",
        "title":  "@fredx1267",
        "bio":  "参加日: 2026-04-26 / Discord ID: 1489971835595526165",
        "avatar":  "https://cdn.discordapp.com/avatars/1489971835595526165/5445ffd7ffb201a98393cbdf684ea4b1.png?size=1024",
        "joinedAt":  "2026-04-26 07:19:54",
        "discordUsername":  "fredx1267",
        "discordId":  "1489971835595526165",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1497895155116539915",
        "username":  "しろなぎ",
        "title":  "@siro_nagi.v",
        "bio":  "参加日: 2026-04-26 / Discord ID: 1497895155116539915",
        "avatar":  "https://cdn.discordapp.com/avatars/1497895155116539915/50191cf8d0fd11531cff72739cda5534.png?size=1024",
        "joinedAt":  "2026-04-26 10:18:35",
        "discordUsername":  "siro_nagi.v",
        "discordId":  "1497895155116539915",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1349834199518941297",
        "username":  "ヒロ",
        "title":  "@hiro066015",
        "bio":  "参加日: 2026-05-24 / Discord ID: 1349834199518941297",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-05-24 10:44:27",
        "discordUsername":  "hiro066015",
        "discordId":  "1349834199518941297",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1064826875911884851",
        "username":  "がらな。",
        "title":  "@guarana1230",
        "bio":  "参加日: 2026-05-14 / Discord ID: 1064826875911884851",
        "avatar":  "https://cdn.discordapp.com/avatars/1064826875911884851/97bd497c6d1fc5b9495fbcf6f8d951c3.png?size=1024",
        "joinedAt":  "2026-05-14 03:45:43",
        "discordUsername":  "guarana1230",
        "discordId":  "1064826875911884851",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "950643551237189673",
        "username":  "Riku",
        "title":  "@riku4552",
        "bio":  "参加日: 2025-09-08 / Discord ID: 950643551237189673",
        "avatar":  "https://cdn.discordapp.com/avatars/950643551237189673/d62d46303f03ece84ee995c7fca3c643.png?size=1024",
        "joinedAt":  "2025-09-08 06:33:29",
        "discordUsername":  "riku4552",
        "discordId":  "950643551237189673",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1496803828929134663",
        "username":  "アンパン",
        "title":  "@anpan03177",
        "bio":  "参加日: 2026-04-23 / Discord ID: 1496803828929134663",
        "avatar":  "https://cdn.discordapp.com/avatars/1496803828929134663/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
        "joinedAt":  "2026-04-23 09:37:04",
        "discordUsername":  "anpan03177",
        "discordId":  "1496803828929134663",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1497885181707686049",
        "username":  "らんすー川島",
        "title":  "@iamgayiwannaeatyou",
        "bio":  "参加日: 2026-04-26 / Discord ID: 1497885181707686049",
        "avatar":  "https://cdn.discordapp.com/avatars/1497885181707686049/ce2e992d42255004fe06bcbe94dbc5bc.png?size=1024",
        "joinedAt":  "2026-04-26 10:19:49",
        "discordUsername":  "iamgayiwannaeatyou",
        "discordId":  "1497885181707686049",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1140979517603725402",
        "username":  "yume",
        "title":  "@yumenotimata",
        "bio":  "参加日: 2026-05-02 / Discord ID: 1140979517603725402",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-05-02 19:28:52",
        "discordUsername":  "yumenotimata",
        "discordId":  "1140979517603725402",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1489219563383160932",
        "username":  "りんりん",
        "title":  "@rinrin00594",
        "bio":  "参加日: 2026-04-29 / Discord ID: 1489219563383160932",
        "avatar":  "https://cdn.discordapp.com/avatars/1489219563383160932/1628fc11e7961d85181295493426b775.png?size=1024",
        "joinedAt":  "2026-04-29 05:50:19",
        "discordUsername":  "rinrin00594",
        "discordId":  "1489219563383160932",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1325564590087471227",
        "username":  "Kynkuma",
        "title":  "@kynkuma",
        "bio":  "参加日: 2026-04-23 / Discord ID: 1325564590087471227",
        "avatar":  "https://cdn.discordapp.com/avatars/1325564590087471227/1628fc11e7961d85181295493426b775.png?size=1024",
        "joinedAt":  "2026-04-23 22:08:20",
        "discordUsername":  "kynkuma",
        "discordId":  "1325564590087471227",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "938380635746209852",
        "username":  "みと",
        "title":  "@toro0208",
        "bio":  "参加日: 2026-03-31 / Discord ID: 938380635746209852",
        "avatar":  "https://cdn.discordapp.com/avatars/938380635746209852/ad3f66bd2dfa4604db36b90550cf7651.png?size=1024",
        "joinedAt":  "2026-03-31 06:31:15",
        "discordUsername":  "toro0208",
        "discordId":  "938380635746209852",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1436870991924953088",
        "username":  "ぺるちゃん",
        "title":  "@perusora",
        "bio":  "参加日: 2025-12-07 / Discord ID: 1436870991924953088",
        "avatar":  "https://cdn.discordapp.com/avatars/1436870991924953088/5fdf929510751ac9ed263c040a335d50.png?size=1024",
        "joinedAt":  "2025-12-07 04:38:41",
        "discordUsername":  "perusora",
        "discordId":  "1436870991924953088",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1494630639360806962",
        "username":  "あいこ",
        "title":  "@aiko05931",
        "bio":  "参加日: 2026-04-21 / Discord ID: 1494630639360806962",
        "avatar":  "https://cdn.discordapp.com/avatars/1494630639360806962/1628fc11e7961d85181295493426b775.png?size=1024",
        "joinedAt":  "2026-04-21 14:54:25",
        "discordUsername":  "aiko05931",
        "discordId":  "1494630639360806962",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1061365372055470151",
        "username":  "おきちゲイ＠オナオークがセフレに居る",
        "title":  "@hikichi",
        "bio":  "参加日: 2025-09-04 / Discord ID: 1061365372055470151",
        "avatar":  "https://cdn.discordapp.com/avatars/1061365372055470151/f3bc7faecc9a59541e879c58f4861791.png?size=1024",
        "joinedAt":  "2025-09-04 13:54:50",
        "discordUsername":  "hikichi",
        "discordId":  "1061365372055470151",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1480573440636489912",
        "username":  "ハルミチ",
        "title":  "@haru_55480",
        "bio":  "参加日: 2026-04-10 / Discord ID: 1480573440636489912",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-10 06:01:00",
        "discordUsername":  "haru_55480",
        "discordId":  "1480573440636489912",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1334125440972881980",
        "username":  "TMK0117",
        "title":  "@tmk0117",
        "bio":  "参加日: 2026-05-15 / Discord ID: 1334125440972881980",
        "avatar":  "https://cdn.discordapp.com/avatars/1334125440972881980/a39c66cd89383891b7620d35eb75c766.png?size=1024",
        "joinedAt":  "2026-05-15 10:34:46",
        "discordUsername":  "tmk0117",
        "discordId":  "1334125440972881980",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1213757821393444897",
        "username":  "がばまん",
        "title":  "@yuacco.",
        "bio":  "参加日: 2026-04-28 / Discord ID: 1213757821393444897",
        "avatar":  "https://cdn.discordapp.com/avatars/1213757821393444897/cb0e66f24051c876a843d840f0fbaad4.png?size=1024",
        "joinedAt":  "2026-04-28 04:55:37",
        "discordUsername":  "yuacco.",
        "discordId":  "1213757821393444897",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1290639555174731776",
        "username":  "💎💎💎💎💎💎💎",
        "title":  "@dio000000001",
        "bio":  "参加日: 2026-05-14 / Discord ID: 1290639555174731776",
        "avatar":  "https://cdn.discordapp.com/avatars/1290639555174731776/c66d129a1010909322042b2b1ac705e6.png?size=1024",
        "joinedAt":  "2026-05-14 00:53:41",
        "discordUsername":  "dio000000001",
        "discordId":  "1290639555174731776",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1504524187467780136",
        "username":  "Amanda Stewart",
        "title":  "@amandastewart0925_65137",
        "bio":  "参加日: 2026-05-23 / Discord ID: 1504524187467780136",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-05-23 21:24:34",
        "discordUsername":  "amandastewart0925_65137",
        "discordId":  "1504524187467780136",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "441214423118381068",
        "username":  "はぎのおはぎ",
        "title":  "@hagiyanen",
        "bio":  "参加日: 2026-05-02 / Discord ID: 441214423118381068",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-05-02 13:15:13",
        "discordUsername":  "hagiyanen",
        "discordId":  "441214423118381068",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1440637632374771732",
        "username":  "H🐦",
        "title":  "@harukidayo1104",
        "bio":  "参加日: 2026-04-28 / Discord ID: 1440637632374771732",
        "avatar":  "https://cdn.discordapp.com/avatars/1440637632374771732/d9091e00eb6341662ed61b3c5ac75e89.png?size=1024",
        "joinedAt":  "2026-04-28 07:25:00",
        "discordUsername":  "harukidayo1104",
        "discordId":  "1440637632374771732",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1350294214986043525",
        "username":  "邪武悪慈散",
        "title":  "@xiewuecisan",
        "bio":  "参加日: 2026-05-04 / Discord ID: 1350294214986043525",
        "avatar":  "https://cdn.discordapp.com/avatars/1350294214986043525/d94876162b005dc836c4ff7b58aafb26.png?size=1024",
        "joinedAt":  "2026-05-04 11:40:59",
        "discordUsername":  "xiewuecisan",
        "discordId":  "1350294214986043525",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1487837247733764347",
        "username":  "顔射マン",
        "title":  "@k4w4_nina",
        "bio":  "参加日: 2026-03-29 / Discord ID: 1487837247733764347",
        "avatar":  "https://cdn.discordapp.com/avatars/1487837247733764347/6611224ff08e1e393f32517c905e516b.png?size=1024",
        "joinedAt":  "2026-03-29 15:39:22",
        "discordUsername":  "k4w4_nina",
        "discordId":  "1487837247733764347",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1480562773745340437",
        "username":  "ひかる",
        "title":  "@hikaru05744",
        "bio":  "参加日: 2026-04-25 / Discord ID: 1480562773745340437",
        "avatar":  "https://cdn.discordapp.com/avatars/1480562773745340437/e1738fb367da7d397549868c99f785b0.png?size=1024",
        "joinedAt":  "2026-04-25 12:46:27",
        "discordUsername":  "hikaru05744",
        "discordId":  "1480562773745340437",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1461711991776477257",
        "username":  "̷̴̢̟̟҉̸̧̨̛͉",
        "title":  "@youso2neet",
        "bio":  "参加日: 2026-01-16 / Discord ID: 1461711991776477257",
        "avatar":  "https://cdn.discordapp.com/avatars/1461711991776477257/67b5fbbe5f5abffb52ef7d1126e591bc.png?size=1024",
        "joinedAt":  "2026-01-16 13:40:12",
        "discordUsername":  "youso2neet",
        "discordId":  "1461711991776477257",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1325785008560017499",
        "username":  "百合 貝合",
        "title":  "@tukuyomi_seika120",
        "bio":  "参加日: 2026-02-24 / Discord ID: 1325785008560017499",
        "avatar":  "https://cdn.discordapp.com/avatars/1325785008560017499/5e08d60128e534197c0cad9461e7c4c6.png?size=1024",
        "joinedAt":  "2026-02-24 13:11:32",
        "discordUsername":  "tukuyomi_seika120",
        "discordId":  "1325785008560017499",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1495068189141368873",
        "username":  "け",
        "title":  "@ke079058",
        "bio":  "参加日: 2026-04-18 / Discord ID: 1495068189141368873",
        "avatar":  "https://cdn.discordapp.com/avatars/1495068189141368873/157e517cdbf371a47aaead44675714a3.png?size=1024",
        "joinedAt":  "2026-04-18 14:30:30",
        "discordUsername":  "ke079058",
        "discordId":  "1495068189141368873",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1398904048798928938",
        "username":  "ピーマンまる齧り聖人",
        "title":  "@midori0x0",
        "bio":  "参加日: 2025-07-27 / Discord ID: 1398904048798928938",
        "avatar":  "https://cdn.discordapp.com/avatars/1398904048798928938/9aa172b0521b3f73e2ea86e3c0c2d443.png?size=1024",
        "joinedAt":  "2025-07-27 06:12:11",
        "discordUsername":  "midori0x0",
        "discordId":  "1398904048798928938",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1212665067644915712",
        "username":  "かわにな",
        "title":  "@kawanina0312",
        "bio":  "参加日: 2025-11-05 / Discord ID: 1212665067644915712",
        "avatar":  "https://cdn.discordapp.com/avatars/1212665067644915712/4255db0fdfd975d575d47c0d28462fc3.png?size=1024",
        "joinedAt":  "2025-11-05 14:15:01",
        "discordUsername":  "kawanina0312",
        "discordId":  "1212665067644915712",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1491814475651612692",
        "username":  "ゆうま",
        "title":  "@yuuma0269_85466",
        "bio":  "参加日: 2026-04-18 / Discord ID: 1491814475651612692",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-18 07:50:52",
        "discordUsername":  "yuuma0269_85466",
        "discordId":  "1491814475651612692",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "780660101375721483",
        "username":  "mrgood",
        "title":  "@mrokmrgood5356",
        "bio":  "参加日: 2026-04-25 / Discord ID: 780660101375721483",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-25 08:05:01",
        "discordUsername":  "mrokmrgood5356",
        "discordId":  "780660101375721483",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1310132803815473172",
        "username":  "たこきんくん",
        "title":  "@takokinkun",
        "bio":  "参加日: 2026-02-01 / Discord ID: 1310132803815473172",
        "avatar":  "https://cdn.discordapp.com/avatars/1310132803815473172/7b7ad672f4a0feadeb59c93580842e7d.png?size=1024",
        "joinedAt":  "2026-02-01 14:22:40",
        "discordUsername":  "takokinkun",
        "discordId":  "1310132803815473172",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1495417619665129523",
        "username":  "ぺぺ",
        "title":  "@pepe098821",
        "bio":  "参加日: 2026-04-19 / Discord ID: 1495417619665129523",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-19 14:07:36",
        "discordUsername":  "pepe098821",
        "discordId":  "1495417619665129523",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1023386732625920021",
        "username":  "suちやん2",
        "title":  "@suusann14",
        "bio":  "参加日: 2026-05-15 / Discord ID: 1023386732625920021",
        "avatar":  "https://cdn.discordapp.com/avatars/1023386732625920021/d6d41d55283e5de8745ea26c72e91841.png?size=1024",
        "joinedAt":  "2026-05-15 14:58:22",
        "discordUsername":  "suusann14",
        "discordId":  "1023386732625920021",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1507618864308031551",
        "username":  "Sadow",
        "title":  "@sadow0928",
        "bio":  "参加日: 2026-05-23 / Discord ID: 1507618864308031551",
        "avatar":  "https://cdn.discordapp.com/avatars/1507618864308031551/527cfc4adc29c9e7f251d0d3e47d1d5e.png?size=1024",
        "joinedAt":  "2026-05-23 05:47:57",
        "discordUsername":  "sadow0928",
        "discordId":  "1507618864308031551",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1412005401544622101",
        "username":  "無言の女",
        "title":  "@x_aty",
        "bio":  "参加日: 2025-09-01 / Discord ID: 1412005401544622101",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2025-09-01 09:28:37",
        "discordUsername":  "x_aty",
        "discordId":  "1412005401544622101",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1472189767570427975",
        "username":  "ボン",
        "title":  "@bon120222",
        "bio":  "参加日: 2026-04-19 / Discord ID: 1472189767570427975",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-19 08:32:42",
        "discordUsername":  "bon120222",
        "discordId":  "1472189767570427975",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1474039683729195130",
        "username":  "しばけんしばしば",
        "title":  "@satorintaroro",
        "bio":  "参加日: 2026-02-21 / Discord ID: 1474039683729195130",
        "avatar":  "https://cdn.discordapp.com/avatars/1474039683729195130/f5aef793c51c08fdfdb0b59266326052.png?size=1024",
        "joinedAt":  "2026-02-21 12:50:31",
        "discordUsername":  "satorintaroro",
        "discordId":  "1474039683729195130",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1277754735692091423",
        "username":  "実験体UHA-0514",
        "title":  "@uhauhahuriren_59824",
        "bio":  "参加日: 2024-08-27 / Discord ID: 1277754735692091423",
        "avatar":  "https://cdn.discordapp.com/avatars/1277754735692091423/6dcbda5f8d50e8361b973082c978a879.png?size=1024",
        "joinedAt":  "2024-08-27 06:48:44",
        "discordUsername":  "uhauhahuriren_59824",
        "discordId":  "1277754735692091423",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1496451791821209700",
        "username":  "しょ",
        "title":  "@shiyo02681",
        "bio":  "参加日: 2026-04-22 / Discord ID: 1496451791821209700",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-22 10:13:19",
        "discordUsername":  "shiyo02681",
        "discordId":  "1496451791821209700",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1061321835200925756",
        "username":  "yuzu0525",
        "title":  "@yuzu0987",
        "bio":  "参加日: 2026-04-20 / Discord ID: 1061321835200925756",
        "avatar":  "https://cdn.discordapp.com/avatars/1061321835200925756/1628fc11e7961d85181295493426b775.png?size=1024",
        "joinedAt":  "2026-04-20 10:26:09",
        "discordUsername":  "yuzu0987",
        "discordId":  "1061321835200925756",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1488956304100950139",
        "username":  "あ",
        "title":  "@a088742",
        "bio":  "参加日: 2026-04-25 / Discord ID: 1488956304100950139",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-25 12:55:09",
        "discordUsername":  "a088742",
        "discordId":  "1488956304100950139",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1380897848391893044",
        "username":  "スーパースクリプトボーイ",
        "title":  "@naotokio_48183",
        "bio":  "参加日: 2026-04-17 / Discord ID: 1380897848391893044",
        "avatar":  "https://cdn.discordapp.com/avatars/1380897848391893044/c629d3042efb80b62f803c9b47c0c933.png?size=1024",
        "joinedAt":  "2026-04-17 13:34:26",
        "discordUsername":  "naotokio_48183",
        "discordId":  "1380897848391893044",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1397196432460746903",
        "username":  "実験体S-9073",
        "title":  "@mina_bon",
        "bio":  "参加日: 2025-11-29 / Discord ID: 1397196432460746903",
        "avatar":  "https://cdn.discordapp.com/avatars/1397196432460746903/2e3d9072237c11cb66cc7cb03ac3df56.png?size=1024",
        "joinedAt":  "2025-11-29 12:51:29",
        "discordUsername":  "mina_bon",
        "discordId":  "1397196432460746903",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1148962519893934160",
        "username":  "@",
        "title":  "@kprl123_99457",
        "bio":  "参加日: 2026-04-23 / Discord ID: 1148962519893934160",
        "avatar":  "https://cdn.discordapp.com/avatars/1148962519893934160/206c485fe56e4a252fe7bd266f23096e.png?size=1024",
        "joinedAt":  "2026-04-23 05:34:21",
        "discordUsername":  "kprl123_99457",
        "discordId":  "1148962519893934160",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1162564327065272413",
        "username":  "パンパンパンハメール",
        "title":  "@hamu_jyu",
        "bio":  "参加日: 2025-05-04 / Discord ID: 1162564327065272413",
        "avatar":  "https://cdn.discordapp.com/avatars/1162564327065272413/eb3152a829b1f4951330ebc827706193.png?size=1024",
        "joinedAt":  "2025-05-04 07:51:02",
        "discordUsername":  "hamu_jyu",
        "discordId":  "1162564327065272413",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1379825398346420424",
        "username":  "とーふ",
        "title":  "@tohu01034",
        "bio":  "参加日: 2026-02-23 / Discord ID: 1379825398346420424",
        "avatar":  "https://cdn.discordapp.com/avatars/1379825398346420424/5f5a3b1d0fac6e6ea9df881d8da3da7d.png?size=1024",
        "joinedAt":  "2026-02-23 09:05:24",
        "discordUsername":  "tohu01034",
        "discordId":  "1379825398346420424",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1480194620356038817",
        "username":  "Angles of light",
        "title":  "@sachijang__",
        "bio":  "参加日: 2026-05-12 / Discord ID: 1480194620356038817",
        "avatar":  "https://cdn.discordapp.com/avatars/1480194620356038817/163068f917d20c641d48b5641d5db572.png?size=1024",
        "joinedAt":  "2026-05-12 13:38:03",
        "discordUsername":  "sachijang__",
        "discordId":  "1480194620356038817",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1317483468292358185",
        "username":  "おんJ民",
        "title":  "@onjmin_",
        "bio":  "参加日: 2026-04-26 / Discord ID: 1317483468292358185",
        "avatar":  "https://cdn.discordapp.com/avatars/1317483468292358185/7a2a1990de749bf99d121a44ca6ae46a.png?size=1024",
        "joinedAt":  "2026-04-26 14:29:15",
        "discordUsername":  "onjmin_",
        "discordId":  "1317483468292358185",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1393583878698176576",
        "username":  "mwapjd",
        "title":  "@mtajp",
        "bio":  "参加日: 2026-04-18 / Discord ID: 1393583878698176576",
        "avatar":  "https://cdn.discordapp.com/avatars/1393583878698176576/1602be76c1350945f8ce58f124bb7f3e.png?size=1024",
        "joinedAt":  "2026-04-18 13:15:45",
        "discordUsername":  "mtajp",
        "discordId":  "1393583878698176576",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1411354799944892493",
        "username":  "あんちょび",
        "title":  "@wahaha05786",
        "bio":  "参加日: 2026-04-28 / Discord ID: 1411354799944892493",
        "avatar":  "https://cdn.discordapp.com/avatars/1411354799944892493/78762740493ed5ffc556c900ec747b83.png?size=1024",
        "joinedAt":  "2026-04-28 13:57:29",
        "discordUsername":  "wahaha05786",
        "discordId":  "1411354799944892493",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1089389655704735824",
        "username":  "クラゲ",
        "title":  "@kurage0080",
        "bio":  "参加日: 2025-09-06 / Discord ID: 1089389655704735824",
        "avatar":  "https://cdn.discordapp.com/avatars/1089389655704735824/0b558e0a83a3a2857b037d1a92f43a76.png?size=1024",
        "joinedAt":  "2025-09-06 09:32:51",
        "discordUsername":  "kurage0080",
        "discordId":  "1089389655704735824",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1234715202000257064",
        "username":  "ヒステリック狂戦士",
        "title":  "@.ririri._10",
        "bio":  "参加日: 2024-10-29 / Discord ID: 1234715202000257064",
        "avatar":  "https://cdn.discordapp.com/avatars/1234715202000257064/4555d6a3894bc2325d5353d2f6d45609.png?size=1024",
        "joinedAt":  "2024-10-29 02:41:25",
        "discordUsername":  ".ririri._10",
        "discordId":  "1234715202000257064",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1358284329632923760",
        "username":  "瑠璃",
        "title":  "@ru_li.817",
        "bio":  "参加日: 2026-05-18 / Discord ID: 1358284329632923760",
        "avatar":  "https://cdn.discordapp.com/avatars/1358284329632923760/2430ce9a76878b2b1a3cd73746a7db55.png?size=1024",
        "joinedAt":  "2026-05-18 06:04:56",
        "discordUsername":  "ru_li.817",
        "discordId":  "1358284329632923760",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1497264502704701514",
        "username":  "k12",
        "title":  "@powerful_cheetah_07430",
        "bio":  "参加日: 2026-04-24 / Discord ID: 1497264502704701514",
        "avatar":  "https://discord.com/assets/0f8b5c0e3e3f0e0e0e0e0e0e0e0e0e0e.png",
        "joinedAt":  "2026-04-24 15:58:03",
        "discordUsername":  "powerful_cheetah_07430",
        "discordId":  "1497264502704701514",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "971720447605489695",
        "username":  "れんれんV1",
        "title":  "@y4dpyu",
        "bio":  "参加日: 2026-04-18 / Discord ID: 971720447605489695",
        "avatar":  "https://cdn.discordapp.com/avatars/971720447605489695/0de484f4bff65cf9572526b0c4fb7946.png?size=1024",
        "joinedAt":  "2026-04-18 14:26:37",
        "discordUsername":  "y4dpyu",
        "discordId":  "971720447605489695",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1471291683378565412",
        "username":  "あかは",
        "title":  "@akahadesuyo",
        "bio":  "参加日: 2026-04-23 / Discord ID: 1471291683378565412",
        "avatar":  "https://cdn.discordapp.com/avatars/1471291683378565412/e72a78cc106ef075475496d019ee996b.png?size=1024",
        "joinedAt":  "2026-04-23 13:36:20",
        "discordUsername":  "akahadesuyo",
        "discordId":  "1471291683378565412",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1507343257867387041",
        "username":  "みちる",
        "title":  "@zikokai",
        "bio":  "参加日: 2026-05-28 / Discord ID: 1507343257867387041",
        "avatar":  "https://cdn.discordapp.com/avatars/1507343257867387041/46ac18a7532800d77dcecc16dd614fab.png?size=1024",
        "joinedAt":  "2026-05-28 13:07:32",
        "discordUsername":  "zikokai",
        "discordId":  "1507343257867387041",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1117462974517497856",
        "username":  "むとー",
        "title":  "@nia_2023",
        "bio":  "参加日: 2026-05-18 / Discord ID: 1117462974517497856",
        "avatar":  "https://cdn.discordapp.com/avatars/1117462974517497856/744f1e450f523babbe30d4846c22532d.png?size=1024",
        "joinedAt":  "2026-05-18 06:21:26",
        "discordUsername":  "nia_2023",
        "discordId":  "1117462974517497856",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1500721614608793600",
        "username":  "近藤佐藤",
        "title":  "@nogusolove",
        "bio":  "参加日: 2026-05-04 / Discord ID: 1500721614608793600",
        "avatar":  "https://cdn.discordapp.com/avatars/1500721614608793600/dfd541978ecbb6733ebafd4738cbba49.png?size=1024",
        "joinedAt":  "2026-05-04 05:07:30",
        "discordUsername":  "nogusolove",
        "discordId":  "1500721614608793600",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1362686439384547418",
        "username":  "すくらんぶるえっぐ",
        "title":  "@toki1115_tensai",
        "bio":  "参加日: 2026-04-18 / Discord ID: 1362686439384547418",
        "avatar":  "https://cdn.discordapp.com/avatars/1362686439384547418/392f5fa81fac2410f3541f75aae4f6cd.png?size=1024",
        "joinedAt":  "2026-04-18 10:59:31",
        "discordUsername":  "toki1115_tensai",
        "discordId":  "1362686439384547418",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1459506796296405256",
        "username":  "あやね",
        "title":  "@ayane08203",
        "bio":  "参加日: 2026-04-18 / Discord ID: 1459506796296405256",
        "avatar":  "https://cdn.discordapp.com/avatars/1459506796296405256/f751887fc6eea24f9bf349c9f0da3ef3.png?size=1024",
        "joinedAt":  "2026-04-18 10:09:10",
        "discordUsername":  "ayane08203",
        "discordId":  "1459506796296405256",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1466266679460892952",
        "username":  "たか",
        "title":  "@taka046391",
        "bio":  "参加日: 2026-04-22 / Discord ID: 1466266679460892952",
        "avatar":  "https://cdn.discordapp.com/avatars/1466266679460892952/1628fc11e7961d85181295493426b775.png?size=1024",
        "joinedAt":  "2026-04-22 04:37:44",
        "discordUsername":  "taka046391",
        "discordId":  "1466266679460892952",
        "colors":  [
                       "#35e7ff",
                       "#47ffb5"
                   ]
    },
    {
        "id":  "1268153719376052339",
        "username":  "shiori【ヘルパー】",
        "title":  "@shiori04133",
        "bio":  "参加日: 2025-04-16 / Discord ID: 1268153719376052339",
        "avatar":  "https://cdn.discordapp.com/avatars/1268153719376052339/31c1a33edd47883b88646af60c131253.png?size=1024",
        "joinedAt":  "2025-04-16 13:16:03",
        "discordUsername":  "shiori04133",
        "discordId":  "1268153719376052339",
        "colors":  [
                       "#8f63ff",
                       "#ff4fd8"
                   ]
    },
    {
        "id":  "1492491471515815987",
        "username":  "ジャムズ",
        "title":  "@ziyamuzu.",
        "bio":  "参加日: 2026-04-27 / Discord ID: 1492491471515815987",
        "avatar":  "https://cdn.discordapp.com/avatars/1492491471515815987/596c76f1f2a198ff93cdcca034e18c4d.png?size=1024",
        "joinedAt":  "2026-04-27 12:35:59",
        "discordUsername":  "ziyamuzu.",
        "discordId":  "1492491471515815987",
        "colors":  [
                       "#35e7ff",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1501153612238159882",
        "username":  "クロネコ",
        "title":  "@kuroneko.mp3",
        "bio":  "参加日: 2026-05-05 / Discord ID: 1501153612238159882",
        "avatar":  "https://cdn.discordapp.com/avatars/1501153612238159882/1f08faef848022e1040539e863808d78.png?size=1024",
        "joinedAt":  "2026-05-05 09:36:59",
        "discordUsername":  "kuroneko.mp3",
        "discordId":  "1501153612238159882",
        "colors":  [
                       "#ff4fd8",
                       "#35e7ff"
                   ]
    },
    {
        "id":  "1486671269440258101",
        "username":  "sueyosi",
        "title":  "@05roco19.",
        "bio":  "参加日: 2026-04-20 / Discord ID: 1486671269440258101",
        "avatar":  "https://cdn.discordapp.com/avatars/1486671269440258101/89b49accc7a314c600a455f84c12aee5.png?size=1024",
        "joinedAt":  "2026-04-20 08:54:33",
        "discordUsername":  "05roco19.",
        "discordId":  "1486671269440258101",
        "colors":  [
                       "#47ffb5",
                       "#8f63ff"
                   ]
    },
    {
        "id":  "1442498827620978761",
        "username":  "Niki",
        "title":  "@niki08602",
        "bio":  "参加日: 2026-05-05 / Discord ID: 1442498827620978761",
        "avatar":  "https://cdn.discordapp.com/avatars/1442498827620978761/60a1a345dfbd9c27ab2dafd2c21b978b.png?size=1024",
        "joinedAt":  "2026-05-05 07:28:40",
        "discordUsername":  "niki08602",
        "discordId":  "1442498827620978761",
        "colors":  [
                       "#ffd66b",
                       "#ff4fd8"
                   ]
    }
];

  const DEMO_COMMENTS = [
    {
      id: "c-1",
      userId: "system",
      displayName: "NARAKU SYSTEM",
      text: "投票コアがオンラインになりました。",
      createdAt: Date.now() - 120000,
    },
    {
      id: "c-2",
      userId: "demo-luna",
      displayName: "Luna",
      text: "今回の新星賞、誰が取るか本当に読めない。",
      createdAt: Date.now() - 90000,
    },
    {
      id: "c-3",
      userId: "demo-kuro",
      displayName: "Kuro",
      text: "神対応賞は深夜勢が強すぎる。",
      createdAt: Date.now() - 30000,
    },
  ];

  const STORAGE_KEY = "naraku-awards-2026";
  const DISCORD_API_BASE = "https://discord.com/api";
  const DISCORD_OAUTH_STATE_KEY = "discordOAuthState";
  const MAX_VOTES_PER_USER = 6;
  const ADMIN_RESET_PASSWORD = "KyuKyu2010";
  const DEFAULT_VOTING_PERIOD = {
    start: "",
    end: "",
  };

  const appState = {
    page: "home",
    selectedCategory: CATEGORIES[0].id,
    rankingCategory: CATEGORIES[0].id,
    currentUser: null,
    votes: [],
    comments: [],
    candidateQuery: "",
    votingPeriod: Object.assign({}, DEFAULT_VOTING_PERIOD),
    votingPeriodConfigured: false,
    firebaseReady: false,
    unsubscribers: [],
    settings: {
      particles: true,
      effects: true,
    },
  };

  const els = {};
  let booted = false;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }

  function boot() {
    if (booted) {
      return;
    }

    booted = true;
    init().catch((error) => {
      console.error("NARAKU initialization failed", error);
      finishLoadingScreen();
    });
  }

  async function init() {
    cacheElements();
    loadVotingPeriod();
    setupLoadingScreen();
    setupNavigation();
    setupAdmin();
    setupSettings();
    setupComments();
    setupParticles();
    renderStaticUi();
    renderAll();
    setupCountdown();
    setupRandomEffects();
    finishLoadingScreen();
    await setupFirebase();
    await completeDiscordLoginFromRedirect();
  }

  function cacheElements() {
    [
      "loadingScreen",
      "loaderBar",
      "loaderPercent",
      "mobileMenu",
      "sidebar",
      "pageTitle",
      "connectionState",
      "loginBtn",
      "logoutBtn",
      "userPill",
      "userAvatar",
      "userName",
      "userStatus",
      "totalVotes",
      "activeUsers",
      "remainingTime",
      "remainingLabel",
      "periodStatus",
      "votingPeriodLabel",
      "featuredCategories",
      "categoryTabs",
      "candidateSearch",
      "candidateCount",
      "candidateGrid",
      "voteNotice",
      "rankingCategory",
      "leaderboard",
      "categoryGrid",
      "profileAvatar",
      "profileName",
      "profileDescription",
      "profileLoginBtn",
      "voteHistory",
      "commentForm",
      "commentInput",
      "commentsCloud",
      "particlesToggle",
      "effectsToggle",
      "firebaseModeLabel",
      "particleCanvas",
      "toastStack",
      "systemOverlay",
      "systemCode",
      "systemTitle",
      "adminOverlay",
      "adminForm",
      "adminStartDate",
      "adminEndDate",
      "adminCloseBtn",
      "adminStatus",
      "adminResetBtn",
    ].forEach((id) => {
      els[id] = document.getElementById(id);
    });
  }

  function setupLoadingScreen() {
    if (window.NarakuLoader && typeof window.NarakuLoader.start === "function") {
      window.NarakuLoader.start();
      return;
    }

    let progress = 0;
    const timer = window.setInterval(() => {
      progress += Math.floor(Math.random() * 13) + 7;
      progress = Math.min(progress, 100);
      els.loaderBar.style.width = `${progress}%`;
      els.loaderPercent.textContent = `${progress}%`;

      if (progress >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => {
          els.loadingScreen.classList.add("is-hidden");
        }, 360);
      }
    }, 90);
  }

  function finishLoadingScreen() {
    if (window.NarakuLoader && typeof window.NarakuLoader.complete === "function") {
      window.NarakuLoader.complete();
      return;
    }

    if (els.loaderBar) {
      els.loaderBar.style.width = "100%";
    }
    if (els.loaderPercent) {
      els.loaderPercent.textContent = "100%";
    }
    if (els.loadingScreen) {
      window.setTimeout(() => {
        els.loadingScreen.classList.add("is-hidden");
      }, 280);
    }
  }

  function setupNavigation() {
    document.querySelectorAll(".nav-item").forEach((button) => {
      button.addEventListener("click", () => setPage(button.dataset.page));
    });

    document.querySelectorAll("[data-jump]").forEach((button) => {
      button.addEventListener("click", () => setPage(button.dataset.jump));
    });

    els.mobileMenu.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      els.mobileMenu.setAttribute("aria-expanded", String(open));
    });

    els.loginBtn.addEventListener("click", login);
    els.profileLoginBtn.addEventListener("click", login);
    els.logoutBtn.addEventListener("click", logout);

    els.candidateSearch.addEventListener("input", (event) => {
      appState.candidateQuery = event.target.value;
      renderCandidates();
    });

    els.rankingCategory.addEventListener("change", (event) => {
      appState.rankingCategory = event.target.value;
      renderLeaderboard();
    });
  }

  function setupAdmin() {
    const pressedKeys = new Set();
    let adminChordExpiresAt = 0;

    window.addEventListener("keydown", (event) => {
      if (isTypingTarget(event.target)) {
        return;
      }

      if (event.code === "Space") {
        pressedKeys.add("Space");
        if (event.shiftKey) {
          adminChordExpiresAt = Date.now() + 1500;
          event.preventDefault();
        }
      }

      if (
        event.code === "Enter" &&
        event.shiftKey &&
        (pressedKeys.has("Space") || Date.now() <= adminChordExpiresAt)
      ) {
        event.preventDefault();
        adminChordExpiresAt = 0;
        openAdminPanel();
      }
    });

    window.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        pressedKeys.delete("Space");
      }
    });

    window.addEventListener("blur", () => pressedKeys.clear());

    els.adminCloseBtn.addEventListener("click", closeAdminPanel);
    els.adminOverlay.addEventListener("click", (event) => {
      if (event.target === els.adminOverlay) {
        closeAdminPanel();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && els.adminOverlay.classList.contains("active")) {
        closeAdminPanel();
      }
    });

    els.adminResetBtn.addEventListener("click", resetAllDataWithPassword);

    els.adminForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const period = {
        start: els.adminStartDate.value,
        end: els.adminEndDate.value,
      };

      if (!isValidVotingPeriod(period)) {
        els.adminStatus.textContent = "開始日と終了日を正しく設定してください。";
        return;
      }

      try {
        await saveVotingPeriod(period);
        closeAdminPanel();
        toast("投票期間を更新しました", formatVotingPeriod(period));
      } catch (error) {
        els.adminStatus.textContent =
          error.message || "保存できませんでした。Firebase権限を確認してください。";
      }
    });
  }

  function setupSettings() {
    const saved = readStore().settings;
    appState.settings = Object.assign(appState.settings, saved || {});
    els.particlesToggle.checked = appState.settings.particles;
    els.effectsToggle.checked = appState.settings.effects;

    els.particlesToggle.addEventListener("change", () => {
      appState.settings.particles = els.particlesToggle.checked;
      writeStore({ settings: appState.settings });
    });

    els.effectsToggle.addEventListener("change", () => {
      appState.settings.effects = els.effectsToggle.checked;
      writeStore({ settings: appState.settings });
    });
  }

  function setupComments() {
    els.commentForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const text = els.commentInput.value.trim();

      if (!text) {
        return;
      }

      if (!appState.currentUser) {
        toast("ログインが必要です", "Discordログイン後にコメントできます。");
        return;
      }

      try {
        await createComment(text);
        els.commentInput.value = "";
        toast("コメント送信完了", "カードに反映されました。");
      } catch (error) {
        toast("送信できませんでした", error.message || "もう一度お試しください。");
      }
    });
  }

  async function setupFirebase() {
    const firebase = window.NarakuFirebase;

    if (!firebase || !firebase.isConfigured()) {
      appState.firebaseReady = false;
      els.connectionState.textContent = "DEMO ONLINE";
      els.firebaseModeLabel.textContent = "Demo storage active";
      hydrateDemoData();
      restoreDemoUser();
      renderAll();
      return;
    }

    try {
      await firebase.loadFirebase();
      appState.firebaseReady = true;
      els.connectionState.textContent = "FIREBASE LIVE";
      els.firebaseModeLabel.textContent = "Firestore realtime active";

      const unsubscribeAuth = await firebase.onAuthChanged(async (user) => {
        const discordProfile = getStoredDiscordProfile();
        appState.currentUser = user && discordProfile ? normalizeFirebaseUser(user, discordProfile) : null;
        if (appState.currentUser) {
          try {
            await upsertUser(appState.currentUser);
          } catch (error) {
            console.warn("User profile sync failed", error);
          }
        }
        renderAll();
      });

      appState.unsubscribers.push(unsubscribeAuth);
      subscribeVotingPeriod();
      subscribeVotes();
      subscribeComments();
    } catch (error) {
      appState.firebaseReady = false;
      els.connectionState.textContent = "DEMO FALLBACK";
      els.firebaseModeLabel.textContent = "Firebase failed, demo storage active";
      hydrateDemoData();
      renderAll();
      toast("Firebase接続エラー", "設定を確認してください。デモモードで起動しました。");
    }
  }

  function hydrateDemoData() {
    const store = readStore();
    const rawVotes = Array.isArray(store.votes) ? store.votes : [];
    appState.votes = rawVotes.filter(isValidVote);
    appState.comments = Array.isArray(store.comments) ? store.comments : DEMO_COMMENTS;
    if (isValidVotingPeriod(store.votingPeriod)) {
      appState.votingPeriod = normalizeVotingPeriod(store.votingPeriod);
      appState.votingPeriodConfigured = true;
    } else {
      appState.votingPeriod = Object.assign({}, DEFAULT_VOTING_PERIOD);
      appState.votingPeriodConfigured = false;
    }

    if (rawVotes.length !== appState.votes.length) {
      writeStore({ votes: appState.votes });
    }

    if (!Array.isArray(store.comments)) {
      writeStore({ comments: appState.comments });
    }
  }

  function restoreDemoUser() {
    const store = readStore();
    appState.currentUser = store.currentUser || null;
  }

  function renderStaticUi() {
    renderCategoryTabs();
    renderCategorySelect();
    renderCategories();
    renderFeaturedCategories();
  }

  function renderAll() {
    renderAuth();
    renderStats();
    renderFeaturedCategories();
    renderCategories();
    renderVotingPeriod();
    renderCandidates();
    renderLeaderboard();
    renderVoteHistory();
    renderComments();
    renderProfile();
  }

  function setPage(page) {
    appState.page = page;
    document.querySelectorAll(".page").forEach((section) => {
      section.classList.toggle("active", section.id === `page-${page}`);
    });

    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.toggle("active", button.dataset.page === page);
    });

    const activePage = document.getElementById(`page-${page}`);
    els.pageTitle.textContent = activePage ? activePage.dataset.pageTitle : "ホーム";
    document.body.classList.remove("menu-open");
    els.mobileMenu.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderAuth() {
    if (appState.currentUser) {
      els.loginBtn.hidden = true;
      els.logoutBtn.hidden = false;
      els.userPill.hidden = false;
      els.userName.textContent = appState.currentUser.displayName;
      els.userStatus.textContent = appState.firebaseReady ? "Discord connected" : "Demo Discord user";
      els.userAvatar.src = appState.currentUser.photoURL;
      return;
    }

    els.loginBtn.hidden = false;
    els.logoutBtn.hidden = true;
    els.userPill.hidden = true;
  }

  function renderStats() {
    const uniqueUsers = new Set(appState.votes.map((vote) => vote.userId));
    els.totalVotes.textContent = formatNumber(appState.votes.length);
    els.activeUsers.textContent = formatNumber(uniqueUsers.size);
  }

  function renderCategoryTabs() {
    els.categoryTabs.innerHTML = CATEGORIES.map(
      (category) => `
        <button class="tab-btn ${
          category.id === appState.selectedCategory ? "active" : ""
        }" type="button" data-category="${category.id}">
          ${escapeHtml(category.name)}
        </button>
      `
    ).join("");

    els.categoryTabs.querySelectorAll(".tab-btn").forEach((button) => {
      button.addEventListener("click", () => {
        appState.selectedCategory = button.dataset.category;
        renderCategoryTabs();
        renderCandidates();
      });
    });
  }

  function renderCategorySelect() {
    els.rankingCategory.innerHTML = CATEGORIES.map(
      (category) => `<option value="${category.id}">${escapeHtml(category.name)}</option>`
    ).join("");
    els.rankingCategory.value = appState.rankingCategory;
  }

  function renderFeaturedCategories() {
    els.featuredCategories.innerHTML = CATEGORIES.slice(0, 3)
      .map(categoryCardTemplate)
      .join("");
    bindCategoryCards(els.featuredCategories);
  }

  function renderCategories() {
    els.categoryGrid.innerHTML = CATEGORIES.map(categoryCardTemplate).join("");
    bindCategoryCards(els.categoryGrid);
  }

  function categoryCardTemplate(category) {
    const total = getCategoryVoteTotal(category.id);
    return `
      <article class="category-card ${
        category.id === appState.selectedCategory ? "active" : ""
      }" data-category-card="${category.id}" style="--category-accent: ${category.accent}">
        <div class="category-icon" style="color: ${category.accent}; box-shadow: 0 0 22px ${hexToRgba(
      category.accent,
      0.22
    )}">
          ${category.icon}
        </div>
        <h4>${escapeHtml(category.name)}</h4>
        <p>${escapeHtml(category.description)}</p>
        <div class="category-meta">
          <span>${formatNumber(total)} votes</span>
          <span>LIVE</span>
        </div>
      </article>
    `;
  }

  function bindCategoryCards(root) {
    root.querySelectorAll("[data-category-card]").forEach((card) => {
      card.addEventListener("click", () => {
        appState.selectedCategory = card.dataset.categoryCard;
        appState.rankingCategory = card.dataset.categoryCard;
        renderStaticUi();
        renderCandidates();
        renderLeaderboard();
        setPage("vote");
      });
    });
  }

  function renderCandidates() {
    const selected = getCategory(appState.selectedCategory);
    const votedInCategory = getUserVote(appState.selectedCategory);
    const remainingVotes = getRemainingVotes();
    const votingOpen = isVotingOpen();
    const loggedIn = Boolean(appState.currentUser);
    const candidates = getFilteredCandidates();

    if (!appState.votingPeriodConfigured) {
      els.voteNotice.textContent = "投票期間が未設定です。管理UIで期間を設定するまで投票できません。";
    } else if (!votingOpen) {
      els.voteNotice.textContent = `投票期間外です。設定期間: ${formatVotingPeriod(
        appState.votingPeriod
      )}`;
    } else if (!loggedIn) {
      els.voteNotice.textContent = `Discordログイン後、最大${MAX_VOTES_PER_USER}回まで投票できます。`;
    } else if (votedInCategory) {
      els.voteNotice.textContent = `${selected.name} は投票済みです。残り ${remainingVotes} 回 / 最大 ${MAX_VOTES_PER_USER} 回。`;
    } else if (remainingVotes <= 0) {
      els.voteNotice.textContent = `投票上限に達しました。最大${MAX_VOTES_PER_USER}回まで投票できます。`;
    } else {
      els.voteNotice.textContent = `${selected.name} に投票できます。残り ${remainingVotes} 回 / 最大 ${MAX_VOTES_PER_USER} 回。`;
    }

    els.candidateCount.textContent = `${formatNumber(candidates.length)} / ${formatNumber(
      CANDIDATES.length
    )} users`;

    if (!candidates.length) {
      els.candidateGrid.innerHTML = `<div class="empty-state">一致するユーザーが見つかりません。</div>`;
      return;
    }

    els.candidateGrid.innerHTML = candidates.map((candidate) => {
      const votes = getCandidateVoteTotal(appState.selectedCategory, candidate.id);
      const alreadyVotedCandidate = votedInCategory && votedInCategory.candidateId === candidate.id;
      const disabled = !loggedIn || !votingOpen || Boolean(votedInCategory) || remainingVotes <= 0;
      const buttonLabel = !appState.votingPeriodConfigured
        ? "期間未設定"
        : !votingOpen
        ? "期間外"
        : !loggedIn
        ? "Login Required"
        : votedInCategory
        ? "投票済み"
        : remainingVotes <= 0
        ? "上限到達"
        : "投票する";
      const avatar = candidateAvatar(candidate);
      const fallbackAvatar = avatarSvg(candidate.username, candidate.colors);
      return `
        <article class="candidate-card">
          <div class="candidate-head">
            <img src="${escapeHtml(avatar)}" alt="${escapeHtml(
        candidate.username
      )}" loading="lazy" onerror="this.onerror=null;this.src='${escapeHtml(fallbackAvatar)}'" />
            <div>
              <h4>${escapeHtml(candidate.username)}</h4>
              <p>${escapeHtml(candidate.title)}</p>
            </div>
          </div>
          <p class="candidate-bio">${escapeHtml(candidate.bio)}</p>
          <div class="candidate-footer">
            <span class="vote-count">${formatNumber(votes)} votes</span>
            <button class="btn btn-primary vote-btn" type="button" data-candidate="${candidate.id}" ${
              disabled ? "disabled" : ""
            }>${alreadyVotedCandidate ? "VOTED" : buttonLabel}</button>
          </div>
        </article>
      `;
    }).join("");

    els.candidateGrid.querySelectorAll(".vote-btn").forEach((button) => {
      button.addEventListener("click", () => voteForCandidate(button.dataset.candidate));
    });
  }

  function renderLeaderboard() {
    const category = getCategory(appState.rankingCategory);
    const rows = CANDIDATES.map((candidate) => ({
      candidate,
      votes: getCandidateVoteTotal(category.id, candidate.id),
    })).sort((a, b) => b.votes - a.votes || a.candidate.username.localeCompare(b.candidate.username));

    const max = Math.max(1, rows[0] ? rows[0].votes : 1);
    els.leaderboard.innerHTML = rows
      .map((row, index) => {
        const rank = index + 1;
        const percentage = Math.round((row.votes / max) * 100);
        const avatar = candidateAvatar(row.candidate);
        const fallbackAvatar = avatarSvg(row.candidate.username, row.candidate.colors);
        return `
          <article class="leader-row top-${rank <= 3 ? rank : "x"}" style="animation-delay: ${
          index * 0.055
        }s">
            <div class="leader-rank">#${rank}</div>
            <div class="leader-main">
              <img class="leader-avatar" src="${escapeHtml(avatar)}" alt="${escapeHtml(
          row.candidate.username
        )}" loading="lazy" onerror="this.onerror=null;this.src='${escapeHtml(fallbackAvatar)}'" />
              <div>
                <p class="leader-name">${escapeHtml(row.candidate.username)}</p>
                <div class="leader-title">${escapeHtml(row.candidate.title)} / ${escapeHtml(
          category.name
        )}</div>
                <div class="progress-track">
                  <div class="progress-fill" style="width:${percentage}%"></div>
                </div>
              </div>
            </div>
            <div class="leader-votes">${formatNumber(row.votes)} votes</div>
          </article>
        `;
      })
      .join("");
  }

  function renderVoteHistory() {
    if (!appState.currentUser) {
      els.voteHistory.innerHTML = `<div class="empty-state">ログインすると投票履歴が表示されます。</div>`;
      return;
    }

    const votes = appState.votes.filter((vote) => vote.userId === appState.currentUser.uid);

    if (!votes.length) {
      els.voteHistory.innerHTML = `<div class="empty-state">まだ投票していません。</div>`;
      return;
    }

    els.voteHistory.innerHTML = votes
      .map((vote) => {
        const category = getCategory(vote.categoryId);
        const candidate = getCandidate(vote.candidateId);
        return `
          <div class="history-item">
            <strong>${escapeHtml(category.name)}</strong>
            <span>${escapeHtml(candidate.username)} に投票</span>
          </div>
        `;
      })
      .join("");
  }

  function renderProfile() {
    const user = appState.currentUser;
    els.profileLoginBtn.hidden = Boolean(user);

    if (!user) {
      els.profileName.textContent = "未ログイン";
      els.profileDescription.textContent = "Discordログインで投票履歴とコメントが同期されます。";
      els.profileAvatar.src = avatarSvg("Guest", ["#60708f", "#35e7ff"]);
      return;
    }

    const votes = appState.votes.filter((vote) => vote.userId === user.uid).length;
    els.profileName.textContent = user.displayName;
    els.profileDescription.textContent = `${votes} / ${MAX_VOTES_PER_USER} 回投票済み。奈落鯖アワードのリアルタイム集計に接続中。`;
    els.profileAvatar.src = user.photoURL;
  }

  function renderComments() {
    const comments = [...appState.comments]
      .sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt))
      .slice(0, 12);

    if (!comments.length) {
      els.commentsCloud.innerHTML = `<div class="empty-state">コメントはまだありません。</div>`;
      return;
    }

    els.commentsCloud.innerHTML = comments
      .map(
        (comment) => `
          <article class="comment-card">
            <strong>${escapeHtml(comment.displayName || "Anonymous")}</strong>
            <span>${formatDate(comment.createdAt)}</span>
            <p>${escapeHtml(comment.text)}</p>
          </article>
        `
      )
      .join("");
  }

  async function login() {
    if (!window.NarakuFirebase || !window.NarakuFirebase.isConfigured()) {
      const demoUser = {
        uid: "demo-discord-user",
        displayName: "Discord Demo User",
        photoURL: avatarSvg("Demo", ["#35e7ff", "#ff4fd8"]),
        discordId: "demo-discord",
        discordUsername: "demo_user",
      };
      appState.currentUser = demoUser;
      writeStore({ currentUser: demoUser });
      renderAll();
      toast("Demo Discord Login", "Firebaseでは匿名Authとして扱われます。");
      return;
    }

    if (!isWebProtocol()) {
      toast("Discordログイン不可", "Discord OAuthはGitHub PagesなどのHTTPS上で実行してください。");
      return;
    }

    beginDiscordLogin();
  }

  function beginDiscordLogin() {
    const state = createRandomState();
    writeStore({ [DISCORD_OAUTH_STATE_KEY]: state });

    const params = new URLSearchParams({
      client_id: window.NarakuFirebase.discordClientId,
      redirect_uri: getDiscordRedirectUri(),
      response_type: "token",
      scope: "identify",
      state,
    });

    window.location.assign(`https://discord.com/oauth2/authorize?${params.toString()}`);
  }

  async function completeDiscordLoginFromRedirect() {
    const params = parseHashParams();

    if (!params.access_token && !params.error) {
      return;
    }

    clearUrlHash();

    if (params.error) {
      toast("Discord Login", params.error_description || "Discordログインがキャンセルされました。");
      return;
    }

    const store = readStore();

    if (!params.state || params.state !== store[DISCORD_OAUTH_STATE_KEY]) {
      writeStore({ [DISCORD_OAUTH_STATE_KEY]: null });
      toast("Discord Login", "ログイン状態の検証に失敗しました。もう一度お試しください。");
      return;
    }

    try {
      const profile = await fetchDiscordProfile(params.access_token);
      writeStore({
        discordProfile: profile,
        currentUser: null,
        [DISCORD_OAUTH_STATE_KEY]: null,
      });

      if (appState.firebaseReady) {
        const credential = await window.NarakuFirebase.signInAnonymously();
        appState.currentUser = normalizeFirebaseUser(credential.user, profile);
        await upsertUser(appState.currentUser);
      } else {
        appState.currentUser = {
          uid: `demo-discord-${profile.id}`,
          displayName: profile.displayName,
          photoURL: profile.photoURL,
          discordId: profile.id,
          discordUsername: profile.username,
        };
        writeStore({ currentUser: appState.currentUser });
      }

      renderAll();
      toast("Discord Login", "Firebase匿名Authで接続しました。");
    } catch (error) {
      writeStore({ [DISCORD_OAUTH_STATE_KEY]: null });
      toast("ログインできませんでした", error.message || "Discord認証を確認してください。");
    }
  }

  async function fetchDiscordProfile(accessToken) {
    const response = await fetch(`${DISCORD_API_BASE}/users/@me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Discordプロフィールを取得できませんでした。");
    }

    return normalizeDiscordProfile(await response.json());
  }

  function normalizeDiscordProfile(profile) {
    const displayName = profile.global_name || profile.username || "Discord User";
    const photoURL = profile.avatar
      ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png?size=128`
      : avatarSvg(displayName, ["#5865f2", "#35e7ff"]);

    return {
      id: profile.id,
      username: profile.username || displayName,
      displayName,
      photoURL,
    };
  }

  async function logout() {
    if (window.NarakuFirebase && window.NarakuFirebase.isConfigured()) {
      await window.NarakuFirebase.signOutUser();
    }

    appState.currentUser = null;
    writeStore({ currentUser: null, discordProfile: null, [DISCORD_OAUTH_STATE_KEY]: null });
    renderAll();
    toast("ログアウトしました", "またいつでも投票できます。");
  }

  async function voteForCandidate(candidateId) {
    if (!appState.currentUser) {
      toast("ログインが必要です", "Discordログイン後に投票できます。");
      return;
    }

    if (!appState.votingPeriodConfigured) {
      toast("投票期間が未設定です", "管理UIで投票期間を設定してください。");
      return;
    }

    if (!isVotingOpen()) {
      toast("投票期間外です", formatVotingPeriod(appState.votingPeriod));
      return;
    }

    if (getUserVote(appState.selectedCategory)) {
      toast("投票済みです", `${getCategory(appState.selectedCategory).name} にはすでに投票しています。`);
      return;
    }

    if (getRemainingVotes() <= 0) {
      toast("投票上限に達しました", `投票は最大${MAX_VOTES_PER_USER}回までです。`);
      return;
    }

    try {
      if (appState.firebaseReady) {
        await createFirestoreVote(appState.selectedCategory, candidateId);
      } else {
        createDemoVote(appState.selectedCategory, candidateId);
      }

      renderAll();
      flashSystem("NARAKU CORE CONNECTED", "VOTE ACCEPTED");
      toast("投票完了", `${getCandidate(candidateId).username} に投票しました。`);
    } catch (error) {
      toast("投票できませんでした", getFriendlyFirestoreError(error));
    }
  }

  async function createFirestoreVote(categoryId, candidateId) {
    const firebase = window.NarakuFirebase;
    const firestore = firebase.modules.firestore;
    const db = firebase.db;
    const user = appState.currentUser;
    const voteRef = firestore.doc(db, firebase.COLLECTIONS.votes, `${user.uid}_${categoryId}`);

    await firestore.runTransaction(db, async (transaction) => {
      const voteSnap = await transaction.get(voteRef);

      if (!appState.votingPeriodConfigured) {
        throw new Error("投票期間が未設定です。");
      }

      if (!isVotingOpen()) {
        throw new Error("投票期間外です。");
      }

      if (voteSnap.exists()) {
        throw new Error("この部門にはすでに投票しています。");
      }

      if (getUserVoteCount() >= MAX_VOTES_PER_USER) {
        throw new Error(`投票は最大${MAX_VOTES_PER_USER}回までです。`);
      }

      transaction.set(voteRef, {
        userId: user.uid,
        userName: user.displayName,
        discordId: user.discordId || "",
        discordUsername: user.discordUsername || "",
        categoryId,
        candidateId,
        candidateName: getCandidate(candidateId).username,
        createdAt: firestore.serverTimestamp(),
      });
    });
  }

  function createDemoVote(categoryId, candidateId) {
    const user = appState.currentUser;

    if (!appState.votingPeriodConfigured) {
      throw new Error("投票期間が未設定です。");
    }

    if (!isVotingOpen()) {
      throw new Error("投票期間外です。");
    }

    if (getUserVote(categoryId)) {
      throw new Error("この部門にはすでに投票しています。");
    }

    if (getUserVoteCount() >= MAX_VOTES_PER_USER) {
      throw new Error(`投票は最大${MAX_VOTES_PER_USER}回までです。`);
    }

    const vote = {
      id: `${user.uid}_${categoryId}`,
      userId: user.uid,
      userName: user.displayName,
      discordId: user.discordId || "",
      discordUsername: user.discordUsername || "",
      categoryId,
      candidateId,
      candidateName: getCandidate(candidateId).username,
      createdAt: Date.now(),
    };

    appState.votes = [...appState.votes, vote];
    writeStore({ votes: appState.votes });
    broadcastDemoUpdate();
  }

  async function createComment(text) {
    const user = appState.currentUser;

    if (appState.firebaseReady) {
      const firebase = window.NarakuFirebase;
      const firestore = firebase.modules.firestore;
      await firestore.addDoc(
        firestore.collection(firebase.db, firebase.COLLECTIONS.comments),
        {
          userId: user.uid,
          displayName: user.displayName,
          avatar: user.photoURL,
          discordId: user.discordId || "",
          discordUsername: user.discordUsername || "",
          text,
          createdAt: firestore.serverTimestamp(),
        }
      );
      return;
    }

    const comment = {
      id: `comment-${Date.now()}`,
      userId: user.uid,
      displayName: user.displayName,
      avatar: user.photoURL,
      discordId: user.discordId || "",
      discordUsername: user.discordUsername || "",
      text,
      createdAt: Date.now(),
    };
    appState.comments = [comment, ...appState.comments].slice(0, 24);
    writeStore({ comments: appState.comments });
    broadcastDemoUpdate();
    renderComments();
  }

  async function upsertUser(user) {
    const firebase = window.NarakuFirebase;
    const firestore = firebase.modules.firestore;
    await firestore.setDoc(
      firestore.doc(firebase.db, firebase.COLLECTIONS.users, user.uid),
      {
        displayName: user.displayName,
        photoURL: user.photoURL,
        discordId: user.discordId || "",
        discordUsername: user.discordUsername || "",
        lastSeenAt: firestore.serverTimestamp(),
      }
    );
  }

  function subscribeVotes() {
    const firebase = window.NarakuFirebase;
    const firestore = firebase.modules.firestore;
    const unsubscribe = firestore.onSnapshot(
      firestore.collection(firebase.db, firebase.COLLECTIONS.votes),
      (snapshot) => {
        appState.votes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        renderAll();
      }
    );
    appState.unsubscribers.push(unsubscribe);
  }

  function subscribeComments() {
    const firebase = window.NarakuFirebase;
    const firestore = firebase.modules.firestore;
    const commentsQuery = firestore.query(
      firestore.collection(firebase.db, firebase.COLLECTIONS.comments),
      firestore.orderBy("createdAt", "desc"),
      firestore.limit(24)
    );
    const unsubscribe = firestore.onSnapshot(commentsQuery, (snapshot) => {
      appState.comments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      renderComments();
    });
    appState.unsubscribers.push(unsubscribe);
  }

  function subscribeVotingPeriod() {
    const firebase = window.NarakuFirebase;
    const firestore = firebase.modules.firestore;
    const periodRef = firestore.doc(firebase.db, firebase.COLLECTIONS.settings, "votingPeriod");
    const unsubscribe = firestore.onSnapshot(periodRef, (snapshot) => {
      if (snapshot.exists()) {
        appState.votingPeriod = normalizeVotingPeriod(snapshot.data());
        appState.votingPeriodConfigured = true;
        writeStore({ votingPeriod: appState.votingPeriod });
      } else {
        appState.votingPeriod = Object.assign({}, DEFAULT_VOTING_PERIOD);
        appState.votingPeriodConfigured = false;
      }
      renderAll();
    });
    appState.unsubscribers.push(unsubscribe);
  }

  function loadVotingPeriod() {
    const store = readStore();
    if (isValidVotingPeriod(store.votingPeriod)) {
      appState.votingPeriod = normalizeVotingPeriod(store.votingPeriod);
      appState.votingPeriodConfigured = true;
    } else {
      appState.votingPeriod = Object.assign({}, DEFAULT_VOTING_PERIOD);
      appState.votingPeriodConfigured = false;
    }
  }

  async function saveVotingPeriod(period) {
    const next = normalizeVotingPeriod(period);

    if (!isValidVotingPeriod(next)) {
      throw new Error("投票期間が正しくありません。");
    }

    if (appState.firebaseReady) {
      if (!appState.currentUser) {
        throw new Error("Firebaseで保存するにはDiscordログインが必要です。");
      }

      const firebase = window.NarakuFirebase;
      const firestore = firebase.modules.firestore;
      await firestore.setDoc(
        firestore.doc(firebase.db, firebase.COLLECTIONS.settings, "votingPeriod"),
        {
          start: next.start,
          end: next.end,
          startAt: firestore.Timestamp.fromDate(getPeriodStartDate(next)),
          endAt: firestore.Timestamp.fromDate(getPeriodEndDate(next)),
          updatedAt: firestore.serverTimestamp(),
          updatedBy: appState.currentUser.uid,
        }
      );
    }

    appState.votingPeriod = next;
    appState.votingPeriodConfigured = true;
    writeStore({ votingPeriod: next });
    renderAll();
  }

  async function resetAllDataWithPassword() {
    const password = window.prompt("ALL RESETのパスワードを入力してください。");

    if (password === null) {
      els.adminStatus.textContent = "ALL RESETをキャンセルしました。";
      return;
    }

    if (password !== ADMIN_RESET_PASSWORD) {
      els.adminStatus.textContent = "パスワードが違います。";
      toast("ALL RESET", "パスワードが違います。");
      return;
    }

    if (appState.firebaseReady && !appState.currentUser) {
      els.adminStatus.textContent = "ALL RESETにはDiscordログインが必要です。";
      toast("ALL RESET", "Discordログイン後に実行してください。");
      return;
    }

    if (!window.confirm("投票とコメントをすべて削除します。続行しますか？")) {
      els.adminStatus.textContent = "ALL RESETをキャンセルしました。";
      return;
    }

    els.adminStatus.textContent = "ALL RESET実行中...";
    els.adminResetBtn.disabled = true;

    try {
      const deleted = await resetAllData();
      els.adminStatus.textContent = `ALL RESET完了: ${deleted.votes} votes / ${deleted.comments} comments`;
      toast("ALL RESET完了", "投票とコメントを削除しました。");
      flashSystem("SYSTEM ERROR", "ALL DATA RESET");
    } catch (error) {
      els.adminStatus.textContent =
        error.message || "ALL RESETに失敗しました。Firebase権限を確認してください。";
      toast("ALL RESET失敗", error.message || "Firebase権限を確認してください。");
    } finally {
      els.adminResetBtn.disabled = false;
    }
  }

  async function resetAllData() {
    const deleted = {
      votes: appState.votes.length,
      comments: appState.comments.length,
    };

    if (appState.firebaseReady) {
      deleted.votes = await deleteCollectionDocs(window.NarakuFirebase.COLLECTIONS.votes);
      deleted.comments = await deleteCollectionDocs(window.NarakuFirebase.COLLECTIONS.comments);
    }

    appState.votes = [];
    appState.comments = [];
    writeStore({ votes: [], comments: [] });
    renderAll();
    broadcastDemoUpdate();
    return deleted;
  }

  async function deleteCollectionDocs(collectionName) {
    const firebase = window.NarakuFirebase;
    const firestore = firebase.modules.firestore;
    const snapshot = await firestore.getDocs(
      firestore.collection(firebase.db, collectionName)
    );
    let batch = firestore.writeBatch(firebase.db);
    let pending = 0;
    let deleted = 0;

    for (const docSnap of snapshot.docs) {
      batch.delete(docSnap.ref);
      pending += 1;
      deleted += 1;

      if (pending >= 450) {
        await batch.commit();
        batch = firestore.writeBatch(firebase.db);
        pending = 0;
      }
    }

    if (pending > 0) {
      await batch.commit();
    }

    return deleted;
  }

  function openAdminPanel() {
    els.adminStartDate.value = appState.votingPeriod.start;
    els.adminEndDate.value = appState.votingPeriod.end;
    els.adminStatus.textContent = "投票期間を設定してください。";
    els.adminOverlay.classList.add("active");
    els.adminOverlay.setAttribute("aria-hidden", "false");
    window.setTimeout(() => els.adminStartDate.focus(), 60);
  }

  function closeAdminPanel() {
    els.adminOverlay.classList.remove("active");
    els.adminOverlay.setAttribute("aria-hidden", "true");
  }

  function renderVotingPeriod() {
    const period = appState.votingPeriod;

    if (!appState.votingPeriodConfigured) {
      els.votingPeriodLabel.textContent = "未設定";
      els.periodStatus.textContent = "UNSET";
      els.remainingLabel.textContent = "投票期間未設定";
      els.remainingTime.textContent = "--:--:--";
      return;
    }

    const now = Date.now();
    const start = getPeriodStartDate(period).getTime();
    const end = getPeriodEndDate(period).getTime();

    els.votingPeriodLabel.textContent = formatVotingPeriod(period);

    if (now < start) {
      els.periodStatus.textContent = "WAITING";
      els.remainingLabel.textContent = "投票開始まで";
      return;
    }

    if (now > end) {
      els.periodStatus.textContent = "CLOSED";
      els.remainingLabel.textContent = "投票終了";
      return;
    }

    els.periodStatus.textContent = "OPEN";
    els.remainingLabel.textContent = "投票終了まで";
  }

  function setupCountdown() {
    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  }

  function updateCountdown() {
    if (!appState.votingPeriodConfigured) {
      renderVotingPeriod();
      return;
    }

    const now = Date.now();
    const start = getPeriodStartDate(appState.votingPeriod).getTime();
    const end = getPeriodEndDate(appState.votingPeriod).getTime();
    const target = now < start ? start : end;
    const distance = Math.max(0, target - now);
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);
    els.remainingTime.textContent = `${days}D ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    renderVotingPeriod();
  }

  function setupParticles() {
    const canvas = els.particleCanvas;
    const ctx = canvas.getContext("2d");
    const particles = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles.length = 0;
      const count = Math.min(90, Math.floor((width * height) / 18000));
      for (let i = 0; i < count; i += 1) {
        particles.push(createParticle(width, height));
      }
    }

    function animate() {
      frame = window.requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);

      if (!appState.settings.particles) {
        return;
      }

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 118) {
            ctx.globalAlpha = (1 - dist / 118) * 0.16;
            ctx.strokeStyle = "#35e7ff";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    }

    window.addEventListener("resize", resize);
    resize();
    animate();

    window.addEventListener("beforeunload", () => window.cancelAnimationFrame(frame));
  }

  function createParticle(width, height) {
    const palette = [
      "rgba(53, 231, 255, 0.76)",
      "rgba(255, 79, 216, 0.62)",
      "rgba(71, 255, 181, 0.54)",
    ];
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.8 + 0.5,
      color: palette[Math.floor(Math.random() * palette.length)],
    };
  }

  function setupRandomEffects() {
    window.setInterval(() => {
      if (!appState.settings.effects || Math.random() > 0.38) {
        return;
      }

      const effects = [
        ["SYSTEM ERROR", "SIGNAL DISTORTION DETECTED"],
        ["NARAKU CORE CONNECTED", "CHANNEL ENCRYPTED"],
        ["VOTE STREAM ONLINE", "REALTIME SYNC ACTIVE"],
      ];
      const effect = effects[Math.floor(Math.random() * effects.length)];
      flashSystem(effect[0], effect[1]);
    }, 18000);
  }

  function flashSystem(code, title) {
    if (!appState.settings.effects) {
      return;
    }

    els.systemCode.textContent = code;
    els.systemTitle.textContent = title;
    els.systemOverlay.classList.add("active");
    window.setTimeout(() => {
      els.systemOverlay.classList.remove("active");
    }, 1450);
  }

  function toast(title, message) {
    const node = document.createElement("div");
    node.className = "toast";
    node.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span>`;
    els.toastStack.appendChild(node);
    window.setTimeout(() => {
      node.style.opacity = "0";
      node.style.transform = "translateY(12px)";
      window.setTimeout(() => node.remove(), 260);
    }, 3600);
  }

  function getFriendlyFirestoreError(error) {
    const code = error && error.code ? String(error.code) : "";
    const message = error && error.message ? String(error.message) : "";

    if (code === "permission-denied" || /missing or insufficient permissions/i.test(message)) {
      return "Firestoreルールで拒否されました。管理画面で投票期間を保存し直し、rule.txtをFirebaseに反映してください。";
    }

    return message || "もう一度お試しください。";
  }

  function getUserVote(categoryId) {
    if (!appState.currentUser) {
      return null;
    }
    return (
      appState.votes.find(
        (vote) => vote.userId === appState.currentUser.uid && vote.categoryId === categoryId
      ) || null
    );
  }

  function getUserVoteCount() {
    if (!appState.currentUser) {
      return 0;
    }

    return appState.votes.filter((vote) => vote.userId === appState.currentUser.uid).length;
  }

  function getRemainingVotes() {
    return Math.max(0, MAX_VOTES_PER_USER - getUserVoteCount());
  }

  function getCandidateVoteTotal(categoryId, candidateId) {
    return appState.votes.filter(
      (vote) => vote.categoryId === categoryId && vote.candidateId === candidateId
    ).length;
  }

  function getCategoryVoteTotal(categoryId) {
    return appState.votes.filter((vote) => vote.categoryId === categoryId).length;
  }

  function getCategory(id) {
    return CATEGORIES.find((category) => category.id === id) || CATEGORIES[0];
  }

  function parseHashParams() {
    const hash = window.location.hash.startsWith("#")
      ? window.location.hash.slice(1)
      : window.location.hash;
    return Object.fromEntries(new URLSearchParams(hash));
  }

  function clearUrlHash() {
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    } else {
      window.location.hash = "";
    }
  }

  function getDiscordRedirectUri() {
    const pathname = window.location.pathname.endsWith("/index.html")
      ? window.location.pathname.replace(/index\.html$/, "")
      : window.location.pathname;
    return `${window.location.origin}${pathname}`;
  }

  function getStoredDiscordProfile() {
    const profile = readStore().discordProfile;
    return profile && profile.id ? profile : null;
  }

  function createRandomState() {
    if (window.crypto && window.crypto.getRandomValues) {
      const values = new Uint32Array(4);
      window.crypto.getRandomValues(values);
      return Array.from(values, (value) => value.toString(16).padStart(8, "0")).join("");
    }

    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function isWebProtocol() {
    return window.location.protocol === "https:" || window.location.protocol === "http:";
  }

  function isVotingOpen() {
    if (!appState.votingPeriodConfigured) {
      return false;
    }

    const period = appState.votingPeriod;
    const now = Date.now();
    return now >= getPeriodStartDate(period).getTime() && now <= getPeriodEndDate(period).getTime();
  }

  function normalizeVotingPeriod(period) {
    const next = {
      start: normalizeDateInput(period && period.start, ""),
      end: normalizeDateInput(period && period.end, ""),
    };

    if (!isValidVotingPeriod(next)) {
      return Object.assign({}, DEFAULT_VOTING_PERIOD);
    }

    return next;
  }

  function normalizeDateInput(value, fallback) {
    if (!value) {
      return fallback;
    }

    if (typeof value.toDate === "function") {
      return toDateInputValue(value.toDate());
    }

    const text = String(value).trim().replace(/\//g, "-");
    const date = new Date(`${text.slice(0, 10)}T00:00:00+09:00`);
    return Number.isNaN(date.getTime()) ? fallback : text.slice(0, 10);
  }

  function isValidVotingPeriod(period) {
    if (!period || !period.start || !period.end) {
      return false;
    }

    const start = getPeriodStartDate(period);
    const end = getPeriodEndDate(period);
    return !Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime()) && start <= end;
  }

  function getPeriodStartDate(period) {
    return new Date(`${period.start}T00:00:00+09:00`);
  }

  function getPeriodEndDate(period) {
    return new Date(`${period.end}T23:59:59.999+09:00`);
  }

  function formatVotingPeriod(period) {
    if (!isValidVotingPeriod(period)) {
      return "未設定";
    }

    return `${period.start.replace(/-/g, "/")} - ${period.end.replace(/-/g, "/")}`;
  }

  function formatDuration(ms) {
    const totalSeconds = Math.ceil(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const restMinutes = minutes % 60;
      return `${hours}時間${restMinutes}分`;
    }

    return `${minutes}分${pad(seconds)}秒`;
  }

  function toDateInputValue(date) {
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    return `${year}-${month}-${day}`;
  }

  function isTypingTarget(target) {
    return Boolean(
      target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
    );
  }

  function getCandidate(id) {
    return (
      CANDIDATES.find((candidate) => candidate.id === id) || {
        id: "unknown",
        username: "Unknown User",
        title: "@unknown",
        bio: "候補データが見つかりません。",
        colors: ["#60708f", "#35e7ff"],
      }
    );
  }

  function getFilteredCandidates() {
    const query = normalizeSearch(appState.candidateQuery);

    if (!query) {
      return CANDIDATES;
    }

    return CANDIDATES.filter((candidate) =>
      normalizeSearch(
        [
          candidate.username,
          candidate.title,
          candidate.bio,
          candidate.discordUsername,
          candidate.discordId,
        ].join(" ")
      ).includes(query)
    );
  }

  function candidateAvatar(candidate) {
    return candidate.avatar || avatarSvg(candidate.username, candidate.colors);
  }

  function isValidVote(vote) {
    return Boolean(
      vote &&
        CATEGORIES.some((category) => category.id === vote.categoryId) &&
        CANDIDATES.some((candidate) => candidate.id === vote.candidateId)
    );
  }

  function normalizeSearch(value) {
    return String(value || "").toLocaleLowerCase("ja-JP");
  }

  function normalizeFirebaseUser(user, discordProfile) {
    const profile = discordProfile || getStoredDiscordProfile();
    const shortId = user.uid ? user.uid.slice(0, 6).toUpperCase() : "GUEST";
    return {
      uid: user.uid,
      displayName: profile ? profile.displayName : user.displayName || `Discord User ${shortId}`,
      photoURL: profile
        ? profile.photoURL
        : user.photoURL || avatarSvg(`Discord${shortId}`, ["#5865f2", "#35e7ff"]),
      discordId: profile ? profile.id : "",
      discordUsername: profile ? profile.username : "",
      email: user.email || "",
    };
  }

  function avatarSvg(name, colors) {
    const safeName = makeWellFormed(name || "?");
    const safeColors = colors || ["#60708f", "#35e7ff"];
    const initials = safeName
      .trim()
      .slice(0, 2)
      .toUpperCase();
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${safeColors[0]}"/>
            <stop offset="100%" stop-color="${safeColors[1]}"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="160" height="160" rx="48" fill="#090d1e"/>
        <circle cx="48" cy="38" r="80" fill="url(#g)" opacity="0.82"/>
        <circle cx="124" cy="132" r="70" fill="${safeColors[1]}" opacity="0.42"/>
        <path d="M20 126 C48 96, 82 146, 140 88" fill="none" stroke="#ffffff" stroke-opacity="0.22" stroke-width="5"/>
        <text x="80" y="94" text-anchor="middle" font-size="46" font-family="Inter, Arial, sans-serif" font-weight="900" fill="white" filter="url(#glow)">${escapeSvg(
          initials
        )}</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(makeWellFormed(svg))}`;
  }

  function makeWellFormed(value) {
    const text = String(value || "");
    let output = "";

    for (let index = 0; index < text.length; index += 1) {
      const code = text.charCodeAt(index);

      if (code >= 0xd800 && code <= 0xdbff) {
        const next = text.charCodeAt(index + 1);
        if (next >= 0xdc00 && next <= 0xdfff) {
          output += text[index] + text[index + 1];
          index += 1;
        } else {
          output += "�";
        }
      } else if (code >= 0xdc00 && code <= 0xdfff) {
        output += "�";
      } else {
        output += text[index];
      }
    }

    return output;
  }

  function readStore() {
    try {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      return {};
    }
  }

  function writeStore(patch) {
    const next = Object.assign({}, readStore(), patch);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function broadcastDemoUpdate() {
    window.dispatchEvent(new CustomEvent("naraku-demo-update"));
  }

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY || appState.firebaseReady) {
      return;
    }
    hydrateDemoData();
    renderAll();
  });

  window.addEventListener("naraku-demo-update", () => {
    if (appState.firebaseReady) {
      return;
    }
    hydrateDemoData();
    renderAll();
  });

  function formatNumber(value) {
    return new Intl.NumberFormat("ja-JP").format(value);
  }

  function formatDate(value) {
    const date = getDate(value);
    return new Intl.DateTimeFormat("ja-JP", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  function getTime(value) {
    return getDate(value).getTime();
  }

  function getDate(value) {
    if (!value) {
      return new Date();
    }
    if (typeof value.toDate === "function") {
      return value.toDate();
    }
    if (typeof value === "number") {
      return new Date(value);
    }
    if (value.seconds) {
      return new Date(value.seconds * 1000);
    }
    return new Date(value);
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeSvg(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function hexToRgba(hex, alpha) {
    const normalized = hex.replace("#", "");
    const bigint = parseInt(normalized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
})();
