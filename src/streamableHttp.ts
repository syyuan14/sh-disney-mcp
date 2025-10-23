import express, { Request, Response } from 'express';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createServer } from './server.js';

const app = express();
app.use(express.json());

const server: McpServer = createServer();

const transport: StreamableHTTPServerTransport = new StreamableHTTPServerTransport({
  sessionIdGenerator: undefined, // set to undefined for stateless servers
});

// Setup routes for the server
const setupServer = async () => {
  await server.connect(transport);
};

app.post('/mcp', async (req: Request, res: Response) => {
  // Removed console.log to prevent MCP protocol interference
  try {
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    // Error handling MCP request
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: 'Internal server error',
        },
        id: null,
      });
    }
  }
});

app.get('/mcp', async (req: Request, res: Response) => {
  // Removed console.log to prevent MCP protocol interference
  res.writeHead(405).end(
    JSON.stringify({
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message: 'Method not allowed.',
      },
      id: null,
    })
  );
});

app.delete('/mcp', async (req: Request, res: Response) => {
  // Removed console.log to prevent MCP protocol interference
  res.writeHead(405).end(
    JSON.stringify({
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message: 'Method not allowed.',
      },
      id: null,
    })
  );
});

// Start the server
const PORT = process.env.PORT || 3088;
setupServer()
  .then(() => {
    app.listen(PORT, (error) => {
      if (error) {
        // Failed to start server
        process.exit(1);
      }
      // Server started successfully
    });
  })
  .catch((error) => {
    // Failed to set up the server
    process.exit(1);
  });
