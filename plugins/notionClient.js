const { NOTION_TOKEN } = process.env;

/**
 * NotionAPIのリクエスト情報
 */
const notionClientPlugin = ({ $axios }, inject) => {
  const notionClient = $axios.create({
    headers: {
      Authorization: NOTION_TOKEN,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-02-22'
    }
  });
  inject('notionClient', notionClient);
};

export default notionClientPlugin;
