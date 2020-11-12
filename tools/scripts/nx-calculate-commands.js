const exec = require('./libs/execute-sync-command');
const [branchName = 'master', target = 'all'] = require('./libs/get-cli-args');

const LAST_COMMITS_AMOUNT = 1;
const headParam = branchName === 'merge' ? 'HEAD' : `origin/${branchName}`;
let baseParam = '';
switch (branchName) {
	case 'master':
	case 'staging':
	case 'develop':
		baseParam = `origin/${branchName}~${LAST_COMMITS_AMOUNT}`;
		break;
	default:
		baseParam = 'origin/develop';
		break;
}

const getAffectedProjects = (target = 'build') => {
	const affected = exec(
		`./node_modules/.bin/nx print-affected --base=${baseParam} --head=${headParam} --target=${target}`
	);

	const value = affected
		? JSON.parse(affected).tasks.map((t) => t.target.project)
		: [];

	return {
		[target]: value,
	};
};

let output = '';
if (
	['lint', 'test', 'build-storybook', 'build'].includes(target.toLowerCase())
) {
	output = JSON.stringify({
		...getAffectedProjects(target),
	});
} else {
	output = JSON.stringify({
		...getAffectedProjects('lint'),
		...getAffectedProjects('test'),
		...getAffectedProjects('build-storybook'),
		...getAffectedProjects('build'),
	});
}

console.log(output);
