const {
  NOTION_TOKEN
} = process.env;

export default function ({
  $axios
}, inject) {
  const notionClient = $axios.create({
    headers: {
      'Authorization': NOTION_TOKEN,
      'Content-Type': "application/json",
      'Notion-Version': "2022-02-22"
    }
  })
  inject('notionClient', notionClient)
}
