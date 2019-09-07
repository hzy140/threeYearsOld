package cn.bdqn.stumanage.service.impl;

import cn.bdqn.stumanage.mapper.ExamMapper;
import cn.bdqn.stumanage.pojo.TitleInfo;
import cn.bdqn.stumanage.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 2019/9/7 0007.
 */
@Service("examServiceImpl")
public class ExamServiceImpl implements ExamService {

    @Autowired
    ExamMapper examMapper;

    @Override
    public void saveTitleInfo(TitleInfo tits) {
        examMapper.saveTitleInfo(tits);
    }
}
