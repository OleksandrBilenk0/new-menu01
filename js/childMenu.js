const menu2 = [
  // Перші страви
  {
    id: 18,
    title: "Крем-суп з броколі",
    category: "Перші страви",
    price: 80,
    img: "./img/дитяче меню/101.png",
    desc: `Овочі, вершки, бульйон, пармезан, сіль.`,
  },
  {
    id: 18,
    title: "Бульйон з фрикадельками",
    category: "Перші страви",
    price: 70,
    img: "./img/дитяче меню/102.png",
    desc: `Куряче м'ясо, бульйон,спагетті , морква, зелень.`,
  },
  {
    id: 18,
    title: "Нагетси",
    category: "Перші страви",
    price: 139,
    img: "./img/дитяче меню/103.png",
    desc: `Куряче філе в паніровці , запікається та після чого подаються з кетчупом.`,
  },
  // Основні страви
  {
    id: 19,
    title: "Патато маус",
    category: "Основні страви",
    price: 119,
    img: "./img/дитяче меню/104.png",
    desc: `Картопляне пюре, курячі котлети на пару, свіжий огірок, свіжий томат.`,
  },
  {
    id: 19,
    title: "Міні-бургер з куркою та картоплею фрі",
    category: "Основні страви",
    price: 175,
    img: "./img/дитяче меню/105.png",
    desc: `Котлета з курячого філе, зелень, томат, булочка та соус. Картопля фрі з кетчупом.`,
  },
  {
    id: 19,
    title: "Метелики з індичкою",
    category: "Основні страви",
    price: 95,
    img: "./img/дитяче меню/106.png",
    desc: `Фарфале, індичка, вершки, пармезан, зелень.`,
  },
  {
    id: 19,
    title: "Спагетті з м`ясними кульками",
    category: "Основні страви",
    price: 139,
    img: "./img/дитяче меню/107.png",
    desc: `Спагетті власного виробництва , м'ясні кульки з відбірної телятини , соус томатно-вершковий. `,
  },

  // Міні піца
  {
    id: 20,
    title: "Пепероні",
    category: "Міні піца",
    price: 145,
    img: "./img/дитяче меню/108.png",
    desc: `Тісто для піци власного виробництва, томатна основа, моцарела, Пепероні, маслини.`,
  },
  {
    id: 20,
    title: "Піца Фрі",
    category: "Міні піца",
    price: 140,
    img: "./img/дитяче меню/109.png",
    desc: `Тісто для піци власного виробництва,томатна основа, моцарела, мисливські ковбаски, томати, картопля фрі.`,
  },
  {
    id: 20,
    title: "Сирна піца",
    category: "Міні піца",
    price: 140,
    img: "./img/дитяче меню/110.png",
    desc: `Тісто для піци власного виробництва, вершкова основа, моцарела, пармезан, домашній сир, виноград, горіх кешью.`,
  },
  // Напої
  {
    id: 21,
    title: "Сік в асортименті",
    category: "Напої",
    price: 25,
    img: "./img/дитяче меню/111.png",
    desc:``,
  },
  {
    id: 21,
    title: "Яблучний сауер",
    category: "Напої",
    price: 75,
    img: "./img/дитяче меню/112.png",
    desc: `Екстракт білка, яблучнй сік, екстракт кориці.`,
  },
  {
    id: 21,
    title: "Молочний коктейль",
    category: "Напої",
    price: 95,
    img: "./img/дитяче меню/113.png",
    desc: `Молоко , морозиво (можна обрати смак), цукор.`,
  },
  {
    id: 21,
    title: "Мохіто",
    category: "Напої",
    price: 93,
    img: "./img/дитяче меню/114.png",
    desc: `Тростинний цукор, лайм, м'ята, содова.`,
  },
  {
    id: 21,
    title: "Какао з маршмелоу",
    category: "Напої",
    price: 70,
    img: "./img/дитяче меню/115.png",
    desc: `Какао, молоко, маршмелоу (за бажанням можна додати цукор або корицю).`,
  },
];


window.addEventListener("DOMContentLoaded", function () {
  // Здесь можно вызвать функции для отображения меню, если необходимо
  displayMenu2Items(menu2);
  displayMenu2Buttons();
});

const toggleMenu2Btn = document.getElementById('toggleMenu2Btn');
const menu2Section = document.getElementById('menu2Section');

toggleMenu2Btn.addEventListener('click', function () {
  menu2Section.style.display = (menu2Section.style.display === 'none') ? 'block' : 'none';
});

// функция для отображения элементов меню
function displayMenu2Items(menu2Items) {
  const menu2Section = document.querySelector('.section2-center');
  const menu2HTML = menu2Items.map(function (menu2Item) {
    return `
      <article class="menu2-item">
        <img src="${menu2Item.img}" alt="${menu2Item.title}" class="photo2" />
        <div class="item2-info">
          <header>
            <h4>${menu2Item.title}</h4>
            <h4 class="price2">₴${menu2Item.price}</h4>
          </header>
          <p class="item2-text">${menu2Item.desc}</p>
        </div>
      </article>
    `;
  });

  // Преобразуем массив HTML в строку и добавляем в HTML-код секции меню
  menu2Section.innerHTML = menu2HTML.join("");
}

// Ваша функция для отображения и фильтрации кнопок меню
function displayMenu2Buttons() {
  const categories2 = ["Повне меню"];
  const menu2Buttons = document.querySelector(".menu2btn-container");

  // Проходим по элементам меню и добавляем уникальные категории в массив
  menu2.forEach(function (menu2Item) {
    if (!categories2.includes(menu2Item.category)) {
      categories2.push(menu2Item.category);
    }
  });

  // Создаем кнопки категорий
  const category2Buttons = categories2.map(function (category) {
    return `<button class="filter2-btn" type="button" data-id="${category}">${category}</button>`;
  }).join("");

  // Добавляем кнопки категорий в HTML
  menu2Buttons.innerHTML = category2Buttons;

  // Добавляем обработчики событий для кнопок фильтрации
  const filter2Buttons = menu2Buttons.querySelectorAll(".filter2-btn");

  filter2Buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const category = event.currentTarget.dataset.id;

      if (category === "Повне меню") {
        // Если выбрана категория "all", показываем все элементы меню
        displayMenu2Items(menu2);
      } else {
        // В противном случае, фильтруем элементы меню по категории
        const filtered2Menu = menu2.filter(function (menu2Item) {
          return menu2Item.category === category;
        });

        displayMenu2Items(filtered2Menu);
      }
    });
  });
}
