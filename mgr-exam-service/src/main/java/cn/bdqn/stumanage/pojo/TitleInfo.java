package cn.bdqn.stumanage.pojo;

/**
 * Created by Administrator on 2019/9/7 0007.
 */

/**
 * 题目实体
 */
public class TitleInfo {
    private int qid;
    private String questitle;//题目
    private String questionType;//类型
    private String quesanswer;//答案

    public String getQuestitle() {
        return questitle;
    }

    public void setQuestitle(String questitle) {
        this.questitle = questitle;
    }

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

    public String getQuesanswer() {
        return quesanswer;
    }

    public void setQuesanswer(String quesanswer) {
        this.quesanswer = quesanswer;
    }

    @Override
    public String toString() {
        return "TitleInfo{" +
                "qid=" + qid +
                ", questitle='" + questitle + '\'' +
                ", questionType='" + questionType + '\'' +
                ", quesanswer='" + quesanswer + '\'' +
                '}';
    }
}
