
/** VOID — Catalog and navigation */
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initFooterYear();
  renderCatalogViews();
});

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => links.classList.remove("open"));
    });
  }
}

function initFooterYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}

function getConfiguredGarments(product) {
  return ["t-shirts", "hoodies"].filter(
    key => (product.garments?.[key]?.colors || []).length > 0
  );
}

function getProductPrimaryImage(product) {
  const garmentKey = getConfiguredGarments(product)[0];
  const color = product.garments?.[garmentKey]?.colors?.[0];
  return color?.images?.[0] || color?.fallbackImages?.[0] || "";
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function createProductCardHTML(product) {
  const image = getProductPrimaryImage(product);
  const garments = getConfiguredGarments(product);

  const label = garments.length === 2
    ? "T-Shirt + Hoodie"
    : garments[0] === "hoodies"
      ? "Hoodie"
      : garments[0] === "t-shirts"
        ? "T-Shirt"
        : "Made to order";

  const prices = garments.flatMap(key =>
    (product.garments[key].colors || [])
      .map(color => Number(color.price ?? product.garments[key].price))
      .filter(price => Number.isFinite(price) && price > 0)
  );

  const minimum = prices.length ? Math.min(...prices) : null;
  const maximum = prices.length ? Math.max(...prices) : null;

  const priceLabel = minimum === null
    ? "Price on request"
    : `${STORE_CONFIG.currency}${minimum}${minimum !== maximum ? " +" : ""}`;

  const url = `product.html?id=${encodeURIComponent(product.id)}`;

  return `
    <article class="product-card">
      <a href="${url}" class="product-card-media" aria-label="${escapeHTML(product.name)}">
        <span class="card-category-tag">${label}</span>
        ${
          image
            ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(product.name)}" loading="lazy">`
            : '<div class="product-image-placeholder">VOID</div>'
        }
      </a>
      <div class="product-card-info">
        <h3 class="product-card-title">
          <a href="${url}">${escapeHTML(product.name)}</a>
        </h3>
        <p class="product-card-tagline">${escapeHTML(product.tagline)}</p>
        <div class="product-card-footer">
          <span class="product-card-price">${priceLabel}</span>
          <a href="${url}" class="card-arrow" aria-label="View details">→</a>
        </div>
      </div>
    </article>
  `;
}

function renderCatalogViews() {
  const featured = document.getElementById("featured-grid");
  if (featured) {
    featured.innerHTML = PRODUCTS
      .filter(product => product.featured)
      .map(createProductCardHTML)
      .join("");
  }

  const tees = document.getElementById("tshirts-grid");
  if (tees) {
    tees.innerHTML = PRODUCTS
      .filter(product => (product.garments?.["t-shirts"]?.colors || []).length)
      .slice(0, 4)
      .map(createProductCardHTML)
      .join("");
  }

  const hoodies = document.getElementById("hoodies-grid");
  if (hoodies) {
    hoodies.innerHTML = PRODUCTS
      .filter(product => (product.garments?.hoodies?.colors || []).length)
      .slice(0, 4)
      .map(createProductCardHTML)
      .join("");
  }

  const grid = document.getElementById("shop-grid");
  const buttons = document.querySelectorAll(".filter-btn");
  if (!grid) return;

  function filterCatalog(category) {
    const products = category === "all"
      ? PRODUCTS
      : PRODUCTS.filter(product =>
          (product.garments?.[category]?.colors || []).length > 0
        );

    grid.innerHTML = products.map(createProductCardHTML).join("");
  }

  filterCatalog("all");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      filterCatalog(button.dataset.category);
    });
  });
}
