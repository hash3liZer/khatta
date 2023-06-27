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
      repoID: 'R_kgDOHSra4Q',
      category: 'General',
      categoryID: 'DIC_kwDOHSra4c4CO9ua',
      theme: 'dark',
      lang: 'en'
    },
    // remark42: {
    //   host: 'https://remark42.seviche.cc',
    //   no_footer: true
    // }
  }
}
