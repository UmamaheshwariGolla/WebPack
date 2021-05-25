"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Matter", {
  enumerable: true,
  get: function get() {
    return _Matter["default"];
  }
});

var _Matter = _interopRequireDefault(require("./Matter"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Matter from "./Matter";
// export { Matter};
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Matter["default"], null), document.getElementById("root"));