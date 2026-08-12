(function(){
"use strict";
const cfg=window.MathSphereConfig;
function esc(v){return MathSphere.escape(v??"")}
function normalize(text){return String(text||'').replace(/\\\\/g,'\\').replace(/```(?:markdown|latex|text)?/gi,'').replace(/```/g,'')}
function format(text){let s=normalize(text);const t=[];s=s.replace(/\\\[(.*?)\\\]/gs,(_,m)=>{const i=t.length;t.push(`<div class="math-display">\\[${m.trim()}\\]</div>`);return `@@M${i}@@`}).replace(/\\\((.*?)\\\)/gs,(_,m)=>{const i=t.length;t.push(`<span class="math-inline">\\(${m.trim()}\\)</span>`);return `@@M${i}@@`});s=esc(s).replace(/\*\*(.*?)\*\*/gs,'<strong>$1</strong>').split(/\n\n+/).map(x=>x.trim()?`<p>${x.replace(/\n/g,'<br>')}</p>`:'').join('');t.forEach((v,i)=>s=s.replace(`@@M${i}@@`,v));return s}
function qText(q){return q?.q||q?.question||''}
function qOptions(q){return q?.o||q?.options||[]}
function solve(paper){
 if(!cfg.geminiApiKey||cfg.geminiApiKey.includes('PASTE_YOUR'))return MathSphere.toast('Gemini API key is not configured.');
 const questions=[];for(const s of Object.values(paper.sections||{})){for(const q of s.questions||[])questions.push({section:s.title,question:qText(q),options:qOptions(q),correct:q.a})}
 const html=`<article class="generated-paper"><span class="unofficial-badge">AI SOLUTION</span><h3>${esc(paper.title||'Mathematics Paper')} — Solved</h3><div id="pastPaperSolution" class="ai-solution-content"><div class="loading-state">AI is solving this paper…</div></div><div class="paper-actions"><button id="downloadPastSolution" class="primary-button" type="button">Download Solved Paper</button></div></article>`;
 const container=document.querySelector('#paperContent');if(!container)return;container.insertAdjacentHTML('beforeend',html);const out=document.querySelector('#pastPaperSolution');out.scrollIntoView({behavior:'smooth',block:'start'});
 const prompt=`Solve this mathematics paper completely. For every MCQ provide the correct option and brief reason. For every short and long question give full step-by-step working. Verify calculations. Use clean LaTeX with exactly one backslash, inline \\(...\\), display \\[...\\]. Never use $$, HTML or code fences. Paper: ${JSON.stringify(questions)}`;
 const url=cfg.geminiEndpoint+cfg.geminiModel+':generateContent?key='+encodeURIComponent(cfg.geminiApiKey);
 fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{role:'user',parts:[{text:prompt}]}],generationConfig:{temperature:.05,maxOutputTokens:12000}})}).then(r=>r.json().then(d=>({r,d}))).then(({r,d})=>{if(!r.ok)throw Error(d?.error?.message||`Gemini returned ${r.status}`);const text=d?.candidates?.[0]?.content?.parts?.map(x=>x.text||'').join('\n')||'';if(!text)throw Error('No solution returned.');out.innerHTML=format(text);if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([out]).catch(()=>{});document.querySelector('#downloadPastSolution')?.addEventListener('click',()=>{const blob=new Blob([`<!doctype html><html><head><meta charset="utf-8"><title>MathSphere Solved Paper</title><style>body{font-family:Arial;max-width:900px;margin:30px auto;padding:20px;line-height:1.7}</style></head><body><h1>${esc(paper.title||'Solved Paper')}</h1>${out.innerHTML}</body></html>`],{type:'text/html'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='MathSphere-Solved-Past-Paper.html';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);});}).catch(e=>{out.innerHTML='<div class="error-state">'+esc(e.message)+'</div>'});
}
window.MathSpherePaperSolver={solve};
})();
