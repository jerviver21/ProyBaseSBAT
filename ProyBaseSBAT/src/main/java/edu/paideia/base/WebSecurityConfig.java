package edu.paideia.base;


//@Configuration
//@EnableWebMvcSecurity
public class WebSecurityConfig {//extends WebSecurityConfigurerAdapter{
	
	/*@Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
        	.antMatchers("/js/*", "/css/*", "/fonts/*")
        		.permitAll()
                .anyRequest()
                .authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user").password("password").roles("USER");
    }*/

}
