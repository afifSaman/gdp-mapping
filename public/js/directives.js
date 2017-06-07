angular.module('SvgMapApp').directive('svgMap', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    templateUrl: 'img/worldHigh.svg',
    link: function (scope, element, attrs) {
      // Create an array containing all elements of class “state” using
      var countries = element[0].querySelectorAll('.land');
      angular.forEach(countries, function(path) {
        // Wrap the country DOM element as an Angular jqLite element.
        var countryElement = angular.element(path);
        // Add the “country” attribute to the DOM element so it can be tied to the directive of the same name.
        countryElement.attr("country", "");
        countryElement.attr("country-data", "vm.countries");
        countryElement.attr("hover-country", "hoverCountry");
        // Compile the element so Angular can do it’s magic.
        $compile(countryElement)(scope);
      })
    }
  }
}]);

angular.module('SvgMapApp').directive('country', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: {
          countryData: '=',
          hoverCountry: '='
        },
        link: function (scope, element, attrs) {
            scope.elementId = element.attr("id");
            for (country of scope.countryData) {
              if(country.code === scope.elementId) {
                scope.gdp = country.GDP;
                scope.country = country.country;
              }
            }
            scope.countryClick = function () {
              if (!scope.country) {
                alert('Data not available');
              } else {
                alert(scope.country + ' GDP is ' + scope.gdp + ' millions USD');
              }
            };
            scope.countryMouseOver = function() {
              scope.hoverCountry = scope.elementId;
              element[0].parentNode.appendChild(element[0]);
            };
            element.attr("ng-click", "countryClick()");
            element.attr("ng-attr-fill", "{{gdp | map_colour}}");
            element.attr("ng-mouseover", 'countryMouseOver()');
            element.attr('ng-class', '{active:hoverCountry===elementId}');
            element.removeAttr("country");
            $compile(element)(scope);
        }
    }
}]);

angular.module('SvgMapApp').directive('heatMap', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    scope: {
      data: '=',
      index: '='
    },
    link: function (scope, element, attrs) {
        var text = angular.element(element[0].childNodes[3]);
        var rect = angular.element(element[0].childNodes[1]);
        var next = scope.index%22;
        scope.xInc = 50*next;
        var newLine = Math.floor(scope.index/22);
        scope.yInc = newLine > 0 ? 50*newLine : 0;
        rect.attr('x', scope.xInc);
        rect.attr('y', scope.yInc);
        rect.attr("ng-attr-fill", '{{data.govExp | heat_colour}}');
        rect.attr("country-data", "scope.data");
        rect.attr("hover-country", "hoverCountry");
        text.attr('x', scope.xInc+25);
        text.attr('y', scope.yInc+25);
        $compile(rect)(scope);
    }
  }
}]);
