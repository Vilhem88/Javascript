async function getUsers(api) {
  let response = await fetch(api);
  let data = await response.json();
  return data;
}

getUsers("https://randomuser.me/api/?page=1&results=12")
  .then((data) => {
    console.log(data);
    let parent = document.getElementById("parent");
    data.results.forEach((object) => {
      let html = `
      <div class="col">
      <div class="card shadow-sm">
      <img src="${object.picture.thumbnail}"  class="bd-placeholder-img card-img-top" width="100%" height="225">
        <div class="card-body">
          <p class="card-text">Name: ${object.name.first}</p>
          <p class="card-text">Lastname: ${object.name.last}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="">
            <p>City: ${object.location.city} State: ${object.location.country}</p>
            <p>Cell. ${object.cell}</p>
            </div>
        </div>
        `;
      parent.innerHTML += html;
    });
  })
  .catch((error) => {
      console.log('This is error', error)
  });

// load more users ////

let loadMoreBtn = document.getElementById("loadMore");
let pageCounter = 1;
loadMore.addEventListener("click", function (e) {
  e.preventDefault(); 
  getUsers(`https://randomuser.me/api/?page=${pageCounter}&results=12`)
    .then((data) => {
      let parent = document.getElementById("parent");
      data.results.forEach((object) => {
        let html = `
        <div class="col">
        <div class="card shadow-sm">
        <img src="${object.picture.thumbnail}"  class="bd-placeholder-img card-img-top" width="100%" height="225">
          <div class="card-body">
            <p class="card-text">Name: ${object.name.first}</p>
            <p class="card-text">Lastname: ${object.name.last}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="">
              <p>City: ${object.location.city} State: ${object.location.country}</p>
              <p>Cell. ${object.cell}</p>
              </div>
          </div>
          `;
        parent.innerHTML += html;
      });
    })
    .catch((err) => {
      console.log("An Error ocurred", err);
    });
});

// load less results //

let loadLessBtn = document.getElementById("loadLess");
loadLessBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let totalCards = document.getElementById("parent").children.length;
  let cards = document.getElementById("parent").children;
  let until = totalCards - 12;
  for (let i = totalCards; i > until; i--) {
      cards[i - 1].remove();
  }
});
