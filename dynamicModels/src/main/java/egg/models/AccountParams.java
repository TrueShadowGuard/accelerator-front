package egg.models;

import egg.models.mainModels.FieldModel;
import egg.models.mainModels.UserModel;

import java.util.List;

public class AccountParams {

    private Long id;
    private Integer likes;
    private List<FieldModel> possessionFields;
    private List<UserModel> subscribers;

    AccountParams() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public List<FieldModel> getPossessionFields() {
        return possessionFields;
    }

    public void setPossessionFields(List<FieldModel> possessionFields) {
        this.possessionFields = possessionFields;
    }

    public List<UserModel> getSubscribers() {
        return subscribers;
    }

    public void setSubscribers(List<UserModel> subscribers) {
        this.subscribers = subscribers;
    }
}
