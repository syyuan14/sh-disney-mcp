import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import { registerOneDayTicketPriceTool } from './get-ticket-info/get-one-day-ticket-price.js';
import { registerOneDayTicketSaleInfoTool } from './get-ticket-info/get-one-day-ticket-sale.js';
import { registerTwoDayTicketPriceTool } from './get-ticket-info/get-two-day-ticket-price.js';
import { registerTwoDayTicketSaleInfoTool } from './get-ticket-info/get-two-day-ticket-sale.js';

export const registerTools = (server: McpServer) => {
  registerOneDayTicketPriceTool(server);
  registerOneDayTicketSaleInfoTool(server);
  registerTwoDayTicketPriceTool(server);
  registerTwoDayTicketSaleInfoTool(server);
};
