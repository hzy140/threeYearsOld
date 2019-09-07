package cn.bdqn.stumanage.pojo;

/**
 * Created by Administrator on 2019/9/7 0007.
 */

/**
 * 题目实体
 */
public class TitleInfo {
    private int qid;
    private String questionType;//类型
    private String quesPic;//选项图片
    private String quesanswer;//答案

    public int getQid() {
        return qid;
    }

    public void setQid(int qid) {
        this.qid = qid;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public String getQuesPic() {
        return quesPic;
    }

    public void setQuesPic(String quesPic) {
        this.quesPic = quesPic;
    }

    public String getQuesanswer() {
        return quesanswer;
    }

    public void setQuesanswer(String quesanswer) {
        this.quesanswer = quesanswer;
    }
}
