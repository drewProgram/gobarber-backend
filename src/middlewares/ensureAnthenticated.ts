import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // token validation
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT is missing');
  }

  // separating data from the header (the token comes like Bearer as6dtrasgd6a
  // so we need to cut the Bearer and the space in order to get the actual token)
  // the split here is separating all the words from the string in new positions
  // in an array. Whenever it has a space, the next thing will be considerated a new word
  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new Error('Invalid JWT');
  }
}
