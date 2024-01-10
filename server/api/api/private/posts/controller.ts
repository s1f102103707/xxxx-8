import { defineController } from 'frourio';
import { postService } from '$/service/postService';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await postService.createPost(body)
  }),
  put: async ({ params, body }) => ({
    status: 200,
    body: await postService.updatePost(params.postId, body)
  }),
  delete: async ({ params }) => {
    await postService.deletePost(params.postId);
    return { status: 204 };
  }
}));
