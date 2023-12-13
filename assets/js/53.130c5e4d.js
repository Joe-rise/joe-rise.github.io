(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{494:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("安装方法有两种")]),s._v(" "),a("h3",{attrs:{id:"_1yum命令安装-可能不是最新版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1yum命令安装-可能不是最新版本"}},[s._v("#")]),s._v(" 1yum命令安装(可能不是最新版本)")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n\n卸载已安装的 Git\n\nyum remove "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_2源码安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2源码安装"}},[s._v("#")]),s._v(" 2源码安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("安装前需要安装依赖库\n\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" curl-devel expat-devel gettext-devel openssl-devel zlib-devel\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  gcc perl-ExtUtils-MakeMaker\n\n下载安装包\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/bin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.24.0.tar.gz\n\n解压安装\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxf git-2.24.0.tar.gz\n\n编译安装\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" git-2.24.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/git all\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n添加至环境变量\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/usr/local/git/bin"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"git-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-配置"}},[s._v("#")]),s._v(" git 配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置用户名 和邮箱")]),s._v("\n\n在使用 Git 之前，需要先配置用户名和邮箱，这样在提交代码时，Git 就知道是谁提交的了。可以使用以下命令来配置：\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your Name"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n其中，--global 表示全局配置，即对所有 Git 仓库生效。如果只想对当前仓库生效，可以去掉 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" 参数。\n\n配置完成后，可以使用以下命令来查看配置信息：\n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("\n如果需要修改配置信息，可以再次运行上述命令并修改对应的值即可。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);