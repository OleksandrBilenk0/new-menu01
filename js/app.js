// Related Items
const menu = [
    // Сніданки
    {
        id: 1,
        title: "Вівсянка з пармезаном",
        category: "Сніданки",
        price: 75,
        img: "./img/photo_5323369585958833648_y.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 1,
        title: "Чіабата з лососем",
        category: "Сніданки",
        price: 205,
        img: "./img/01сніданки/chiabata-salmon.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 1,
        title: "Великий італійський сніданок",
        category: "Сніданки",
        price: 215,
        img: "./img/photo_5323369585958833648_y.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 1,
        title: "Фрітата з овочами",
        category: "Сніданки",
        price: 130,
        img: "./img/photo_5323369585958833648_y.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 1,
        title: "Сирники",
        category: "Сніданки",
        price: 145,
        img: "./img/01сніданки/syrnyki.jpg",
        desc: `Зроблені за секретним рецептом тітки Мартіни`,
    },
    {
        id: 1,
        title: "Скрембл з прошутто",
        category: "Сніданки",
        price: 90,
        img: "./img/photo_5323369585958833648_y.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    // Антипасті
    {
        id: 2,
        title: "Сирна антипасті",
        category: "Антипасті",
        price: 229,
        img: "./img/photo_5323369585958833673_y.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 2,
        title: "М'ясна антипасті",
        category: "Антипасті",
        price: 305,
        img: "./img/photo_5323369585958833673_y.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 2,
        title: "Антипасті сет",
        category: "Антипасті",
        price: 520,
        img: "./img/photo_5323369585958833673_y.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 2,
        title: "В'ялені томати",
        category: "Антипасті",
        price: 69,
        img: "./img/photo_5323369585958833673_y.jpg",
        desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    },
    {
        id: 2,
        title: "В'ялені оливки",
        category: "Антипасті",
        price: 35,
        img: "./img/photo_5323369585958833673_y.jpg",
        desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    },
    {
        id: 2,
        title: "В'ялені каперси",
        category: "Антипасті",
        price: 29,
        img: "./img/photo_5323369585958833673_y.jpg",
        desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    },
    {
        id: 2,
        title: "В'ялені маслини",
        category: "Антипасті",
        price: 35,
        img: "./img/photo_5323369585958833673_y.jpg",
        desc: `Ціна вказана за 50г, та може змінюватись залежно від ваги`,
    },
    // Брускета-бар
    {
        id: 3,
        title: "Капрезе",
        category: "Брускета-бар",
        price: 85,
        img: "./img/photo_5323369585958833704_y.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 3,
        title: "З роздбіфом",
        category: "Брускета-бар",
        price: 85,
        img: "./img/photo_5323369585958833704_y.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 3,
        title: "З лососем",
        category: "Брускета-бар",
        price: 85,
        img: "./img/photo_5323369585958833704_y.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 3,
        title: "З прошутто",
        category: "Брускета-бар",
        price: 85,
        img: "./img/photo_5323369585958833704_y.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 3,
        title: "Всі чотири",
        category: "Брускета-бар",
        price: 315,
        img: "./img/photo_5323369585958833704_y.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    // Закуски
    {
        id: 4,
        title: "Карпачо з телятини",
        category: "Закуски",
        price: 235,
        img: "./img/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 4,
        title: "Карпачо з лосося",
        category: "Закуски",
        price: 295,
        img: "./img/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    // Салати
    {
        id: 5,
        title: "Фітнес",
        category: "Салати",
        price: 205,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Цезар з куркою",
        category: "Салати",
        price: 225,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Парма",
        category: "Салати",
        price: 225,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Вітелло тонато",
        category: "Салати",
        price: 249,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "З креветками та авокадо",
        category: "Салати",
        price: 295,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Теплий з телятиною",
        category: "Салати",
        price: 259,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Латук",
        category: "Салати",
        price: 199,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 5,
        title: "Овочевий",
        category: "Салати",
        price: 155,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    // Гарячі закуски
    {
        id: 6,
        title: "Рибні палички",
        category: "Гарячі закуски",
        price: 119,
        img: "./img/item-5.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Аранчіні",
        category: "Гарячі закуски",
        price: 135,
        img: "./img/item-5.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Креветка в кокосовій стружці",
        category: "Гарячі закуски",
        price: 395,
        img: "./img/item-5.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Жульєн з мідіями",
        category: "Гарячі закуски",
        price: 165,
        img: "./img/item-5.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Баклажани пармеджано",
        category: "Гарячі закуски",
        price: 160,
        img: "./img/item-5.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 6,
        title: "Сир фрі",
        category: "Гарячі закуски",
        price: 105,
        img: "./img/item-5.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    // Перші страви
    {
        id: 7,
        title: "Курячий бульйон з домашньою локшиною",
        category: "Перші страви",
        price: 87,
        img: "./img/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 7,
        title: "Міністроне на основі особуко",
        category: "Перші страви",
        price: 165,
        img: "./img/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 7,
        title: "Сирний крем суп",
        category: "Перші страви",
        price: 135,
        img: "./img/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    // Гарніри
    {
        id: 8,
        title: "Картопля фрі",
        category: "Гарніри",
        price: 75,
        img: "./img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 8,
        title: "Картопляне пюре з пармезаном",
        category: "Гарніри",
        price: 75,
        img: "./img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 8,
        title: "Картопля з беконом та зеленню",
        category: "Гарніри",
        price: 85,
        img: "./img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 8,
        title: "Овочі гриль",
        category: "Гарніри",
        price: 140,
        img: "./img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    // Піца
    {
        id: 9,
        title: "Маргарита",
        category: "Піца",
        price: 185,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "BBQ",
        category: "Піца",
        price: 310,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Вулкан",
        category: "Піца",
        price: 465,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Салямі",
        category: "Піца",
        price: 259,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Гавайська",
        category: "Піца",
        price: 255,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Капрічозе",
        category: "Піца",
        price: 285,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Пепероні",
        category: "Піца",
        price: 269,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Ростбіф",
        category: "Піца",
        price: 329,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "Чотири сири",
        category: "Піца",
        price: 280,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "З прошутто",
        category: "Піца",
        price: 310,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    // Кальцоне
    {
        id: 10,
        title: "Кальцоне з м'ясом",
        category: "Кальцоне",
        price: 259,
        img: "./img/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Кальцоне з сиром",
        category: "Кальцоне",
        price: 210,
        img: "./img/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    // Равіолі
    {
        id: 11,
        title: "Равіолі з телятиною",
        category: "Равіолі",
        price: 215,
        img: "./img/item-11.jpg",
        desc: `Ricotta is fantastic in desserts, and this cake is no exception. Begin this recipe 1 day ahead.`,
    },
    {
        id: 11,
        title: "Равіолі з лососем",
        category: "Равіолі",
        price: 297,
        img: "./img/item-11.jpg",
        desc: `Ricotta is fantastic in desserts, and this cake is no exception. Begin this recipe 1 day ahead.`,
    },
    // Паста
    {
        id: 12,
        title: "Паста карбонара",
        category: "Паста",
        price: 185,
        img: "./img/item-12.jpg",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Паста балоньєзе",
        category: "Паста",
        price: 189,
        img: "./img/item-12.jpg",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Паста нері",
        category: "Паста",
        price: 279,
        img: "./img/item-12.jpg",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Паста кватро формаджі",
        category: "Паста",
        price: 160,
        img: "./img/item-12.jpg",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Паста з білими грибами та куркою",
        category: "Паста",
        price: 190,
        img: "./img/item-12.jpg",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Лазанья балоньєзе",
        category: "Паста",
        price: 205,
        img: "./img/item-12.jpg",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 12,
        title: "Лазанья карбонара",
        category: "Паста",
        price: 197,
        img: "./img/item-12.jpg",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    // Ризотто
    {
        id: 13,
        title: "Ризотто з грибами",
        category: "Ризотто",
        price: 169,
        img: "./img/item-13.jpg",
        desc: `Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.`,
    },
    {
        id: 13,
        title: "Ризотто з морепродуктами",
        category: "Ризотто",
        price: 290,
        img: "./img/item-13.jpg",
        desc: `Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.`,
    },
    // Для великої компанії
    {
        id: 14,
        title: "Сет м'ясний",
        category: "Для великої компанії",
        price: 885,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 14,
        title: "Сет фрі",
        category: "Для великої компанії",
        price: 515,
        img: "./img/14компанія/02.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    // Страви з м'яса
    {
        id: 15,
        title: "Куряче філе в кисло-солодкому соусі з овачами гриль",
        category: "Страви з м'яса",
        price: 179,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Індичка з манго та фісташкою",
        category: "Страви з м'яса",
        price: 279,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Курча табака",
        category: "Страви з м'яса",
        price: 225,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Шатобріан",
        category: "Страви з м'яса",
        price: 370,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Медальйони з телятини",
        category: "Страви з м'яса",
        price: 385,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Стейк рібай з хрусткою картоплею",
        category: "Страви з м'яса",
        price: 440,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Куряча грудка під соусом песто",
        category: "Страви з м'яса",
        price: 215,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "Медальйони зі свинини з картопляним пюре",
        category: "Страви з м'яса",
        price: 229,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    // Риба та морепродукти
    {
        id: 16,
        title: "Форель",
        category: "Риба та морепродукти",
        price: 305,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 16,
        title: "Стейк з лосося",
        category: "Риба та морепродукти",
        price: 395,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 16,
        title: "Соте з морепродуктів",
        category: "Риба та морепродукти",
        price: 390,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 16,
        title: "Запечена скумбрія",
        category: "Риба та морепродукти",
        price: 205,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    // Десерти
    {
        id: 17,
        title: "Шоколадний фондан",
        category: "Десерти",
        price: 135,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 17,
        title: "Ягідний чізкейк",
        category: "Десерти",
        price: 125,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 17,
        title: "Морозиво",
        category: "Десерти",
        price: 87,
        img: "./img/item-1.jpeg",
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
      <img style="width: 40px; height: 40px;" src="./img/banquet.png" alt="instagram">
      <p>Банкети, фуршети, кейтеринг</p></div>
      
      <div class="class">
      <img style="width: 60px; height: 60px;" src="./img/pets.png" alt="instagram">
      <p>Завжди раді вашим чотирилапим друзям</p></div>
      
      <div class="class">
      <img style="width: 20px; height: 20px;" src="./img/discount.png" alt="instagram">
      <p>Знижка 10% кожного понеділка на улюблену пасту</p>
      </div>

      <div class="class">
      <img style="width: 20px; height: 20px;" src="./img/discount.png" alt="instagram">
      <p>Знижка 5% за відмітку в сторіс з кодовим словом</p>
      </div>

      <div class="class">
      <img style="width: 50px; height: 50px;" src="./img/pngegg.png" alt="instagram">
      <p>Кожний четвер вечір фільмів</p>
      </div>

      <div class="class">
      <img style="width: 30px; height: 30px;" src="./img/pngegg (1).png" alt="instagram">
      <p>Транслюємо найцікавіші спортивні події</p>
      </div>

      <div class="class">
      <img style="width: 50px; height: 50px;" src="./img/pngwing.com.png" alt="instagram">
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

  