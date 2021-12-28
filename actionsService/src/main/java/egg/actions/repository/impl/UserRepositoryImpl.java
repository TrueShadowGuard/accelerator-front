package egg.actions.repository.impl;

import egg.actions.repository.HibernateDao;
import egg.actions.repository.UserRepository;
import egg.models.mainModels.UserModel;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public class UserRepositoryImpl extends HibernateDao<UserModel> implements UserRepository {

    @Autowired
    public UserRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    public UserModel findById(Long userId) {
        return sessionFactory.getCurrentSession().get(UserModel.class, userId);
    }

    public void save(UserModel userModel) {
        System.out.println("Save User");
    }
}
