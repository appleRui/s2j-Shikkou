const { NOTION_TOKEN } = process.env;

export default ({
  $axios
}) => {
  // requestLog
  $axios.onRequest((config) => {
    config.headers.common['Authorization'] = NOTION_TOKEN
    config.headers.common['Content-Type'] = "application/json"
    config.headers.common['Notion-Version'] = "2021-08-16"
    return config
  })
  // errorLog
  $axios.onError((e) => {
    console.log(e.response)
  })
}
