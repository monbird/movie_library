"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _md = _interopRequireDefault(require("crypto-js/md5"));

var _axios = _interopRequireDefault(require("axios"));

var _Config = _interopRequireDefault(require("./Config"));

var _LiveSearch = _interopRequireDefault(require("./LiveSearch"));

var _Film = _interopRequireDefault(require("./models/Film"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Filmweb =
/*#__PURE__*/
function () {
  function Filmweb() {
    _classCallCheck(this, Filmweb);

    _defineProperty(this, "getFilmShortData", function (query) {
      return _LiveSearch["default"].searchFirst(query);
    });

    _defineProperty(this, "getLiveSearchData", function (query) {
      return _LiveSearch["default"].search(query);
    });
  }

  _createClass(Filmweb, [{
    key: "getFilmData",
    // @TODO: standaryzacja errorów dla api filmwebu
    value: function getFilmData(filmId) {
      return new Promise(function (resolve, reject) {
        _axios["default"].get(_Config["default"].API_SERVER + Filmweb.prepareQuery("getFilmInfoFull [" + filmId + "]")).then(function (result) {
          var _result$data$split = result.data.split('\n'),
              _result$data$split2 = _slicedToArray(_result$data$split, 2),
              status = _result$data$split2[0],
              data = _result$data$split2[1];

          //var json = JSON.parse(data.replace(/t:.*/, ''));
          var json = JSON.parse(data.replace(/\] t:.*/, ']'));
          resolve(_construct(_Film["default"], [filmId, // id
          json[0] == null ? "" : json[0], // title1
          json[1] == null ? "" : json[1], // title2
          json[2], // rating
          json[3], // rateCount
          json[4].split(','), // genres
          json[5], // year
          json[6], // minutes
          json[8], // forumLink
          json[9], // isReleasedInPoland
          json[10], // isReleasedWorldly
          json[11], // posterLink
       //   json[12][0] == undefined ? "" : json[12][0], // trailerPosterLink
      //    json[12][1] == undefined ? "" : json[12][1], // trailerVideoLink
          json[13], // releaseWorldDate
          json[14], // releasePolandData
          json[15], // isSeries
          json[16], // seasonCount
          json[17], // episodesCount
          json[18], // productionCountry
          json[19] //description
          ]));
        });
      });
    }
  }], [{
    key: "prepareQuery",
    // // @TODO: ogarnąć typ genres
    // static get genres(): string[] {
    //     return genres;
    // }
    //
    // public static getGenre = (id: number): string => genres[id];
    value: function prepareQuery(method) {
      var signature = _Config["default"].APP_VERSION + "," + (0, _md["default"])(method + "\\n" + _Config["default"].APPID + _Config["default"].APP_KEY);
      return "methods=" + encodeURI(method + "\\n") + "&signature=" + encodeURI(signature) + "&version=" + encodeURI(_Config["default"].APP_VERSION) + "&appId=" + encodeURI(_Config["default"].APPID);
    }
  }]);

  return Filmweb;
}();

exports["default"] = Filmweb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GaWxtd2ViLnRzIl0sIm5hbWVzIjpbIkZpbG13ZWIiLCJxdWVyeSIsIkxpdmVTZWFyY2giLCJzZWFyY2hGaXJzdCIsInNlYXJjaCIsImZpbG1JZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJnZXQiLCJDb25maWciLCJBUElfU0VSVkVSIiwicHJlcGFyZVF1ZXJ5IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJzcGxpdCIsInN0YXR1cyIsImpzb24iLCJKU09OIiwicGFyc2UiLCJyZXBsYWNlIiwiRmlsbSIsInVuZGVmaW5lZCIsIm1ldGhvZCIsInNpZ25hdHVyZSIsIkFQUF9WRVJTSU9OIiwiQVBQSUQiLCJBUFBfS0VZIiwiZW5jb2RlVVJJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7OENBcURTLFVBQUNDLEtBQUQ7QUFBQSxhQUE0Q0MsdUJBQVdDLFdBQVgsQ0FBdUJGLEtBQXZCLENBQTVDO0FBQUEsSzs7K0NBQ0MsVUFBQ0EsS0FBRDtBQUFBLGFBQThDQyx1QkFBV0UsTUFBWCxDQUFrQkgsS0FBbEIsQ0FBOUM7QUFBQSxLOzs7OztBQXJDM0I7Z0NBQ21CSSxNLEVBQStCO0FBQzlDLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsMEJBQU1DLEdBQU4sQ0FDSUMsbUJBQU9DLFVBQVAsR0FDQVosT0FBTyxDQUFDYSxZQUFSLENBQXFCLHNCQUFzQlIsTUFBdEIsR0FBK0IsR0FBcEQsQ0FGSixFQUdFUyxJQUhGLENBR08sVUFBQUMsTUFBTSxFQUFJO0FBQUEsbUNBQ1VBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUFaLENBQWtCLElBQWxCLENBRFY7QUFBQTtBQUFBLGNBQ05DLE1BRE07QUFBQSxjQUNFRixJQURGOztBQUViLGNBQU1HLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLElBQUksQ0FBQ00sT0FBTCxDQUFhLE1BQWIsRUFBcUIsRUFBckIsQ0FBWCxDQUFiO0FBQ0FmLFVBQUFBLE9BQU8sWUFBS2dCLGdCQUFMLEVBQWEsQ0FDaEJsQixNQURnQixFQUNnQjtBQUNoQ2MsVUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXLElBQVgsR0FBa0IsRUFBbEIsR0FBdUJBLElBQUksQ0FBQyxDQUFELENBRlgsRUFFZ0I7QUFDaENBLFVBQUFBLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxJQUFYLEdBQWtCLEVBQWxCLEdBQXVCQSxJQUFJLENBQUMsQ0FBRCxDQUhYLEVBR2dCO0FBQ2hDQSxVQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUpZLEVBSWdCO0FBQ2hDQSxVQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUxZLEVBS2dCO0FBQ2hDQSxVQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFGLEtBQVIsQ0FBYyxHQUFkLENBTmdCLEVBTVE7QUFDeEJFLFVBQUFBLElBQUksQ0FBQyxDQUFELENBUFksRUFPZ0I7QUFDaENBLFVBQUFBLElBQUksQ0FBQyxDQUFELENBUlksRUFRZ0I7QUFDaENBLFVBQUFBLElBQUksQ0FBQyxDQUFELENBVFksRUFTZ0I7QUFDaENBLFVBQUFBLElBQUksQ0FBQyxDQUFELENBVlksRUFVZ0I7QUFDaENBLFVBQUFBLElBQUksQ0FBQyxFQUFELENBWFksRUFXZ0I7QUFDaENBLFVBQUFBLElBQUksQ0FBQyxFQUFELENBWlksRUFZZ0I7QUFDaENBLFVBQUFBLElBQUksQ0FBQyxFQUFELENBQUosQ0FBUyxDQUFULEtBQWVLLFNBQWYsR0FBMkIsRUFBM0IsR0FBZ0NMLElBQUksQ0FBQyxFQUFELENBQUosQ0FBUyxDQUFULENBYmhCLEVBYTZCO0FBQzdDQSxVQUFBQSxJQUFJLENBQUMsRUFBRCxDQUFKLENBQVMsQ0FBVCxLQUFlSyxTQUFmLEdBQTJCLEVBQTNCLEdBQWdDTCxJQUFJLENBQUMsRUFBRCxDQUFKLENBQVMsQ0FBVCxDQWRoQixFQWM2QjtBQUM3Q0EsVUFBQUEsSUFBSSxDQUFDLEVBQUQsQ0FmWSxFQWVKO0FBQ1pBLFVBQUFBLElBQUksQ0FBQyxFQUFELENBaEJZLEVBZ0JKO0FBQ1pBLFVBQUFBLElBQUksQ0FBQyxFQUFELENBakJZLEVBaUJKO0FBQ1pBLFVBQUFBLElBQUksQ0FBQyxFQUFELENBbEJZLEVBa0JKO0FBQ1pBLFVBQUFBLElBQUksQ0FBQyxFQUFELENBbkJZLEVBbUJKO0FBQ1pBLFVBQUFBLElBQUksQ0FBQyxFQUFELENBcEJZLEVBb0JKO0FBQ1pBLFVBQUFBLElBQUksQ0FBQyxFQUFELENBckJZLENBcUJKO0FBckJJLFdBQWIsRUFBUDtBQXVCSCxTQTdCRDtBQThCSCxPQS9CTSxDQUFQO0FBZ0NIOzs7QUFsREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2lDQUU0Qk0sTSxFQUF3QjtBQUNoRCxVQUFNQyxTQUFTLEdBQUdmLG1CQUFPZ0IsV0FBUCxHQUFxQixHQUFyQixHQUEyQixvQkFBSUYsTUFBTSxHQUFHLEtBQVQsR0FBaUJkLG1CQUFPaUIsS0FBeEIsR0FBZ0NqQixtQkFBT2tCLE9BQTNDLENBQTdDO0FBRUEsYUFBTyxhQUFhQyxTQUFTLENBQUNMLE1BQU0sR0FBRyxLQUFWLENBQXRCLEdBQ0QsYUFEQyxHQUNlSyxTQUFTLENBQUNKLFNBQUQsQ0FEeEIsR0FFRCxXQUZDLEdBRWFJLFNBQVMsQ0FBQ25CLG1CQUFPZ0IsV0FBUixDQUZ0QixHQUdELFNBSEMsR0FHV0csU0FBUyxDQUFDbkIsbUJBQU9pQixLQUFSLENBSDNCO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTUQ1IGZyb20gJ2NyeXB0by1qcy9tZDUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCBnZW5yZXMgZnJvbSAnLi9zdGF0aWMvZ2VucmVzLmpzb24nO1xyXG5cclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IHtMaXZlU2VhcmNoRGF0YX0gZnJvbSBcIi4vaW50ZXJmYWNlcy9MaXZlU2VhcmNoXCI7XHJcbmltcG9ydCBMaXZlU2VhcmNoIGZyb20gXCIuL0xpdmVTZWFyY2hcIjtcclxuaW1wb3J0IEZpbG0gZnJvbSBcIi4vbW9kZWxzL0ZpbG1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbG13ZWIge1xyXG4gICAgLy8gLy8gQFRPRE86IG9nYXJuxIXEhyB0eXAgZ2VucmVzXHJcbiAgICAvLyBzdGF0aWMgZ2V0IGdlbnJlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGdlbnJlcztcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGdldEdlbnJlID0gKGlkOiBudW1iZXIpOiBzdHJpbmcgPT4gZ2VucmVzW2lkXTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwcmVwYXJlUXVlcnkobWV0aG9kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IENvbmZpZy5BUFBfVkVSU0lPTiArIFwiLFwiICsgTUQ1KG1ldGhvZCArIFwiXFxcXG5cIiArIENvbmZpZy5BUFBJRCArIENvbmZpZy5BUFBfS0VZKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFwibWV0aG9kcz1cIiArIGVuY29kZVVSSShtZXRob2QgKyBcIlxcXFxuXCIpXHJcbiAgICAgICAgICAgICsgXCImc2lnbmF0dXJlPVwiICsgZW5jb2RlVVJJKHNpZ25hdHVyZSlcclxuICAgICAgICAgICAgKyBcIiZ2ZXJzaW9uPVwiICsgZW5jb2RlVVJJKENvbmZpZy5BUFBfVkVSU0lPTilcclxuICAgICAgICAgICAgKyBcIiZhcHBJZD1cIiArIGVuY29kZVVSSShDb25maWcuQVBQSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEBUT0RPOiBzdGFuZGFyeXphY2phIGVycm9yw7N3IGRsYSBhcGkgZmlsbXdlYnVcclxuICAgIHB1YmxpYyBnZXRGaWxtRGF0YShmaWxtSWQ6IG51bWJlcik6IFByb21pc2U8RmlsbT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChcclxuICAgICAgICAgICAgICAgIENvbmZpZy5BUElfU0VSVkVSICtcclxuICAgICAgICAgICAgICAgIEZpbG13ZWIucHJlcGFyZVF1ZXJ5KFwiZ2V0RmlsbUluZm9GdWxsIFtcIiArIGZpbG1JZCArIFwiXVwiKVxyXG4gICAgICAgICAgICApLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtzdGF0dXMsIGRhdGFdID0gcmVzdWx0LmRhdGEuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZGF0YS5yZXBsYWNlKC90Oi4qLywgJycpKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEZpbG0oLi4uW1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbG1JZCwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWRcclxuICAgICAgICAgICAgICAgICAgICBqc29uWzBdID09IG51bGwgPyBcIlwiIDoganNvblswXSwgLy8gdGl0bGUxXHJcbiAgICAgICAgICAgICAgICAgICAganNvblsxXSA9PSBudWxsID8gXCJcIiA6IGpzb25bMV0sIC8vIHRpdGxlMlxyXG4gICAgICAgICAgICAgICAgICAgIGpzb25bMl0sICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAganNvblszXSwgICAgICAgICAgICAgICAgICAgICAgICAvLyByYXRlQ291bnRcclxuICAgICAgICAgICAgICAgICAgICBqc29uWzRdLnNwbGl0KCcsJyksICAgICAvLyBnZW5yZXNcclxuICAgICAgICAgICAgICAgICAgICBqc29uWzVdLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIHllYXJcclxuICAgICAgICAgICAgICAgICAgICBqc29uWzZdLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pbnV0ZXNcclxuICAgICAgICAgICAgICAgICAgICBqc29uWzhdLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvcnVtTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb25bOV0sICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNSZWxlYXNlZEluUG9sYW5kXHJcbiAgICAgICAgICAgICAgICAgICAganNvblsxMF0sICAgICAgICAgICAgICAgICAgICAgICAvLyBpc1JlbGVhc2VkV29ybGRseVxyXG4gICAgICAgICAgICAgICAgICAgIGpzb25bMTFdLCAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9zdGVyTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb25bMTJdWzBdID09IHVuZGVmaW5lZCA/IFwiXCIgOiBqc29uWzEyXVswXSwgLy8gdHJhaWxlclBvc3RlckxpbmtcclxuICAgICAgICAgICAgICAgICAgICBqc29uWzEyXVsxXSA9PSB1bmRlZmluZWQgPyBcIlwiIDoganNvblsxMl1bMV0sIC8vIHRyYWlsZXJWaWRlb0xpbmtcclxuICAgICAgICAgICAgICAgICAgICBqc29uWzEzXSwgICAvLyByZWxlYXNlV29ybGREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAganNvblsxNF0sICAgLy8gcmVsZWFzZVBvbGFuZERhdGFcclxuICAgICAgICAgICAgICAgICAgICBqc29uWzE1XSwgICAvLyBpc1Nlcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb25bMTZdLCAgIC8vIHNlYXNvbkNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAganNvblsxN10sICAgLy8gZXBpc29kZXNDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIGpzb25bMThdLCAgIC8vIHByb2R1Y3Rpb25Db3VudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAganNvblsxOV0gICAgLy9kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgXSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RmlsbVNob3J0RGF0YSA9IChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxMaXZlU2VhcmNoRGF0YT4gPT4gTGl2ZVNlYXJjaC5zZWFyY2hGaXJzdChxdWVyeSk7XHJcbiAgICBwdWJsaWMgZ2V0TGl2ZVNlYXJjaERhdGEgPSAocXVlcnk6IHN0cmluZyk6IFByb21pc2U8TGl2ZVNlYXJjaERhdGFbXT4gPT4gTGl2ZVNlYXJjaC5zZWFyY2gocXVlcnkpO1xyXG59Il19
