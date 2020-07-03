package com.zhi.shop.entity;

import java.io.Serializable;

import io.swagger.annotations.ApiModelProperty;

/**
 * @Author: makejava
 * @Description:订单表实体类
 * @CreateDate: 2020-05-09 16:44:58
 * @UpdateRemark:
 * @Version: 1.0
 */
public class Orders implements Serializable {
    private static final long serialVersionUID = -98510021881136123L;

    @ApiModelProperty(value = "")
    private Integer id;
    /**
     * 商品名
     */
    @ApiModelProperty(value = "商品名")
    private String goodsName;
    /**
     * 商品图片
     */
    @ApiModelProperty(value = "商品图片")
    private String img;
    /**
     * 购买人
     */
    @ApiModelProperty(value = "购买人")
    private Integer userId;
    /**
     * 总价
     */
    @ApiModelProperty(value = "总价")
    private Double sumPrice;
    /**
     * 购买数量
     */
    @ApiModelProperty(value = "购买数量")
    private Integer sum;
    /**
     * 下单时间
     */
    @ApiModelProperty(value = "下单时间")
    public String time;
    /**
     * 订单编号
     */
    @ApiModelProperty(value = "订单编号")
    private String orderNo;

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Double getSumPrice() {
        return sumPrice;
    }

    public void setSumPrice(Double sumPrice) {
        this.sumPrice = sumPrice;
    }

    public Integer getSum() {
        return sum;
    }

    public void setSum(Integer sum) {
        this.sum = sum;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

}