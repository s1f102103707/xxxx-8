import { defineController } from 'frourio';
import { userService } from '$/service/userService';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await userService.createUser(body)
  }),
  get: async ({ params }) => ({
    status: 200,
    body: await userService.getUser(params.userId)
  })
}));
