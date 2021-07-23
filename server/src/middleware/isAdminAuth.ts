import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../types';

export const isAdminAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error('Not authenticated');
  }
  // } else if (Users.find({ where: { role: 'User' }}) !== 'Admin') {
  //   throw new Error('No tienes acceso como administrador');
  // }

  return next();
};
