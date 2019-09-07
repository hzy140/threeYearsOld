package cn.bdqn.stumanage.controller;

import cn.bdqn.stumanage.pojo.TitleInfo;
import cn.bdqn.stumanage.service.ExamService;
import org.apache.poi.xwpf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

/**
 * Created by Administrator on 2019/9/7 0007.
 */
@RestController
public class ExamController {
    @Autowired
    ExamService examService;

    @RequestMapping("/savetitle")
    public List<TitleInfo> saveTitle(String filepath) throws Exception{

        List<String> sels= Arrays.asList("A","B","C","D","E");
        List<TitleInfo> ts=new ArrayList<TitleInfo>();
        InputStream in=new FileInputStream(filepath);
        XWPFDocument xwp=new XWPFDocument(in);
        TitleInfo titles=new TitleInfo();
        Iterator<XWPFTable>  t=xwp.getTablesIterator();
        while(t.hasNext()){
            XWPFTable table=t.next();
            List<XWPFTableRow> rows=table.getRows();
            for (XWPFTableRow row:rows) {
                String title=row.getCell(0).getText().trim();
                XWPFTableCell cell=row.getCell(1);
                if("题干".equals(title)){
                    XWPFPictureData pd=cell.getParagraphs().get(0).getRuns().get(0).getEmbeddedPictures().get(0).getPictureData();
                    String fname=pd.getFileName();
                    byte [] imageData=pd.getData();

                }else if(sels.contains(title)){
                    XWPFPictureData pd=cell.getParagraphs().get(0).getRuns().get(0).getEmbeddedPictures().get(0).getPictureData();
                    String fname=pd.getFileName();
                    byte [] imageData=pd.getData();

                }else if("标准答案".equals(title)){
                    String answer=cell.getText().trim();
                    titles.setQuesanswer(answer);
                }
                ts.add(titles);
            }


        }
        return ts;
    }
}
