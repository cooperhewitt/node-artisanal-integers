var artisanal = require('./index');

artisanal.create(function(result){
	var rsp = JSON.parse(result);
	console.log(rsp);
});

