// let nav = {
//     navarr: ["Services",
//     "Product",
//     "Vision",
//     "Features",
//     "About",
//     "Contact"],
//     imgsrc: "img/logo.png"
// };
// let cta = {
//     h1: "DOM</br>Is</br>Awesome",
//     button: "Get Started",
//     imgsrc: "img/header-img.png"
// };
// let maincontent = {
//     featuresh4: "Features",
//     featurescontent: "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//
//     abouth4: "About",
//     aboutcontent: "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//
//     middleimgsrc: "img/mid-page-accent.jpg",
//
//     servicesh4: "Services",
//     servicescontent: "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//
//     producth4: "Product",
//     productcontent: "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//
//     visionh4: "Vision",
//
//     visioncontent: "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
// };
//
// let contact = {
//     contacth4: "Contact",
//     one: "123 Way 456 Street Somewhere, USA",
//     two: "1 (888) 888-8888",
//     three: "sales@greatidea.io",
// };
// let footer = {
//     copyright: "Copyright Great Idea! 2018",
// };
//
//
// window.onload = function(){
//
//   let img1 = document.getElementById('cta-img');
//   img1.src = cta.imgsrc;
//   let img2 = document.getElementById('logo-img');
//     img2.src =nav.imgsrc;
//   let img3 = document.getElementById('middle-img');
//   img3.src = maincontent.middleimgsrc;
// // first();
// second();
// }
// let newEle;
// function first(){
// newEle = document.createElement('div');
//   return document.body.appendChild('newEle');
// }
// function second(){
// let parr = [maincontent.featurescontent,
// maincontent.aboutcontent,
// maincontent.servicescontent,
// maincontent.productcontent,
// maincontent.visioncontent,contact.one,contact.two,contact.three,footer.copyright];
//
// let h4arr = [maincontent.featuresh4,maincontent.abouth4,maincontent.servicesh4,maincontent.producth4,maincontent.visionh4,contact.contacth4];
// let con = document.getElementsByClassName('container');
// let header = document.getElementsByTagName('header');
// let nava = document.getElementsByTagName('nav');
// let arr = document.querySelectorAll('a');
// let mainc = document.querySelector('.main-content');
// let mainp = document.querySelectorAll('p');
//   let count = 0;
// let h4 = document.querySelectorAll('h4');
// let cont = document.getElementsByClassName('contact');
// console.log(cont)
// let pz;
//
//
// arr.forEach(function (a) {
//     a.textContent = nav.navarr[count];
//     count++;
//     console.log(a.textContent)
// })
//
// count = 0;
// let h1 = document.querySelector('h1');
// let ctaText = document.querySelector('cta-text');
// h1.innerHTML = (cta.h1);
// let button = document.querySelector('button');
//
// button.textContent = cta.button;
//
// h4.forEach(function(h){
//     h.textContent = h4arr[count];
//        count++;
//     console.log(h.textContent)
// })
//
// count = 0;
// mainp.forEach(function(p){
//     p.textContent = parr[count];
//     count++;
// });
//
// }
//
//
//
//



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
    "h1": "DOM <br/> Is <br/> Awesome",
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
    "address" : "123 Way 456 Street <br/> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navs = document.querySelectorAll('header nav a')

const ctaTexth1 = document.querySelector('.cta-text h1')
const ctaTextButton = document.querySelector('.cta-text button')
const ctaImage = document.getElementById("cta-img")

const h4Text = document.querySelectorAll('.text-content h4')
const pText = document.querySelectorAll('.text-content p')

const middleImage = document.getElementById('middle-img')


const contactH4 = document.querySelector('.contact h4')
const contactInfo = document.querySelectorAll('.contact p')

const footerP = document.querySelector('footer p')

let num = 1;
navs.forEach(function(n){
  n.textContent = siteContent['nav']['nav-item-'+num]
  num++;
})

ctaTexth1.innerHTML = "DOM <br/> Is <br/> Awesome";
ctaTextButton.textContent = siteContent["cta"]["button"]
ctaImage.src = siteContent["cta"]["img-src"]
console.log(siteContent["main-content"]);

let arr = ["features","about","services","product","vision"];
let n =0;
h4Text.forEach(function(h4){
  h4.textContent = siteContent["main-content"][arr[n]+"-h4"]
  n++;
})
n=0;
pText.forEach(function(p){
  p.textContent = siteContent["main-content"][arr[n]+"-content"];
  n++;
})

middleImage.src = siteContent["main-content"]["middle-img-src"]

contactH4.textContent = siteContent["contact"]["contact-h4"]
contactInfo[0].innerHTML = siteContent["contact"]["address"]
contactInfo[1].textContent = siteContent["contact"]["phone"]
contactInfo[2].textContent = siteContent["contact"]["email"]

footerP.textContent = siteContent["footer"]["copyright"]


//Adding New Content:
navs.forEach(element => element.style.color = 'green')

//Creating <a> tag "What We're Up To"
eleA = document.createElement("a")
eleA.href = '#'
eleA.textContent = "Still Want to Learn More"

const parentNav = document.querySelector('header nav')

parentNav.prepend(eleA)
parentNav.append(eleAVal)
