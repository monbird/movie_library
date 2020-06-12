"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Helper = _interopRequireDefault(require("../Helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @TODO: zmiana nazwy
var Film = function Film() {
  _classCallCheck(this, Film);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "title", void 0);

  _defineProperty(this, "title2", void 0);

  _defineProperty(this, "rating", void 0);

  _defineProperty(this, "rateCount", void 0);

  _defineProperty(this, "genres", void 0);

  _defineProperty(this, "year", void 0);

  _defineProperty(this, "minutes", void 0);

  _defineProperty(this, "forumLink", void 0);

  _defineProperty(this, "isReleasedInPoland", void 0);

  _defineProperty(this, "isReleasedWorldly", void 0);

  _defineProperty(this, "images", void 0);

  _defineProperty(this, "_posterLink", void 0);

  _defineProperty(this, "trailerPosterLink", void 0);

  _defineProperty(this, "trailerVideoLink", void 0);

  _defineProperty(this, "releaseWorldDate", void 0);

  _defineProperty(this, "releasePolandData", void 0);

  _defineProperty(this, "isSeries", void 0);

  _defineProperty(this, "seasonCount", void 0);

  _defineProperty(this, "episodesCount", void 0);

  _defineProperty(this, "productionCountry", void 0);

  _defineProperty(this, "description", void 0);

  _defineProperty(this, "link", void 0);

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  this.id = args[0];
  this.title = args[1];
  this.title2 = args[2];
  this.rating = args[3];
  this.rateCount = args[4];
  this.genres = args[5];
  this.year = args[6];
  this.minutes = args[7];
  this.forumLink = args[8];
  this.isReleasedInPoland = args[9];
  this.isReleasedWorldly = args[10];
  this._posterLink = args[11];
  this.trailerPosterLink = args[12];
  this.trailerVideoLink = args[13];
  this.releaseWorldDate = args[14];
  this.releasePolandData = args[15];
  this.isSeries = args[16];
  this.seasonCount = args[17];
  this.episodesCount = args[18];
  this.productionCountry = args[19];
  this.description = args[20];
  this.images = _Helper["default"].getAllPosters(this._posterLink);
  this.link = _Helper["default"].generateLink(this.title2, this.year, this.id);
};

