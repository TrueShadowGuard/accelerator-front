package egg.actions.services.field.impl;

import egg.actions.repository.JdbcRepository;
import egg.actions.services.field.LikeFieldService;
import egg.models.mainModels.FieldModel;
import egg.models.mainModels.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("likeFieldService")
public class LikeFieldServiceImpl implements LikeFieldService {

    private final JdbcRepository fieldRepository;
    private final JdbcRepository userRepository;

    @Autowired
    public LikeFieldServiceImpl(@Qualifier("fieldRepository") JdbcRepository fieldRepository,
                                @Qualifier("userRepository") JdbcRepository userRepository){
        super();
        this.fieldRepository = fieldRepository;
        this.userRepository = userRepository;
    }

    public void like(UserModel likedUser, FieldModel likedField) {
        List<FieldModel> relatedFields = likedField.getRelatedFields();
        likeTargetField(likedField);
        likeRelatedField(relatedFields);
        addLikesToUser(likedUser, relatedFields);
    }

    private void likeTargetField(FieldModel likedField) {
        addLikeAndSaveField(likedField);
    }

    private void likeRelatedField(List<FieldModel> relatedFields) {
        for(FieldModel likedField: relatedFields){
            addLikeAndSaveField(likedField);
        }
    }

    private void addLikesToUser(UserModel likedUser, List<FieldModel> relatedFields) {
        Integer currentLikes = likedUser.getAccountParams().getLikes();
        Integer likedFields = relatedFields.size();
        likedUser.getAccountParams().setLikes(currentLikes + likedFields + 1);
        userRepository.save(likedUser);
    }

    private void addLikeAndSaveField(FieldModel likedField) {
        Integer currentLikes = likedField.getLikes();
        likedField.setLikes(currentLikes + 1);
        fieldRepository.save(likedField);
    }
}
