'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
    var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    function getDecimals(n) {
        n = n + '';
        var i = n.indexOf('.');
        return (i == -1) ? 0 : n.length - i - 1;
    }

    function getVF(n, opt_precision) {
        var v = opt_precision;

        if (undefined === v) {
            v = Math.min(getDecimals(n), 3);
        }

        var base = Math.pow(10, v);
        var f = ((n * base) | 0) % base;
        return {v: v, f: f};
    }

    $provide.value("$locale", {
        "DATETIME_FORMATS": {
            "AMPMS": [
                "AM",
                "PM"
            ],
            "DAY": [
                "domingo",
                "lunes",
                "martes",
                "mi\u00e9rcoles",
                "jueves",
                "viernes",
                "s\u00e1bado"
            ],
            "ERANAMES": [
                "antes de Cristo",
                "despu\u00e9s de Cristo"
            ],
            "ERAS": [
                "a. C.",
                "d. C."
            ],
            "FIRSTDAYOFWEEK": 0,
            "MONTH": [
                "enero",
                "febrero",
                "marzo",
                "abril",
                "mayo",
                "junio",
                "julio",
                "agosto",
                "septiembre",
                "octubre",
                "noviembre",
                "diciembre"
            ],
            "SHORTDAY": [
                "dom.",
                "lun.",
                "mar.",
                "mi\u00e9.",
                "jue.",
                "vie.",
                "s\u00e1b."
            ],
            "SHORTMONTH": [
                "ene.",
                "feb.",
                "mar.",
                "abr.",
                "may.",
                "jun.",
                "jul.",
                "ago.",
                "sept.",
                "oct.",
                "nov.",
                "dic."
            ],
            "STANDALONEMONTH": [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ],
            "WEEKENDRANGE": [
                5,
                6
            ],
            "fullDate": "EEEE d MMMM y",
            "longDate": "d MMMM y",
            "medium": "d MMM y HH:mm:ss",
            "mediumDate": "d MMM y",
            "mediumTime": "HH:mm:ss",
            "short": "dd-MM-yy HH:mm",
            "shortDate": "dd-MM-yy",
            "shortTime": "HH:mm"
        },
        "NUMBER_FORMATS": {
            "CURRENCY_SYM": "\u20ac",
            "DECIMAL_SEP": ",",
            "GROUP_SEP": ".",
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
                    "negPre": "\u00a4\u00a0-",
                    "negSuf": "",
                    "posPre": "\u00a4\u00a0",
                    "posSuf": ""
                }
            ]
        },
        "id": "es-nl",
        "localeID": "es_NL",
        "pluralCat": function(n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
    });
}]);
