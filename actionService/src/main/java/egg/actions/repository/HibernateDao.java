package egg.actions.repository;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import sun.reflect.generics.reflectiveObjects.ParameterizedTypeImpl;

import java.lang.reflect.ParameterizedType;

public abstract class HibernateDao<T> {

    protected final SessionFactory sessionFactory;
    protected final Class<T> persistentClass;

    @Autowired
    public HibernateDao(SessionFactory sessionFactory){
        super();
        this.sessionFactory = sessionFactory;
        this.persistentClass = calculatePersistentClass();
    }

    public Class<T> calculatePersistentClass() {
        Object clazz = this.getParameterizedType().getActualTypeArguments()[0];
        return clazz instanceof ParameterizedTypeImpl ? ((ParameterizedTypeImpl)clazz).getRawType() : (Class)clazz;
    }

    private ParameterizedType getParameterizedType() {
        for(Class clazz = this.getClass(); clazz != null; clazz = clazz.getSuperclass()) {
            if (clazz.getGenericSuperclass() instanceof ParameterizedType) {
                return (ParameterizedType)clazz.getGenericSuperclass();
            }
        }
        return null;
    }
}
