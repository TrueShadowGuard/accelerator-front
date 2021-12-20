package egg.actions.facades;

public interface FieldsManagerFacade{

    void giveFreeField(Long userId);

    void buyTheField(Long buyerUserId, Long boughtFieldId);

    void attackTheField(Long attackingFieldId, Long attackedFieldId);

    void fillInTheField();

    void likeTheField(Long likedUserId, Long likedFieldId);
}
