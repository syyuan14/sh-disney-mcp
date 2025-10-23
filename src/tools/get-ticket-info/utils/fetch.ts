import axios from 'axios';

const PRICE_API_HOST = 'https://www.shanghaidisneyresort.com';
const PRICE_API_PATH = 'ticketing/api/v2/tickets/book/information/shdr-theme-park-tickets';

/**
 * 获取不同日期的门票是否售罄
 * @param query
 * @param body
 * @returns
 */
export const fetchDiffentDatePriceIsSoldOut = async (
  query: Record<string, string> = {},
  body: Record<string, any> = {}
) => {
  const queryStr = new URLSearchParams({
    ...query,
    storeId: 'shdr',
  }).toString();
  const response = await axios.post(`${PRICE_API_HOST}/${PRICE_API_PATH}?${queryStr}`, body, {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'application/json',
      'x-language': 'zh-CN',
    },
  });
  const data = response.data;
  return data;
};

/**
 * 获取不同类型的价格信息 标准票、儿童票、老年人票、残障人士票
 * @param date 日期 格式为 "yyyy-MM-dd"
 * @param query
 * @param body
 * @returns
 */
export const fetchDifferentTypePriceInfo = async (
  date: string,
  query: Record<string, any> = {},
  body: Record<string, any> = {}
) => {
  const queryStr = new URLSearchParams({
    ...query,
    storeId: 'shdr',
  }).toString();
  const response = await axios.post(
    `${PRICE_API_HOST}/${PRICE_API_PATH}/party-mix/${date}?${queryStr}`,
    body,
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        'x-language': 'zh-CN',
      },
    }
  );
  const data = response.data;
  return data;
};
