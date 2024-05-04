import { defineConfig } from 'vitepress'
// import sidebar from './siderbar.mjs'
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blogs/',
  title: "zhuhangfeng",
  description: "A VitePress Site",
  vite: {
    plugins: [AutoSidebar({ deletePrefix: '.', collapsed: true })],
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    i18nRouting: true,
    logo:'/avator.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '', link: '/blogs/markdown-examples' }
    ],

    // sidebar:sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
