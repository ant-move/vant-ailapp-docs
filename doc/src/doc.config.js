/* eslint-disable */
import packageJson from '../../package.json';
import components from '../../example/config';
const { version } = packageJson;

export const github = 'https://github.com/ant-move/Vant-Aliapp';

export const versions = ['1.0.0'];

export default {
  header: {
    logo: {
      image: 'https://img.yzcdn.cn/vant/logo.png',
      title: 'Vant Aliapp',
      href: '#/'
    },
    nav: {
      logoLink: [
        {
          image: 'https://ant-move.github.io/website/img/favicon.ico',
          url: 'https://ant-move.github.io/website/'
        },
        {
          image: 'https://img.yzcdn.cn/vant/logo/github.svg',
          url: github
        }
      ]
    }
  },
  nav: [
    {
      name: '开发指南',
      groups: [
        {
          list: [
            {
              path: '/intro',
              title: '介绍',
              md: true
            },
            {
              path: '/quickstart',
              title: '快速上手',
              md: true
            },
            {
              path: '/changelog',
              title: '更新日志',
              md: true
            },
            {
              path: '/common',
              title: '内置样式'
            }
          ]
        }
      ]
    },
    {
      name: '组件',
      groups: components
    }
  ]
};
