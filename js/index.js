
  let nav = {
    nav1: "Services",
    nav2: "Product",
    nav3: "Vision",
    nav4: "Features",
    nav5: "About",
    nav6: "Contact",
    imgsrc: "img/logo.png"
  };
  let cta = {
    h1: "DOM </br>Is</br> Awesome",
    button: "Get Started",
    imgsrc: "img/header-img.png"
  };
  let maincontent = {
    featuresh4:"Features",
    featurescontent: "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    abouth4:"About",
    aboutcontent: "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    middleimgsrc: "img/mid-page-accent.jpg",

    servicesh4:"Services",
    servicescontent: "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    producth4:"Product",
    productcontent: "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    visionh4:"Vision",

    visioncontent: "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  };

  let contact = {
    contacth4 : "Contact",
    address : "123 Way 456 Street Somewhere, USA",
    phone : "1 (888) 888-8888",
    email : "sales@greatidea.io",
  };
  let footer = {
    copyright : "Copyright Great Idea! 2018",
  };
function markup(){
 return `<div class="container">

        <header>
            <nav>
                <a href="#">${nav.nav1}</a>
                <a href="#">${nav.nav2}</a>
                <a href="#">${nav.nav3}</a>
                <a href="#">${nav.nav4}</a>
                <a href="#">${nav.nav5}</a>
                <a href="#">${nav.nav6}</a>
            </nav>

            <img id="logo-img" class="logo" src=${nav.imgsrc} alt="Great Idea! Company logo.">
        </header>

        <section class="cta">
            <div class="cta-text">
                <h1>${cta.h1}</h1>
                <button>${cta.button}</button>
            </div>
            <img id="cta-img" src=${cta.imgsrc} alt="Image of a code snippet.">
        </section>

        <section class="main-content">

            <div class="top-content">
                <div class="text-content">
                    <h4>${maincontent.featuresh4}</h4>
                    <p>${maincontent.featurescontent}</p>
                </div>
                <div class="text-content">
                    <h4>${maincontent.abouth4}</h4>
                    <p>${maincontent.aboutcontent}</p>
                </div>
            </div>

            <img class="middle-img" id="middle-img" src=${maincontent.middleimgsrc} alt="Image of code snippets across the screen">

            <div class="bottom-content">
                <div class="text-content">
                    <h4>${maincontent.servicesh4}</h4>
                    <p>${maincontent.servicescontent}</p>
                </div>
                <div class="text-content">
                    <h4>${maincontent.producth4}</h4>
                    <p>${maincontent.productcontent}</p>
                </div>
                <div class="text-content">
                    <h4>${maincontent.visionh4}</h4>
                    <p>${maincontent.visioncontent}</p>
                </div>
            </div>

        </section>

        <section class="contact">

            <h4>${contact.contacth4}</h4>

            <p>${contact.address}</p>

            <p>${contact.phone}</p>

            <p>${contact.email}</p>

        </section>

        <footer>
            <p>${footer.copyright}</p>
        </footer>

    </div>`}


console.log(footer.copyright)
let go = markup();
document.body.innerHTML = go;
