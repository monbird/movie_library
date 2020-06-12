"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "getAllPosters",
    value: function getAllPosters(poster) {
      var data = [];
      var split = poster.split('.');

      for (var i = 0, tmp = split; i < 6; i++) {
        tmp[1] = (i + 1).toString();
        data[i] = tmp.join('.');
      }

      return data;
    }
  }]);

  return Helper;
}();

exports["default"] = Helper;

_defineProperty(Helper, "generateLink", function (title2, year, id) {
  return 'https://www.filmweb.pl/film/' + encodeURI(title2) + '-' + year + '-' + id;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9IZWxwZXIudHMiXSwibmFtZXMiOlsiSGVscGVyIiwicG9zdGVyIiwiZGF0YSIsInNwbGl0IiwiaSIsInRtcCIsInRvU3RyaW5nIiwiam9pbiIsInRpdGxlMiIsInllYXIiLCJpZCIsImVuY29kZVVSSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxNOzs7Ozs7Ozs7a0NBQ1dDLE0sRUFBMEI7QUFDbEQsVUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQSxVQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBZDs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdDLEdBQUcsR0FBR0YsS0FBdEIsRUFBNkJDLENBQUMsR0FBRyxDQUFqQyxFQUFvQ0EsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQ0MsUUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUNELENBQUMsR0FBRyxDQUFMLEVBQVFFLFFBQVIsRUFBVDtBQUNBSixRQUFBQSxJQUFJLENBQUNFLENBQUQsQ0FBSixHQUFVQyxHQUFHLENBQUNFLElBQUosQ0FBUyxHQUFULENBQVY7QUFDSDs7QUFDRCxhQUFPTCxJQUFQO0FBQ0g7Ozs7Ozs7O2dCQVRnQkYsTSxrQkFXWSxVQUFDUSxNQUFELEVBQWlCQyxJQUFqQixFQUErQkMsRUFBL0I7QUFBQSxTQUFzRCxpQ0FBaUNDLFNBQVMsQ0FBQ0gsTUFBRCxDQUExQyxHQUFxRCxHQUFyRCxHQUEyREMsSUFBM0QsR0FBa0UsR0FBbEUsR0FBd0VDLEVBQTlIO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFsbFBvc3RlcnMocG9zdGVyOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBjb25zdCBzcGxpdCA9IHBvc3Rlci5zcGxpdCgnLicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCB0bXAgPSBzcGxpdDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICB0bXBbMV0gPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGRhdGFbaV0gPSB0bXAuam9pbignLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlTGluayA9ICh0aXRsZTI6IHN0cmluZywgeWVhcjogbnVtYmVyLCBpZDogbnVtYmVyKTogc3RyaW5nID0+ICdodHRwczovL3d3dy5maWxtd2ViLnBsL2ZpbG0vJyArIGVuY29kZVVSSSh0aXRsZTIpICsgJy0nICsgeWVhciArICctJyArIGlkO1xyXG59Il19