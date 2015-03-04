var baseUrl = "http://api.icndb.com/jokes/random?";
var first = "&firstName=";
var last = "&lastName=";

$(document).ready(function() { 
  $('button').click(function() { 
		getName();
 	});
});

showRandom = function () {
	$.getJSON(baseUrl, function (data) {
		$('.joke').html('<div>' + data['value']['joke'] + '</div>');
	});
};

showByName = function (fname, lname) {
	$.getJSON(baseUrl + first + fname + last + lname, function (data) {
		$('.joke').html('<div>' + data['value']['joke'] + '</div>');
	});	
};

getName = function (data) {
	var names = [];
	$('input.name').each(function(index, element) {
		names.push(element['value']);
	});
	if (names[0] == "" && names[1] == "") {
		showRandom();
	} else {
		showByName(names[0], names[1]);
	}
};


