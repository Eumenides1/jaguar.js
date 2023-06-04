import{jsx as p,jsxs as _}from"react/jsx-runtime";import{useState as G,useEffect as $,useRef as M}from"react";var D=typeof global=="object"&&global&&global.Object===Object&&global;const F=D;var U=typeof self=="object"&&self&&self.Object===Object&&self,q=F||U||Function("return this")();const R=q;var X=R.Symbol;const v=X;var B=Object.prototype,Y=B.hasOwnProperty,z=B.toString,y=v?v.toStringTag:void 0;function J(e){var t=Y.call(e,y),r=e[y];try{e[y]=void 0;var i=!0}catch{}var l=z.call(e);return i&&(t?e[y]=r:delete e[y]),l}var V=Object.prototype,K=V.toString;function Q(e){return K.call(e)}var Z="[object Null]",ee="[object Undefined]",A=v?v.toStringTag:void 0;function te(e){return e==null?e===void 0?ee:Z:A&&A in Object(e)?J(e):Q(e)}function ne(e){return e!=null&&typeof e=="object"}var re="[object Symbol]";function ie(e){return typeof e=="symbol"||ne(e)&&te(e)==re}var oe=/\s/;function ae(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var ce=/^\s+/;function le(e){return e&&e.slice(0,ae(e)+1).replace(ce,"")}function x(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var N=0/0,se=/^[-+]0x[0-9a-f]+$/i,de=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,ue=parseInt;function L(e){if(typeof e=="number")return e;if(ie(e))return N;if(x(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=x(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=le(e);var r=de.test(e);return r||fe.test(e)?ue(e.slice(2),r?2:8):se.test(e)?N:+e}var me=function(){return R.Date.now()};const w=me;var ge="Expected a function",pe=Math.max,be=Math.min;function he(e,t,r){var i,l,s,o,n,c,d=0,m=!1,f=!1,b=!0;if(typeof e!="function")throw new TypeError(ge);t=L(t)||0,x(r)&&(m=!!r.leading,f="maxWait"in r,s=f?pe(L(r.maxWait)||0,t):s,b="trailing"in r?!!r.trailing:b);function S(a){var g=i,h=l;return i=l=void 0,d=a,o=e.apply(h,g),o}function H(a){return d=a,n=setTimeout(T,t),m?S(a):o}function C(a){var g=a-c,h=a-d,k=t-g;return f?be(k,s-h):k}function I(a){var g=a-c,h=a-d;return c===void 0||g>=t||g<0||f&&h>=s}function T(){var a=w();if(I(a))return O(a);n=setTimeout(T,C(a))}function O(a){return n=void 0,b&&i?S(a):(i=l=void 0,o)}function P(){n!==void 0&&clearTimeout(n),d=0,i=c=l=n=void 0}function W(){return n===void 0?o:O(w())}function E(){var a=w(),g=I(a);if(i=arguments,l=this,c=a,g){if(n===void 0)return H(c);if(f)return clearTimeout(n),n=setTimeout(T,t),S(c)}return n===void 0&&(n=setTimeout(T,t)),o}return E.cancel=P,E.flush=W,E}var ye="Expected a function";function Te(e,t,r){var i=!0,l=!0;if(typeof e!="function")throw new TypeError(ye);return x(r)&&(i="leading"in r?!!r.leading:i,l="trailing"in r?!!r.trailing:l),he(e,t,{leading:i,maxWait:t,trailing:l})}let u=[];const j=56;function ve(e,t){const r=parseInt(window.getComputedStyle(e).paddingTop,10),i=window.scrollY+e.getBoundingClientRect().top+r-j;window.scrollTo({left:0,top:i,behavior:t?"smooth":"auto"})}function xe(){const e=document.getElementById("aside-marker"),t=document.getElementById("aside-container"),r=Array.from((t==null?void 0:t.getElementsByTagName("a"))||[]).map(o=>decodeURIComponent(o.hash));if(!t)return;const i=(o,n)=>{if(o[n]){const c=o[n].getAttribute("href"),d=r.findIndex(f=>f===c);(t==null?void 0:t.querySelector(`a[href="#${c.slice(1)}"]`))&&(e.style.top=`${33+d*28}px`,e.style.opacity="1")}},s=Te(()=>{if(u=Array.from(document.querySelectorAll(".jaguar-doc .header-anchor")).filter(n=>{var c;return((c=n.parentElement)==null?void 0:c.tagName)!=="H1"}),document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight){i(u,u.length-1);return}for(let n=0;n<u.length;n++){const c=u[n],d=u[n+1],m=Math.ceil(window.scrollY),f=c.parentElement.offsetTop-j;if(!d){i(u,n);break}if(n===0&&m<f||m==0){i(u,0);break}const b=d.parentElement.offsetTop-j;if(m>=f&&m<b){i(u,n);break}}},100);return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}}function Se(e){const[t,r]=G(e);return $(()=>{}),t}function Ee(e){const{headers:t=[]}=e,r=Se(t),i=r.length>0,l=M(null);$(()=>{const o=xe();return()=>{o()}},[]);const s=o=>p("li",{children:p("a",{href:`#${o.id}`,className:"block leading-7 text-text-2 hover:text-text-1",transition:"color duration-300",style:{paddingLeft:(o.depth-2)*12},onClick:n=>{n.preventDefault();const c=document.getElementById(o.id);c&&ve(c,!1)},children:o.text})},o.id);return p("div",{flex:"~ col 1",style:{width:"var(--jaguar-aside-width)"},children:p("div",{children:i&&_("div",{id:"aside-container",className:"relative divider-left pl-4 text-13px font-medium",children:[p("div",{ref:l,id:"aside-marker",className:"absolute top-33px opacity-0 w-1px h-18px bg-brand",style:{left:"-1px",transition:"top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s"}}),p("div",{"leading-7":"~",text:"13px",font:"semibold",children:"ON THIS PAGE"}),p("nav",{children:p("ul",{relative:"~",children:r.map(s)})})]})})})}window.ISLANDS={Aside:Ee};window.ISLAND_PROPS=JSON.parse(document.getElementById("island-props").textContent);