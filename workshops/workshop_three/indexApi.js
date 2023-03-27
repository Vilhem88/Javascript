async function getData(api) {
  let response = await fetch(api);
  let data = await response.json();
  return data;
}

getData("https://api.artic.edu/api/v1/artworks?limit=21")
  .then((data) => {
    console.log(data);
    let parent = document.getElementById("parent");
    data.data.forEach((object) => {
      let html = `
    <div class="col">
      <div class="card shadow-sm">
      <img src="${object.thumbnail.lqip}"  class="bd-placeholder-img card-img-top" width="100%" height="225">
        <div class="card-body">
          <p class="card-text">Title: ${object.title}</p>
          <p class="card-text">Artist: ${object.artist_display}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="">
            <p>City: ${object.artwork_type_title}</p>
            </div>
        </div>
        `;
      parent.innerHTML += html;
    });
  })
  .catch((error) => {
    console.log("An error ocurred", error);
  });

// load more users ////

let loadMoreBtn = document.getElementById("loadMore");
let pageCounter = 1;

loadMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  pageCounter++;
  getData(`https://api.artic.edu/api/v1/artworks?page=${pageCounter}&limit=21`)
    .then((data) => {
      console.log(data);
      let parent = document.getElementById("parent");
      data.data.forEach((object) => {
        let html = `
    <div class="col">
      <div class="card shadow-sm">
      <img src="${object.thumbnail.lqip}"  class="bd-placeholder-img card-img-top" width="100%" height="225">
        <div class="card-body">
          <p class="card-text">Title: ${object.title}</p>
          <p class="card-text">Artist: ${object.artist_display}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="">
            <p>City: ${object.artwork_type_title}</p>
            </div>
        </div>
        `;
        parent.innerHTML += html;
      });
    })
    .catch((error) => {
      console.log("An error ocurred", error);
    });
});

// load less results //

let loadLessBtn = document.getElementById("loadLess");
loadLessBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let totalCards = document.getElementById("parent").children.length;
  let cards = document.getElementById("parent").children;
  let until = totalCards - 10;
  for (let i = totalCards; i > until; i--) {
    cards[i - 1].remove();
  }
});
