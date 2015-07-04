package edu.paideia.base;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter{
	
	@Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("empmod2/template_emp2");
        registry.addViewController("/empleados_mod1").setViewName("empmod1/emps1");
        registry.addViewController("/login").setViewName("login");
        
        registry.addViewController("/empleados_mod2").setViewName("empmod2/template_emp2");
        registry.addViewController("/emp_detalle").setViewName("empmod2/emp_detalle");
        registry.addViewController("/emp_listado").setViewName("empmod2/emp_listado");
        registry.addViewController("/emp_login").setViewName("empmod2/emp_login");
        
    }


}
