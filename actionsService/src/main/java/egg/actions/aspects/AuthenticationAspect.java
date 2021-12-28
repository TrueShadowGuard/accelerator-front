package egg.actions.aspects;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class AuthenticationAspect {

    @Before("execution(* egg.actions.repository.*(..))")
    public void before(){
        System.out.println("AuthenticationAspect before");
    }

    @AfterThrowing("execution(* egg.actions.repository.*(..))")
    public void afterThrowing() {
        System.out.println("AuthenticationAspect after throwing");
    }
}
