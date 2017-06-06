angular.module('SvgMapApp', ['ui.router', 'chart.js'])
    .controller('MainCtrl', MainCtrl)
    .service('CountryService', CountryService)
    .config(function($stateProvider) {
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

    function MainCtrl(countries) {
      var vm = this;
      vm.countries = countries;
      console.log('Total countries', vm.countries.length);
      // for (item of countries) {
      //   console.log('Country: ', item.country);
      //   console.log('Spending: ', item.govExp);
      // }
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
      }
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
    };
