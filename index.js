var request = require('request');

var API_ENDPOINT = 'http://api.brooklynintegers.com/rest';

module.exports = {

	create: function(oncomplete) {
		
		if (! oncomplete){
			oncomplete = function(rsp){
			    console.log(rsp);
			};
		}
		
		var method = 'brooklyn.integers.create';
		
		request.post(API_ENDPOINT, {form:{method:method}}, function (error, response, body) {
			  if (!error && response.statusCode == 200) {
				oncomplete(body);
			  } else {
				oncomplete(error);
			  }
		});
	},
	
};



