$(function () {
  let searchInput = $("#searchInput");
  let formGiphy = $("#formGiphy");
  let deleteImage = $("#deleteImage");
  let gifsDiv = $("#gifsDiv");

  formGiphy.on("submit", function (e) {
    e.preventDefault();
    let inputVal = searchInput.val();
    let url = `http://api.giphy.com/v1/gifs/search?q=${inputVal}&api_key=dc6zaTOxFJmzC&`;
    $.get(url).then(function (data) {
      let randGiph = data[Math.floor(Math.random() * data.length)];
      let imgUrl = randGiph.images.original.url;
      gifsDiv.append(`<img src="${imgUrl}" alt="">`);
    });
  });

  deleteImage.on("click", function (e) {
    e.preventDefault();
    gifsDiv.html('') 
    searchInput.val('')
  });

  // --------------THE END -----------------------------------------------------------------------//
});
