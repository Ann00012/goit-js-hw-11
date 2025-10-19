import{a as f,S as p,i as n}from"./assets/vendor-DzBlEn4a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="52799161-b762ef396431272d847d94f09",g="https://pixabay.com/api/";function h(s){return f(g,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{if(t.data.hits.length===0)throw new Error("NO RESULTS");return t.data.hits}).catch(t=>{throw t})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(s){const t=s.map(r=>`
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
    `).join("");u.insertAdjacentHTML("beforeend",t),y.refresh()}function v(){u.innerHTML=""}function b(){d.classList.add("is-visible")}function l(){d.classList.remove("is-visible")}const a=document.querySelector(".form");a.addEventListener("submit",function(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(v(),b(),t==="")return l(),n.error({title:"Error",message:"You entered an empty string",position:"topRight",timeout:3e3}),a.reset();h(t).then(r=>{L(r)}).catch(r=>{r.message==="NO RESULTS"?n.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3}):n.error({title:"Error",message:"An unexpected error occurred. Please try again later.",position:"topRight",timeout:3e3})}).finally(()=>{l(),a.reset()})});
//# sourceMappingURL=index.js.map
