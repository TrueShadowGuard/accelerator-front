package egg.actions.repository;

import egg.models.mainModels.FieldModel;

public interface FieldRepository {

    FieldModel findById(Long fieldId);

    void save(FieldModel fieldModel);

    FieldModel findByUserId(Long userId);
}
