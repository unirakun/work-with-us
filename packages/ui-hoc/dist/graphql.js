"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var _recompact = require("recompact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultMapData = function defaultMapData(_ref) {
  var data = _ref.data;
  return data;
};

var defaultMapToVariables = function defaultMapToVariables(props) {
  return props;
};

var mapToVariablesInput = function mapToVariablesInput(variables) {
  return {
    input: variables
  };
};

var getQuery = function getQuery(query, options) {
  var _options$mapData = options.mapData,
      mapData = _options$mapData === void 0 ? defaultMapData : _options$mapData,
      _options$mapToVariabl = options.mapToVariables,
      mapToVariables = _options$mapToVariabl === void 0 ? defaultMapToVariables : _options$mapToVariabl,
      _options$wait = options.wait,
      wait = _options$wait === void 0 ? false : _options$wait;
  return function (Component) {
    return function (props) {
      return _react.default.createElement(_reactApollo.Query, {
        query: (0, _graphqlTag.default)(query),
        variables: mapToVariables(props)
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
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

var getMutation = function getMutation(mutation, options) {
  var _options$mapToVariabl2 = options.mapToVariables,
      mapToVariables = _options$mapToVariabl2 === void 0 ? mapToVariablesInput : _options$mapToVariabl2;

  var onSubmit = function onSubmit(callback) {
    return function (values) {
      return callback({
        variables: mapToVariables(values)
      });
    };
  };

  return function (Component) {
    return function (props) {
      return _react.default.createElement(_reactApollo.Mutation, {
        mutation: (0, _graphqlTag.default)(mutation)
      }, function (callback) {
        return _react.default.createElement(Component, _extends({}, props, {
          onSubmit: onSubmit(callback)
        }));
      });
    };
  };
};

var graphql = function graphql(query) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var wrapperFactory = query.trim().startsWith('query') ? getQuery : getMutation;
    var Wrapper = wrapperFactory(query, options)(Component);
    Wrapper.displayName = "graphql(".concat((0, _recompact.getDisplayName)(Component), ")");
    return Wrapper;
  };
};

var _default = graphql;
exports.default = _default;