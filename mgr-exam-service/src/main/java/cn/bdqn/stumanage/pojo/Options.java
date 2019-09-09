package cn.bdqn.stumanage.pojo;

/**
 * Created by Administrator on 2019/9/8 0008.
 */
public class Options {
    private int oid;
    private String option;//选项名
    private String opath;//选项图片路径
    private int o_qid;//所属题目

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public String getOption() {
        return option;
    }

    public void setOption(String option) {
        this.option = option;
    }

    public String getOpath() {
        return opath;
    }

    public void setOpath(String opath) {
        this.opath = opath;
    }

    public int getO_qid() {
        return o_qid;
    }

    public void setO_qid(int o_qid) {
        this.o_qid = o_qid;
    }

    @Override
    public String toString() {
        return "Options{" +
                "oid=" + oid +
                ", option='" + option + '\'' +
                ", opath='" + opath + '\'' +
                ", o_qid=" + o_qid +
                '}';
    }
}
