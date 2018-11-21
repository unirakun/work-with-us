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

var defaultMapData = function defaultMapData(_ref) {
  var data = _ref.data;
  return data;
};

var defaultMapToVariables = function defaultMapToVariables(props) {
  return props;
};

var _default = function _default(query) {
  var mapData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMapData;
  var mapToVariables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultMapToVariables;
  return function (Component) {
    return function (props) {
      return _react.default.createElement(_reactApollo.Query, {
        query: (0, _graphqlTag.default)(query),
        variables: mapToVariables(props)
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        if (loading) return null; // TODO: loading indicator

        if (error) {
          console.trace(new Error(error)); // TODO: error handler

          return null;
        }

        return _react.default.createElement(Component, _extends({}, props, mapData(data)));
      });
    };
  };
};

exports.default = _default;