export default [
  {
    themeId: "pipiblue",
    name: "皮皮蓝",
    css: `/*
  mdnice 主题
  - 名称：皮皮蓝
  - 版本：20220409
*/

/* ----------------------------------------------------- */

/* 全局属性 */
#nice {
  margin: 0px;
  padding: 1px 8px;
  color: #000000;
  font-size: 14px;
  line-height: 26px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  letter-spacing: 2px;
  word-break: break-all;
}

/* ----------------------------------------------------- */

/* 段落 */
#nice p {
  color: #000000;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  word-spacing: 0px;
  text-align: left;
  text-indent: 0px;
}

/* 加粗 */
#nice strong {
  color: #3594f7;
  font-weight: bold;
}

/* 斜体 */
#nice em {
  color: #54a2f5;
}

/* 加粗斜体 */
#nice em strong {
  color: #54a2f5;
}

/* 带有删除线的文本 */
#nice s {
  color: #2b2b2b;
}

/* 链接 */
#nice a {
  border-bottom: 1px solid #3594f7;
  color: #3594f7;
  font-weight: normal;
  word-spacing: 0px;
}

/* ----------------------------------------------------- */

/* 标题 */
#nice h1,
#nice h2,
#nice h3,
#nice h4,
#nice h5,
#nice h6 {
  margin-top: 20px;
  margin-bottom: 10px;
}

/* 一级标题 */
#nice h1 {
  line-height: 30px;
  font-size: 24px;
}

/* 一级标题 前缀 */
#nice h1 .prefix {}

/* 一级标题 内容 */
#nice h1 .content {
  border-left: 6px solid #40b8fa;
  padding-left: 15px;
  color: #40b8fa;
}

/* 二级标题 */
#nice h2 {
  color: #40b8fa;
  line-height: 27.5px;
  font-size: 22px;
}

/* 二级标题 前缀 */
#nice h2 .prefix {
  width: 20px;
  height: 20px;
  margin-bottom: -24px;
  background-size: 20px 20px;
  background-image: url(https://files.mdnice.com/fullstack-1.png);
  display: flex;
}

/* 二级标题 内容 */
#nice h2 .content {
  margin-left: 25px;
}

/* 三级标题 */
#nice h3 {
  color: #40b8fa;
  line-height: 25px;
  font-size: 20px;
}

/* 三级标题 内容 */
#nice h3 .content {}

/* 三级标题 内容前缀 */
#nice h3 .content:before {
  display: inline-block;
  content: '';
  width: 16px;
  height: 16px;
  margin-right: 6px;
  margin-bottom: -2px;
  background-image: url(https://files.mdnice.com/fullstack-3.png);
  background-size: 100%;
  background-position: left bottom;
  background-repeat: no-repeat;
}

/* 四级标题 */
#nice h4 {
  color: #40b8fa;
  line-height: 22px;
  font-size: 18px;
}

/* 四级标题 内容 */
#nice h4 .content {}

/* 六级标题 内容前缀 */
#nice h4 .content:before {
  display: inline-block;
  content: '>';
  width: 16px;
  margin-right: 3px;
}

/* 五级标题 */
#nice h5 {
  color: #40b8fa;
  line-height: 19px;
  font-size: 17px;
}

/* 五级标题 内容 */
#nice h5 .content {}

/* 五级标题 内容前缀 */
#nice h5 .content:before {
  display: inline-block;
  content: '~';
  width: 16px;
  margin-right: 0px;
}

/* 六级标题 */
#nice h6 {
  color: #40b8fa;
  line-height: 19px;
  font-size: 16px;
}

/* 六级标题 内容 */
#nice h6 .content {}

/* 六级标题 内容前缀 */
#nice h6 .content:before {
  display: inline-block;
  content: '-';
  width: 16px;
  margin-right: -3px;
}

/* ----------------------------------------------------- */

/* 分隔线 */
#nice hr {
  width: 100%;
  height: 1px;
  margin: 40px 0;
  border: none;
  padding: 0;
  background-color: #3baafa;
  opacity: 0.8;
}

/* ----------------------------------------------------- */

/* 无序列表 */
#nice ul {
  margin-top: -5px;
  margin-left: -4px;
  list-style-type: circle;
}

/* 有序列表 */
#nice ol {
  margin-top: -5px;
  margin-left: -4px;
}

/* 列表内容 */
#nice li section {
  font-weight: normal;
}

/* ----------------------------------------------------- */

/* 一级引用 */
#nice .multiquote-1,
/* 二级引用 */
#nice .multiquote-2,
/* 三级引用 */
#nice .multiquote-3 {
  display: block;
  margin-bottom: 15px;
  margin-top: 15px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 174, 255, 0.4);
  border-radius: 5px;
  padding: 15px;
  background: rgba(64, 184, 255, 0.1);
  line-height: 1.55em;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  text-size-adjust: 100%;
}

/* 引用 文本 */
#nice .multiquote-1 p,
#nice .multiquote-2 p,
#nice .multiquote-3 p {
  margin: 0px;
  color: #2b2b2b;
  line-height: 26px;
}

/* ----------------------------------------------------- */

/* 图形 */
#nice figure {
  margin-top: 0;
  margin-bottom: 10px;
  position: relative;
}

/* 图像 */
#nice img {
  display: block;
  object-fit: contain;
  margin: 15px auto;
  border-radius: 5px;
  box-shadow: 2px 4px 7px #999;
}

/* 描述 */
#nice figcaption {
  display: block;
  font-size: 12px;
  color: #888888;
  margin-top: -5px;
}

/* 图像链接 */
#nice figure a {
  border-radius: 5px;
}

/* 图像链接 描述 */
#nice figure a+figcaption {
  position: absolute;
  bottom: 0px;
  border-radius: 0 0 5px 5px;
}

/* ----------------------------------------------------- */

/* 滑动图像容器 */
#nice .imageflow-layer1 {
  margin-top: 10px;
  margin-bottom: 10px;
}

/* 滑动图像 */
#nice .imageflow-img {
  display: inline-block;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

/* ----------------------------------------------------- */

/* 表格内的单元格 */
#nice table tr th,
#nice table tr td {
  border: 1px solid #ccc;
  padding: 5px 10px;
  color: #444444;
  font-size: 14px;
}

/* ----------------------------------------------------- */

/* （文内）脚注文本 */
#nice .footnote-word {
  font-weight: normal;
  color: #555555;
}

/* （文内）脚注引用 */
#nice .footnote-ref {
  font-weight: normal;
  color: #555555;
}

/* 脚注块标题 */
#nice .footnotes-sep:before {
  display: inline;
  content: '参考资料';
  border-bottom: 2px solid rgba(64, 184, 250, 1);
  background: linear-gradient(white 60%, rgba(64, 184, 250, 0.4) 40%);
  color: #555555;
  font-size: 20px;
  letter-spacing: 1px;
}

/* 脚注块 */
#nice .footnotes {
  border: 1px solid rgb(164, 202, 255);
  border-radius: 5px;
  padding: 20px 20px 20px 20px;
  background: rgba(209, 232, 255, 0.2);
  font-size: 14px;
}

/* 脚注项序号 */
#nice .footnote-num {}

/* 脚注项 */
#nice .footnote-item {}

/* 脚注项 斜体 */
#nice .footnote-item p {
  color: #555555;
  font-weight: bold;
}

/* 脚注项 段落斜体 */
#nice .footnote-item p em {
  font-weight: normal;
}

/* 脚注项 斜体 */
#nice .footnote-item em {
  display: block;
  color: #555555;
  font-size: 14px;
}

/* ----------------------------------------------------- */

/* 行内代码 */
#nice p code,
#nice li code {
  height: 21px;
  border-radius: 2px;
  padding: 0 2px;
  background: rgba(59, 170, 250, 0.1);
  line-height: 22px;
  color: #3594f7;
}

/* 代码块 */
#nice pre {
  margin-top: 10px;
  margin-bottom: 15px;
}

/* 代码块 代码 */
#nice pre code {
  letter-spacing: 0px;
}

/* ----------------------------------------------------- */

/* 行间公式 */
#nice .block-equation svg {}

/* 行内公式 */
#nice .inline-equation svg {}

/* ----------------------------------------------------- */`,
  },
  {
    themeId: "oblue",
    name: "橙蓝风",
    css: `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  margin-top: 0;
  padding: 0;
}
/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size: 16px;
  line-height: 26px;
  word-spacing: 3px;
  letter-spacing: 1px;
  color: #424B5D;
}
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  margin-top: 24px;
  margin-bottom: 12px;
  font-weight: bold;
}
/* 一级标题 */
#nice h1 {
  font-size: 22px;
  color: #e7642b;
}
/* 一级标题内容 */
#nice h1 .content {
}
/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
/* 二级标题 */
#nice h2 {
  font-size: 20px;
  margin-top: 24px;
  margin-bottom: 12px;
}
/* 二级标题内容 */
#nice h2 .content {
  color: #e7642b;
  text-align: center;
  display: block;
  background-color: #e7642b;
  color: white;
  padding: 3px 11px;
  border-radius: 1px;
}
/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}
/* 三级标题 */
#nice h3 {
  font-size: 18px;
  color: #424B5D;
}
/* 三级标题内容 */
#nice h3 .content {
}
/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}
/* 四级标题 */
#nice h4 {
  font-size: 16px;
  color: #424B5D;
}
/* 五级标题 */
#nice h5 {
  font-size: 16px;
  color: #424B5D;
}
/* 有序、无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul, #nice ol  {
  font-size: 15px;
  margin: 0;
  padding-left: 24px;
  color: #424B5D;
}
/* 列表内容，不要设置li
 */
#nice li section {
  margin: 4px 0;
  line-height: 24px;
  color: #424B5D;
}
/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice .multiquote-1 {
  margin: 0 8px;
  border: none;
  background: #ffffff;
  box-shadow: 0 1px 2px -2px rgba(0,0,0,.16), 0 3px 6px 0 rgba(0,0,0,.12), 0 5px 12px 4px rgba(0,0,0,.09);
}
/* 引用文字 */
#nice .multiquote-1 p {
  font-size: 14px;
  color: #424B5D;
  line-height: 24px;
}
/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: #eb6161;
  border-bottom: 1px solid #eb6161;
}
#nice a::before {
  content: '?';
  margin-right: 6px;
}
/* 加粗 */
#nice strong {
  color: #424B5D;
}
/* 斜体 */
#nice em {
  color: #424B5D;
}
/* 加粗斜体 */
#nice em strong {
  color: #424B5D;
}
/* 删除线 */
#nice del { 
}
/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
  border-top: 1px dashed #424B5D;
}
/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
  border-radius: 5px;
  margin: 12px auto;
}
/* 图片描述文字 */
#nice figcaption {
  font-size: 14px;
  margin: 12px auto;
  color: #999999;
}
/* 行内代码 */
#nice p code, #nice li code {
  padding-left: 0;
  padding-right: 0;
  background: transparent;
  border-radius: 0;
  color: #eb6161;
  border-bottom: 1px solid #eb6161;
}
/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre {
  margin: 12px auto;
  box-shadow: 0 1px 2px -2px rgba(0,0,0,.16), 0 3px 6px 0 rgba(0,0,0,.12), 0 5px 12px 4px rgba(0,0,0,.09) !important;
  border-radius: 5px;
}
#nice pre code {
}
/*
 * 表格
 */
#nice table {
  margin: 12px auto;
}
/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  color: #424B5D;
  font-size: 14px;
}
/* 脚注文字 */
#nice .footnote-word {
  color: #eb6161;
}
/* 脚注上标 */
#nice .footnote-ref {
  color: #eb6161;
}
/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  font-size: 16px;
}
/* 参考资料编号 */
#nice .footnote-num {
}
/* 参考资料文字 */
#nice .footnote-item p { 
  font-size: 12px;
  color: #424B5D;
}
/* 参考资料解释 */
#nice .footnote-item p em {
  font-size: 12px;
  color: #999999;
}
/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
  color: #424B5D;
}
/* 行内公式
 */
#nice .inline-equation svg {  
  color: #424B5D;
}

#nice .imageflow-layer1 img {
  border-radius: 0;
}

#nice .imageflow-caption {
  font-size: 14px;
  margin-top: 8px;
  color: #999999;
}

::-webkit-scrollbar {
  height: 4px;
}`,
  },
  {
    themeId: "chongying",
    name: "重影",
    css: `/* 全局属性
 * 页边距 padding: 30px;
 * 英文换行 word-break: break-all;
 */
#nice {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size: 15px;
  padding: 5px;
  text-align: center;
}

/* 一级标题 */
#nice h1 {
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题前缀 */
#nice h1 .prefix {
}

/* 一级标题后缀 */
#nice h1 .suffix {
}

/* 二级标题 */
#nice h2 {
  display: table;
  margin: 50px auto 20px auto;
  background-image: linear-gradient(to left, rgb(253, 213, 231), rgb(194, 226, 249));
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
  border-color: rgb(62, 62, 62);
}

/* 二级标题内容 */
#nice h2 .content {
  display:block;
  font-size: 18px;
  border: 1px solid black;
  padding: 10px;
  transform: translate3d(-5px, -5px, 0px);
}

/* 二级标题前缀 */
#nice h2 .prefix {
}

/* 二级标题后缀 */
#nice h2 .suffix {
}

/* 三级标题 */
#nice h3 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 三级标题内容 */
#nice h3 .content {
  font-size: 18px;
  text-shadow: rgb(171 224 225) 3.83022px 3.21394px 0px;
}

/* 三级标题前缀 */
#nice h3 .prefix {
  display: inline-block;
  width: 40px;
  height: 20px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(https://files.mdnice.com/pic/d1e2129b-30a8-443d-8ebb-a3f7aa09141e.png);
}

/* 三级标题后缀 */
#nice h3 .suffix {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  font-size: 15px;
}

/* 一级引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
}

/* 一级引用文字 */
#nice .multiquote-1 p {
  font-size: 15px;
}

/* 二级引用
 */
#nice .multiquote-2 {
}

/* 二级引用文字 */
#nice .multiquote-2 p {
  font-size: 15px;
}

/* 三级引用
 */
#nice .multiquote-3 {
}

/* 三级引用文字 */
#nice .multiquote-3 p {
  font-size: 15px;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  font-size: 15px;
}

/* 加粗 */
#nice strong {
  color: rgb(255, 79, 121);
}

/* 斜体 */
#nice em {
  font-size: 15px;
}

/* 加粗斜体 */
#nice em strong {
  font-size: 15px;
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
}

/* 
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}

/* 
 * 某一列表格列宽控制
 * n 可以修改为具体数字，不修改时表示所有列
 * 最小列宽 min-width: 85px;
 */
#nice table tr th:nth-of-type(n),
#nice table tr td:nth-of-type(n){
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg { 
}

/* 容器块1 */
#nice .block-1 {
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
  border-color: rgba(48, 117, 153, 0.34);
  margin: 0;
  padding: 0;
}

#nice .block-1 .block-1-inner {
  display: block;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
  border-color: rgba(48, 117, 153, 0.34);
  transform: translate3d(-5px, -5px, 0px);
  padding: 15px;
}

#nice .block-1 .block-1-inner p {
  text-align: left;
}

/* 容器块2 */
#nice .block-2 {
}

/* 容器块3 */
#nice .block-3 {
}

/* 分列总体布局 */
#nice .column {
  
}

/* 分列左边布局 */
#nice .column .column-left {
}

/* 分列右边布局 */
#nice .column .column-right {
}

#nice .column .column-right p {
  text-align: left;
  font-size: 12px;
}`,
  },
  {
    themeId: "wechat1",
    name: "公众号专用",
    css: `/*自定义样式，实时生效*/


/* 全局属性
 * 页边距 padding:30px;
 * 全文字体 font-family:ptima-Regular;
 * 英文换行 word-break:break-all;
 */

#nice {
    font-size: 14px;
    word-break: break-word;
    letter-spacing: 0.2em;
    text-align: justify;
    line-height: 1.2;
    color: rgb(89, 89, 89);
    font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
    background-image: linear-gradient( 90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient( 360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
    background-size: 20px 20px;
    background-position: center center;
}

#nice p,
#nice .multiquote-1,
#nice ul,
#nice ol,
#nice dl,
#nice table {
    margin: 0.3em 0;
}

#nice h1,
#nice h2,
#nice h3,
#nice h4,
#nice h5,
#nice h6 {
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 0px;
    font-weight: bold;
    color: black;
}


/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top:5px;
 * 下边距 margin-bottom:5px;
 * 行高 line-height:26px;
 * 词间距 word-spacing:3px;
 * 字间距 letter-spacing:3px;
 * 对齐 text-align:left;
 * 颜色 color:#3e3e3e;
 * 字体大小 font-size:16px;
 * 首行缩进 text-indent:2em;
 */

#nice p {
    font-size: 14px;
}


/* 一级标题 */

#nice h1 {
    border-bottom: 2px solid #00c4b6;
    text-align: center;
    padding-bottom: 0.3em;
    line-height: 1.2;
    margin: 2.4em auto 1.2em;
}


/* 一级标题内容 */

#nice h1 .content {}


/* 一级标题修饰 请参考有实例的主题 */

#nice h1:after {}


/* 二级标题 */

#nice h2 {
    margin: 1.3em auto 1.2em;
    border-bottom: 2px solid #00c4b6;
}

#nice h2 * {
    margin-left: .68rem;
}


/* 二级标题修饰 请参考有实例的主题 */

#nice h2:after {}


/* 三级标题 */

#nice h3 {
    line-height: 1.3;
    padding-left: 9px;
    border-left: 5px solid #00c4b6;
}

#nice h4 {
    margin-top: 1.3em;
    border: 1px solid #00c4b6;
    border-top: 4px solid #00c4b6;
    padding-left: 6px;
    padding-right: 6px;
    display: inline-block;
}


/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */

#nice ul,
#nice ol {
    padding-left: 35px;
    margin: .5rem 0;
}

#nice ul {
    list-style-type: circle;
}

#nice ul:first-child,
#nice ol:first-child {
    margin-top: 30px;
}


/* 列表内容，不要设置li
 */

#nice li section {
    color: #333;
    font-weight: normal;
}

#nice ol>li>*:not(ol):not(ul),
#nice ul>li>*:not(ol):not(ul) {
    padding-left: .25rem;
}


/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */

#nice .multiquote-1 {
    border-left: 5px solid #5fa7e4;
    padding: 3px 15px;
    color: #3f3f3f;
    background-color: #f4fcff;
    border-radius: 3px;
    position: relative;
}


/* 引用文字 */

#nice .multiquote-1 p {}


/* 链接 
 * border-bottom: 1px solid #009688;
 */

#nice a {
    border-bottom: 2px solid #81d8cf;
    padding: 0 4px;
    transition: .3s;
    color: black;
    text-decoration: none;
}


/* 加粗 */

#nice strong {
    font-weight: border;
}


/* 斜体 */

#nice em {
    letter-spacing: 0.3em;
}


/* 加粗斜体 */

#nice em strong {
    letter-spacing: 0.3em;
}


/* 删除线 */

#nice del {}


/* 分隔线
 * 粗细、样式和颜色
 * border-top:1px solid #3e3e3e;
 */

#nice hr {
    height: 1px;
    padding: 0;
    border: none;
    border-top: medium solidid #333;
    text-align: center;
    background-image: linear-gradient(to right, rgba(248, 57, 41, 0), #0e88eb, rgba(248, 57, 41, 0));
}


/* 图片
 * 宽度 width:80%;
 * 居中 margin:0 auto;
 * 居左 margin:0 0;
 */

#nice img {
    border-radius: 0px 0px 5px 5px;
    display: block;
    margin: 20px auto;
    width: 85%;
    height: 100%;
    object-fit: contain;
    box-shadow: #84A1A8 0px 10px 15px;
}


/* 图片描述文字 */

#nice figcaption {
    display: block;
    font-size: 12px;
    font-family: PingFangSC-Light;
}


/* 行内代码 */

#nice p code,
#nice li code {
    color: /*自定义样式，实时生效*/
}


/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */

#nice pre code {}


/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */

#nice table {
    padding: 0;
    word-break: initial;
    font-size: 12pt;
}

#nice table tr:nth-child(2n) {
    background-color: #eee;
}

#nice table tr th {
    font-weight: bold;
    border: 1px solid #c5c5c5;
    background-color: #f4fcff;
    border-bottom: 0;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
}

#nice table tr td {
    border: 1px solid #c5c5c5;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
}

#nice table tr th:first-child,
#nice table tr td:first-child {
    margin-top: 0;
}

#nice table tr th:last-child,
#nice table tr td:last-child {
    margin-bottom: 0;
}


/* 脚注文字 */

#nice .footnote-word {
    color: #2d59b3;
}


/* 脚注上标 */

#nice .footnote-ref {
    color: #6a88c5;
}


/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */

#nice pre code {}


/* 脚注文字 */

#nice .footnote-word {
    color: #0e88eb;
}


/* 脚注上标 */

#nice .footnote-ref {
    color: #0e88eb;
}


/*脚注链接样式*/

#nice .footnote-item em {
    color: #082a71;
    font-size: 12px;
}


/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */

#nice .footnotes-sep:before {}


/* 参考资料编号 */

#nice .footnote-num {}


/* 参考资料文字 */

#nice .footnote-item p {}


/* 参考资料解释 */

#nice .footnote-item p em {}


/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */

#nice .block-equation svg {}


/* 行内公式
 */

#nice .inline-equation svg {}


/* 滑动图片
 */

#nice .imageflow-img {
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
}`,
  },
  {
    themeId: "arrow",
    name: "丘比特",
    css: `/* 全局属性
 * 页边距 padding: 30px;
 * 英文换行 word-break: break-all;
 */
#nice {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size: 15px;
}

/* 一级标题 */
#nice h1 {
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题前缀 */
#nice h1 .prefix {
}

/* 一级标题后缀 */
#nice h1 .suffix {
}

/* 二级标题 */
#nice h2 {
  display: flex;
  justify-content: center;
  border: none;
  color: rgb(130, 127, 196);
  padding: 0;
}

/* 二级标题内容 */
#nice h2 .content {
  display:flex;
  align-items: center;
  font-size: 18px;
}

/* 二级标题前缀 */
#nice h2 .prefix {
  display: block;
  width: 35px;
  height: 35px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(https://files.mdnice.com/pic/c6dd0d41-e95d-4d0d-a202-afa9ca0731af.png); 
  margin-right: -20px;
}

/* 二级标题后缀 */
#nice h2 .suffix {
  display: block;
  width: 15px;
  height: 15px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(https://files.mdnice.com/pic/4e116911-86c9-40c7-80ec-bd05e65efa5b.png);
}

/* 三级标题 */
#nice h3 {
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题前缀 */
#nice h3 .prefix {
}

/* 三级标题后缀 */
#nice h3 .suffix {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  font-size: 15px;
}

/* 一级引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
}

/* 一级引用文字 */
#nice .multiquote-1 p {
  font-size: 15px;
}

/* 二级引用
 */
#nice .multiquote-2 {
}

/* 二级引用文字 */
#nice .multiquote-2 p {
  font-size: 15px;
}

/* 三级引用
 */
#nice .multiquote-3 {
}

/* 三级引用文字 */
#nice .multiquote-3 p {
  font-size: 15px;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  font-size: 15px;
  color: rgb(130, 127, 196);
  border-bottom: 1px solid rgb(130, 127, 196);
}

/* 加粗 */
#nice strong {
  color: rgb(130, 127, 196);
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
}

/* 
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}

/* 
 * 某一列表格列宽控制
 * n 可以修改为具体数字，不修改时表示所有列
 * 最小列宽 min-width: 85px;
 */
#nice table tr th:nth-of-type(n),
#nice table tr td:nth-of-type(n){
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg { 
}

/* 容器块1 */
#nice .block-1 {
  padding-top: 20px;
  padding-bottom: 20px;
}

#nice .block-1 h1 {
  display: flex;
  justify-content: center;
  margin-top: -40px;
}

#nice .block-1 h1 .prefix {
  display: none;
}

#nice .block-1 h1 .content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  background-color: rgb(130, 127, 196);
  border-radius: 50%;
  width: 55px;
  height: 55px;
}

#nice .block-1 h1 .suffix {
  width: 20px;
  height: 20px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(https://files.mdnice.com/pic/4e116911-86c9-40c7-80ec-bd05e65efa5b.png);
}

#nice .block-1 h2 {
  display: flex;
  border: none;
  color: rgb(130, 127, 196);
  padding: 0;
}

#nice .block-1 h2 .prefix {
  display: block;
  width: 35px;
  height: 35px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(https://files.mdnice.com/pic/c6dd0d41-e95d-4d0d-a202-afa9ca0731af.png); 
  margin-right: -20px;
}

#nice .block-1 h2 .content {
  display:flex;
  align-items: center;
  font-size: 18px;
}

#nice .block-1 h2 .suffix {
  display: block;
  width: 15px;
  height: 15px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(https://files.mdnice.com/pic/4e116911-86c9-40c7-80ec-bd05e65efa5b.png);
}

#nice .block-1 em {
  font-style: normal;
  font-weight: bold;
}

#nice .block-1 strong {
  color: rgb(130, 127, 196);
}

#nice .block-1 p {
  font-size: 15px;
}

#nice .block-1 li {
  font-size: 15px;
}

/* 容器块2 */
#nice .block-2 {
  display: flex;
  justify-content: center;
  background: none;
  padding: 0;
}

#nice .block-2 .block-2-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(223, 241, 238);
  width: 90%; 
  border-radius: 5px;
  border-width: 1px;
  border-style: dashed;
  border-color: rgb(74, 179, 172);
  padding: 20px;
}

#nice .block-2 strong {
  color: rgb(255, 79, 121);
}

#nice .block-2 p {
  color: rgb(7, 107, 115);
  font-weight: bold;
  padding: 0;
  font-size: 15px;
}
/* 容器块3 */
#nice .block-3 {
  background: none;
}

#nice .block-3 .block-3-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nice .block-3 a {
  font-size: 15px;
}

#nice .block-3 p {
  font-size: 15px;
}

/* 分列总体布局 */
#nice .column {
}

/* 分列左边布局 */
#nice .column .column-left {
  width: 50%;
}

#nice .column .column-left p {
  padding: 0;
  font-size: 12px;
}

#nice .column .column-left strong {
  font-size: 12px;
  color: rgb(130, 127, 196);
}

/* 分列右边布局 */
#nice .column .column-right {
   width: 50%;
}

#nice .column .column-right p {
  padding: 0;
  font-size: 12px;
}

#nice .column .column-right strong {
  font-size: 12px;
  color: rgb(130, 127, 196);
}`,
  },
  {
    themeId: "activeblue",
    name: "灵动蓝",
    css: `/*自定义样式，实时生效*/

/* 全局属性 */
.nice-wx-box {

}

#nice {
  color: #333;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}

/* 标题的通用设置 */
#nice h1,
#nice h2,
#nice h3,
#nice h4,
#nice h5,
#nice h6 {
  padding: 30px 0;
  margin: 0;
  color: #135ce0;
}

/* 一级标题 */
#nice h1 {
  position: relative;
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;
}

/* 一级标题前缀，用来放背景图，支持透明度控制 */
#nice h1 .prefix {
  display: inline-block;
  top: 0;
  width: 60px;
  height: 60px;
  background: url(https://my-wechat.mdnice.com/ape_blue.svg);
  background-size: 100% 100%;
  opacity: .12;
}

/* 一级标题内容 */
#nice h1 .content {
  font-size: 22px;
  display: block;
  margin-top: -36px;
}

/* 二级标题 */
#nice h2 {
  position: relative;
\tfont-size: 20px;
}

/* 二级标题前缀，有兴趣加内容的可以魔改 */
#nice h2 .prefix {

}

/* 二级标题内容 */
#nice h2 .content {
\tborder-left: 4px solid;
  padding-left: 10px;
}

/* 一二级标题之间间距控制一下 */
#nice h1 + h2 {
  padding-top: 0;
}

/* 三级标题 */
#nice h3 {
  font-size: 16px;
}

/* 段落 */
#nice p {
  font-size: 16px;
  line-height: 2;
  font-weight: 400;
}

/* 段落间距控制 */
#nice p+p {
  margin-top: 16px;
}

/* 无序列表 */
#nice ul>li ul>li {
  list-style: circle;
}

/* 无序列表内容行高 */
#nice li section {
  line-height: 2;
}

/* 引用 */
#nice .multiquote-1 {
  border-left-color: #b2aec5;
  background: #fff9f9;
}

/* 引用文字 */
#nice .multiquote-1 p {
  color: #666;
  line-height: 2;
}

/* 链接 */
#nice a {
  color: #036aca;
  border-bottom: 0;
  font-weight: 400;
  text-decoration: none;
}

/* 加粗 */
#nice strong {
  background: linear-gradient(to right ,#3299d2,#efbdb5);
  color: #fff;
  font-weight: 400;
  padding: 0 4px;
  display: inline-block;
  border-radius: 4px;
  margin: 0 2px;
  letter-spacing: 1px;
}

/* 加粗斜体 */
#nice em strong {
  color: #fff;
}

/* 分隔线 */
#nice hr {
  border-top: 1px solid #135ce0;
}

/* 图片描述文字，隐藏了，如果需要，请删除display */
#nice figcaption {
  display: none;
  opacity: .6;
  margin-top: 12px;
  font-size: 12px;
}

/* 行内代码 */
#nice p code, li code {
  color: #1394d8;
  padding: 2px 6px;
  word-break: normal;
}

/* 表格 */
#nice table {
  border-spacing: 0;
}

/*
 * 表格内的单元格
 */
#nice table tr th {
  background-color: #d4f1ff;
}

/* 脚注文字 */
#nice .footnote-word {
  color: #135ce0;
  font-weight: 400;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #5ba1e2;
  font-weight: 400;
}

/* 参考资料 */
#nice .footnotes-sep:before {
  text-align: center;
  color: #135ce0;
  content: "参考";
}

/* 参考编号 */
#nice .footnote-num {
  color: #666;
}

/* 参考文字 */
#nice .footnote-item p { 
  color: #999;
  font-weight: 700;
  font-style: italic;
  font-size: 13px;
}

/* 参考解释 */
#nice .footnote-item p em {
  color: #3375e2;
  font-style: normal;
  margin-left: 4px;
}`,
  },
  {
    themeId: "brackshi",
    name: "黑曜石",
    css: `/*自定义样式，实时生效*/

/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size: 17px;
  word-spacing: 3px;
  letter-spacing: 1px;
}

/* 一级标题 */
#nice h1 {
  border-bottom: 4px rgba(131, 252, 253) solid;
  display: flex;
  padding: 0;
}

/* 一级标题内容 */
#nice h1 .content {
  width: 100%;
  display: flex;
  color: rgba(131, 252, 253);
  padding: 0.5rem 1rem;
  background: #181a21 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  border-bottom: 4px rgba(160, 249, 176) solid;
  display: flex;
  padding: 0;
}

/* 二级标题内容 */
#nice h2 .content {
  width: 100%;
  display: flex;
  color: rgba(160, 249, 176);
  padding: 0.5rem 1rem;
  background: #181a21 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  border-bottom: 4px rgba(160, 249, 176) solid;
  display: flex;
  padding: 0;
}

/* 三级标题内容 */
#nice h3 .content {
  width: 100%;
  display: flex;
  color: rgba(160, 249, 176);
  padding: 0.5rem 1rem;
  background: #181a21 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice .multiquote-1 {
  position: relative;
  padding: 1rem 1.5rem;
  color: #bdbdbd;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-bottom: 2em;
  border-left: 3px #f4569d solid;
  border-top: 3px #f4569d solid;
  border-bottom: 2px #f4569d solid;
  background: #181a21;
}

/* 引用文字 */
#nice .multiquote-1 p {
  color: #ededed !important;
}

#nice .multiquote-1 p:first-of-type::before {
  content: '!! ';
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  color: #f4569d;
  position: relative;
  top: 0;
  left: 0;
}

#nice .multiquote-1 p strong {
  color: #ededed !important;
}

#nice .multiquote-1 li {
  color: #ededed !important;
}

#nice .multiquote-1 li section {
  color: #ededed !important;
}

#nice .multiquote-1 p strong {
  background: transparent !important;
  border-bottom: none;
}

#nice .multiquote-1 li section strong {
  color: #bdbdbd !important;
  background: transparent !important;
}

#nice .multiquote-1 code {
  background: rgba(244, 86, 157, 0.1);
  color: rgba(244, 86, 157, 1) !important;
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#nice a {
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  padding: 0 0.5rem;
  border-bottom: 3px rgba(131, 252, 253, 0.6) solid;
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
  border-top: 1px dashed #dddddd;
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
  border-radius: 5px;
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code,
#nice li code {
  color: #000000;
  background: rgba(14, 210, 247, 0.15);
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table {
  border: 1px solid rgba(14, 210, 247, 0.06);
  margin: 1rem 0;
}

#nice table tr {
  background: #363636;
}

#nice table tr:nth-child(2n) {
  background: #1e1e1e;
}

#nice table thead td,
#nice table thead th {
  background-color: #10222e !important;
  color: rgba(14, 210, 247, 0.85) !important;
}

#nice table tr th,
#nice table tr td {
  font-size: 16px;
  border: 1px solid #545454;
  padding: 5px 10px;
  text-align: left;
  color: #dedede;
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p {
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {
}
`,
  },
  {
    themeId: "pine",
    name: "萌粉",
    css: `/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
}
/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size: 17px;
  word-spacing: 3px;
  letter-spacing: 1px
}
/* 一级标题 */
#nice h1 {
}
/* 一级标题内容 */
#nice h1 .content {
}
/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
/* 二级标题 */
#nice h2 {
}
/* 二级标题内容 */
#nice h2 .content {
  background-color: #F7D3CC;
  color: #FFF;
  padding: 5px 15px;
  border-radius: 1px;
}
/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}
/* 三级标题 */
#nice h3 {
}
/* 三级标题内容 */
#nice h3 .content {
}
/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}
/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}
/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}
/* 列表内容，不要设置li
 */
#nice li section {
}
/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice .multiquote-1 {
}
/* 引用文字 */
#nice .multiquote-1 p {
}
/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
}
/* 加粗 */
#nice strong {
}
/* 斜体 */
#nice em {
}
/* 加粗斜体 */
#nice em strong {
}
/* 删除线 */
#nice del { 
}
/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
  border-top: 1px dashed #dddddd;
}
/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
  border-radius: 10px;
  border: 3px solid #F7D3CC;
}
/* 图片描述文字 */
#nice figcaption {
}
/* 行内代码 */
#nice p code, #nice li code {
}
/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}
/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}
/* 脚注文字 */
#nice .footnote-word {
}
/* 脚注上标 */
#nice .footnote-ref {
}
/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}
/* 参考资料编号 */
#nice .footnote-num {
}
/* 参考资料文字 */
#nice .footnote-item p { 
}
/* 参考资料解释 */
#nice .footnote-item p em {
}
/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}
/* 行内公式
 */
#nice .inline-equation svg {  
}`,
  },
  {
    themeId: "ningyezi",
    name: "凝夜紫",
    css: `/*自定义样式，实时生效*/

/* 全局属性
* 页边距 padding:30px;
* 全文字体 font-family:optima-Regular;
* 英文换行 word-break:break-all;
*/
#nice {
    line-height: 1.25;
    font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
    letter-spacing: 2px;
    background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
    background-size: 20px 20px;
    background-position: center center;
}

/* 段落，下方未标注标签参数均同此处
  * 上边距 margin-top:5px;
  * 下边距 margin-bottom:5px;
  * 行高 line-height:26px;
  * 词间距 word-spacing:3px;
  * 字间距 letter-spacing:3px;
  * 对齐 text-align:left;
  * 颜色 color:#3e3e3e;
  * 字体大小 font-size:16px;
  * 首行缩进 text-indent:2em;
  */
#nice p {
    margin: 10px 0px;
    letter-spacing: 2px;
    font-size: 14px;
    word-spacing: 2px;
}

/* 一级标题 */
#nice h1 {
    font-size: 25px;
}

/* 一级标题内容 */
#nice h1 .content {
    display: inline-block;
    font-weight: bold;
    color: #773098;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {}

/* 二级标题 */
#nice h2 {
    text-align: left;
    margin: 20px 10px 0px 0px;
}

/* 二级标题内容 */
#nice h2 .content {
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    padding-left: 10px;
    border-left: 5px solid #916dd5;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {}

/* 三级标题 */
#nice h3 {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}

/* 三级标题内容 */
#nice h3 .content {
    border-bottom: 2px solid #d89cf6;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {}

/* 无序列表整体样式
  * list-style-type: square|circle|disc;
  */
#nice ul {
    font-size: 15px;
    /*神奇逻辑，必须比li section的字体大才会在二级中生效*/
    list-style-type: circle;
}


/* 有序列表整体样式
  * list-style-type: upper-roman|lower-greek|lower-alpha;
  */
#nice ol {
    font-size: 15px;
}

/* 列表内容，不要设置li
  */
#nice li section {
    font-size: 14px;
    font-weight: normal;
}

/* 引用
  * 左边缘颜色 border-left-color:black;
  * 背景色 background:gray;
  */
#nice .multiquote-1 {
    border-left-color: #d89cf6;
    background: #f4eeff;
}

/* 链接 
  * border-bottom: 1px solid #009688;
  */
#nice a {
    color: #916dd5;
    font-weight: bolder;
    border-bottom: 1px solid #916dd5;
}

#nice strong::before {
    content: '「';
}

/* 加粗 */
#nice strong {
    color: #916dd5;
    font-weight: bold;
}

#nice strong::after {
    content: '」';
}

/* 斜体 */
#nice em {
    font-style: normal;
    color: #916dd5;
}

/* 加粗斜体 */
#nice em strong {
    color: #916dd5;
}

/* 删除线 */
#nice del {
    color: #916dd5;
}

/* 分隔线
  * 粗细、样式和颜色
  */
#nice hr {
    height: 1px;
    padding: 0;
    border: none;
    border-top: 2px solid #d9b8fa;
}

/* 图片
  * 宽度 width:80%;
  * 居中 margin:0 auto;
  * 居左 margin:0 0;
  */
#nice img {
    border-radius: 6px;
    display: block;
    margin: 20px auto;
    object-fit: contain;
    box-shadow: 2px 4px 7px #999;
}

/* 图片描述文字 */
#nice figcaption {
    display: block;
    font-size: 13px;
}

/* 行内代码 */
#nice p code,
#nice li code {
    color: #916dd5;
    font-weight: bolder;
    background: none;
}

/* 非微信代码块
  * 代码块不换行 display:-webkit-box !important;
  * 代码块换行 display:block;
  */
#nice .code-snippet__fix {
    background: #f7f7f7;
    border-radius: 2px;
}

#nice pre code {}

/*
  * 表格内的单元格
  * 字体大小 font-size: 16px;
  * 边框 border: 1px solid #ccc;
  * 内边距 padding: 5px 10px;
  */
#nice table tr th,
#nice table tr td {
    font-size: 14px;
}

#nice .footnotes {
    font-size: 14px;
}

/* 脚注文字 */
#nice .footnote-word {
    font-weight: normal;
    color: #916dd5;
    font-weight: bold;
}

/* 脚注上标 */
#nice .footnote-ref {
    font-weight: normal;
    color: #916dd5;
}

/*脚注链接样式*/
#nice .footnote-item em {
    font-size: 14px;
    color: #916dd5;
    display: block;
}

/* "参考资料"四个字 
  * 内容 content: "参考资料";
  */
#nice .footnotes-sep:before {
    font-size: 20px;
}

/* 参考资料编号 */
#nice .footnote-num {
    color: #916dd5;
}

/* 参考资料文字 */
#nice .footnote-item p {
    color: #916dd5;
    font-weight: bold;
}

/* 参考资料解释 */
#nice .footnote-item p em {
    font-weight: normal;
}

/* 行间公式
  * 最大宽度 max-width: 300% !important;
  */
#nice .block-equation svg {}

/* 行内公式
  */
#nice .inline-equation svg {}`,
  },
  {
    themeId: "yellow",
    name: "Pornhub黄",
    css: `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding:30px;
 * 全文字体 font-family:ptima-Regular;
 * 英文换行 word-break:break-all;
 * PingFang在iOS上很好看;
 */
#nice {
  font-family:PingFangSC-Light;
  font-size:16px;
  padding:10px;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top:5px;
 * 下边距 margin-bottom:5px;
 * 行高 line-height:28px;
 * 词间距 word-spacing:0.1em;
 * 字间距 letter-spacing:0.1em;
 * 对齐-两端对齐 text-align:justify;
 * 颜色 color:rgba(0, 0, 0, 0.65);
 * 字体大小 font-size:16px;
 * 首行缩进 text-indent:2em;
 */
#nice p {
  margin:5px 0px;
  line-height:1.75;
  letter-spacing:0.1em;
  font-size:16px;
  word-spacing:0.1em;
  text-align:justify;
  color:rgba(0, 0, 0, 0.85);
}



/* 一级标题，全文只有一个*/
#nice h1 {
  text-align:center;
  /* 后续可以定制化图形
  background-image: url(http://xxx.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 75px;
  */
  line-height:95px;
  margin-top: 10px;
  margin-bottom: 10px;
}
/* 一级标题内容 */
#nice h1 .content {
  font-size: 22px;
  color: #f48a00;
  border-bottom:2px solid #ffbf52;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
 
/* 二级标题 */
#nice h2 {
  text-align:left;
  margin:20px 0px 0px 0px;
}

/* 二级标题内容 */
#nice h2 .content {
  font-size:20px;
  color: #f48a00;;
  display:inline-block;
  padding-left:10px;
  border-left:8px solid #ffbf52;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  text-align:left;
  margin:15px 0px 0px 0px;
}

/* 三级标题内容 */
#nice h3 .content {
  font-size:18px;
  color: #f48a00;;
  display:inline-block;
  padding-left:10px;
  border-left:4px solid #ffe3a3;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 如果按层级顺序使用，建议不要用到四级标题
\t 如果是做序列使用，则直接用四级就可以
*/
#nice h4 {
 text-align:left;
  margin:10px 0px 0px 0px;
}

/* 四级标题内容 */
#nice h4 .content {
  font-size:16px;
  color:#f48a00;
  display:inline-block;
}

/* 四级标题修饰 请参考有实例的主题 */
#nice h4:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 20px;
  color: #ffbf52;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 20px;
  color: #ffbf52;
}

/* 列表内容，不要设置li
 */
#nice li section {
  letter-spacing:0.1em;
  word-spacing:0.1em;
  font-size:15px;
  color:rgb(0,0,0,0.55);
}

/* 引用
* 左边缘颜色 border-left-color:black;
* 背景色 background:gray;
*/
#nice .multiquote-1::before {
  content: "❝";
  color: #f48a00;
  font-size: 32px;
  line-height: 0.6;
  margin-left: -15px;
}

#nice .multiquote-1 {
  text-size-adjust: 100%;
  line-height: 1.75em;
  font-weight: 400;
  border-radius: 5px;
  font-style: normal;
  text-align: left;
  box-sizing: inherit;
  border-left: none;
  border: 1px solid #ffbf52;
  background: #fff8e6;

}

#nice .multiquote-1 p {
  margin-top:-15px;
  color: rgb(0,0,0,0.85);
}

#nice .multiquote-1::after {
  
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color:#f48a00;
  border-bottom:1px solid #f48a00;
  font-family:STHeitiSC-Light;
  font-weight:normal;
}

/* 加粗 */
#nice strong {
  font-weight:bold;
  color:rgba(0, 0, 0, 0.85);
}

/* 斜体 */
#nice em {
  color:rgba(0, 0, 0, 0.85);
  letter-spacing:0.1em;
}

/* 加粗斜体 */
#nice em strong {
  font-style: normal;
  color:#f48a00;
  font-weight:bold;
  letter-spacing:0.1em;
}

/* 删除线 */
#nice del {
}
 
/* 分隔线
 * 粗细、样式和颜色
 * border-top:1px solid #3e3e3e;
 */
#nice hr {
  height:2px;
  padding:0;
  margin: 20px 0;
  border:none;
  border-top:medium solidid #333;
  text-align:center;
  background-image:linear-gradient(to right,rgba(248,57,41,0),#f48a00,rgba(248,57,41,0));
}

/* 图片
 * 宽度 width:100%;
 * 居中 margin:0 auto;
 * 居左 margin:0 0;
 */
#nice img {
  border-radius:5px 5px 5px 5px;
  display:block;
  margin:0px 10px auto;
  width:100%;
  height:100%;
  object-fit:contain;
  /*box-shadow: #ede0d0 0px 6px 20px;*/
}

/* 图片描述文字 */
#nice figcaption {
  display:block;
  font-size:13px;
  color:rgba(0,0,0,0.55);
  text-align:right;
  font-family:PingFangSC-Light;
}

/* 行内代码 */
#nice p code, #nice li code {
  color:#f48a00;
}


/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size: 14px;
}

/* 脚注文字 */
#nice .footnote-word {
  color:#f48a00;
}

/* 脚注上标 */
#nice .footnote-ref {
  color:#f48a00;
}

/*脚注链接样式*/
#nice .footnote-item em {
  font-style:normal;
  color:rgba(0,0,0,0.65);
  font-size:13px;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
  color:#f48a00;
}

/* 参考资料文字 */
#nice .footnote-item p { 
 color:#f48a00;
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}`,
  },
  {
    themeId: "simplebrack",
    name: "极简黑",
    css: `/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
 #nice {
  font-size:14px;
  padding:10px;
}

/*图片下提示*/
#nice figcaption{
  font-size:12px;
}
#nice .imageflow-caption{
  font-size:12px;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size:14px;
}

/* 一级标题 */
#nice h1 {
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题前缀 */
#nice h1 .prefix {
}

/* 一级标题后缀 */
#nice h1 .suffix{
}

/* 二级标题 */
#nice h2 {
  \ttext-align:center;
  \tposition:relative;
    font-weight: bold;
    color: black;
    line-height: 1.1em;
    padding-top: 12px;
    padding-bottom: 12px;
    margin:70px 30px 30px;
    border: 1px solid #000;
}

#nice h2:before{
  content: ' ';
  float: left;
  display: block;
  width: 90%;
  border-top: 1px solid #000;
  height: 1px;
  line-height: 1px;
  margin-left: -5px;
  margin-top: -17px;
}
#nice h2:after{
  content: ' ';
  float: right;
  display: block;
  width: 90%;
  border-bottom: 1px solid #000;
  height: 1px;
  line-height: 1px;
  margin-right: -5px;
  margin-top: 16px;
}
/* 二级标题内容 */
#nice h2 .content {
  display: block;
  -webkit-box-reflect: below 0em -webkit-gradient(linear,left top,left bottom, from(rgba(0,0,0,0)),to(rgba(255,255,255,0.1)));
}
#nice h2 strong {
}
/* 二级标题前缀 */
#nice h2 .prefix {
  display: block;
  width: 3px;
  margin: 0 0 0 5%;
  height: 3px;
  line-height: 3px;
  overflow: hidden;
  background-color: #000;
  box-shadow:3px 0 #000,
    0 3px #000,
    -3px 0 #000,
    0 -3px #000;
}

/* 二级标题后缀 */
#nice h2 .suffix {
  display: block;
  width: 3px;
  margin: 0 0 0 95%;
  height: 3px;
  line-height: 3px;
  overflow: hidden;
  background-color: #000;
  box-shadow:3px 0 #000,
    0 3px #000,
    -3px 0 #000,
    0 -3px #000;
}

/* 三级标题 */
#nice h3 {
  background-color:#000;
  color:#fff;
  padding:2px 10px;
  width:fit-content;
  font-size:17px;
  margin:60px auto 10px;
}
#nice h3 strong {
  color:#fff;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题前缀 */
#nice h3 .prefix {
}

/* 三级标题后缀 */
#nice h3 .suffix {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
  list-style-type: square;
}
/* 无序二级列表
 */
#nice ul li ul li{
  list-style-type: circle;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
  border-left: 3px solid rgba(0, 0, 0, 0.65);
  border-right: 1px solid rgba(0, 0, 0, 0.65);
  background: rgb(249, 249, 249);
}

/* 引用文字 */
#nice .multiquote-1 p {
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
}

/* 加粗 */
#nice strong {
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
  box-shadow: rgba(170, 170, 170, 0.48) 0px 0px 6px 0px;
  border-radius:4px;
  margin-top:10px;
}
/* 行内代码 */
#nice p code, #nice li code {
  color:#ff6441;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre.custom {
  box-shadow: rgba(170, 170, 170, 0.48) 0px 0px 6px 0px;
  max-width: 100%;
  border-radius:4px;
  margin: 10px auto 0 auto;
}
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size:14px;
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep {
  font-size: 14px;
  color: #888;
  border-top: 1px solid #eee;
  padding: 30px 0 10px 0px;
  background-color: transparent;
  margin: 0;
  width: 100%;
}
#nice .footnotes-sep:before {
  content:'参考资料';
}
#nice .footnotes{
  border-left:5px solid #eee;
  padding-left:10px;
}

/* 参考资料编号 */
#nice .footnote-num {
  font-size:14px;
  color:#999;
}

/* 参考资料文字 */
#nice .footnote-item p { 
  font-size:14px;
  color:#999;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-size:14px;
  color:#999;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}
/* 文章结尾 */
#nice:after{
  content:'- END -';
  font-size:15px;
  display:block;
  text-align:center;
  margin-top:50px;
  color:#999;
  border-bottom:1px solid #eee;
}

/*滑动幻灯片*/
#nice .imageflow-layer1 img{
  margin:0;
  box-shadow: none;
  border-radius: 0;
}
`,
  },
  {
    themeId: "allblue",
    name: "全栈蓝",
    css: `/*自定义样式，实时生效*/

/* 全局属性
* 页边距 padding:30px;
* 全文字体 font-family:optima-Regular;
* 英文换行 word-break:break-all;
color:#2b2b2b;
*/
#nice {
  line-height: 1.25;
  color: #2b2b2b;
  font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
  letter-spacing: 2px;
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%);
  background-size: 20px 20px;
  background-position: center center;
}

/* 段落，下方未标注标签参数均同此处
* 上边距 margin-top:5px;
* 下边距 margin-bottom:5px;
* 行高 line-height:26px;
* 词间距 word-spacing:3px;
* 字间距 letter-spacing:3px;
* 对齐 text-align:left;
* 颜色 color:#3e3e3e;
* 字体大小 font-size:16px;
* 首行缩进 text-indent:2em;
*/
#nice p {
  color: #2b2b2b;
  margin: 10px 0px;
  letter-spacing: 2px;
  font-size: 14px;
  word-spacing: 2px;
}

/* 一级标题 */
#nice h1 {
  font-size: 25px;
}

/* 一级标题内容 */
#nice h1 span {
  display: inline-block;
  font-weight: bold;
  color: #40B8FA;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {}

/* 二级标题 */
#nice h2 {
  display:block;
  border-bottom: 4px solid #40B8FA;
}

/* 二级标题内容 */
#nice h2 .content {
  display: flex;
  color: #40B8FA;
  font-size: 20px;
  margin-left: 25px;
}

/* 二级标题前缀 */
#nice h2 .prefix {
  display: flex;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-image:url(https://files.mdnice.com/fullstack-1.png);
  margin-bottom: -22px;
}

/* 二级标题后缀 */
#nice h2 .suffix {
  display: flex;
  box-sizing: border-box;
  width: 200px;
  height: 10px;
  border-top-left-radius: 20px;
  background: RGBA(64, 184, 250, .5);
  color: rgb(255, 255, 255);
  font-size: 16px;
  letter-spacing: 0.544px;
  justify-content: flex-end;
  box-sizing: border-box !important;
  overflow-wrap: break-word !important;
  float: right;
  margin-top: -10px;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  position:relative;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* 三级标题内容 */
#nice h3 .content {
  border-bottom: 2px solid RGBA(79, 177, 249, .65);
  color: #2b2b2b;
  padding-bottom:2px
}

#nice h3 .content:before{
  content:'';
  width:30px;
  height:30px;
  display:block;
  background-image:url(https://files.mdnice.com/fullstack-2.png);
  background-position:center;
  background-size:30px;
  margin:auto;
  opacity:1;
  background-repeat:no-repeat;
  margin-bottom:-8px;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {}

#nice h4 .content {
  height:16px;
  line-height:16px;
  font-size: 16px;
}

#nice h4 .content:before{
  content:'';
  background-image:url(https://files.mdnice.com/fullstack-3.png);
  display:inline-block;
  width:16px;
  height:16px;
  background-size:100% ;
  background-position:left bottom;
  background-repeat:no-repeat;
  width: 16px;
  height: 15px;
  line-height:15px;
  margin-right:6px;
  margin-bottom:-2px;
}

/* 无序列表整体样式
* list-style-type: square|circle|disc;
*/
#nice ul {
  font-size: 15px; /*神奇逻辑，必须比li section的字体大才会在二级中生效*/
  color: #595959;
  list-style-type: circle;
}


/* 有序列表整体样式
* list-style-type: upper-roman|lower-greek|lower-alpha;
*/
#nice ol {
  font-size: 15px;
  color: #595959;
}

/* 列表内容，不要设置li
*/
#nice li section {
  font-size: 14px;
  font-weight: normal;
  color: #595959;
}

/* 引用
* 左边缘颜色 border-left-color:black;
* 背景色 background:gray;
*/
#nice .multiquote-1::before {
  content: "❝";
  color: RGBA(64, 184, 250, .5);
  font-size: 34px;
  line-height: 1;
  font-weight: 700;
}

#nice .multiquote-1 {
  text-size-adjust: 100%;
  line-height: 1.55em;
  font-weight: 400;
  border-radius: 6px;
  color: #595959;
  font-style: normal;
  text-align: left;
  box-sizing: inherit;
  border-left: none;
  border: 1px solid RGBA(64, 184, 250, .4);
  background: RGBA(64, 184, 250, .1);

}

#nice .multiquote-1 p {
  color: #595959;
}

#nice .multiquote-1::after {
  content: "❞";
  float: right;
  color: RGBA(64, 184, 250, .5);
}

/* 链接
* border-bottom: 1px solid #009688;
*/
#nice a {
  color: #40B8FA;
  font-weight: normal;
  border-bottom: 1px solid #3BAAFA;
}

#nice strong::before {
  content: '「';
}

/* 加粗 */
#nice strong {
  color: #3594F7;
  font-weight: bold;
}

#nice strong::after {
  content: '」';
}

/* 斜体 */
#nice em {
  font-style: normal;
  color: #3594F7;
  font-weight:bold;
}

/* 加粗斜体 */
#nice em strong {
  color: #3594F7;
}

/* 删除线 */
#nice del {
  color: #3594F7;
}

/* 分隔线
* 粗细、样式和颜色
* border-top:1px solid #3e3e3e;
*/
#nice hr {
  height: 1px;
  padding: 0;
  border: none;
  border-top: 2px solid #3BAAFA;
}

/* 图片
* 宽度 width:80%;
* 居中 margin:0 auto;
* 居左 margin:0 0;
*/
#nice img {
  border-radius: 6px;
  display: block;
  margin: 20px auto;
  object-fit: contain;
  box-shadow:2px 4px 7px #999;
}

/* 图片描述文字 */
#nice figcaption {
  display: block;
  font-size: 13px;
  color: #2b2b2b;
}

#nice figcaption:before{
  content:'';
\tbackground-image:url(https://img.alicdn.com/tfs/TB1Yycwyrj1gK0jSZFuXXcrHpXa-32-32.png);
  display:inline-block;
  width:18px;
  height:18px;
  background-size:18px;
\tbackground-repeat:no-repeat;
  background-position:center;
  margin-right:5px;
  margin-bottom:-5px;
}

/* 行内代码 */
#nice p code,
#nice li code {
  color: #3594F7;
  background: RGBA(59, 170, 250, .1);
  padding:0 2px;
  border-radius:2px;
  height:21px;
  line-height:22px;
}

/* 非微信代码块
* 代码块不换行 display:-webkit-box !important;
* 代码块换行 display:block;
*/
#nice .code-snippet__fix {
  background: #f7f7f7;
  border-radius: 2px;
}

#nice pre code {
  letter-spacing: 0px;
}

/*
* 表格内的单元格
* 字体大小 font-size: 16px;
* 边框 border: 1px solid #ccc;
* 内边距 padding: 5px 10px;
*/
#nice table tr th,
#nice table tr td {
  font-size: 14px;
  color: #595959;
}

#nice .footnotes {
  background: #F6EEFF;
  padding: 20px 20px 20px 20px;
  font-size: 14px;
  border: 0.8px solid #DEC6FB;
  border-radius: 6px;
  border: 1px solid #DEC6FB;
}

/* 脚注文字 */
#nice .footnote-word {
  font-weight: normal;
  color: #595959;
}

/* 脚注上标 */
#nice .footnote-ref {
  font-weight: normal;
  color: #595959;
}

/*脚注链接样式*/
#nice .footnote-item em {
  font-size: 14px;
  color: #595959;
  display: block;
}

#nice .footnotes{
  background: RGBA(53, 148, 247, .4);
  padding: 20px 20px 20px 20px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid RGBA(53, 148, 247, 1);
}

/* "参考资料"四个字
* 内容 content: "参考资料";
*/
#nice .footnotes-sep:before {
  content: 'Reference';
  color: #595959;
  letter-spacing: 1px;
  border-bottom: 2px solid RGBA(64, 184, 250, 1);
  display: inline;
  background: linear-gradient(white 60%, RGBA(64, 184, 250, .4) 40%);
  font-size: 20px;
}

/* 参考资料编号 */
#nice .footnote-num {}

/* 参考资料文字 */
#nice .footnote-item p {
  color: #595959;
  font-weight: bold;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-weight: normal;
}

/* 行间公式
* 最大宽度 max-width: 300% !important;
*/
#nice .block-equation svg {}

/* 行内公式
*/
#nice .inline-equation svg {}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`,
  },
  {
    themeId: "yanqihu",
    name: "雁栖湖",
    css: `/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  counter-reset: counterh1 counterh2 counterh3;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
}

/* 一级标题 */
#nice h1 {
  line-height: 28px;
  border-bottom: 1px solid rgb(37,132,181);
}

#nice h1:before {
  background: rgb(37,132,181);
  color: white;
  counter-increment: counterh1;
  content: 'Part'counter(counterh1); 
  padding: 2px 8px;
}

/* 一级标题内容 */
#nice h1 .content {
  color: rgb(37,132,181);
  margin-left: 8px;
  font-size: 20px;
}

/* 一级标题前缀 */
#nice h1 .prefix {
}

/* 一级标题后缀 */
#nice h1 .suffix {
}

/* 二级标题 */
#nice h2 {
}

/* 二级标题内容 */
#nice h2 .content {
  font-size: 18px;
  border-bottom: 4px solid rgb(37,132,181);
  padding: 2px 4px;
  color: rgb(37,132,181);
}

/* 二级标题前缀 */
#nice h2 .prefix {
  display: inline-block;
}

#nice h2 .prefix:before {
  counter-increment: counterh2;
  content: counter(counterh2); 
  color:rgb(159,205,208);
  border-bottom: 4px solid rgb(159,205,208);
  font-size: 18px;
  padding: 2px 4px;
}

/* 二级标题后缀 */
#nice h2 .suffix {
}

/* 三级标题 */
#nice h3 {
}

/* 三级标题内容 */
#nice h3 .content {
  font-size: 16px;
  border-bottom: 1px solid rgb(37,132,181);
  padding: 2px 10px;
  color: rgb(37,132,181);
}

/* 三级标题前缀 */
#nice h3 .prefix {
  display:inline-block;
  background:linear-gradient(45deg, transparent 48%, rgb(37,132,181) 48%, 
            rgb(37,132,181) 52%, transparent 52%);
  width:24px;
  height:24px;
  margin-bottom: -7px;
}

/* 三级标题后缀 */
#nice h3 .suffix {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 一级引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
  border: 1px dashed rgb(37,132,181);
  background: transparent;
}

/* 一级引用文字 */
#nice .multiquote-1 p {
}

/* 二级引用
 */
#nice .multiquote-2 {
  border: 1px dashed rgb(248,99,77);
  box-shadow: none;
}

#nice .multiquote-2 blockquote {
  margin: 0;
}

/* 二级引用文字 */
#nice .multiquote-2 p {
}

#nice .multiquote-2 strong {
  color:rgb(248,99,77);
}

#nice .multiquote-2 a {
  color:rgb(248,99,77);
  border-bottom: 1px solid rgb(248,99,77);
}

/* 三级引用
 */
#nice .multiquote-3 {
}

/* 三级引用文字 */
#nice .multiquote-3 p {
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color:rgb(37,132,181);
  border-bottom: 1px solid rgb(37,132,181);
}

/* 加粗 */
#nice strong {
  color: rgb(37,132,181);
}

/* 斜体 */
#nice em {
  color: rgb(37,132,181);
}

/* 加粗斜体 */
#nice em strong {
  color: rgb(37,132,181);
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
  border-top: 1px solid rgb(37,132,181);
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
}

/* 
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th {
  border: 1px solid rgb(248,99,77);
  background-color: rgb(235,114, 80);
  color: #f8f8f8;
  border-bottom: 0;
  border: 1px solid rgb(245,203,174);
}

#nice table tr td {
  border: 1px solid rgb(245,203,174);
}
/* 
 * 某一列表格列宽控制
 * n 可以修改为具体数字，不修改时表示所有列
 * 最小列宽 min-width: 85px;
 */
#nice table tr th:nth-of-type(n),
#nice table tr td:nth-of-type(n){
}

#nice table tr:nth-of-type(2) {
  background-color: rgb(248,222,203);
}
/* 脚注文字 */
#nice .footnote-word {
  color:rgb(37,132,181);
}

/* 脚注上标 */
#nice .footnote-ref {
  color:rgb(37,132,181);
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg { 
}`,
  },
  {
    themeId: "green",
    name: "萌绿",
    css: `#nice {
  line-height: 1.6;
  letter-spacing: .034em;
  color: rgb(63, 63, 63);
  font-size: 16px;
  word-break:all;
}
#nice p {
  padding-top: 1em;
  color: rgb(74,74,74);
  line-height: 1.75em;
}
/* 一级标题 */
#nice h1 {
  text-align:center;
  background-image: url(https://files.mdnice.com/koala-1.png); 
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 75px;
  line-height:95px;
  margin-top: 38px;
  margin-bottom: 10px;
}
/* 一级标题内容 */
#nice h1 .content {
  font-size: 20px;
  color: #48b378;;
  border-bottom:2px solid #2e7950;
}
/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
 
/* 二级标题 */
#nice h2 {
  display:block;
  text-align:center;
  background-image: \turl(https://files.mdnice.com/koala-2.png); 
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 50px;
  margin-top: 1em;
  margin-bottom: 10px;
}
/*二级标题伪元素*/
#nice h2:before {
}
/* 二级标题内容 */
#nice h2 .content {
  text-align:center;
  display: inline-block;
  height: 38px;
  line-height: 42px;
  color: #48b378;
  background-position: left center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  font-size:18px;
  margin-bottom: 10px;
}
/* 三级标题 */
#nice h3:before {
  content: "";
  background-image:url(https://files.mdnice.com/koala-3.png);
  background-size:100% 100%;
  background-repeat:no-repeat;
  display: inline-block;
  width: 16px;
  height: 15px;
  line-height:15px;
  margin-bottom:-1px;
}
#nice h3 {
  margin-top:1.2em;
}
#nice h4 {
  margin-top: 30px;
}
/* 三级标题内容 */
#nice h3 .content {
  font-size:17px;
  font-weight:bold;
  display:inline-block;
  margin-left:8px;
  color:#48b378;
}
/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}
/* 列表内容 */
#nice li {
}
/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
#nice .multiquote-1 {
  padding: 15px 20px;
  line-height: 27px;
  background-color:#FBF9FD;
  border-left:3px solid #35b378;
  display:block;
}
/* 引用文字 */
#nice .multiquote-1 p {
  padding: 0px;
  font-size:15px;
  color:rgb(89,89,89);
}
/* 链接 */
#nice a {
  color: #48b378;
  text-decoration:none;
  border-bottom: 1px solid #48b378;
}
/* 加粗 */
#nice strong {
  line-height: 1.75em;
  color: rgb(74,74,74);
}
/* 斜体 */
#nice em {
}
/* 加粗斜体 */
#nice em strong {
  color:rgb(248,57,41);
  letter-spacing:0.3em;
}
/* 删除线 */
#nice del {
}
 
/* 分割线 */
#nice hr {
  height:1px;
  padding:0;
  border:none;
  text-align:center;
  background-image:linear-gradient(to right,rgba(93, 186, 133,0),rgba(93, 186, 133,0.75),rgba(93, 186, 133,0));
}
/* 图片 */
#nice img {
    border-radius:4px;
    margin-bottom:25px;
}
/* 图片描述文字 */
#nice figcaption {
  display:block;
  font-size:12px;
  font-family:PingFangSC-Light;
}
/* 行内代码 */
#nice p code, #nice li code {
\tcolor: #28ca71;
}
/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#nice pre code {
}
/* 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size: 14px;
}
#nice .footnotes{
  padding-top: 8px;
}
/* 脚注文字 */
#nice .footnote-word {
  color: rgb(90, 185, 131);
}
/* 脚注上标 */
#nice .footnote-ref {
  color: rgb(90, 185, 131);
}
/* 脚注超链接样式 */
#nice .footnote-item em {
  color: rgb(90, 185, 131);
  font-size:13px;
  font-style:normal;
  border-bottom-color:1px dashed rgb(90, 185, 131); 
}
/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  background-image: none;
  background-size: none;
  display: block;
  width: auto;
  height: auto;
}
/* 参考资料编号 */
#nice .footnote-num {
  color: rgb(90, 185, 131);
}
/* 参考资料文字 */
#nice .footnote-item p {
  color: rgb(90, 185, 131);
  font-weight:bold;
}
/* 参考资料超链接 */
#nice .footnote-item a {
  color:rgb(93, 186, 133);
}
/* 参考资料解释 */
#nice .footnote-item p em {
  font-size:14px;
  font-weight:normal;
  border-bottom:1px dashed rgb(93, 186, 133);
}
/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}
/* 行内公式*/
#nice .inline-equation svg {  
}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`,
  },
  {
    themeId: "qiangweizi",
    name: "蔷薇紫",
    css: `/* 全局属性
* 页边距 padding:30px;
* 全文字体 font-family:optima-Regular;
* 英文换行 word-break:break-all;
color:#595959;
*/
#nice {
  line-height: 1.75;
  color: #595959;
  font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
  letter-spacing: 2px;
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
  background-size: 20px 20px;
  background-position: center center;
}

/* 段落，下方未标注标签参数均同此处
* 上边距 margin-top:5px;
* 下边距 margin-bottom:5px;
* 行高 line-height:26px;
* 词间距 word-spacing:3px;
* 字间距 letter-spacing:3px;
* 对齐 text-align:left;
* 颜色 color:#3e3e3e;
* 字体大小 font-size:16px;
* 首行缩进 text-indent:2em;
*/
#nice p {
  color: #595959;
  margin: 10px 0px;
  letter-spacing: 2px;
  font-size: 14px;
  word-spacing: 2px;
}

/* 一级标题 */
#nice h1 {
  font-size: 25px;
}

/* 一级标题内容 */
#nice h1 .content {
  display: inline-block;
  font-weight: bold;
  color: #595959;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {}

/* 二级标题 */
#nice h2 {
  text-align: left;
  margin: 20px 10px 0px 0px;
}

/* 二级标题内容 */
#nice h2 .content {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  padding-left: 10px;
  border-left: 5px solid #DEC6FB;
  color: #595959;

}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {}

/* 三级标题 */
#nice h3 {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

/* 三级标题内容 */
#nice h3 .content {
  border-bottom: 2px solid #DEC6FB;
  color: #595959;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {}

/* 无序列表整体样式
* list-style-type: square|circle|disc;
*/
#nice ul {
  font-size: 15px; /*神奇逻辑，必须比li section的字体大才会在二级中生效*/
  color: #595959;
  list-style-type: circle;
}


/* 有序列表整体样式
* list-style-type: upper-roman|lower-greek|lower-alpha;
*/
#nice ol {
  font-size: 15px;
  color: #595959;
}

/* 列表内容，不要设置li
*/
#nice li section {
  font-size: 14px;
  font-weight: normal;
  color: #595959;
}

/* 引用
* 左边缘颜色 border-left-color:black;
* 背景色 background:gray;
*/
#nice .multiquote-1::before {
  content: "❝";
  /*   color: #d9b8fa;*/
  color: #DEC6FB;
  font-size: 34px;
  line-height: 1;
  font-weight: 700;
}

#nice .multiquote-1 {
  text-size-adjust: 100%;
  line-height: 1.55em;
  font-weight: 400;
  border-radius: 6px;
  color: #595959;
  font-style: normal;
  text-align: left;
  box-sizing: inherit;
  border-left: none;
  border: 1px solid #DEC6FB;
  background: #F6EEFF;

}

#nice .multiquote-1 p {
  color: #595959;
}

#nice .multiquote-1::after {
  content: "❞";
  float: right;
  /*   color: #d9b8fa; */
  color: #DEC6FB;
}

/* 链接 
* border-bottom: 1px solid #009688;
*/
#nice a {
  color: #664D9D;
  font-weight: normal;
  border-bottom: 1px solid #664D9D;
}

#nice strong::before {
  content: '「';
}

/* 加粗 */
#nice strong {
  color: #595959;
  font-weight: bold;
}

#nice strong::after {
  content: '」';
}

/* 斜体 */
#nice em {
  font-style: normal;
  color: #595959;
  background: #F6EEFF;
}

/* 加粗斜体 */
#nice em strong {
  color: #595959;
}

/* 删除线 */
#nice del {
  color: #595959;
}

/* 分隔线
* 粗细、样式和颜色
* border-top:1px solid #3e3e3e;
*/
#nice hr {
  height: 1px;
  padding: 0;
  border: none;
  border-top: 2px solid #d9b8fa;
}

/* 图片
* 宽度 width:80%;
* 居中 margin:0 auto;
* 居左 margin:0 0;
*/
#nice img {
  border-radius: 6px;
  display: block;
  margin: 20px auto;
  object-fit: contain;
}

/* 图片描述文字 */
#nice figcaption {
  display: block;
  font-size: 13px;
  color: #595959;
}

/* 行内代码 */
#nice p code,
#nice li code {
  color: #595959;
}

/* 非微信代码块
* 代码块不换行 display:-webkit-box !important;
* 代码块换行 display:block;
*/
#nice .code-snippet__fix {
  background: #f7f7f7;
  border-radius: 2px;
}

#nice pre code {
  /* background: #f7f7f7; */
}

/*
* 表格内的单元格
* 字体大小 font-size: 16px;
* 边框 border: 1px solid #ccc;
* 内边距 padding: 5px 10px;
*/
#nice table tr th,
#nice table tr td {
  font-size: 14px;
  color: #595959;
}

#nice .footnotes {
  background: #F6EEFF;
  padding: 20px 20px 20px 20px;
  font-size: 14px;
  border: 0.8px solid #DEC6FB;
  border-radius: 6px;
  border: 1px solid #DEC6FB;
}

/* 脚注文字 */
#nice .footnote-word {
  font-weight: normal;
  color: #595959;
}

/* 脚注上标 */
#nice .footnote-ref {
  font-weight: normal;
  color: #595959;
}

/*脚注链接样式*/
#nice .footnote-item em {
  background: #F6EEFF;
  font-size: 14px;
  color: #595959;
  display: block;
}

/* "参考资料"四个字 
* 内容 content: "参考资料";
*/
#nice .footnotes-sep:before {
  content: 'Reference';
  color: #595959;
  letter-spacing: 1px;
  border-bottom: 2px solid #DEC6FB;
  display: inline;
  background: linear-gradient(white 60%, #F6EEFF 40%);
  font-size: 20px;
}

/* 参考资料编号 */
#nice .footnote-num {}

/* 参考资料文字 */
#nice .footnote-item p {
  color: #595959;
  font-weight: bold;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-weight: normal;
}

/* 行间公式
* 最大宽度 max-width: 300% !important;
*/
#nice .block-equation svg {}

/* 行内公式
*/
#nice .inline-equation svg {}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`,
  },
  {
    themeId: "jikebrack",
    name: "极客黑",
    css: `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  box-sizing: border-box;
  margin-bottom: 16px;
  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
  font-size: 15px;
  text-align: start;
  white-space: normal;
  text-size-adjust: auto;
  line-height: 1.75em;
}

/* 一级标题 */
#nice h1 {
  margin-top: -0.46em;
  margin-bottom: 0.1em;
  border-bottom: 2px solid rgb(198, 196, 196);
  box-sizing: border-box;
}

/* 一级标题内容 */
#nice h1 .content {
  padding-top: 5px;
  padding-bottom: 5px;
  color: rgb(160, 160, 160);
  font-size: 13px;
  line-height: 2;
  box-sizing: border-box;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  margin: 10px auto;
  height: 40px;
  background-color: rgb(251, 251, 251);
  border-bottom: 1px solid rgb(246, 246, 246);
  overflow: hidden;
  box-sizing: border-box;
}

/* 二级标题内容 */
#nice h2 .content {
  margin-left: -10px;
  display: inline-block;
  width: auto;
  height: 40px;
  background-color: rgb(33, 33, 34);
  border-bottom-right-radius:100px;
  color: rgb(255, 255, 255);
  padding-right: 30px;
  padding-left: 30px;
  line-height: 40px;
  font-size: 16px;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  margin: 20px auto 5px;
  border-top: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
}

/* 三级标题内容 */
#nice h3 .content {
  margin-top: -1px;
  padding-top: 6px;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 17px;
  border-top: 2px solid rgb(33, 33, 34);
  display: inline-block;
  line-height: 1.1;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

#nice h4 {
  margin: 10px auto -1px;
  border-top: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
}

#nice h4 .content {
  margin-top: -1px;
  padding-top: 6px;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 16px;
  border-top: 2px solid rgb(33, 33, 34);
  display: inline-block;
  line-height: 1.1;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  font-size: 15px;
  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
  border-left-color: rgb(221, 221, 221);
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  padding-right: 1em;
  padding-left: 1em;
  border-left-width: 4px;
  color: rgb(119, 119, 119);
  quotes: none;
}

/* 引用文字 */
#nice .multiquote-1 p {
  font-size: 15px;
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  color: rgb(119, 119, 119);
  line-height: 1.75em;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: rgb(239, 112, 96);
  border-bottom: 1px solid rgb(239, 112, 96);
}

/* 加粗 */
#nice strong {
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
  color: rgb(239, 112, 96);
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}

/* 脚注文字 */
#nice .footnote-word {
  color: #ff3502;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: rgb(239, 112, 96);
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}`,
  },
  {
    themeId: "fronttop",
    name: "前端之巅",
    css: `/*初始化格式*/

#nice {
  line-height: 1.6;
  letter-spacing: .034em;
  color: rgb(63, 63, 63);
  font-size: 16px;
  word-break:all;
}

#nice p {
  padding-top: 23px;
  color: rgb(74,74,74);
  line-height: 1.75em;
}

/* 一级标题 */
#nice h1 {
  text-align:center;
  background-image: url(https://files.mdnice.com/mountain_2.png); 
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 95px;
  line-height:95px;
  margin-top: 38px;
  margin-bottom: 10px;
}

/* 一级标题内容 */
#nice h1 .content {
  font-size: 20px;
  color: rgb(60, 112, 198);
  border-bottom:2px solid #3C7076;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
 
/* 二级标题 */
#nice h2 {
  display:block;
  text-align:center;
  background-image: url(https://files.mdnice.com/mountain_2.png); 
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  margin-bottom: 10px;
}

/*二级标题伪元素*/
#nice h2:before {
}

/* 二级标题内容 */
#nice h2 .content {
  text-align:center;
  display: inline-block;
  height: 38px;
  line-height: 42px;
  color: rgb(60, 112, 198);
  background-position: left center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  font-size:18px;
  margin-bottom: 10px;
}

/* 三级标题 */
#nice h3:before {
  content: "";
  background-image:url(https://files.mdnice.com/mountain_1.png);
  background-size:15px 15px;
  display: inline-block;
  width: 15px;
  height: 15px;
  line-height:15px;
  margin-bottom:-1px;
}

#nice h3 {
}

/* 三级标题内容 */
#nice h3 .content {
  font-size:16px;
  font-weight:bold;
  display:inline-block;
  margin-left:8px;
  color:rgb(60,112,198);
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 列表内容 */
#nice li {
}

/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
#nice .multiquote-1 {
  padding: 15px 20px;
  line-height: 27px;
  background-color: rgb(239, 239, 239);
  border-left:none;
  display:block;
}

/* 引用文字 */
#nice .multiquote-1 p {
  padding: 0px;
  font-size:15px;
  color:rgb(89,89,89);
}

/* 链接 */
#nice a {
  color: rgb(60, 112, 198);
  text-decoration:none;
  border-bottom: 1px solid rgb(60, 112, 198);
}

/* 加粗 */
#nice strong {
  line-height: 1.75em;
  color: rgb(74,74,74);
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
  color:rgb(248,57,41);
  letter-spacing:0.3em;
}

/* 删除线 */
#nice del {
}
 
/* 分割线 */
#nice hr {
  height:1px;
  padding:0;
  border:none;
  text-align:center;
  background-image:linear-gradient(to right,rgba(60,122,198,0),rgba(60,122,198,0.75),rgba(60,122,198,0));
}

/* 图片 */
#nice img {
    border-radius:4px;
    margin-bottom:25px;
}

/* 图片描述文字 */
#nice figcaption {
  display:block;
  font-size:12px;
  font-family:PingFangSC-Light;
}

/* 行内代码 */
#nice p code, #nice li code {
\tcolor: rgb(60, 112, 198);;
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#nice pre code {
}

/* 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size: 14px;
}

#nice .footnotes{
  padding-top: 8px;
}

/* 脚注文字 */
#nice .footnote-word {
  color: rgb(60, 112, 198);
}

/* 脚注上标 */
#nice .footnote-ref {
  color: rgb(60, 112, 198);
}

/* 脚注超链接样式 */
#nice .footnote-item em {
  color: rgb(60, 112, 198);
  font-size:13px;
  font-style:normal;
  border-bottom-color:1px dashed rgb(60, 112, 198); 
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  background-image: none;
  background-size: none;
  display: block;
  width: auto;
  height: auto;
}

/* 参考资料编号 */
#nice .footnote-num {
  color: rgb(60, 112, 198);
}

/* 参考资料文字 */
#nice .footnote-item p {
  color: rgb(60, 112, 198);
  font-weight:bold;
}

/* 参考资料超链接 */
#nice .footnote-item a {
  color:rgb(60, 112, 198);
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-size:14px;
  font-weight:normal;
  border-bottom:1px dashed rgb(60, 112, 198);
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
  
}

/* 行内公式*/
#nice .inline-equation svg {  
}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`,
  },
  {
    themeId: "red",
    name: "红绯",
    css: `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding:30px;
 * 全文字体 font-family:ptima-Regular;
 * 英文换行 word-break:break-all;
 */
#nice {
    font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    padding: 5px;
    font-size: 16px;
    color: #353535;
    word-spacing: 0.8px;
    letter-spacing: 0.8px;
    border-radius: 16px;
}

/* 段落，下方未标注标签参数均同此处
   * 上边距 margin-top:5px;
   * 下边距 margin-bottom:5px;
   * 行高 line-height:26px;
   * 词间距 word-spacing:3px;
   * 字间距 letter-spacing:3px;
   * 对齐 text-align:left;
   * 颜色 color:#3e3e3e;
   * 字体大小 font-size:16px;
   * 首行缩进 text-indent:2em;
   */
#nice p {
    line-height: 1.75;
    margin: 0.8em 0;
    font-size: 16px;
    color: #353535;
}

/* 一级标题 */
#nice h1 {
    border-top: 2px solid rgb(248, 57, 41);
    text-align: center;
    font-size: 1.3em;
}

/* 一级标题内容 */
#nice h1 .content {
    display: inline-block;
    font-weight: normal;
    background: rgb(248, 57, 41);
    color: #ffffff;
    padding: 3px 10px 1px;
    border-radius: 0 0 13px 13px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {}

/* 二级标题 */
#nice h2 {
    text-align: left;
    margin: 20px 10px 0px 0px;
}

/* 二级标题内容 */
#nice h2 .content {
    font-size: 18px;
    font-weight: 700;
    color: #222;
    display: inline-block;
    padding-left: 10px;
    border-left: 5px solid rgb(248, 57, 41);
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {}

/* 三级标题 */
#nice h3 {}

/* 三级标题内容 */
#nice h3 .content {
    font-size: 16px;
    color: #222;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {}

/* 无序列表整体样式
   * list-style-type: square|circle|disc;
   */
#nice ul {
    color: #f83929;
    font-size: 16px;
}

/* 有序列表整体样式
   * list-style-type: upper-roman|lower-greek|lower-alpha;
   */
#nice ol {
    color: #f83929;
    font-size: 16px;
}

/* 列表内容，不要设置li
   */
#nice li section {
    color: #353535;
}

/* 引用
   * 左边缘颜色 border-left-color:black;
   * 背景色 background:gray;
   */
#nice .multiquote-1 {
    font-style: normal;
    border-left: none;
    padding: 15px 10px;
    line-height: 1.75;
    border-radius: 13px;
    color: #353535;
    background: #f5f5f5;
}

#nice .multiquote-1:before {
    content: "“";
    display: block;
    font-size: 2em;
    color: rgb(248, 57, 41);
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
}

/* 引用文字 */
#nice .multiquote-1 p {
    color: #353535;
    font-size: 16px;
    margin: 0 10px;
    display: block;
}

#nice .multiquote-1:after {
    content: "”";
    float: right;
    display: block;
    font-size: 2em;
    color: rgb(248, 57, 41);
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
}

/* 链接 
* border-bottom: 1px solid #009688;
*/
#nice a {
    color: rgb(248, 57, 41);
    font-weight: 400;
    border-bottom: 1px solid rgb(248, 57, 41);

}

/* 加粗 */
#nice strong {
    font-weight: 700;
    color: rgb(248, 57, 41);
}

/* 斜体 */
#nice em {
    color: rgb(248, 57, 41);
}

/* 加粗斜体 */
#nice em strong {
    color: rgb(248, 57, 41);
}

/* 删除线 */
#nice del {}

/* 分隔线
   * 粗细、样式和颜色
   * border-top:1px solid #3e3e3e;
   */
#nice hr {
    height: 1px;
    padding: 0;
    border: none;
    border-top: medium solidid #333;
    text-align: center;
    background-image: linear-gradient(to right, rgba(248, 57, 41, 0), rgba(248, 57, 41, 0.75), rgba(248, 57, 41, 0));
}

/* 图片
   * 宽度 width:80%;
   * 居中 margin:0 auto;
   * 居左 margin:0 0;
   */
#nice figure {
    border-radius: 16px;
    overflow: hidden;
}

#nice figure a img {
    border-radius: 16px;
    width: 100%;
    max-width: 100%;
}

#nice img {
    border-radius: 6px;
    display: block;
    margin: 20px auto;
    max-width: 95%;
    object-fit: contain;
}

/* 图片描述文字 */
#nice figcaption {
    display: block;
    font-size: 12px;
}

/* 行内代码 */
#nice p code,
#nice li code {
    color: rgb(271, 93, 108);
}

/* 非微信代码块
   * 代码块不换行 display:-webkit-box !important;
   * 代码块换行 display:block;
   */
#nice pre code {}

/*
   * 表格内的单元格
   * 字体大小 font-size: 16px;
   * 边框 border: 1px solid #ccc;
   * 内边距 padding: 5px 10px;
   */
#nice table tr th,
#nice table tr td {
    font-size: 16px;
    color: #645647;
}

#nice table tr th {
    color: #353535;
    background-color: #dbd9d8;
}

#nice .footnotes {
    font-size: 16px;
}

/* 脚注文字 */
#nice .footnote-word {
    font-weight: normal;
    color: #f83929;
}

/* 脚注上标 */
#nice .footnote-ref {
    font-weight: normal;
    color: #f83929;
}

/*脚注链接样式*/
#nice .footnote-item em {
    font-size: 16px;
    display: block;
}

/* "参考资料"四个字 
  * 内容 content: "参考资料";
  */
#nice .footnotes-sep:before {
    content: '参考资料 ';
    color: #f83929;
    letter-spacing: 1px;
    text-align: left;
    display: block;
    font-weight: 500;
    padding-bottom: .1em;
    border-bottom: 3px double #f83929;
    font-size: 20px;
}

/* 参考资料编号 */
#nice .footnote-num {
    color: #f83929;
}

/* 参考资料文字 */
#nice .footnote-item p {
    font-weight: 400;
    color: #f83929;
}

/* 参考资料解释 */
#nice .footnote-item p em {
    font-weight: 400;
    font-size: 14px;
    color: #353535;
}

/* 行间公式
  * 最大宽度 max-width: 300% !important;
  */
#nice .block-equation svg {
    color: #353535;
}

/* 行内公式
  */
#nice .inline-equation svg {
    color: #353535;
}

/* 滑动图片
   */
#nice .imageflow-img {
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
}`,
  },
  {
    themeId: "greenyi",
    name: "绿意",
    css: `/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  font-size: 15px;
  letter-spacing: 0.05em;
  color:#595959
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  margin: 1em 4px;
}

/* 一级标题 */
#nice h1 {
  margin: 1.2em 0 1em;
  padding: 0;
  font-weight: bold;
  color:#35b378;
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  bmin-height: 32px;
  line-height: 32px;
  border-bottom: solid 1px #000000;
  color: #35b378;
  display: inline-block;
  border-bottom-width: 0px;
  border-bottom-style: solid;
  border-color: #35b378;
  padding-top: 5px;
  padding-right: 0.5em;
  padding-left: 0.5em;
  font-size: 23px;
  margin: 1em 0 0rem 0;
  padding: 0.5em 0;
  text-align: leftt;
  font-weight: bold;
}

/* 二级标题内容 */
#nice h2 .content {
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  margin: 1.2em 0 1em;
  padding: 0;
  font-weight: bold;
  color: #35b378;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  margin: 10px 0;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
  margin: 10px 5px;
  border-left: 3px solid #35b378;
  border-right: 0px solid #35b378;
  color: #616161;
  quotes: none;
  background: #FBF9FD
}

/* 引用文字 */
#nice .multiquote-1 p {
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: #35b378;
  border-bottom: 1px solid #35b378;
}

/* 加粗 */
#nice strong {
  color:#35b378;
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
  border: 1px solid #35b378;
  margin: 1.5em auto;
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
  color: #35b378;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}

/* 脚注文字 */
#nice .footnote-word {
  color: #35b378;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #35b378;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}`,
  },
  {
    themeId: "nenqing",
    name: "嫩青",
    css: `/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  color: rgb(89,89,89);
}

/* 一级标题 */
#nice h1 {
  color: rgb(89,89,89);
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  border-bottom: 2px solid rgb(89,89,89);
  margin-bottom: 30px;
  color: rgb(89,89,89);
}

/* 二级标题内容 */
#nice h2 .content {
  font-size: 22px;
  display: inline-block;
  border-bottom: 2px solid rgb(89,89,89);
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  color: rgb(89,89,89);
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice .multiquote-1 {
  font-style: normal;
  padding: 10px;
  position: relative;
  line-height: 1.8;
  text-indent: 0;
  border: none;
  color: #888;
}

#nice .multiquote-1:before {
  content: "“";
  display: inline;
  color: #555555;
  font-size: 4em;
  font-family: Arial, serif;
  line-height: 1em;
  font-weight: 700;
}

/* 引用文字 */
#nice .multiquote-1 p {
  display: inline;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: rgb(71, 193, 168);
  border-bottom: 1px solid rgb(71, 193, 168);
}

/* 加粗 */
#nice strong {
  color: rgb(71, 193, 168);
}

/* 斜体 */
#nice em {
  color: rgb(71, 193, 168);
}

/* 加粗斜体 */
#nice em strong {
  color: rgb(71, 193, 168);
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
  color: rgb(71, 193, 168);
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}

/* 脚注文字 */
#nice .footnote-word {
  color: rgb(71, 193, 168);
}

/* 脚注上标 */
#nice .footnote-ref {
  color: rgb(71, 193, 168);
}

#nice .footnote-item em {
  color: black;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}`,
  },
  {
    themeId: "chazi",
    name: "姹紫",
    css: `/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  font-size: 15px;
  letter-spacing: 0.05em;
  color:#595959
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  margin: 1em 4px;
}

/* 一级标题 */
#nice h1 {
  margin: 1.2em 0 1em;
  padding: 0;
  font-weight: bold;
  color:#773098;
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  min-height: 32px;
  line-height: 28px;
  border-bottom: solid 1px #000000;
  color: #773098;
  display: inline-block;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #773098;
  padding-top: 5px;
  padding-right: 0.5em;
  padding-left: 0.5em;
  margin-bottom: -3px;
  font-size: 22px;
  margin:1em auto;
  padding: 0.5em 0;
  text-align: center;
  width: 85%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 二级标题内容 */
#nice h2 .content {
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  margin: 1.2em 0 1em;
  padding: 0;
  font-weight: bold;
  color:#773098;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  margin: 10px 0;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
  margin: 10px 5px;
  border-left: 3px solid #9654B5;
  border-right: 1px solid #9654B5;
  color: #616161;
  quotes: none;
  background:#FBF9FD
}

/* 引用文字 */
#nice .multiquote-1 p {
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: #773098;
  border-bottom: 1px solid #773098;
}

/* 加粗 */
#nice strong {
  color:#773098;
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
  border: 1px solid #773098;
  margin: 1.5em auto;
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
}

/* 行内代码 */
#nice p code, #nice li code {
  color: #9654B5;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}

/* 脚注文字 */
#nice .footnote-word {
  color: #773098;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #773098;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}`,
  },
  {
    themeId: "chengxin",
    name: "橙心",
    css: `/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
}
/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
}
/* 一级标题 */
#nice h1 {
}
/* 一级标题内容 */
#nice h1 .content {
}
/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
/* 二级标题 */
#nice h2 {
  border-bottom: 2px solid rgb(239, 112, 96);
  font-size: 1.3em;
}
/* 二级标题内容 */
#nice h2 .content {
  display: inline-block;
  font-weight: bold;
  background: rgb(239, 112, 96);
  color: #ffffff;
  padding: 3px 10px 1px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-right: 3px;
}
/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
  display: inline-block;
  content: " ";
  vertical-align: bottom;
  border-bottom: 36px solid #efebe9;
  border-right: 20px solid transparent;
}
/* 三级标题 */
#nice h3 {
}
/* 三级标题内容 */
#nice h3 .content {
}
/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}
/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}
/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}
/* 列表内容，不要设置li
 */
#nice li section {
}
/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
  border-left-color: rgb(239, 112, 96);
  background: #fff9f9;
}
/* 引用文字 */
#nice .multiquote-1 p {
}
/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: rgb(239, 112, 96);
  border-bottom: 1px solid rgb(239, 112, 96);
}
/* 加粗 */
#nice strong {
}
/* 斜体 */
#nice em {
}
/* 加粗斜体 */
#nice em strong {
}
/* 删除线 */
#nice del {
}
/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
}
/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
}
/* 图片描述文字 */
#nice figcaption {
}
/* 行内代码 */
#nice p code, #nice li code {
  color: rgb(239, 112, 96);
}
/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}
/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}
/* 脚注文字 */
#nice .footnote-word {
  color: #ff3502;
}
/* 脚注上标 */
#nice .footnote-ref {
  color: rgb(239, 112, 96);
}
/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}
/* 参考资料编号 */
#nice .footnote-num {
}
/* 参考资料文字 */
#nice .footnote-item p { 
}
/* 参考资料解释 */
#nice .footnote-item p em {
}
/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}
/* 行内公式
 */
#nice .inline-equation svg {  
}`,
  },
  {
    themeId: "chuizibianqian",
    name: "锤子便签",
    css: `/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */

.nice-wx-box{
  padding: 0;
  margin:0;
}

#nice {
  background-color: #fbf7ee;
    /* 注：请在大括号内改写！！！ */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji' !important;
  color: #635753 !important;
  padding: 10px 10px;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  \tcolor: #635753;
    /* 注：请在大括号内改写！！！ */
  line-height: 2
}

/* 一级标题 */
#nice h1 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 一级标题内容 */
#nice h1 .content {
  color: #635753;
    /* 注：请在大括号内改写！！！ */
}

/* 一级标题前缀 */
#nice h1 .prefix {
  color: #635753;
    /* 注：请在大括号内改写！！！ */
}

/* 一级标题后缀 */
#nice h1 .suffix {
  color: #635753;
    /* 注：请在大括号内改写！！！ */
}

/* 二级标题 */
#nice h2 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级标题内容 */
#nice h2 .content {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级标题前缀 */
#nice h2 .prefix {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级标题后缀 */
#nice h2 .suffix {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级标题 */
#nice h3 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级标题内容 */
#nice h3 .content {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级标题前缀 */
#nice h3 .prefix {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级标题后缀 */
#nice h3 .suffix {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 列表内容，不要设置li
 */
#nice li section {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 一级引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 一级引用文字 */
#nice .multiquote-1 p {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级引用
 */
#nice .multiquote-2 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级引用文字 */
#nice .multiquote-2 p {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级引用
 */
#nice .multiquote-3 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级引用文字 */
#nice .multiquote-3 p {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
  border-bottom: 1px solid #ebdfd5;
}

/* 加粗 */
#nice strong {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 斜体 */
#nice em {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 加粗斜体 */
#nice em strong {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 删除线 */
#nice del {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 行内代码 */
#nice p code, #nice li code {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
 
}

/* 
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
  
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 
 * 某一列表格列宽控制
 * n 可以修改为具体数字，不修改时表示所有列
 * 最小列宽 min-width: 85px;
 */
#nice table tr th:nth-of-type(n),
#nice table tr td:nth-of-type(n){
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 脚注文字 */
#nice .footnote-word {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 脚注上标 */
#nice .footnote-ref {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 参考资料编号 */
#nice .footnote-num {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 参考资料文字 */
#nice .footnote-item p { 
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 参考资料解释 */
#nice .footnote-item p em {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 行内公式
 */
#nice .inline-equation svg {  
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

img{
  width: 100%;
  box-shadow: 14px 14px 28px #e6e6e6, -14px -14px 28px #fff;
  border: 9px solid #ffffff;
  outline: 1px solid #ebdfd5;

}

.custom::before {
 background-color: #fbf7ee !important;
  
}

code {
  background-color: #fbf7ee !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji' !important;
}`,
  },
  {
    themeId: "simple",
    name: "间",
    css: `/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */

.nice-wx-box{
  padding: 0;
  margin:0;
}

#nice {
  background-color: #fbf7ee;
    /* 注：请在大括号内改写！！！ */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji' !important;
  color: #635753 !important;
  padding: 10px 10px;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  \tcolor: #635753;
    /* 注：请在大括号内改写！！！ */
  line-height: 2
}

/* 一级标题 */
#nice h1 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 一级标题内容 */
#nice h1 .content {
  color: #635753;
    /* 注：请在大括号内改写！！！ */
}

/* 一级标题前缀 */
#nice h1 .prefix {
  color: #635753;
    /* 注：请在大括号内改写！！！ */
}

/* 一级标题后缀 */
#nice h1 .suffix {
  color: #635753;
    /* 注：请在大括号内改写！！！ */
}

/* 二级标题 */
#nice h2 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级标题内容 */
#nice h2 .content {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级标题前缀 */
#nice h2 .prefix {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级标题后缀 */
#nice h2 .suffix {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级标题 */
#nice h3 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级标题内容 */
#nice h3 .content {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级标题前缀 */
#nice h3 .prefix {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级标题后缀 */
#nice h3 .suffix {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 列表内容，不要设置li
 */
#nice li section {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 一级引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 一级引用文字 */
#nice .multiquote-1 p {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级引用
 */
#nice .multiquote-2 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 二级引用文字 */
#nice .multiquote-2 p {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级引用
 */
#nice .multiquote-3 {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 三级引用文字 */
#nice .multiquote-3 p {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
  border-bottom: 1px solid #ebdfd5;
}

/* 加粗 */
#nice strong {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 斜体 */
#nice em {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 加粗斜体 */
#nice em strong {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 删除线 */
#nice del {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 行内代码 */
#nice p code, #nice li code {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
 
}

/* 
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
  
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 
 * 某一列表格列宽控制
 * n 可以修改为具体数字，不修改时表示所有列
 * 最小列宽 min-width: 85px;
 */
#nice table tr th:nth-of-type(n),
#nice table tr td:nth-of-type(n){
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 脚注文字 */
#nice .footnote-word {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 脚注上标 */
#nice .footnote-ref {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 参考资料编号 */
#nice .footnote-num {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 参考资料文字 */
#nice .footnote-item p { 
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 参考资料解释 */
#nice .footnote-item p em {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

/* 行内公式
 */
#nice .inline-equation svg {  
    /* 注：请在大括号内改写！！！ */
  color: #635753;
}

img{
  width: 100%;
  box-shadow: 14px 14px 28px #e6e6e6, -14px -14px 28px #fff;
  border: 9px solid #ffffff;
  outline: 1px solid #ebdfd5;

}

.custom::before {
 background-color: #fbf7ee !important;
  
}

code {
  background-color: #fbf7ee !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji' !important;
}`,
  },
  {
    themeId: "wechat2",
    name: "微信样式",
    css: `/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  line-height: 1.6;
  color: #3f3f3f;
  font-size: 16px;
  margin: 10px 0px;
}

/* 一级标题 */
#nice h1 {
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  margin: 80px 10px 40px 10px;
  text-align: center;
  font-weight: normal;
  color: #3f3f3f;
  font-size: 140%;
}

/* 二级标题内容 */
#nice h2 .content {
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  margin: 40px 0px 20px 0px;
  font-weight: bold;
  line-height: 1.5;
  color: #3f3f3f;
  font-size: 120%;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice .multiquote-1 {
  color: rgb(91,91,91);
  border-left: 3px solid rgb(158,158,158);
  background: rgba(158, 158, 158, 0.1);
  padding: 1px 0 1px 10px;
  margin: 20px 0px;
}

/* 引用文字 */
#nice .multiquote-1 p {
  color: #3f3f3f;
  line-height: 1.5;
  font-size: 16px;
  margin: 10px;
  padding: 0px;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: #ff3502;
  border-bottom: 1px solid #ff3502;
}

/* 加粗 */
#nice strong {
  color: #ff3502;
  line-height: 1.5;
  font-size: 16px;
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
  background: #f8f5ec;
  color: #ff3502;
  line-height: 1.5;
  font-size: 90%;
  padding: 3px 5px;
  border-radius: 2px;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}

/* 脚注文字 */
#nice .footnote-word {
  color: #ff3502;
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #ff3502;
  font-weight: normal;
}

/* "参考资料"四个字 */
#nice .footnotes-sep {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}
`,
  },
  {
    themeId: "kejiblue",
    name: "科技蓝",
    css: `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding:30px;
 * 全文字体 font-family:ptima-Regular;
 * 英文换行 word-break:break-all;
 */
#nice {
  font-family:PingFangSC-Light;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top:5px;
 * 下边距 margin-bottom:5px;
 * 行高 line-height:26px;
 * 词间距 word-spacing:3px;
 * 字间距 letter-spacing:3px;
 * 对齐 text-align:left;
 * 颜色 color:#3e3e3e;
 * 字体大小 font-size:16px;
 * 首行缩进 text-indent:2em;
 */
#nice p {
  margin:10px 10px;
  line-height:1.75;
  letter-spacing:0.2em;
  font-size: 15px;
  word-spacing:0.1em;
}

/* 一级标题 */
#nice h1 {
  border-bottom: 2px solid #0e88eb;
  font-size: 1.4em;
  text-align: center;
}

/* 一级标题内容 */
#nice h1 .content {
  font-size: 1.4em;
  display:inline-block;
  font-weight: bold;
  //background: #0e88eb;
  color:#ffffff;
  color: #0e88eb;
  padding:3px 10px 1px;
  border-top-right-radius:3px;
  border-top-left-radius:3px;
  margin-right:3px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
 
/* 二级标题 */
#nice h2 {
  text-align:left;
  margin:20px 10px 0px 0px;
}

/* 二级标题内容 */
#nice h2 .content {
  font-family:STHeitiSC-Light;
  font-size: 22px;
  color:#0e88eb;
  font-weight:bolder;
  display:inline-block;
  padding-left:10px;
  border-left:5px solid #0e88eb;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
\tfont-size: 18px;
 \tcolor: #0e88eb;
}

/* 三级标题内容 */
#nice h3 .content {
  font-size: 18px;
  color: #0e88eb;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  font-size: 15px;
}

/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
#nice .multiquote-1 {
  font-style:normal;
  border-left:none;
  padding:10px;
  position:relative;
  line-height:1.8;
  border-radius:0px 0px 10px 10px;
  color: #0e88eb;
  background:#fff;
  box-shadow:#84A1A8 0px 10px 15px;
}
#nice .multiquote-1:before {
  content:"★ ";
  display:inline;
  color: #0e88eb;
  font-size:4em;
  font-family:Arial,serif;
  line-height:1em;
  font-weight:700;
}

/* 引用文字 */
#nice .multiquote-1 p {
  color: #0e88eb;
  font-size:15px;
  display:inline;
}
#nice .multiquote-1:after {
  content:"”";
  float:right;
  display:inline;
  color:#0e88eb;
  font-size:3em;
  line-height:1em;
  font-weight:500;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: #0e88eb;
  border-bottom: 0px solid #ff3502;
  font-family:STHeitiSC-Light;
}

/* 加粗 */
#nice strong {
  font-weight: border;
  color: #0e88eb;
}

/* 斜体 */
#nice em {
  color: #0e88eb;
  letter-spacing:0.3em;
}

/* 加粗斜体 */
#nice em strong {
  color: #0e88eb;
  letter-spacing:0.3em;
}

/* 删除线 */
#nice del {
}
 
/* 分隔线
 * 粗细、样式和颜色
 * border-top:1px solid #3e3e3e;
 */
#nice hr {
  height:1px;
  padding:0;
  border:none;
  border-top:medium solidid #333;
  text-align:center;
  background-image:linear-gradient(to right,rgba(248,57,41,0),#0e88eb,rgba(248,57,41,0));
}

/* 图片
 * 宽度 width:80%;
 * 居中 margin:0 auto;
 * 居左 margin:0 0;
 */
#nice img {
  border-radius:0px 0px 5px 5px;
  display:block;
  margin:20px auto;
  width:85%;
  height:100%;
  object-fit:contain;
  box-shadow:#84A1A8 0px 10px 15px;
}

/* 图片描述文字 */
#nice figcaption {
  display:block;
  font-size:12px;
  font-family:PingFangSC-Light;
}

/* 行内代码 */
#nice p code, #nice li code {
  color:/*自定义样式，实时生效*/
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size: 15px;
}

/* 脚注文字 */
#nice .footnote-word {
  color: #2d59b3;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #6a88c5;
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#nice pre code {
}

/* 脚注文字 */
#nice .footnote-word {
  color: #0e88eb;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #0e88eb;
}

/*脚注链接样式*/
#nice .footnote-item em {
  color: #082a71;
  font-size:12px;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`,
  },
  {
    themeId: "caoyuangreen",
    name: "草原绿",
    css: `/*自定义样式，实时生效*/

/*自定义样式，实时生效*/

/* 全局属性
* 页边距 padding:30px;
* 全文字体 font-family:optima-Regular;
* 英文换行 word-break:break-all;
color:#2b2b2b;
*/
#nice {
  line-height: 1.35;
  color: #333;
  font-family: Optima-Regular, PingFangTC-light;
  letter-spacing: 1.5px;
}

/* 段落，下方未标注标签参数均同此处
* 上边距 margin-top:5px;
* 下边距 margin-bottom:5px;
* 行高 line-height:26px;
* 词间距 word-spacing:3px;
* 字间距 letter-spacing:3px;
* 对齐 text-align:left;
* 颜色 color:#3e3e3e;
* 字体大小 font-size:16px;
* 首行缩进 text-indent:2em;
*/
#nice p {
  color: #2b2b2b;
  margin: 10px 0px;
  letter-spacing: 2px;
  font-size: 16px;
  word-spacing: 2px;
}

/* 一级标题 */
#nice h1 {
  font-size: 25px;
}

/* 一级标题内容 */
#nice h1 span {
  display: inline-block;
  font-weight: bold;
  color: #4CAF50;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {}

/* 二级标题 */
#nice h2 {
  display:block;
  border-bottom: 4px solid #4CAF50;
}

/* 二级标题内容 */
#nice h2 .content {
  display: flex;
  color: #4CAF50;
  font-size: 20px;

}

/* 二级标题前缀 */
#nice h2 .prefix {

}

/* 二级标题后缀 */
#nice h2 .suffix {
  display: flex;
  box-sizing: border-box;
  width: 20px;
  height: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: RGBA(76, 175, 80, .5);
  color: rgb(255, 255, 255);
  font-size: 16px;
  letter-spacing: 0.544px;
  justify-content: flex-end;
  box-sizing: border-box !important;
  overflow-wrap: break-word !important;
  float: right;
  margin-top: -10px;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  position:relative;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* 三级标题内容 */
#nice h3 .content {
  color: #2b2b2b;
  padding-bottom:2px
}

#nice h3 .content:before{
  content:'';
  width:30px;
  height:30px;
  display:block;
  background-image:url(https://files.mdnice.com/grass-green.png);
  background-position:center;
  background-size:30px;
  margin:auto;
  opacity:1;
  background-repeat:no-repeat;
  margin-bottom:-8px;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {}

#nice h4 .content {
  height:16px;
  line-height:16px;
  font-size: 16px;
}

#nice h4 .content:before{

}

/* 无序列表整体样式
* list-style-type: square|circle|disc;
*/
#nice ul {
  font-size: 15px; /*神奇逻辑，必须比li section的字体大才会在二级中生效*/
  color: #595959;
  list-style-type: circle;
}


/* 有序列表整体样式
* list-style-type: upper-roman|lower-greek|lower-alpha;
*/
#nice ol {
  font-size: 15px;
  color: #595959;
}

/* 列表内容，不要设置li
*/
#nice li section {
  font-size: 16px;
  font-weight: normal;
  color: #595959;
}

/* 引用
* 左边缘颜色 border-left-color:black;
* 背景色 background:gray;
*/
#nice .multiquote-1::before {
  content: "❝";
  color: #74b56d;
  font-size: 34px;
  line-height: 1;
  font-weight: 700;
}

#nice .multiquote-1 {
  text-size-adjust: 100%;
  line-height: 1.55em;
  font-weight: 400;
  border-radius: 6px;
  color: #595959;
  font-style: normal;
  text-align: left;
  box-sizing: inherit;
  border-left: none;
  border: 1px solid #1b900d;
  background: #fff;

}

#nice .multiquote-1 p {

}

#nice .multiquote-1::after {
  content: "❞";
  float: right;
  color: #74b56d;
}

/* 链接
* border-bottom: 1px solid #009688;
*/
#nice a {
  color: #399003;
  font-weight: normal;
  border-bottom: 1px solid #399003;
}

#nice strong::before {
  content: '「';
}

/* 加粗 */
#nice strong {
  color: #399003;
  font-weight: bold;
}

#nice strong::after {
  content: '」';
}

/* 斜体 */
#nice em {
  font-style: normal;
  color: #399003;
  font-weight:bold;
}

/* 加粗斜体 */
#nice em strong {
  color: #399003;
}

/* 删除线 */
#nice del {
  color: #399003;
}

/* 分隔线
* 粗细、样式和颜色
* border-top:1px solid #3e3e3e;
*/
#nice hr {
  height: 1px;
  padding: 0;
  border: none;
  border-top: 2px solid #399003;
}

/* 图片
* 宽度 width:80%;
* 居中 margin:0 auto;
* 居左 margin:0 0;
*/
#nice img {
  border-radius: 6px;
  display: block;
  margin: 20px auto;
  object-fit: contain;
  box-shadow:2px 4px 7px #999;
}

/* 图片描述文字 */
#nice figcaption {
  display: block;
  font-size: 13px;
  color: #2b2b2b;
}

/* 行内代码 */
#nice p code,
#nice li code {
  color: #0bb712;
  background: rgba(127, 226, 159, 0.48);
  display:inline-block;
  padding:0 2px;
  border-radius:2px;
  height:21px;
  line-height:22px;
}

/* 非微信代码块
* 代码块不换行 display:-webkit-box !important;
* 代码块换行 display:block;
*/
#nice .code-snippet__fix {
  background: #f7f7f7;
  border-radius: 2px;
}

#nice pre code {
  letter-spacing: 0px;
}

/*
* 表格内的单元格
* 字体大小 font-size: 16px;
* 边框 border: 1px solid #ccc;
* 内边距 padding: 5px 10px;
*/
#nice table tr th,
#nice table tr td {
  font-size: 16px;
  color: #595959;
}

#nice .footnotes {
  background: #F6EEFF;
  padding: 20px 20px 20px 20px;
  font-size: 16px;
  border: 0.8px solid #399003;
  border-radius: 6px;
  border: 1px solid #399003;
}

/* 脚注文字 */
#nice .footnote-word {
  font-weight: normal;
  color: #595959;
}

/* 脚注上标 */
#nice .footnote-ref {
  font-weight: normal;
  color: #595959;
}

/*脚注链接样式*/
#nice .footnote-item em {
  font-size: 16px;
  color: #595959;
  display: block;
}

#nice .footnotes{
  background: #fff;
  padding: 20px 20px 20px 20px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #4CAF50;
}

/* "参考资料"四个字
* 内容 content: "参考资料";
*/
#nice .footnotes-sep:before {
  content: 'Reference';
  color: #595959;
  letter-spacing: 1px;
  border-bottom: 2px solid #4CAF50;
  display: inline;
  font-size: 20px;
}

/* 参考资料编号 */
#nice .footnote-num {}

/* 参考资料文字 */
#nice .footnote-item p {
  color: #595959;
  font-weight: bold;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-weight: normal;
}

/* 行间公式
* 最大宽度 max-width: 300% !important;
*/
#nice .block-equation svg {}

/* 行内公式
*/
#nice .inline-equation svg {}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`,
  },
  {
    themeId: "shanchui",
    name: "山吹",
    css: `/*自定义样式，实时生效*/
#nice {
}

#nice p {
\tmargin: 0 0 20px;
\tpadding: 0;
\tline-height: 1.8em;
\tcolor: #3a3a3a;
}

/* 一级标题 */
#nice h1 {
  font-size: 2.1em;
\tline-height: 1.1em;
\tpadding-top: 16px;
  padding-bottom: 10px;
  margin-bottom: 4px;
  border-bottom: 1px solid #c99833;
}
/* 一级标题内容 */
#nice h1 .content {
  color: #515151;
  font-weight: 700;
}

#nice h2, h3, h4, h5, h6 {
 line-height: 1.5em;
 margin-top: 2.2em;
 margin-bottom: 4px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {}

/* 二级标题 */
#nice h2 {
 margin-bottom: 35px;
}

/* 二级标题内容 */

#nice h2 .content {
  display: inline-block;
  font-weight: bold;
  background: linear-gradient(#fff 60%, #ffb11b 40%);
  color: #515151;
  padding: 2px 13px 2px;
  margin-right: 3px;
  height: 50%;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {}

/* 三级标题 */
#nice h3 {
  line-height: 1.4;
  padding-top: 10px;
  margin: 10px 0 5px;
}

/* 三级标题内容 */
#nice h3 .content {
  color: #515151;
  font-weight: 700;
 font-size: 1.0em;
  padding-left: 20px;
  border-left: 3px solid #f9bf45;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice .multiquote-1 {
  border-left-color: #ffb11b;
 background: #fff5e3;
}

/* 引用文字 */
#nice .multiquote-1 p {
  color: #595959;
}

/* 链接 */
#nice a {
  border: none;
  text-decoration: none;
  color: #dda52d;
}

#nice a:hover {
  color: #f9bf45;
  text-decoration: underline;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 加粗 */
#nice strong {}

/* 斜体 */
#nice em {}

/* 加粗斜体 */
#nice em strong {}

/* 删除线 */
#nice del {
  color: #d19826;
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
  border-top: 1px solid #f9bf45;
  margin: 20px 0px;
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
  width: 100%;
 border-radius: 5px;
 display: block;
 margin-bottom: 15px;
 height: auto;
}

/* 图片描述文字 */
#nice figcaption {
  color: #dda52d;
  font-size: 14px;
}

/* 行内代码 */
#nice p code, #nice li code {
  color: #9b6e23;
  background-color: #fff5e3;
  padding: 3px;
  margin: 3px;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  text-align: center;
}

/* 脚注文字 */
#nice .footnote-word {
  color: #ffb11b;
  padding: 3px;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #dda52d;
  margin: 2px;
  padding: 3px;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  margin: 30px 0px 15px 0px;
  font-weight: 800;
}


/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`,
  },
  {
    themeId: "blueqing",
    name: "蓝青",
    css: `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  text-align: justify;
}

/* 一级标题 */
#nice h1 {
  font-size: 1.8em;
  color: #009688;
 \tmargin: 1.2em auto;
  text-align: center;
  border-bottom: 1px solid #009688;
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  color: #009688;
  padding-left: 10px;
  margin: 1em auto;
  border-left: 3px solid #009688;
}

/* 二级标题内容 */
#nice h2 .content {
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  margin: 0.6em auto;
  padding-left: 10px;
  border-left: 2px solid #009688;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 四级标题 */
#nice h4 {
  margin: 0.6em auto;
  font-size: 1.2em;
  padding-left: 10px;
  border-left: 2px dashed #009688;
}

/* 五级标题 */
#nice h5 {
  margin: 0.6em auto;
  font-size: 1.1em;
  padding-left: 10px;
  border-left: 1px dashed #009688;
}

/* 六级标题 */
#nice h6 {
  margin: 0.6em auto;
  font-size: 1em;
  padding-left: 10px;
  border-left: 1px dotted #009688;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
  border-left: 2px solid #888;
  border-right: 2px solid #888;
  padding-left: 1em;
  color: #777;
}

/* 引用文字 */
#nice .multiquote-1 p {
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: #009688;
  border-bottom: 1px solid #009688;
}

/* 加粗 */
#nice strong {
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
  margin: 20px 0;
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
  color: #009688;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/* 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th {
  border: 1px solid #009688;
  background-color: #009688;
  color: #f8f8f8;
  border-bottom: 0;
}

#nice table tr td {
  border: 1px solid #009688;
}

#nice table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

/* 脚注文字 */
#nice .footnote-word {
  color: #009688;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #009688;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}`,
  },
  {
    themeId: "blueying",
    name: "蓝莹",
    css: `/* 全局属性 */

#nice {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  word-break: break-all;
}

/* 标题 */
#nice h1 {
  font-size: 1.7em;
  font-weight: normal;
  border-bottom: 2px solid hsl(216, 100%, 68%);
}

#nice h1 .content {
  background: hsl(216, 100%, 68%);
  color: white;
  padding: 3px 10px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-right: 3px;
}

#nice h2 {
  font-weight: normal;
  color: #333;
  font-size: 1.4em;
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

#nice h2 .content {
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

#nice h3 {
  font-weight: normal;
  color: #333;
  font-size: 1.2em;
}

/* 特殊规定：
 * h4 → 摘要
 * h5 → 强调
 * h6 → 序号
 * em → 高亮
 */

#nice h4 {
  font-weight: normal;
  font-size: 1em;
  width: 80%;
  border: 1px solid hsl(216, 100%, 68%);
  border-top: 4px solid hsl(216, 100%, 68%);
  padding: 10px;
  margin: 30px auto;
  color: #333;
}

#nice h5 {
  font-weight: normal;
  font-size: 1.3em;
  text-align: center;
  background: hsl(216, 100%, 68%);
  border: 3px double #fff;
  width: 80%;
  padding: 10px;
  margin: 30px auto;
  color: #fff;
}

#nice h6 {
  font-size: 1.5em;
  font-weight: normal;
  color: hsl(216, 100%, 68%);
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

#nice em {
  font-style: normal;
  font-weight: normal;
  color: white;
  background: hsl(244, 100%, 75%);
  padding: 2px 4px;
\tmargin: 0px 2px;
}

/* 其他块元素 */

#nice ol,
#nice ul {
  padding-left: 2em;
}

#nice hr {
  width: 90%;
  margin: 1.5em auto;
  border-top: 2px dashed hsl(216, 100%, 68%);
}

#nice table {
  margin: 1.5em auto;
  width: auto;
}

#nice img {
  width: 90%;
  margin: 0 auto;
  box-shadow: #CCC 0 10px 15px;
}

#nice .multiquote-1 {
  background: #f9f9f9;
  border-left-color: hsl(216, 100%, 68%);
}

#nice .multiquote-1 p {
  color: #999;
  padding: 3px 0;
}

#nice a {
  color: hsl(187, 100%, 45%);
  font-weight: normal;
  border-bottom-color: hsl(187, 100%, 45%);
}

#nice strong {
  color: hsl(216, 80%, 44%);
}

#nice s,
#nice del {
  color: #999;
}

#nice p,
#nice li,
#nice li span,
#nice h4,
#nice table tr td {
  color: #666;
}

#nice table tr th {
  color: #333;
  font-weight: normal;
}

#nice p code,
#nice li code {
  color: hsl(216, 100%, 68%);
}

#nice sup {
  line-height: 0;
}

#nice .footnote-word,
.footnote-ref {
  font-weight: normal;
  color: hsl(187, 100%, 45%);
}

#nice .footnotes-sep {
  font-family: inherit;
}

#nice .footnote-num {
  font-family: inherit;
}

#nice .footnote-item p {
  color: #666;
}

#nice .footnote-item p em {
  color: #999;
  background: transparent;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`,
  },
];
