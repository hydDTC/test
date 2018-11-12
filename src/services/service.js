import {get, postForm, postJson, postFormData,getUrl} from './http'


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
export function updateShowState (body = {}){
  return postJson('/ads/campaign/update_show_state', body);
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
export function creativeShowState (body = {}){
  return postJson('/ads/creative/update_show_state', body);
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
export function consumeRecord(body = {}){
  return get('/ads/home/consume_record', body);
}
// ads/home/consume_list?begin_date=2018-09-01&end_date=2018-10-02
export function consumeList(body = {}){
  return get('/ads/home/consume_list', body);
}
export function rechargeRecord(body = {}){
  return get('/ads/home/recharge_record', body);
}
export function rechargeList(body = {}){
  return get('/ads/home/recharge_list', body);
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
 *  权限相关接口
 * */
 export function getMenu(body = {}){
  return get('/jurisdiction/menus', body);
 }


/**
 * 代理首页
 */


/**
 * 代理客户
 *  user/child/init
 */
export function userInit(body = {}){
  return get('/user/child/init', body)
}

export function userList(body = {}){
  return get('/user/child/list', body)
}

export function userLogin(body = {}){
  return get('/jurisdiction/sublogin', body)
}


/**
 *  官网登入 注册
 * */
export function jurisdictionLogin(body = {}) {
  return postForm('/jurisdiction/login', body);
}

export function current(body = {}){
  return get('/jurisdiction/current', body)
}

export function quit(body = {}){
  return get('/jurisdiction/quit', body)
}
export function verifycode(body = {}){
  return get('/jurisdiction/sms/verifycode', body, {
  })
}
//  login首页验证码
export function verify_code(body = {}){
  return getUrl('/verifyCode', body, {
  })
}
export function existUser(body = {}){
  return get('/jurisdiction/exist/user', body, {
  })
}
export function register(body = {}) {
  return postJson('/jurisdiction/register', body, {});
}

export function customer(body = {}) {
  return postJson('/jurisdiction/customer', body);
}

