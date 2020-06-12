"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiveSearchDataModel = exports.LiveSearchResponseModel = void 0;

var _Helper = _interopRequireDefault(require("../Helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LiveSearchResponseModel =
/*#__PURE__*/
function () {
  // f - film, s - serial, g - gra
  // number id na filmwebie
  // poster typu 6
  // tytuł angielski
  // tytuł polski
  // inny tytuł
  // rok produkcji
  // 2 głównych aktorów w postaci tekstu
  function LiveSearchResponseModel() {
    _classCallCheck(this, LiveSearchResponseModel);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "poster", void 0);

    _defineProperty(this, "title", void 0);

    _defineProperty(this, "title2", void 0);

    _defineProperty(this, "title3", void 0);

    _defineProperty(this, "year", void 0);

    _defineProperty(this, "starsStr", void 0);

    _defineProperty(this, "_data", void 0);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.type = args[0];
    this.id = args[1];
    this.poster = args[2];
    this.title = args[3];
    this.title2 = args[4];
    this.title3 = args[5];
    this.year = args[6];
    this.starsStr = args[7];
    this._data = this.fetchData();
  }

  _createClass(LiveSearchResponseModel, [{
    key: "fetchData",
    value: function fetchData() {
      return new LiveSearchDataModel(this.id, this.type, _Helper["default"].getAllPosters(this.poster), _Helper["default"].generateLink(this.title2, this.year, this.id), this.starsStr ? this.starsStr.split(', ') : '', this.title, this.title2, this.year);
    }
  }, {
    key: "getData",
    value: function getData() {
      return this._data;
    }
  }]);

  return LiveSearchResponseModel;
}();

exports.LiveSearchResponseModel = LiveSearchResponseModel;

var LiveSearchDataModel = function LiveSearchDataModel(id, type, images, link, stars, title, title2, year) {
  _classCallCheck(this, LiveSearchDataModel);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "type", void 0);

  _defineProperty(this, "images", void 0);

  _defineProperty(this, "link", void 0);

  _defineProperty(this, "stars", void 0);

  _defineProperty(this, "title", void 0);

  _defineProperty(this, "title2", void 0);

  _defineProperty(this, "year", void 0);

  this.id = id;
  this.type = type;
  this.images = images;
  this.link = link;
  this.stars = stars;
  this.title = title;
  this.title2 = title2;
  this.year = year;
};

