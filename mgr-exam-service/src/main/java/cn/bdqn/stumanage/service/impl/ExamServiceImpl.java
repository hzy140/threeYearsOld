package cn.bdqn.stumanage.service.impl;

import cn.bdqn.stumanage.mapper.ExamMapper;
import cn.bdqn.stumanage.pojo.Exam;
import cn.bdqn.stumanage.pojo.Options;
import cn.bdqn.stumanage.pojo.TestPaper;
import cn.bdqn.stumanage.pojo.TitleInfo;
import cn.bdqn.stumanage.service.ExamService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2019/9/7 0007.
 */
@Service("examServiceImpl")
public class ExamServiceImpl implements ExamService {

    @Autowired
    ExamMapper examMapper;

    @Override
    public void saveTitleInfo(TitleInfo tits)  throws Exception{
        examMapper.saveTitleInfo(tits);
    }

    @Override
    public void saveoptions(Options o) {
        examMapper.saveoptions(o);
    }

    @Override
    public List<Exam> getAllExam() {
        return examMapper.getAllExam();
    }

    @Override
    public List<TestPaper> getAllTestPaper() {
        return examMapper.getAllTestPaper();
    }
}
