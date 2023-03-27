$(function () {
  let numberInput = $("#numberInput");
  let searchInput = $("#searchInput");
  let submitBtn = $("#submitBtn");

  submitBtn.on("click", function (e) {
    e.preventDefault();
    let userId = numberInput.val();

    $.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(function (user) {
        // console.log("This is data in promise", );
        $("#userInfo").html(`

        <h2>${user.name}</h2>
        <h5>${user.username}</h5>
        <h5>${user.phone}</h5>
        <h5>${user.email}</h5>   
        `);
      })
      .catch((error) => {
        console.log("this is error", error);
      });
  });

  searchInput.on("keyup", () => {
    $.get(`https://jsonplaceholder.typicode.com/users`)
      .then((users) => {
        let searchTerm = searchInput.val();
        // console.log(searchTerm.length);
        if (searchTerm.length > 2) {
          let results = users.filter(function (object) {
            return object.name.toLowerCase().includes(searchTerm.toLowerCase());
          });

          $("#results").html("");
          let html = "";

          results.forEach(function (obj) {
            html += `<li>${obj.name}</li> `;
          });

          $("#results").html(`<ul>${html}</ul>`);
        } else {
          $("#results").html("");
        }
      })
      .catch((error) => {
        console.log("this is error", error);
      });
  });

  // POST REQUESTS AJAX -------------------------------//

  let url = "https://jsonplaceholder.typicode.com/posts";
  let postObject = {
    id: 1,
    title: "Sport news",
    body: "UCL",
    userId: 123,
  };
  $.post(url, postObject)
    .then((data) => {
      //   console.log("Ova e response i data od response", data);
    })
    .catch((err) => {
      err;
    });

  //  --------------------------------------------------//

  let imageId = 2;
  let photoUrl = `http://jsonplaceholder.typicode.com/photos`;
  let imageParent = $("#imageParent");

  $.get(photoUrl)
    .then((images) => {
      let image = images.find(function (obj) {
        return obj.id == imageId;
      });

      imageParent.html(`
        <h2>${image.title}</h2>
        <img src="${image.url}" alt="">
    `);

      //   PREV BUTTON //

      let prevBtn = $("#prev");

      prevBtn.on("click", (e) => {
        e.preventDefault();
        imageId--;

        if (imageId < 1) {
          return false;
        }

        let prevImage = images.find(function (obj) {
          return obj.id == imageId;
        });

        // console.log(prevImage.id);

        imageParent.html(`
            <h2>${prevImage.title}</h2>
            <img src="${prevImage.url}" alt="">
        `);
      });

      //   NEXT BUTTON //

      let nextBtn = $("#next");

      nextBtn.on("click", (e) => {
        e.preventDefault();
        imageId++;

        if (imageId > images.length) {
          return false;
        }

        let nextImage = images.find(function (obj) {
          return obj.id == imageId;
        });

        // console.log(nextImage.id);

        imageParent.html(`
            <h2>${nextImage.title}</h2>
            <img src="${nextImage.url}" alt="">
        `);
      });
    })
    .catch((err) => {
      err;
    });

  // POSTS LOAD MORE AND LESS //

  let postsParent = $("#postsParent");
  let loadLess = $("#loadLess");
  let loadMore = $("#loadMore");
  let postId = 1;
  let postsUrl = `https://jsonplaceholder.typicode.com/posts`;

  $.get(postsUrl).then((posts) => {
    let post = posts.find(function (obj) {
      return obj.id == postId;
    });
    // let html = '';
    let postHtml = `
    <div style="border: 1px solid black">
    <div>Title: ${post.title}</div>
    <div>Body: ${post.body}</div>
    </div>
    `;
    postsParent.html(postHtml);

    // console.log(post);

    loadMore.on("click", (e) => {
      e.preventDefault();
      postId++;
      let nextPost = posts.find(function (obj) {
        return obj.id == postId;
      });

      postHtml += `
      <div style="border: 1px solid black">
        <div >Title: ${nextPost.title}</div>
        <div >Body: ${nextPost.body}</div>
    </div>
    `;
      postsParent.html(postHtml);
    });

    loadLess.on("click", (e) => {
      e.preventDefault();
      postId--;
      postsParent.children().last().remove();
      postHtml = "";
    });
  });
});
