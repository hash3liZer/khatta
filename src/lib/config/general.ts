import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'lofi',
    text: 'Light'
  },
  {
    name: 'dracula',
    text: 'Dracula'
  },
  {
    name: 'coffee',
    text: 'Coffee'
  },
  {
    name: 'cupcake',
    text: 'Cupcake'
  },
  {
    name: 'valentine',
    text: 'Valentine'
  },
  {
    name: 'aqua',
    text: 'Aqua'
  },
  {
    name: 'synthwave',
    text: 'Synthwave'
  },
  {
    name: 'night',
    text: 'Night'
  },
  // {
  //   name: 'lofi',
  //   text: 'Lo-Fi'
  // },
  {
    name: 'garden',
    text: 'Garden'
  },
  {
    name: 'lemonade',
    text: 'Lemonade'
  },
  {
    name: 'cmyk',
    text: 'CMYK'
  },
  {
    name: 'retro',
    text: 'Retro'
  },
  {
    name: 'black',
    text: 'Black'
  }
]

export const head: HeadConfig = {
  custom: ({ dev }) =>
    dev
      ? []
      : [
          // IndieAuth
          //'<link rel="authorization_endpoint" href="https://indieauth.com/auth">',
          //'<link rel="token_endpoint" href="https://tokens.indieauth.com/token">',
          '<link rel="me" href="https://github.com/hash3liZer" />',
          '<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZZRLH1SYB9"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-ZZRLH1SYB9");</script>',
          // Umami Analytics
          //'<script data-cfasync="false"  defer data-do-not-track="true" data-website-id="2403ea30-74ff-4ffa-8264-556b9f3b2897" src="https://hexoverc.vercel.app/umami.js"></script>',
          // splitbee
          //'<script async data-cfasync="false" src="https://cdn.splitbee.io/sb.js"></script>',
          // Block Baiduspider
          //'<meta name="baiduspider" content="noindex,noarchive">',
          // Microsub
          //'<link rel="microsub" href="https://aperture.p3k.io/microsub/761">'
        ],
  me: ['https://kongwoo.icu/@seviche']
}

export const header: HeaderConfig = {
  search: {
    provider: 'duckduckgo'
  },
  nav: [
    // {
    //   text: 'Projects',
    //   link: 'https://github.com/hash3liZer/'
    // },
    // {
    //   text: 'Notes',
    //   link: '/notes'
    // },
    // {
    //   text: 'Friends',
    //   link: '/friends'
    // },
    {
      text: 'About Me',
      link: '/resume'
    },
    {
      text: "Who@mi ➡️",
      link: "https://shameerkashif.me"
    }
    // {
    //   text: 'etc',
    //   children: [
    //     {
    //       text: 'Bookmarks',
    //       link: 'https://airtable.com/shrpftxf6JgRomP2X'
    //     },
    //     {
    //       text: 'Daily Notes',
    //       link: 'https://x.seviche.cc'
    //     }
    //   ]
    // }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    // {
    //   text: 'Privacy',
    //   link: '/privacy'
    // }
  ],
  html: 'Hosted at <a href="https://github.com/hash3liZer/khatta">Khatta</a>',
  since: '2023'
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: 'numeric',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }
}

export const feed: FeedConfig = {
  hubs: ['https://pubsubhubbub.appspot.com', 'https://bridgy-fed.superfeedr.com']
}
