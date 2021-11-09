import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    cssClass: string;

    constructor(cssClass: string) {
        this.eventHandler = new EventHandler();
        this.cssClass = cssClass;
    }

    abstract createAction(): any;

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.cssClass, 'click', action);
    }
}
