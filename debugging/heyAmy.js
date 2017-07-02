function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })

// returns 'hey arnold'

function greet(person) {
  if (person.name == 'amy' ) {
    return 'hey amy';
  } else {
    return 'hey arnold';
  }
}

greet({ name: 'amy' });
