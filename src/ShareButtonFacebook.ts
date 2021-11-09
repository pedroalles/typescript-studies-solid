import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonFacebook extends AbstractLinkShareButton {

    constructor(cssClass: string, url: string) {
        super(cssClass, url);
    }

    createLink(): string {
        return `http://www.facebook.com/sharer.php?u=${this.url}`;
    }
}
