package com.zhi.shop.dao;

import org.apache.ibatis.annotations.Mapper;
import com.zhi.shop.entity.Cate;
import org.apache.ibatis.annotations.Param;
import java.util.List;

/**
 * 分类表(Cate)表数据库访问层
 *
 * @author makejava
 * @since 2020-05-09 16:44:58
 */
@Mapper
public interface CateDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Cate queryById(Integer id);
    
    
    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit 查询条数
     * @return 对象列表
     */
    List<Cate> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);


    /**
     * 通过实体作为筛选条件查询
     *
     * @param cate 实例对象
     * @return 对象列表
     */
    List<Cate> queryAll(Cate cate);

    /**
     * 新增数据
     *
     * @param cate 实例对象
     * @return 影响行数
     */
    int insert(Cate cate);

    /**
     * 修改数据
     *
     * @param cate 实例对象
     * @return 影响行数
     */
    int update(Cate cate);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    int deleteById(Integer id);

}