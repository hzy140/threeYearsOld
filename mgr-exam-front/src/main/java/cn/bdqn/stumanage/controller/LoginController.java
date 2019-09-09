package cn.bdqn.stumanage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Administrator on 2019/9/9 0009.
 */
@Controller
public class LoginController {

    @RequestMapping("tologin")
    public String tologin(){
        return "login";
    }
}
