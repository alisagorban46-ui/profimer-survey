/* ============================= КОНФИГ ВОПРОСОВ ============================= */
const BLOCKS = [
  { id:"a", title:"А. История и текущее положение компании", questions:[
    { id:"a1", type:"number", label:"В каком году создана компания?", required:true },
    { id:"a2", type:"textarea", label:"С какой услуги начиналась деятельность? Какие направления добавлялись позже и почему?", required:true },
    { id:"a3", type:"textarea", label:"Какие направления за последние 3 года были закрыты или приостановлены? По каким причинам?", required:true },
    { id:"a4", type:"textarea", label:"Какие ошибки прошлого считаете наиболее существенными?", required:false },
    { id:"a5", type:"textarea", label:"Какие компетенции или активы сформированы за время работы?", required:true },
  ]},
  { id:"b", title:"Б. Клиенты за последние 12 месяцев", questions:[
    { id:"b1", type:"number-group", label:"Сколько клиентов обслужили за 12 мес: всего / новых / повторных / по рекомендации?", required:true, fileAllowed:true,
      subfields:[{key:"total",label:"Всего"},{key:"new",label:"Новых"},{key:"repeat",label:"Повторных"},{key:"referral",label:"По рекомендации"}] },
    { id:"b2", type:"textarea", label:"Как распределяются клиенты по бюджету (диапазоны)?", required:true },
    { id:"b3", type:"textarea", label:"Как распределяются клиенты по географии?", required:true },
    { id:"b4", type:"textarea", label:"Какие клиенты (сегменты) приносят наибольшую прибыль?", required:true },
    { id:"b5", type:"textarea", label:"По каким причинам клиенты отказывались от услуг? Какие возражения называли перед покупкой?", required:true },
  ]},
  { id:"c", title:"В. Продажи и сделки", questions:[
    { id:"c1", type:"textarea", label:"На каком этапе чаще всего теряются клиенты?", required:true },
  ]},
  { id:"d", title:"Г. Финансовые результаты", questions:[
    { id:"d1", type:"number-group", label:"Выручка компании за последние 3 года (по годам)", required:true, fileAllowed:true,
      subfields:[{key:"y1",label:"3 года назад, ₽"},{key:"y2",label:"2 года назад, ₽"},{key:"y3",label:"Прошлый год, ₽"}] },
    { id:"d2", type:"number", label:"Постоянные расходы ежемесячно (руб.)", required:true },
    { id:"d3", type:"number", label:"Средняя себестоимость одного проекта (руб.)", required:true },
    { id:"d4", type:"textarea", label:"Объём налогов, кредитов и других обязательных платежей", required:true, fileAllowed:true },
  ]},
  { id:"e", title:"Д. Операционная деятельность", questions:[
    { id:"e1", type:"number", label:"Средняя продолжительность проекта (дней)", required:true },
    { id:"e2", type:"textarea", label:"Как часто нарушаются сроки? По каким причинам?", required:true },
    { id:"e3", type:"textarea", label:"Как часто увеличивается первоначальный бюджет? Какие статьи расходов чаще всего выходят за смету?", required:true },
  ]},
  { id:"f", title:"Е. Продукт «Профимер» и целевые клиенты", questions:[
    { id:"f1", type:"textarea", label:"Какую основную бизнес-задачу вы хотите решить с помощью «Профимера»? Почему запуск необходим именно сейчас?", required:true },
    { id:"f2", type:"number", label:"Какую долю в общей выручке группы должен занимать «Профимер» через 3 года (%)?", required:true },
    { id:"f3", type:"radio", label:"Готовы ли финансировать проект, пока он не приносит прибыль?", required:true,
      options:["Да","Нет","С условиями"] },
    { id:"f4", type:"textarea", label:"Что конкретно клиент должен покупать у «Профимера»? Сформулируйте основное предложение одной фразой.", required:true, fileAllowed:true },
    { id:"f5", type:"textarea", label:"Какие услуги компания не будет включать в своё предложение?", required:true },
    { id:"f6", type:"textarea", label:"Что должно отличать «Профимер» от обычной ремонтной компании? От дизайн-студии? От генерального подрядчика?", required:true },
    { id:"f7", type:"textarea", label:"Какую ответственность «Профимер» берёт на себя перед клиентом?", required:true },
    { id:"f8", type:"number-group", label:"Какая минимальная стоимость проекта допустима (руб.)? Какой бюджет проекта является целевым (руб.)?", required:true,
      subfields:[{key:"min",label:"Минимальная, ₽"},{key:"target",label:"Целевая, ₽"}] },
    { id:"f9", type:"number", label:"Какой уровень маржи должен быть достигнут (%)?", required:true },
    { id:"f10", type:"textarea", label:"Какие решения по итогам первого года могут привести к изменению бизнес-модели?", required:true },
  ]},
  { id:"g", title:"Ж. Ограничения и риски", questions:[
    { id:"g1", type:"textarea", label:"Какие риски вы считаете наиболее вероятными в ближайшие 3 года?", required:true },
    { id:"g2", type:"textarea", label:"При каких условиях проект может быть остановлен, пересмотрен или изменён?", required:true },
  ]},
  { id:"h", title:"З. Рынок", questions:[
    { id:"h1", type:"textarea", label:"На каких территориях «Профимер» планирует работать в первый год? Только в Санкт-Петербурге или также в других городах?", required:true },
    { id:"h2", type:"textarea", label:"Какие бюджеты ремонта наиболее распространены среди потенциальных клиентов?", required:true },
  ]},
];
const ALL_Q = BLOCKS.flatMap(b => b.questions.map(q => ({...q, blockId:b.id, blockTitle:b.title})));
const TOTAL_Q = ALL_Q.length;

