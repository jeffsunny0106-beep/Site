const wa=COMPANY.whatsapp.replace(/\D/g,"");
document.querySelectorAll("[data-wa]").forEach(a=>a.href="https://wa.me/"+wa+"?text="+encodeURIComponent(a.dataset.wa||"Hello, I would like to plan a Kilimanjaro trek."));
document.querySelectorAll("[data-co]").forEach(n=>n.textContent=COMPANY[n.dataset.co]);
document.querySelectorAll("[data-mail]").forEach(a=>a.href="mailto:"+COMPANY.email);
document.querySelectorAll("[data-tel]").forEach(a=>a.href="tel:"+COMPANY.phone.replace(/\s/g,""));
const hd=document.getElementById("hd"),tg=document.getElementById("tg"),mn=document.getElementById("mn");
addEventListener("scroll",()=>hd.classList.toggle("solid",scrollY>40),{passive:true});hd.classList.toggle("solid",scrollY>40);
tg.addEventListener("click",()=>{const o=mn.classList.toggle("open");tg.setAttribute("aria-expanded",o)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(n=>io.observe(n));
const fl=document.querySelectorAll("[data-f]"),gi=document.querySelectorAll(".gi");
fl.forEach(b=>b.addEventListener("click",()=>{fl.forEach(x=>x.classList.remove("on"));b.classList.add("on");gi.forEach(g=>g.hidden=b.dataset.f!="all"&&g.dataset.c!=b.dataset.f)}));
const lb=document.getElementById("lb");
if(lb){gi.forEach(g=>g.addEventListener("click",()=>{lb.querySelector("img").src=g.querySelector("img").src;lb.querySelector("img").alt=g.querySelector("img").alt;lb.classList.add("open")}));
lb.addEventListener("click",()=>lb.classList.remove("open"));addEventListener("keydown",e=>e.key=="Escape"&&lb.classList.remove("open"))}
