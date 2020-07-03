/**
 * 验证
 */

const mobile = /^((\+|00)86)?1[3-9]\d{9}$/;
const number = /^\d{1,}$/;
const chinese = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/;
const email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const idcard = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;
const string = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
const stringAnum = /^[A-Za-z0-9]+$/
const money = /(^[-]?[1-9]\d{0,2}($|(,\d{3})*($|(\.\d{1,2}$))))|((^[0](\.\d{1,2})?)|(^[-][0]\.\d{1,2}))$/

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * 字符串
 */
export const strValidate = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('不能为空'));
  }
  if (!string.test(value)) {
    callback(new Error('只能为数字 中文 字母!'));
  }
  callback();
}

/**
 * 验证码
 */
export const codeValidate = (rule, value, callback, name) => {
  if (!value) {
    return callback(new Error(`${name}不能为空`));
  }
  if (!string.test(value)) {
    callback(new Error(`${name}只能为数字 中文 字母!`));
  }
  callback();
}

/**
 * email
 */
export const emailValidate = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('不能为空'));
  }
  if (!email.test(value)) {
    callback(new Error('Email格式不正确!'));
  }
  callback();
}

/**
 * 登陆用户名
 */
export const usernameValidate = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('用户名不能为空'));
  }
  if (!string.test(value)) {
    callback(new Error('用户名只能为数字 字母 中文!'));
  }
  if (value.length > 10 || value.length < 3) {
    callback(new Error('用户名长度为3-10位!'));
  }
  callback();
}

/**
 * 登陆密码
 */
export const userPwdValidate = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('密码不能为空'));
  }
  if (!stringAnum.test(value)) {
    callback(new Error('密码只能为数字 字母!'));
  }
  if (value.length > 12 || value.length < 6) {
    callback(new Error('密码长度为6-12位!'));
  }
  callback();
}

/**
 * 数字类型
 */
export const numberValidate = (rule, value, callback) => {
  if (!number.test(value)) {
    callback(new Error('只能输入数字!'));
  }
  callback();
}

/**
 * 金额
 */

export const moneyValidate = (rule, value, callback) => {
  if (!money.test(value)) {
    callback(new Error('金额不合法!'));
  }
  callback();
}

/**
 * 游客姓名
 */

export const nameValidate = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('不能为空'));
  }
  if (!chinese.test(value) || value.length > 5) {
    callback(new Error('名称只能为中文,且最多5个字'));
  }
  callback();
}

/**
 * 手机号
 */

export const mobileValidate = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('不能为空'));
  }
  if (!mobile.test(value)) {
    callback(new Error('手机号码不合法'));
  }
  callback();
}

/**
 * 身份证
 */

export const idcardValidate = (rule, value, callback) => {
  if (!idcard.test(value) && value != '') {
    callback(new Error('身份证号不合法'));
  }
  callback();
}
