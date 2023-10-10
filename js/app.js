// Related Items
const menu = [
    // Сніданки
    {
        id: 1,
        title: "Вівсянка з пармезаном",
        category: "Сніданки",
        price: 75,
        img: "./img/soon1.png",
        desc: `Вівсяні пластівці відварені на куриному бульйоні (за бажанням, можна на воді), додається вершкове масло та тертий пармезан.`,
    },
    {
        id: 1,
        title: "Чіабата з лососем",
        category: "Сніданки",
        price: 205,
        img: "./img/soon1.png",
        desc: `Свіжоспечена чіабата, слабосолений лосось, листя салату, сир Чедер, Авокадо,томати ,соус Цезар.`,
    },
    {
        id: 1,
        title: "Великий італійський сніданок",
        category: "Сніданки",
        price: 215,
        img: "./img/soon1.png",
        desc: `Хліб тостовий, моцарела, помідор, соус песто , балик, яйце, картопля краш, листя салату. Чудово підійде для двох.`,
    },
    {
        id: 1,
        title: "Фрітата з овочами",
        category: "Сніданки",
        price: 130,
        img: "./img/soon1.png",
        desc: `Яйця, вершки, броколі, томати, перець, зелень, сир, спеції.`,
    },
    {
        id: 1,
        title: "Сирники",
        category: "Сніданки",
        price: 145,
        img: "./img/soon1.png",
        desc: `Зроблені за секретним рецептом тітки Мартіни. Тітка тримає цей рецепт в секреті . Лише деякі племіннички знають секретні складові цих неймовірих сирників.`,
    },
    {
        id: 1,
        title: "Скрембл з прошутто",
        category: "Сніданки",
        price: 90,
        img: "./img/soon1.png",
        desc: `Ніжна глазунья в поєднанні зі справжнів італійським прошутто та сіжими томатами .`,
    },
    // Антипасті
    {
        id: 2,
        title: "Сирна антипасті",
        category: "Антипасті",
        price: 229,
        img: "./img/soon1.png",
        desc: `Сир пармезан, сир брі, сир горгонзола , моцарела баффало ,оливки, каперси , виноград, горіх грецький, мед, джем.`,
    },
    {
        id: 2,
        title: "М'ясна антипасті",
        category: "Антипасті",
        price: 305,
        img: "./img/soon1.png",
        desc: `Сальтичон , Парма, Прошутто, Чорізо, томати в'ялені, маслини , каперси ,грінки , томати чері.`,
    },
    {
        id: 2,
        title: "Антипасті сет",
        category: "Антипасті",
        price: 520,
        img: "./img/soon1.png",
        desc: ``,
    },
    {
        id: 2,
        title: "В'ялені томати",
        category: "Антипасті",
        price: 69,
        img: "./img/soon1.png",
        desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    },
    {
        id: 2,
        title: "В'ялені оливки",
        category: "Антипасті",
        price: 35,
        img: "./img/soon1.png",
        desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    },
    {
        id: 2,
        title: "В'ялені каперси",
        category: "Антипасті",
        price: 29,
        img: "./img/soon1.png",
        desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    },
    {
        id: 2,
        title: "В'ялені маслини",
        category: "Антипасті",
        price: 35,
        img: "./img/soon1.png",
        desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    },
    // Брускета-бар
    {
        id: 3,
        title: "Капрезе",
        category: "Брускета-бар",
        price: 85,
        img: "./img/soon1.png",
        desc: `Хрусткий багет, свіжі томати, сир моцарела, соус Песто, свіжий базилік.`,
    },
    {
        id: 3,
        title: "З ростбіфом",
        category: "Брускета-бар",
        price: 85,
        img: "./img/soon1.png",
        desc: `Хрусткий багет, соус Цезар, в'ялені томати, Ростбіф, кінза.`,
    },
    {
        id: 3,
        title: "З лососем",
        category: "Брускета-бар",
        price: 85,
        img: "./img/soon1.png",
        desc: `Хрусткий багет , крем-сир, слабосолений лосоль , каперси, свіжий базилік.`,
    },
    {
        id: 3,
        title: "З прошутто",
        category: "Брускета-бар",
        price: 85,
        img: "./img/soon1.png",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 3,
        title: "Всі чотири",
        category: "Брускета-бар",
        price: 315,
        img: "./img/soon1.png",
        desc: ``,
    },
    // Закуски
    {
        id: 4,
        title: "Карпачо з телятини",
        category: "Закуски",
        price: 235,
        img: "./img/soon1.png",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 4,
        title: "Карпачо з лосося",
        category: "Закуски",
        price: 295,
        img: "./img/soon1.png",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    // Салати
    {
        id: 5,
        title: "Фітнес",
        category: "Салати",
        price: 205,
        img: "./img/soon1.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Цезар з куркою",
        category: "Салати",
        price: 225,
        img: "./img/soon1.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Парма",
        category: "Салати",
        price: 225,
        img: "./img/soon1.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Вітелло тонато",
        category: "Салати",
        price: 249,
        img: "./img/soon1.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "З креветками та авокадо",
        category: "Салати",
        price: 295,
        img: "./img/soon1.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Теплий з телятиною",
        category: "Салати",
        price: 259,
        img: "./img/soon1.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Латук",
        category: "Салати",
        price: 199,
        img: "./img/soon1.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Овочевий",
        category: "Салати",
        price: 155,
        img: "./img/soon1.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    // Гарячі закуски
    {
        id: 6,
        title: "Рибні палички",
        category: "Гарячі закуски",
        price: 119,
        img: "./img/soon1.png",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Аранчіні",
        category: "Гарячі закуски",
        price: 135,
        img: "./img/soon1.png",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Креветка в кокосовій стружці",
        category: "Гарячі закуски",
        price: 395,
        img: "./img/soon1.png",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Жульєн з мідіями",
        category: "Гарячі закуски",
        price: 165,
        img: "./img/soon1.png",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Баклажани пармеджано",
        category: "Гарячі закуски",
        price: 160,
        img: "./img/soon1.png",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Сир фрі",
        category: "Гарячі закуски",
        price: 105,
        img: "./img/soon1.png",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    // Перші страви
    {
        id: 7,
        title: "Курячий бульйон з домашньою локшиною",
        category: "Перші страви",
        price: 87,
        img: "./img/soon1.png",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 7,
        title: "Міністроне на основі особуко",
        category: "Перші страви",
        price: 165,
        img: "./img/soon1.png",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 7,
        title: "Сирний крем суп",
        category: "Перші страви",
        price: 135,
        img: "./img/soon1.png",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    // Гарніри
    {
        id: 8,
        title: "Картопля фрі",
        category: "Гарніри",
        price: 75,
        img: "./img/soon1.png",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 8,
        title: "Картопляне пюре з пармезаном",
        category: "Гарніри",
        price: 75,
        img: "./img/soon1.png",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 8,
        title: "Картопля з беконом та зеленню",
        category: "Гарніри",
        price: 85,
        img: "./img/soon1.png",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 8,
        title: "Овочі гриль",
        category: "Гарніри",
        price: 140,
        img: "./img/soon1.png",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    // Піца
    {
        id: 9,
        title: "Маргарита",
        category: "Піца",
        price: 185,
        img: "./img/soon1.png",
        desc: `Томати, сир моцарела, свіжий базелік, соус <br> ( 380 г )`,
    },
    {
        id: 9,
        title: "BBQ",
        category: "Піца",
        price: 310,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Вулкан",
        category: "Піца",
        price: 465,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Салямі",
        category: "Піца",
        price: 259,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Гавайська",
        category: "Піца",
        price: 255,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Капрічозе",
        category: "Піца",
        price: 285,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Пепероні",
        category: "Піца",
        price: 269,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Ростбіф",
        category: "Піца",
        price: 329,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Чотири сири",
        category: "Піца",
        price: 280,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "З прошутто",
        category: "Піца",
        price: 310,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    // Кальцоне
    {
        id: 10,
        title: "Кальцоне з м'ясом",
        category: "Кальцоне",
        price: 259,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Кальцоне з сиром",
        category: "Кальцоне",
        price: 210,
        img: "./img/soon1.png",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    // Равіолі
    {
        id: 11,
        title: "Равіолі з телятиною",
        category: "Равіолі",
        price: 215,
        img: "./img/soon1.png",
        desc: `Ricotta is fantastic in desserts, and this cake is no exception. Begin this recipe 1 day ahead.`,
    },
    {
        id: 11,
        title: "Равіолі з лососем",
        category: "Равіолі",
        price: 297,
        img: "./img/soon1.png",
        desc: `Ricotta is fantastic in desserts, and this cake is no exception. Begin this recipe 1 day ahead.`,
    },
    // Паста
    {
        id: 12,
        title: "Паста карбонара",
        category: "Паста",
        price: 185,
        img: "./img/soon1.png",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Паста балоньєзе",
        category: "Паста",
        price: 189,
        img: "./img/soon1.png",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Паста нері",
        category: "Паста",
        price: 279,
        img: "./img/soon1.png",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Паста кватро формаджі",
        category: "Паста",
        price: 160,
        img: "./img/soon1.png",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Паста з білими грибами та куркою",
        category: "Паста",
        price: 190,
        img: "./img/soon1.png",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Лазанья балоньєзе",
        category: "Паста",
        price: 205,
        img: "./img/soon1.png",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Лазанья карбонара",
        category: "Паста",
        price: 197,
        img: "./img/soon1.png",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    // Ризотто
    {
        id: 13,
        title: "Ризотто з грибами",
        category: "Ризотто",
        price: 169,
        img: "./img/soon1.png",
        desc: `Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.`,
    },
    {
        id: 13,
        title: "Ризотто з морепродуктами",
        category: "Ризотто",
        price: 290,
        img: "./img/soon1.png",
        desc: `Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.`,
    },
    // Для великої компанії
    {
        id: 14,
        title: "Сет м'ясний",
        category: "Для великої компанії",
        price: 885,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 14,
        title: "Сет фрі",
        category: "Для великої компанії",
        price: 515,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    // Страви з м'яса
    {
        id: 15,
        title: "Куряче філе в кисло-солодкому соусі з овачами гриль",
        category: "Страви з м'яса",
        price: 179,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Індичка з манго та фісташкою",
        category: "Страви з м'яса",
        price: 279,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Курча табака",
        category: "Страви з м'яса",
        price: 225,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Шатобріан",
        category: "Страви з м'яса",
        price: 370,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Медальйони з телятини",
        category: "Страви з м'яса",
        price: 385,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Стейк рібай з хрусткою картоплею",
        category: "Страви з м'яса",
        price: 440,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Куряча грудка під соусом песто",
        category: "Страви з м'яса",
        price: 215,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Медальйони зі свинини з картопляним пюре",
        category: "Страви з м'яса",
        price: 229,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    // Риба та морепродукти
    {
        id: 16,
        title: "Форель",
        category: "Риба та морепродукти",
        price: 305,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 16,
        title: "Стейк з лосося",
        category: "Риба та морепродукти",
        price: 395,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 16,
        title: "Соте з морепродуктів",
        category: "Риба та морепродукти",
        price: 390,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 16,
        title: "Запечена скумбрія",
        category: "Риба та морепродукти",
        price: 205,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    // Десерти
    {
        id: 17,
        title: "Шоколадний фондан",
        category: "Десерти",
        price: 135,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 17,
        title: "Ягідний чізкейк",
        category: "Десерти",
        price: 125,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 17,
        title: "Морозиво",
        category: "Десерти",
        price: 87,
        img: "./img/soon1.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    
];

// Загружаем элементы при загрузке страницы
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
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
              <h4 class="price">₴${menuItem.price}</h4>
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
      <p>Доставка страв до дверейвашого будинку</p>
      </div>

      <div class="phone"><p><a href="tel:+380689525758">+38 068 952 57 58</a></p></div>

      <div class="information-footer">
          <a href="https://instagram.com/trattoria_sicily?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr"><img style="width: 50px; height: 50px;" src="./img/instagram.png" alt="instagram"></a>
          <a href="https://www.facebook.com/Sicily.borispol"><img style="width: 50px; height: 50px;" src="./img/facebook.png" alt="facebook"></a>
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


  
  
  
  
  
  