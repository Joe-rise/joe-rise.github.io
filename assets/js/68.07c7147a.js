(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{507:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前置环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置环境"}},[s._v("#")]),s._v(" 前置环境")]),s._v(" "),a("blockquote",[a("p",[s._v("windows 10 ,centos 7")])]),s._v(" "),a("h2",{attrs:{id:"_1-windows-本地生成密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-windows-本地生成密钥"}},[s._v("#")]),s._v(" 1. windows 本地生成密钥")]),s._v(" "),a("p",[s._v("执行以下命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("一路回车 默认生成到 C:\\Users\\Administrator.ssh")]),s._v(" "),a("p",[s._v("生成"),a("code",[s._v("id_rsa")]),s._v(", "),a("code",[s._v("id_rsa.pub")]),s._v(" 两个文件，分别是 私钥/公钥")]),s._v(" "),a("h2",{attrs:{id:"_2、配置服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置服务器"}},[s._v("#")]),s._v(" 2、配置服务器")]),s._v(" "),a("p",[s._v("2.1 配置服务器文件权限")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh/  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/authorized_keys\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2.2 设置 SSH，打开密钥登录功能")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加以下内容")]),s._v("\nRSAAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nPubkeyAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("2.3 复制公钥到服务器 ~/.ssh/authorized_keys")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.ssh/authorized_keys\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 粘贴之前windows上生成的 id_rsa.pub 内容")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_3、重启服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、重启服务"}},[s._v("#")]),s._v(" 3、重启服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);