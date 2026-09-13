/**
 * VOID — Single Product Detail Page Handler
 */

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Fallback to first product if query parameter is missing or invalid
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  renderProductPage(product);
});

function renderProductPage(product) {
  if (!product) return;

  // Title and Meta
  document.title = `${product.name} — ${STORE_CONFIG.brandName}`;

  // DOM Elements
  const titleEl = document.getElementById("product-title");
  const priceEl = document.getElementById("product-price");
  const categoryEl = document.getElementById("product-category");
  const descEl = document.getElementById("product-desc");
  const embroideryEl = document.getElementById("product-embroidery");
  const colorEl = document.getElementById("product-color");
  const sizeSelectorEl = document.getElementById("size-selector");
  const mainImageEl = document.getElementById("main-product-image");
  const thumbnailRowEl = document.getElementById("thumbnail-row");
  const whatsappBtn = document.getElementById("whatsapp-order-btn");
  const emailBtn = document.getElementById("email-order-btn");

  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.textContent = `${STORE_CONFIG.currency}${product.price}`;
  if (categoryEl) categoryEl.textContent = product.category === "hoodies" ? "Heavyweight Hoodie" : "Embroidered T-Shirt";
  if (descEl) descEl.textContent = product.description;
  if (embroideryEl) embroideryEl.textContent = product.embroidery || "Precision direct-to-garment embroidery.";
  if (colorEl) colorEl.textContent = product.colors.join(", ");

  // Setup Image Sources
  const images = (product.images && product.images.length > 0)
    ? product.images
    : product.fallbackImages;

  const fallbackImages = product.fallbackImages || [];

  if (mainImageEl && images.length > 0) {
    mainImageEl.src = images[0];
    mainImageEl.alt = `${product.name} detail view`;
    mainImageEl.onerror = () => {
      if (fallbackImages[0]) mainImageEl.src = fallbackImages[0];
    };
  }

  // Thumbnails Switching
  if (thumbnailRowEl) {
    thumbnailRowEl.innerHTML = images.map((imgSrc, index) => {
      const fallback = fallbackImages[index] || fallbackImages[0] || "";
      return `
        <button class="thumbnail-item ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="View photo ${index + 1}">
          <img src="${imgSrc}" alt="Thumbnail ${index + 1}" onerror="if(this.src !== '${fallback}') this.src='${fallback}';" />
        </button>
      `;
    }).join("");

    const thumbs = thumbnailRowEl.querySelectorAll(".thumbnail-item");
    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        const idx = parseInt(thumb.getAttribute("data-index"), 10);
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        mainImageEl.src = images[idx];
        mainImageEl.onerror = () => {
          if (fallbackImages[idx]) mainImageEl.src = fallbackImages[idx];
        };
      });
    });
  }

  // State: selected size
  let selectedSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : "Standard";

  // Size buttons setup
  if (sizeSelectorEl && product.sizes) {
    sizeSelectorEl.innerHTML = product.sizes.map((size, idx) => `
      <button class="size-btn ${idx === 0 ? 'active' : ''}" data-size="${size}" type="button">
        ${size}
      </button>
    `).join("");

    const sizeBtns = sizeSelectorEl.querySelectorAll(".size-btn");
    sizeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sizeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = btn.getAttribute("data-size");
        updateActionLinks();
      });
    });
  }

  // Dynamic prefilled WhatsApp & Email generator
  function updateActionLinks() {
    const rawMessage = `Hi, I'm interested in ordering the ${product.name}. Size: ${selectedSize}. Price: ${STORE_CONFIG.currency}${product.price}.`;
    const encodedMessage = encodeURIComponent(rawMessage);

    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
      whatsappBtn.target = "_blank";
      whatsappBtn.rel = "noopener noreferrer";
    }

    if (emailBtn) {
      const subject = encodeURIComponent(`Order Inquiry: ${product.name} (${selectedSize})`);
      emailBtn.href = `mailto:${STORE_CONFIG.email}?subject=${subject}&body=${encodedMessage}`;
    }
  }

  updateActionLinks();
}
