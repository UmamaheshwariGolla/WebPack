"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCards = require("@uifabric/react-cards");

var _react2 = require("@fluentui/react");

require("office-ui-fabric-react/dist/css/fabric.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10vh 0'
};
var icon = {
  fontSize: 24,
  padding: 15,
  verticalAlign: 'middle',
  paddingLeft: 0,
  color: '#0078d4'
};
var styles = {
  cardStyles: {
    root: {
      backgroundColor: '#fff',
      padding: 20,
      borderTop: '5px solid #0078d4',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto'
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  },
  amount: {
    root: {
      fontSize: 26,
      paddingBottom: 20,
      paddingTop: 30
    }
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0078d4'
    }
  }
};
var cards = [{
  title: 'Contacts',
  amount: 'one of your contact moved',
  icon: 'important'
}, {
  title: 'Emails',
  amount: 'check mails',
  icon: 'important'
}, {
  title: 'Upcoming key dates',
  amount: 'initial date',
  icon: 'please keep track'
}, {
  title: 'Contact update',
  amount: 'update contacts',
  icon: 'Save'
}];

var CardSections = function CardSections() {
  (0, _react2.initializeIcons)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: container
  }, cards.map(function (card) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "s-Grid-col ms-sm3 ms-xl3"
    }, /*#__PURE__*/_react["default"].createElement(_reactCards.Card, {
      styles: styles.cardStyles
    }, /*#__PURE__*/_react["default"].createElement(_reactCards.Card.Section, null, /*#__PURE__*/_react["default"].createElement(_reactCards.Card.Item, null, /*#__PURE__*/_react["default"].createElement("i", {
      style: icon,
      className: "ms-Icon ms-Icon--".concat(card.icon),
      "aria-hidden": "true"
    }), /*#__PURE__*/_react["default"].createElement("h1", null, " ", /*#__PURE__*/_react["default"].createElement(_react2.Text, {
      style: styles.header
    }, card.title))), /*#__PURE__*/_react["default"].createElement(_reactCards.Card.Item, null, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
      style: styles.amount
    }, card.amount)))));
  }));
};

var _default = CardSections;
exports["default"] = _default;