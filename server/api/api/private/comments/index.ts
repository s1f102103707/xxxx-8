/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  post: {
    status: 201;
    /** Comment created successfully */
    resBody: Types.Comment;
    /** Comment to create */
    reqBody: Types.Comment;
  };
};
