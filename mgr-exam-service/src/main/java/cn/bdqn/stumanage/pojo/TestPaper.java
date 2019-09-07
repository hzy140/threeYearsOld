package cn.bdqn.stumanage.pojo;

/**
 * Created by Administrator on 2019/9/7 0007.
 */
public class TestPaper {
    private int tid;
    private String tname;
    private String title;
    private int score;//总分
    private int qcount;//总题数
    private int qscore;//没题分数

    public int getTid() {
        return tid;
    }

    public void setTid(int tid) {
        this.tid = tid;
    }

    public String getTname() {
        return tname;
    }

    public void setTname(String tname) {
        this.tname = tname;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getQcount() {
        return qcount;
    }

    public void setQcount(int qcount) {
        this.qcount = qcount;
    }

    public int getQscore() {
        return qscore;
    }

    public void setQscore(int qscore) {
        this.qscore = qscore;
    }
}
