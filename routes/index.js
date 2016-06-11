module.exports.home = function(req, res) {
	res.render('index/home', {tagline: 'Welcome aboard!'});
}

module.exports.about = function(req, res) {
	res.render('index/about', {tagline: 'About Page!'});
}

module.exports.whatWeDo = function(req, res) {
	res.render('index/what_we_do', {tagline: 'What We Do Page!'});
}

module.exports.Regist = function(req, res) {
	res.render('index/regist', {tagline: 'Register Form!'});
}