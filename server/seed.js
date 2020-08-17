const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createTasks(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    result.push({
      id: faker.random.uuid(),
      firstName,
      lastName,
      email,
      taskTitle: faker.lorem.words(),
      taskDescription: faker.lorem.paragraphs(),
      avatarUrl: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
      timeTask: faker.random.number(),
    });
  }

  return result;
}

function main() {
  const data = {
    tasks: createTasks(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
