/* eslint-disable */
import type * as Types from '../../../../@types';

export type Methods = {
  put: {
    status: 200;
    /** Comment updated successfully */
    resBody: Types.Comment;
    /** Comment data to update */
    reqBody: Types.Comment;
  };

  delete: {
    status: 204;
  };
};
