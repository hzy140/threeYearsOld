package cn.bdqn.stumanage.service;

import cn.bdqn.stumanage.pojo.Exam;
import cn.bdqn.stumanage.pojo.Options;
import cn.bdqn.stumanage.pojo.TestPaper;
import cn.bdqn.stumanage.pojo.TitleInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by Administrator on 2019/9/7 0007.
 */

public interface ExamService{

    void saveTitleInfo(TitleInfo tits) throws Exception;

    void saveoptions(@Param("o") Options o);

    List<Exam> getAllExam();

    List<TestPaper> getAllTestPaper();
}
