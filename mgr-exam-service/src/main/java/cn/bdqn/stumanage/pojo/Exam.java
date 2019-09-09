package cn.bdqn.stumanage.pojo;

import java.util.Date;

/**
 * Created by Administrator on 2019/9/7 0007.
 */
public class Exam {
    private int eid;
    private Date starttime;
    private Date endtime;
    private String classid;
    private int testpaperid;//试卷id

    public int getEid() {
        return eid;
    }

    public void setEid(int eid) {
        this.eid = eid;
    }

    public Date getStarttime() {
        return starttime;
    }

    public void setStarttime(Date starttime) {
        this.starttime = starttime;
    }

    public Date getEndtime() {
        return endtime;
    }

    public void setEndtime(Date endtime) {
        this.endtime = endtime;
    }

    public String getClassid() {
        return classid;
    }

    public void setClassid(String classid) {
        this.classid = classid;
    }

    public int getTestpaperid() {
        return testpaperid;
    }

    public void setTestpaperid(int testpaperid) {
        this.testpaperid = testpaperid;
    }
}
