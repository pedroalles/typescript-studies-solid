import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonTwitter extends AbstractLinkShareButton {

    constructor(cssClass: string, url: string) {
        super(cssClass, url);
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`;
    }
}
