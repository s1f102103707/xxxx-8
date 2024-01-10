import { commentService } from '$/service/commentService';
import { defineController } from 'frourio';

export default defineController(commentService, ({ createComment, updateComment, deleteComment }) => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createComment(body),
  }),
  put: async ({ params, body }) => ({
    status: 200,
    body: await updateComment(params.commentId, body),
  }),
  delete: async ({ params }) => {
    await deleteComment(params.commentId);
    return { status: 204 };
  },
}));
