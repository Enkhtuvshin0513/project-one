class Player {
  constructor(firstName, lastName, age, height, weight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;

    this.score = 0;
  }

  twoPoint() {
    this.score = this.score + 2;
  }

  threePoint() {
    this.score = this.score + 3;
  }

  result() {
    return `${this.lastName} ${this.score} onoo awsan bn`;
  }
}

const lebron = new Player("james", "lebron", 40, 7, 200);
const durant = new Player("kevin", "durant", 36, 7, 200);