exports.LiveSearchDataModel = LiveSearchDataModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvTGl2ZVNlYXJjaE1vZGVsLnRzIl0sIm5hbWVzIjpbIkxpdmVTZWFyY2hSZXNwb25zZU1vZGVsIiwiYXJncyIsInR5cGUiLCJpZCIsInBvc3RlciIsInRpdGxlIiwidGl0bGUyIiwidGl0bGUzIiwieWVhciIsInN0YXJzU3RyIiwiX2RhdGEiLCJmZXRjaERhdGEiLCJMaXZlU2VhcmNoRGF0YU1vZGVsIiwiSGVscGVyIiwiZ2V0QWxsUG9zdGVycyIsImdlbmVyYXRlTGluayIsInNwbGl0IiwiaW1hZ2VzIiwibGluayIsInN0YXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVhQSx1Qjs7O0FBQ21CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJNUIscUNBQTRCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsc0NBQWJDLElBQWE7QUFBYkEsTUFBQUEsSUFBYTtBQUFBOztBQUVwQixTQUFLQyxJQUZlLEdBVXBCRCxJQVZvQjtBQUdwQixTQUFLRSxFQUhlLEdBVXBCRixJQVZvQjtBQUlwQixTQUFLRyxNQUplLEdBVXBCSCxJQVZvQjtBQUtwQixTQUFLSSxLQUxlLEdBVXBCSixJQVZvQjtBQU1wQixTQUFLSyxNQU5lLEdBVXBCTCxJQVZvQjtBQU9wQixTQUFLTSxNQVBlLEdBVXBCTixJQVZvQjtBQVFwQixTQUFLTyxJQVJlLEdBVXBCUCxJQVZvQjtBQVNwQixTQUFLUSxRQVRlLEdBVXBCUixJQVZvQjtBQVd4QixTQUFLUyxLQUFMLEdBQWEsS0FBS0MsU0FBTCxFQUFiO0FBQ0g7Ozs7Z0NBRW1DO0FBQ2hDLGFBQU8sSUFBSUMsbUJBQUosQ0FDSCxLQUFLVCxFQURGLEVBRUgsS0FBS0QsSUFGRixFQUdIVyxtQkFBT0MsYUFBUCxDQUFxQixLQUFLVixNQUExQixDQUhHLEVBSUhTLG1CQUFPRSxZQUFQLENBQW9CLEtBQUtULE1BQXpCLEVBQWlDLEtBQUtFLElBQXRDLEVBQTRDLEtBQUtMLEVBQWpELENBSkcsRUFLSCxLQUFLTSxRQUFMLENBQWNPLEtBQWQsQ0FBb0IsSUFBcEIsQ0FMRyxFQU1ILEtBQUtYLEtBTkYsRUFPSCxLQUFLQyxNQVBGLEVBUUgsS0FBS0UsSUFSRixDQUFQO0FBVUg7Ozs4QkFFZ0M7QUFDN0IsYUFBTyxLQUFLRSxLQUFaO0FBQ0g7Ozs7Ozs7O0lBR1FFLG1CLEdBVVQsNkJBQVlULEVBQVosRUFBd0JELElBQXhCLEVBQXNDZSxNQUF0QyxFQUF3REMsSUFBeEQsRUFBc0VDLEtBQXRFLEVBQXVGZCxLQUF2RixFQUFzR0MsTUFBdEcsRUFBc0hFLElBQXRILEVBQW9JO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2hJLE9BQUtMLEVBQUwsR0FBVUEsRUFBVjtBQUNBLE9BQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtlLE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtkLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUtFLElBQUwsR0FBWUEsSUFBWjtBQUNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpdmVTZWFyY2hEYXRhLCBMaXZlU2VhcmNoUmVzcG9uc2V9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0xpdmVTZWFyY2hcIjtcclxuaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vSGVscGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGl2ZVNlYXJjaFJlc3BvbnNlTW9kZWwgaW1wbGVtZW50cyBMaXZlU2VhcmNoUmVzcG9uc2Uge1xyXG4gICAgcHJpdmF0ZSB0eXBlOiBzdHJpbmc7ICAgICAgIC8vIGYgLSBmaWxtLCBzIC0gc2VyaWFsLCBnIC0gZ3JhXHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7ICAgICAgICAgLy8gbnVtYmVyIGlkIG5hIGZpbG13ZWJpZVxyXG4gICAgcHJpdmF0ZSBwb3N0ZXI6IHN0cmluZzsgICAgIC8vIHBvc3RlciB0eXB1IDZcclxuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZzsgICAgICAvLyB0eXR1xYIgYW5naWVsc2tpXHJcbiAgICBwcml2YXRlIHRpdGxlMjogc3RyaW5nOyAgICAgLy8gdHl0dcWCIHBvbHNraVxyXG4gICAgcHJpdmF0ZSB0aXRsZTM6IHN0cmluZzsgICAgIC8vIGlubnkgdHl0dcWCXHJcbiAgICBwcml2YXRlIHllYXI6IG51bWJlcjsgICAgICAgLy8gcm9rIHByb2R1a2NqaVxyXG4gICAgcHJpdmF0ZSBzdGFyc1N0cjogc3RyaW5nOyAgIC8vIDIgZ8WCw7N3bnljaCBha3RvcsOzdyB3IHBvc3RhY2kgdGVrc3R1XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF0YTogTGl2ZVNlYXJjaERhdGE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHRoaXMudHlwZSxcclxuICAgICAgICAgICAgdGhpcy5pZCxcclxuICAgICAgICAgICAgdGhpcy5wb3N0ZXIsXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUyLFxyXG4gICAgICAgICAgICB0aGlzLnRpdGxlMyxcclxuICAgICAgICAgICAgdGhpcy55ZWFyLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXJzU3RyXHJcbiAgICAgICAgXSA9IGFyZ3M7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuZmV0Y2hEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmZXRjaERhdGEoKTogTGl2ZVNlYXJjaERhdGEge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGl2ZVNlYXJjaERhdGFNb2RlbChcclxuICAgICAgICAgICAgdGhpcy5pZCxcclxuICAgICAgICAgICAgdGhpcy50eXBlLFxyXG4gICAgICAgICAgICBIZWxwZXIuZ2V0QWxsUG9zdGVycyh0aGlzLnBvc3RlciksXHJcbiAgICAgICAgICAgIEhlbHBlci5nZW5lcmF0ZUxpbmsodGhpcy50aXRsZTIsIHRoaXMueWVhciwgdGhpcy5pZCksXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnNTdHIuc3BsaXQoJywgJyksXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUyLFxyXG4gICAgICAgICAgICB0aGlzLnllYXJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRhKCk6IExpdmVTZWFyY2hEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpdmVTZWFyY2hEYXRhTW9kZWwgaW1wbGVtZW50cyBMaXZlU2VhcmNoRGF0YSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgaW1hZ2VzOiBzdHJpbmdbXTtcclxuICAgIGxpbms6IHN0cmluZztcclxuICAgIHN0YXJzOiBzdHJpbmdbXTtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0aXRsZTI6IHN0cmluZztcclxuICAgIHllYXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIGltYWdlczogc3RyaW5nW10sIGxpbms6IHN0cmluZywgc3RhcnM6IHN0cmluZ1tdLCB0aXRsZTogc3RyaW5nLCB0aXRsZTI6IHN0cmluZywgeWVhcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XHJcbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcclxuICAgICAgICB0aGlzLnN0YXJzID0gc3RhcnM7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMudGl0bGUyID0gdGl0bGUyO1xyXG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XHJcbiAgICB9XHJcbn0iXX0=