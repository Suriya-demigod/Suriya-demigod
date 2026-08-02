const fs=require('fs'),path=require('path');
const W=1180,H=610,LP=Math.floor(W*.38),RP=LP;
const info={name:'Suriya A',roles:['AI Engineer','Computer Vision Engineer','Embedded Systems Developer','Full Stack Developer','Open Source Contributor'],location:'Pollachi, Coimbatore, India',education:'B.E. in ECE, MCET (2023-2027)',focus:'AI, Computer Vision & Embedded Systems',email:'suriya4548j@gmail.com',github:'github.com/Suriya-demigod',linkedin:'linkedin.com/in/suriya-a',skills:['Python','YOLOv8','TensorFlow','OpenCV','LangChain','RAG','STM32','ESP32','Java','Docker','Git','KiCad']};
const T={dark:{bg:'#030712',pn:'#0F172A',t1:'#F8FAFC',t2:'#94A3B8',bd:'rgba(255,255,255,0.08)',a1:'#7C3AED',a2:'#22D3EE',a3:'#10B981',glow:.35,noise:.025,sh:'rgba(0,0,0,0.5)'},light:{bg:'#FFFFFF',pn:'#F8FAFC',t1:'#0F172A',t2:'#475569',bd:'rgba(15,23,42,0.08)',a1:'#2563EB',a2:'#06B6D4',a3:'#10B981',glow:.2,noise:.015,sh:'rgba(0,0,0,0.08)'}};
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const ghI='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.41-4.03-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z';
const liI='M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z';
const emI='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z';

// Read portrait photo as base64
const picPath=path.join(__dirname,'pic_small.jpg');
const picBase64=fs.readFileSync(picPath).toString('base64');
const picDataUrl=`data:image/jpeg;base64,${picBase64}`;

