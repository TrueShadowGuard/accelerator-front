package egg.actions.facades.impl;

import egg.actions.facades.FieldsManagerFacade;
import egg.actions.services.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class FieldsManagerFacadeImpl implements FieldsManagerFacade {

    private final FieldService fieldService;

    @Autowired
    public FieldsManagerFacadeImpl(FieldService fieldService){
        super();
        this.fieldService = fieldService;
    }

    public void giveFreeField(Long userId) {
        fieldService.giveFreeField(userId);
    }

    public void buyTheField(Long buyerUserId, Long boughtFieldId) {
        fieldService.buyTheField(buyerUserId, boughtFieldId);
    }

    public void attackTheField(Long attackingFieldId, Long attackedFieldId) {
        fieldService.attackTheField(attackingFieldId, attackedFieldId);
    }

    public void fillInTheField() {
        fieldService.fillInTheField();
    }

    public void likeTheField(Long likedUserId, Long likedFieldId) {
        fieldService.likeTheField(likedUserId, likedFieldId);
    }
}

