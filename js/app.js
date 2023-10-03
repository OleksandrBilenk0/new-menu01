// Related Items
const menu = [
    {
        id: 1,
        title: "Панкейк",
        category: "Сніданки",
        price: 15.99,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        title: "Антипасті",
        category: "Антипасті",
        price: 13.99,
        img: "./img/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Брускета-бар",
        category: "Брускета-бар",
        price: 6.99,
        img: "./img/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Закуски",
        category: "Закуски",
        price: 20.99,
        img: "./img/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Салати",
        category: "Салати",
        price: 22.99,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Гарячі закуски",
        category: "Гарячі закуски",
        price: 18.99,
        img: "./img/item-5.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "buttermilk pancakes",
        category: "Перші страви",
        price: 8.99,
        img: "./img/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "buttermilk pancakes",
        category: "Гарніри",
        price: 12.99,
        img: "./img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "buttermilk pancakes",
        category: "Піца",
        price: 16.99,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "buttermilk pancakes",
        category: "Кальцоне",
        price: 39.99,
        img: "./img/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "Baked ricotta cake",
        category: "Равіолі",
        price: 19.99,
        img: "./img/item-11.jpg",
        desc: `Ricotta is fantastic in desserts, and this cake is no exception. Begin this recipe 1 day ahead.`,
    },
    {
        id: 12,
        title: "Easy lemon meringue pie",
        category: "Паста",
        price: 49.99,
        img: "./img/item-12.jpg",
        desc: `You will need a kitchen blowtorch for this delicious dessert recipe.`,
    },
    {
        id: 13,
        title: "Coconut yoghurt cake",
        category: "Різотто",
        price: 29.99,
        img: "./img/item-13.jpg",
        desc: `Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.`,
    },
    {
        id: 14,
        title: "buttermilk pancakes",
        category: "Для великої компанії",
        price: 66666,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 15,
        title: "buttermilk pancakes",
        category: "Страви з м'яса",
        price: 88,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 16,
        title: "buttermilk pancakes",
        category: "Риба та морепродукти",
        price: 88,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 17,
        title: "buttermilk pancakes",
        category: "Десерти",
        price: 88,
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
              <h4 class="price">$${menuItem.price}</h4>
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
      <p>Здесь может быть текст с информацией о заведении.</p>
      <p>Здесь может быть текст с информацией о заведении.</p>
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
