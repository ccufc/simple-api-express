import { User } from "./user";

test('Cria um usuário', () => {
  const user = new User('John Doe', 18)

  expect(user).toBeInstanceOf(User)
  expect(user.name).toBe('John Doe')
})
