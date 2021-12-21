package egg.actions.configurations;

import egg.actions.aspects.AuthenticationAspect;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@ComponentScan
@EnableAspectJAutoProxy
public class AppConfiguration {

    @Bean
    public AuthenticationAspect AuthenticationAspect() {
        return new AuthenticationAspect();
    }
}