/* ⬇️ ВПИШИТЕ СЮДА реальный email или Telegram, куда респонденты должны прислать архив */
const CONTACT_INSTRUCTION = "После заполнения нажмите «Скачать мои ответы (ZIP)» и отправьте архив на email или в Telegram координатору проекта «Профимер».";

const LS_KEY = "profimer_draft_v1";

/* ============================= СОСТОЯНИЕ ============================= */
let STATE = { company:"", name:"", answers:{}, currentBlock:"a" };
let FILES = {}; // questionId -> [{name, blob}]  (в памяти, не в localStorage)
let dirty = false;

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 2200);
}
function escapeHtml(s){ return String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function el(html){ const t=document.createElement("template"); t.innerHTML=html.trim(); return t.content.firstChild; }

/* ============================= LOCALSTORAGE ============================= */
function saveLocal() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({ company:STATE.company, name:STATE.name, answers:STATE.answers,
      fileNames: Object.fromEntries(Object.entries(FILES).map(([k,v]) => [k, v.map(f=>f.name)])) }));
    dirty = false;
  } catch(e) { /* quota or other issue, ignore */ }
}
let saveTimer = null;
function scheduleSave() {
  dirty = true;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveLocal, 1500);
}
setInterval(() => { if (dirty) saveLocal(); }, 10000);
window.addEventListener("beforeunload", (e) => {
  if (dirty) { e.preventDefault(); e.returnValue = ""; }
});
function loadLocal() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    STATE.company = d.company || ""; STATE.name = d.name || ""; STATE.answers = d.answers || {};
  } catch(e) {}
}

/* ============================= ПРОГРЕСС ============================= */
function isAnswered(q) {
  const v = STATE.answers[q.id];
  if (q.type === "number-group") {
    if (!v) return false;
    return q.subfields.some(sf => v[sf.key] !== undefined && v[sf.key] !== "");
  }
  return v !== undefined && v !== "" && v !== null;
}
function blockProgress(b) {
  const answered = b.questions.filter(isAnswered).length;
  return { answered, total: b.questions.length };
}

