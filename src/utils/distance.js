import { loc } from './store';

/**
 * 计算两点间距离
 * @param {Array} coords 经纬度
 * @returns {String} 距离
 */
export const getDistanceFromMe = (coords) => {
  if (!loc.value) return null;

  const [lat1, lon1] = coords;
  console.log('coords: ', coords);
  const [lat2, lon2] = loc.value;
  console.log('loc.value: ', loc.value);
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) dist = 1;

    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    const km = dist * 1.609344;

    if (km > 1) return `${+km.toFixed(2)} km`;
    else return `${Math.round(km * 1000)} m`;
  }
};
