import { postService } from '$/service/postService';
import { defineController } from 'frourio';

export default defineController(postService, ({ createPost, updatePost, deletePost }) => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createPost(body),
  }),
  put: async ({ params, body }) => ({
    status: 200,
    body: await updatePost(params.postId, body),
  }),
  delete: async ({ params }) => {
    await deletePost(params.postId);
    return { status: 204 };
  },
}));
