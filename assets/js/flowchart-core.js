/* =========================================================
   FLOWCHART-CORE.JS
   Mesin render generik untuk seluruh halaman kategori.
   Membaca satu object data (window.KATEGORI_DATA) berisi
   { id, title, subtitle, legalRef, startId, nodes:{...} }
   Setiap kategori HANYA perlu ganti file data
   (assets/js/kategori-N.js), tidak perlu ubah file ini.
   ========================================================= */

(function () {
  "use strict";

  const TYPE_LABEL = {
    start: "Mulai",
    process: "Proses",
    decision: "Keputusan",
    end: "Selesai"
  };

  function FlowchartGame(data, els) {
    this.data = data;
    this.els = els;
    this.history = [];        // urutan id node yang sudah dilalui
    this.choiceTaken = {};    // {nodeId: chosenNextId} untuk decision
    this.currentId = null;
    this.init();
  }

  FlowchartGame.prototype.init = function () {
    this.els.startBtn.addEventListener("click", () => this.start());
    this.els.restartBtn.addEventListener("click", () => this.restart());
    this.els.backBtn.addEventListener("click", () => this.stepBack());
    this.renderEmptyInfo();
  };

  FlowchartGame.prototype.start = function () {
    this.history = [];
    this.choiceTaken = {};
    this.els.startScreen.style.display = "none";
    this.els.flowchartArea.style.display = "flex";
    this.els.controlsRow.style.display = "flex";
    this.goTo(this.data.startId);
  };

  FlowchartGame.prototype.restart = function () {
    this.els.flowchartArea.innerHTML = "";
    this.els.startScreen.style.display = "block";
    this.els.flowchartArea.style.display = "none";
    this.els.controlsRow.style.display = "none";
    this.history = [];
    this.choiceTaken = {};
    this.currentId = null;
    this.renderEmptyInfo();
    this.updateProgress();
  };

  FlowchartGame.prototype.stepBack = function () {
    if (this.history.length <= 1) return;
    // hapus node terakhir dari history & DOM
    this.history.pop();
    const last = this.history[this.history.length - 1];
    delete this.choiceTaken[last];
    // render ulang dari awal history supaya konsisten
    const keep = this.history.slice();
    this.els.flowchartArea.innerHTML = "";
    this.history = [];
    keep.forEach((id, idx) => {
      this._appendNode(id, idx === 0);
    });
    this.currentId = keep[keep.length - 1];
    this.showInfo(this.currentId);
    this.updateProgress();
    this.scrollToBottom();
  };

  FlowchartGame.prototype.goTo = function (nodeId) {
    const isFirst = this.history.length === 0;
    this._appendNode(nodeId, isFirst);
    this.currentId = nodeId;
    this.showInfo(nodeId);
    this.updateProgress();
    this.scrollToBottom();
  };

  FlowchartGame.prototype._appendNode = function (nodeId, isFirst) {
    const node = this.data.nodes[nodeId];
    if (!node) return;
    this.history.push(nodeId);

    if (!isFirst) {
      const connector = document.createElement("div");
      connector.className = "f-connector";
      this.els.flowchartArea.appendChild(connector);
    }

    const card = document.createElement("div");
    card.className = "f-node type-" + node.type;
    card.dataset.id = nodeId;
    card.innerHTML =
      '<span class="f-type">' + (TYPE_LABEL[node.type] || node.type) + '</span>' +
      '<div class="f-title">' + node.title + '</div>' +
      (node.actor ? '<span class="f-actor">👤 ' + node.actor + '</span>' : '');
    card.addEventListener("click", () => this.showInfo(nodeId));
    this.els.flowchartArea.appendChild(card);

    if (node.type === "decision" && Array.isArray(node.choices)) {
      const row = document.createElement("div");
      row.className = "choice-row";
      node.choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice.label;
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (this.choiceTaken[nodeId]) return; // sudah dipilih
          this.choiceTaken[nodeId] = choice.next;
          row.querySelectorAll(".choice-btn").forEach((b) => (b.disabled = true));
          btn.classList.add("taken");
          this.goTo(choice.next);
        });
        row.appendChild(btn);
      });
      this.els.flowchartArea.appendChild(row);
    } else if (node.type !== "end" && node.next) {
      const contRow = document.createElement("div");
      contRow.className = "f-continue-row";
      const btn = document.createElement("button");
      btn.className = "btn btn-primary";
      btn.textContent = "Lanjut ➜";
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        btn.disabled = true;
        this.goTo(node.next);
      });
      contRow.appendChild(btn);
      this.els.flowchartArea.appendChild(contRow);
    } else if (node.type === "end") {
      const endRow = document.createElement("div");
      endRow.className = "f-continue-row";
      const btn = document.createElement("a");
      btn.className = "btn btn-secondary";
      btn.textContent = "Lihat Ringkasan Hasil ➜";
      btn.href = this._buildResultLink();
      this.els.flowchartArea.appendChild(endRow).appendChild(btn);
    }
  };

  FlowchartGame.prototype._buildResultLink = function () {
    const path = this.history.join(",");
    const params = new URLSearchParams({
      kategori: this.data.id,
      title: this.data.title,
      path: path
    });
    return "hasil.html?" + params.toString();
  };

  FlowchartGame.prototype.showInfo = function (nodeId) {
    const node = this.data.nodes[nodeId];
    if (!node) return;
    const panel = this.els.infoPanel;
    let html = '<span class="info-node-type type-' + node.type + '">' +
      (TYPE_LABEL[node.type] || node.type) + '</span>';
    html += '<div class="info-title">' + node.title + '</div>';
    html += '<div class="info-desc">' + (node.description || "-") + '</div>';

    if (node.actor) {
      html += '<div class="info-block"><h5>Aktor / Pelaksana</h5>' +
        '<span class="info-actor-badge">👤 ' + node.actor + '</span></div>';
    }
    if (node.legalRef) {
      html += '<div class="info-block"><h5>Dasar Aturan</h5>' +
        '<span class="info-legal">📖 ' + node.legalRef + '</span></div>';
    }
    if (node.type === "decision" && Array.isArray(node.choices)) {
      html += '<div class="info-block"><h5>Cabang Pilihan</h5><ul class="info-choices">';
      node.choices.forEach((c) => {
        const target = this.data.nodes[c.next];
        html += '<li><b>' + c.label + '</b> → ' + (target ? target.title : c.next) + '</li>';
      });
      html += '</ul></div>';
    }
    panel.innerHTML = html;
  };

  FlowchartGame.prototype.renderEmptyInfo = function () {
    this.els.infoPanel.innerHTML =
      '<div class="info-empty">Klik "Mulai" lalu pilih / klik node pada flowchart untuk melihat keterangan lengkap di sini. 🌿</div>';
  };

  FlowchartGame.prototype.updateProgress = function () {
    const total = Object.keys(this.data.nodes).length;
    const done = this.history.length;
    const pct = Math.min(100, Math.round((done / total) * 100));
    this.els.progressInner.style.width = pct + "%";
    this.els.progressStep.textContent = done + " langkah dilalui";
    this.els.progressPct.textContent = pct + "%";
    this.els.backBtn.disabled = this.history.length <= 1;
  };

  FlowchartGame.prototype.scrollToBottom = function () {
    requestAnimationFrame(() => {
      this.els.flowchartArea.scrollTop = this.els.flowchartArea.scrollHeight;
    });
  };

  // expose ke global agar dipanggil dari tiap halaman kategori
  window.FlowchartGame = FlowchartGame;
})();
