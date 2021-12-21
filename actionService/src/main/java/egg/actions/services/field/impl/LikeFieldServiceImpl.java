package egg.actions.services.field.impl;

import egg.actions.services.field.LikeFieldService;
import egg.models.mainModels.FieldModel;
import egg.models.mainModels.UserModel;
import org.springframework.stereotype.Service;

@Service("likeFieldService")
public class LikeFieldServiceImpl implements LikeFieldService {

    public void like(UserModel likedUser, FieldModel likedField) {
    }
}
