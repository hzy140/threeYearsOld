package cn.bdqn.stumanage.mapper;

import cn.bdqn.stumanage.pojo.Options;
import cn.bdqn.stumanage.pojo.TitleInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by Administrator on 2019/9/7 0007.
 */
public interface ExamMapper {

    void saveTitleInfo(@Param("tit") TitleInfo tits);

    void saveoptions(@Param("o") Options o);


}
