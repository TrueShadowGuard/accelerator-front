package egg.actions.services.field;

import egg.models.mainModels.FieldModel;
import egg.models.mainModels.UserModel;

public interface LikeFieldService {

    void like(UserModel likedUser, FieldModel likedField);
}
