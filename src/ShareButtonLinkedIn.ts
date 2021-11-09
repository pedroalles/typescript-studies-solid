import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {

    constructor(cssClass: string, url: string) {
        super(cssClass, url);
    }

    createLink(): string {
        return `http://www.linkedin.com/shareArticle?url=${this.url}`;
    }
}
