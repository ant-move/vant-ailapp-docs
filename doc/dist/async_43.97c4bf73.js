(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{61:function(s,E,u){"use strict";u.r(E);var C={created:function(){this.content=unescape("%3Ch1%3ETreeSelect%20%u5206%u7C7B%u9009%u62E9%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yin-ru%22%3E%u5F15%u5165%3C/h3%3E%0A%3Cp%3E%u5728%3Ccode%3Eapp.json%3C/code%3E%u6216%3Ccode%3Eindex.json%3C/code%3E%u4E2D%u5F15%u5165%u7EC4%u4EF6%uFF0C%u9ED8%u8BA4%u4E3A%3Ccode%3EES6%3C/code%3E%u7248%u672C%uFF0C%3Ccode%3EES5%3C/code%3E%u5F15%u5165%u65B9%u5F0F%u53C2%u89C1%3Ca%20href%3D%22%23/quickstart%22%3E%u5FEB%u901F%u4E0A%u624B%3C/a%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-json%22%3E%3Cspan%20class%3D%22hljs-string%22%3E%22usingComponents%22%3C/span%3E%3A%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%22van-tree-select%22%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%22path/to/vant-weapp/dist/tree-select/index%22%3C/span%3E%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cp%3E%u53EF%u4EE5%u5728%u4EFB%u610F%u4F4D%u7F6E%u4E0A%u4F7F%u7528%20van-tree-select%20%u6807%u7B7E%u3002%u4F20%u5165%u5BF9%u5E94%u7684%u6570%u636E%u5373%u53EF%u3002%0A%u6B64%u7EC4%u4EF6%u652F%u6301%u5355%u9009%u6216%u591A%u9009%uFF0C%u5177%u4F53%u884C%u4E3A%u5B8C%u5168%u57FA%u4E8E%u4E8B%u4EF6%20click-item%20%u7684%u5B9E%u73B0%u903B%u8F91%u5982%u4F55%u4E3A%u5C5E%u6027%20active-id%20%u8D4B%u503C%uFF0C%u5F53%20active-id%20%u4E3A%u6570%u7EC4%u65F6%u5373%u4E3A%u591A%u9009%u72B6%u6001%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-tree-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eitems%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20items%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emain-active-index%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20mainActiveIndex%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eactive-id%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20activeId%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclick-nav%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClickNav%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclick-item%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClickItem%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EPage%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edata%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EmainActiveIndex%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EactiveId%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%0A%20%20%7D%2C%0A%0A%20%20onClickNav%28%7B%20detail%20%3D%20%7B%7D%20%7D%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.setData%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EmainActiveIndex%3C/span%3E%3A%20detail.index%20%7C%7C%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%0A%20%20%20%20%7D%29%3B%0A%20%20%7D%2C%0A%0A%20%20onClickItem%28%7B%20detail%20%3D%20%7B%7D%20%7D%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20activeId%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.data.activeId%20%3D%3D%3D%20detail.id%20%3F%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%20%3A%20detail.id%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.setData%28%7B%20activeId%20%7D%29%3B%0A%20%20%7D%0A%7D%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22duo-xuan%22%3E%u591A%u9009%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-tree-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eitems%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20items%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emain-active-index%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20mainActiveIndex%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eactive-id%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20activeId%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclick-nav%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClickNav%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclick-item%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClickItem%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EPage%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edata%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EmainActiveIndex%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EactiveId%3C/span%3E%3A%20%5B%5D%0A%20%20%7D%2C%0A%0A%20%20onClickNav%28%7B%20detail%20%3D%20%7B%7D%20%7D%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.setData%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EmainActiveIndex%3C/span%3E%3A%20detail.index%20%7C%7C%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%0A%20%20%20%20%7D%29%3B%0A%20%20%7D%2C%0A%0A%20%20onClickItem%28%7B%20detail%20%3D%20%7B%7D%20%7D%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20%7B%20activeId%20%7D%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.data%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20index%20%3D%20activeId.indexOf%28detail.id%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28index%20%26gt%3B%20%3Cspan%20class%3D%22hljs-number%22%3E-1%3C/span%3E%29%20%7B%0A%20%20%20%20%20%20activeId.splice%28index%2C%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%29%3B%0A%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20%20%20activeId.push%28detail.id%29%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.setData%28%7B%20activeId%20%7D%29%3B%0A%20%20%7D%0A%7D%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eitems%3C/td%3E%0A%3Ctd%3E%u5206%u7C7B%u663E%u793A%u6240%u9700%u7684%u6570%u636E%uFF0C%u5177%u4F53%u6570%u636E%u7ED3%u6784%u53EF%u770B%20%u6570%u636E%u7ED3%u6784%3C/td%3E%0A%3Ctd%3E%3Cem%3EArray%3C/em%3E%3C/td%3E%0A%3Ctd%3E%5B%5D%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emain-active-index%3C/td%3E%0A%3Ctd%3E%u5DE6%u4FA7%u5BFC%u822A%u9AD8%u4EAE%u7684%u7D22%u5F15%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%3C/em%3E%3C/td%3E%0A%3Ctd%3E0%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eactive-id%3C/td%3E%0A%3Ctd%3E%u53F3%u4FA7%u9009%u62E9%u9879%uFF0C%u9AD8%u4EAE%u7684%u6570%u636Eid%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20number%20%7C%20Array%3C/em%3E%3C/td%3E%0A%3Ctd%3E0%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aclick-nav%3C/td%3E%0A%3Ctd%3E%u5DE6%u4FA7%u5BFC%u822A%u70B9%u51FB%u65F6%uFF0C%u89E6%u53D1%u7684%u4E8B%u4EF6%3C/td%3E%0A%3Ctd%3Eevent.detail.index%uFF1A%u88AB%u70B9%u51FB%u7684%u5BFC%u822A%u7684%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aclick-item%3C/td%3E%0A%3Ctd%3E%u53F3%u4FA7%u9009%u62E9%u9879%u88AB%u70B9%u51FB%u65F6%uFF0C%u4F1A%u89E6%u53D1%u7684%u4E8B%u4EF6%3C/td%3E%0A%3Ctd%3Eevent.detail%3A%20%u8BE5%u70B9%u51FB%u9879%u7684%u6570%u636E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22items-shu-ju-jie-gou%22%3Eitems%20%u6570%u636E%u7ED3%u6784%3C/h3%3E%0A%3Cp%3E%3Ccode%3Eitems%3C/code%3E%20%u6574%u4F53%u4E3A%u4E00%u4E2A%u6570%u7EC4%uFF0C%u6570%u7EC4%u5185%u5305%u542B%u4E00%u7CFB%u5217%u63CF%u8FF0%u5206%u7C7B%u7684%u5BF9%u8C61%3C/p%3E%0A%3Cp%3E%u6BCF%u4E2A%u5206%u7C7B%u91CC%uFF0Ctext%20%u8868%u793A%u5F53%u524D%u5206%u7C7B%u7684%u540D%u79F0%u3002children%20%u8868%u793A%u5206%u7C7B%u91CC%u7684%u53EF%u9009%u9879%uFF0C%u4E3A%u6570%u7EC4%u7ED3%u6784%uFF0Cid%20%u88AB%u7528%u6765%u552F%u4E00%u6807%u8BC6%u6BCF%u4E2A%u9009%u9879%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%5B%0A%20%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5BFC%u822A%u540D%u79F0%3C/span%3E%0A%20%20%20%20text%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u6240%u6709%u57CE%u5E02%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u7981%u7528%u9009%u9879%3C/span%3E%0A%20%20%20%20disabled%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u8BE5%u5BFC%u822A%u4E0B%u6240%u6709%u7684%u53EF%u9009%u9879%3C/span%3E%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u540D%u79F0%3C/span%3E%0A%20%20%20%20%20%20%20%20text%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u6E29%u5DDE%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20id%uFF0C%u4F5C%u4E3A%u5339%u914D%u9009%u4E2D%u72B6%u6001%u7684%u6807%u8BC6%3C/span%3E%0A%20%20%20%20%20%20%20%20id%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u7981%u7528%u9009%u9879%3C/span%3E%0A%20%20%20%20%20%20%20%20disabled%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u676D%u5DDE%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22wai-bu-yang-shi-lei%22%3E%u5916%u90E8%u6837%u5F0F%u7C7B%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u7C7B%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Emain-item-class%3C/td%3E%0A%3Ctd%3E%u5DE6%u4FA7%u9009%u9879%u6837%u5F0F%u7C7B%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Econtent-item-class%3C/td%3E%0A%3Ctd%3E%u53F3%u4FA7%u9009%u9879%u6837%u5F0F%u7C7B%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emain-active-class%3C/td%3E%0A%3Ctd%3E%u5DE6%u4FA7%u9009%u9879%u9009%u4E2D%u6837%u5F0F%u7C7B%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Econtent-active-class%3C/td%3E%0A%3Ctd%3E%u53F3%u4FA7%u9009%u9879%u9009%u4E2D%u6837%u5F0F%u7C7B%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emain-disabled-class%3C/td%3E%0A%3Ctd%3E%u5DE6%u4FA7%u9009%u9879%u7981%u7528%u6837%u5F0F%u7C7B%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Econtent-disabled-class%3C/td%3E%0A%3Ctd%3E%u53F3%u4FA7%u9009%u9879%u7981%u7528%u6837%u5F0F%u7C7B%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")},mounted:function(){var s=this;[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5")).forEach(function(E){E.addEventListener("click",s.scrollToAnchor)})},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({path:this.$route.path,hash:s.target.id})}}},a=u(2),t=Object(a.a)(C,function(){var s=this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);E.default=t.exports}}]);