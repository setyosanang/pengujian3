/* =========================================================
   MAIN.JS
   Fungsi umum lintas halaman: render grid kategori di index,
   set tahun footer, dan util kecil lain.
   ========================================================= */

(function () {
  "use strict";

  function cardHTML(c) {
    return (
      '<a class="category-card" href="' + c.file + '">' +
        '<div class="card-top-row">' +
          '<div class="category-icon">' + c.icon + '</div>' +
          '<span class="category-tag ' + c.tagClass + '">' + c.tag + '</span>' +
        '</div>' +
        '<h3>' + c.title + '</h3>' +
        '<p class="cat-desc">' + c.desc + '</p>' +
        '<div class="card-cta"><span>Mulai Kategori</span><span class="arrow">➜</span></div>' +
      '</a>'
    );
  }

  function renderCategoryGrid() {
    if (!window.CATEGORY_LIST) return;
    const gridSidang = document.getElementById("gridSidang");
    const gridPutusan = document.getElementById("gridPutusan");
    const gridAll = document.getElementById("categoryGrid");

    if (gridSidang && gridPutusan) {
      // index.html v2: dua section terpisah berdasarkan tag
      gridSidang.innerHTML = window.CATEGORY_LIST
        .filter((c) => c.tag === "Sidang")
        .map(cardHTML)
        .join("");
      gridPutusan.innerHTML = window.CATEGORY_LIST
        .filter((c) => c.tag === "Putusan")
        .map(cardHTML)
        .join("");
    } else if (gridAll) {
      // fallback: satu grid gabungan
      gridAll.innerHTML = window.CATEGORY_LIST.map(cardHTML).join("");
    }
  }

  function setFooterYear() {
    const el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderCategoryGrid();
    setFooterYear();
  });
})();
