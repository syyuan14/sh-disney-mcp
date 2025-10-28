#!/usr/bin/env node
import { program } from 'commander';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { startSseAndStreamableHttpMcpServer } from 'mcp-http-server';
import { createServer } from './server.js';

import { packageJson } from './package-json.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

program
  .name('mcp-server')
  .description('MCP server with HTTP and stdio support')
  .version(packageJson.version)
  .option('--host <host>', 'host to bind server to')
  .option('--port <port>', 'port to listen on for HTTP transport')
  .option('--prefix <prefix>', 'route prefix for HTTP endpoints', '/api')
  .action(async (options) => {
    try {
      if (options.port || options.host) {
        // HTTP/SSE transport
        await startSseAndStreamableHttpMcpServer({
          host: options.host,
          port: options.port ? parseInt(options.port) : undefined,
          routes: {
            prefix: options.prefix,
          },
          createMcpServer: async (params): Promise<any> => {
            console.log('HTTP request from:', params.headers['user-agent']);
            return createServer();
          },
        });
      } else {
        const server: McpServer = createServer();
        const transport = new StdioServerTransport();
        await server.connect(transport);
      }
    } catch (error) {
      console.error('Error:', error);
      process.exit(1);
    }
  });

program.parse();
