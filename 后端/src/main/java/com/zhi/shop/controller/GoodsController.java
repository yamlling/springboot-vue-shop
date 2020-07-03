package com.zhi.shop.controller;

import com.zhi.shop.utils.AjaxResult;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zhi.shop.entity.Goods;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.zhi.shop.dao.GoodsDao;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * 商品表(Goods)表控制层
 *
 * @author makejava
 * @since 2020-05-09 16:44:58
 */
@RestController
@RequestMapping("goods")
@Api(tags = "商品表控制层接口")
public class GoodsController {
    /**
     * 服务对象
     */
    @Resource
    private GoodsDao goodsService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @ApiOperation(value = "查询单条数据")
    @PostMapping("selectOne")
    public AjaxResult selectOne(Integer id) {
        return AjaxResult.success(goodsService.queryById(id));
    }


    public final static String UPLOAD_PATH_PREFIX = "junziqian/";

    @PostMapping(value = ("upload"), headers = "Content-Type=multipart/form-data")
    public String addvercon(@RequestParam("file") MultipartFile uploadFile, HttpServletRequest request) {

        if (uploadFile.isEmpty()) {
            //返回选择文件提示
            return "请选择上传文件";
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd/");
        //构建文件上传所要保存的"文件夹路径"--这里是相对路径，保存到项目根路径的文件夹下
        String realPath = new String("src/main/resources/" + UPLOAD_PATH_PREFIX);
        String format = sdf.format(new Date());
        //存放上传文件的文件夹
        File file = new File(realPath + format);
        if (!file.isDirectory()) {
            //递归生成文件夹
            file.mkdirs();
        }
        //获取原始的名字  original:最初的，起始的  方法是得到原来的文件名在客户机的文件系统名称
        String oldName = uploadFile.getOriginalFilename();
        String newName = UUID.randomUUID().toString() + oldName.substring(oldName.lastIndexOf("."), oldName.length());
        try {
            //构建真实的文件路径
            File newFile = new File(file.getAbsolutePath() + File.separator + newName);
            //转存文件到指定路径，如果文件名重复的话，将会覆盖掉之前的文件,这里是把文件上传到 “绝对路径”
            uploadFile.transferTo(newFile);
            String filePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + "/junziqian/" + format + newName;
            return filePath;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "上传失败!";

    }

    /**
     * 查询列表数据
     *
     * @return 列表数据
     */
    @ApiOperation(value = "查询列表数据")
    @PostMapping("selectAll")
    public AjaxResult selectAll(Integer offset, Integer limit, Goods goods) {
        PageHelper.startPage(offset, limit);
        List<Map<String, Object>> list = goodsService.queryAll(goods);
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
        Integer row = goodsService.deleteById(id);
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }

    /**
     * 保存
     *
     * @return 是否成功
     */
    @ApiOperation(value = "保存数据")
    @PostMapping("save")
    public AjaxResult save(Goods goods, String doneflag) {
        Integer row;
        if (doneflag.equals("Add")) {
            row = goodsService.insert(goods);
        } else {
            row = goodsService.update(goods);
        }
        return row > 0 ? AjaxResult.success() : AjaxResult.fail();
    }

}