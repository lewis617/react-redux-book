import { ASYNC } from 'redux-amrc';
import { customFetch } from '../utils/utils';

export function loadStatistic() {
  return {
    [ASYNC]: {
      key: 'statistic',
      promise: () => customFetch('/statistic')
    }
  };
}
