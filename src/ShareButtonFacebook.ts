import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractLinkShareButton {

    constructor(eventHandler: EventHandler, cssClass: string, url: string) {
        super(eventHandler, cssClass, url);
    }

    createLink(): string {
        return `http://www.facebook.com/sharer.php?u=${this.url}`;
    }
}
