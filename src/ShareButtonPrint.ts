import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {

    constructor(cssClass: string) {
        super(cssClass);
    }

    createAction() {
        return () => window.print();
    }
}
