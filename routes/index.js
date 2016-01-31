
/*
 * GET home page.
 */

exports.home = function(req, res){
  if (req.cookies === undefined) {
    console.log("cookie not found.")
	res.cookie('moon', '1', { maxAge: 900000, httpOnly: false });
  }
  res.render('landing', { title: 'Lucky Number' });
};