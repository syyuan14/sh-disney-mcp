import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerTools } from './tools/index.js';
import { packageJson } from './package-json.js';

/**
 * 创建MCP服务器
 */
export function createServer(): McpServer {
  const server = new McpServer({
    name: 'sh-disney-mcp',
    version: packageJson.version,
    description: '上海迪士尼MCP服务器，用于获取上海迪士尼的门票信息',
  });

  // 注册工具
  registerTools(server);

  return server;
}
