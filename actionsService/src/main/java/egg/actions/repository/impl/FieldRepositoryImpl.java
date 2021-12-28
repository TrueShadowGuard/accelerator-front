package egg.actions.repository.impl;

import egg.actions.repository.FieldRepository;
import egg.actions.repository.HibernateDao;
import egg.models.mainModels.FieldModel;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("fieldRepository")
public class FieldRepositoryImpl extends HibernateDao<FieldModel> implements FieldRepository {

    @Autowired
    public FieldRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    public FieldModel findById(Long fieldId) {
        return sessionFactory.getCurrentSession().get(FieldModel.class, fieldId);
    }

    public void save(FieldModel fieldModel) {
        System.out.println("Save Field");
    }

    public FieldModel findByUserId(Long userId) {
        return (FieldModel) sessionFactory.getCurrentSession().createCriteria(FieldModel.class)
                .add(Restrictions.eq("user.id", userId))
                .list().get(0);
    }
}
