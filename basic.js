//items
const menu= [
    {
        id: 1,
        title: "Chocolate Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./menu-item2.jpg",
        desc: "Mornings are always a rush in our house, but that does not stop us from having something satisfying for breakfast. To make our mornings a little special, a chocolate pancake goes a very long way.",
    },
    {
        id: 2,
        title: "Diner Double",
        category: "lunch",
        price: 13.99,
        img: "./menu-item3.jpg",
        desc: "A sandwich consisting of a patty made from ground chicken, served in a bun, typically hot and often with other ingredients.",
    },
    {
        id: 3,
        title: "Chocolate Malt",
        category: "drink",
        img: "./menu-item4.jpg",
        desc: "Chocolate malt drinks are highly popular in Southeast Asia and are sometimes enjoyed together with a scoop of vanilla ice cream or whipped cream. As such, they are given fanciful names like “Milo Dinosaur” and “Milo Godzilla”.",
    },
    {
        id: 4,
        title: "Boiled Eggs on Toast with Baked Beans",
        category: "breakfast",
        img: "./menu-item5.jpg",
        desc: "Boiled eggs are eggs, typically from a chicken, cooked with their shells unbroken, usually by immersion in boiling water."
    },
    {
        id: 5,
        title: "American Classic",
        category: "lunch",
        img: "./menu-item6.jpg",
        desc: "It's seriously amazing and very easy to make. These burgers come out so juicy, and are built perfectly with all the classic American burger toppings: melty cheese, tomato, onions, lettuce, ketchup and mustard…on a soft sesame burger bun."
    },
    {
        id: 6,
        title: "Chocolate Strawberry Milkshake",
        category: "drink",
        img: "./menu-item7.jpg",
        desc: "Love chocolate covered strawberries? Then this creamy Chocolate Covered Strawberries Milkshake recipe is for you."
    },
    {
        id: 7,
        title: "Italian Baked Pasta",
        category: "lunch",
        img: "./menu-item8.jpg",
        desc: "Our five-ingredient Italian baked pasta is super easy to make and includes layers of your choice of pasta, three cheeses and marinara sauce."
    },
    {
        id: 8,
        title: "Cheesy Chicken Lasagna",
        category: "lunch",
        img: "./menu-item9.jpg",
        desc: "The cheesiest chicken lasagna layered with cheddar and mozzarella cheese, rich chicken bolognese and no-boil lasagna sheets is a dinner favorite. Lasagna is pretty much always guaranteed to impress. And even though a classic lasagna is a thing of beauty, this chicken lasagna recipe has been my go-to for a while now."
    }
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function() {
    let displayMenu = menu.map(function(item) {
        //console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
});