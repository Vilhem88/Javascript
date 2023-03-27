$(function () {
  let createBtn = $("#createBtn");
  let input = $("#input").hide();
  let addBtn = $("#addBtn").hide();
  let groups = [];
  let counterId = 0;
  let subGroups = [];
  // create btn
  createBtn.on("click", function (e) {
    e.preventDefault();
    addBtn.show();
  });
  // add btn
  addBtn.on("click", function (e) {
    e.preventDefault();
    input.show();
  });
  // input
  input.keyup(function (e) {
    if (e.which == 13) {
      counterId++;
      let groupObj = {
        id: counterId,
        name: $(this).val(),
        subGroups: [],
      };

      groups.push(groupObj);
      localStorage.setItem("groups", JSON.stringify(groups));
      $(this).val("");
    }
  });

  let lsGroups = JSON.parse(localStorage.getItem("groups"));

  lsGroups.forEach(function (groupObj) {
    // console.log(groupObj);
    $("body").append(
      `        
    
        <div  id="group_${groupObj.id}" class="groupWrapper">
        <span>${groupObj.name}</span><span class="deleteGroup" data-id="${groupObj.id}" style="color:red">delete</span>
        <span class="copyGroup" data-id="${groupObj.id}" style="color:green">copy</span>
        </div>
        `
    );
  });

  $("body").on("click", ".deleteGroup", function () {
    let id = $(this).data("id");
    $("#group_" + id).remove();
    let lsGroups = JSON.parse(localStorage.groups);
    let newGr = lsGroups.filter((group) => group.id != id);
    localStorage.setItem("groups", JSON.stringify(newGr));
  });
});
