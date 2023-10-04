package com.travel;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

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

    @RequestMapping("/contentDetail2")
    public String contentDetail2(){
        return "contentDetail2";
    }

    @RequestMapping("/search")
    public String search(){
        return "search";
    }

    @GetMapping("/locationMain")
    public String locationMain(@RequestParam("latitude") double latitude, @RequestParam("longitude") double longitude, Model model) {
        model.addAttribute("latitude", latitude);
        model.addAttribute("longitude", longitude);
        return "/main";
    }

}
