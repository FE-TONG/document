module.exports = {
  title: '前端',
  description: '',
  configureWebpack: {
    resolve: {
      alias: {
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '前端', link: '/frontend/layout' },
      { text: 'vue', link: '/vue/gui' },
      { text: 'git', link: '/git/git' },
      { text: 'linux', link: '/linux/linux' },
      { text: '前进的路上', link: '/go/go' },
      { text: '经验', link: '/bug/css' },
    ],
    sidebar: {
      '/frontend/': [
        {
          title: '前端',
          collapsable: false,
          children: [
            'layout',
            'css',
            'domEvent',
            'domStyle',
            'prototype',
            'object',
            'array',
            'http',
            'cross',
            'secure',
            'storage'
          ]
        }
      ],
      '/git/': [
        {
          title: 'git',
          collapsable: false,
          children: [
            'git',
            'mygit'
          ]
        }
      ],
      '/linux/': [
        {
          title: 'git',
          collapsable: false,
          children: [
            'linux',
            'nginx'
          ]
        }
      ],
      '/vue/': [
        {
          title: 'vue',
          collapsable: false,
          children: [
            'gui',
            'other',
            'vuex',
            'vue-router'
          ]
        }
      ],
      '/bug/': [
        {
          title: '经验',
          collapsable: false,
          children: [
            'css',
            '项目经验',
            'vscode'
          ]
        }
      ],
      '/go/': [
        {
          title: '前进的路上',
          collapsable: false,
          children: [
            'go',
            'underscore',
            'design',
            'douyin'
          ]
        }
      ]
    },
    sidebarDepth: 3
  },
  plugins: [
  ]
}