/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  post: {
    status: 201;
    /** Post created successfully */
    resBody: Types.Post;
    /** Post to create */
    reqBody: Types.Post;
  };
};
