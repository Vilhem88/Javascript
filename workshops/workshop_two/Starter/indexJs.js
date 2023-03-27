//Specialities

let special1 = {
  imgId: "1",
  title: "Healthy Salads",
  description:
    "Salads can be healthy, satisfying meals on their own or perfect accompaniments to main dishes. Whatever sort of salad you're after, we've got a great selection",
};

let special2 = {
  imgId: "2",
  title: "Italian Pizza",
  description:
    "Salads can be healthy, satisfying meals on their own or perfect accompaniments to main dishes. Whatever sort of salad you're after, we've got a great selection",
};

let special3 = {
  imgId: "3",
  title: "Burger",
  description:
    "Salads can be healthy, satisfying meals on their own or perfect accompaniments to main dishes. Whatever sort of salad you're after, we've got a great selection",
};

//Featured food

let featured1 = {
  imgId: "01",
  title: "Angela's Burger",
  stars: "4",
};
let featured2 = {
  imgId: "02",
  title: "Green Salad",
  stars: "4",
};
let featured3 = {
  imgId: "03",
  title: "Salmon",
  stars: "5",
};
let featured4 = {
  imgId: "04",
  title: "Best Brownies",
  stars: "4",
};

// Food menu

// Brekfast
let breakfast1 = {
  title: "Chicken Breast",
  description: "This is description of chicken breasts!",
  price: "$33.95",
};
let breakfast2 = {
  title: "Salmon",
  description: "This is description of chicken breasts!",
  price: "$3.95",
};
let breakfast3 = {
  title: "Crispy",
  description: "This is description of chicken breasts!",
  price: "$13.95",
};
let breakfast4 = {
  title: "Fillet",
  description: "This is description of chicken breasts!",
  price: "$23.95",
};

// Lunch

let lunch1 = {
  title: "Chicken Breast",
  description: "This is description of chicken breasts!",
  price: "$33.95",
};
let lunch2 = {
  title: "Salmon",
  description: "This is description of chicken breasts!",
  price: "$3.95",
};
let lunch3 = {
  title: "Crispy",
  description: "This is description of chicken breasts!",
  price: "$13.95",
};
let lunch4 = {
  title: "Fillet",
  description: "This is description of chicken breasts!",
  price: "$23.95",
};

// Dinner

let dinner1 = {
  title: "Chicken Breast",
  description: "This is description of chicken breasts!",
  price: "$33.95",
};
let dinner2 = {
  title: "Salmon",
  description: "This is description of chicken breasts!",
  price: "$3.95",
};
let dinner3 = {
  title: "Crispy",
  description: "This is description of chicken breasts!",
  price: "$13.95",
};
let dinner4 = {
  title: "Fillet",
  description: "This is description of chicken breasts!",
  price: "$23.95",
};

var specialitiesArr = [special1, special2, special3];
var featuredFoodArr = [featured1, featured2, featured3, featured4];
var brekfastArr = [breakfast1, breakfast2, breakfast3, breakfast4];
var lunchArr = [lunch1, lunch2, lunch3, lunch4];
var dinnerArr = [dinner1, dinner2, dinner3, dinner4];

// Special offers --------//

const parentDiv = document.getElementById("parent");
specialitiesArr.forEach(function (specialitie) {
  parentDiv.innerHTML += `
    <div class="col-md-4">
    <div class="bordered">
    <img src="./imgs/${specialitie.imgId}.svg" alt="...">
    <h4>${specialitie.title}</h4>
    <p class="card-text">${specialitie.description}</p>
    </div>
    </div>
    `;
});

//Featured food ------------------//
const featuredFoodDiv = document.getElementById("featuredFood");

featuredFoodArr.forEach(function (featuredFood) {
  let starsNum = parseInt(featuredFood.stars);
  let starsHTML = "";
  for (let index = 0; index < starsNum; index++) {
    starsHTML += `
        <i class="fa fa-star" aria-hidden="true"></i>
        `;
  }
  featuredFoodDiv.innerHTML += `
    <div class="col-md-3">
    <div class="row featuredd">
      <div class="col-md-12">
          <img src="./imgs/${featuredFood.imgId}.jpg" alt="" class="img img-responsive">
          <div class="row m-y">
              <div class="col-md-8">
                  <h4>${featuredFood.title}</h4>
                  <div class="stars">
                      ${starsHTML}
                      <p>${featuredFood.stars}</p>
                      </div>
              </div>
              <div class="col-md-4">
                  <button class="btn btn-block order">order</button>
              </div>
          </div>
      </div>
    </div>
  </div>
      `;
});

// Brekfast -------- //

const breakfastMenu = document.getElementById("breakfastMenu");
brekfastArr.forEach(function (breakfast) {
  breakfastMenu.innerHTML += `
    <div class="row">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-8">
                <h3>${breakfast.title}</h3>
                </div>
                <div class="price col-md-4 text-right">
                    <h3>${breakfast.price}</h3>
                    </div>
            </div>
          <p>${breakfast.description}</p>
    </div>
  </div>   
    `;
});

const lunchMenu = document.getElementById("lunchMenu");
lunchArr.forEach(function (lunch) {
  lunchMenu.innerHTML += `
    <div class="row">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-8">
                <h3>${lunch.title}</h3>
                </div>
                <div class="price col-md-4 text-right">
                    <h3>${lunch.price}</h3>
                    </div>
            </div>
          <p>${lunch.description}</p>
    </div>
  </div>
    `;
});

const dinnerMenu = document.getElementById("dinnerMenu");
dinnerArr.forEach(function (dinner) {
  dinnerMenu.innerHTML += `
    <div class="row">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-8">
                <h3>${dinner.title}</h3>
                </div>
                <div class="price col-md-4 text-right">
                    <h3>${dinner.price}</h3>
                    </div>
            </div>
          <p>${dinner.description}</p>
    </div>
  </div>
    `;
});

let bordered = document.querySelectorAll('.bordered')
let prices = document.querySelectorAll('.price')

bordered.forEach(card=>{
    card.addEventListener('mouseover', function(e){
        card.style.color = 'white'
        card.style.backgroundColor = 'orange'
    })

    card.addEventListener('mouseout', function(e){
        card.style.color = 'black'
        card.style.backgroundColor = 'white'

    })
})


prices.forEach(price=>{
    price.addEventListener('mouseover', function(e){
        price.style.color = 'orange'
    })

    price.addEventListener('mouseout', function(e){
        price.style.color = 'black'
    })
})
