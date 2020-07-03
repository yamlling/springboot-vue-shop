/**
 * 本文件为导出excel功能 配置表格内容文件
 */

export default {
    //会员推广佣金记录表
    memberCommission: {
        商户名称: "epName",
        会员名称: "inBizName",
        业务交易订单号: "bizOrderNo",
        业务交易子订单号: "bizChOrderNo",
        付款方名称: "outBizName",
        收款方名称: "inBizName",
        支付方式: "payMethod",
        分账类别: "spliType",
        交易金额: "proMoney",
        分佣金额: "amount",
        分佣类型: "payType",
        交易时间: "doTime",
        核销时间: "audTime",
        分账状态: {
            field: "splitStatus",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '正常'
                        break;
                    case 2:
                        val = '撤销'
                        break;
                    case 3:
                        val = '已审核'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        }
    },
    //提现记录表
    businessCash: {
        商户名称: 'epName',
        收款方名称: 'bizName',
        提现订单号: 'txOrderNo',
        提现金额: 'txAmount',
        服务费金额: 'txFee',
        处理状态: {
            field: "txStatus",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '申请待审核'
                        break;
                    case 2:
                        val = '撤销'
                        break;
                    case 3:
                        val = '打款中'
                        break;
                    case 4:
                        val = '已付款'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        提现类型: {
            field: "txType",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '余额'
                        break;
                    case 2:
                        val = '佣金'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        到账类型: {
            field: "overType",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '私账'
                        break;
                    case 2:
                        val = '公账'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        付款渠道: 'payMethod',
        付款方名称: 'payName',
        申请时间: 'txTime',
        审核时间: 'auTime'
    },
    //平台资金收支表
    platformBudget: {
        商家名称: 'thName',
        交易摘要: 'inBak',
        交易订单号: 'thNo',
        交易退单号: 'sysRefundNo',
        支付订单号: 'sysNo',
        收单渠道: 'epNname',
        付款方式: 'payType',
        付款方名称: 'thBizName',
        交易日期时间: 'tradeTime',
        操作类型: 'doType',
        交易金额: 'proMoney',
        收支方式: {
            field: "doWay",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '收入'
                        break;
                    case 2:
                        val = '支出'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        收单方单号: 'thAddno',
        支付状态: {
            field: "orderStatus",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '未支付'
                        break;
                    case 3:
                        val = '交易失败'
                        break;
                    case 4:
                        val = '交易成功'
                        break;
                    case 5:
                        val = '交易成功后退款'
                        break;
                    case 6:
                        val = '交易关闭'
                        break;
                    case 7:
                        val = '退款已受理'
                        break;
                    case 99:
                        val = '进行中'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
    },
    //商户资金收支表
    businessBudget: {
        商家名称: 'thName',
        交易摘要: 'inBak',
        交易订单号: 'thNo',
        交易退单号: 'sysRefundNo',
        支付订单号: 'sysNo',
        收单渠道: 'epNname',
        付款方式: "payType",
        付款方名称: 'thBizName',
        交易日期时间: 'tradeTime',
        操作类型: "doType",
        交易金额: 'proMoney',
        收支方式: {
            field: "doWay",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '收入'
                        break;
                    case 2:
                        val = '支出'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        收单方单号: 'thAddno',
        支付状态: {
            field: "orderStatus",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '未支付'
                        break;
                    case 3:
                        val = '交易失败'
                        break;
                    case 4:
                        val = '交易成功'
                        break;
                    case 5:
                        val = '交易成功后退款'
                        break;
                    case 6:
                        val = '交易关闭'
                        break;
                    case 7:
                        val = '退款已受理'
                        break;
                    case 99:
                        val = '进行中'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
    },
    //商户资金账户
    businessFund: {
        商家名称: 'companyname',
        钱包类型: {
            field: "walletType",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '平台云账户'
                        break;
                    case 2:
                        val = '非云账户'
                        break;
                    case 3:
                        val = '推广站点云账户'
                        break;
                    case 4:
                        val = '推广站点非云账户'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        账户期初金额: 'initialMoney',
        账户期初时间: 'initialTime',
        本期收入总额: 'inTotals',
        本期支出总额: 'outTotals',
        账户冻结金额: 'freezeTotal',
        账户余额: 'balance',
        创建时间: 'createTime',
        资金账户状态: {
            field: "state",
            callback: value => {
                let val
                switch (value) {
                    case 0:
                        val = '未启用'
                        break;
                    case 1:
                        val = '正常'
                        break;
                    case 2:
                        val = '冻结'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
    },
    //个人会员资金账户
    personalFund: {
        商家名称: 'companyname',
        会员手机号: 'meName',
        钱包类型: {
            field: "walletType",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '平台云账户'
                        break;
                    case 2:
                        val = '非云账户'
                        break;
                    case 3:
                        val = '推广站点云账户'
                        break;
                    case 4:
                        val = '推广站点非云账户'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        账户期初金额: 'initialMoney',
        账户期初时间: 'initialTime',
        本期收入总额: 'inTotals',
        本期支出总额: 'outTotals',
        赠送金额: 'giveTotal',
        押金: 'deposit',
        账户冻结金额: 'freezeTotal',
        可用余额: 'balance',
        创建时间: 'createTime',
        资金账户状态: {
            field: "state",
            callback: value => {
                let val
                switch (value) {
                    case 0:
                        val = '未启用'
                        break;
                    case 1:
                        val = '正常'
                        break;
                    case 2:
                        val = '冻结'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        }
    },
    //商户佣金账户
    businessCommission: {
        商家名称: 'companyname',
        钱包类型: {
            field: "walletType",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '平台云账户'
                        break;
                    case 2:
                        val = '非云账户'
                        break;
                    case 3:
                        val = '推广站点云账户'
                        break;
                    case 4:
                        val = '推广站点非云账户'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        账户期初金额: 'initialMoney',
        账户期初时间: 'initialTime',
        本期收入佣金总额: 'inCommTotals',
        本期佣金提现总额: 'outCommTotals',
        账户锁定佣金金额: 'freezeCommTotal',
        可提现佣金金额: 'commBalance',
        创建时间: 'createTime',
        资金账户状态: {
            field: "state",
            callback: value => {
                let val
                switch (value) {
                    case 0:
                        val = '未启用'
                        break;
                    case 1:
                        val = '正常'
                        break;
                    case 2:
                        val = '冻结'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        }
    },
    //商户佣金记录
    bbusinessCommission: {
        商户名称: 'epName',
        会员名称: 'inBizName',
        业务交易订单号: 'bizOrderNo',
        业务交易子订单号: 'bizChOrderNo',
        付款方名称: 'outBizName',
        收款方名称: 'inBizName',
        支付方式: 'payMethod',
        分账类别: 'spliType',
        交易金额: 'amount',
        分账状态: {
            field: "splitStatus",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '正常'
                        break;
                    case 2:
                        val = '撤销'
                        break;
                    case 3:
                        val = '已审核'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        分佣类型: 'payType',
        交易时间: 'doTime',
        核销时间: 'audTime'
    },
    //会员推广佣金账户
    personalCommission: {
        商家名称: 'companyname',
        会员名: 'meName',
        手机号: 'phone',
        钱包类型: {
            field: "walletType",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '平台云账户'
                        break;
                    case 2:
                        val = '非云账户'
                        break;
                    case 3:
                        val = '推广站点云账户'
                        break;
                    case 4:
                        val = '推广站点非云账户'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        账户期初金额: 'initialMoney',
        账户期初时间: 'initialTime',
        本期收入佣金总额: 'inCommTotals',
        本期佣金提现总额: 'outCommTotals',
        账户锁定佣金金额: 'freezeCommTotal',
        可提现佣金金额: 'commBalance',
        创建时间: 'createTime',
        资金账户状态: {
            field: "state",
            callback: value => {
                let val
                switch (value) {
                    case 0:
                        val = '未启用'
                        break;
                    case 1:
                        val = '正常'
                        break;
                    case 2:
                        val = '冻结'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        }
    },
    //优惠券记录表
    couponRecord: {
        商家名称: 'companyname',
        交易摘要: 'inbak',
        交易订单号: 'pmOrderNo',
        优惠券识别号: 'CouponNO',
        优惠券类别: 'currency',
        支付订单号: 'sysNo',
        业务系统类型: 'sysType',
        收支类型: 'budgetType',
        抵扣金额: 'CouponMoney',
        操作类型: 'doType',
        交易日期时间: 'tradeTime',
    },
    //商户资金汇总
    businessFundSummary: {
        商户名称: 'companyname',
        交易日期: 'tradeTime',
        支付方式: 'thPayType',
        交易笔数: 'orderSum',
        交易金额: 'proMoneySum',
    },
    //收单机构服务费明细
    mechanismProfitDetailed: {
        商户名称: 'bsname',
        交易单号: 'thNo',
        支付单号: 'sysNo',
        退单号: 'sysRefundNo',
        收单方单号: 'thAddNo',
        支付渠道: 'epName',
        支付方式: "payType",
        交易日期时间: 'tradeTime',
        交易类型: 'tradeType',
        交易金额: 'proMoney',
        成本费率: 'platFee',
        商户费率: 'shFee',
        商户服务费: 'feeMoney',
        服务费收益: 'money',
    },
    //收单机构服务费汇总
    mechanismProfitSummary: {
        商户名称: 'bsname',
        交易日期: 'tradeTime',
        交易金额: 'proMoney',
        服务费金额: 'feeMoney',
        服务费收益金额: 'money',
    },
    //平台收益服务费明细
    platformProfitDetailed: {
        商户名称: 'bsname',
        交易单号: 'thNo',
        支付单号: 'sysNo',
        退单号: 'sysRefundNo',
        收单方单号: 'thAddNo',
        支付渠道: 'epName',
        支付方式: 'payType',
        交易日期时间: 'tradeTime',
        交易类型: 'tradeType',
        交易金额: 'proMoney',
        费率标准: 'shFee',
        服务费金额: 'feeMoney',
    },
    //平台收益服务费汇总
    platformProfitSummary: {
        商户名称: 'bsname',
        交易日期: 'tradeTime',
        交易金额: 'proMoney',
        服务费金额: 'feeMoney',
    },
    //平台资金账户查询
    platformFund: {
        钱包类型: {
            field: "walletType",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '平台云账户'
                        break;
                    case 2:
                        val = '非云账户'
                        break;
                    default:
                        val = value
                        break;
                }
                return val;
            }
        },
        账户期初金额: 'initialMoney',
        账户期初时间: 'initialTime',
        本期收入总额: 'inTotals',
        本期支出总额: 'outTotals',
        账户冻结金额: 'freezeTotal',
        账户余额: 'balance',
        创建时间: 'createTime',
    },
    //商户交易订单表
    businessOrders: {
        商家名称: 'thName',
        交易摘要: 'inBak',
        交易订单号: 'thNo',
        商户支付子单号: 'thAddno',
        支付订单号: 'sysNo',
        支付渠道: 'epNname',
        业务系统类型: 'sysType',
        付款方式: "payType",
        收款方名称: 'inBizName',
        付款方名称: 'thBizName',
        交易金额: 'proMoney',
        交易日期时间: 'tradeTime',
        操作类型: "doType",
        收单单号: 'thAddno',
        订单状态: {
            field: "orderStatus",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '未支付'
                        break;
                    case 3:
                        val = '交易失败'
                        break;
                    case 4:
                        val = '交易成功'
                        break;
                    case 5:
                        val = '交易成功后退款'
                        break;
                    case 6:
                        val = '交易关闭'
                        break;
                    case 7:
                        val = '退款已受理'
                        break;
                    case 99:
                        val = '进行中'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
    },
    //订单分账记录
    ordersCommission: {
        商户名称: 'epName',
        会员名称: 'inBizName',
        业务交易订单号: 'bizOrderNo',
        业务交易子订单号: 'bizChOrderNo',
        付款方名称: 'outBizName',
        收款方名称: 'inBizName',
        支付方式: 'payMethod',
        分账类别: "spliType",
        交易金额: 'proMoney',
        分佣金额: 'amount',
        分账状态: {
            field: "splitStatus",
            callback: value => {
                let val
                switch (value) {
                    case 1:
                        val = '正常'
                        break;
                    case 2:
                        val = '撤销'
                        break;
                    case 3:
                        val = '已审核'
                        break;
                    default:
                        val = ''
                        break;
                }
                return val;
            }
        },
        分佣类型: 'payType',
        交易时间: 'doTime',
        核销时间: 'audTime',
    },
}