/* ============================= РЕНДЕР: SIDEBAR ============================= */
function renderSidebar() {
  const sb = document.getElementById("sidebar");
  sb.innerHTML = "";
  sb.appendChild(el(`<h1>🏗️ Профимер</h1><div class="sub" style="margin-bottom:14px;">Опросник для руководителей компаний группы</div>`));

  const totalAnswered = ALL_Q.filter(isAnswered).length;
  sb.appendChild(el(`
    <div style="margin-bottom:16px;">
      <div class="small-muted">Общий прогресс: ${totalAnswered} / ${TOTAL_Q}</div>
      <div class="progress-bar"><div class="progress-fill" style="width:${Math.round(100*totalAnswered/TOTAL_Q)}%"></div></div>
    </div>
  `));

  BLOCKS.forEach(b => {
    const p = blockProgress(b);
    const item = el(`
      <div class="block-item ${b.id===STATE.currentBlock ? "active":""}">
        <div>${escapeHtml(b.title)}</div>
        <div class="bsub">${p.answered} / ${p.total}</div>
      </div>
    `);
    item.onclick = () => { STATE.currentBlock = b.id; renderAll(); };
    sb.appendChild(item);
  });

  const exportCard = el(`
    <div style="margin-top:18px;">
      <div class="small-muted" style="text-align:center; margin-bottom:8px; font-weight:600; color:var(--accent);">🙏 Спасибо за ваши ответы!</div>
      <button class="primary" id="downloadBtn" style="width:100%;">⬇️ Скачать мои ответы (ZIP)</button>
      <button id="clearBtn" style="width:100%; margin-top:8px;" class="danger">🗑️ Очистить форму</button>
    </div>
  `);
  sb.appendChild(exportCard);
  exportCard.querySelector("#downloadBtn").onclick = onDownloadClick;
  exportCard.querySelector("#clearBtn").onclick = onClearClick;
}

/* ============================= РЕНДЕР: MAIN ============================= */
function renderMain() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  const block = BLOCKS.find(b => b.id === STATE.currentBlock);
  const idx = BLOCKS.findIndex(b => b.id === STATE.currentBlock);

  main.appendChild(el(`
    <div class="card" style="border-color:var(--accent);">
      <h3 style="margin-bottom:8px;">👋 Приветствие от Алисы Горбань</h3>
      <div class="sub" style="font-size:13.5px; line-height:1.6;">
        Здравствуйте! Меня зовут Алиса Горбань, я собираю эти данные для стратегии группы компаний «Профимер».
        Пожалуйста, отвечайте на все вопросы максимально полно и честно — от этого напрямую зависит качество
        анализа и решений, которые мы примем вместе. Заранее спасибо за ваше время и открытость!
      </div>
    </div>
  `));

  const topCard = el(`<div class="card"></div>`);
  topCard.appendChild(el(`<div id="topfields"></div>`));
  main.appendChild(topCard);
  const tf = topCard.querySelector("#topfields");
  tf.appendChild(el(`
    <div class="field">
      <label class="field-label">Название компании <span class="req">*</span></label>
      <input type="text" id="companyInput" value="${escapeHtml(STATE.company)}" placeholder="ООО «Ремонт+»">
    </div>
  `));
  tf.appendChild(el(`
    <div class="field">
      <label class="field-label">ФИО руководителя <span class="req">*</span></label>
      <input type="text" id="nameInput" value="${escapeHtml(STATE.name)}" placeholder="Иванов Иван Иванович">
    </div>
  `));
  tf.querySelector("#companyInput").oninput = (e) => { STATE.company = e.target.value; scheduleSave(); };
  tf.querySelector("#nameInput").oninput = (e) => { STATE.name = e.target.value; scheduleSave(); };

  const card = el(`<div class="card"></div>`);
  card.appendChild(el(`<h2>${escapeHtml(block.title)}</h2><div class="sub" style="margin-bottom:14px;">Блок ${idx+1} из ${BLOCKS.length}</div>`));

  block.questions.forEach((q, i) => {
    card.appendChild(renderQuestion(q, i));
  });

  const nav = el(`
    <div class="nav-btns">
      <button id="prevBtn" ${idx===0 ? "disabled":""}>← Предыдущий блок</button>
      <button class="primary" id="nextBtn" ${idx===BLOCKS.length-1 ? "disabled":""}>Следующий блок →</button>
    </div>
  `);
  card.appendChild(nav);
  main.appendChild(card);

  card.querySelector("#prevBtn").onclick = () => { STATE.currentBlock = BLOCKS[idx-1].id; renderAll(); };
  card.querySelector("#nextBtn").onclick = () => { STATE.currentBlock = BLOCKS[idx+1].id; renderAll(); };

  main.appendChild(el(`<div class="small-muted" style="margin-top:6px;">💾 Автосохранение включено — черновик хранится в этом браузере.</div>`));
}

