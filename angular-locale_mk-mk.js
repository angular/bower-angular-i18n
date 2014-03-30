'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u043f\u0440\u0435\u0442\u043f\u043b\u0430\u0434\u043d\u0435",
      "\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435"
    ],
    "DAY": [
      "\u043d\u0435\u0434\u0435\u043b\u0430",
      "\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a",
      "\u0432\u0442\u043e\u0440\u043d\u0438\u043a",
      "\u0441\u0440\u0435\u0434\u0430",
      "\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a",
      "\u043f\u0435\u0442\u043e\u043a",
      "\u0441\u0430\u0431\u043e\u0442\u0430"
    ],
    "MONTH": [
      "\u0458\u0430\u043d\u0443\u0430\u0440\u0438",
      "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
      "\u043c\u0430\u0440\u0442",
      "\u0430\u043f\u0440\u0438\u043b",
      "\u043c\u0430\u0458",
      "\u0458\u0443\u043d\u0438",
      "\u0458\u0443\u043b\u0438",
      "\u0430\u0432\u0433\u0443\u0441\u0442",
      "\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438",
      "\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438",
      "\u043d\u043e\u0435\u043c\u0432\u0440\u0438",
      "\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"
    ],
    "SHORTDAY": [
      "\u043d\u0435\u0434",
      "\u043f\u043e\u043d",
      "\u0432\u0442\u043e",
      "\u0441\u0440\u0435",
      "\u0447\u0435\u0442",
      "\u043f\u0435\u0442",
      "\u0441\u0430\u0431"
    ],
    "SHORTMONTH": [
      "\u0458\u0430\u043d.",
      "\u0444\u0435\u0432.",
      "\u043c\u0430\u0440\u0442",
      "\u0430\u043f\u0440.",
      "\u043c\u0430\u0458",
      "\u0458\u0443\u043d\u0438",
      "\u0458\u0443\u043b\u0438",
      "\u0430\u0432\u0433.",
      "\u0441\u0435\u043f.",
      "\u043e\u043a\u0442.",
      "\u043d\u043e\u0435.",
      "\u0434\u0435\u043a."
    ],
    "fullDate": "EEEE, d. MMMM y",
    "longDate": "d. MMMM y",
    "medium": "dd.MM.yyyy HH:mm:ss",
    "mediumDate": "dd.MM.yyyy",
    "mediumTime": "HH:mm:ss",
    "short": "dd.MM.yy HH:mm",
    "shortDate": "dd.MM.yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "den",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": ".",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "mk-mk",
  "pluralCat": function (n) {  if (n % 10 == 1 && n % 100 != 11) {   return PLURAL_CATEGORY.ONE;  }  if (n == (n | 0) && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) {   return PLURAL_CATEGORY.FEW;  }  if (n % 10 == 0 || n == (n | 0) && n % 10 >= 5 && n % 10 <= 9 || n == (n | 0) && n % 100 >= 11 && n % 100 <= 14) {   return PLURAL_CATEGORY.MANY;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);