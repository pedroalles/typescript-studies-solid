import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    cssClass: string;
    url: string;

    constructor(cssClass: string, url: string) {
        this.eventHandler = new EventHandler();
        this.cssClass = cssClass;
        this.url = url;
    }

    abstract createLink(): string;

    bind() {
        const link = this.createLink();
        this.eventHandler.addEventListenerToClass(this.cssClass, 'click', () => window.open(link));
    }
}
