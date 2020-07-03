package com.zhi.shop.controller;

import com.zhi.shop.utils.AjaxResult;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zhi.shop.entity.Orders;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.zhi.shop.dao.OrdersDao;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 订单表(Orders)表控制层
 *
 * @author makejava
 * @since 2020-05-09 16:44:58
 */
@RestController
@RequestMapping("orders")
@Api(tags = "订单表控制层接口")
public class OrdersController {
    /**
     * 服务对象
     */
    @Resource
    private OrdersDao ordersService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @ApiOperation(value = "查询单条数据")
    @PostMapping("selectOne")
    public AjaxResult selectOne(Integer id) {
        return AjaxResult.success(ordersService.queryById(id));
    }

    /**
     * 查询列表数据
     *
     * @return 列表数据
     */
    @ApiOperation(value = "查询列表数据")
    @PostMapping("selectAll")
    public AjaxResult selectAll(Integer offset, Integer limit, Orders orders) {
        PageHelper.startPage(offset, limit);
        List<Map<String, Object>> list = ordersService.queryAll(orders);
        PageInfo<Map<String, Object>> pageInfo = new PageInfo<>(list);
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
        Integer row = ordersService.deleteById(id);
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }

    /**
     * 保存
     *
     * @return 是否成功
     */
    @ApiOperation(value = "保存数据")
    @PostMapping("save")
    public AjaxResult save(Orders orders, String doneflag) {
        Integer row;
        if (doneflag.equals("Add")) {
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
            orders.time = dateFormat.format(date);
            row = ordersService.insert(orders);
        } else {
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
            orders.time = dateFormat.format(date);
            row = ordersService.update(orders);
        }
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }

}