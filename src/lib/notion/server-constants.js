// use commonjs so it can be required without transpiling
const path = require('path')

const normalizeId = id => {
  if (!id) return id
  if (id.length === 36) return id
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    )
  }
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`
}

// const NOTION_TOKEN = process.env.NOTION_TOKEN
// const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID)
const NOTION_TOKEN = '0efe62d74380191855a8b8caccb38e36fafc940e72ea2cf03c71cf0a2b7210803911b60a9887f7402374f4ae49d8f6dfd53ea6606871e711716e23c822a5cf2a99877ef1fc31044eb573a8eb2763'
const BLOG_INDEX_ID = '9f2df00f3fc948f28d6af3c0756c7570'
const API_ENDPOINT = 'https://www.notion.so/api/v3'
const BLOG_INDEX_CACHE = path.resolve('.blog_index_data')

module.exports = {
  NOTION_TOKEN,
  BLOG_INDEX_ID,
  API_ENDPOINT,
  BLOG_INDEX_CACHE,
}
