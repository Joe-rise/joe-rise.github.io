(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{553:function(s,e,a){"use strict";a.r(e);var n=a(2),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("使用 yum 从 RPM Fusion 存储库安装：")]),s._v(" "),e("p",[s._v("1.RPM Fusion 存储库依赖于EPEL 软件存储库，如果您的系统上未启用 EPEL，请使用以下命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2.接下来，通过安装 rpm 包启用 RPM Fusion 存储库 ：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum localinstall "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nogpgcheck")]),s._v(" https://download1.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3.启用存储库后，安装 FFmpeg：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ffmpeg ffmpeg-devel\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4.通过检查其版本来验证 FFmpeg 安装：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("ffmpeg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-version")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("一切顺利，FFmpeg 已经安装在你的CentOS 7上。")])])}),[],!1,null,null,null);e.default=t.exports}}]);