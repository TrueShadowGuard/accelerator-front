import {makeAutoObservable, observable} from "mobx";

class NavigationStore {
  open = false;

  constructor() {
    makeAutoObservable(this, {
      open: observable
    });
    this.setOpen = this.setOpen.bind(this);
    this.switchOpen = this.switchOpen.bind(this);
  }

  setOpen(open) {
    this.open = open;
  }

  switchOpen() {
    this.setOpen(!this.open);
  }
}

const navigationStore = new NavigationStore();

export default navigationStore;