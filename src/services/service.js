import {get, postForm, postJson} from './http'


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

export function campaignDetail(body = {}) {
  return get('/ads/campaign/initEdit', body);
}

export function campaignUpdateBudget(body = {}){
  return postJson('/ads/campaign/update_day_budget', body);
}


/**
 * 数据相关接口
 * */
export function initData(body = {}) {
  return get('/ads/data/initData', body);
}




/**
 *  创意相关接口
 * */
export function creativeInit(body = {}){
  return get('/ads/creative/init', body);
}

export function creativeList(body = {}){
  return get('/ads/creative/list', body);
}

export function creativeEdit(body = {}){
  return get('/ads/creative/initEdit', body);
}

export function creativeUpdatePrice(body = {}){
  return get('/ads/creative/update_ad_price', body);
}

/**
 *  首页相关接口
 * */
export function homeInit(body = {}){
  return get('/ads/home/init', body);
}

export function updateMaxDayMoney(body = {}){
  return postJson('/ads/home/updateMaxDayMoney', body);
}




/**
 *  数据相关接口
 * */
