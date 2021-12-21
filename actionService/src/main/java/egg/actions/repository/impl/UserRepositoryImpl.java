package egg.actions.repository.impl;

import egg.actions.repository.JdbcRepository;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public class UserRepositoryImpl implements JdbcRepository {

    public void save(Object object) {
    }
}
