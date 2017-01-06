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
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "ERANAMES": [
                "Before Christ",
                "Anno Domini"
            ],
            "ERAS": [
                "BC",
                "AD"
            ],
            "FIRSTDAYOFWEEK": 6,
            "MONTH": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "SHORTDAY": [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ],
            "SHORTMONTH": [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            "STANDALONEMONTH": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "WEEKENDRANGE": [
                5,
                6
            ],
            "fullDate": "y, M d, EEEE",
            "longDate": "y, M d ",
            "medium": "y, M d ah:mm:ss",
            "mediumDate": "y, M d ",
            "mediumTime": "ah:mm:ss",
            "short": "yy/M/d ah:mm",
            "shortDate": "yy/M/d",
            "shortTime": "ah:mm"
        },
        "NUMBER_FORMATS": {
            "CURRENCY_SYM": "\u00a5",
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
                    "negPre": "-\u00a4\u00a0",
                    "negSuf": "",
                    "posPre": "\u00a4\u00a0",
                    "posSuf": ""
                }
            ]
        },
        "id": "en-cn",
        "localeID": "en_CN",
        "pluralCat": function(n, opt_precision) {  return PLURAL_CATEGORY.OTHER;}
    });
}]);
