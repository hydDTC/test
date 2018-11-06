import {get} from './http'


/**
 *  活动相关接口
 * */
export function campaignInit(body = {}) {
  return get('/ads/campaign/init', body);
}
// ads/campaign/list
export function campaignList(body = {}) {
  return get('/ads/campaign/list', body);
}


/**
 *  创意相关接口
 * */


/**
 *  首页相关接口
 * */


/**
 *  数据相关接口
 * */
