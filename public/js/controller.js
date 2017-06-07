angular.module('SvgMapApp', ['ui.router', 'chart.js'])
    .controller('MainCtrl', MainCtrl)
    .service('CountryService', CountryService)
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            controller: 'MainCtrl',
            controllerAs: 'vm',
            templateUrl: 'partial/gdp.html',
            resolve: {
                countries: function(CountryService) {
                    return CountryService.getCountries();
                }
            }
        });
        $stateProvider.state('heatmap', {
            url: '/heatmap',
            controller: 'MainCtrl',
            controllerAs: 'vm',
            templateUrl: 'partial/heatmap.html',
            resolve: {
                countries: function(CountryService) {
                    return CountryService.getCountries();
                }
            }
        });
        $stateProvider.state('graph', {
            url: '/graph',
            controller: 'MainCtrl',
            controllerAs: 'vm',
            templateUrl: 'partial/graph.html',
            resolve: {
                countries: function(CountryService) {
                    return CountryService.getCountries();
                }
            }
        });

    });

    function CountryService($http) {
      function getCountries() {
        return $http.get('/countries').then(function(response) {
          return response.data;
        });
      }
      return {
        getCountries: getCountries
      };
    };

    function MainCtrl(countries, $timeout, $scope) {
      var vm = this;
      vm.countries = countries;
      vm.countriesNames = [];
      vm.gdp = [];
      vm.spending = [];
      for(item of vm.countries) {
        vm.countriesNames.push(item.country);
        vm.gdp.push(item.GDP);
        if (!item.GDP || !item.govExp) {
          vm.spending.push(0);
        } else {
          var totalSpend = (item.govExp/100)*item.GDP;
          vm.spending.push(totalSpend.toFixed(2));
        }
      };
      vm.initialiseData = function(filter) {
        vm.countriesNames = [];
        vm.gdp = [];
        vm.spending = [];
        for(item of vm.countries) {
          if(filter!=='' || item.continent == filter) {
            vm.countriesNames.push(item.country);
            vm.gdp.push(item.GDP);
            if (!item.GDP || !item.govExp) {
              vm.spending.push(0);
            } else {
              var totalSpend = (item.govExp/100)*item.GDP;
              vm.spending.push(totalSpend.toFixed(2));
            }
          }
        }
        vm.graphData = [vm.gdp, vm.spending];
        $timeout(function () {
          console.log('lala');
          $scope.$apply()
        }, 2000);
      };

      vm.graphData = [vm.gdp, vm.spending];
      vm.series = ['GDP', 'Total Expenditure'];
      vm.legend = [
        {
          text: '0-1000',
          value: 500
        },
        {
          text: '1000-5000',
          value: 2500
        },
        {
          text: '5000-10,000',
          value: 7500
        },
        {
          text: '10,000-50,000',
          value: 25000
        },
        {
          text: '50,000-100,000',
          value: 75000
        },
        {
          text: '100,000-500,000',
          value: 250000
        },
        {
          text: '500,000-1,000,000',
          value: 750000
        },
        {
          text: '1,000,000 - 5,000,000',
          value: 2500000
        },
        {
          text: '5,000,000 - 10,000,000',
          value: 7500000
        },
        {
          text: 'More than 10,000,000',
          value: 15000000
        },
      ];
      vm.changeHoverCountry = function (country) {
        vm.hoverCountry = country;
      };
      vm.expenditureLegend = [
        {
          text: '0-20',
          value: 10
        },
        {
          text: '20-40',
          value: 30
        },
        {
          text: '40-60',
          value: 50
        },
        {
          text: '60-80',
          value: 70
        },
        {
          text: '80-100',
          value: 90
        },
        {
          text: '100-120',
          value: 110
        },
        {
          text: 'More than 120',
          value: 130
        },
      ];
      vm.continentFilter = ['Asia', 'Africa', 'Europe', 'Oceania', 'North America', 'South America', ''];
      vm.chartType = 'bar';
    };
