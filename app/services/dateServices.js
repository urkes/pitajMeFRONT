angular.module('pitajMeApp')
.factory('dateService', function($resource) {
  var sex = [
    {name: 'Muški', value: 'male'},
    {name: 'Ženski', value: 'female'}
  ]

  var day =[
    {name: 'Dan'},
    {name: 1},
    {name: 2},
    {name: 3},
    {name: 4},
    {name: 5},
    {name: 6},
    {name: 7},
    {name: 8},
    {name: 9},
    {name: 10},
    {name: 11},
    {name: 12},
    {name: 13},
    {name: 14},
    {name: 15},
    {name: 16},
    {name: 17},
    {name: 18},
    {name: 19},
    {name: 20},
    {name: 21},
    {name: 22},
    {name: 23},
    {name: 24},
    {name: 25},
    {name: 26},
    {name: 27},
    {name: 28},
    {name: 29},
    {name: 30},
    {name: 31}
  ]

  var month = [
    {name: 'Mesec', number: null},
    {name: 'Januar', number: 1},
    {name: 'Februar', number: 2},
    {name: 'Mart', number: 3},
    {name: 'April', number: 4},
    {name: 'Maj', number: 5},
    {name: 'Jun', number: 6},
    {name: 'Jul', number: 7},
    {name: 'Avgust', number: 8},
    {name: 'Septembar', number: 9},
    {name: 'Oktobar', number: 10},
    {name: 'Novembar', number: 11},
    {name: 'Decembar', number: 12}
  ]

  var year = [
    {name: 'Godina'},
    {name: '1997'},
    {name: '1996'},
    {name: '1995'},
    {name: '1994'},
    {name: '1993'},
    {name: '1992'},
    {name: '1991'},
    {name: '1990'},
    {name: '1989'},
    {name: '1988'},
    {name: '1987'},
    {name: '1986'},
    {name: '1985'},
    {name: '1984'},
    {name: '1983'},
    {name: '1982'},
    {name: '1981'},
    {name: '1980'},
    {name: '1979'},
    {name: '1978'}
  ]

  function getSex() {
    return sex;
  }

  function getDay() {
    return day;
  }

  function getMonth() {
    return month;
  }

  function getYear() {
    return year;
  }

  return {
    getSex: getSex,
    getDay: getDay,
    getMonth: getMonth,
    getYear: getYear
  }
});
