import { postService } from '$/service/postService';
import { defineController } from 'frourio';

export default defineController(postService, ({ getPost, getAllPosts }) => ({
  get: async ({ params }) => ({
    status: 200,
    body: params.postId
      ? await getPost(params.postId)
      : await getAllPosts(),
  }),
}));
