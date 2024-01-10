import { defineController } from 'frourio';
import { commentService } from '$/service/commentService';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await commentService.createComment(body)
  }),
  put: async ({ params, body }) => ({
    status: 200,
    body: await commentService.updateComment(params.commentId, body)
  }),
  delete: async ({ params }) => {
    await commentService.deleteComment(params.commentId);
    return { status: 204 };
  }
}));
