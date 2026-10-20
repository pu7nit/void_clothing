/** VOID — Product detail page with garment/color/size selection */
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const product = PRODUCTS.find(p => p.id === params.get("id")) || PRODUCTS[0];
  renderProductPage(product);
});

function renderProductPage(product) {
  if (!product) return;

  document.title = `${product.name} — ${STORE_CONFIG.brandName}`;
  const $ = id => document.getElementById(id);

  const titleEl = $("product-title");
  const priceEl = $("product-price");
  const categoryEl = $("product-category");
  const descEl = $("product-desc");
  const embroideryEl = $("product-embroidery");
  const colorSelect = $("product-color-select");
  const sizeSelector = $("size-selector");
  const mainImage = $("main-product-image");
  const thumbs = $("thumbnail-row");
  const whatsapp = $("whatsapp-order-btn");
  const email = $("email-order-btn");
  const stockMsg = $("stock-message");
  const garmentButtons = $("garment-selector");

  if (titleEl) titleEl.textContent = product.name;
  if (descEl) descEl.textContent = product.description;
  if (embroideryEl) {
    embroideryEl.textContent =
      product.embroidery || "Precision embroidery.";
  }

  // Garments the product actually comes in: a garment is selectable only if
  // it has colors configured in js/products.js. Omit a garment key there
  // (or leave its colors empty) and its button will not be rendered.
  const availableGarments = ["t-shirts", "hoodies"].filter(
    key => (product.garments?.[key]?.colors || []).length > 0
  );
  let selectedGarment = availableGarments[0] || "t-shirts";
  let selectedColor = null;
  let selectedSize = null;

  function renderGallery(color) {
    const images =
      (color?.images?.length ? color.images : color?.fallbackImages) || [];
    const fallback = color?.fallbackImages || images;

    if (mainImage) {
      mainImage.src = images[0] || "";
      mainImage.alt =
        `${product.name} ${selectedGarment} ${color?.name || ""}`;

      mainImage.onerror = () => {
        if (fallback[0]) mainImage.src = fallback[0];
      };
    }

    if (!thumbs) return;

    thumbs.innerHTML = images.map((src, index) => `
      <button
        class="thumbnail-item ${index === 0 ? "active" : ""}"
        data-index="${index}"
        type="button"
        aria-label="View photo ${index + 1}"
      >
        <img src="${src}" alt="Photo ${index + 1}">
      </button>
    `).join("");

    thumbs.querySelectorAll(".thumbnail-item").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);

        thumbs.querySelectorAll(".thumbnail-item")
          .forEach(item => item.classList.remove("active"));

        button.classList.add("active");

        if (mainImage) {
          mainImage.src = images[index];
          mainImage.onerror = () => {
            if (fallback[index]) mainImage.src = fallback[index];
          };
        }
      });
    });
  }

  function updateStockMessage() {
    if (!stockMsg) return;

    const stock = Number(selectedColor?.sizes?.[selectedSize] || 0);
    stockMsg.classList.remove("low-stock");

    stockMsg.textContent =
      stock > 0 && stock <= 3
        ? `Only ${stock} ${stock === 1 ? "item" : "items"} left in stock`
        : "";

    if (stock > 0 && stock <= 3) {
      stockMsg.classList.add("low-stock");
    }
  }

  function updateLinks() {
    const garmentLabel =
      selectedGarment === "hoodies" ? "Hoodie" : "T-Shirt";

    const garment = product.garments[selectedGarment] || {};
    const price = selectedColor?.price ?? garment.price;

    const priceLabel =
      price != null && Number.isFinite(Number(price))
        ? `${STORE_CONFIG.currency}${price}`
        : "Price to be confirmed";

    const message =
      `Hi, I'm interested in ordering ${product.name}. ` +
      `Garment: ${garmentLabel}. ` +
      `Color: ${selectedColor?.name || "Not selected"}. ` +
      `Size: ${selectedSize || "Not selected"}. ` +
      `Price: ${priceLabel}.`;

    const encoded = encodeURIComponent(message);

    if (whatsapp) {
      whatsapp.href =
        `https://wa.me/${STORE_CONFIG.whatsappNumber.replace(/\D/g, "")}` +
        `?text=${encoded}`;
      whatsapp.target = "_blank";
      whatsapp.rel = "noopener noreferrer";
    }

    if (email) {
      email.href =
        `mailto:${STORE_CONFIG.email}` +
        `?subject=${encodeURIComponent(
          `Order Inquiry: ${product.name} - ${garmentLabel}`
        )}` +
        `&body=${encoded}`;
    }
  }

  function renderSizes() {
    if (!sizeSelector) return;

    const sizes = selectedColor?.sizes || {};
    const entries = Object.entries(sizes);
    selectedSize = null;

    if (!entries.length) {
      sizeSelector.innerHTML =
        '<p class="variant-note">Add size stock in js/products.js.</p>';
      updateStockMessage();
      updateLinks();
      return;
    }

    const firstAvailable = entries.find(([, quantity]) =>
      Number(quantity) > 0
    );

    selectedSize = firstAvailable?.[0] || null;

    sizeSelector.innerHTML = entries.map(([size, quantity]) => {
      const available = Number(quantity) > 0;
      const active = firstAvailable?.[0] === size;

      return `
        <button
          class="size-btn ${available ? "" : "out-of-stock"} ${active ? "active" : ""}"
          data-size="${size}"
          type="button"
          ${available ? "" : "disabled"}
        >${size}</button>
      `;
    }).join("");

    sizeSelector.querySelectorAll(".size-btn:not(:disabled)")
      .forEach(button => {
        button.addEventListener("click", () => {
          sizeSelector.querySelectorAll(".size-btn")
            .forEach(item => item.classList.remove("active"));

          button.classList.add("active");
          selectedSize = button.dataset.size;

          updateStockMessage();
          updateLinks();
        });
      });

    updateStockMessage();
    updateLinks();
  }

  function renderColors() {
    const garment = product.garments[selectedGarment] || {
      price: null,
      colors: []
    };

    const colors = garment.colors || [];

    if (categoryEl) {
      categoryEl.textContent =
        selectedGarment === "hoodies"
          ? "Heavyweight Hoodie"
          : "Embroidered T-Shirt";
    }

    if (!colorSelect) return;

    colorSelect.innerHTML = colors.length
      ? colors.map((color, index) =>
          `<option value="${index}">${color.name}</option>`
        ).join("")
      : '<option value="">No colors added yet</option>';

    selectedColor = colors[0] || null;

    if (!selectedColor) {
      if (priceEl) {
        priceEl.textContent =
          garment.price != null
            ? `${STORE_CONFIG.currency}${garment.price}`
            : "Price not configured";
      }

      const colorLabel = $("product-color");
      if (colorLabel) colorLabel.textContent = "Add colors in js/products.js";

      if (sizeSelector) {
        sizeSelector.innerHTML =
          '<p class="variant-note">This garment is not configured yet. Add available colors, prices, images, and size stock in js/products.js.</p>';
      }

      if (stockMsg) stockMsg.textContent = "";

      renderGallery(null);
      updateLinks();
      return;
    }

    function selectColor(index) {
      selectedColor = colors[index] || null;
      if (!selectedColor) return;

      const colorLabel = $("product-color");
      if (colorLabel) colorLabel.textContent = selectedColor.name;

      const price = selectedColor.price ?? garment.price;
      if (priceEl) {
        priceEl.textContent =
          price != null
            ? `${STORE_CONFIG.currency}${price}`
            : "Price not configured";
      }

      renderGallery(selectedColor);
      renderSizes();
    }

    colorSelect.onchange = () => {
      selectColor(Number(colorSelect.value));
    };

    selectColor(0);
  }

  if (garmentButtons) {
    // List only the garment versions this product is available in.
    garmentButtons.innerHTML = availableGarments.map(key => `
      <button
        class="variant-btn ${key === selectedGarment ? "active" : ""}"
        type="button"
        data-garment="${key}"
      >${key === "hoodies" ? "Hoodie" : "T-Shirt"}</button>
    `).join("");

    // Products offered in only one garment type don't need a selector.
    if (availableGarments.length < 2) {
      const selectorGroup = garmentButtons.closest(".selection-group");
      if (selectorGroup) selectorGroup.style.display = "none";
    }

    garmentButtons.querySelectorAll("[data-garment]").forEach(button => {
      button.addEventListener("click", () => {
        selectedGarment = button.dataset.garment;

        garmentButtons.querySelectorAll("[data-garment]")
          .forEach(item => {
            item.classList.toggle("active", item === button);
          });

        renderColors();
      });
    });
  }

  renderColors();
}