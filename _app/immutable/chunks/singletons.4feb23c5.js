import{D as d,s as m}from"./index.99247c05.js";const c=[];function p(e,t=d){let n;const o=new Set;function r(s){if(m(e,s)&&(e=s,n)){const u=!c.length;for(const i of o)i[1](),c.push(i,e);if(u){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function l(s){r(s(e))}function a(s,u=d){const i=[s,u];return o.add(i),o.size===1&&(n=t(r)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:a}}var g;const y=((g=globalThis.__sveltekit_1mvvyam)==null?void 0:g.base)??"";var v;const E=((v=globalThis.__sveltekit_1mvvyam)==null?void 0:v.assets)??y,S="1684544538913",T="sveltekit:snapshot",I="sveltekit:scroll",x="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function k(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=k(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||A(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:o,download:l}}function P(e){let t=null,n=null,o=null,r=null,l=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),l===null&&(l=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=k(s);return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:l==="off"?!1:l===""?!0:null,replace_state:a==="off"?!1:a===""?!0:null}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function l(a){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&a(s=u)})}return{notify:o,set:r,subscribe:l}}function w(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==S;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function A(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function V(e){e.client}const Y={url:h({}),page:h({}),navigating:p(null),updated:w()};export{x as I,_ as P,I as S,T as a,N as b,P as c,U as d,y as e,L as f,O as g,V as h,A as i,Y as s};
