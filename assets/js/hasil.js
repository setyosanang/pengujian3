/* =========================================================
   HASIL.JS
   Halaman ringkasan: membaca query string ?kategori=..&path=..
   lalu memuat file data kategori terkait secara dinamis
   (agar tidak saling menimpa window.KATEGORI_DATA), kemudian
   menampilkan daftar node yang telah dilalui pengguna.
   ========================================================= */

(function () {
  "use strict";

  function getParams() {
    const p = new URLSearchParams(window.location.search);
    return {
      kategori: p.get("kategori"),
      title: p.get("title"),
      path: p.get("path")
    };
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  function renderEmptyState() {
    document.getElementById("resultTitle").textContent = "Belum Ada Jalur Ditelusuri";
    document.getElementById("resultSub").textContent =
      "Silakan pilih salah satu kategori dari menu utama dan selesaikan alurnya untuk melihat ringkasan di sini.";
    document.getElementById("resultEmoji").textContent = "🌱";
    document.getElementById("resultPath").innerHTML = "";
    document.getElementById("replayBtn").style.display = "none";
  }

  async function init() {
    const { kategori, title, path } = getParams();
    if (!kategori || !path) {
      renderEmptyState();
      return;
    }

    try {
      await loadScript("assets/js/" + kategori + ".js");
    } catch (e) {
      renderEmptyState();
      return;
    }

    const data = window.KATEGORI_DATA;
    const ids = path.split(",").filter(Boolean);
    if (!data || !ids.length) {
      renderEmptyState();
      return;
    }

    document.getElementById("resultTitle").textContent = "Alur \"" + (title || data.title) + "\" Selesai";
    document.getElementById("resultSub").textContent =
      "Kamu berhasil menelusuri " + ids.length + " langkah dalam kategori ini. Berikut ringkasannya:";

    const list = document.getElementById("resultPath");
    list.innerHTML = ids.map((id, idx) => {
      const node = data.nodes[id];
      if (!node) return "";
      return "<li><b>" + (idx + 1) + ". " + node.title + "</b>" +
        (node.actor ? " — <i>" + node.actor + "</i>" : "") + "</li>";
    }).join("");

    const lastNode = data.nodes[ids[ids.length - 1]];
    document.getElementById("resultEmoji").textContent =
      lastNode && lastNode.type === "end" ? "🎉" : "🌿";

    const replay = document.getElementById("replayBtn");
    const catMeta = (window.CATEGORY_LIST || []).find((c) => c.id === kategori);
    replay.href = catMeta ? catMeta.file : "index.html";
  }

  document.addEventListener("DOMContentLoaded", init);
})();
