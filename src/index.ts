import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";

const url = 'https://www.hltv.org/';

const twitter = new ShareButtonTwitter('.btn-twitter', url);
const facebook = new ShareButtonFacebook('.btn-facebook', url);
const linkedin = new ShareButtonLinkedIn('.btn-linkedin', url);

twitter.bind();
facebook.bind();
linkedin.bind();
