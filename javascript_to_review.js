
// Please review the code below and provide feedback on improvements..

const houseNumbers = [20, 22, 10, 4]
const emailaddrs = ['dave@somemail.com’, 'bob@domain.com’, 'anthony@somemail.com’];

function combineDataToObjects() {
  let person = [];
  for (var x = 0; x <= names.length; x++) {
    const person = {
      name: names[x],
      houseNumber: houseNumbers[x],
      email: emailaddrs[x]
    };
    person.unshift(person)
  }
  return person;
}

function show(persons) {
  for (const p in persons) {
    console.log(
      “Client: ” + p.name + ` who lives at number: ${p.houseNumber} ` + “and can be contacted at: ” + p.email
    );
  }
}

combineDataToObjects();

show(persons);
