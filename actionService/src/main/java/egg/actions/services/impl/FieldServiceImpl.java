package egg.actions.services.impl;

import egg.actions.repository.FieldRepository;
import egg.actions.services.FieldService;
import egg.actions.services.field.FightService;
import egg.actions.services.field.LikeFieldService;
import egg.actions.services.field.RealtyService;
import egg.models.mainModels.FieldModel;
import egg.models.mainModels.UserModel;
import org.springframework.stereotype.Service;

@Service("fieldService")
public class FieldServiceImpl implements FieldService {

    private RealtyService realtyService;
    private FightService fightService;
    private LikeFieldService likeFieldService;

    private FieldRepository repo;

    public void giveFreeField(Long userId) {
        UserModel user = getUserById(userId);
        realtyService.giveFreeField(user);
    }

    public void buyTheField(Long buyerUserId, Long boughtFieldId) {
        UserModel buyerUser = getUserById(buyerUserId);
        FieldModel boughtField = getFieldById(boughtFieldId);
        realtyService.buyTheField(buyerUser, boughtField);
    }

    public void attackTheField(Long attackingFieldId, Long attackedFieldId) {
        FieldModel attackingField= getFieldById(attackingFieldId);
        FieldModel attackedField = getFieldById(attackedFieldId);
        fightService.attack(attackingField, attackedField);
    }

    public void fillInTheField() {
    }

    public void likeTheField(Long likedUserId, Long likedFieldId) {
        UserModel likedUser = getUserById(likedUserId);
        FieldModel likedField = getFieldById(likedFieldId);
        likeFieldService.like(likedUser, likedField);
    }

    private UserModel getUserById(Long userId) {
        return repo.getById(userId, UserModel.class);
    }

    private FieldModel getFieldById(Long fieldId) {
        return repo.getById(fieldId, FieldModel.class);
    }
}
