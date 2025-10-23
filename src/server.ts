import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerTools } from './tools/index.js';

/**
 * 创建MCP服务器
 */
export function createServer(): McpServer {
  const server = new McpServer({
    name: 'sh-disney-mcp',
    version: '0.1.0',
    description: '上海迪士尼MCP服务器，用于获取上海迪士尼的门票信息',
  });

  // 注册工具
  registerTools(server);

  return server;
}
