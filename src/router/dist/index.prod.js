"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue")),_vueRouter=_interopRequireDefault(require("vue-router")),_Home=_interopRequireDefault(require("../views/Home.vue"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.use(_vueRouter.default);var routes=new _vueRouter.default({routes:[{path:"/",name:"Home",component:_Home.default},{path:"*",redirect:"/home"}],scrollBehavior:function(e){return e.hash?{selector:e.hash}:{x:0,y:0}},mode:"history"}),_default=routes;exports.default=_default;