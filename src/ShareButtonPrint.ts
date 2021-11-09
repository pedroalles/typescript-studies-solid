import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonPrint extends AbstractShareButton {

    constructor(eventHandler: EventHandler, cssClass: string) {
        super(eventHandler, cssClass);
    }

    createAction() {
        return () => window.print();
    }
}
