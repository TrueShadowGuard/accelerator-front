package egg.actions.repository.impl;

import egg.actions.repository.JdbcRepository;
import org.springframework.stereotype.Repository;

@Repository("fieldRepository")
public class FieldRepositoryImpl implements JdbcRepository {

    public void save(Object object) {
    }
}