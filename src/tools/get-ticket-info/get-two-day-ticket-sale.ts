import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { fetchDiffentDatePriceIsSoldOut } from './utils/fetch.js';

/** 二日门票售卖信息 */
export const getTwoDayTicketSaleInfo = async () => {
  try {
    const res = await fetchDiffentDatePriceIsSoldOut(
      {},
      {
        groupId: 'ticket-group-shdr-theme-park-tickets-two-day-ticket-hybrid',
        type: null,
      }
    );
    let saleInfo = '';
    res?.date?.calendar?.data?.forEach((item: any) => {
      saleInfo += `日期：${item.date}  标准票价格：${item.price} 是否售罄：${
        item.available ? '未售罄' : '已售罄'
      }。\n`;
    });
    return saleInfo;
  } catch (error) {
    console.error('Error fetching two day price info:', error);
    return '获取二日门票售卖信息失败';
  }
};

export const registerTwoDayTicketSaleInfoTool = (server: McpServer) => {
  server.tool(
    'getTwoDayTicketSaleInfo',
    '检查二日门票的售卖情况，可以用来查看从今天开始未来30天的门票是否售罄',
    async () => {
      const data = await getTwoDayTicketSaleInfo();
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
