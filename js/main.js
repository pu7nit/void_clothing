/**
 * VOID — Main Catalog & Navigation Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initFooterYear();
  renderCatalogViews();
});

// Mobile menu toggle
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
}

// Current year in footer
function initFooterYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Image fallback helper
function getProductPrimaryImage(product) {
  if (product.images && product.images.length > 0) {
    return product.images[0];
  }
  return product.fallbackImages && product.fallbackImages.length > 0
    ? product.fallbackImages[0]
    : "";
}

// Build a product card HTML string
function createProductCardHTML(product) {
  const primaryImg = getProductPrimaryImage(product);
  const fallback = (product.fallbackImages && product.fallbackImages[0]) || "";
  const displayCategory = product.category === "hoodies" ? "Hoodie" : "T-Shirt";

  return `
    <article class="product-card">
      <a href="product.html?id=${encodeURIComponent(product.id)}" class="product-card-media" aria-label="${product.name}">
        <span class="card-category-tag">${displayCategory}</span>
        <img 
          src="${primaryImg}" 
          alt="${product.name} — ${product.tagline}" 
          loading="lazy"
          onerror="if(this.src !== '${fallback}') this.src='${fallback}';"
        />
      </a>
      <div class="product-card-info">
        <h3 class="product-card-title">
          <a href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a>
        </h3>
        <p class="product-card-tagline">${product.tagline || ""}</p>
        <div class="product-card-footer">
          <span class="product-card-price">${STORE_CONFIG.currency}${product.price}</span>
          <a href="product.html?id=${encodeURIComponent(product.id)}" class="card-arrow" aria-label="View details">→</a>
        </div>
      </div>
    </article>
  `;
}

// Render dynamic sections depending on the page in view
function renderCatalogViews() {
  // 1. Featured items on Homepage
  const featuredContainer = document.getElementById("featured-grid");
  if (featuredContainer && typeof PRODUCTS !== "undefined") {
    const featured = PRODUCTS.filter(p => p.featured);
    featuredContainer.innerHTML = featured.map(createProductCardHTML).join("");
  }

  // 2. T-Shirts showcase section
  const tshirtsContainer = document.getElementById("tshirts-grid");
  if (tshirtsContainer && typeof PRODUCTS !== "undefined") {
    const tshirts = PRODUCTS.filter(p => p.category === "t-shirts").slice(0, 4);
    tshirtsContainer.innerHTML = tshirts.map(createProductCardHTML).join("");
  }

  // 3. Hoodies showcase section
  const hoodiesContainer = document.getElementById("hoodies-grid");
  if (hoodiesContainer && typeof PRODUCTS !== "undefined") {
    const hoodies = PRODUCTS.filter(p => p.category === "hoodies").slice(0, 4);
    hoodiesContainer.innerHTML = hoodies.map(createProductCardHTML).join("");
  }

  // 4. Shop / Catalog Grid with filter tabs (used on index.html and shop.html)
  const shopGrid = document.getElementById("shop-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (shopGrid && typeof PRODUCTS !== "undefined") {
    function filterProducts(category) {
      const filtered = category === "all"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === category);

      shopGrid.innerHTML = filtered.map(createProductCardHTML).join("");
    }

    // Default: show all products
    filterProducts("all");

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.getAttribute("data-category");
        filterProducts(cat);
      });
    });
  }
}
