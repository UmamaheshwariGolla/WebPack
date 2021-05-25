"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@fluentui/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _InsightsList = _interopRequireDefault(require("./InsightsList"));

require("office-ui-fabric-react");

require("./index.css");

var _CardsSection = _interopRequireDefault(require("./CardsSection"));

var _input = _interopRequireDefault(require("./input"));

var _DocumentCards = require("./Components/DocumentCards");

var _multipleCards = _interopRequireDefault(require("./Components/multipleCards"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.initializeIcons)();

function Insights() {
  //const [insights, setinsights] = useState([{ id: 1, name: "Microfront end1" }, { id: 2, name: "Microfront end2" }]);  
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ms-Grid",
    dir: "ltr"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ms-Grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ms-Grid-col ms-sm11 ms-xl11 main-element"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ms-Grid-row"
  }, /*#__PURE__*/_react["default"].createElement(_multipleCards["default"], null)))));
}

var _default = Insights;
exports["default"] = _default;