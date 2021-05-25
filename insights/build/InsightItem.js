"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@fluentui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function InsightItem(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Stack, null, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    horizontal: true,
    verticalAlign: "center",
    horizontalAlign: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Label, null, props.insight.name)));
}

var _default = InsightItem;
exports["default"] = _default;