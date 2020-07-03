package com.zhi.shop.controller;

import com.zhi.shop.utils.AjaxResult;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zhi.shop.entity.Cate;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.zhi.shop.dao.CateDao;

import javax.annotation.Resource;
import java.util.List;

/**
 * 分类表(Cate)表控制层
 *
 * @author makejava
 * @since 2020-05-09 16:44:58
 */
@RestController
@RequestMapping("cate")
@Api(tags = "分类表控制层接口")
public class CateController {
    /**
     * 服务对象
     */
    @Resource
    private CateDao cateService;

     /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @ApiOperation(value = "查询单条数据")
    @PostMapping("selectOne")
    public AjaxResult selectOne(Integer id) {
        return AjaxResult.success(cateService.queryById(id));
    }
    
    /**
     * 查询列表数据
     *
     * @return 列表数据
     */
    @ApiOperation(value = "查询列表数据")
    @PostMapping("selectAll")
    public AjaxResult selectAll(Integer offset, Integer limit, Cate cate) {
        PageHelper.startPage(offset, limit);
        List<Cate> list = cateService.queryAll(cate);
        PageInfo<Cate> pageInfo = new PageInfo<>(list);
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
        Integer row = cateService.deleteById(id);
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }
    
    /**
     * 保存
     *
     * @return 是否成功
     */
    @ApiOperation(value = "保存数据")
    @PostMapping("save")
    public AjaxResult save(Cate cate, String doneflag) {
        Integer row;
        if (doneflag.equals("Add")) {
            row = cateService.insert(cate);
        } else {
            row = cateService.update(cate);
        }
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }

}