// Related Items
const menu = [
    // Сніданки
    {
        id: 1,
        title: "Вівсянка з пармезаном",
        category: "Сніданки",
        price: "₴79",
        img: "./img/01сніданки/0101.png",
        desc: `Вівсяні пластівці відварені на курячому бульйоні (за бажанням, можна на воді), додається вершкове масло та тертий пармезан.`,
    },
    {
        id: 1,
        title: "Сніданок Ромео",
        category: "Сніданки",
        price: "₴229",
        img: "./img/01сніданки/0106.png",
        desc: `Дві булочки, ростбіф , сирний соус, томати, огірок , яйця Бенедикт , перець чилі.`,
    },
    {
        id: 1,
        title: "Сніданок Джульєти",
        category: "Сніданки",
        price: "₴195",
        img: "./img/01сніданки/0107.png",
        desc: `Хрусткий  тост, крем-сир, авокадо, огірок, с/с лосось , томати, яйце пашот , зелень.`,
    },
    {
        id: 1,
        title: "Великий італійський сніданок",
        category: "Сніданки",
        price: "₴229",
        img: "./img/01сніданки/0103.png",
        desc: `Хліб тостовий, моцарела, помідор, соус "Песто" , балик, яйце, картопля краш, листя салату. Чудово підійде для двох.`,
    },
    {
        id: 1,
        title: "Фрітата з овочами",
        category: "Сніданки",
        price: "₴135",
        img: "./img/01сніданки/0104.png",
        desc: `Яйця, вершки, броколі, томати, перець, зелень, сир, спеції.`,
    },
    {
        // 01сніданки/0102.png
        id: 1,
        title: "Сирники з пармезаном",
        category: "Сніданки",
        price: "₴159",
        img: "./img/soon1.png",
        desc: `Солоні сирники, з сиром пармезан, оливками , та сирним соусом.`,
        
    },
    {
        id: 1,
        title: "Скрембл з прошутто",
        category: "Сніданки",
        price: "₴95",
        img: "./img/01сніданки/0105.png",
        desc: `Ніжна яєчня у поєднанні зі справжнім італійським прошутто та свіжими томатами .`,
    },
    

    // Антипасті
    {
        id: 2,
        title: "Сирна антипасті <br> (300г.)",
        category: "Антипасті",
        price: "₴239",
        img: "./img/02антипасті/0201.png",
        desc: `Сир "Пармезан", сир "Брі", сир "Горгонзола" , сир "Моцарела", баффало ,оливки, каперси , виноград, горіх грецький, мед, джем.`,
    },
    {
        id: 2,
        title: "М'ясна антипасті <br> (270г.)",
        category: "Антипасті",
        price: "₴319",
        img: "./img/02антипасті/0202.png",
        desc: `Сальтисон , парма, прошутто, чорізо, томати в'ялені, маслини , каперси ,грінки , томати чері.`,
    },
    {
        // 02антипасті/0203.png
        id: 2,
        title: "Антипасті сет <br> (570г.)",
        category: "Антипасті",
        price: "₴530",
        img: "./img/soon1.png",
        desc: `Смачне поєднання сирної антипасті та м'ясної антипасті.`,
        
    },
    // {
    //     id: 2,
    //     title: "В'ялені томати",
    //     category: "Антипасті",
    //     price: 69,
    //     img: "./img/02антипасті/0203.png",
    //     desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    // },
    // {
    //     id: 2,
    //     title: "В'ялені оливки",
    //     category: "Антипасті",
    //     price: 35,
    //     img: "./img/02антипасті/0203.png",
    //     desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    // },
    // {
    //     id: 2,
    //     title: "В'ялені каперси",
    //     category: "Антипасті",
    //     price: 29,
    //     img: "./img/02антипасті/0203.png",
    //     desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    // },
    // {
    //     id: 2,
    //     title: "В'ялені маслини",
    //     category: "Антипасті",
    //     price: 35,
    //     img: "./img/02антипасті/0203.png",
    //     desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    // },


    // Брускета-бар
    {
        id: 3,
        title: "Капрезе <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴85",
        img: "./img/03брускета-бар/0301.png",
        desc: `Хрусткий багет, свіжі томати, сир "Моцарела", соус "Песто", свіжий базилік.`,
    },
    {
        // 03брускета-бар/0306.png
        id: 3,
        title: "З креветками <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴85",
        img: "./img/soon1.png",
        desc: `Хруский багет , крем-сир, авокадо, креветка, томати, соус, зелень.`,
    },
    {
        id: 3,
        title: "З ростбіфом <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴85",
        img: "./img/03брускета-бар/0302.png",
        desc: `Хрусткий багет, соус "Цезар", в'ялені томати, ростбіф, кінза.`,
    },
    {
        // 03брускета-бар/0307.png
        id: 3,
        title: "З тунцем  <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴85",
        img: "./img/soon1.png",
        desc: `Хрусткий багет, томати, цибуля , тунець, оливки,маслини, соус, зелень.`,
    },
    {
        id: 3,
        title: "З лососем <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴85",
        img: "./img/03брускета-бар/0303.png",
        desc: `Хрусткий багет, крем-сир, слабосолений лосось , каперси, свіжий базилік.`,
    },
    {
        id: 3,
        title: "З прошутто <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴85",
        img: "./img/03брускета-бар/0304.png",
        desc: `Хрусткий багет, моніні, крем-сир, руккола,прошутто.`,
    },
    {
        // 03брускета-бар/0305.png
        id: 3,
        title: "Сет брускет <br> (6шт.)",
        category: "Брускета-бар",
        price: "₴475",
        img: "./img/soon1.png",
        desc: `По одній з вище перерахованих брускет.`,
    },

    // Закуски
    {
        id: 4,
        title: "Паштет з цибулевим конфетюром <br> (100/20/50г.)",
        category: "Закуски",
        price: "₴139",
        img: "./img/04закуски/0403.png",
        desc: `Паштет з курячої печінки , грінки, масло вершкове, цибулевий конфетюр.`,
    },
    {
        id: 4,
        title: "Карпачо з телятини <br> (90/30/15г.)",
        category: "Закуски",
        price: "₴245",
        img: "./img/04закуски/0401.png",
        desc: `Італійська страва приготована виключно з відбірного сирого м'яса телятини . Поливається медово-гірчичним соусом , руколла та пармезан .За бажанням можна додати грінки. `,
    },
    {
        id: 4,
        title: "Карпачо з лосося <br> (90/30/15г.)",
        category: "Закуски",
        price: "₴295",
        img: "./img/04закуски/0402.png",
        desc: `Філе лосося попередньо полите оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
    // Салати
    {
        id: 5,
        title: "Фітнес <br> (300г.)",
        category: "Салати",
        price: "₴215",
        img: "./img/05салати/0501.png",
        desc: `Шпинат, огірки, морква, стебло селери, сир "Горгонзола", журавлина, горіхи кеш’ю, індичка, соус “Французький”.`,
    },
    {
        id: 5,
        title: "Цезар з куркою <br> (300г.)",
        category: "Салати",
        price: "₴230",
        img: "./img/05салати/0502.png",
        desc: `Мікс салату , бекон , куряче філе, пармезан, перепелині яйця,  томати чері , грінки , соус "Цезар".`,
    },
    {
        id: 5,
        title: "Цезар з лососем <br> (300г.)",
        category: "Салати",
        price: "₴269",
        img: "./img/05салати/0509.png",
        desc: `Мікс салату, соус Цезар, томати, яйця перепелині, лосось смажений на грилі, тости, пармезан.`,
    },
    {
        id: 5,
        title: "Парма <br> (240г.)",
        category: "Салати",
        price: "₴235",
        img: "./img/05салати/0503.png",
        desc: `Мікс салату, томати чері, Парма, виноград, сир "Горгонзола" ,сир "Моцарелла", підсмажена картопля, заправка “Парма”.`,
    },
    {
        id: 5,
        title: "Вітелло тонато <br> (300г.)",
        category: "Салати",
        price: "₴255",
        img: "./img/05салати/0504.png",
        desc: `Мікс салату, ростбіф, розмарин,чебрець, масло вершкове, гірчиця, томати в'ялені, каперси, маслини, оливки, соус "Нісуаз".`,
    },
    {
        id: 5,
        title: "З креветками та авокадо <br> (280г.)",
        category: "Салати",
        price: "₴305",
        img: "./img/05салати/0505.png",
        desc: `Авокадо, смажена креветка ,мікс салату,томати чері, заправка “Оливково-лимонна”.`,
    },
    {
        id: 5,
        title: "Теплий зі свининою <br> (300г.)",
        category: "Салати",
        price: "₴235",
        img: "./img/05салати/0510.png",
        desc: `Свинина, цукіні, печериці, цибуля, томати, пармезан, соус, зелень.`,
    },
    {
        // 05салати/0506.png
        id: 5,
        title: "Теплий з телятиною <br> (240г.)",
        category: "Салати",
        price: "₴269",
        img: "./img/soon1.png",
        desc: `Мікс салату,телятина,томати чері,сир "Пармезан", соус “Медово-гірчичний”.`,
    },
    {
        id: 5,
        title: "Латук <br> (180г.)",
        category: "Салати",
        price: "₴210",
        img: "./img/05салати/0507.png",
        desc: `Мікс салату, соус "Французький", сир "Горгонзола", куряче філе,  масло вершкове, томати в'ялені.`,
    },
    {
        id: 5,
        title: "Овочевий <br> (300г.)",
        category: "Салати",
        price: "₴165",
        img: "./img/05салати/0508.png",
        desc: `Томати, огірок, моцарела, авокадо, соус, зелень.`,
    },
    // Гарячі закуски
    {
        id: 6,
        title: "Рибні палички <br> (120/50г.)",
        category: "Гарячі закуски",
        price: "₴124",
        img: "./img/06гаряче/0601.png",
        desc: `Філе риби "Минтай" обсмажене в паніровці та великій кількості масла . Подаються з соусом "Тар-тар". В одній порції 5 паличок.`,
    },
    {
        id: 6,
        title: "Аранчіні <br> (3шт.)",
        category: "Гарячі закуски",
        price: "₴137",
        img: "./img/06гаряче/0602.png",
        desc: `Традиційна закуска Сицилії. З попереньо відвареного рису "Арборіо" формується кулька, в яку кладуть крем-сир, в'ялені томати . Паніруються та смажаться в олії. Подаються з соусом "Вершковий песто". `,
    },
    {
        id: 6,
        title: "Сир камамбер в мигдалевих пластівцях <br> (100/50г.)",
        category: "Гарячі закуски",
        price: "₴219",
        img: "./img/06гаряче/0607.png",
        desc: `Сир камамбер , панірується в мигдалевих пластівцях та подається з ягідним соусом.`,
    },
    {
        id: 6,
        title: "Креветка в кокосовій стружці <br> (250/80г.)",
        category: "Гарячі закуски",
        price: "₴395",
        img: "./img/06гаряче/0603.png",
        desc: `Тигрова креветка , обгорнута кокосовим панінруванням та обсмажені в олії. В одній порції 10 креветок. Подаються з соусом "BBQ".`,
    },
    {
        id: 6,
        title: "Жульєн з мідіями <br> (180г.)",
        category: "Гарячі закуски",
        price: "₴170",
        img: "./img/06гаряче/0604.png",
        desc: `Листкове тісто, м'ясо мідії, печериці, цибуля,вершки, твердий сир, соєвий соус,лимон.`,
    },
    {
        id: 6,
        title: "Баклажани пармеджано <br> (260г.)",
        category: "Гарячі закуски",
        price: "₴170",
        img: "./img/06гаряче/0605.png",
        desc: `Баклажани, томати, сир "Моцарела", сир "Пармезан",  соус "Песто" власного виробництва, базилік.`,
    },
    {
        // 06гаряче/0606.png
        id: 6,
        title: "Сир фрі <br> (200/50г.)",
        category: "Гарячі закуски",
        price: "₴115",
        img: "./img/soon1.png",
        desc: `Домашній сир в паніруванні. Смажаться у фрітюрі. Подаються з ягідним соусом.`,
    },
    // Перші страви
    {
        id: 7,
        title: "Курячий бульйон <br> (300г.)",
        category: "Перші страви",
        price: "₴89",
        img: "./img/07перше/0701.png",
        desc: `Бульйон на основі курки, домашня паста, перепелині яйця, куряче філе, зелень.`,
    },
    {
        id: 7,
        title: "Суп тосканська ріболліта <br> (350г.)",
        category: "Перші страви",
        price: "₴139",
        img: "./img/07перше/0705.png",
        desc: `Квасоля, томати, цибуля, морква, часник, селера,капуста, подається з грінками та пармезаном .`,
    },
    {
        id: 7,
        title: "Мінестроне на основі особуко <br> (500г.)",
        category: "Перші страви",
        price: "₴175",
        img: "./img/07перше/0702.png",
        desc: `Особуко, томати, баклажан, броколі, цукіні, цибуля, перець болгарський , кінза.`,
    },
    {
        id: 7,
        title: "Сирний крем-суп <br> (300г.)",
        category: "Перші страви",
        price: "₴139",
        img: "./img/07перше/0703.png",
        desc: `Вешковий сир, бульйон , картопля , вершки.`,
    },
    {
        id: 7,
        title: "Грибний крем-суп <br> (300г.)",
        category: "Перші страви",
        price: "₴139",
        img: "./img/07перше/0704.png",
        desc: `Печериці, вершки , цибуля, гриби білі.`,
    },
    // Гарніри
    {
        id: 8,
        title: "Картопля фрі <br> (150г.)",
        category: "Гарніри",
        price: "₴75",
        img: "./img/08гарніри/0801.png",
        desc: `Картопля попередньо смажена у великій кількості масла. Подається з медово-гірчичним соусом.`,
    },
    {
        // 08гарніри/0802.png
        id: 8,
        title: "Картопляне пюре з пармезаном <br> (160г.)",
        category: "Гарніри",
        price: "₴75",
        img: "./img/soon1.png",
        desc: `Картопляне пюре, вершкове масло, сир "Пармезан".`,
    },
    {
        id: 8,
        title: "Картопля з часником та зеленню <br> (200г.)",
        category: "Гарніри",
        price: "₴85",
        img: "./img/08гарніри/0803.png",
        desc: `Картопляні дольки смажені у великій кількості масла, подається зі смаженим беконом,часник, цибуля, зелень.`,
    },
    {
        id: 8,
        title: "Овочі гриль <br> (300г.)",
        category: "Гарніри",
        price: "₴140",
        img: "./img/08гарніри/0804.png",
        desc: `Баклажани, цукіні, перець болгарський, томати, печериці, зелень. Готуються на грилі`,
    },
    // Піца
    {
        id: 9,
        title: "Маргарита <br> (380г.)",
        category: "Піца",
        price: "₴185",
        img: "./img/09піца/0901.png",
        desc: `Томати, "Моцарела", свіжий базилік, соус.`,
    },
    {
        id: 9,
        title: "Жульєн <br> (600г.)",
        category: "Піца",
        price: "₴219",
        img: "./img/09піца/0911.png",
        desc: `Вершкова основа, сир "Моцарела", печериці, цибуля, куряче філе, сир Пармезан.`,
    },
    {
        id: 9,
        title: "BBQ <br> (700г.)",
        category: "Піца",
        price: "₴315",
        img: "./img/09піца/0902.png",
        desc: `Сир "Моцарела", копчений сир, мисливські ковбаски, бекон, балик, печериці, цибуля , соус "bbq", томатна основа.`,
    },
    {
        id: 9,
        title: "Вулкан <br> (880г.)",
        category: "Піца",
        price: "₴479",
        img: "./img/09піца/0903.png",
        desc: `Томати, бекон, салямі, сир "Горгонзола", соус "Песто"(власного виробницта),сир "Моцарела", рукола, сир "Пармезан", маслини, томати чері.`,
    },
    {
        // 09піца/0912.png
        id: 9,
        title: "Піца фрі <br> (600г.)",
        category: "Піца",
        price: "₴269",
        img: "./img/soon1.png",
        desc: `Томатна основа, сир "Моцарела", мисливські ковбаски, томати, картопля фрі.`,
    },
    {
        id: 9,
        title: "Салямі <br> (400г.)",
        category: "Піца",
        price: "₴265",
        img: "./img/09піца/0904.png",
        desc: `Томатна основа, салямі , сир "Моцарела".`,
    },
    {
        id: 9,
        title: "Гавайська <br> (510г.)",
        category: "Піца",
        price: "₴260",
        img: "./img/09піца/0905.png",
        desc: `Томатна основа, копчене куряче філе, сир "Моцарела", ананаси, орегано.`,
    },
    {
        id: 9,
        title: "Капрічозе <br> (620г.)",
        category: "Піца",
        price: "₴290",
        img: "./img/09піца/0906.png",
        desc: `Сир "Моцарела", сальтичон, копа парма, печериці,яйце,  рукола, сир "Пармезан", соус.`,
    },
    {
        id: 9,
        title: "Пепероні <br> (520г.)",
        category: "Піца",
        price: "₴275",
        img: "./img/09піца/0907.png",
        desc: `Сир "Моцарела", пепероні, маслини, перець чілі , соус.`,
    },
    {
        id: 9,
        title: "Ростбіф <br> (650г.)",
        category: "Піца",
        price: "₴335",
        img: "./img/09піца/0908.png",
        desc: `Печериці, болгарський перець, ростбіф, сир моцарела, червона цибуля , рукола, пармезан.`,
    },
    {
        id: 9,
        title: "З сиром та авокадо <br> (650г.)",
        category: "Піца",
        price: "₴335",
        img: "./img/09піца/0913.png",
        desc: `Вершки, крем-сир, авокадо, цибуля синя, в"ялені томати, горіхи кешью.`,
    },
    {
        id: 9,
        title: "Чотири сири <br> (570г.)",
        category: "Піца",
        price: "₴280",
        img: "./img/09піца/0909.png",
        desc: `Сири : "Моцарела", "Горгонзола", "Пармезан", "Гауда"; волоські горіхи, виноград, вершковий соус.`,
    },
    {
        id: 9,
        title: "З прошутто <br> (600г.)",
        category: "Піца",
        price: "₴315",
        img: "./img/09піца/0910.png",
        desc: `Вершкова основа, груша, копа парма, сир "Горгонзола", рукола, сир "Моцарела".`,
    },
    // Кальцоне
    {
        id: 10,
        title: "Кальцоне з індичкою та овачами гриль <br> (500г.)",
        category: "Кальцоне",
        price: "₴225",
        img: "./img/10кальцоне/1003.png",
        desc: `Філе індички , томати, цукіні, печериці, перець болгарський, томатний соус, сир "Моцарела"`,
    },
    {
        id: 10,
        title: "Кальцоне з м'ясом <br> (480г.)",
        category: "Кальцоне",
        price: "₴265",
        img: "./img/10кальцоне/1001.png",
        desc: `Тісто власного виробництва, томатна основа, сир "Моцарела", ростбіф, цибуля,бекон, зелень.`,
    },
    {
        id: 10,
        title: "Кальцоне з сиром <br> (500г.)",
        category: "Кальцоне",
        price: "₴215",
        img: "./img/10кальцоне/1002.png",
        desc: `Тісто власного виробництва, вершкова основа, сир "Моцарела", сир твердий, журавлина , грецький горіх.`,
    },
    // Равіолі
    {
        // 11равіолі/1101.png
        id: 11,
        title: "Равіолі з телятиною <br> (280г.)",
        category: "Равіолі",
        price: "₴230",
        img: "./img/soon1.png",
        desc: `Тісто власного виробництва , телятина, соус песто, сир "Пармезан", вершки.`,
    },
    {
        id: 11,
        title: "Равіолі з лососем <br> (280г.)",
        category: "Равіолі",
        price: "₴297",
        img: "./img/11равіолі/1102.png",
        desc: `Тісто власного виробництва, лосось, шпинат, крем-сир, сир "Пармезан", вершки .`,
    },
    // Паста
    {
        id: 12,
        title: "Паста карбонара <br> (300г.)",
        category: "Паста",
        price: "₴190",
        img: "./img/12паста/1201.png",
        desc: `Паста власного виробництва , свіжий бекон, соус на основі жовтків та вершків , пармезан , оливкова олія, спеції.`,
    },
    {
        id: 12,
        title: "Паста болоньєзе <br> (300г.)",
        category: "Паста",
        price: "₴195",
        img: "./img/12паста/1202.png",
        desc: `Паста власного виробництва, томатний соус на основі "Пілаті", базилік, сир "Пармезан", соус "Болоньєзе".`,
    },
    {
        // 12паста/1203.png
        id: 12,
        title: "Паста нері <br> (300г.)",
        category: "Паста",
        price: "₴295",
        img: "./img/soon1.png",
        desc: `Паста власного виробництва з додаванням чорнила каракатиці , лосось, тигрова креветка , шпинат , базилік, томат чері. Соус томатний , в основі також часник та біле вино.`,
    },
    {
        id: 12,
        title: "Паста кватро формаджі <br> (250г.)",
        category: "Паста",
        price: "₴169",
        img: "./img/12паста/1204.png",
        desc: `Тісто власного виробницва, вершки,сир "Пармезан", сир "Горгонзола", крем-сир, сир "Чедер", мигдалеві пластівці.`,
    },
    {
        id: 12,
        title: "Паста з білими грибами та куркою <br> (300г.)",
        category: "Паста",
        price: "₴195",
        img: "./img/12паста/1205.png",
        desc: `Паста власного виробництва, куряче філе, білі гриби. Соус на основі білого вина та вершків,сир "Пармезан" `,
    },
    {
        id: 12,
        title: "Лазанья болоньєзе <br> (400г.)",
        category: "Паста",
        price: "₴210",
        img: "./img/12паста/1206.png",
        desc: `Тісто власного виробництва , соус "Бешамель" ,соус "Болоньєзе" , спеції та оливкова олія. Запікається приблизно до 40 хвилин.`,
    },
    {
        id: 12,
        title: "Лазанья карбонара <br> (400г.)",
        category: "Паста",
        price: "₴205",
        img: "./img/12паста/1207.png",
        desc: `Тісто власного виробництва, сир "Моцарела", соус "Бешамель", печериці, цибуля, балик.`,
    },
    // Ризотто
    {
        // 13ризотто/1301.png
        id: 13,
        title: "Ризотто з грибами <br> (400г.)",
        category: "Ризотто",
        price: "₴169",
        img: "./img/soon1.png",
        desc: `В тягучий,неймовірно ароматний Ризотто, який вже випарували на білому вині та спеціях додають білі гриби та слайси Пармезану.`,
    },
    {
        id: 13,
        title: "Ризотто з морепродуктами <br> (450г.)",
        category: "Ризотто",
        price: "₴310",
        img: "./img/13ризотто/1302.png",
        desc: `Рис "Арборіо" проварюється в спеціях,після чого в тягуче відварене ризотто додається лосось, креветка тигрова та мідії.`,
    },
    // Для великої компанії
    {
        id: 14,
        title: "Сет м'ясний <br> (1000г.)",
        category: "Для великої компанії",
        price: "₴905",
        img: "./img/14компанія/1401.png",
        desc: `Свинина, куряче філе, телятина, овочі на грилі, картопля, соус.`,
    },
    {
        id: 14,
        title: "Сет фрі <br> (700/50/50/50г.)",
        category: "Для великої компанії",
        price: "₴525",
        img: "./img/14компанія/1402.png",
        desc: `Нагетси, сир фрі, рибні палички, мідії фрі, картопля фрі, солоні хлібці, соус.`,
    },
    {
        id: 14,
        title: "Сет до пива <br> (600/50/50г.)",
        category: "Для великої компанії",
        price: "₴390",
        img: "./img/14компанія/1403.png",
        desc: `Бастурма, курячі крила, чіпси з лаваша, мисливські ковбаски, грінки з часником, соус.`,
    },
    // Страви з м'яса
    {
        id: 15,
        title: "Куряче філе в кисло-солодкому соусі з овачами гриль <br> (200/30г.)",
        category: "Страви з м'яса",
        price: "₴190",
        img: "./img/15м'ясо/1501.png",
        desc: `Філе куряче запечене зі спеціями, кисло-солодкий соус на основі меду та соєвого соусу . Подається з овочами гриль( баклажан, цукіні, перець болгарський ).`,
    },
    {
        id: 15,
        title: "Індичка з манго та фісташкою <br> (290/50г.)",
        category: "Страви з м'яса",
        price: "₴285",
        img: "./img/15м'ясо/1502.png",
        desc: `Філе індички, манго, фісташки, бекон, гірчиця , спеції. `,
    },
    {
        id: 15,
        title: "Грудка з моцарелою та рис з овочами <br> (280/80г.)",
        category: "Страви з м'яса",
        price: "₴239",
        img: "./img/15м'ясо/1509.png",
        desc: `Рис з овочами, куряче філе з сиром "Моцарела" та томатами`,
    },
    {
        // 15м'ясо/1503.png
        id: 15,
        title: "Курча табака <br> (350г.)",
        category: "Страви з м'яса",
        price: "₴239",
        img: "./img/soon1.png",
        desc: `Четвертина курчати , спеції, часник, листя салату, соус "Сальса".`,
    },
    {
        id: 15,
        title: "Шатобріан <br> (280г.)",
        category: "Страви з м'яса",
        price: "₴379",
        img: "./img/15м'ясо/1504.png",
        desc: `Ніжні шматочки телятини під винно-сирним соусом з додаванням вершів та часнику.`,
    },
    {
        // 15м'ясо/1505.png
        id: 15,
        title: "Медальйони з телятини <br> (200/30г.)",
        category: "Страви з м'яса",
        price: "₴395",
        img: "./img/soon1.png",
        desc: `Медальйони готуються з відбірної телячої вирізки , запікаються зі спеціями та при подачі поливаються соусом з вершків, томатів та болгарського перцю.`,
    },
    {
        id: 15,
        title: "Стейк рібай з хрусткою картоплею <br> (190/90г.)",
        category: "Страви з м'яса",
        price: "₴459",
        img: "./img/15м'ясо/1506.png",
        desc: `Рібай (прожарку стейка уточнюйте в офіціанта), соус "Сальса". Картопля краш, томати, цибуля, часник, зелень `,
    },
    {
        id: 15,
        title: "Стейк зі свининою під грибним соусом з картоплею по домашньому <br> (300/200г.)",
        category: "Страви з м'яса",
        price: "₴215",
        img: "./img/15м'ясо/1507.png",
        desc: `Свинина, картопля, соус грибний на вершковій основі`,
    },
    {
        id: 15,
        title: "Медальйони зі свинини з картопляним пюре <br> (350г.)",
        category: "Страви з м'яса",
        price: "₴229",
        img: "./img/15м'ясо/1508.png",
        desc: `Свинина, томати,зелень . Подається з томатним "Песто" власного виробництва, томатами чері та картопляним пюре.`,
    },
    // Риба та морепродукти
    {
        id: 16,
        title: "Форель <br> (350г.)",
        category: "Риба та морепродукти",
        price: "₴315",
        img: "./img/16риба/1601.png",
        desc: `Запечена в спеціях та з лимоном форель. Подається з долькою свіжого лимону та салатом, заправлений морським соусом.`,
    },
    {
        // 16риба/1602.png
        id: 16,
        title: "Стейк з лосося <br> (300г.)",
        category: "Риба та морепродукти",
        price: "₴395",
        img: "./img/16риба/1602.png",
        desc: `Пряний лосось смажений на грилі. Подається зі спаржою, руколою та томатами.`,
    },
    {
        id: 16,
        title: "Соте з морепродуктів <br> (350г.)",
        category: "Риба та морепродукти",
        price: "₴405",
        img: "./img/16риба/1603.png",
        desc: `Креветка тигрова, лосось, мідії, біла риба, овочевий мікс, соус на основі вершів та білого вина, лимон, зелень`,
    },
    {
        id: 16,
        title: "Запечена скумбрія <br> (160/40г.)",
        category: "Риба та морепродукти",
        price: "₴210",
        img: "./img/16риба/1604.png",
        desc: `Філе скумбрії смажене на грилі, листя салату .Подається з соусом "Тар-тар".`,
    },
    // Десерти
    {
        id: 17,
        title: "Шоколадний фондан <br> (180/50г.)",
        category: "Десерти",
        price: "₴139",
        img: "./img/17десерти/1701.png",
        desc: `Ніжний бісквітний кекс, розрізавши який розтікається гарячий шоколад . Поласувати варто з кулькою морозива)`,
    },
    {
        id: 17,
        title: "Ягідний чізкейк <br> (150г.)",
        category: "Десерти",
        price: "₴130",
        img: "./img/17десерти/1702.png",
        desc: `Ніжна вершково-сирна основа, заливається ягідною сумішшю.`,
    },
    {
        id: 17,
        title: "Сирники за секретним рецептом тітки Мартіни <br> (200/50/50г.)",
        category: "Десерти",
        price: "₴130",
        img: "./img/17десерти/1704.png",
        desc: `Тітка готує їх за дуже секретним рецептом, тому не розголошує цю таємницю.`,
    },
    {
        id: 17,
        title: "Пера інвале <br> (300г.)",
        category: "Десерти",
        price: "₴145",
        img: "./img/17десерти/1705.png",
        desc: `Пряна маринована груша у червоному вині, в листковому тісті.`,
    },
    {
        id: 17,
        title: "Профітролі з морозивом під солоною карамеллю <br> (200г.)",
        category: "Десерти",
        price: "₴140",
        img: "./img/17десерти/1706.png",
        desc: `Профітролі в сердині з морозивом, поливаються солоною карамеллю.`,
    },
    {
        id: 17,
        title: "Шоколадний бісквіт під вишневим джемом та шоколадом <br> (200г.)",
        category: "Десерти",
        price: "₴139",
        img: "./img/17десерти/1707.png",
        desc: `Шоколадний бісквіт з горішками в середині, поливається шоколадом та вишневим ганашем.`,
    },
    {
        // 17десерти/1703.png
        id: 17,
        title: "Морозиво <br> (150г.)",
        category: "Десерти",
        price: "₴87",
        img: "./img/soon1.png",
        desc: `В асортименті. За наявність смаків можна уточнити в офіціанта.`,
    },
    {
        id: 18,
        title: "ВИННА КАРТА",
        category: "Бар",
        price: "",
        img: "/img/Бар/IMG_0012.JPG",
        desc: `<i><b><u>Білі вина</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>150 / 750</b><br><br> 
        Pinot Grigio, Veneto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 88/440 <br>(Італія) сухе <br><br> 
        Riesling Feinherb,Dr. Loosen &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 87/435 <br>(Німеччина) напівсолодке <br><br> 
        Guramishvili's Marani &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 111/555 <br> Saguramos Chinebuli <br>(Грузія) сухе<br><br>

        <i><b><u>Ігристі вина</u></b></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>150 / 750</b><br><br> 
        Pinot Grigio Brut, Canti &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 85/425 <br> (Італія) сухе біле <br><br> 
        Lambrusco dell'Emilia &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 80/400 <br>напвісолодке  біле <br><br> 
        Cava Mirame Rose Brut &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 112/560 <br>рожеве брют <br><br> 
        Prosecco Frizzante &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 105/525 <br>(Італія) сухе біле <br><br> 
        Galaktioni Reserve Brut &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 89/445 <br>біле брют <br><br>
        
        <i><b><u>Рожеві вина</u></b></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>150 / 750</b><br><br>
        Rosatello Ruffino &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 104/520 <br> (Італія) сухе <br><br> 
        Pinot Grigio Veneto Rose, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 83/415 <br> Canti <br>(Італія) напівсухе біле <br><br> 
        KTW Special Collection  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 113/565 <br> IA’S Rose <br>рожеве напівсухе<br><br>
        
        <i><b><u>Червоні вина</u></b></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>150 / 750</b><br><br>
        Merlot, Baron d'Arignac &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 85/425 <br> (Франція) напівсолодке <br><br> 
        Bordolino Classico, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 88/440 <br> Zeni <br>(Італія) сухе <br><br> 
        Alastro la Segretta, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 116/580 <br> Planeta <br>(Італія) сухе <br><br> 
        KTW Special Collection, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ____/670 <br> Kindzmarauli <br>(Грузія) червоне напівсолодке<br><br>
        
        <i><b><u>Безалкогольні вина</u></b></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>150 / 750</b><br><br>
        Just, Peter Mertes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 96/480 <br> (Німеччина)  червоне напівсолодке <br><br> 
        Just, Peter Mertes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 96/480 <br>(Німеччина) біле напівсолодке 
        `,
    },
    {
        id: 18,
        title: "Міцний алкоголь",
        category: "Бар",
        price: "",
        img: "/img/Бар/IMG_0010.JPG",
        desc: `<i><b><u>Бренді</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>50ml</b><br><br> 
        Старий Кахеті 4* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 63 <br><br> 
        Закарпатський &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 57 <br><br> 
        Brigadier Grand Reserva &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 70 <br>(Іспанія) 5*<br><br>
        
        <i><b><u>Горілка</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>50ml</b><br><br> 
        Nemiroff оригінал &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35 <br><br> 
        Nemiroff Delikat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35 <br><br> 
        Finlandia журавлина &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67 <br><br>
        Absolut &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58 <br><br>
        
        <i><b><u>Віскі</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>50ml</b><br><br> 
        Jack Daniels Old №7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 119 <br><br> 
        Jameson Irish Whiskey &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 114 <br><br> 
        Dewar’s Caribbean Smooth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 112 <br>(Шотландія, 8 Y.O)<br><br>
        Dewar’s White Label &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 86 <br><br>
        
        <i><b><u>Ром</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>50ml</b><br><br> 
        Bacardi Spiced &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 95 <br><br> 
        Bacardi Carta Negro &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 95 <br><br> 
        Bacardi Carta Blanca &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 95 <br><br>
        
        <i><b><u>Текіла</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>50ml</b><br><br> 
        Olmeca blanco &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 97 <br><br>
        
        <i><b><u>Джин</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>50ml</b><br><br> 
        Bombay Sapphire &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 90 <br><br>
        
        <i><b><u>Лікери</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>50ml</b><br><br> 
        Beileys &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 88 <br><br> 
        Jagermeister &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 70 <br><br>
        
        <i><b><u>Вермут</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>50ml</b><br><br> 
        Martini Bianco &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58 <br><br> 
        Martini Rosso &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 63 <br><br> 
        Martini Extra dry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58 <br><br>
        
        <i><b><u>Настоянки</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>50ml</b><br><br> 
        Аранча &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 70 <br>(робила тітка Мартіна)<br><br>
        Лімончелло &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 70 <br>(робила тітка Мартіна)<br><br>  
        Becherovka &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 70 <br><br>
        `,
    },
    {
        id: 18,
        title: "Слабоалкогольні напої",
        category: "Бар",
        price: "",
        img: "/img/Бар/IMG_0013.JPG",
        desc: `<i><b><u>Пиво та сидр на розлив</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>0,3 / 0,5</b><br><br> 
        Бочкове лагер &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 55/81  <br><br> 
        Бочкове нефільтроване &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58/84 <br><br> 
        Сидр &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 47/73 <br><br>
        
        <i><b><u>Пиво в пляшці</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br> 
        Перша приватна &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 87 <br>броварня (0,5) Б/А  <br><br> 
        Krusovice Cerne (0,5) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 76 <br><br> 
        Corona (0,3) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 99
        `,
    },
    {
        id: 18,
        title: "Коктейлі",
        category: "Бар",
        price: "",
        img: "/img/Бар/IMG_0009.JPG",
        desc: `<i><b><u>Коктейлі</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br> 
        White negroni &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 155 <br><br> 
        Кривава мері &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 155 <br><br> 
        П'янкий грейпфрут &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 155 <br><br> 
        Aperol spritz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 155 <br><br> 
        Hugo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 155 <br><br> 
        Мартіні фієро &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 155 <br><br> 
        Беррі кіллер &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 155 <br><br> 
        Мохіто &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 155 <br><br> 
        Бакарді спайс кола &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 155 <br><br>

        <i><b><u>Шоти</u></b></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>60ml</b><br><br> 
        Б-52 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 99 <br><br> 
        Бункер шот &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 99 <br><br>
        Зелений мексиканець &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 99 <br><br> 
        `,
    },
    {
        id: 19,
        title: "Безалкогольні напої",
        category: "Бар б/а",
        price: "",
        img: "./img/17десерти/1704.png",
        desc: ``,
    },

];



