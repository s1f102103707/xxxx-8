/* eslint-disable */
import type * as Types from '../../../../@types';

export type Methods = {
  put: {
    status: 200;
    /** Post updated successfully */
    resBody: Types.Post;
    /** Post data to update */
    reqBody: Types.Post;
  };

  delete: {
    status: 204;
  };
};
