package com.travel;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
     @GetMapping("/test")
    public String home(){
        return "hello world!";
    }
}