// Загружаем элементы при загрузке страницы
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

const toggleMenuBtn = document.getElementById('toggleMenuBtn');
const menuSection = document.getElementById('menuSection');

toggleMenuBtn.addEventListener('click', function () {
    menuSection.style.display = (menuSection.style.display === 'none') ? 'block' : 'none';
});

// Функция для отображения элементов меню
function displayMenuItems(menuItems) {
    const menuSection = document.querySelector(".section-center");
    const menuHTML = menuItems.map(function (menuItem) {
        return `
        <article class="menu-item">
          <img src="${menuItem.img}" alt="${menuItem.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${menuItem.title}</h4>
              <h4 class="price">${menuItem.price}</h4>
            </header>
            <p class="item-text">${menuItem.desc}</p>
          </div>
        </article>
      `;
    });

    // Преобразуем массив HTML в строку и добавляем в HTML-код
    menuSection.innerHTML = menuHTML.join("");
}



// Функция для отображения и фильтрации кнопок меню
function displayMenuButtons() {
    const categories = ["Повне меню"]; // Создаем массив категорий, начинаем с "all"
    const menuButtons = document.querySelector(".btn-container");

    // Проходим по элементам меню и добавляем уникальные категории в массив
    menu.forEach(function (menuItem) {
        if (!categories.includes(menuItem.category)) {
            categories.push(menuItem.category);
        }
    });

    // Создаем кнопки категорий
    const categoryButtons = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");


    // Добавляем кнопки категорий в HTML
    menuButtons.innerHTML = categoryButtons;

    // Добавляем обработчики событий для кнопок фильтрации
    const filterButtons = menuButtons.querySelectorAll(".filter-btn");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const category = event.currentTarget.dataset.id;

            if (category === "Повне меню") {
                // Если выбрана категория "all", показываем все элементы меню
                displayMenuItems(menu);
            } else {
                // В противном случае, фильтруем элементы меню по категории
                const filteredMenu = menu.filter(function (menuItem) {
                    return menuItem.category === category;
                });

                displayMenuItems(filteredMenu);
            }
        });
    });
}



