package com.zhi.shop.entity;

import java.io.Serializable;

import io.swagger.annotations.ApiModelProperty;

/**
 * @Author: makejava
 * @Description:用户表实体类
 * @CreateDate: 2020-05-09 16:44:58
 * @UpdateRemark:
 * @Version: 1.0
 */
public class User implements Serializable {
    private static final long serialVersionUID = -36592863933689613L;
    /**
     * ID
     */
    @ApiModelProperty(value = "ID")
    private Integer id;
    /**
     * 姓名
     */
    @ApiModelProperty(value = "姓名")
    private String name;
    /**
     * 学号
     */
    @ApiModelProperty(value = "学号")
    private String studentId;
    /**
     * 身份证号
     */
    @ApiModelProperty(value = "身份证号")
    private String idCard;
    /**
     * 账号
     */
    @ApiModelProperty(value = "账号")
    private String user;
    /**
     * 密码
     */
    @ApiModelProperty(value = "密码")
    private String pwd;

    @ApiModelProperty(value = "手机号")
    private String tel;

    @ApiModelProperty(value = "是否管理员")
    private Integer isAdmin;

    public Integer getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Integer isAdmin) {
        this.isAdmin = isAdmin;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

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

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

}