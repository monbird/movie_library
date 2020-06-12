"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Config =
/*#__PURE__*/
function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, null, [{
    key: "IMAGE_SERVER",
    value: function IMAGE_SERVER() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      index = index % Config.IMAGE_SERVERS.length;
      return this._IMAGE_SERVERS[index];
    }
  }, {
    key: "APP_VERSION",
    get: function get() {
      return this._APP_VERSION;
    }
  }, {
    key: "APPID",
    get: function get() {
      return this._APPID;
    }
  }, {
    key: "API_SERVER",
    get: function get() {
      return this._API_SERVER;
    }
  }, {
    key: "APP_KEY",
    get: function get() {
      return this._APP_KEY;
    }
  }, {
    key: "IMAGE_SERVERS",
    get: function get() {
      return this._IMAGE_SERVERS;
    }
  }]);

  return Config;
}();

exports["default"] = Config;

_defineProperty(Config, "_IMAGE_SERVERS", ["https://1.fwcdn.pl", "https://2.fwcdn.pl", "https://3.fwcdn.pl", "https://ssl-gfx.filmweb.pl"]);

_defineProperty(Config, "_APP_KEY", 'qjcGhW2JnvGT9dfCt3uT_jozR3s');

_defineProperty(Config, "_API_SERVER", 'https://ssl.filmweb.pl/api?');

_defineProperty(Config, "_APPID", "android");

_defineProperty(Config, "_APP_VERSION", "1.0");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWcudHMiXSwibmFtZXMiOlsiQ29uZmlnIiwiaW5kZXgiLCJJTUFHRV9TRVJWRVJTIiwibGVuZ3RoIiwiX0lNQUdFX1NFUlZFUlMiLCJfQVBQX1ZFUlNJT04iLCJfQVBQSUQiLCJfQVBJX1NFUlZFUiIsIl9BUFBfS0VZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLE07Ozs7Ozs7OzttQ0FnQjhCO0FBQUEsVUFBM0JDLEtBQTJCLHVFQUFYLENBQVc7QUFDM0NBLE1BQUFBLEtBQUssR0FBR0EsS0FBSyxHQUFHRCxNQUFNLENBQUNFLGFBQVAsQ0FBcUJDLE1BQXJDO0FBQ0EsYUFBTyxLQUFLQyxjQUFMLENBQW9CSCxLQUFwQixDQUFQO0FBQ0g7Ozt3QkFsQmdDO0FBQzdCLGFBQU8sS0FBS0ksWUFBWjtBQUNIOzs7d0JBQzBCO0FBQ3ZCLGFBQU8sS0FBS0MsTUFBWjtBQUNIOzs7d0JBQytCO0FBQzVCLGFBQU8sS0FBS0MsV0FBWjtBQUNIOzs7d0JBQzRCO0FBQ3pCLGFBQU8sS0FBS0MsUUFBWjtBQUNIOzs7d0JBQ29DO0FBQ2pDLGFBQU8sS0FBS0osY0FBWjtBQUNIOzs7Ozs7OztnQkFmZ0JKLE0sb0JBb0JlLENBQzVCLG9CQUQ0QixFQUU1QixvQkFGNEIsRUFHNUIsb0JBSDRCLEVBSTVCLDRCQUo0QixDOztnQkFwQmZBLE0sY0EwQlMsNkI7O2dCQTFCVEEsTSxpQkEyQlksNkI7O2dCQTNCWkEsTSxZQTRCTyxTOztnQkE1QlBBLE0sa0JBNkJhLEsiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWcge1xyXG4gICAgc3RhdGljIGdldCBBUFBfVkVSU0lPTigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9BUFBfVkVSU0lPTjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgQVBQSUQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQVBQSUQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0IEFQSV9TRVJWRVIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQVBJX1NFUlZFUjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgQVBQX0tFWSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9BUFBfS0VZO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBJTUFHRV9TRVJWRVJTKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSU1BR0VfU0VSVkVSUztcclxuICAgIH1cclxuICAgIHN0YXRpYyBJTUFHRV9TRVJWRVIoaW5kZXg6IG51bWJlciA9IDApOiBzdHJpbmcge1xyXG4gICAgICAgIGluZGV4ID0gaW5kZXggJSBDb25maWcuSU1BR0VfU0VSVkVSUy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0lNQUdFX1NFUlZFUlNbaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0lNQUdFX1NFUlZFUlMgPSBbXHJcbiAgICAgICAgXCJodHRwczovLzEuZndjZG4ucGxcIixcclxuICAgICAgICBcImh0dHBzOi8vMi5md2Nkbi5wbFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly8zLmZ3Y2RuLnBsXCIsXHJcbiAgICAgICAgXCJodHRwczovL3NzbC1nZnguZmlsbXdlYi5wbFwiXHJcbiAgICBdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FQUF9LRVkgPSAncWpjR2hXMkpudkdUOWRmQ3QzdVRfam96UjNzJztcclxuICAgIHByaXZhdGUgc3RhdGljIF9BUElfU0VSVkVSID0gJ2h0dHBzOi8vc3NsLmZpbG13ZWIucGwvYXBpPyc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQVBQSUQgPSBcImFuZHJvaWRcIjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9BUFBfVkVSU0lPTiA9IFwiMS4wXCI7XHJcbn0iXX0=