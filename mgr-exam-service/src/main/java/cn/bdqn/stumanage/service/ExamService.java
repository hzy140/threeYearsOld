package cn.bdqn.stumanage.service;

import cn.bdqn.stumanage.pojo.TitleInfo;
import org.apache.ibatis.annotations.Param;

/**
 * Created by Administrator on 2019/9/7 0007.
 */

public interface ExamService {

    void saveTitleInfo(TitleInfo tits);
}
