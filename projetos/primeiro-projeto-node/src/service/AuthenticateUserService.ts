import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

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
      throw new AppError(errorMessage, 401);
    }

    // user.password - Senha criptografada
    // password - Senha não-criptografada
    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new AppError(errorMessage, 401);
    }

    // Primeiro parametro: Payload - Informações a serem usadas no frontend, menos dados sensíveis.
    // Segundo parametro: Secret - String secreta, pode ser MD5
    // Terceiro parametro: Opcões
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
