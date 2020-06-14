require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(43);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c6eb783a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c6eb783a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c6eb783a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c6eb783a", Component.options)
  } else {
    hotAPI.reload("data-v-c6eb783a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Star = __webpack_require__(77);

var _Star2 = _interopRequireDefault(_Star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var db = wx.cloud.database();
exports.default = {
  data: function data() {
    return {
      detailData: [],
      isCollection: false
    };
  },

  components: {
    Star: _Star2.default
  },
  onLoad: function onLoad(options) {
    var _this = this;

    // console.log(options);
    var id = options.id;
    db.collection("favorList").where({
      id: id
    }).get().then(function (res) {
      // console.log(res);
      _this.detailData = res.data[0];
    });
    var userInfo = wx.getStorageSync('userInfo');
    var openid = wx.getStorageSync('openid');
    db.collection("collect").where({
      openid: openid,
      id: id
    }).get().then(function (res) {
      // console.log(res);
      if (res.data.length > 0) {
        console.log("已收藏");
        _this.isCollection = true;
      } else {
        console.log("未收藏");
        _this.isCollection = false;
      }
    });
  },

  methods: {
    collect: function collect(id) {
      // console.log(id);
      var userInfo = wx.getStorageSync('userInfo');
      var openid = wx.getStorageSync('openid');
      if (userInfo && openid) {
        if (this.isCollection) {
          // 取消收藏
          this.isCollection = false;
          // wx.cloud.callFunction({
          //   name:"delCollect",
          //   data:{
          //     openid,
          //     id
          //   }
          // }).then(res=>{
          //   console.log(res);
          // });
        } else {
          // 收藏
          this.isCollection = true;
          db.collection("collect").add({
            data: {
              openid: openid,
              id: id
            }
          }).then(function (res) {
            console.log(res);
          });
        }
      } else {
        // console.log(this.collection);
        wx.showToast({
          title: '请登录',
          icon: 'none',
          duration: 2000
        });
      }
    }
  }
};

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail_container"
  }, [_c('div', {
    staticClass: "container_up"
  }, [_c('div', {
    staticClass: "detail_content"
  }, [_c('div', {
    staticClass: "imgContainer"
  }, [(_vm.detailData.image_path) ? _c('img', {
    attrs: {
      "src": 'cloud://javh-c8e1bf.6a61-javh-c8e1bf-1257782781/' + _vm.detailData.image_path
    }
  }) : _vm._e()]), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "store_title"
  }, [_vm._v(_vm._s(_vm.detailData.title))]), _vm._v(" "), _c('li', {
    staticClass: "store_price"
  }, [_c('Star', {
    attrs: {
      "score": _vm.detailData.score,
      "mpcomid": '0'
    }
  }), _vm._v("\n          " + _vm._s(_vm.detailData.view) + "条 ￥" + _vm._s(_vm.detailData.price) + "/人\n        ")], 1), _vm._v(" "), _c('li', {
    staticClass: "store_taste"
  }, [_vm._v("口味：" + _vm._s(_vm.detailData.score) + " 环境：" + _vm._s(_vm.detailData.environment) + " 服务：" + _vm._s(_vm.detailData.service))]), _vm._v(" "), _c('li', {
    staticClass: "store_type"
  }, [_vm._v(_vm._s(_vm.detailData.description))])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "local"
  }, [_c('div', {
    staticClass: "content-show"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/clock.png"
    }
  }), _vm._v(" " + _vm._s(_vm.detailData.shopHours) + "\n        "), _c('img', {
    attrs: {
      "src": "/static/images/wifi.png"
    }
  }), _vm._v(" WIFI\n        "), _c('img', {
    attrs: {
      "src": "/static/images/car.png"
    }
  }), _vm._v(" 停车场\n        "), _c('img', {
    attrs: {
      "src": "/static/images/more.png"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "position"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/position.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-content"
  }, [_c('span', [_vm._v(_vm._s(_vm.detailData.specific))]), _vm._v(" "), _c('p', [_vm._v("距离步行60m，需要1分钟")])], 1), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c('div', {
    staticClass: "rule"
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "rule"
  }), _vm._v(" "), _c('div', {
    staticClass: "group-buying"
  }, [_c('img', {
    staticClass: "group-buying-img",
    attrs: {
      "src": "/static/images/group-buy.png",
      "alt": "团"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "show-list-item"
  }, [_c('img', {
    staticClass: "food-show",
    attrs: {
      "src": "/static/images/eatPicture.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-container"
  }, [_vm._m(2), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "now-price"
  }, [_vm._v("￥35")]), _vm._v(" "), _c('span', {
    staticClass: "original-price"
  }, [_vm._v("￥57")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "show-list-item"
  }, [_c('img', {
    staticClass: "food-show",
    attrs: {
      "src": "/static/images/eatPicture.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-container"
  }, [_vm._m(3), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "now-price"
  }, [_vm._v("￥35")]), _vm._v(" "), _c('span', {
    staticClass: "original-price"
  }, [_vm._v("￥57")])])], 1)]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.collect(_vm.detailData.id)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.isCollection ? '/static/images/collect-active.png' : '/static/images/collect.png'
    }
  }), _vm._v(" 收藏")]), _vm._v(" "), _vm._m(5)])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "phone-container"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/phone.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rank"
  }, [_c('img', {
    staticClass: "rank-img",
    attrs: {
      "src": "/static/images/rank.png"
    }
  }), _vm._v("\n    「上地小吃快餐热榜」 第1名\n    "), _c('img', {
    staticClass: "rank-more",
    attrs: {
      "src": "/static/images/more.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "food-detail"
  }, [_vm._v("\n          单人商务套餐，提供免费WIFI\n          "), _c('span', [_vm._v("已售28")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "food-detail"
  }, [_vm._v("\n          单人商务套餐，提供免费WIFI\n          "), _c('span', [_vm._v("已售28")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "more-container"
  }, [_vm._v("\n      查看其他4个团购 "), _c('span', {
    staticClass: "more-arrows"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "/static/images/remark.png"
    }
  }), _vm._v(" 写点评")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c6eb783a", esExports)
  }
}

/***/ })

},[42]);