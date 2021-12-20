package egg.actions.services.field;

public abstract class RentManager {

    protected RentService statusService;

    public RentManager(RentService statusService) {
        this.statusService = statusService;
    }

    public abstract void payDayRent();
}
