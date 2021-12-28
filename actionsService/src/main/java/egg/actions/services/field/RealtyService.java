package egg.actions.services.field;

import egg.models.mainModels.FieldModel;
import egg.models.mainModels.UserModel;
import org.springframework.stereotype.Service;

@Service("realtyService")
public interface RealtyService {
    
    void giveFreeField(UserModel user);

    void buyTheField(UserModel buyerUser, FieldModel boughtField);

    Integer evaluateFieldPrice(UserModel buyerUser, FieldModel boughtField);
}
