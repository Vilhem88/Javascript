class Character {
  constructor(_name, _strength) {
    this.name = _name;
    this.strength = 100;
 
  }

  attack(target) {
    target.strength = target.strength - 5;
  }

  status() {
    console.log(this.name, this.strength);
  }

  echoCurrentHp() {
    console.log(
      this.name +
        " currently has " +
        this.hp +
        "/" +
        this.maxhp +
        " health points left."
    );
  }
}

let character01 = new Character("Troll", 100);

let character02 = new Character("Axe", 100);

let character03 = new Character("Jane", 100);

let charactersArray = [character01, character02, character03];

let round = 0;
while (charactersArray.length > 1) {
  // vrti se dodeka ne ostane eden igrac vo nizata so karakteri
  // naredna runda
  round++;

  // zemi random index od 0 do brojot na igraci
  let attackerIndex = Math.floor(Math.random() * charactersArray.length);
  console.log("Za napagac e odbran index " + attackerIndex);
  // attackerIndex = 1;

  // zemi go characterot od nizata so characteri
  let attacker = charactersArray[attackerIndex];
  console.log("Toa e objektot " + attacker.name);
  // attacker = character02;

  // kreiraj niza od karakteri bez karakterot koj napaga
  // vo ovaa niza ke se ostanatite karakteri koi mozat da bidat napadnati
  let avoidSelfAttack = charactersArray.filter((a) => a !== attacker);
  // avoidSelfAttack = [character01,character03]
  console.log("Ostanati karakteri za random ", avoidSelfAttack);

  // isto kako i gore zemi random index za karakterot koj go napagame
  let attackedIndex = Math.floor(Math.random() * avoidSelfAttack.length);
  console.log("random za napadnat ", attackedIndex);

  // attackedIndex = 0;
  // najdi go karakterot koj e napadnat od nizata avoidSelfAttack
  let atacked = avoidSelfAttack[attackedIndex];
  console.log(" napadnat e objektot", atacked);
  
  //atacked = character01;
  // objektot napagac ja povikuva attack funkcijata so parametar objekt karakter
  // i mu odzema sila za 5
  console.log(
    `Karaterot ${attacker.name} go napaga ${atacked.name} i mu odzema 5 poeni`
  );

  attacker.attack(atacked);

  console.log(
    `Sega ${attacker.name} ima ${attacker.strength}, a ${atacked.name} ima ${atacked.strength}`
  );
  // ako napadnatiot objekt vo property sila e 0 togas trgni go od nizata kade gi cuvame igracite
  if (atacked.strength == 0) {
    let index = charactersArray.indexOf(atacked);
    charactersArray.splice(index, 1);

    console.log(`----------------------------------------------`);
    console.log(`${atacked.name} ima 0 poeni i izleguva od igra`);
    console.log(`----------------------------------------------`);
  }
}

console.log("Winner:");
charactersArray.pop().status();
