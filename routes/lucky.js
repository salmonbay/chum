/*
 * Return lucky number.
 */
var crypto = require('crypto'),
    format = require('biguint-format');

function random (qty) {
	var value = crypto.randomBytes(qty);
    return format(value, 'dec');
}

exports.reply = function(req, res) {
	// Prepare output in JSON format
	response = {
	    luck : random(40),
		first_name : req.body.first_name,
		email : req.body.email
	};
	console.log(response);
	res.end(JSON.stringify(response));
}