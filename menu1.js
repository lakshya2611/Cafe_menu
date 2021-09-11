const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./butter.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./dinnerdouble.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./icecream.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./countrydeligth.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./eggattack.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./oreodream.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./baconoverflow.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./americanclassic.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./quarantinebuddy.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", function () {
    //   console.log("content loaded");
    display(menu);

});

const filter = document.querySelectorAll(".filter");

filter.forEach(function(btn){
    btn.addEventListener("click",function(e){

        const category = e.currentTarget.dataset.id;
        //its an array
        const menucategory = menu.filter(function(item2)
        {
            if(item2.category === category)
            {
                // console.log(item2)
                return item2;
            }
        })
        if(category === "all")
        {
            display(menu);
        }
        else{
            display(menucategory);
        }
    });
});




function display(a){
    let displayMenu = a.map(function (item) {
        // console.log(item);
        return `
        <div class="menu-items">
        <div class="main">
            <img src="${item.img}" class="photo" alt="${item.title}" />

            <div class="main-items">
                <h3>${item.title}<span class="price">${item.price}</span></h3>
                <hr>
                <p>${item.desc}</p>
            </div>
        </div>
        </div>`

    });

    displayMenu = displayMenu.join("");
    container.innerHTML = displayMenu;

}
