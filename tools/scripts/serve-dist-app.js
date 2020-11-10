const [appName = '', port = '3000'] = require('./libs/get-cli-args');

if (!appName) {
	process.exit();
}

const handler = require('serve-handler');
const http = require('http');
const open = require('open');

const server = http.createServer((request, response) => {
	// You pass two more arguments for config and middleware
	// More details here: https://github.com/zeit/serve-handler#options
	return handler(request, response, {
		public: `dist/apps/${appName}`,
		rewrites: [
			{
				source: '**',
				destination: '/index.html',
			},
		],
	});
});

const httpPort = Number(port);
server.listen(httpPort, () => {
	const appUrl = `http://localhost:${httpPort}`;
	console.log(`Running at ${appUrl}`);
	open(appUrl);
});
