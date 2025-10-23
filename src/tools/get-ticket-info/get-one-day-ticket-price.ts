import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { fetchDifferentTypePriceInfo } from './utils/fetch.js';
import { z } from 'zod';

/** 一日门票价格信息 */
export const getOneDayTicketPrice = async (date: string) => {
  try {
    const res = await fetchDifferentTypePriceInfo(
      date,
      {},
      {
        groupId: 'ticket-group-shdr-theme-park-tickets-one-day-ticket-hybrid',
      }
    );

    // 检查响应是否为空或未定义
    if (!res || res.length === 0) {
      throw new Error(`指定日期${date}的一日门票价格信息为空`);
    }

    let saleInfo = '';
    res?.forEach((item: any) => {
      saleInfo += `${item?.description || item?.text}价格：${item.price}。\n`;
    });
    return saleInfo;
  } catch (error) {
    console.error('Error fetching one day price info:', error);
    return (
      (error as Error).message ||
      `获取指定日期${date}一日门票的价格信息失败，请查看当前日期门票是否售罄`
    );
  }
};

export const registerOneDayTicketPriceTool = (server: McpServer) => {
  server.tool(
    'getOneDayTicketPrice',
    '获取一日门票的不同类型门票的价格信息',
    { date: z.string().describe('要查询的日期，比如"2023-12-25"。') },
    async (args) => {
      const data = await getOneDayTicketPrice(args.date);
      return {
        content: [
          {
            type: 'text' as const,
            text: data,
          },
        ],
      };
    }
  );
};
