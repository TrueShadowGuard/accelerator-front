package egg.actions.services.field.impl;

import egg.actions.repository.FieldRepository;
import egg.actions.services.field.RealtyService;
import egg.models.FieldStatus;
import egg.models.mainModels.FieldModel;
import egg.models.mainModels.UserModel;

import java.util.Date;

import static egg.models.FieldStatus.WHITE_FIELD;
import static java.lang.Math.round;

public class RealtyServiceImpl implements RealtyService {

    private static final Double DEFAULT_DEFENSE_FORCE = 100.0;
    private static final Double DEFAULT_ATTACK_FORCE = 0.0;
    private static final Integer FIELD_PRICE = 100;

    private static final Double DEFAULT_STATUS_COEFFICIENT = 1.0;
    private static final Double GOLDEN_STATUS_COEFFICIENT = 1.0;
    private static final Double WHITE_STATUS_COEFFICIENT = 1.0;

    private FieldRepository repo;

    public void giveFreeField(UserModel user){
        FieldModel newFreeField = generateFreeField(user);
        repo.save(newFreeField);
    }

    public void buyTheField(UserModel buyerUser, FieldModel boughtField) {
        Integer fieldPrice = evaluatePrice(buyerUser, boughtField);
        boolean isUserCansBuyField = buyerUser.getAccountParams().getLikes() >= fieldPrice;
        if(isUserCansBuyField) {

        }
    }

    public Integer evaluateFieldPrice(UserModel buyerUser, FieldModel boughtField) {
        return evaluatePrice(buyerUser, boughtField);
    }

    private FieldModel generateFreeField(UserModel user) {
        FieldModel newFreeField = new FieldModel(WHITE_FIELD);
        newFreeField.setUser(user);
        newFreeField.setDefenseForce(DEFAULT_DEFENSE_FORCE);
        newFreeField.setAttackForce(DEFAULT_ATTACK_FORCE);
        newFreeField.setLatitude(generateLatitude());
        newFreeField.setLongitude(generateLongitude());
        newFreeField.setCaptureDate(new Date());
        return newFreeField;
    }

    private Double generateLatitude() {
        return 1.0;
    }

    private Double generateLongitude() {
        return 1.0;
    }

    private Integer evaluatePrice(UserModel buyerUser, FieldModel boughtField) {
        FieldStatus fieldStatus = boughtField.getStatus();
        int userSubscribers = buyerUser.getAccountParams().getSubscribers().size();
        int userFields = buyerUser.getAccountParams().getPossessionFields().size();
        int userLikes = buyerUser.getAccountParams().getLikes();
        double targetFieldPrice = FIELD_PRICE
                * getStatusCoefficient(fieldStatus)
                * getSubscriberCoefficient(userSubscribers)
                * getFieldCoefficient(userFields)
                * getLikeCoefficient(userLikes);
        return (int) round(targetFieldPrice);
    }

    private Double getStatusCoefficient( FieldStatus fieldStatus) {
        switch (fieldStatus) {
            case GOLDEN_FIELD:
                return GOLDEN_STATUS_COEFFICIENT;
            case WHITE_FIELD:
                return WHITE_STATUS_COEFFICIENT;
        }
        return DEFAULT_STATUS_COEFFICIENT;
    }

    private Double getSubscriberCoefficient(int userSubscribers) {
        return 1.0;
    }

    private Double getFieldCoefficient(int userFields) {
        return 1.0;
    }

    private Double getLikeCoefficient(int userLikes) {
        return 1.0;
    }
}
