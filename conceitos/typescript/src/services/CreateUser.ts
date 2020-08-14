// Para criar um usuário: name, email, password

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string, // Indica que o nome é opcional
  email: string | boolean,
  password: string,
  // techs: string[],
  techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: CreateUserData) {
  // Como o nome está opcional, se não for informado, não cria o elemento
  const user = {
    name,
    email,
    password,
  }

  return user;
}