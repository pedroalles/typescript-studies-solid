import AbstractShareButton from "./AbstractShareButton";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonPrint from "./ShareButtonPrint";

const url = 'https://www.hltv.org/';

const twitter: AbstractShareButton = new ShareButtonTwitter('.btn-twitter', url);
const facebook: AbstractShareButton = new ShareButtonFacebook('.btn-facebook', url);
const linkedin: AbstractShareButton = new ShareButtonLinkedIn('.btn-linkedin', url);
const print: AbstractShareButton = new ShareButtonPrint('.btn-print');

twitter.bind();
facebook.bind();
linkedin.bind();
print.bind();
