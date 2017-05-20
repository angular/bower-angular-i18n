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
      "Aso Sa",
      "Aso Gafua",
      "Aso Lua",
      "Aso Lulu",
      "Aso Tofi",
      "Aso Faraile",
      "Aso Toonai"
    ],
    "ERANAMES": [
      "T.L.M",
      "T.A"
    ],
    "ERAS": [
      "T.L.M.",
      "T.A."
    ],
    "FIRSTDAYOFWEEK": 0,
    "MONTH": [
      "Ianuari",
      "Fepuari",
      "Mati",
      "Aperila",
      "Me",
      "Iuni",
      "Iulai",
      "Aokuso",
      "Setema",
      "Oketopa",
      "Novema",
      "Tesema"
    ],
    "SHORTDAY": [
      "Sa",
      "Gafua",
      "Lua",
      "Lulu",
      "Tofi",
      "Faraile",
      "Toonai"
    ],
    "SHORTMONTH": [
      "Ian",
      "Fep",
      "Mat",
      "Ape",
      "Me",
      "Iun",
      "Iul",
      "Aok",
      "Set",
      "Oke",
      "Nov",
      "Tes"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE, MMMM d, y",
    "longDate": "MMMM d, y",
    "medium": "MMM d, y h:mm:ss a",
    "mediumDate": "MMM d, y",
    "mediumTime": "h:mm:ss a",
    "short": "M/d/yy h:mm a",
    "shortDate": "M/d/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "$",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
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
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-\u00a4",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "sm",
  "pluralCat": function(n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
