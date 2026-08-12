(function(){
"use strict";
const $=MathSphere.$,$$=MathSphere.$$;
const d=$("#calculatorDisplay"), h=$("#calculatorHistory");
if(!d)return;
let ans=0, currentMode="basic";
const HISTORY_KEY="mathsphere_calculator_history_v1";
let historyItems=[];
try{historyItems=JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]")}catch(_){historyItems=[]}
function factorial(n){n=Number(n);if(!Number.isInteger(n)||n<0||n>170)throw Error("Factorial requires a whole number from 0 to 170.");let r=1;for(let i=2;i<=n;i++)r*=i;return r;}
function evaluate(raw){
 let e=String(raw).trim(); if(!e)return 0;
 e=e.replaceAll("×","*").replaceAll("÷","/").replaceAll("−","-").replaceAll("π","Math.PI")
  .replace(/\bAns\b/g,String(ans)).replace(/\be\b/g,"Math.E")
  .replace(/(\d+(?:\.\d+)?)%/g,"($1/100)")
  .replace(/(\([^()]+\)|\d+(?:\.\d+)?)²/g,"($1)**2")
  .replace(/(\([^()]+\)|\d+(?:\.\d+)?)!/g,"factorial($1)")
  .replace(/\^/g,"**");
 if(!/^[0-9+\-*/().,\sA-Za-z_*]+$/.test(e))throw Error("Unsupported expression");
 const sin=x=>Math.sin(Number(x)*Math.PI/180),cos=x=>Math.cos(Number(x)*Math.PI/180),tan=x=>Math.tan(Number(x)*Math.PI/180),log=x=>Math.log10(Number(x)),ln=x=>Math.log(Number(x)),sqrt=x=>Math.sqrt(Number(x));
 return Function("factorial","sin","cos","tan","log","ln","sqrt","Math",'"use strict";return ('+e+');')(factorial,sin,cos,tan,log,ln,sqrt,Math);
}
function saveHistory(expression,result){
 historyItems.unshift({expression,result,time:new Date().toLocaleString()});
 historyItems=historyItems.slice(0,50);
 try{localStorage.setItem(HISTORY_KEY,JSON.stringify(historyItems))}catch(_){ }
 renderHistoryPanel();
}
function renderHistoryPanel(){
 const panel=$("#calculatorHistoryPanel"); if(!panel)return;
 panel.innerHTML=historyItems.length?historyItems.map((x,i)=>`<button type="button" class="history-item" data-history-index="${i}"><span><strong>${MathSphere.escape(x.expression)} = ${MathSphere.escape(String(x.result))}</strong><small>${MathSphere.escape(x.time)}</small></span><b>↺</b></button>`).join(""): '<div class="empty-history">No calculations in history.</div>';
 $$(".history-item",panel).forEach(b=>b.addEventListener("click",()=>{const x=historyItems[Number(b.dataset.historyIndex)];if(x){d.value=String(x.expression);d.focus()}}));
}
function calc(){
 try{const ex=d.value.trim(),v=evaluate(ex);ans=v;h.textContent=ex?ex+" =":"";d.value=Number.isFinite(v)?String(Number(v.toPrecision(14))):String(v);if(ex)saveHistory(ex,d.value)}
 catch(e){MathSphere.toast(e.message||"Invalid mathematical expression")}
}
function insert(v){d.value+=v;d.focus()}
function applyMode(mode){
 currentMode=mode;
 $$(".calculator-modes button").forEach(x=>x.classList.toggle("active",x.dataset.mode===mode));
 const panel=$(".scientific-functions");
 if(panel){
   panel.hidden=mode==="basic";
   panel.dataset.mode=mode;
   const scientific=["sin","cos","tan","log","ln","sqrt","square","power"];
   const advanced=[...scientific,"factorial","pi","e","ans"];
   $$('button[data-function]',panel).forEach(b=>{
     const f=b.dataset.function;
     b.hidden=mode==="basic" || (mode==="scientific" && !scientific.includes(f)) || (mode==="advanced" && !advanced.includes(f));
   });
 }
}
$$('.calculator-keypad button').forEach(b=>b.addEventListener('click',()=>{const a=b.dataset.action,v=b.dataset.value;if(a==='clear'){d.value='';h.textContent='';return;}if(a==='delete'){d.value=d.value.slice(0,-1);return;}if(a==='calculate')return calc();if(v!=null)insert(v);}));
$$('.scientific-functions button').forEach(b=>b.addEventListener('click',()=>{const f=b.dataset.function;if(f==='pi')insert('π');else if(f==='e')insert('e');else if(f==='square')insert('²');else if(f==='factorial')insert('!');else if(f==='power')insert('^');else if(f==='ans')insert(String(ans));else insert(f+'(');}));
$$('.calculator-modes button').forEach(b=>b.addEventListener('click',()=>applyMode(b.dataset.mode)));
$("#toggleCalculatorHistory")?.addEventListener("click",()=>{const p=$("#calculatorHistoryPanel");if(p){p.hidden=!p.hidden;renderHistoryPanel()}});
$("#clearCalculatorHistory")?.addEventListener("click",()=>{historyItems=[];localStorage.removeItem(HISTORY_KEY);renderHistoryPanel();MathSphere.toast("Calculator history cleared.")});
window.addEventListener('keydown',e=>{const active=document.activeElement;if(active&&['TEXTAREA','SELECT'].includes(active.tagName))return;if(e.key==='Enter'){e.preventDefault();calc()}if(e.key==='Escape'){d.value='';h.textContent=''}});
renderHistoryPanel();applyMode("basic");
MathSphere.calculator={evaluate,getAnswer:()=>ans,history:()=>[...historyItems]};
})();