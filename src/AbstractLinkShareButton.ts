import AbstractShareButton from "./AbstractShareButton";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string;

    constructor(cssClass: string, url: string) {
        super(cssClass);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): any {
        const link = this.createLink();
        return () => window.open(link);
    }
}
