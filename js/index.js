const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



const aTags = document.querySelectorAll('a');
console.log(aTags);
aTags.forEach((node, i) => {
  node.textContent = siteContent.nav[`nav-item-${i+1}`];
  node.style.color = 'green';
});

const nav = document.querySelector('nav');
nav.style.color = 'green';

nav.append('thing');
nav.prepend('nice');

const splashImage = document.getElementsByTagName('img')[1];
splashImage.setAttribute('src', siteContent.cta['img-src']);

const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

const mainContent = document.querySelector('.main-content');
// console.log(mainContent);

const features = mainContent.getElementsByTagName('h4')[0];
features.textContent = siteContent["main-content"]['features-h4'];

const featuresContent = mainContent.getElementsByTagName('p')[0];
featuresContent.textContent = siteContent['main-content']['features-content'];

const about = mainContent.getElementsByTagName('h4')[1];
about.textContent = siteContent['main-content']['about-h4'];

const aboutContent = mainContent.getElementsByTagName('p')[1];
aboutContent.textContent = siteContent['main-content']['about-content'];

const middleImage = document.getElementsByTagName('img')[2];
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const bottomContent = mainContent.querySelector('.bottom-content');
// console.log(bottomContent);

const services = bottomContent.getElementsByTagName('h4')[0];
services.textContent = siteContent['main-content']['services-h4'];

const servicesContent = bottomContent.getElementsByTagName('p')[0]
servicesContent.textContent = siteContent['main-content']['services-content'];

const product = bottomContent.getElementsByTagName('h4')[1];
product.textContent = siteContent['main-content']['product-h4'];

const productContent = bottomContent.getElementsByTagName('p')[1];
productContent.textContent = siteContent['main-content']['product-content'];

const vision = bottomContent.getElementsByTagName('h4')[2];
vision.textContent = siteContent['main-content']['vision-h4'];

const visionContent = bottomContent.getElementsByTagName('p')[2];
visionContent.textContent = siteContent['main-content']['vision-content'];

const contactSection = document.querySelector('.contact');
console.log(contactSection);

const contact = contactSection.getElementsByTagName('h4')[0];
contact.textContent = siteContent['contact']['contact-h4'];

const address = contactSection.getElementsByTagName('p')[0];
address.textContent = siteContent.contact.address;

const phone = contactSection.getElementsByTagName('p')[1];
phone.textContent = siteContent.contact.phone;

const email = contactSection.getElementsByTagName('p')[2];
email.textContent = siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


