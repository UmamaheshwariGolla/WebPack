"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@fluentui/react");

var _InsightItem = _interopRequireDefault(require("./InsightItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function InsightList(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    gap: 10
  }, props.insights.length > 0 ? props.insights.map(function (insight) {
    return /*#__PURE__*/_react["default"].createElement(_InsightItem["default"], {
      insight: insight,
      key: insight.id
    });
  }) : /*#__PURE__*/_react["default"].createElement(_react2.Label, null, "Todo list is empty..."));
}

var _default = InsightList;
exports["default"] = _default;