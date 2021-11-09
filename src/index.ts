import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonPrint from "./ShareButtonPrint";

const url = 'https://www.hltv.org/';

const twitter = new ShareButtonTwitter('.btn-twitter', url);
const facebook = new ShareButtonFacebook('.btn-facebook', url);
const linkedin = new ShareButtonLinkedIn('.btn-linkedin', url);
const print = new ShareButtonPrint('.btn-print', url);

twitter.bind();
facebook.bind();
linkedin.bind();
print.bind();
