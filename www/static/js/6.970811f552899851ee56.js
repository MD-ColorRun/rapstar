webpackJsonp([6],{"6CFv":function(t,o){},wUZA:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={data:function(){return{show:localStorage.getItem("isRole")}},mounted:function(){console.log("首页挂载")},destroyed:function(){console.log("首页销毁")}},r={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("p",[t._v("-------------------------------router-link--------------------------")]),t._v(" "),"1"==t.show?e("router-link",{attrs:{to:"/food"}},[t._v("外卖")]):e("router-link",{attrs:{to:"/move"}},[t._v("电影")]),t._v(" "),e("p",[t._v("$router.push(path)添加一条新的历史记录可以返回")]),t._v(" "),e("hr"),t._v(" "),"1"==t.show?e("button",{on:{click:function(o){return t.$router.push("/food")}}},[t._v("外卖")]):e("button",{on:{click:function(o){return t.$router.push("/move")}}},[t._v("电影")]),t._v(" "),e("p",[t._v("$router.replace(path)添加一条新的历史记录去替换当前记录")]),t._v(" "),e("hr"),t._v(" "),"1"==t.show?e("button",{on:{click:function(o){return t.$router.replace("/food")}}},[t._v("外卖")]):e("button",{on:{click:function(o){return t.$router.replace("/move")}}},[t._v("电影")])],1)},staticRenderFns:[]};var u=e("VU/8")(n,r,!1,function(t){e("6CFv")},null,null);o.default=u.exports}});
//# sourceMappingURL=6.970811f552899851ee56.js.map