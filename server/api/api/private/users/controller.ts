import { userService } from '$/service/userService';
import { defineController } from 'frourio';

export default defineController(userService, ({ createUser, getUser }) => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createUser(body),
  }),
  get: async ({ params }) => ({
    status: 200,
    body: await getUser(params.userId),
  }),
}));
