// NODES

//To find node type
const banner = document.getElementById('page-banner');
console.log(banner.nodeType);

// To find Node name
console.log(banner.nodeName);

// To check if the div has child tag
console.log(banner.hasChildNodes());

// To clone a div
const cloneDiv = banner.cloneNode(true);
console.log(cloneDiv);
