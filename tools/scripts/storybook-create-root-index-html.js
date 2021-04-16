const path = require('path');
const [
  storybookDir = path.resolve('./dist/storybook'),
] = require('./libs/get-cli-args');

const listDirectoriesFrom = require('./libs/list-directories-from');

const storybooks = listDirectoriesFrom(storybookDir);

console.log({
  storybookDir,
  storybooks,
});

if (storybooks.length === 0) {
  process.exit();
}

const { writeFile } = require('./libs/fs-toolkit');
(async () => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Storybook</title>
</head>
<body>
	<h3>available</h3>
	<ul>
${storybooks
  .map((storybook) => `<li><a href="/${storybook}/">${storybook}</a></li>`)
  .join('\n')}
	</ul>
</body>
</html>
`;

  await writeFile(path.join(storybookDir, 'index.html'), html);
})();
