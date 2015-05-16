package edu.paideia.base;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import edu.paideia.base.repository.EmpleadoRepository;




//Se habilita el repositorio de spring
@EnableJpaRepositories(basePackageClasses = EmpleadoRepository.class, basePackages = { "edu.paideia.base.repository" })
//Enciende Spring WebMVC esto habilita el DispatcherServlet, para activar Jackson.
@EnableWebMvc
@SpringBootApplication
public class Application extends WebMvcAutoConfiguration{// extends SpringBootServletInitializer {

    /*@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }*/

    public static void main(String[] args) throws Exception {
    	System.out.println("...");
        SpringApplication.run(Application.class, args);
    }

}

