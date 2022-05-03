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

var heccusTurboForm$1 = {};

var ids = heccusTurboForm$1.ids = [1];
var modules = heccusTurboForm$1.modules = {
  66: function(module, exports2, __webpack_require__) {
    var content = __webpack_require__(68);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module.i, content, ""]];
    if (content.locals)
      module.exports = content.locals;
    var add = __webpack_require__(14).default;
    module.exports.__inject__ = function(context) {
      add("382c9792", content, true, context);
    };
  },
  67: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_vue2_script_setup_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_14_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_vue2_script_setup_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_14_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_vue2_script_setup_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_14_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  68: function(module, exports2, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(13);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module.i, ".form{border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(22 163 74 / var(--tw-bg-opacity));padding:1rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(22 101 52 / 0.6);--tw-shadow:var(--tw-shadow-colored)}.input-group{margin-bottom:1rem;display:flex;flex-direction:column}.input-group label{margin-bottom:0.25rem}.input-group input, .input-group select{width:100%;border-radius:0.25rem;border-width:0px;--tw-bg-opacity:1;background-color:rgb(21 128 61 / var(--tw-bg-opacity));padding:0.5rem}.input-group input::-moz-placeholder, .input-group select::-moz-placeholder{color:rgb(255 255 255 / 0.2)}.input-group input:-ms-input-placeholder, .input-group select:-ms-input-placeholder{color:rgb(255 255 255 / 0.2)}.input-group input::placeholder, .input-group select::placeholder{color:rgb(255 255 255 / 0.2)}.input-group input:focus, .input-group select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(74 222 128 / var(--tw-ring-opacity))}.form button{margin:auto;display:flex;width:100%;flex-direction:row;align-items:center;justify-content:center;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(107 33 168 / var(--tw-bg-opacity));padding:0.5rem;text-transform:uppercase}.btn-loading{height:3.5rem;width:3.5rem;padding-left:0.5rem;padding-right:0.5rem}", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module.exports = ___CSS_LOADER_EXPORT___;
  },
  71: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("form", { staticClass: "form", attrs: { "id": "form" }, on: { "submit": _vm.submitForm } }, [_vm._ssrNode('<div class="input-group"><label for="name">Nome completo</label> <input type="text" name="name" id="name" placeholder="Nome"' + _vm._ssrAttr("value", _vm.nameInput) + "></div> "), _vm._ssrNode('<div class="input-group">', "</div>", [_vm._ssrNode('<label for="whatsapp">WhatsApp</label> <input type="tel" name="whatsapp" id="whatsapp" placeholder="WhatsApp com DDD"' + _vm._ssrAttr("value", _vm.whatsappInput) + "> "), _c("imask-input", { attrs: { "mask": Date, "radix": ".", "unmask": true, "placeholder": "Enter number here" }, model: { value: _vm.whatsappInput, callback: function($$v) {
        _vm.whatsappInput = $$v;
      }, expression: "whatsappInput" } })], 2), _vm._ssrNode(' <div class="input-group"><label for="email">Email</label> <input type="text" name="email" id="email" placeholder="Email"' + _vm._ssrAttr("value", _vm.emailInput) + "></div> "), _vm._ssrNode('<div class="input-group">', "</div>", [_vm._ssrNode('<label for="job">Cargo</label> '), _c("select", { directives: [{ name: "model", rawName: "v-model", value: _vm.jobInput, expression: "jobInput" }], attrs: { "name": "job", "id": "job" }, on: { "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.jobInput = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      } } }, _vm._l(_vm.jobs, function(job) {
        return _c("option", { domProps: { "value": job.value } }, [_vm._v("\n                " + _vm._s(job.text) + "\n            ")]);
      }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<button>", "</button>", [_vm._ssrNode('<div class="btnText">\n            Quero conhecer tudo sobre o heccus turbo!\n        </div> '), _vm.loadingStatus ? _vm._ssrNode('<div class="btn-loading">', "</div>", [_vm._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">', "</svg>", [_vm._ssrNode('<path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"></path>'), _vm._ssrNode('<path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">', "</path>", [_c("animateTransform", { attrs: { "attributeName": "transform", "dur": "1s", "from": "0 12 12", "repeatCount": "indefinite", "to": "360 12 12", "type": "rotate" } })], 1)], 2)]) : _vm._e()], 2)], 2);
    };
    var staticRenderFns = [];
    var external_vue_imask_ = __webpack_require__(65);
    var Formvue_type_script_lang_js_ = {
      data() {
        return {
          nameInput: null,
          whatsappInput: null,
          emailInput: null,
          jobInput: null,
          loadingStatus: false,
          jobs: [{
            text: "Esteticista",
            value: "esteticista"
          }, {
            text: "Fisiterapeuta",
            value: "fisioterapeuta"
          }, {
            text: "M\xE9dica",
            value: "medica"
          }, {
            text: "BioM\xE9dica",
            value: "biomedica"
          }, {
            text: "Dentista",
            value: "dentista"
          }, {
            text: "Outros",
            value: "outros"
          }]
        };
      },
      methods: {
        async submitForm(e) {
          e.preventDefault();
          const data = {
            nome: this.nameInput,
            phone: this.whatsappInput,
            email: this.emailInput,
            job: this.jobInput
          };
          console.log(data);
          if (!this.loadingStatus) {
            this.loadingStatus = true;
          }
        }
      },
      mounted() {
      },
      components: {
        "imask-input": external_vue_imask_["IMaskComponent"]
      },
      directives: {}
    };
    var HeccusTurbo_Formvue_type_script_lang_js_ = Formvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(5);
    function injectStyles(context) {
      var style0 = __webpack_require__(67);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(HeccusTurbo_Formvue_type_script_lang_js_, render, staticRenderFns, false, injectStyles, null, "2a42d8ed");
    __webpack_exports__["default"] = component.exports;
  }
};

const heccusTurboForm = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': heccusTurboForm$1,
  ids: ids,
  modules: modules
}, [heccusTurboForm$1]);

export { heccusTurboForm as h };
