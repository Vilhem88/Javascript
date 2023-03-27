let cardContainer = document.querySelector('#card-container');
let fullRecipeContainer = document.querySelector('#full-recipe-container');
let searchContainer = document.querySelector('#search-container');
let tagContainer = document.querySelector('#tag-container');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCard(cardData) {
  let card = document.createElement('div');
  let cimage = document.createElement('div');
  let title = document.createElement('h5');
  let contents = document.createElement('div');
  let actions = document.createElement('div');

  card.classList.add('card');

  cimage.classList.add('card-image');
  let img = document.createElement('img');
  img.src = './images/' + getRandomInt(1, 29) + '.jpg';
  cimage.appendChild(img);

  title.innerText = cardData.name;

  contents.classList.add('card-content');
  contents.appendChild(title);
  
  cardData.tags.forEach((tag) => {
    let tagLink = document.createElement('a');
    tagLink.innerText = '#' + tag;
    contents.appendChild(tagLink);
    tagLink.addEventListener('click', function (e) {
      let clickedTag = e.target.innerText;
      let onlyTagName = clickedTag.replace('#', '');
      //!important
      location.hash = '#tag-' + onlyTagName;
      let filteredData = recipeData.filter((oneRecipe) => {
        //Na sekoj recept, zemigi tagovite i proveri dali vo nizata se sodrzi zborceto vrz koe shto sme kliknale
        return oneRecipe.tags.includes(onlyTagName);
      });

      tagContainer.innerHTML = '';
      for (let i = 0; i < filteredData.length; i++) {
        let card = createCard(filteredData[i]);
        tagContainer.appendChild(card);
      }
    });
  });

  actions.classList.add('card-action');
  let link = document.createElement('a');
  link.innerText = 'Open Recipe';
  link.classList.add('waves-effect', 'waves-light', 'btn', 'orange');
  link.href = '#' + cardData.id;
  actions.appendChild(link);

  card.appendChild(cimage);
  card.appendChild(contents);
  card.appendChild(actions);

  return card;
}

function renderRecipe() {
  let id = location.hash.replace('#', '');
  let recipe = recipeData.find((r) => r.id === id);
  fullRecipeContainer.innerHTML = '';

  let wrapper = document.createElement('div');
  let card = document.createElement('div');
  let cimage = document.createElement('div');
  let title = document.createElement('h3');
  let contents = document.createElement('div');

  wrapper.classList.add('full-recipe-wrapper');

  title.innerText = recipe.name;

  cimage.classList.add('card-image');
  let img = document.createElement('img');
  img.src = './images/' + getRandomInt(1, 29) + '.jpg';
  cimage.appendChild(img);

  contents.classList.add('card-content');
  let p = document.createElement('p');
  p.innerText = recipe.instructions;
  let h4Instructions = document.createElement('h4');
  h4Instructions.innerText = 'Instructions';

  contents.appendChild(h4Instructions);
  contents.appendChild(p);

  card.classList.add('card');
  card.appendChild(cimage);
  card.appendChild(contents);

  wrapper.appendChild(title);
  wrapper.appendChild(card);

  fullRecipeContainer.appendChild(wrapper);
}

//Exercise 6 - return to home page

let headerElement = document.getElementById('headerElement');
headerElement.addEventListener('click', function (e) {
  e.preventDefault();
  location.hash = '';
});

// Exercise 1 - draw cards on screen using the
// createCard function.

for (let i = 0; i < recipeData.length; i++) {
  let card = createCard(recipeData[i]);
  cardContainer.appendChild(card);
}

//Exercise 2

function handleRoute(e) {
  let currentHash = location.hash;
  if (currentHash == '' || currentHash == '#') {
    cardContainer.style.display = 'flex';
    fullRecipeContainer.style.display = 'none';
    tagContainer.style.display = 'none';
  } else if (currentHash.includes('tag-')) {
    cardContainer.style.display = 'none';
    fullRecipeContainer.style.display = 'none';
    tagContainer.style.display = 'flex';
  } else {
    renderRecipe();
    cardContainer.style.display = 'none';
    tagContainer.style.display = 'none';
    fullRecipeContainer.style.display = 'flex';
  }
}

//Ovoj event se izvrsuva samo pri vcituvanje na stranata ili pak pri reload.
window.addEventListener('load', handleRoute);

window.addEventListener('hashchange', handleRoute);
