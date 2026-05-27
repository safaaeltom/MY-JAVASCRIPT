const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:',banner.nodeType);
console.log('#page-banner node name is:',banner.nodeName);
console.log('#page-banner has child nodes:',banner.hasChildNodes());

// clone a node
const clonedBanner = banner.cloneNode(true); // pass true to give nested content
console.log(clonedBanner.innerHTML);