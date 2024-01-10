import { defineController } from 'frourio';
import { postService } from '$/service/postService';

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: params.postId ? await postService.getPost(params.postId) : await postService.getAllPosts()
  })
}));
