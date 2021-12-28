package egg.actions.services;

import egg.models.mainModels.FieldModel;
import egg.models.mainModels.UserModel;

public interface ActionPossibilityService {

    boolean isFieldFree(FieldModel field);

    boolean isUserSolventToBuyTheField(UserModel user);
}