function renderQuestion(q, i) {
  const wrap = el(`<div class="field"></div>`);
  wrap.appendChild(el(`<label class="field-label"><span class="qnum">${i+1}.</span>${escapeHtml(q.label)}${q.required ? ' <span class="req">*</span>' : ""}</label>`));

  if (q.type === "textarea") {
    const ta = el(`<textarea></textarea>`);
    ta.value = STATE.answers[q.id] || "";
    ta.oninput = () => { STATE.answers[q.id] = ta.value; scheduleSave(); };
    wrap.appendChild(ta);
  } else if (q.type === "number") {
    const inp = el(`<input type="number">`);
    inp.value = STATE.answers[q.id] || "";
    inp.oninput = () => { STATE.answers[q.id] = inp.value; scheduleSave(); };
    wrap.appendChild(inp);
  } else if (q.type === "number-group") {
    const sfWrap = el(`<div class="subfields"></div>`);
    const cur = STATE.answers[q.id] || {};
    q.subfields.forEach(sf => {
      const sfEl = el(`<div class="subfield"><label>${escapeHtml(sf.label)}</label><input type="number"></div>`);
      const input = sfEl.querySelector("input");
      input.value = cur[sf.key] !== undefined ? cur[sf.key] : "";
      input.oninput = () => {
        if (!STATE.answers[q.id]) STATE.answers[q.id] = {};
        STATE.answers[q.id][sf.key] = input.value;
        scheduleSave();
      };
      sfWrap.appendChild(sfEl);
    });
    wrap.appendChild(sfWrap);
  } else if (q.type === "radio") {
    const optsWrap = el(`<div></div>`);
    q.options.forEach(opt => {
      const optEl = el(`
        <label class="radio-opt">
          <input type="radio" name="${q.id}" value="${escapeHtml(opt)}" ${STATE.answers[q.id]===opt ? "checked":""}>
          ${escapeHtml(opt)}
        </label>
      `);
      optEl.querySelector("input").onchange = () => { STATE.answers[q.id] = opt; scheduleSave(); };
      optsWrap.appendChild(optEl);
    });
    wrap.appendChild(optsWrap);
  }

  if (q.fileAllowed) {
    const attWrap = el(`
      <div>
        <div id="files_${q.id}"></div>
        <div class="attach-zone" id="zone_${q.id}">📎 Прикрепить файл(ы) к этому вопросу</div>
        <input type="file" id="input_${q.id}" multiple style="display:none">
      </div>
    `);
    wrap.appendChild(attWrap);
    renderFileList(attWrap.querySelector(`#files_${q.id}`), q.id);
    attWrap.querySelector(`#zone_${q.id}`).onclick = () => attWrap.querySelector(`#input_${q.id}`).click();
    attWrap.querySelector(`#input_${q.id}`).onchange = (e) => {
      Array.from(e.target.files).forEach(file => {
        if (!FILES[q.id]) FILES[q.id] = [];
        FILES[q.id].push({ name: file.name, blob: file });
      });
      renderFileList(attWrap.querySelector(`#files_${q.id}`), q.id);
      dirty = true;
    };
  }

  return wrap;
}
function renderFileList(container, qId) {
  container.innerHTML = "";
  const files = FILES[qId] || [];
  files.forEach((f, i) => {
    const item = el(`<div class="file-item"><span>📄 ${escapeHtml(f.name)}</span></div>`);
    const rm = el(`<button style="padding:2px 8px;font-size:11px;">✕</button>`);
    rm.onclick = () => { files.splice(i,1); renderFileList(container, qId); };
    item.appendChild(rm);
    container.appendChild(item);
  });
}

