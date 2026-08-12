(function(){
"use strict";
const $=MathSphere.$, cfg=window.MathSphereConfig;
const form=$("#aiPaperForm"), out=$("#aiPaperResult");
if(!form||!out)return;

const PATTERNS={
  fbise:{
    9:{mcq:15,short:14,long:6},10:{mcq:15,short:13,long:5},11:{mcq:20,short:20,long:4},12:{mcq:20,short:20,long:4}
  },
  cbse:{
    9:{mcq:20,short:11,long:4,case:3},
    10:{mcq:20,short:11,long:4,case:3},
    11:{mcq:20,short:11,long:4,case:3},
    12:{mcq:20,short:11,long:4,case:3}
  }
};

function shuffle(a){return [...a].sort(()=>Math.random()-0.5)}
function pick(arr,n){return shuffle(arr||[]).slice(0,n)}
function esc(v){return MathSphere.escape(v??"")}
function section(title,items,type){
  return `<section class="paper-section generated-section"><div class="paper-section-heading"><h4>${title}</h4><span>${items.length} Questions</span></div>${items.map((x,i)=>{
    const q=x.q||x.question||"";
    if(type==='mcq') return `<article class="paper-question mcq-question"><div class="question-number">${i+1}</div><div class="question-body"><p class="question-text">${esc(q)}</p><div class="mcq-options">${(x.o||x.options||[]).map((z,j)=>`<div class="mcq-option"><span class="option-letter">${String.fromCharCode(65+j)}</span><span>${esc(z)}</span></div>`).join('')}</div></div></article>`;
    return `<article class="paper-question normal-question"><div class="question-number">${i+1}</div><div class="question-body"><p class="question-text">${esc(q)}</p></div></article>`;
  }).join('')}</section>`;
}

function paperState(){
  return window.__MathSphereAIPaper||null;
}

function renderPaper(state){
  window.__MathSphereAIPaper=state;
  const b=state.board,c=state.className,y=state.year;
  out.innerHTML=`<article class="generated-paper" id="generatedPaperView">
    <span class="unofficial-badge">AI GENERATED • OFFLINE READY • NOT OFFICIAL</span>
    <h3>${b.toUpperCase()} Class ${esc(c)} Mathematics • ${esc(y)}</h3>
    <p class="muted">Paper pattern: ${state.patternLabel}</p>
    <div class="paper-progress"><span class="active">1. MCQs</span><span class="active">2. Short Questions</span><span>3. Long Questions</span><span>4. Solution</span></div>
    ${section('SECTION A — MCQs',state.mcqs,'mcq')}
    <div class="paper-next"><button class="primary-button" id="nextShortSection">Next: Short Questions →</button></div>
  </article>`;
  document.getElementById('nextShortSection')?.addEventListener('click',()=>renderShort(state));
  out.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function renderShort(state){
  out.innerHTML=`<article class="generated-paper"><span class="unofficial-badge">AI GENERATED • NOT OFFICIAL</span><h3>${state.board.toUpperCase()} Class ${esc(state.className)} • ${esc(state.year)}</h3><div class="paper-progress"><span class="done">1. MCQs</span><span class="active">2. Short Questions</span><span>3. Long Questions</span><span>4. Solution</span></div>${section('SECTION B — SHORT QUESTIONS',state.shorts,'short')}<div class="paper-next"><button class="outline-button" id="backMCQ">← MCQs</button><button class="primary-button" id="nextLongSection">Next: Long Questions →</button></div></article>`;
  document.getElementById('backMCQ')?.addEventListener('click',()=>renderPaper(state));
  document.getElementById('nextLongSection')?.addEventListener('click',()=>renderLong(state));
  out.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function renderLong(state){
  out.innerHTML=`<article class="generated-paper"><span class="unofficial-badge">AI GENERATED • NOT OFFICIAL</span><h3>${state.board.toUpperCase()} Class ${esc(state.className)} • ${esc(state.year)}</h3><div class="paper-progress"><span class="done">1. MCQs</span><span class="done">2. Short Questions</span><span class="active">3. Long Questions</span><span>4. Solution</span></div>${section('SECTION C — LONG QUESTIONS',state.longs,'long')}${state.cases?.length?section('SECTION E — CASE STUDY QUESTIONS',state.cases,'long'):''}<div class="paper-next"><button class="outline-button" id="backShort">← Short Questions</button><button class="primary-button" id="solveGeneratedPaper">Solution of this Paper</button></div><div id="generatedSolution" class="answer-panel"></div></article>`;
  document.getElementById('backShort')?.addEventListener('click',()=>renderShort(state));
  document.getElementById('solveGeneratedPaper')?.addEventListener('click',()=>solvePaper(state));
  out.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function renderSolution(state,html){
  out.innerHTML=`<article class="generated-paper solved-paper"><span class="unofficial-badge">AI SOLUTION • ${state.board.toUpperCase()} • NOT OFFICIAL</span><h3>Solution of ${state.board.toUpperCase()} Class ${esc(state.className)} Mathematics • ${esc(state.year)}</h3><div class="paper-progress"><span class="done">1. MCQs</span><span class="done">2. Short Questions</span><span class="done">3. Long Questions</span><span class="active">4. Solution</span></div><div id="solvedPaperContent" class="ai-solution-content">${html}</div><div class="paper-actions"><button class="primary-button" id="downloadSolvedPaper">Download Solved Paper</button><button class="outline-button" id="backToLong">← Back to Long Questions</button></div></article>`;
  if(window.MathJax?.typesetPromise) MathJax.typesetPromise([document.getElementById('solvedPaperContent')]).catch(()=>{});
  document.getElementById('downloadSolvedPaper')?.addEventListener('click',()=>downloadSolved(state));
  document.getElementById('backToLong')?.addEventListener('click',()=>renderLong(state));
}
function downloadSolved(state){
  const body=document.getElementById('solvedPaperContent')?.innerHTML||'';
  const html=`<!doctype html><html><head><meta charset="utf-8"><title>MathSphere Solved Paper</title><style>body{font-family:Arial,sans-serif;max-width:900px;margin:30px auto;padding:20px;line-height:1.7}h1,h2,h3{color:#17324d}.q{margin:20px 0}.answer{padding:12px;border-left:4px solid #16a3a3;background:#f4f8fa}</style></head><body><h1>MathSphere — Solved Mathematics Paper</h1><h2>${state.board.toUpperCase()} Class ${esc(state.className)} • ${esc(state.year)}</h2>${body}</body></html>`;
  const blob=new Blob([html],{type:'text/html;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`MathSphere-${state.board}-Class-${state.className}-${state.year}-Solved.html`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
async function solvePaper(state){
  const key=cfg.geminiApiKey;
  const target=document.getElementById('solveGeneratedPaper');
  if(!key||key.includes('PASTE_YOUR'))return MathSphere.toast('Gemini API key is not configured.');
  if(target){target.disabled=true;target.textContent='Generating full solution…'}
  out.insertAdjacentHTML('beforeend','<div class="loading-state" id="paperSolveLoading">AI is solving the complete paper. This may take a moment…</div>');
  const payload={mcqs:state.mcqs,shorts:state.shorts,longs:state.longs,cases:state.cases||[]};
  const prompt=`You are MathSphere AI. Solve this complete ${state.board.toUpperCase()} Class ${state.className} mathematics paper for year ${state.year}. The paper is app-authored practice, not official. Provide complete step-by-step solutions for every short and long question, and for MCQs give the correct option with a brief reason. Verify calculations. Use exactly one backslash in LaTeX, use \\(...\\) inline and \\[...\\] display math. Never use $$, never output HTML, never output code fences. Structure by Section A, B, C and question number.\nPAPER JSON:\n${JSON.stringify(payload)}`;
  try{
    const url=cfg.geminiEndpoint+cfg.geminiModel+':generateContent?key='+encodeURIComponent(key);
    const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{role:'user',parts:[{text:prompt}]}],generationConfig:{temperature:.08,maxOutputTokens:12000}})});
    const d=await r.json(); if(!r.ok)throw Error(d?.error?.message||`Gemini returned ${r.status}`);
    const answer=d?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('\n')||''; if(!answer)throw Error('AI did not return a solution.');
    document.getElementById('paperSolveLoading')?.remove();
    renderSolution(state,formatSolution(answer));
  }catch(e){document.getElementById('paperSolveLoading')?.remove();MathSphere.toast(e.message||'Could not generate solution.');if(target){target.disabled=false;target.textContent='Solution of this Paper'}}
}
function formatSolution(text){
 let s=String(text||'').replace(/\\\\/g,'\\').replace(/```(?:markdown|latex|text)?/gi,'').replace(/```/g,'');
 const token=[];s=s.replace(/\\\[(.*?)\\\]/gs,(_,m)=>{const i=token.length;token.push(`<div class="math-display">\\[${m.trim()}\\]</div>`);return `@@M${i}@@`}).replace(/\\\((.*?)\\\)/gs,(_,m)=>{const i=token.length;token.push(`<span class="math-inline">\\(${m.trim()}\\)</span>`);return `@@M${i}@@`});
 s=MathSphere.escape(s).replace(/^###\s+(.+)$/gm,'<h4>$1</h4>').replace(/^##\s+(.+)$/gm,'<h3>$1</h3>').replace(/\*\*(.*?)\*\*/gs,'<strong>$1</strong>').replace(/^\s*Section\s*([ABC]).*$/gim,'<h3>Section $1</h3>').replace(/^\s*(Q(?:uestion)?\s*\d+.*)$/gim,'<h4>$1</h4>');
 s=s.split(/\n\n+/).map(x=>x.trim()?`<p>${x.replace(/\n/g,'<br>')}</p>`:'').join('');token.forEach((v,i)=>s=s.replace(`@@M${i}@@`,v));return s;
}
function fallback(bank,b,c,pattern){
 const src=bank?.[b]?.[c]||{}; return {board:b,className:c,year:document.querySelector('#aiPaperYear').value,mcqs:pick(src.mcqs,pattern.mcq),shorts:pick(src.short,pattern.short),longs:pick(src.long,pattern.long),cases:pick(src.long,pattern.case||0),patternLabel:`${pattern.mcq} MCQs • ${pattern.short} Short • ${pattern.long} Long`};
}
form.addEventListener('submit',async e=>{e.preventDefault();const b=$("#aiPaperBoard").value,c=$("#aiPaperClass").value,y=$("#aiPaperYear").value;const pattern=PATTERNS[b]?.[c];if(!pattern)return MathSphere.toast('Select a valid board and class.');out.innerHTML='<div class="loading-state">Preparing MCQs, short questions and long questions…</div>';try{const bank=await fetch('data/question-banks.json').then(r=>r.json());let state=fallback(bank,b,c,pattern);state.year=y; if(cfg.geminiApiKey&&!cfg.geminiApiKey.includes('PASTE_YOUR')){const curriculum=await fetch('data/curriculum.json').then(r=>r.json());const topics=(curriculum[b]?.[c]?.topics||[]).map(x=>x.title).join(', ');const prompt=`Create an original ${b.toUpperCase()} Class ${c} mathematics paper for year ${y}. Follow this pattern exactly: ${pattern.mcq} MCQs, ${pattern.short} short-answer questions, ${pattern.long} long-answer questions${pattern.case?`, and ${pattern.case} case-study questions`:''}. Syllabus topics: ${topics}. Return ONLY valid JSON with keys mcqs, shorts, longs, cases. mcqs items: {q,o,a,topic}; shorts/longs/cases items: {q,answer,topic}. For CBSE use the case-study section when required by the pattern. For MCQ a is zero-based option index. Questions must be mathematically correct and suitable for the selected board/class. Do not copy official papers.`;const url=cfg.geminiEndpoint+cfg.geminiModel+':generateContent?key='+encodeURIComponent(cfg.geminiApiKey);const rr=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{role:'user',parts:[{text:prompt}]}],generationConfig:{temperature:.35,maxOutputTokens:12000,responseMimeType:'application/json'}})});const dd=await rr.json();if(rr.ok){try{const raw=dd.candidates?.[0]?.content?.parts?.map(x=>x.text||'').join('')||'';const gen=JSON.parse(raw);if(gen.mcqs?.length&&gen.shorts?.length&&gen.longs?.length){state.mcqs=gen.mcqs.slice(0,pattern.mcq);state.shorts=gen.shorts.slice(0,pattern.short);state.longs=gen.longs.slice(0,pattern.long);state.cases=gen.cases?.slice(0,pattern.case||0)||state.cases||[]}}catch(_){} }} state.patternLabel=`${state.mcqs.length} MCQs • ${state.shorts.length} Short • ${state.longs.length} Long${state.cases?.length?' • '+state.cases.length+' Case Study':''}`;renderPaper(state);}catch(err){out.innerHTML='<div class="error-state">'+esc(err.message)+'</div>'}});
})();
