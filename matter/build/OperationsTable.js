"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@fluentui/react");

var _Styling = require("office-ui-fabric-react/lib/Styling");

require("office-ui-fabric-react/dist/css/fabric.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var classNames = (0, _Styling.mergeStyleSets)({
  table: {
    margin: 'auto'
  }
});
var operations = [{
  from: 'Pepptech',
  to: 'contract Advices',
  date: '20-05-2020'
}, {
  from: 'pepptech',
  to: 'contract advices',
  date: '19-05-2020'
}, {
  from: 'Willis Walker',
  to: 'Advisers',
  date: '18-05-2020'
}];
var columns = [{
  key: 'column',
  name: 'Team',
  fieldName: 'from',
  minWidth: 100,
  maxWidth: 300,
  isResizable: true
}, {
  key: 'column',
  name: 'Matter',
  fieldName: 'to',
  minWidth: 100,
  maxWidth: 300,
  isResizable: true
}, {
  key: 'column',
  name: 'Last Activity',
  fieldName: 'date',
  minWidth: 100,
  maxWidth: 300,
  isResizable: true
}];

var OperationsTable = function OperationsTable() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-is-scrollable": true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "s-Grid-col ms-sm9 ms-xl9 ".concat(classNames.table)
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "hi"), /*#__PURE__*/_react["default"].createElement(_react2.DetailsList, {
    items: operations,
    columns: columns,
    selectionMode: 0
  })));
};

var _default = OperationsTable;
exports["default"] = _default;