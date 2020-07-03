package com.zhi.shop.controller;

import com.zhi.shop.utils.AjaxResult;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zhi.shop.entity.User;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.zhi.shop.dao.UserDao;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户表(User)表控制层
 *
 * @author makejava
 * @since 2020-05-09 16:44:58
 */
@RestController
@RequestMapping("user")
@Api(tags = "用户表控制层接口")
public class UserController {
    /**
     * 服务对象
     */
    @Resource
    private UserDao userService;

     /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @ApiOperation(value = "查询单条数据")
    @PostMapping("selectOne")
    public AjaxResult selectOne(Integer id) {
        return AjaxResult.success(userService.queryById(id));
    }
    
    /**
     * 查询列表数据
     *
     * @return 列表数据
     */
    @ApiOperation(value = "查询列表数据")
    @PostMapping("selectAll")
    public AjaxResult selectAll(Integer offset, Integer limit, User user) {
        PageHelper.startPage(offset, limit);
        List<User> list = userService.queryAll(user);
        PageInfo<User> pageInfo = new PageInfo<>(list);
        return AjaxResult.success(pageInfo);
    }
    
    /**
     * 删除
     *
     * @return 是否成功
     */
    @ApiOperation(value = "删除数据")
    @PostMapping("del")
    public AjaxResult del(Integer id) {
        Integer row = userService.deleteById(id);
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }
    
    /**
     * 保存
     *
     * @return 是否成功
     */
    @ApiOperation(value = "保存数据")
    @PostMapping("save")
    public AjaxResult save(User user, String doneflag) {
        Integer row;
        if (doneflag.equals("Add")) {
            row = userService.insert(user);
        } else {
            row = userService.update(user);
        }
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }

}