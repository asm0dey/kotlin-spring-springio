import{d as D,z as q,t as M,E as H,n as B,ad as T,o as p,b as m,i as d,e as L,x as w}from"../modules/vue-CGVKA8Ms.js";import{C as A,_ as $}from"../index-DwKBFZYr.js";const I=["innerHTML"],P=["textContent"],z=["textContent"],k="slidev-note-fade",r="slidev-note-click-mark",K=D({__name:"NoteDisplay",props:{class:{type:[String,Array],required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1},clicksContext:{type:null,required:!1},autoScroll:{type:Boolean,required:!1}},emits:["markerDblclick","markerClick"],setup(E,{emit:N}){const n=E,g=N,v=q(()=>{var s;return n.clicksContext!=null&&((s=n.noteHtml)==null?void 0:s.includes("slidev-note-click-mark"))}),a=M(null);function h(){var S;if(!a.value||!v.value)return;const s=Array.from(a.value.querySelectorAll(`.${r}`)),l=+(((S=n.clicksContext)==null?void 0:S.current)??A),i=l<0||l>=A,y=new Set;function C(e){!e||e===a.value||(y.add(e),e.parentElement&&C(e.parentElement))}const _=new Map;for(const e of s){const t=e.parentElement,o=Number(e.dataset.clicks);_.set(o,e),C(t),Array.from(t.childNodes).forEach(f=>{if(f.nodeType===3){const x=document.createElement("span");x.textContent=f.textContent,t.insertBefore(x,f),f.remove()}})}const b=Array.from(a.value.querySelectorAll("*"));let c=0;const u=new Map;for(const e of b)u.has(c)||u.set(c,[]),u.get(c).push(e),e.classList.contains(r)&&(c=Number(e.dataset.clicks)||c+1);for(const[e,t]of u)i?t.forEach(o=>o.classList.remove(k)):t.forEach(o=>o.classList.toggle(k,y.has(o)?!1:e!==l));for(const[e,t]of _)t.classList.remove(k),t.classList.toggle(`${r}-past`,i?!1:e<l),t.classList.toggle(`${r}-active`,i?!1:e===l),t.classList.toggle(`${r}-next`,i?!1:e===l+1),t.classList.toggle(`${r}-future`,i?!1:e>l+1),t.ondblclick=o=>{g("markerDblclick",o,e),!o.defaultPrevented&&(n.clicksContext.current=e,o.stopPropagation(),o.stopImmediatePropagation())},t.onclick=o=>{g("markerClick",o,e)},n.autoScroll&&e===l&&t.scrollIntoView({block:"center",behavior:"smooth"})}return H(()=>{var s;return[n.noteHtml,(s=n.clicksContext)==null?void 0:s.current]},()=>{B(()=>{h()})},{immediate:!0}),T(()=>{h()}),(s,l)=>s.noteHtml?(p(),m("div",{key:0,ref_key:"noteDisplay",ref:a,class:d(["prose overflow-auto outline-none slidev-note",[n.class,v.value?"slidev-note-with-clicks":""]]),innerHTML:s.noteHtml},null,10,I)):s.note?(p(),m("div",{key:1,class:d(["prose overflow-auto outline-none slidev-note",n.class])},[L("p",{textContent:w(s.note)},null,8,P)],2)):(p(),m("div",{key:2,class:d(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",n.class])},[L("p",{textContent:w(n.placeholder||"No notes.")},null,8,z)],2))}}),F=$(K,[["__file","/home/runner/work/kotlin-spring-springio/kotlin-spring-springio/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{F as N};
