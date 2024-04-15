(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{541:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"回答随机性太高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回答随机性太高"}},[t._v("#")]),t._v(" 回答随机性太高")]),t._v(" "),a("p",[t._v("由于问题的答案天生具有多样性，因此对于不同的ChatGPT客户端，温度参数不一致导致返回的答案可能大相径庭，实际使用中的例子如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('prompt\n\n我的前端项目采用vue3+vite+element-plus开发，在一个el-table中有一列属性是创建人，关键代码如下，\\<el-table-column label="创建人" prop="createBy" width="120" />，我希望当我用鼠标点击到这个值时，我可以编辑它的值，当我点击键盘上的回车键或鼠标点击空白处时，调用接口更新这个值，并刷新表格数据，请帮我实现关键代码，使用vue3 组合式api的风格\n')])])]),a("p",[t._v("尝试了几个不同的ChatGPT客户端，分别给出了不同答案：")]),t._v(" "),a("ul",[a("li",[t._v("第一个直接在el-table 上写业务，js中返回html标签，然后vue编译报错，说无法解析jsx语法...，接着继续用chatgpt解决无法解析jsx语法，同样按照返回的方法结合google，一通操作还是无效...阻塞了近一个小时，放弃")]),t._v(" "),a("li",[t._v("第二个客户端 返回通过自定义组件的方式实现，没有什么特殊的语法，代码贴上去没有报错，稍微调整下就满足了需求"),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("可以使用一个自定义的编辑组件来实现这个功能，具体实现步骤如下：\n  创建一个名为 EditableCell 的组件，包含一个 input 输入框和一个保存按钮，代码如下：\n  vue\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@keyup.enter")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@blur")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("保存"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  import { ref } from 'vue'\n  ...\n  ...\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),a("p",[t._v("在使用ChatGPT时，最好对问题的方案有一定的了解，如果ChatGPT返回一个不合适的方案，就会从一个问题中掉入另一个问题中，一开始方案错了就会陷入一个恶性循环中。")]),t._v(" "),a("p",[t._v("如果对问题的答案没有把握，建议：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("确保prompt没有歧义")]),t._v(" "),a("p",[t._v("包含以下几个元素：\nInstruction（必须）： 指令，即你希望模型执行的具体任务。\nContext（选填）： 背景信息，或者说是上下文信息，这可以引导模型做出更好的反应。\nInput Data（选填）： 输入数据，告知模型需要处理的数据。\nOutput Indicator（选填）： 输出指示器，告知模型我们要输出的类型或格式")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("重点")]),t._v("：尝试使用不同的ChatGPT客户端提问，大致了解下不同方案的差异")])]),t._v(" "),a("li",[a("p",[t._v("根据自己对技术的了解选择一个合适的方案进行调试")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);