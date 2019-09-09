package cn.bdqn.stumanage.controller;

import cn.bdqn.stumanage.pojo.Options;
import cn.bdqn.stumanage.pojo.TitleInfo;
import cn.bdqn.stumanage.service.ExamService;
import org.apache.poi.xwpf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.imageio.stream.FileImageOutputStream;
import java.io.File;
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

    @RequestMapping("/test")
    public String test(){
        TitleInfo t=new TitleInfo();
        t.setQuesanswer("c");
        t.setQuestionType("das");
        t.setQuestitle("sssssssss");
        try{
            examService.saveTitleInfo(t);
        }catch(Exception e){

        }

        System.out.print("主键："+t.getQid());
        return t.getQid()+"";
    }

    @Transactional
    @RequestMapping("/savetitle")
    public List<TitleInfo> saveTitle(String filepath) throws Exception{
        filepath="d:\\subject.docx";
        List<String> sels= Arrays.asList("A","B","C","D","E");
        List<TitleInfo> ts=new ArrayList<TitleInfo>();
        InputStream in=new FileInputStream(filepath);
        XWPFDocument xwp=new XWPFDocument(in);
        TitleInfo titles=new TitleInfo();

        List<Options> list=new ArrayList<Options>();
        String path;
        Iterator<XWPFTable>  t=xwp.getTablesIterator();
        while(t.hasNext()){
            list.clear();
            XWPFTable table=t.next();
            List<XWPFTableRow> rows=table.getRows();
            for (XWPFTableRow row:rows) {

                String title=row.getCell(0).getText().trim();
                XWPFTableCell cell=row.getCell(1);
                if("题干".equals(title)){
                    XWPFPictureData pd=cell.getParagraphs().get(0).getRuns().get(0).getEmbeddedPictures().get(0).getPictureData();
                    String fname=pd.getFileName();
                    byte [] imageData=pd.getData();
                    path="D:\\image\\title\\"+fname;
                    FileImageOutputStream imageout=new FileImageOutputStream(new File(path));
                    imageout.write(imageData,0, imageData.length);
                    imageout.flush();
                    imageout.close();
                    System.out.println("题干："+fname);
                    titles.setQuestitle(path);
                }else if(sels.contains(title)){
                    Options op=new Options();
                    XWPFPictureData pd=cell.getParagraphs().get(0).getRuns().get(0).getEmbeddedPictures().get(0).getPictureData();
                    String fname=pd.getFileName();
                    byte [] imageData=pd.getData();
                    path="D:\\image\\options\\"+fname;
                    FileImageOutputStream imageout=new FileImageOutputStream(new File(path));
                    imageout.write(imageData,0, imageData.length);
                    imageout.flush();
                    imageout.close();
                    System.out.println("选项"+title+"："+fname);
                    op.setOpath(path);
                    op.setOption(title);
                    System.out.println(op.getOption()+"-----"+title);
                    list.add(op);
                }else if("标准答案".equals(title)){
                    String answer=cell.getText().trim();
                    System.out.println(answer);
                    titles.setQuesanswer(answer);
                }else if("题型".equals(title)){
                    String type=cell.getText().trim();
                    titles.setQuestionType(type);
                }

            }
            System.out.println(titles.toString());
            examService.saveTitleInfo(titles);

            for (Options option:list) {
                option.setO_qid(titles.getQid());
                System.out.println(option.getOption());
                examService.saveoptions(option);
                System.out.println(option.toString());
            }
            System.out.println("---------------------------------------------------------------------------------------------");
        }
        return ts;
    }
}
