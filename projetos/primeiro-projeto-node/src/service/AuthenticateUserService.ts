import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const errorMessage = 'Incorrect email or password combination.';

    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error(errorMessage);
    }

    // user.password - Senha criptografada
    // password - Senha não-criptografada
    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new Error(errorMessage);
    }

    // Primeiro parametro: Payload - Informações a serem usadas no frontend, menos dados sensíveis.
    // Segundo parametro: Secret - String secreta, pode ser MD5
    // Terceiro parametro: Opcões
    const token = sign({}, 'c503454997cfefaa1fc0f7bf0ae65c6b', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
