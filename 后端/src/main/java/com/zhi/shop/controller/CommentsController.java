package com.zhi.shop.controller;

import com.zhi.shop.utils.AjaxResult;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zhi.shop.entity.Comments;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.zhi.shop.dao.CommentsDao;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 评论表(Comments)表控制层
 *
 * @author makejava
 * @since 2020-05-09 16:44:58
 */
@RestController
@RequestMapping("comments")
@Api(tags = "评论表控制层接口")
public class CommentsController {
    /**
     * 服务对象
     */
    @Resource
    private CommentsDao commentsService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @ApiOperation(value = "查询单条数据")
    @PostMapping("selectOne")
    public AjaxResult selectOne(Integer id) {
        return AjaxResult.success(commentsService.queryById(id));
    }

    /**
     * 查询列表数据
     *
     * @return 列表数据
     */
    @ApiOperation(value = "查询列表数据")
    @PostMapping("selectAll")
    public AjaxResult selectAll(Integer offset, Integer limit, Comments comments) {
        PageHelper.startPage(offset, limit);
        List<Map<String, Object>> list = commentsService.queryAll(comments);
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
        Integer row = commentsService.deleteById(id);
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }

    /**
     * 保存
     *
     * @return 是否成功
     */
    @ApiOperation(value = "保存数据")
    @PostMapping("save")
    public AjaxResult save(Comments comments, String doneflag) {
        Integer row;
        if (doneflag.equals("Add")) {
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
            comments.time = dateFormat.format(date);
            row = commentsService.insert(comments);
        } else {
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
            comments.time = dateFormat.format(date);
            row = commentsService.update(comments);
        }
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }

}