package com.zhi.shop.entity;

import java.io.Serializable;
import java.text.SimpleDateFormat;

import io.swagger.annotations.ApiModelProperty;

/**
 * @Author: makejava
 * @Description:评论表实体类
 * @CreateDate: 2020-05-09 16:44:58
 * @UpdateRemark:
 * @Version: 1.0
 */
public class Comments implements Serializable {
    private static final long serialVersionUID = 386567583058373613L;

    @ApiModelProperty(value = "")
    private Integer id;
    /**
     * 评论人id
     */
    @ApiModelProperty(value = "评论人id")
    private Integer userId;
    /**
     * 商品id
     */
    @ApiModelProperty(value = "商品id")
    private Integer goodsId;
    /**
     * 评论内容
     */
    @ApiModelProperty(value = "评论内容")
    private String content;
    /**
     * 评论时间
     */
    @ApiModelProperty(value = "评论时间")
    public String time;

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

    public Integer getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

}