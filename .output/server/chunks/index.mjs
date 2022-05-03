function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var pages = {};

var ids = pages.ids = [3];
var modules = pages.modules = {
  70: function(module, exports2, __webpack_require__) {
    var content = __webpack_require__(75);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module.i, content, ""]];
    if (content.locals)
      module.exports = content.locals;
    var add = __webpack_require__(14).default;
    module.exports.__inject__ = function(context) {
      add("0ab817b0", content, true, context);
    };
  },
  74: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_vue2_script_setup_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_14_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_vue2_script_setup_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_14_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_vue2_script_setup_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_14_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  75: function(module, exports2, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(13);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module.i, "ul{text-align:center}li{margin-top:0.5rem;margin-bottom:0.5rem;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(82 82 91 / var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module.exports = ___CSS_LOADER_EXPORT___;
  },
  77: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "p-5 mx-auto bg-zinc-800 min-h-screen" }, [_vm._ssrNode('<div class="bg-blue-800 px-4 rounded shadow"><h1 class=" text-center text-white text-3xl font-bold py-2">\n            P\xE1ginas:\n        </h1></div> '), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c("NuxtLink", { attrs: { "to": "/HeccusTurbo/" } }, [_vm._v("Heccus Turbo")])], 1)])], 2);
    };
    var staticRenderFns = [];
    var runtime_vue2_bridge_7e3c5aad = __webpack_require__(1);
    var transform_ref_35_0_pagesvue_type_script_lang_ts_ = runtime_vue2_bridge_7e3c5aad["b"].extend({
      name: "IndexPage"
    });
    var pagesvue_type_script_lang_ts_ = transform_ref_35_0_pagesvue_type_script_lang_ts_;
    var componentNormalizer = __webpack_require__(5);
    function injectStyles(context) {
      var style0 = __webpack_require__(74);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(pagesvue_type_script_lang_ts_, render, staticRenderFns, false, injectStyles, null, "5b6ea044");
    __webpack_exports__["default"] = component.exports;
  }
};

const index = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': pages,
  ids: ids,
  modules: modules
}, [pages]);

export { index as i };
