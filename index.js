import{a as p,i as u,S as m}from"./assets/vendor-DzBlEn4a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g="52799161-b762ef396431272d847d94f09",h="https://pixabay.com/api/";function y(s){return p(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{if(t.data.hits.length==0)throw new Error;return t.data.hits}).catch(t=>(u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]))}const d=document.querySelector(".gallery"),f=document.querySelector(".loader"),l=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function v(s){const t=s.map(r=>`
      <li>
        <a href="${r.largeImageURL}" >
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="image-info">
  <div class="stat">
    <span>Likes</span>
    <strong>${r.likes}</strong>
  </div>
  <div class="stat">
    <span>Comments</span>
    <strong>${r.comments}</strong>
  </div>
  <div class="stat">
    <span>Views</span>
    <strong>${r.views}</strong>
  </div>
  <div class="stat">
    <span>Downloads</span>
    <strong>${r.downloads}</strong>
  </div>
</div>
    </li>
    `).join("");console.log(l),d.insertAdjacentHTML("beforeend",t),l.refresh()}function L(){d.innerHTML=""}function b(){f.classList.add("is-visible")}function i(){f.classList.remove("is-visible")}const a=document.querySelector(".form");a.addEventListener("submit",function(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(L(),b(),t==="")return i(),u.error({title:"Error",message:"You entered an empty string",position:"topRight",timeout:3e3}),a.reset();y(t).then(r=>{i(),r.length>0&&v(r)}).catch(()=>{i()}).finally(()=>{a.reset()})});
//# sourceMappingURL=index.js.map
