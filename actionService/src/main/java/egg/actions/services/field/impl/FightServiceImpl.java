package egg.actions.services.field.impl;

import egg.actions.repository.JdbcRepository;
import egg.actions.services.field.FightService;
import egg.models.mainModels.FieldModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service("fightService")
public class FightServiceImpl implements FightService {

    private final JdbcRepository fieldRepository;

    @Autowired
    public FightServiceImpl(@Qualifier("fieldRepository") JdbcRepository fieldRepository) {
        super();
        this.fieldRepository = fieldRepository;
    }

    public void attack(FieldModel attackingField, FieldModel attackedField) {
        Double winChance = countWinChance(attackingField.getAttackForce(), attackedField.getDefenseForce());
        boolean isFieldCaptured = isFieldCaptured(winChance);
        updateFields(isFieldCaptured, attackingField, attackedField);
    }

    private Double countWinChance(Double attackForce, Double defenseForce) {
        double positiveAttackRatio = Math.random() * 0.1 + 1.0;
        double negativeAttackRatio = Math.random() + 1.1;
        double powerBalance = attackForce - defenseForce + 50;
        return powerBalance > 0 ? powerBalance * positiveAttackRatio : (50 + powerBalance) / (10 * negativeAttackRatio);
    }

    private boolean isFieldCaptured(Double winChance) {
        double randomValue = Math.random() * 100;
        return winChance > randomValue;
    }

    private void updateFields(boolean isFieldCaptured, FieldModel attackingField, FieldModel attackedField) {
        double attackingForce = attackingField.getAttackForce();
        double defensedForce = attackedField.getDefenseForce();

        updateAttackingField(attackingForce, defensedForce, attackingField);
        if(isFieldCaptured) {
            updateAttackedField(attackingForce, defensedForce, attackingField, attackedField);
        }
    }

    private void updateAttackingField(double attackingForce, double defensedForce, FieldModel attackingField) {
        double finalAttackingForce = attackingForce - defensedForce;
        attackingField.setDefenseForce(finalAttackingForce > 0 ? finalAttackingForce : 0);
        fieldRepository.save(attackingField);
    }

    private void updateAttackedField(double attackingForce, double defensedForce,
                                           FieldModel attackingField, FieldModel attackedField) {
        double finalDefensingForce = defensedForce - attackingForce;
        attackedField.setDefenseForce(finalDefensingForce > 0 ? finalDefensingForce : 0);
        attackedField.setUser(attackingField.getUser());
        fieldRepository.save(attackedField);
    }
}
