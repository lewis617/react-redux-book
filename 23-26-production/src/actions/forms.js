import { ASYNC } from 'redux-amrc';
import { customFetch } from '../utils/utils';

export function post(data) {
  const key = 'forms';
  const option = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  return {
    [ASYNC]: {
      key,
      promise: () => customFetch('/forms', option)
    }
  };
}
