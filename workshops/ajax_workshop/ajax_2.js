$(function () {
  let searchBtn = $("#searchBtn");
  let title = $("#title");
  let tbody = $("#tbody");

  searchBtn.on("click", function (e) {
    e.preventDefault();
    let city = $("#city").val();
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0caba85b263cf8a083101f6316718d54`;

    $.get(url)
      .then((data) => {
        console.log(data);
        var iconCodeUrl = "http://openweathermap.org/img/w/"+ data.weather[0].icon +".png";
        //  console.log(iconCode);

        let cityHtml = `
        <tr>
        <td>${data.name}</td>
        <td><img src="${iconCodeUrl}"></td>
        <td>${data.weather[0].description}</td>
        <td>${data.main.temp} &#8451;</td>
        <td>${data.main.temp_min} &#8451;</td>
        <td>${data.main.temp_max} &#8451;</td>
        <td>${data.main.feels_like} &#8451;</td>
        <td>${data.main.pressure} mbar</td>
        <td style="width:100px">${data.main.humidity}<img src="./3262966.png" style="width:20px"></td>
        <td>${data.wind.speed} km/h</td>
        <td>${ windDirection(data.wind.deg)}</td>
      </tr>
        `


        tbody.append(cityHtml) 

        $("#city").val('');
      })
      .catch((err) => {
        console.log(err);
      });
  });


  function windDirection(deg){
    if(deg >= 330 && deg <= 360 || deg >= 0 && deg <= 30){
        return 'North Wind Direction'
    }else if(deg >= 31 && deg <= 135){
        return 'East Wind Direction'
    }else if(deg > 135 && deg <= 225){
        return 'South Wind Direction'
    }else if(deg > 225 && deg < 330){
        return 'West Wind Direction'
    }
  }


  // --------- THE END ----------------/////////
});
