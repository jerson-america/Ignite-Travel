
// Generic function for creating elements
function createElement(el){
  return document.createElement(el);
}

// Generic function for setting attributes
function setAttributes(el, attrs){
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function init(){

  let parent = document.getElementById("wrapper");

  // Loop through data
  // length of data = # of tiles
  for(let key in data){

    let content = data[key].WordPress;
    
    // Create tiles
    let tiles = createElement("div");
    setAttributes(tiles, {"class": "tiles"});
    // Create element for tiles background
    let tilesBG = createElement("div");
    setAttributes(tilesBG, {"class": "tiles-bg"});

    // insert bg on tiles
    tiles.appendChild(tilesBG);

    // insert image in tiles background
    insertImage(content.Image, tilesBG);

    // create container for the box
    let infoWrap = createElement("div");
    setAttributes(infoWrap, {"class": "info-wrap"});

    getDaysLeft(data[key].DaysLeft, infoWrap);

    // insert infobox on tiles

    // create container box for displaying assets
    let infoBox = createElement("div");
    setAttributes(infoBox, {"class": "info-box"});


    // create logo container
    let topLogo = createElement("div");
    setAttributes(topLogo, {"class": "top-logo"});

    insertImage(content.Logo, topLogo);
    // infoBox contains toplogo, text-header, icons-wrap, and footer-info
    infoBox.appendChild(topLogo);

    // create text-header container
    let textHeader = createElement("div");
    setAttributes(textHeader, {"class": "text-header"});

    infoBox.appendChild(textHeader);

    renderTextHeader(data[key].Name, textHeader);
    renderTextHeader(data[key].Destination, textHeader);

    // create icons container
    let iconsWrap = createElement("div");
    setAttributes(iconsWrap, {"class": "icons-wrap"});

    renderIcons(content.IconsSVG, iconsWrap);

    infoBox.appendChild(iconsWrap);

    // create footer container
    let footerInfo = createElement("div");
    setAttributes(footerInfo, {"class": "footer-info"});

    renderFooter(content.AirOnly, footerInfo);

    infoBox.appendChild(footerInfo);

    // Create footer button
    let anchor = createElement("a");
    renderButton(anchor, infoBox, content.Url);


    infoWrap.appendChild(infoBox);

    tiles.appendChild(infoWrap);

    // FINALLY, append tiles to parent element
    parent.appendChild(tiles);
  }
}

function insertImage(image, el){
    let img;
    // check if image exist and is array
    if(image && Array.isArray(image)){
        for(let i = 0;i < image.length; i++){
            // Create img element based on number of data
            img = createElement("img");
            setAttributes(img, {
                src: image[i].Url,
                alt: image[i].Alt,
                title: image[i].Title
            });
            el.appendChild(img);
        }
    }
}

function getDaysLeft(days, infoWrap){
    // create span container for days left
    let daySpan = createElement("span");
    daySpan.innerHTML = days;
    infoWrap.appendChild(daySpan);
}

function renderBoxLogo(logo, infoBox){
    if(image && Array.isArray(logo)){
        for(let i = 0;i < image.length; i++){
            // Create img element based on number of data
            img = createElement("img");
            setAttributes(img, {
                src: image[i].Url,
                alt: image[i].Alt,
                title: image[i].Title
            });
            tilesBG.appendChild(img);
        }
    }
}

function renderTextHeader(text, textHeader){
    let p = createElement("p");
    p.innerHTML = text;
    textHeader.appendChild(p);
}

function renderIcons(icons, iconsWrap){
    let icon, img, span;
    if(icons && Array.isArray(icons)){
        for(let i = 0;i < icons.length; i++){
            // Create container for every icon
            icon = createElement("div");
            setAttributes(icon, {"class": "icon"})
            img = createElement("img");
            span = createElement("span");
            setAttributes(img, {
                src: icons[i].Url,
                alt: icons[i].Alt
            });
            span.innerHTML = icons[i].Copy;
            icon.appendChild(img);
            icon.appendChild(span);
            iconsWrap.appendChild(icon);
        }
    }
}

function renderFooter(items, footerInfo){
    let pricing, p, value, span, spanSuffix, asterisk, ctr = 0;
    let labels = ["VALUED AT", "UP TO", "FROM"];
    let suffix = ["pp", "OFF!", "pp"];
    if(items && Object.keys(items).length > 0){
        for(let key in items){
            // Create element for each label
            pricing = createElement("div");
            setAttributes(pricing, {"class": "pricing"});
            // create element for label
            p = createElement("p");
            p.innerHTML = labels[ctr];
            pricing.appendChild(p);
            // create element for values
            span = createElement("span");
            span.innerHTML = (ctr != 1? "$ " : "") + formatCurrency(items[key]) + (ctr == 1 ? "%" : "");
            pricing.appendChild(span);
            
            if(ctr == 2) {
              asterisk = createElement("span");
              setAttributes(asterisk, {"class": "asterisk"})
              asterisk.innerHTML = "*";
              pricing.appendChild(asterisk);
            }
            // create element for suffixes
            spanSuffix = createElement("span");
            setAttributes(spanSuffix, {"class": "suffix"})
            spanSuffix.innerHTML = suffix[ctr];
            pricing.appendChild(spanSuffix);
            ctr++;
            // Append pricing element to footer
            footerInfo.appendChild(pricing);
        }
    }
}

function renderButton(anchor, infoBox, link){
    anchor.innerHTML = "Get it now";
    setAttributes(anchor, {
        href: link,
        target: "_blank"
    });

    infoBox.appendChild(anchor);
}

function formatCurrency(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

init();