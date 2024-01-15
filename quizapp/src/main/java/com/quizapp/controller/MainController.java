package com.quizapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
    
	@RequestMapping("/email")
	public String email() {
		
		return "email";
		
	}
	@RequestMapping("/quiz")
	public String quiz() {
		
		return "quiz";
		
	}
	
	@RequestMapping("/timeout")
	public String timeout() {
		return "timeout";
	}
    
	@RequestMapping("/successfull")
	public String success() {
		return "successfull";
	}

}
