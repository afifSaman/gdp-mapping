angular.module('SvgMapApp').filter('map_colour', [function () {
    return function (input) {
        if (input >= 10000000) {
          return '#008000'
        }
        else if (input >= 5000000 && input < 10000000) {
          return '#008080'
        }
        else if (input >= 1000000 && input < 5000000) {
          return '#0000FF'
        }
        else if (input >= 500000 && input < 1000000) {
          return '#00FFFF'
        }
        else if (input >= 100000 && input < 500000) {
          return '#FF00FF'
        }
        else if (input >= 50000 && input < 100000) {
          return '#FF5733'
        }
        else if (input >= 10000 && input < 50000) {
          return '#FFFF00'
        }
        else if (input >= 5000 && input < 10000) {
          return '#800000'
        }
        else if (input >= 1000 && input < 10000) {
          return '#FF0000'
        }
        return '#CCCCCC'
    }
}]);

angular.module('SvgMapApp').filter('heat_colour', [function () {
    return function (input) {
      console.log(input);
        if (input >= 80) {
          return '#B22222'
        }
        else if (input >= 70 && input < 80) {
          return '#8B0000'
        }
        else if (input >= 60 && input < 70) {
          return '#FF7F50'
        }
        else if (input >= 40 && input < 50) {
          return '#FF6347'
        }
        else if (input >= 20 && input < 30) {
          return '#FF4500'
        }
        else if (input >= 10 && input < 20) {
          return '#FF8C00'
        }
        return '#FFA500'
    }
}]);
