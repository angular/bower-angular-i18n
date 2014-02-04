'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "\u041d\u0435\u0434\u0435\u043b\u0430",
      "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a",
      "\u0412\u0442\u043e\u0440\u043d\u0438\u043a",
      "\u0421\u0440\u0435\u0434\u0430",
      "\u0427\u0435\u0442\u0432\u0440\u0442\u043e\u043a",
      "\u041f\u0435\u0442\u043e\u043a",
      "\u0421\u0430\u0431\u043e\u0442\u0430"
    ],
    "MONTH": [
      "\u0408\u0430\u043d\u0443\u0430\u0440\u0438",
      "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
      "\u041c\u0430\u0440\u0442",
      "\u0410\u043f\u0440\u0438\u043b",
      "\u041c\u0430\u0458",
      "\u0408\u0443\u043d\u0438",
      "\u0408\u0443\u043b\u0438",
      "\u0410\u0432\u0433\u0443\u0441\u0442",
      "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438",
      "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438",
      "\u041d\u043e\u0435\u043c\u0432\u0440\u0438",
      "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438"
    ],
    "SHORTDAY": [
      "\u041d\u0435\u0434",
      "\u041f\u043e\u043d",
      "\u0412\u0442\u043e",
      "\u0421\u0440\u0435",
      "\u0427\u0435\u0442",
      "\u041f\u0435\u0442",
      "\u0421\u0430\u0431"
    ],
    "SHORTMONTH": [
      "\u0408\u0430\u043d",
      "\u0424\u0435\u0432",
      "\u041c\u0430\u0440",
      "\u0410\u043f\u0440",
      "\u041c\u0430\u0458",
      "\u0408\u0443\u043d",
      "\u0408\u0443\u043b",
      "\u0410\u0432\u0433",
      "\u0421\u0435\u043f",
      "\u041e\u043a\u0442",
      "\u041d\u043e\u0435",
      "\u0414\u0435\u043a"
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
    "CURRENCY_SYM": "\u0434\u0435\u043d",
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
  "id": "mk",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);