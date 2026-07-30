// Skip setting up git hooks when husky itself wasn't installed, e.g. `npm install --production`
// or `bun install --production` in the Docker runtime stage, which omits devDependencies.
import fs from 'node:fs';

if (!fs.existsSync('node_modules/husky')) {
	process.exit(0);
}

const husky = (await import('husky')).default;
console.log(husky());
