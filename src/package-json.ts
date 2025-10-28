import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// ES 模块中获取 __dirname 的兼容方式
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 读取 package.json 文件获取版本号
const packageJsonPath = resolve(__dirname, '../package.json');
const packageJsonContent = readFileSync(packageJsonPath, 'utf8');

export const packageJson = JSON.parse(packageJsonContent);
