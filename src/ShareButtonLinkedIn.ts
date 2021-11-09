import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {

    constructor(eventHandler: EventHandler, cssClass: string, url: string) {
        super(eventHandler, cssClass, url);
    }

    createLink(): string {
        return `http://www.linkedin.com/shareArticle?url=${this.url}`;
    }
}
