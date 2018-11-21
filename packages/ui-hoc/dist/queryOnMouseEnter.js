"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultMapToVariables = function defaultMapToVariables(props) {
  return props;
};

var _default = function _default(query) {
  var mapToVariables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMapToVariables;
  return function (Component) {
    return function (props) {
      return _react.default.createElement(_reactApollo.ApolloConsumer, null, function (client) {
        return _react.default.createElement(Component, _extends({}, props, {
          onMouseEnter: function onMouseEnter() {
            if (props.onMouseEnter) props.onMouseEnter.apply(props, arguments);
            client.query({
              query: (0, _graphqlTag.default)(query),
              variables: mapToVariables(props)
            });
          }
        }));
      });
    };
  };
};

exports.default = _default;