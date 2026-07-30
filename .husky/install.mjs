// https://typicode.github.io/husky/how-to.html#ci-server-and-docker
import fs from 'node:fs';

if (!fs.existsSync('node_modules/husky')) {
	process.exit(0);
}

const husky = (await import('husky')).default;
console.log(husky());
