package egg.actions.services.impl;

import egg.actions.services.ActionPossibilityService;
import egg.models.mainModels.FieldModel;
import egg.models.mainModels.UserModel;

public class ActionPossibilityServiceImpl implements ActionPossibilityService {

    public boolean isFieldFree(FieldModel field) {
        return true;
    }

    public boolean isUserSolventToBuyTheField(UserModel user) {
        return true;
    }
}
