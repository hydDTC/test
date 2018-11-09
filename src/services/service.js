import {get, postForm, postJson, postFormData} from './http'


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

export function updateShowHours(body = {}){
  return postJson('/ads/campaign/update_show_hours', body);
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
  return postJson('/ads/creative/update_ad_price', body);
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
 *  用户资质相关接口
 * */
export function editInit(body = {}){
  return get('/user/edit/init', body);
}

export function imgQualification(body = {}) {
  return postFormData('/ws-api/img/qualification', body, {
    baseURL: 'http://180.97.75.148:8050'
  });
}

export function editUpdate(body = {}){
  return postJson('/user/edit/update', body);
}




/**
 *  数据相关接口
 * */
