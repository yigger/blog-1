(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{242:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("GitHub常用的一些命令，方便随时查看。\n")]),t._v(" "),a("h2",{attrs:{id:"上传打包文件到github-pages流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传打包文件到github-pages流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 上传打包文件到GitHub pages流程:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm run build\ncd dist\ngit init\ngit add "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("A")]),t._v("\ngit commit "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\ngit push "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lewiscutey"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token constant"}},[t._v("XX")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("gh"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("pages\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 如果不在根目录下，注意设置publicPath = /XX/;因为webpack默认配置是绝对路径")]),t._v("\n")])])]),a("h2",{attrs:{id:"pr流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pr流程","aria-hidden":"true"}},[t._v("#")]),t._v(" PR流程:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("fork 到自己的仓库\n\ngit clone 到本地\n\n上游建立连接\ngit remote add upstream 开源项目地址\n\n始终保持和原仓库代码最新时需要多以下两步操作\ngit fetch upstream  git merge upstream\n\n"),a("span",{attrs:{class:"token function"}},[t._v("创建开发分支")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("非必须"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngit checkout "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("b dev\n\n修改提交代码\ngit status git add "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" git commit "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("m git push origin branch\n\n同步代码三部曲\ngit fetch upstream git rebase upstream"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("master git push origin master\n\n提交pr\n去自己github仓库对应fork的项目下"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("pull")]),t._v(" request\n")])])])])}],!1,null,null,null);e.options.__file="github-use-notes.md";s.default=e.exports}}]);