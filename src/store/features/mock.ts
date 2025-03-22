import { faker } from "@faker-js/faker";
import { User } from "../../types";

export const generateUsers = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int({ min: 2, max: 150 }),
    email: faker.internet.email(),
  })) as User[];
};
