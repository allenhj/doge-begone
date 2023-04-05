const twitterLogoAttributes = {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M20.4208 0.332767C19.5876 0.852969 18.6669 1.2313 17.6829 1.43373C16.899 0.551344 15.7787 0 14.5385 0C12.1611 0 10.2317 2.03467 10.2317 4.54397C10.2317 4.90039 10.2687 5.24584 10.3427 5.57861C6.76208 5.38887 3.58794 3.58201 1.46175 0.829323C1.09057 1.50293 0.878621 2.28439 0.878621 3.11659C0.878621 4.69219 1.63893 6.08324 2.79566 6.89814C2.0903 6.87623 1.42475 6.66976 0.842736 6.33181V6.38717C0.842736 8.58966 2.32804 10.4271 4.30059 10.8429C3.9395 10.9496 3.55822 11.0032 3.16517 11.0032C2.88762 11.0032 2.6168 10.9756 2.35439 10.9225C2.90276 12.7271 4.49291 14.0414 6.37855 14.0766C4.90447 15.2958 3.04574 16.0224 1.02777 16.0224C0.680132 16.0224 0.336422 16.0017 0 15.9601C1.90639 17.2474 4.17219 18 6.60452 18C14.5301 18 18.8626 11.0771 18.8626 5.07167C18.8626 4.87386 18.8592 4.67662 18.8519 4.48284C19.6936 3.84211 20.4247 3.0422 21 2.13098C20.2285 2.49201 19.3975 2.73654 18.5262 2.84611C19.416 2.28439 20.0989 1.39393 20.4208 0.332767Z"
}

function appendSVGChild(elementType,target,attributes = {},text = '') {
  const element = document.createElementNS('http://www.w3.org/2000/svg',elementType);
  Object.entries(attributes).map(a => element.setAttribute(a[0],a[1]));
  if (text) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }
  target.appendChild(element);
  return element;
};

const updateDogeToTwitter = () => {
  let header = document.getElementsByTagName('header')[0];
  if (!header) console.log('header not found');
  let dogeIconSvg = header.getElementsByTagName('svg')[0];
  if (!dogeIconSvg) console.log('dogeIconSvg not found');
  let dogeIconPath = dogeIconSvg.children[0];
  if (!dogeIconPath) console.log('dogeIconPath not found');

  if (dogeIconSvg && dogeIconPath) {
    console.log('dogeIconSvg', dogeIconSvg);
    dogeIconSvg.setAttribute('viewBox', '0 0 21 18');
    dogeIconSvg.style.marginLeft = '4px';
    dogeIconSvg.removeChild(dogeIconPath);
    appendSVGChild('path', dogeIconSvg, twitterLogoAttributes);
  }
}

setTimeout(updateDogeToTwitter, 3000);

