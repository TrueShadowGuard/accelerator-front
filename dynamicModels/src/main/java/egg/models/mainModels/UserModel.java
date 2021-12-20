package egg.models.mainModels;

import egg.models.AccountParams;
import egg.models.Contacts;

public class UserModel {

    private Long id;
    private Contacts contacts;
    private AccountParams accountParams;

    public UserModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Contacts getContacts() {
        return contacts;
    }

    public void setContacts(Contacts contacts) {
        this.contacts = contacts;
    }

    public AccountParams getAccountParams() {
        return accountParams;
    }

    public void setAccountParams(AccountParams accountParams) {
        this.accountParams = accountParams;
    }
}
