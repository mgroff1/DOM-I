let nav = {
    navarr: ["Services",
    "Product",
    "Vision",
    "Features",
    "About",
    "Contact"],
    imgsrc: "img/logo.png"
};
let cta = {
    h1: "DOM</br>Is</br>Awesome",
    button: "Get Started",
    imgsrc: "img/header-img.png"
};
let maincontent = {
    featuresh4: "Features",
    featurescontent: "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    abouth4: "About",
    aboutcontent: "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    middleimgsrc: "img/mid-page-accent.jpg",

    servicesh4: "Services",
    servicescontent: "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    producth4: "Product",
    productcontent: "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    visionh4: "Vision",

    visioncontent: "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
};

let contact = {
    contacth4: "Contact",
    one: "123 Way 456 Street Somewhere, USA",
    two: "1 (888) 888-8888",
    three: "sales@greatidea.io",
};
let footer = {
    copyright: "Copyright Great Idea! 2018",
};


window.onload = function(){

  let img1 = document.getElementById('cta-img');
  img1.src = cta.imgsrc;
  let img2 = document.getElementById('logo-img');
    img2.src =nav.imgsrc;
  let img3 = document.getElementById('middle-img');
  img3.src = maincontent.middleimgsrc;
// first();
second();
}
let newEle;
function first(){
newEle = document.createElement('div');
  return document.body.appendChild('newEle');
}
function second(){
let parr = [maincontent.featurescontent,
maincontent.aboutcontent,
maincontent.servicescontent,
maincontent.productcontent,
maincontent.visioncontent,contact.one,contact.two,contact.three,footer.copyright];

let h4arr = [maincontent.featuresh4,maincontent.abouth4,maincontent.servicesh4,maincontent.producth4,maincontent.visionh4,contact.contacth4];
let con = document.getElementsByClassName('container');
let header = document.getElementsByTagName('header');
let nava = document.getElementsByTagName('nav');
let arr = document.querySelectorAll('a');
let mainc = document.querySelector('.main-content');
let mainp = document.querySelectorAll('p');
  let count = 0;
let h4 = document.querySelectorAll('h4');
let cont = document.getElementsByClassName('contact');
console.log(cont)
let pz;


arr.forEach(function (a) {
    a.textContent = nav.navarr[count];
    count++;
    console.log(a.textContent)
})

count = 0;
let h1 = document.querySelector('h1');
let ctaText = document.querySelector('cta-text');
h1.innerHTML = (cta.h1);
let button = document.querySelector('button');

button.textContent = cta.button;

h4.forEach(function(h){
    h.textContent = h4arr[count];
       count++;
    console.log(h.textContent)
})

count = 0;
mainp.forEach(function(p){
    p.textContent = parr[count];
    count++;
});

}


function styleIt(el){
  mainc.appendChild(el)
el.styles.width = '100px',
  el.styles.height = '100px',
  el.styles.background = 'red',
  el.styles.position = 'absolute',
  el.styles.top = '100px';
}
