import { inAnims, indexIn, indexOut, pageBGLoad, pageHeadLoad } from "./anim.js";

let firstLoad = true;
const route = (event) => {
  // event.preventDefault(); 
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};

const routes = {
  404: "/404.html",
  "/": "/pages/index.html",
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
  "/projects": "/pages/projects.html",
  "/projects/": "/pages/projects.html"
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] ? routes[path] : routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("content").innerHTML = html;
  console.log(path);
  if(firstLoad){
    pageBGLoad(() => {});
  }
  inAnims[path](console.log);
  if(firstLoad){
    firstLoad = false;
    pageHeadLoad(() => {});
  }
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
