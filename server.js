const strapi = require('strapi');

try{
	strapi().start();
	console.log('Server started')
}catch (e) {
	console.log('Server error', e);
	process.exit(1);
}
