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
        price: 8.99,
        img: "./menu-item4.jpg",
        desc: "Chocolate malt drinks are highly popular in Southeast Asia and are sometimes enjoyed together with a scoop of vanilla ice cream or whipped cream. As such, they are given fanciful names like “Milo Dinosaur” and “Milo Godzilla”.",
    },
    {
        id: 4,
        title: "Boiled Eggs on Toast with Baked Beans",
        category: "breakfast",
        price: 7.99,
        img: "./menu-item5.jpg",
        desc: "Boiled eggs are eggs, typically from a chicken, cooked with their shells unbroken, usually by immersion in boiling water."
    },
    {
        id: 5,
        title: "American Classic",
        category: "lunch",
        price: 5.99,
        img: "./menu-item6.jpg",
        desc: "It's seriously amazing and very easy to make. These burgers come out so juicy, and are built perfectly with all the classic American burger toppings: melty cheese, tomato, onions, lettuce, ketchup and mustard…on a soft sesame burger bun."
    },
    {
        id: 6,
        title: "Chocolate Strawberry Milkshake",
        category: "drink",
        price: 10.35,
        img: "./menu-item7.jpg",
        desc: "Love chocolate covered strawberries? Then this creamy Chocolate Covered Strawberries Milkshake recipe is for you."
    },
    {
        id: 7,
        title: "Italian Baked Pasta",
        category: "lunch",
        price: 8.56,
        img: "./menu-item8.jpg",
        desc: "Our five-ingredient Italian baked pasta is super easy to make and includes layers of your choice of pasta, three cheeses and marinara sauce."
    },
    {
        id: 8,
        title: "Cheesy Chicken Lasagna",
        category: "lunch",
        price: 7.59,
        img: "./menu-item9.jpg",
        desc: "The cheesiest chicken lasagna layered with cheddar and mozzarella cheese, rich chicken bolognese and no-boil lasagna sheets is a dinner favorite. Lasagna is pretty much always guaranteed to impress. And even though a classic lasagna is a thing of beauty, this chicken lasagna recipe has been my go-to for a while now."
    },
    {
        id: 9,
        title: "Crispy Chicken with Plum Sauce",
        category: "dinner",
        price: 5.63,
        img: "./menu-item10.jpg",
        desc: "This Chinese Plum Chicken Stir Fry is a spicy chicken dinner that makes a great takeout alternative! My Crispy Chinese Plum Chicken with Sticky Chilli Sauce is super-quick to make (20 minutes!)."
    },
    {
        id: 10,
        title: "Italian Classic Spaghetti Bolognese",
        category: "dinner",
        price: 7.76,
        img: "./menu-item11.jpg",
        desc: "With this Spaghetti Bolognese recipe, the technique of the Italian classic has been simplified so you can create a tasty meal in under 30 minutes."
    },
    {
        id: 11,
        title: "Classic Cheese and Tomato Pizza",
        category: "dinner",
        price: 9.99,
        img: "./menu-item12.jpg",
        desc: "This is a classic homemade pizza recipe with soft dough, tomato sauce, and oozing with cheese. Who needs takeout when you make the perfect cheese pizza at home?"
    },
    {
        id: 12,
        title: "Veg Cheesy Pizza",
        category: "dinner",
        price: 5.99,
        img: "./menu-item13.jpg",
        desc: "The pizza is an Italian dish. It consists of a dough base, the pizza base on which foods such as cheese, veggies, corn, olives, mushrooms, paneer are placed, which is usually in an oven. Even non veg pizza is also available made with meat. Pizza is worlds favourite fast food and everyone enjoy it."
    },
    {
        id: 13,
        title: "Chicken Tikk Pizza",
        category: "lunch",
        price: 7.49,
        img: "./menu-item14.jpg",
        desc: "Everyone loves Chicken Tikka Pizza; the perfect blend of mild Indian Masalas and Italian herbs topped with cheese makes this Pizza exceptional. You can add fresh Coriander leaves to give it a distinctive Desi twist. You will love my Paneer Pizza, Whole Wheat chicken Pizza and Vegetable Pizza as well."
    },
    {
        id: 14,
        title: "Green Tea",
        category: "drink",
        price: 8.69,
        img: "./menu-item15.jpg",
        desc: "A sip of a warming cup of green tea, we know, can do much to soothe both our throats and our souls. But its benefits don’t end there. When applied topically, green tea can revive your complexion and comes packed with skin-loving properties. We ask experts to give us the low-down on this radiance-boosting ingredient."
    },
    {
        id: 15,
        title: "Latte Milky Coffee",
        category: "drink",
        price: 6.19,
        img: "./menu-item16.jpg",
        desc: "Caffè latte, often shortened to just latte in English, is a coffee drink of Italian origin made with espresso and steamed milk."
    },
    {
        id: 16,
        title: "Cheesecake Squares",
        category: "dessert",
        price: 6.99,
        img: "./menu-item17.jpg",
        desc: "Try these peanut butter and jam cheesecake squares. We have chosen a fruit topping, but you could opt for chocolate, turning it into a giant peanut butter cup."
    },
    {
        id: 17,
        title: "Apple Crumble and Custard Pie",
        category: "dessert",
        price: 3.44,
        img: "./menu-item18.jpg",
        desc: "This homely pie has delicious baked apple throughout the custard and is topped with a traditional crumble - perfect served with a scoop of ice-cream."
    },
    {
        id: 18,
        title: "Black and White Layered Chocolate Cake",
        category: "dessert",
        price: 11.19,
        img: "./menu-item19.jpg",
        desc: "Make a simple, creamy dessert for a dinner party with very little effort. Pairing this black and white layered chocolate cheesecake with fresh fruit offsets the richness."
    },
    {
        id: 19,
        title: "Greek Yogurt Breakfast Bowls with toppings",
        category: "breakfast",
        price: 13.19,
        img: "./menu-item20.jpg",
        desc: "These Greek Yogurt Breakfast Bowls are absolutely perfect for entertaining. It doesn’t get any easier than making your own Yogurt Bar by placing fresh Vanilla Greek Yogurt in a large bowl, then placing all types of fresh fruits, nuts, and granola for your guests to choose from in order to customize their own bowl."
    },
];

const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container")

//console.log(filterBtns);

//Load Items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
    //console.log(categoriesBtns);
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item) {
        //console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} class="photo" style="height: 200px; width: 200px;" 
            alt=${item.title} />
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
}

function displayMenuButtons(){
    const categories = menu.reduce(
        function(values, item){
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, 
    ['all']
    );
    const categoriesBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}</button>`
    })
    .join("");
    container.innerHTML = categoriesBtns;
    const filterBtns = container.querySelectorAll("filter-btn");
    //Filter Items
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                //console.log(menuItem.category);
                if(menuItem.category = category) {
                    return menuItem;
                }
            });
            //console.log(menuCategory);
            if(category === 'all'){
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
}