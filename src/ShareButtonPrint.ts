import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {

    constructor(cssClass: string, url: string) {
        super(cssClass, url);
    }

    createLink(): string {
        throw new Error('Unsupported method exception.');
    }
}
