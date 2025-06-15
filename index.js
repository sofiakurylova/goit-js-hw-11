import{S as d,i as f,a as m}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=new d(".gallery a",{spinner:!0,captions:!0,captionDelay:500,captionsData:"alt",overlay:!0,overlayOpacity:.9});function g(a){u.innerHTML=a.map(t=>b(t)).join(""),y.refresh()}function h(){u.innerHTML=""}function L(){p.style.display="block"}function i(){p.style.display="none"}function l(a){f.warning({message:a,position:"topCenter"})}function b({largeImageURL:a,webformatURL:t,tags:o,likes:n,views:e,comments:r,downloads:s}){return`
        <li class="gallery-item">
          <a class="gallery-item-link" href="${a}">
            <img
              class="gallery-item-image"
              src="${t}"
              alt="${o}"
              height="152"
            />
          </a>
          <ul class="gallery-item-specs">
            <li>Likes <span data-likes>${n}</span></li>
            <li>Views <span data-views>${e}</span></li>
            <li>Comments <span data-comments>${r}</span></li>
            <li>Downloads <span data-downloads>${s}</span></li>
          </ul>
        </li>

  `}const w="50783021-cc03e5dbcf508bf27b2e23464",v="https://pixabay.com/api/";function q(a){return m.get(v,{params:{key:w,q:a.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{throw t})}const c=document.querySelector(".form");c.addEventListener("submit",a=>{a.preventDefault();const t=c.elements["search-text"].value;h(),L(),q(t).then(o=>{i(),o.length===0?l("Sorry, there are no images matching your search query. Please try again"):g(o)}).catch(o=>{i(),l(o.message)})});
//# sourceMappingURL=index.js.map
