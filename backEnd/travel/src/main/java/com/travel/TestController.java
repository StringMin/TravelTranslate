package com.travel;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {

    @RequestMapping("/mainMenu")
    public String mainMenu(){
        return "mainMenu";
    }

    @RequestMapping("/main")
    public String main(){
        return "main";
    }

    @RequestMapping("/contentDetail")
    public String contentDetail(){
        return "contentDetail";
    }



}
