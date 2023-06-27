import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: 'blog.shameerkashif.me',
  title: './khatta.sh',
  subtitle: 'A Knowledge Base | Khatta is urdu for blog',
  lang: 'zh',
  description: 'Khatta is to provide in depth articles regarding tech, CTFs, challenges and much more. ',
  author: {
    name: '@hash3liZer',
    avatar: '/assets/avatar.png',
    status: '🖤',
    bio: 'A Random Person (() => {})()',
    metadata: [
      {
        icon: 'i-mdi-github',
        link: 'https://github.com/hash3liZer'
      },
      {
        icon: 'i-ic-twotone-rss-feed',
        link: '/atom.xml',
        rel: 'rss'
      }
      // ,
      // {
      //   text: 'Bookmark',
      //   icon: 'i-ic-round-bookmark-border',
      //   link: 'https://airtable.com/shrpftxf6JgRomP2X',
      //   rel: 'bookmark'
      // }
    ]
  },
  keywords: ['Tech', 'Code', 'hash3liZer', 'Programming', 'tutorials', 'ctf', 'writeups', 'challenges'],
  themeColor: '#3D4451'
}
