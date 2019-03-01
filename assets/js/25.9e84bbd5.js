(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{262:function(t,e,a){"use strict";a.r(e);var v=a(0),_=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[t._v("终于有时间静下来学习一下vue源码了。\n")]),t._v(" "),a("h2",{attrs:{id:"_1-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 生命周期")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("生命周期钩子")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("组件状态")]),t._v(" "),a("th",[t._v("最佳实践")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("beforeCreate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例初始化之后，this指向创建的实例，不能访问到data、computed、watch、methods上的方法和数据")]),t._v(" "),a("td",[t._v("常用于初始化非响应式变量")])]),t._v(" "),a("tr",[a("td",[t._v("created")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例创建完成，可以访问到data、computed、watch、methods上的方法和数据，未挂载DOM，不能访问$el,$ref属性内容为空数组")]),t._v(" "),a("td",[t._v("常用于简单的ajax请求，页面的初始化")])]),t._v(" "),a("tr",[a("td",[t._v("beforeMount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例挂载之前，找到对应的template编译为render函数")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("mounted")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例挂载到DOM上，可以获取到DOM节点，可以访问$ref属性")]),t._v(" "),a("td",[t._v("常用于操作DOM和ajax请求")])]),t._v(" "),a("tr",[a("td",[t._v("beforeupdate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("响应式数据更新前调用，发生在虚拟DOM打补丁之前")]),t._v(" "),a("td",[t._v("常用于在更新之前访问现有的DOM，比如手动移除已添加的事件监听器")])]),t._v(" "),a("tr",[a("td",[t._v("updated")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("虚拟DOM重新渲染和打补丁之后调用，组件DOM已更新")]),t._v(" "),a("td",[t._v("可执行依赖与新DOM的操作，避免在这个钩子中操作数据，可能陷入死循环")])]),t._v(" "),a("tr",[a("td",[t._v("beforeDestroy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例销毁之前调用，这一阶段this仍可获取到实例")]),t._v(" "),a("td",[t._v("常用于销毁定时器，解绑全局事件，销毁插件对象等操作")])]),t._v(" "),a("tr",[a("td",[t._v("destroyed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例销毁后调用，调用后Vue实例的所有东西都会解绑，所有事件监听器都会被移除，所有的子组件会被销毁")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("activated")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("deactivated")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("errorCaptured")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td")])])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("created阶段与mounted阶段ajax请求的区别：")]),t._v(" "),a("p",[t._v("前者页面视图未出现，如果请求信息过多，页面会长时间处于白屏状态；mounted 不会承诺所有的子组件也都一起被挂载，如果你希望等到整个视图都渲染完毕，可以用 "),a("strong",[t._v("vm.$nextTick")])])]),t._v(" "),a("h2",{attrs:{id:"_2-响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-响应式原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 响应式原理")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("computed 和 watch 的差异：")]),t._v(" "),a("ul",[a("li",[t._v("computed 是计算一个新的属性，并将该属性挂载到 vm（Vue 实例）上，而 watch 是监听已经存在且已挂载到 vm 上的数据，所以用 watch 同样可以监听 computed 计算属性的变化（其它还有 data、props）;")]),t._v(" "),a("li",[t._v("computed 本质是一个惰性求值的观察者，具有缓存性，只有当依赖变化后，第一次访问 computed 属性，才会计算新的值，而 watch 则是当数据发生变化便会调用执行函数;")]),t._v(" "),a("li",[t._v("从使用场景上说，computed 适用一个数据被多个数据影响，而 watch 适用一个数据影响多个数据；")])])]),t._v(" "),a("h2",{attrs:{id:"_3-vue选项合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue选项合并","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Vue选项合并")]),t._v(" "),a("ul",[a("li",[t._v("对于 el、propsData 选项使用默认的合并策略 defaultStrat。")]),t._v(" "),a("li",[t._v("对于 data 选项，使用 mergeDataOrFn 函数进行处理，最终结果是 data 选项将变成一个函数，且该函数的执行结果为真正的数据对象。")]),t._v(" "),a("li",[t._v("对于 生命周期钩子 选项，将合并成数组，使得父子选项中的钩子函数都能够被执行")]),t._v(" "),a("li",[t._v("对于 directives、filters 以及 components 等资源选项，父子选项将以原型链的形式被处理，正是因为这样我们才能够在任何地方都使用内置组件、指令等。")]),t._v(" "),a("li",[t._v("对于 watch 选项的合并处理，类似于生命周期钩子，如果父子选项都有相同的观测字段，将被合并为数组，这样观察者都将被执行。")]),t._v(" "),a("li",[t._v("对于 props、methods、inject、computed 选项，父选项始终可用，但是子选项会覆盖同名的父选项字段。")]),t._v(" "),a("li",[t._v("对于 provide 选项，其合并策略使用与 data 选项相同的 mergeDataOrFn 函数。")]),t._v(" "),a("li",[t._v("最后，以上没有提及到的选项都将使默认选项 defaultStrat。")]),t._v(" "),a("li",[t._v("最最后，默认合并策略函数 defaultStrat 的策略是：只要子选项不是 undefined 就使用子选项，否则使用父选项。")])])])}],!1,null,null,null);_.options.__file="vue-source-study.md";e.default=_.exports}}]);