const aboutUsBtn = document.getElementById('aboutUsBtn');
const aboutUsContent = document.getElementById('aboutUsContent');

// Функция, которая отображает информацию о заведении
function showAboutUsInfo() {
    // Здесь можно добавить код для загрузки и отображения информации
    // Например:
    aboutUsContent.innerHTML = `
      <h2></h2>
      <div class="class">
      <img src="./img/banquet.png" alt="instagram">
      <p>Банкети, фуршети, кейтеринг</p></div>
      
      <div class="class">
      <img src="./img/pets.png" alt="instagram">
      <p>Завжди раді вашим чотирилапим друзям</p></div>
      
      <div class="class">
      <img src="./img/discount.png" alt="instagram">
      <p>Знижка 10% кожного понеділка на улюблену пасту</p>
      </div>

      <div class="class">
      <img src="./img/discount.png" alt="instagram">
      <p>Знижка 5% за відмітку в сторіс з кодовим словом</p>
      </div>

      <div class="class">
      <img src="./img/pngegg.png" alt="instagram">
      <p>Кожний четвер вечір фільмів</p>
      </div>

      <div class="class">
      <img src="./img/pngegg (1).png" alt="instagram">
      <p>Транслюємо найцікавіші спортивні події</p>
      </div>

      <div class="class">
      <img src="./img/pngwing.com.png" alt="instagram">
      <p>Доставка страв до дверей вашого будинку</p>
      </div>

      <div class="phone"><p><a href="tel:+380689525758">+38 (068) -952-57-58</a></p></div>

      <div class="information-footer">
      <a href="https://instagram.com/trattoria_sicily?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr"><img style="width: 50px; height: 50px; border-radius: 6px;" src="./img/instagram.png" alt="instagram"></a>
      <a href="https://www.facebook.com/Sicily.borispol"><img style="width: 50px; height: 50px; border-radius: 50%; border: 1px solid white" src="./img/facebook.png" alt="facebook"></a>
        </div>
        
    `;
}

// Добавляем обработчик события на кнопку
aboutUsBtn.addEventListener('click', showAboutUsInfo);


// Флаг, который указывает, открыта ли информация
let isAboutUsInfoOpen = false;

// Функция, которая отображает информацию о заведении или скрывает ее
function toggleAboutUsInfo() {
    if (isAboutUsInfoOpen) {
        aboutUsContent.style.display = 'none'; // Скрываем информацию
    } else {
        aboutUsContent.style.display = 'block'; // Отображаем информацию
    }
    isAboutUsInfoOpen = !isAboutUsInfoOpen; // Инвертируем флаг
}

// Добавляем обработчик события на кнопку
aboutUsBtn.addEventListener('click', toggleAboutUsInfo);



