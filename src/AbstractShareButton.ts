import EventHandler from "./EventHandler";
import DOMEventHandler from "./DOMEventHandler";

export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    cssClass: string;

    constructor(eventHendler: EventHandler, cssClass: string) {
        this.eventHandler = eventHendler;
        this.cssClass = cssClass;
    }

    abstract createAction(): any;

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.cssClass, 'click', action);
    }
}
