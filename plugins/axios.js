const { NOTION_TOKEN } = process.env;

export default ({
  $axios
}) => {
  // requestLog
  $axios.onRequest((config) => {
    config.headers.common['Authorization'] = NOTION_TOKEN
    config.headers.common['Content-Type'] = "application/json"
    config.headers.common['Notion-Version'] = "2022-02-22"
    return config
  })
  // errorLog
  $axios.onError((e) => {
    if (process.env.NODE_ENV === 'development') console.log(e.response)
  })
}
