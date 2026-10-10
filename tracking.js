/* PROTOTYPE: sample data. To go live, make getTrekStatus() return the same fields from your backend
   (GPS device/phone -> API + database -> REST polling or WebSocket: new WebSocket("wss://api.example.com/treks/ID")). */
const CHECKPOINTS=[["Machame Gate",1640],["Machame Camp",2835],["Shira Camp",3750],["Barranco Camp",3985],["Karanga Camp",3995],["Barafu Camp",4673],["Uhuru Peak",5895]];
const DEMO={status:"ACTIVE",checkpoint:5,progress:78,updated:"10:42 AM",guide:"John M.",distanceKm:49};
async function getTrekStatus(){return DEMO;}
(async function(){
  const el=document.getElementById("trackCard");if(!el)return;
  const d=await getTrekStatus(),q=s=>el.querySelector(s),cp=CHECKPOINTS[d.checkpoint];
  q("[data-k=status]").textContent="\u25CF "+d.status;q("[data-k=cp]").textContent=cp[0];
  q("[data-k=el]").textContent=cp[1].toLocaleString()+" m";q("[data-k=pr]").textContent=d.progress+"%";
  q("[data-k=up]").textContent=d.updated;q("[data-k=gd]").textContent=d.guide;
  const dist=q("[data-k=di]");if(dist)dist.textContent=d.distanceKm+" km";
  const list=q("#trkList");if(list)list.innerHTML=CHECKPOINTS.map((c,i)=>"<li class=\""+(i<d.checkpoint?"done":i==d.checkpoint?"now":"")+"\">"+c[0]+" <small>"+c[1].toLocaleString()+" m</small></li>").join("");
  const path=q("#trkPath"),len=path.getTotalLength(),dot=q("#trkDot"),done=q("#trkDone");
  done.style.strokeDasharray=len;let p=0;
  (function a(){p=Math.min(p+1.2,d.progress);const pt=path.getPointAtLength(len*p/100);
    dot.setAttribute("cx",pt.x);dot.setAttribute("cy",pt.y);done.style.strokeDashoffset=len*(1-p/100);
    if(p<d.progress)requestAnimationFrame(a);})();
})();
