import EventHandler from "./EventHandler";

export default class MockEventHandler implements EventHandler {
    addEventListenerToClass(cssClass: string, event: string, fn: any) {
        console.log(cssClass, event, fn);
    }
}
