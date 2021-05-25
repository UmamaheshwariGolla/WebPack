"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@fluentui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var links = [{
  links: [{
    name: 'Dashboard',
    url: '/',
    key: 'key1',
    iconProps: {
      iconName: 'News',
      styles: {
        root: {
          fontSize: 20,
          color: '#106ebe'
        }
      }
    }
  }, {
    name: 'Stats',
    url: '/',
    key: 'key2',
    iconProps: {
      iconName: 'StackedLineChart',
      styles: {
        root: {
          fontSize: 20,
          color: '#106ebe'
        }
      }
    }
  }, {
    name: 'Transfer',
    url: '/',
    key: 'key3',
    iconProps: {
      iconName: 'SwitcherStartEnd',
      styles: {
        root: {
          fontSize: 20,
          color: '#106ebe'
        }
      }
    }
  }, {
    name: 'Settings',
    url: '/',
    key: 'key4',
    iconProps: {
      iconName: 'PlayerSettings',
      styles: {
        root: {
          fontSize: 20,
          color: '#106ebe'
        }
      }
    }
  }]
}];
var navigationStyles = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflow: 'auto',
    paddingTop: '10vh',
    backgroundColor: '#fff'
  }
};

var Navigation = function Navigation() {
  (0, _react2.initializeIcons)();
  return /*#__PURE__*/_react["default"].createElement(_react2.Nav, {
    groups: links,
    selectedKey: "key1",
    styles: navigationStyles
  });
};

var _default = Navigation;
exports["default"] = _default;