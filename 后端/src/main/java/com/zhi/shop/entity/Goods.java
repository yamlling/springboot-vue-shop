package com.zhi.shop.entity;

import java.io.Serializable;

import io.swagger.annotations.ApiModelProperty;

/**
 * @Author: makejava
 * @Description:商品表实体类
 * @CreateDate: 2020-05-09 16:44:58
 * @UpdateRemark:
 * @Version: 1.0
 */
public class Goods implements Serializable {
    private static final long serialVersionUID = 394130048987921121L;

    @ApiModelProperty(value = "")
    private Integer id;
    /**
     * 关联发布者id
     */
    @ApiModelProperty(value = "关联发布者id")
    private Integer userId;
    /**
     * 商品名
     */
    @ApiModelProperty(value = "商品名")
    private String name;
    /**
     * 商品图片
     */
    @ApiModelProperty(value = "商品图片")
    private String img;
    /**
     * 商品简介
     */
    @ApiModelProperty(value = "商品简介")
    private String content;
    /**
     * 关联分类id
     */
    @ApiModelProperty(value = "关联分类id")
    private Integer cateId;
    /**
     * 商品价格
     */
    @ApiModelProperty(value = "商品价格")
    private Double price;
    /**
     * 数量
     */
    @ApiModelProperty(value = "数量")
    private Integer num;
    /**
     * 发布时间
     */
    @ApiModelProperty(value = "发布时间")
    private String time;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getCateId() {
        return cateId;
    }

    public void setCateId(Integer cateId) {
        this.cateId = cateId;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

}