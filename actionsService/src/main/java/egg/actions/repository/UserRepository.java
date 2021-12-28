package egg.actions.repository;

import egg.models.mainModels.UserModel;

public interface UserRepository {

    UserModel findById(Long userId);

    void save(UserModel userModel);
}
