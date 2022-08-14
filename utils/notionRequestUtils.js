import { dateFormat } from './dateFormatUtils';

/**
 * NotionAPIのリクエスト一覧
 */
const { NOTION_DB } = process.env;
export const notionRequestUrl = {
  getAllNews: `/v1/databases/${NOTION_DB}/query`
};

/**
 * NewsDBから一覧を取得する際のリクエストオプション
 * @param size
 * @returns
 */
export const getAllNewsOptions = (size) => {
  const option = {
    filter: {
      and: [
        {
          property: '公開',
          checkbox: {
            equals: true
          }
        },
        {
          property: '公開日',
          date: {
            on_or_before: dateFormat(new Date())
          }
        }
      ]
    },
    page_size: size
  };
  return JSON.stringify(option);
};
