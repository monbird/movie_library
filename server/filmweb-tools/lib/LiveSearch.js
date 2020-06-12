"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _LiveSearchModel = require("./models/LiveSearchModel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @TODO: standaryzacja errorów dla api filmwebu
var LiveSearch =
/*#__PURE__*/
function () {
  function LiveSearch() {
    _classCallCheck(this, LiveSearch);
  }

  _createClass(LiveSearch, null, [{
    key: "search",

    /**
     * Zwraca tablice elementów z wyszukiwarki filmwebu o podanej frazie
     * @param query
     */
    value: function search(query) {
      return new Promise(function (resolve, reject) {
        _axios["default"].get(LiveSearch.URL + encodeURI(query)).then(function (result) {
          try {
            resolve(result.data.split('\\a').map(function (record) {
              var data = record.split('\\c');
              try {
                data[1] = parseInt(data[1]);
              } catch (e) {
                data[1] = ''
              }
              try {
                data[6] = parseInt(data[6]);
              } catch (e) {
                data[6] = ''
              }
              return _construct(_LiveSearchModel.LiveSearchResponseModel, _toConsumableArray(data)).getData();
            }));
          } 
          catch (err) {
              reject(new Error(err));
          }
        })["catch"](function (err) {
          throw err;
        });
      });
    }
    /**
     * Zwraca pierwszy element z wyszukiwarki filmwebu o podanej frazie
     * @param query
     */

  }, {
    key: "searchFirst",
    value: function searchFirst(query) {
      return new Promise(function (resolve, reject) {
        _axios["default"].get(LiveSearch.URL + encodeURI(query)).then(function (result) {
          try {
            resolve(result.data.split('\\a').slice(0, 1).map(function (record) {
              var data = record.split('\\c');
              data[1] = parseInt(data[1]);
              data[6] = parseInt(data[6]);
              return _construct(_LiveSearchModel.LiveSearchResponseModel, _toConsumableArray(data)).getData();
            })[0]);
          } catch (err) {
            reject(new Error(err));
          }
        })["catch"](function (err) {
          throw err;
        });
      });
    }
  }]);

  return LiveSearch;
}();

exports["default"] = LiveSearch;

