package com.zhi.shop.entity;

import java.io.Serializable;
import io.swagger.annotations.ApiModelProperty;

/**
 * @Author: makejava
 * @Description:分类表实体类
 * @CreateDate: 2020-05-09 16:44:58
 * @UpdateRemark:
 * @Version: 1.0
 */ 
public class Cate implements Serializable {
    private static final long serialVersionUID = -68039052983892358L;
        
    @ApiModelProperty(value = "")
    private Integer id;
    /**
    * 分类名称
    */    
    @ApiModelProperty(value = "分类名称")
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}