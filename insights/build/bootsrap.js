"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Insights", {
  enumerable: true,
  get: function get() {
    return _Insights["default"];
  }
});

var _Insights = _interopRequireDefault(require("./Insights"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Insights["default"], null), document.getElementById("root"));