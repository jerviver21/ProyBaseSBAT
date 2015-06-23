package edu.paideia.base;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter{
	
	@Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("temp_emps1");
        registry.addViewController("/emps1").setViewName("emps1");
        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/login").setViewName("login");
        
        registry.addViewController("/temp_emps1").setViewName("temp_emps1");
        registry.addViewController("/emp_detalle").setViewName("emps/emp_detalle");
        registry.addViewController("/emp_listado").setViewName("emps/emp_listado");
        registry.addViewController("/emp_login").setViewName("emps/emp_login");
        
    }


}
