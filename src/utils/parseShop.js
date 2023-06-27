import { Color } from './constants';
import { getDistanceFromMe } from './distance';

export const parseShop = (shop) => {
  const { properties, coordinates } = shop;

  const rate = Number(properties['评分']);
  const pre = properties['人均'] ? Number(properties['人均']) : 0;
  const location1 = coordinates.join(',');
  const location2 = [...coordinates].reverse().join(',');
  const distance = getDistanceFromMe(coordinates);

  return {
    shop,
    properties,
    coordinates,
    name: properties['名称'],
    color: Color[rate],
    comment: properties['评论'],
    pre,
    location1,
    location2,
    rate,
    distance,
  };
};
