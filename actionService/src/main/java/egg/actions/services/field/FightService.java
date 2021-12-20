package egg.actions.services.field;

import egg.models.mainModels.FieldModel;

public interface FightService {

    void attack(FieldModel attackingField, FieldModel attackedField);
}