exports["default"] = Film;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRmlsbS50cyJdLCJuYW1lcyI6WyJGaWxtIiwiYXJncyIsImlkIiwidGl0bGUiLCJ0aXRsZTIiLCJyYXRpbmciLCJyYXRlQ291bnQiLCJnZW5yZXMiLCJ5ZWFyIiwibWludXRlcyIsImZvcnVtTGluayIsImlzUmVsZWFzZWRJblBvbGFuZCIsImlzUmVsZWFzZWRXb3JsZGx5IiwiX3Bvc3RlckxpbmsiLCJ0cmFpbGVyUG9zdGVyTGluayIsInRyYWlsZXJWaWRlb0xpbmsiLCJyZWxlYXNlV29ybGREYXRlIiwicmVsZWFzZVBvbGFuZERhdGEiLCJpc1NlcmllcyIsInNlYXNvbkNvdW50IiwiZXBpc29kZXNDb3VudCIsInByb2R1Y3Rpb25Db3VudHJ5IiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJIZWxwZXIiLCJnZXRBbGxQb3N0ZXJzIiwibGluayIsImdlbmVyYXRlTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBO0lBQ3FCQSxJLEdBeUJqQixnQkFBNEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxvQ0FBYkMsSUFBYTtBQUFiQSxJQUFBQSxJQUFhO0FBQUE7O0FBRXBCLE9BQUtDLEVBRmUsR0F1QnBCRCxJQXZCb0I7QUFHcEIsT0FBS0UsS0FIZSxHQXVCcEJGLElBdkJvQjtBQUlwQixPQUFLRyxNQUplLEdBdUJwQkgsSUF2Qm9CO0FBS3BCLE9BQUtJLE1BTGUsR0F1QnBCSixJQXZCb0I7QUFNcEIsT0FBS0ssU0FOZSxHQXVCcEJMLElBdkJvQjtBQU9wQixPQUFLTSxNQVBlLEdBdUJwQk4sSUF2Qm9CO0FBUXBCLE9BQUtPLElBUmUsR0F1QnBCUCxJQXZCb0I7QUFTcEIsT0FBS1EsT0FUZSxHQXVCcEJSLElBdkJvQjtBQVVwQixPQUFLUyxTQVZlLEdBdUJwQlQsSUF2Qm9CO0FBV3BCLE9BQUtVLGtCQVhlLEdBdUJwQlYsSUF2Qm9CO0FBWXBCLE9BQUtXLGlCQVplLEdBdUJwQlgsSUF2Qm9CO0FBYXBCLE9BQUtZLFdBYmUsR0F1QnBCWixJQXZCb0I7QUFjcEIsT0FBS2EsaUJBZGUsR0F1QnBCYixJQXZCb0I7QUFlcEIsT0FBS2MsZ0JBZmUsR0F1QnBCZCxJQXZCb0I7QUFnQnBCLE9BQUtlLGdCQWhCZSxHQXVCcEJmLElBdkJvQjtBQWlCcEIsT0FBS2dCLGlCQWpCZSxHQXVCcEJoQixJQXZCb0I7QUFrQnBCLE9BQUtpQixRQWxCZSxHQXVCcEJqQixJQXZCb0I7QUFtQnBCLE9BQUtrQixXQW5CZSxHQXVCcEJsQixJQXZCb0I7QUFvQnBCLE9BQUttQixhQXBCZSxHQXVCcEJuQixJQXZCb0I7QUFxQnBCLE9BQUtvQixpQkFyQmUsR0F1QnBCcEIsSUF2Qm9CO0FBc0JwQixPQUFLcUIsV0F0QmUsR0F1QnBCckIsSUF2Qm9CO0FBeUJ4QixPQUFLc0IsTUFBTCxHQUFjQyxtQkFBT0MsYUFBUCxDQUFxQixLQUFLWixXQUExQixDQUFkO0FBQ0EsT0FBS2EsSUFBTCxHQUFZRixtQkFBT0csWUFBUCxDQUFvQixLQUFLdkIsTUFBekIsRUFBaUMsS0FBS0ksSUFBdEMsRUFBNEMsS0FBS04sRUFBakQsQ0FBWjtBQUNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVscGVyIGZyb20gXCIuLi9IZWxwZXJcIjtcclxuXHJcbi8vIEBUT0RPOiB6bWlhbmEgbmF6d3lcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsbSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRpdGxlMjogc3RyaW5nO1xyXG4gICAgcmF0aW5nOiBudW1iZXI7XHJcbiAgICByYXRlQ291bnQ6IG51bWJlcjtcclxuICAgIGdlbnJlczogc3RyaW5nW107XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcbiAgICBtaW51dGVzOiBudW1iZXI7XHJcbiAgICBmb3J1bUxpbms6IHN0cmluZztcclxuICAgIGlzUmVsZWFzZWRJblBvbGFuZDogYm9vbGVhbjtcclxuICAgIGlzUmVsZWFzZWRXb3JsZGx5OiBib29sZWFuO1xyXG4gICAgaW1hZ2VzOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgX3Bvc3Rlckxpbms6IHN0cmluZztcclxuICAgIHRyYWlsZXJQb3N0ZXJMaW5rOiBzdHJpbmc7XHJcbiAgICB0cmFpbGVyVmlkZW9MaW5rOiBzdHJpbmc7XHJcbiAgICByZWxlYXNlV29ybGREYXRlOiBzdHJpbmc7XHJcbiAgICByZWxlYXNlUG9sYW5kRGF0YTogc3RyaW5nO1xyXG4gICAgaXNTZXJpZXM6IGJvb2xlYW47XHJcbiAgICBzZWFzb25Db3VudDogbnVtYmVyO1xyXG4gICAgZXBpc29kZXNDb3VudDogbnVtYmVyO1xyXG4gICAgcHJvZHVjdGlvbkNvdW50cnk6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHRoaXMuaWQsXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUyLFxyXG4gICAgICAgICAgICB0aGlzLnJhdGluZyxcclxuICAgICAgICAgICAgdGhpcy5yYXRlQ291bnQsXHJcbiAgICAgICAgICAgIHRoaXMuZ2VucmVzLFxyXG4gICAgICAgICAgICB0aGlzLnllYXIsXHJcbiAgICAgICAgICAgIHRoaXMubWludXRlcyxcclxuICAgICAgICAgICAgdGhpcy5mb3J1bUxpbmssXHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWxlYXNlZEluUG9sYW5kLFxyXG4gICAgICAgICAgICB0aGlzLmlzUmVsZWFzZWRXb3JsZGx5LFxyXG4gICAgICAgICAgICB0aGlzLl9wb3N0ZXJMaW5rLFxyXG4gICAgICAgICAgICB0aGlzLnRyYWlsZXJQb3N0ZXJMaW5rLFxyXG4gICAgICAgICAgICB0aGlzLnRyYWlsZXJWaWRlb0xpbmssXHJcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZVdvcmxkRGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlUG9sYW5kRGF0YSxcclxuICAgICAgICAgICAgdGhpcy5pc1NlcmllcyxcclxuICAgICAgICAgICAgdGhpcy5zZWFzb25Db3VudCxcclxuICAgICAgICAgICAgdGhpcy5lcGlzb2Rlc0NvdW50LFxyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb25Db3VudHJ5LFxyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgXSA9IGFyZ3M7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gSGVscGVyLmdldEFsbFBvc3RlcnModGhpcy5fcG9zdGVyTGluayk7XHJcbiAgICAgICAgdGhpcy5saW5rID0gSGVscGVyLmdlbmVyYXRlTGluayh0aGlzLnRpdGxlMiwgdGhpcy55ZWFyLCB0aGlzLmlkKTtcclxuICAgIH1cclxufSJdfQ==