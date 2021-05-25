"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@fluentui/react");

var _Dailogue = require("./Components/Dailogue");

var _CreateButton = require("./Components/CreateButton");

var _SearchBox = require("@fluentui/react/lib/SearchBox");

var _grid = require("./Components/grid");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.initializeIcons)();
var greeting = 'I am Matter';

var Matter = function Matter() {
  return (
    /*#__PURE__*/
    //  <div className="ms-Grid" dir="ltr">
    //     <div className="ms-Grid-row">    
    //       <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
    //       <ButtonCommandBarExample/>
    //      <SearchBox placeholder="Search" />    
    //       </div> 
    //     </div>
    //  </div>
    _react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Dailogue.DialogBlockingExample, null)), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: "1000px"
      }
    }, /*#__PURE__*/_react["default"].createElement(_SearchBox.SearchBox, {
      placeholder: "Search"
    }))), /*#__PURE__*/_react["default"].createElement(_grid.DetailsListDocumentsExample, null))
  );
};

var _default = Matter;
exports["default"] = _default;