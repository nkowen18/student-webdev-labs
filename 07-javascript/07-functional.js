const characters = [
  { id: 1, name: 'Arya', house: 'Stark' },
  { id: 4, name: 'Sansa', house: 'Stark' },
  { id: 16, name: 'Eddard', house: 'Stark' },
  { id: 17, name: 'Catelyn', house: 'Stark' },
  { id: 20, name: 'Robb', house: 'Stark' },
  { id: 28, name: 'Rickon', house: 'Stark' },
  { id: 40, name: 'Jaime', house: 'Lannister' },
  { id: 41, name: 'Cersei', house: 'Lannister' },
  { id: 42, name: 'Tyrion', house: 'Lannister' },
  { id: 50, name: 'Tywin', house: 'Lannister' },
  { id: 53, name: 'Kevan', house: 'Lannister' },
  { id: 75, name: 'Daenerys', house: 'Targaryen' },
  { id: 77, name: 'Viserys', house: 'Targaryen' },
  { id: 81, name: 'Rhaegar', house: 'Targaryen' },
  { id: 83, name: 'Theon', house: 'Greyjoy' },
  { id: 84, name: 'Yara', house: 'Greyjoy' },
  { id: 87, name: 'Davos', house: 'Seaworth' },
  { id: 88, name: 'Brienne', house: 'Tarth' },
];

const mapNameFamily = (characters) => {
  // Return an array with the name and house of each character
  // Format: "Arya, of House Stark"
  let array = [];
  let i = 0;
  while (i < characters.length) {
    let wip = characters[i].name;
    wip = wip.concat(', of House ', characters[i].house);
    array.push(wip);
    i++;
  }
  return array;
};

const filterFamily = (characters, house) => {
  // Return an array with only the characters from a given house
  let array = [];
  let i = 0;
  while (i < characters.length) {
    let c_house = characters[i].house;
    if(c_house == house){
      array.push(characters[i]);
    }
    i++;
  }
  return array;
};

const reduceHouses = (characters) => {
  // Return an object with the number of characters from each house
  let Stark = 0;
  let Lannister = 0;
  let Targaryen = 0;
  let Greyjoy = 0;
  let Seaworth = 0;
  let Tarth = 0;
  let i = 0;

  while (i < characters.length) {
    let c_house = characters[i].house;
    if(c_house == 'Stark'){
      Stark++;
    }
    else if(c_house == 'Lannister'){
      Lannister++;
    }
    else if(c_house == 'Targaryen'){
      Targaryen++;
    }
    else if(c_house == 'Greyjoy'){
      Greyjoy++;
    }
    else if(c_house == 'Seaworth'){
      Seaworth++;
    }
    else if(c_house == 'Tarth'){
      Tarth++;
    }
    i++;
  }
  houses = [{Stark: Stark, Lannister: Lannister, Targaryen: Targaryen, Greyjoy: Greyjoy, Seaworth: Seaworth, Tarth: Tarth,}]
  return houses;
};

console.log(mapNameFamily(characters));
// [
//   'Arya, of House Stark',
//   'Sansa, of House Stark',
//   'Eddard, of House Stark',
//   'Catelyn, of House Stark',
//   'Robb, of House Stark',
//   'Rickon, of House Stark',
//   'Jaime, of House Lannister',
//   'Cersei, of House Lannister',
//   'Tyrion, of House Lannister',
//   'Tywin, of House Lannister',
//   'Kevan, of House Lannister',
//   'Daenerys, of House Targaryen',
//   'Viserys, of House Targaryen',
//   'Rhaegar, of House Targaryen',
//   'Theon, of House Greyjoy',
//   'Yara, of House Greyjoy',
//   'Davos, of House Seaworth',
//   'Brienne, of House Tarth'
// ]

console.log(filterFamily(characters, 'Stark'));
// [
//   { id: 1, name: 'Arya', house: 'Stark' },
//   { id: 4, name: 'Sansa', house: 'Stark' },
//   { id: 16, name: 'Eddard', house: 'Stark' },
//   { id: 17, name: 'Catelyn', house: 'Stark' },
//   { id: 20, name: 'Robb', house: 'Stark' },
//   { id: 28, name: 'Rickon', house: 'Stark' }
// ]

console.log(filterFamily(characters, 'Greyjoy'));
// [
//   { id: 83, name: 'Theon', house: 'Greyjoy' },
//   { id: 84, name: 'Yara', house: 'Greyjoy' }
// ]

console.log(reduceHouses(characters));
// {
//   Stark: 6,
//   Lannister: 5,
//   Targaryen: 3,
//   Greyjoy: 2,
//   Seaworth: 1,
//   Tarth: 1
// }
