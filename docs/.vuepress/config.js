module.exports = {
  plugins: [
    [
      "vuepress-plugin-helper-live2d",
      {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "shizuku",
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
    [
      "vuepress-plugin-mygitalk",
      {
        // 是否启用(关闭请设置为false)(default: true)
        enable: false,
        // 是否开启首页评论(default: true)
        home: false,
        // Gitalk配置
        gitalk: {
          // GitHub Application Client ID.
          clientID: "2ff6e50226584ec4cfac",
          // GitHub Application Client Secret.
          clientSecret: "f8ab1eb29134e230b4661464cbf04782c4b14617",
          // GitHub repository. 存储评论的 repo
          repo: "vuepress.github.io",
          // GitHub repository 所有者，可以是个人或者组织。
          owner: "killar",
          // 设置语言(default: zh-CN)
          language: "zh-CN",
        },
      },
    ],
    ["element-ui"],
  ],
  title: "KILLAR'S BLOG",
  description: "种一棵树最好的时间是十年前，其次是现在",
  head: [
    [
      "script",
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js",
      },
    ],
    [
      "script",
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css",
      },
    ],
    [
      // 注入到当前页面的 HTML <head> 中的标签
      ("link", { rel: "icon", href: "/assets/img/logo.jpg" }),
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  serviceWorker: true,
  //   theme: "@vuepress/theme-blog",
  theme: "antdocs",
  base: "/vuepress.github.io/", // 这是部署到github相关的配置
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
    dateFormat: "YYYY-MM-DD",
    nav: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "博客",
        link: "/components/blog/",
      },
      {
        text: "JAVA",
        link: "/components/java/",
      },
      {
        text: "软考",
        ariaLabel: "components Menu",
        items: [
          { text: "高项笔记", link: "/components/note/" },
          { text: "ITTO", link: "/components/itto/" },
          { text: "速记口诀", link: "/components/shorthand/" },
        ],
      },
      {
        text: "生活",
        ariaLabel: "components Menu",
        items: [
          { text: "小葵", link: "/components/life/baby/" },
          { text: "汽车", link: "/components/life/car/" },
          { text: "壁纸", link: "/components/life/wallpaper/" },
        ],
      },
    ],
    configureWebpack: {
      resolve: {
        alias: {
          "@img": "/assets/img",
        },
      },
    },
    markdown: {
      lineNumbers: false, // 代码块显示行号
    },
    // sidebar: "auto", // 侧边栏配置
    sidebar: {
      "/components/java": [
        {
          title: "Java Web",
          collapsable: false,
          children: [
            "/components/java/springBoot/",
            "/components/java/redis/",
            "/components/java/tomcat/",
          ],
        },
        {
          title: "数据库",
          collapsable: false,
          children: [],
        },
      ],
      "/components/note/": [""],
      "/components/itto/": [
        "",
        "intergration",
        "scope",
        "progress",
        "cost",
        "quality",
        "human",
        "stakeholder",
        "communicate",
        "risk",
        "procurement",
      ],
      "/components/shorthand/": [""],
    },
    sidebarDepth: 2, // 侧边栏显示2级
    lastUpdated: "Last Updated",
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/vuejs/vuepress",
        },
        {
          type: "twitter",
          link: "https://github.com/vuejs/vuepress",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: "",
        },
      ],
    },
  },
};
