import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  bridgy: {
    post: ['mastodon']
  },
  comment: {
    // use: ['Webmention', 'Giscus', 'Remark42'],
    use: ['Giscus'],
    style: 'boxed',
    // webmention: {
    //   username: 'seviche.cc',
    //   sortBy: 'created',
    //   sortDir: 'down',
    //   form: true,
    //   commentParade: true
    // },
    giscus: {
      // src: 'https://giscus.kwaa.dev/client.js',
      repo: 'hash3liZer/khatta',
      repoID: 'R_kgDOJ0m0eA',
      category: 'Q&A',
      categoryID: 'DIC_kwDOJ0m0eM4CXgb8',
      theme: 'dark',
      lang: 'en'
    },
    // remark42: {
    //   host: 'https://remark42.seviche.cc',
    //   no_footer: true
    // }
  }
}
