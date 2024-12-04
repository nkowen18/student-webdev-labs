const destructureItems = (input) => {
  // destructure the name and parents of the character and format the output as shown
  let final_string_1 = '';
  let final_string_2 = '  daughter of';
  let final_string_3 = '  ';
  final_string_1 = final_string_1.concat(input['first'], ' ', input['last']);
  let mother = input['allegiance'].parents.mother;
  let father = input['allegiance'].parents.father;
  final_string_3 = final_string_3.concat(mother, ' and ', father);
  final_string_1 = final_string_1.concat(final_string_1, '\n', final_string_2, '\n', final_string_3);

  return final_string_1;
};

const sansa = {
  first: 'Sansa',
  last: 'Stark',
  allegiance: {
    house: 'Winterfell',
    parents: {
      mother: 'Catelyn Tully',
      father: 'Eddard Stark',
    },
    animals: {
      direwolf: 'Lady',
    },
  },
};

const daenerys = {
  first: 'Daenerys',
  last: 'Targaryen',
  allegiance: {
    house: 'Targaryen',
    parents: {
      mother: 'Queen Rhaella',
      father: 'King Aerys II Targaryen',
    },
    animals: {
      dragons: 'Drogon',
    },
  },
};

console.log(destructureItems(sansa));
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark
console.log(destructureItems(daenerys));
// Daenerys Targaryen
//   daughter of
//   Queen Rhaella and King Aerys II Targaryen
