import { Color } from './constants';
import { getDistanceFromMe } from './distance';

// 解析店铺数据
export const parseShop = (shop) => {
  const { properties, coordinates } = shop;

  const rate = Number(properties['评分']);
  const pre = properties['人均'] ? Number(properties['人均']) : 0;
  const location1 = coordinates.join(',');
  const location2 = [...coordinates].reverse().join(',');
  const distance = getDistanceFromMe(coordinates);
  const table = parseTableData(properties);

  return {
    shop, // 原始数据
    properties, // 原始数据-属性
    coordinates, // 原始数据-经纬度
    name: properties['名称'], // 店铺名
    color: Color[rate], // 评分颜色
    comment: properties['评论'], // 评论
    pre, // 人均
    location1, // 经纬度
    location2, // 经纬度（反转）
    rate, // 评分
    distance, // 和当前位置的距离
    table, // 属性表格数据
  };
};

// 解析属性表格数据
const parseTableData = (data) => {
  const result = [];
  for (const [key, value] of Object.entries(data)) {
    switch (key) {
      case '评论':
        result.push([key, value]);
        break;

      case '人均':
        result.push([key, '¥' + value]);
      default:
        break;
    }
  }
  return result;
};