function build(theme){
const t=T[theme],isDark=theme==='dark';

// --- Role animation ---
const roles=info.roles,tyT=1.2,hlT=1.2,dlT=.5,blT=.2,cyT=tyT+hlT+dlT+blT,totT=cyT*roles.length;
const rX=RP+42,rY=148,cW=11.4;
let rDefs='',rEls='';
roles.forEach((role,i)=>{
  const id=`r${theme[0]}${i}`,rW=role.length*cW+10;
  const s=i*cyT/totT,e1=(i*cyT+tyT)/totT,e2=(i*cyT+tyT+hlT)/totT,e3=(i*cyT+tyT+hlT+dlT)/totT;
  // clipPath
  let cv=['0'],ck=['0'];
  if(s>0){cv=['0'];ck=['0'];}
  cv.push('0');ck.push(s.toFixed(5));
  cv.push(rW.toFixed(0));ck.push(e1.toFixed(5));
  cv.push(rW.toFixed(0));ck.push(e2.toFixed(5));
  cv.push('0');ck.push(e3.toFixed(5));
  if(e3<.999){cv.push('0');ck.push('1');}
  // opacity
  let ov=[],ok=[];
  if(s>0){ov.push('0');ok.push('0');}
  ov.push('0');ok.push(s.toFixed(5));
  ov.push('1');ok.push((s+.0001).toFixed(5));
  ov.push('1');ok.push(e3.toFixed(5));
  ov.push('0');ok.push((e3+.0001).toFixed(5));
  if(e3+.0001<1){ov.push('0');ok.push('1');}
  rDefs+=`<clipPath id="${id}"><rect x="${rX}" y="${rY-22}" height="28" width="0"><animate attributeName="width" values="${cv.join(';')}" keyTimes="${ck.join(';')}" dur="${totT}s" repeatCount="indefinite"/></rect></clipPath>\n`;
  rEls+=`<text x="${rX}" y="${rY}" fill="${t.a2}" font-family="'Courier New',monospace" font-size="19px" font-weight="bold" clip-path="url(#${id})" visibility="hidden"><tspan>${esc(role)}</tspan><animate attributeName="visibility" values="${ov.map(v=>v==='1'?'visible':'hidden').join(';')}" keyTimes="${ok.join(';')}" dur="${totT}s" repeatCount="indefinite" calcMode="discrete"/></text>\n`;
});
// Cursor: animate x to follow each role's clip width
let cxV=['0'],cxK=['0'];
roles.forEach((role,i)=>{
  const rW=role.length*cW+10;
  const s=i*cyT/totT,e1=(i*cyT+tyT)/totT,e2=(i*cyT+tyT+hlT)/totT,e3=(i*cyT+tyT+hlT+dlT)/totT;
  cxV.push('0');cxK.push(s.toFixed(5));
  cxV.push(rW.toFixed(0));cxK.push(e1.toFixed(5));
  cxV.push(rW.toFixed(0));cxK.push(e2.toFixed(5));
  cxV.push('0');cxK.push(e3.toFixed(5));
});
if(cxK[cxK.length-1]!=='1'){cxV.push('0');cxK.push('1');}
const cursor=`<g><rect x="${rX}" y="${rY-17}" width="10" height="21" fill="${t.a2}" rx="1"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></rect><animateTransform attributeName="transform" type="translate" values="${cxV.join(';')}" keyTimes="${cxK.join(';')}" dur="${totT}s" repeatCount="indefinite"/></g>`;

// --- Profile info ---
const lX=RP+42,vX=RP+225,iy=200;
const flds=[['📍 LOCATION',info.location],['🎓 EDUCATION',info.education],['🎯 FOCUS',info.focus],['📧 EMAIL',info.email]];
let iB='';
flds.forEach(([l,v],i)=>{
  const y=iy+i*30,d=(3.8+i*.25).toFixed(2);
  iB+=`<text x="${lX}" y="${y}" fill="${t.t2}" font-family="'Courier New',monospace" font-size="13px" opacity="0">${esc(l)}<animate attributeName="opacity" from="0" to="1" begin="${d}s" dur=".35s" fill="freeze"/></text>\n<text x="${vX}" y="${y}" fill="${t.t1}" font-family="'Courier New',monospace" font-size="13px" opacity="0">${esc(v)}<animate attributeName="opacity" from="0" to="1" begin="${d}s" dur=".35s" fill="freeze"/></text>\n`;
});

// --- Skill pills ---
const r1=info.skills.slice(0,6),r2=info.skills.slice(6,12);
let pills='';
[r1,r2].forEach((row,ri)=>{
  let px=RP+42;const py=355+ri*38;
  row.forEach((s,si)=>{
    const tw=s.length*8.5+24,d=(4.6+(ri*6+si)*.1).toFixed(2);
    pills+=`<g opacity="0"><animate attributeName="opacity" from="0" to="1" begin="${d}s" dur=".3s" fill="freeze"/><rect x="${px}" y="${py}" width="${tw}" height="28" rx="14" fill="${isDark?'rgba(124,58,237,0.1)':'rgba(37,99,235,0.08)'}" stroke="${t.a1}" stroke-width="1"><animate attributeName="stroke-opacity" values=".5;1;.5" dur="3s" repeatCount="indefinite"/></rect><text x="${px+tw/2}" y="${py+18}" fill="${t.a2}" font-family="'Courier New',monospace" font-size="12px" text-anchor="middle">${esc(s)}</text></g>\n`;
    px+=tw+12;
  });
});

// --- Social icons ---
const sy=458;let sx=RP+42;
let soc='';
[{l:'GitHub',i:ghI},{l:'LinkedIn',i:liI},{l:'Email',i:emI}].forEach((s,i)=>{
  const d=(5.6+i*.25).toFixed(2);
  soc+=`<g opacity="0" transform="translate(${sx},${sy})"><animate attributeName="opacity" from="0" to="1" begin="${d}s" dur=".35s" fill="freeze"/><rect width="140" height="36" rx="10" fill="${isDark?'rgba(15,23,42,0.6)':'rgba(248,250,252,0.8)'}" stroke="${t.bd}" stroke-width="1"/><svg x="10" y="6" width="24" height="24" viewBox="0 0 24 24"><path d="${s.i}" fill="${t.a2}"/></svg><text x="42" y="23" fill="${t.t2}" font-family="'Courier New',monospace" font-size="12px">${s.l}</text></g>\n`;
  sx+=158;
});

// --- Particles ---
let pts='';
for(let i=0;i<18;i++){
  const cx=(isDark?42:99)*(i+1)*137%W,cy=(isDark?42:99)*(i+1)*89%H;
  const r=(.8+i%3*.4).toFixed(1),dur=(7+i%5*1.5).toFixed(1);
  const c=[t.a1,t.a2,t.a3][i%3];
  pts+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity=".12"><animate attributeName="cy" values="${cy};${cy-20};${cy}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".06;.18;.06" dur="${dur}s" repeatCount="indefinite"/></circle>\n`;
}

// --- Noise pattern ---
const noiseO=t.noise;
let noise='';
for(let i=0;i<30;i++){
  const nx=Math.floor(Math.random()*W),ny=Math.floor(Math.random()*H);
  noise+=`<circle cx="${nx}" cy="${ny}" r=".5" fill="${t.t1}" opacity="${noiseO}"/>\n`;
}

const glO=t.glow;
return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img">
<title>Suriya A - ${isDark?'Dark':'Light'} Theme GitHub Profile Banner</title>
<desc>Professional GitHub profile banner for Suriya A - AI Engineer, Computer Vision Engineer, Embedded Systems Developer</desc>
<defs>
  <filter id="shadow"><feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="${t.sh}" flood-opacity=".25"/></filter>
  <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="${t.a1}" stop-opacity=".25"><animate attributeName="stop-opacity" values=".08;.35;.08" dur="5s" repeatCount="indefinite"/></stop>
    <stop offset="50%" stop-color="${t.a2}" stop-opacity=".15"/>
    <stop offset="100%" stop-color="${t.a3}" stop-opacity=".25"><animate attributeName="stop-opacity" values=".25;.08;.25" dur="5s" repeatCount="indefinite"/></stop>
  </linearGradient>
  <radialGradient id="bg1" cx="15%" cy="25%" r="45%"><stop offset="0%" stop-color="${t.a1}" stop-opacity="${(glO*.12).toFixed(3)}"/><stop offset="100%" stop-color="${t.bg}" stop-opacity="0"/></radialGradient>
  <radialGradient id="bg2" cx="85%" cy="75%" r="40%"><stop offset="0%" stop-color="${t.a2}" stop-opacity="${(glO*.1).toFixed(3)}"/><stop offset="100%" stop-color="${t.bg}" stop-opacity="0"/></radialGradient>
  <radialGradient id="bg3" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${t.a3}" stop-opacity="${(glO*.06).toFixed(3)}"/><stop offset="100%" stop-color="${t.bg}" stop-opacity="0"/></radialGradient>
  <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${t.t1}" stop-opacity="0"/><stop offset="48%" stop-color="${t.t1}" stop-opacity="${(noiseO*1.5).toFixed(4)}"/><stop offset="52%" stop-color="${t.t1}" stop-opacity="${(noiseO*1.5).toFixed(4)}"/><stop offset="100%" stop-color="${t.t1}" stop-opacity="0"/></linearGradient>
  <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${t.t1}" stop-opacity="0"/><stop offset="40%" stop-color="${t.t1}" stop-opacity="${(noiseO*2.5).toFixed(4)}"/><stop offset="60%" stop-color="${t.t1}" stop-opacity="${(noiseO*2.5).toFixed(4)}"/><stop offset="100%" stop-color="${t.t1}" stop-opacity="0"/></linearGradient>
  <linearGradient id="panelG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${isDark?'rgba(255,255,255,0.04)':'rgba(255,255,255,0.9)'}"/><stop offset="100%" stop-color="${isDark?'rgba(255,255,255,0.01)':'rgba(255,255,255,0.6)'}"/></linearGradient>
  <clipPath id="photoClip"><rect x="64" y="145" width="320" height="320" rx="14"/></clipPath>
${rDefs}</defs>

<!-- Background -->
<rect width="${W}" height="${H}" rx="16" fill="${t.bg}"/>
<rect width="${W}" height="${H}" rx="16" fill="url(#bg1)"><animateTransform attributeName="transform" type="translate" values="0,0;6,-3;0,0" dur="15s" repeatCount="indefinite"/></rect>
<rect width="${W}" height="${H}" rx="16" fill="url(#bg2)"><animateTransform attributeName="transform" type="translate" values="0,0;-6,3;0,0" dur="18s" repeatCount="indefinite"/></rect>
<rect width="${W}" height="${H}" rx="16" fill="url(#bg3)"><animateTransform attributeName="transform" type="translate" values="0,0;4,-2;0,0;-4,2;0,0" dur="22s" repeatCount="indefinite"/></rect>
${pts}${noise}
<!-- Scanline -->
<rect x="0" y="-30" width="${W}" height="30" fill="url(#scan)" opacity=".4" rx="16"><animate attributeName="y" from="-30" to="${H+30}" dur="9s" repeatCount="indefinite"/></rect>
<!-- Glass sweep -->
<rect x="-250" y="0" width="120" height="${H}" fill="url(#glass)" rx="16"><animate attributeName="x" from="-250" to="${W+250}" dur="14s" repeatCount="indefinite"/></rect>
<!-- Border shimmer -->
<rect x="1" y="1" width="${W-2}" height="${H-2}" rx="15" fill="none" stroke="url(#shimmer)" stroke-width="1.5"/>

<!-- Left Panel (glass) -->
<rect x="16" y="16" width="${LP-32}" height="${H-32}" rx="14" fill="url(#panelG)" filter="url(#shadow)"/>
<rect x="16" y="16" width="${LP-32}" height="${H-32}" rx="14" fill="${t.pn}" opacity=".75"/>
<rect x="16" y="16" width="${LP-32}" height="${H-32}" rx="14" fill="none" stroke="${t.a1}" stroke-width=".6" opacity="0"><animate attributeName="opacity" values="0;${(glO*.5).toFixed(2)};0" dur="5s" repeatCount="indefinite"/></rect>
<rect x="16" y="16" width="${LP-32}" height="${H-32}" rx="14" fill="none" stroke="${t.bd}" stroke-width="1"/>
<!-- Left panel glass sweep -->
<clipPath id="lpClip"><rect x="16" y="16" width="${LP-32}" height="${H-32}" rx="14"/></clipPath>
<rect x="-200" y="0" width="80" height="${H}" fill="url(#glass)" clip-path="url(#lpClip)"><animate attributeName="x" from="-200" to="${LP+200}" dur="10s" repeatCount="indefinite"/></rect>

<!-- Professional Portrait Image Container -->
<g opacity="0">
  <animate attributeName="opacity" from="0" to="1" begin=".15s" dur=".5s" fill="freeze"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;0,-2.5;0,0;0,2.5;0,0" dur="8s" repeatCount="indefinite"/>
  
  <!-- Image Frame Shadow -->
  <rect x="64" y="145" width="320" height="320" rx="14" fill="${t.pn}" filter="url(#shadow)"/>
  
  <!-- Image -->
  <image x="64" y="145" width="320" height="320" href="${picDataUrl}" clip-path="url(#photoClip)"/>
  
  <!-- Glass glow overlay -->
  <rect x="64" y="145" width="320" height="320" rx="14" fill="url(#panelG)" opacity="0.12" pointer-events="none"/>
  
  <!-- Border shimmer -->
  <rect x="64" y="145" width="320" height="320" rx="14" fill="none" stroke="url(#shimmer)" stroke-width="1.5"/>
  
  <!-- Glow border pulse -->
  <rect x="64" y="145" width="320" height="320" rx="14" fill="none" stroke="${t.a2}" stroke-width="1" opacity="0.3">
    <animate attributeName="opacity" values="0.15;0.6;0.15" dur="4s" repeatCount="indefinite"/>
  </rect>
  
  <!-- Sweep animation across image -->
  <rect x="-150" y="145" width="100" height="320" fill="url(#glass)" clip-path="url(#photoClip)">
    <animate attributeName="x" from="-150" to="450" dur="7s" repeatCount="indefinite"/>
  </rect>
</g>

<!-- Right Panel (glass) -->
<rect x="${RP+16}" y="16" width="${W-RP-32}" height="${H-32}" rx="14" fill="url(#panelG)" filter="url(#shadow)"/>
<rect x="${RP+16}" y="16" width="${W-RP-32}" height="${H-32}" rx="14" fill="${t.pn}" opacity=".75"/>
<rect x="${RP+16}" y="16" width="${W-RP-32}" height="${H-32}" rx="14" fill="none" stroke="${t.a2}" stroke-width=".6" opacity="0"><animate attributeName="opacity" values="0;${(glO*.35).toFixed(2)};0" dur="6s" repeatCount="indefinite"/></rect>
<rect x="${RP+16}" y="16" width="${W-RP-32}" height="${H-32}" rx="14" fill="none" stroke="${t.bd}" stroke-width="1"/>
<!-- Right panel glass sweep -->
<clipPath id="rpClip"><rect x="${RP+16}" y="16" width="${W-RP-32}" height="${H-32}" rx="14"/></clipPath>
<rect x="-200" y="0" width="80" height="${H}" fill="url(#glass)" clip-path="url(#rpClip)"><animate attributeName="x" from="${RP-200}" to="${W+200}" dur="11s" repeatCount="indefinite"/></rect>

<!-- Heading -->
<text x="${RP+42}" y="68" fill="${t.t1}" font-family="'Courier New',monospace" font-size="26px" font-weight="bold" opacity="0">Hi &#x1F44B; I'm ${info.name}<animate attributeName="opacity" from="0" to="1" begin=".4s" dur=".5s" fill="freeze"/></text>
<!-- Terminal prompt -->
<text x="${RP+42}" y="104" fill="${t.t2}" font-family="'Courier New',monospace" font-size="14px" opacity="0"><tspan fill="${t.a3}">$</tspan> whoami --professional<animate attributeName="opacity" from="0" to="1" begin=".9s" dur=".35s" fill="freeze"/></text>
<line x1="${RP+42}" y1="118" x2="${RP+700}" y2="118" stroke="${t.bd}" stroke-width="1" opacity="0"><animate attributeName="opacity" from="0" to=".4" begin="1.1s" dur=".3s" fill="freeze"/></line>

<!-- Role animation -->
${rEls}${cursor}

<line x1="${RP+42}" y1="172" x2="${RP+700}" y2="172" stroke="${t.bd}" stroke-width="1" opacity="0"><animate attributeName="opacity" from="0" to=".4" begin="2.8s" dur=".3s" fill="freeze"/></line>

<!-- Profile Info -->
${iB}
<line x1="${RP+42}" y1="332" x2="${RP+700}" y2="332" stroke="${t.bd}" stroke-width="1" opacity="0"><animate attributeName="opacity" from="0" to=".4" begin="4.3s" dur=".3s" fill="freeze"/></line>

<!-- Skills -->
${pills}
<line x1="${RP+42}" y1="440" x2="${RP+700}" y2="440" stroke="${t.bd}" stroke-width="1" opacity="0"><animate attributeName="opacity" from="0" to=".4" begin="5.3s" dur=".3s" fill="freeze"/></line>

<!-- Socials -->
${soc}

<!-- Bottom accent line -->
<line x1="${RP+42}" y1="505" x2="${RP+700}" y2="505" stroke="${t.bd}" stroke-width="1" opacity="0"><animate attributeName="opacity" from="0" to=".3" begin="6s" dur=".3s" fill="freeze"/></line>

<!-- Version tag -->
<text x="${RP+42}" y="530" fill="${t.t2}" font-family="'Courier New',monospace" font-size="11px" opacity="0"><tspan fill="${t.a3}">~</tspan> Built with pure SVG + SMIL<animate attributeName="opacity" from="0" to=".5" begin="6.2s" dur=".4s" fill="freeze"/></text>
</svg>`;
}

fs.writeFileSync('dark.svg',build('dark'),'utf-8');
fs.writeFileSync('light.svg',build('light'),'utf-8');
console.log('✅ dark.svg and light.svg generated.');
