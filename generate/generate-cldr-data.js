const fs = require('fs');

fs.readdir('../', processFiles);

function processFiles(err, files) {

	
	Object.keys(firstDay).forEach(function(item) {
		console.log('searching for: ' + item);
		var reg = new RegExp('^angular-locale_(.*)-' + item.toLowerCase() + '.js$');

		// find file.
		tmp = files.filter(function(name) {
			var match = name.match(reg);
			return match !== null;
		});

		if(tmp.length > 0) {

			// start replacing strings!

			tmp.forEach(function(f) {
				fs.readFile('../' +f, 'utf8', function (err,data) {
					if (err) {
						return console.log(err);
					}
					var result = data.replace(/"DATETIME_FORMATS": {/g, "\"DATETIME_FORMATS\": {\n" + '    "START": "' + firstDay[item] + '",');

					fs.writeFile('../'+f, result, 'utf8', function (err) {
						if (err) return console.log(err);
					});
				});
			});
			
			console.log(tmp);
			console.log(firstDay[item]);
		}
			
	});
}






var firstDay = {
      "001": "mon",
      "AD": "mon",
      "AI": "mon",
      "AL": "mon",
      "AM": "mon",
      "AN": "mon",
      "AT": "mon",
      "AX": "mon",
      "AZ": "mon",
      "BA": "mon",
      "BE": "mon",
      "BG": "mon",
      "BM": "mon",
      "BN": "mon",
      "CH": "mon",
      "CL": "mon",
      "CM": "mon",
      "CR": "mon",
      "CY": "mon",
      "CZ": "mon",
      "DE": "mon",
      "DK": "mon",
      "EC": "mon",
      "EE": "mon",
      "ES": "mon",
      "FI": "mon",
      "FJ": "mon",
      "FO": "mon",
      "FR": "mon",
      "GB": "mon",
      "GE": "mon",
      "GF": "mon",
      "GP": "mon",
      "GR": "mon",
      "HR": "mon",
      "HU": "mon",
      "IS": "mon",
      "IT": "mon",
      "KG": "mon",
      "KZ": "mon",
      "LB": "mon",
      "LI": "mon",
      "LK": "mon",
      "LT": "mon",
      "LU": "mon",
      "LV": "mon",
      "MC": "mon",
      "MD": "mon",
      "ME": "mon",
      "MK": "mon",
      "MN": "mon",
      "MQ": "mon",
      "MY": "mon",
      "NL": "mon",
      "NO": "mon",
      "PL": "mon",
      "PT": "mon",
      "RE": "mon",
      "RO": "mon",
      "RS": "mon",
      "RU": "mon",
      "SE": "mon",
      "SI": "mon",
      "SK": "mon",
      "SM": "mon",
      "TJ": "mon",
      "TM": "mon",
      "TR": "mon",
      "UA": "mon",
      "UY": "mon",
      "UZ": "mon",
      "VA": "mon",
      "VN": "mon",
      "AE": "sat",
      "AF": "sat",
      "BH": "sat",
      "DJ": "sat",
      "DZ": "sat",
      "EG": "sat",
      "IQ": "sat",
      "IR": "sat",
      "JO": "sat",
      "KW": "sat",
      "LY": "sat",
      "MA": "sat",
      "OM": "sat",
      "QA": "sat",
      "SA": "sat",
      "SD": "sat",
      "SY": "sat",
      "YE": "sat",
      "AG": "sun",
      "AR": "sun",
      "AS": "sun",
      "AU": "sun",
      "BR": "sun",
      "BS": "sun",
      "BT": "sun",
      "BW": "sun",
      "BY": "sun",
      "BZ": "sun",
      "CA": "sun",
      "CN": "sun",
      "CO": "sun",
      "DM": "sun",
      "DO": "sun",
      "ET": "sun",
      "GT": "sun",
      "GU": "sun",
      "HK": "sun",
      "HN": "sun",
      "ID": "sun",
      "IE": "sun",
      "IL": "sun",
      "IN": "sun",
      "JM": "sun",
      "JP": "sun",
      "KE": "sun",
      "KH": "sun",
      "KR": "sun",
      "LA": "sun",
      "MH": "sun",
      "MM": "sun",
      "MO": "sun",
      "MT": "sun",
      "MX": "sun",
      "MZ": "sun",
      "NI": "sun",
      "NP": "sun",
      "NZ": "sun",
      "PA": "sun",
      "PE": "sun",
      "PH": "sun",
      "PK": "sun",
      "PR": "sun",
      "PY": "sun",
      "SG": "sun",
      "SV": "sun",
      "TH": "sun",
      "TN": "sun",
      "TT": "sun",
      "TW": "sun",
      "UM": "sun",
      "US": "sun",
      "VE": "sun",
      "VI": "sun",
      "WS": "sun",
      "ZA": "sun",
      "ZW": "sun",
      "BD": "fri",
      "MV": "fri",
      "GB-alt-variant": "sun"
    };