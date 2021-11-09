import AbstractShareButton from "./AbstractShareButton";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonPrint from "./ShareButtonPrint";
import DOMEventHandler from "./DOMEventHandler";
import MockEventHandler from "./MockEventHandler";


const eventHandler = new DOMEventHandler();
// const eventHandler = new MockEventHandler();
const url = 'https://www.hltv.org/';

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, '.btn-twitter', url);
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, '.btn-facebook', url);
const linkedin: AbstractShareButton = new ShareButtonLinkedIn(eventHandler, '.btn-linkedin', url);
const print: AbstractShareButton = new ShareButtonPrint(eventHandler, '.btn-print');

twitter.bind();
facebook.bind();
linkedin.bind();
print.bind();
