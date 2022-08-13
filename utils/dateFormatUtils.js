import dayjs from 'dayjs';

/**
 * 日付をフォーマットする
 * @param value
 * @param format
 * @returns
 */
export const dateFormat = (value, format = 'YYYY-MM-DD') => {
  return dayjs(value).format(format);
};
