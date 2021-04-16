(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../../libs/shared/assets/styles-app.scss":
/*!**************************************************************!*\
  !*** /home/vsts/work/1/s/libs/shared/assets/styles-app.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-9-3!./styles-app.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/shared/assets/styles-app.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/shared/assets/styles-app.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vsts/work/1/s/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/vsts/work/1/s/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-9-2!/home/vsts/work/1/s/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-9-3!/home/vsts/work/1/s/libs/shared/assets/styles-app.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "* {\n  font: inherit;\n  outline: none;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\nhr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\nhtml {\n  box-sizing: border-box;\n}\nbody {\n  background-color: var(--body-bg, white);\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain,\nform legend {\n  display: block;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nbutton,\ninput,\ntextarea,\nselect {\n  margin: 0;\n}\n.btn,\n.form-control,\n.link,\n.reset {\n  background-color: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  color: inherit;\n  line-height: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\nselect.form-control::-ms-expand {\n  display: none;\n}\ntextarea {\n  resize: vertical;\n  overflow: auto;\n  vertical-align: top;\n}\ninput::-ms-clear {\n  display: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nimg,\nvideo,\nsvg {\n  max-width: 100%;\n}\n[type=reset],\n[type=submit],\nbutton,\nhtml [type=button] {\n  -webkit-appearance: button;\n}\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner,\nbutton::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring,\nbutton:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nhtml,\nbody,\n#root,\n#___gatsby {\n  width: 100%;\n  height: 100%;\n}\nhtml {\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\nbody {\n  font-size: 15px;\n}\n.app main {\n  padding: 36px;\n}\n.app p {\n  text-align: center;\n  margin-bottom: 10px;\n}\n.app div[role=navigation] {\n  margin-bottom: 5px;\n}\n.app div[role=navigation] ul > li {\n  display: inline-block;\n}\n.app div[role=navigation] ul > li:not(:last-child) {\n  padding-right: 10px;\n  margin-right: 10px;\n  border-right: 1px solid #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9fcmVzZXQuc2NzcyIsInN0eWxlcy1hcHAuc2NzcyIsInN0eWxlcy9iYXNlL21peGlucy9fcmVzZXQuc2NzcyIsInN0eWxlcy9fZ2xvYmFsLWVsZW1lbnRzLnNjc3MiLCJzdHlsZXMvYmFzZS9fdmFyaWFibGVzLnNjc3MiLCJzdHlsZXMvX2FwcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBT0UsYUFBQTtFQUNBLGFBQUE7QUNMRjtBREZFO0VBR0UsbUJBQUE7QUNFSjtBREtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0ZFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtBQ0ZGO0FES0E7RUFDRSx1Q0FBQTtBQ0ZGO0FES0E7Ozs7Ozs7Ozs7Ozs7RUFhRSxjQUFBO0FDRkY7QURLQTs7RUFFRSxnQkFBQTtBQ0ZGO0FES0E7O0VBRUUsWUFBQTtBQ0ZGO0FES0E7Ozs7RUFJRSxTQUFBO0FDRkY7QURLQTs7OztFRXpJRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7QUQySUY7QUREQTtFQUNFLGFBQUE7QUNJRjtBRERBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNJRjtBRERBO0VBQ0UsYUFBQTtBQ0lGO0FEREE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDSUY7QUREQTs7O0VBR0UsZUFBQTtBQ0lGO0FEQ0E7Ozs7RUFJRSwwQkFBQTtBQ0VGO0FEQ0E7Ozs7RUFJRSxrQkFBQTtFQUNBLFVBQUE7QUNFRjtBRENBOzs7O0VBSUUsOEJBQUE7QUNFRjtBRENBOztFQUVFLHNCQUFBO0VBQ0EsVUFBQTtBQ0VGO0FEQ0E7O0VBRUUsWUFBQTtBQ0VGO0FEQ0E7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0FDRUY7QURDQTs7RUFFRSx3QkFBQTtBQ0VGO0FEQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0VGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLGFBQUE7QUNFRjtBRWpPQTs7OztFQUlFLFdBQUE7RUFDQSxZQUFBO0FGb09GO0FFak9BO0VBQ0UsZUNOZTtFRE9mLDBKQ1ZZO0FIOE9kO0FFak9BO0VBQ0UsZUNWZTtBSDhPakI7QUlqUEU7RUFDRSxhQUFBO0FKb1BKO0FJalBFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBSm1QSjtBSWhQRTtFQUNFLGtCQUFBO0FKa1BKO0FJaFBJO0VBQ0UscUJBQUE7QUprUE47QUloUE07RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUprUFIiLCJmaWxlIjoic3R5bGVzLWFwcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICYsXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICB9XG5cbiAgZm9udDogaW5oZXJpdDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvLFxuaHIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLCB3aGl0ZSk7XG59XG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5tYWluLFxuZm9ybSBsZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnRuLFxuLmZvcm0tY29udHJvbCxcbi5saW5rLFxuLnJlc2V0IHtcbiAgQGluY2x1ZGUgcmVzZXQ7XG59XG5cbnNlbGVjdC5mb3JtLWNvbnRyb2w6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lOyAvLyBoaWRlIFNlbGVjdCBkZWZhdWx0IGljb24gb24gSUVcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW5wdXQ6Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7IC8vIGhpZGUgWCBpY29uIGluIElFIGFuZCBFZGdlXG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmltZyxcbnZpZGVvLFxuc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5bdHlwZT0ncmVzZXQnXSxcblt0eXBlPSdzdWJtaXQnXSxcbmJ1dHRvbixcbmh0bWwgW3R5cGU9J2J1dHRvbiddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyLFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuW3R5cGU9J2NoZWNrYm94J10sXG5bdHlwZT0ncmFkaW8nXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG59XG5cblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBvcGFjaXR5OiAwLjU0O1xufVxuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4iLCIqIHtcbiAgZm9udDogaW5oZXJpdDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvLFxuaHIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLCB3aGl0ZSk7XG59XG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5tYWluLFxuZm9ybSBsZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnRuLFxuLmZvcm0tY29udHJvbCxcbi5saW5rLFxuLnJlc2V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sOjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW5wdXQ6Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmltZyxcbnZpZGVvLFxuc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5bdHlwZT1yZXNldF0sXG5bdHlwZT1zdWJtaXRdLFxuYnV0dG9uLFxuaHRtbCBbdHlwZT1idXR0b25dIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuW3R5cGU9Y2hlY2tib3hdLFxuW3R5cGU9cmFkaW9dIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbn1cblxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG5cblt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgb3BhY2l0eTogMC41NDtcbn1cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5odG1sLFxuYm9keSxcbiNyb290LFxuI19fX2dhdHNieSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmFwcCBtYWluIHtcbiAgcGFkZGluZzogMzZweDtcbn1cbi5hcHAgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5hcHAgZGl2W3JvbGU9bmF2aWdhdGlvbl0ge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uYXBwIGRpdltyb2xlPW5hdmlnYXRpb25dIHVsID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYXBwIGRpdltyb2xlPW5hdmlnYXRpb25dIHVsID4gbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDtcbn0iLCIvLyByZXNldCB1c2VyIGFnZW50IHN0eWxlXG5AbWl4aW4gcmVzZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG4iLCJodG1sLFxuYm9keSxcbiNyb290LFxuI19fX2dhdHNieSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6ICRodG1sLWZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogJGJvZHktZm9udC1zaXplO1xufVxuIiwiJGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgJ1NlZ29lIFVJJywgSGVsdmV0aWNhLFxuICBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XG5cbiRodG1sLWZvbnQtc2l6ZTogMTBweDtcbiRib2R5LWZvbnQtc2l6ZTogMTVweDtcblxuJGhlYWRlci1iZzogJGNvbG9yLWRhcmstYmx1ZTtcbiRoZWFkZXItY29sb3I6ICRjb2xvci13aGl0ZTtcbiIsIi5hcHAge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiAzNnB4O1xuICB9XG5cbiAgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICBkaXZbcm9sZT0nbmF2aWdhdGlvbiddIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICB1bCA+IGxpIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY29sb3ItYmxhY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!./styles.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vsts/work/1/s/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/vsts/work/1/s/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-9-2!/home/vsts/work/1/s/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-9-3!./styles.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBIiwiZmlsZSI6InN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuIl19 */", '', '']]

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**********************************************************************************************!*\
  !*** /home/vsts/work/1/s/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-9-3!./styles.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!./styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!**********************************************************************************!*\
  !*** multi /home/vsts/work/1/s/libs/shared/assets/styles-app.scss ./styles.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/vsts/work/1/s/libs/shared/assets/styles-app.scss */"../../../libs/shared/assets/styles-app.scss");
module.exports = __webpack_require__(/*! /home/vsts/work/1/s/apps/frontend-app-1/src/styles.scss */"./styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map