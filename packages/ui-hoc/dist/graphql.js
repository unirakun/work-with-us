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
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$mapData = _ref2.mapData,
      mapData = _ref2$mapData === void 0 ? defaultMapData : _ref2$mapData,
      _ref2$mapToVariables = _ref2.mapToVariables,
      mapToVariables = _ref2$mapToVariables === void 0 ? defaultMapToVariables : _ref2$mapToVariables,
      _ref2$wait = _ref2.wait,
      wait = _ref2$wait === void 0 ? false : _ref2$wait;

  return function (Component) {
    return function (props) {
      return _react.default.createElement(_reactApollo.Query, {
        query: (0, _graphqlTag.default)(query),
        variables: mapToVariables(props)
      }, function (_ref3) {
        var loading = _ref3.loading,
            error = _ref3.error,
            data = _ref3.data;
        if (loading && wait) return null; // TODO: loading indicator

        if (error) {
          console.trace(new Error(error)); // TODO: error handler
        }

        if (loading) return _react.default.createElement(Component, props);
        return _react.default.createElement(Component, _extends({}, props, mapData(data, {
          loading: loading
        })));
      });
    };
  };
};

exports.default = _default;