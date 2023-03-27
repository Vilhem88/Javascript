const highScoreRow = document.getElementById("highScoreRow");

let scoreCount = 1;
highScoreRow.innerHTML = highScores
  .map((score) => {
    return `
    <tr>
    <th scope="row">${scoreCount++}</th>
    <td>${score.name}</td>
    <td>${score.score}</td>
    </tr>
    `;
  })
  .join("");