function renderAll() { renderSidebar(); renderMain(); }

/* ============================= ВАЛИДАЦИЯ / ЭКСПОРТ ============================= */
function getMissingRequired() {
  const missing = [];
  if (!STATE.company.trim()) missing.push("Название компании");
  if (!STATE.name.trim()) missing.push("ФИО руководителя");
  ALL_Q.forEach(q => { if (q.required && !isAnswered(q)) missing.push(q.label); });
  return missing;
}

function slugify(s) {
  return (s||"файл").trim().replace(/[^a-zA-Zа-яА-ЯёЁ0-9]+/g, "_").slice(0,40) || "файл";
}

async function onClearClick() {
  if (!confirm("Точно очистить всю форму? Все введённые ответы и прикреплённые файлы будут удалены безвозвратно.")) return;
  STATE = { company:"", name:"", answers:{}, currentBlock:"a" };
  FILES = {};
  try { localStorage.removeItem(LS_KEY); } catch(e) {}
  dirty = false;
  renderAll();
  toast("Форма очищена");
}

async function onDownloadClick() {
  const missing = getMissingRequired();
  if (missing.length) {
    const proceed = confirm("Не заполнены обязательные поля (" + missing.length + "):\n\n" +
      missing.slice(0,12).join("\n") + (missing.length>12 ? "\n…и ещё " + (missing.length-12) : "") +
      "\n\nВсё равно скачать архив с тем, что уже заполнено?");
    if (!proceed) return;
  }
  await buildAndDownloadZip();
}

async function buildAndDownloadZip() {
  if (typeof JSZip === "undefined") { toast("Библиотека JSZip не загрузилась — проверьте соединение"); return; }
  toast("Собираю архив…");

  const zip = new JSZip();

  // answers.json
  const answersExport = { company: STATE.company, name: STATE.name, filledAt: new Date().toISOString(), answers: {} };
  ALL_Q.forEach(q => { answersExport.answers[q.id] = { label: q.label, value: STATE.answers[q.id] !== undefined ? STATE.answers[q.id] : null }; });
  zip.file("answers.json", JSON.stringify(answersExport, null, 2));

  // answers.xlsx
  const rows = [["Блок", "ID", "Вопрос", "Ответ", "Файлы"]];
  BLOCKS.forEach(b => {
    b.questions.forEach(q => {
      let val = STATE.answers[q.id];
      if (q.type === "number-group" && val) {
        val = q.subfields.map(sf => sf.label + ": " + (val[sf.key] !== undefined ? val[sf.key] : "")).join("; ");
      }
      const fnames = (FILES[q.id]||[]).map(f=>f.name).join(", ");
      rows.push([b.title, q.id, q.label, val !== undefined && val !== null ? val : "", fnames]);
    });
  });
  try {
    const ws = XLSX.utils.aoa_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Ответы");
    const xlsxOut = XLSX.write(wb, { type: "array", bookType: "xlsx" });
    zip.file("answers.xlsx", xlsxOut);
  } catch(e) { /* if SheetJS failed to load, skip xlsx, json still present */ }

  // files/
  let totalBytes = 0;
  Object.entries(FILES).forEach(([qId, arr]) => {
    arr.forEach(f => {
      totalBytes += f.blob.size || 0;
      zip.file("files/" + qId + "_" + f.name, f.blob);
    });
  });
  if (totalBytes > 25 * 1024 * 1024) {
    if (!confirm("Суммарный размер приложенных файлов превышает 25 МБ (" + (totalBytes/1024/1024).toFixed(1) + " МБ). Архив может быть неудобно отправить. Продолжить сборку?")) return;
  }

  const blob = await zip.generateAsync({ type: "blob" });
  const dateStr = new Date().toISOString().slice(0,10);
  const filename = "profimer_answers_" + slugify(STATE.name) + "_" + dateStr + ".zip";

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  toast("Архив скачан. " + CONTACT_INSTRUCTION);
}

/* ============================= INIT ============================= */
function init() {
  loadLocal();
  renderAll();
}
init();
