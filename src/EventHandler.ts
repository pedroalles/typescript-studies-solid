export default interface EventHandler {
    addEventListenerToClass(cssClass: string, event: string, fn: any);
}
