const Index = require('../routes/index');

module.exports = function(app) {

	app.get('/', Index.home);
	app.get('/about', Index.about);
	app.get('/what-we-do', Index.whatWeDo);

}