_defineProperty(LiveSearch, "URL", 'http://www.filmweb.pl/search/live?q=');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaXZlU2VhcmNoLnRzIl0sIm5hbWVzIjpbIkxpdmVTZWFyY2giLCJxdWVyeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJnZXQiLCJVUkwiLCJlbmNvZGVVUkkiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsInNwbGl0IiwibWFwIiwicmVjb3JkIiwicGFyc2VJbnQiLCJMaXZlU2VhcmNoUmVzcG9uc2VNb2RlbCIsImdldERhdGEiLCJlcnIiLCJFcnJvciIsInNsaWNlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQ3FCQSxVOzs7Ozs7Ozs7O0FBR2pCOzs7OzJCQUlxQkMsSyxFQUEwQztBQUMzRCxhQUFPLElBQUlDLE9BQUosQ0FBOEIsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3REQywwQkFBTUMsR0FBTixDQUFVTixVQUFVLENBQUNPLEdBQVgsR0FBaUJDLFNBQVMsQ0FBQ1AsS0FBRCxDQUFwQyxFQUE2Q1EsSUFBN0MsQ0FBa0QsVUFBQUMsTUFBTSxFQUFJO0FBQ3hELGNBQUk7QUFDQVAsWUFBQUEsT0FBTyxDQUFDTyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsS0FBWixDQUFrQixLQUFsQixFQUF5QkMsR0FBekIsQ0FBNkIsVUFBQ0MsTUFBRCxFQUFvQjtBQUNyRCxrQkFBTUgsSUFBVyxHQUFHRyxNQUFNLENBQUNGLEtBQVAsQ0FBYSxLQUFiLENBQXBCO0FBQ0FELGNBQUFBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUksUUFBUSxDQUFDSixJQUFJLENBQUMsQ0FBRCxDQUFMLENBQWxCO0FBQ0FBLGNBQUFBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUksUUFBUSxDQUFDSixJQUFJLENBQUMsQ0FBRCxDQUFMLENBQWxCO0FBQ0EscUJBQU8sV0FBSUssd0NBQUoscUJBQStCTCxJQUEvQixHQUFxQ00sT0FBckMsRUFBUDtBQUNILGFBTE8sQ0FBRCxDQUFQO0FBTUgsV0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNWZCxZQUFBQSxNQUFNLENBQUMsSUFBSWUsS0FBSixDQUFVRCxHQUFWLENBQUQsQ0FBTjtBQUNIO0FBQ0osU0FYRCxXQVdTLFVBQUFBLEdBQUcsRUFBSTtBQUNaLGdCQUFNQSxHQUFOO0FBQ0gsU0FiRDtBQWNILE9BZk0sQ0FBUDtBQWdCSDtBQUVEOzs7Ozs7O2dDQUkwQmpCLEssRUFBd0M7QUFDOUQsYUFBTyxJQUFJQyxPQUFKLENBQTRCLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwREMsMEJBQU1DLEdBQU4sQ0FBVU4sVUFBVSxDQUFDTyxHQUFYLEdBQWlCQyxTQUFTLENBQUNQLEtBQUQsQ0FBcEMsRUFBNkNRLElBQTdDLENBQWtELFVBQUFDLE1BQU0sRUFBSTtBQUN4RCxjQUFJO0FBQ0FQLFlBQUFBLE9BQU8sQ0FBQ08sTUFBTSxDQUFDQyxJQUFQLENBQVlDLEtBQVosQ0FBa0IsS0FBbEIsRUFBeUJRLEtBQXpCLENBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDUCxHQUFyQyxDQUF5QyxVQUFDQyxNQUFELEVBQW9CO0FBQ2pFLGtCQUFNSCxJQUFXLEdBQUdHLE1BQU0sQ0FBQ0YsS0FBUCxDQUFhLEtBQWIsQ0FBcEI7QUFDQUQsY0FBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVSSxRQUFRLENBQUNKLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBbEI7QUFDQUEsY0FBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVSSxRQUFRLENBQUNKLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBbEI7QUFDQSxxQkFBTyxXQUFJSyx3Q0FBSixxQkFBK0JMLElBQS9CLEdBQXFDTSxPQUFyQyxFQUFQO0FBQ0gsYUFMTyxFQUtMLENBTEssQ0FBRCxDQUFQO0FBTUgsV0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNWZCxZQUFBQSxNQUFNLENBQUMsSUFBSWUsS0FBSixDQUFVRCxHQUFWLENBQUQsQ0FBTjtBQUNIO0FBQ0osU0FYRCxXQVdTLFVBQUFBLEdBQUcsRUFBSTtBQUNaRyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXJCLEtBQVo7QUFDQSxnQkFBTWlCLEdBQU47QUFDSCxTQWREO0FBZUgsT0FoQk0sQ0FBUDtBQWlCSDs7Ozs7Ozs7Z0JBaERnQmxCLFUsU0FDSixzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtMaXZlU2VhcmNoUmVzcG9uc2VNb2RlbH0gZnJvbSBcIi4vbW9kZWxzL0xpdmVTZWFyY2hNb2RlbFwiO1xyXG5pbXBvcnQge0xpdmVTZWFyY2hEYXRhfSBmcm9tIFwiLi9pbnRlcmZhY2VzL0xpdmVTZWFyY2hcIjtcclxuXHJcbi8vIEBUT0RPOiBzdGFuZGFyeXphY2phIGVycm9yw7N3IGRsYSBhcGkgZmlsbXdlYnVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVNlYXJjaCB7XHJcbiAgICBzdGF0aWMgVVJMID0gJ2h0dHA6Ly93d3cuZmlsbXdlYi5wbC9zZWFyY2gvbGl2ZT9xPSc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBad3JhY2EgdGFibGljZSBlbGVtZW50w7N3IHogd3lzenVraXdhcmtpIGZpbG13ZWJ1IG8gcG9kYW5laiBmcmF6aWVcclxuICAgICAqIEBwYXJhbSBxdWVyeVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlYXJjaChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxMaXZlU2VhcmNoRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPExpdmVTZWFyY2hEYXRhW10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KExpdmVTZWFyY2guVVJMICsgZW5jb2RlVVJJKHF1ZXJ5KSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5kYXRhLnNwbGl0KCdcXFxcYScpLm1hcCgocmVjb3JkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YTogYW55W10gPSByZWNvcmQuc3BsaXQoJ1xcXFxjJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbMV0gPSBwYXJzZUludChkYXRhWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVs2XSA9IHBhcnNlSW50KGRhdGFbNl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpdmVTZWFyY2hSZXNwb25zZU1vZGVsKC4uLmRhdGEpLmdldERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycikpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogWndyYWNhIHBpZXJ3c3p5IGVsZW1lbnQgeiB3eXN6dWtpd2Fya2kgZmlsbXdlYnUgbyBwb2RhbmVqIGZyYXppZVxyXG4gICAgICogQHBhcmFtIHF1ZXJ5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VhcmNoRmlyc3QocXVlcnk6IHN0cmluZyk6IFByb21pc2U8TGl2ZVNlYXJjaERhdGE+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8TGl2ZVNlYXJjaERhdGE+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KExpdmVTZWFyY2guVVJMICsgZW5jb2RlVVJJKHF1ZXJ5KSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5kYXRhLnNwbGl0KCdcXFxcYScpLnNsaWNlKDAsIDEpLm1hcCgocmVjb3JkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YTogYW55W10gPSByZWNvcmQuc3BsaXQoJ1xcXFxjJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbMV0gPSBwYXJzZUludChkYXRhWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVs2XSA9IHBhcnNlSW50KGRhdGFbNl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpdmVTZWFyY2hSZXNwb25zZU1vZGVsKC4uLmRhdGEpLmdldERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVswXSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycikpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVyeSk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=