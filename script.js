const products = [
    {
        id: 1,
        name: "Royal Harvest Tomato Pack",
        category: "Fresh Produce",
        price: 1250,
        description: "Sweet and juicy tomatoes sourced from trusted growers.",
        image: "images/product-photos/catalog-01.jpg"
    },
    {
        id: 2,
        name: "Nexora Breakfast Bundle",
        category: "Groceries",
        price: 6800,
        description: "A quick family bundle with oats, eggs, bread, and coffee essentials.",
        image: "images/product-photos/catalog-02-ccby.jpg"
    },
    {
        id: 3,
        name: "Luna Sparkling Water",
        category: "Beverages",
        price: 900,
        description: "Crisp bottled water for lunch breaks, workouts, and quick refills.",
        image: "images/product-photos/catalog-03.jpg"
    },
    {
        id: 4,
        name: "Snug Cocoa Crunch",
        category: "Snacks & Treats",
        price: 1800,
        description: "Chocolate-coated cereal bites for a satisfying afternoon crunch.",
        image: "images/product-photos/catalog-04.jpg"
    },
    {
        id: 5,
        name: "FreshCare Laundry Kit",
        category: "Household Essentials",
        price: 5600,
        description: "A complete family laundry set with detergent, softener, and bleach.",
        image: "images/product-photos/catalog-05.jpg"
    },
    {
        id: 6,
        name: "Glow Essentials Kit",
        category: "Personal Care",
        price: 4700,
        description: "Skincare essentials for gentle cleansing, hydration, and daily care.",
        image: "images/product-photos/catalog-06-curated.jpg"
    },
    {
        id: 7,
        name: "Smart Home Speaker",
        category: "Electronics",
        price: 22000,
        description: "Compact voice-ready speaker with crisp sound and seamless controls.",
        image: "images/product-photos/catalog-07-curated.jpg"
    },
    {
        id: 8,
        name: "Tiny Steps Care Pack",
        category: "Baby Care",
        price: 3400,
        description: "Gentle baby care essentials for everyday comfort and hygiene.",
        image: "images/product-photos/catalog-08.jpg"
    },
    { id: 9, name: "Long-Grain Rice", category: "Groceries", price: 4200, description: "A versatile pantry staple for everyday meals.", image: "images/product-photos/catalog-09.jpg" },
    { id: 10, name: "Brown Beans", category: "Groceries", price: 2800, description: "Protein-rich beans for soups, stews, and family meals.", image: "images/product-photos/catalog-10-ccby.jpg" },
    { id: 11, name: "White Garri", category: "Groceries", price: 1600, description: "Cassava flakes ready for a quick meal or snack.", image: "images/product-photos/catalog-11-curated.jpg" },
    { id: 12, name: "Spaghetti", category: "Groceries", price: 1200, description: "Dried pasta for simple, satisfying meals.", image: "images/product-photos/catalog-12.jpg" },
    { id: 13, name: "All-Purpose Flour", category: "Groceries", price: 1900, description: "Fine flour for baking and home cooking.", image: "images/product-photos/catalog-13-curated.jpg" },
    { id: 14, name: "Vegetable Cooking Oil", category: "Groceries", price: 3500, description: "Everyday cooking oil for frying and meal preparation.", image: "images/product-photos/catalog-14.jpg" },
    { id: 15, name: "Granulated Sugar", category: "Groceries", price: 1400, description: "A pantry sweetener for drinks and baking.", image: "images/product-photos/catalog-15-curated.jpg" },
    { id: 16, name: "Table Salt", category: "Groceries", price: 450, description: "Fine salt for seasoning everyday meals.", image: "images/product-photos/catalog-16.jpg" },
    { id: 17, name: "Seasoning Cubes", category: "Groceries", price: 700, description: "A handy seasoning staple for soups and stews.", image: "images/product-photos/catalog-17-curated.jpg" },
    { id: 18, name: "Bottled Water", category: "Beverages", price: 350, description: "Still drinking water for home or on the go.", image: "images/product-photos/catalog-18.jpg" },
    { id: 19, name: "Orange Soft Drink", category: "Beverages", price: 650, description: "A chilled, fizzy orange-flavoured drink.", image: "images/product-photos/catalog-19.jpg" },
    { id: 20, name: "Mango Juice", category: "Beverages", price: 1100, description: "Fruit juice with a bright mango flavour.", image: "images/product-photos/catalog-20-curated.jpg" },
    { id: 21, name: "UHT Whole Milk", category: "Beverages", price: 1800, description: "Long-life whole milk for tea, cereal, and cooking.", image: "images/product-photos/catalog-21.jpg" },
    { id: 22, name: "Black Tea Bags", category: "Beverages", price: 1500, description: "Tea bags for a comforting everyday brew.", image: "images/product-photos/catalog-22.jpg" },
    { id: 23, name: "Instant Coffee", category: "Beverages", price: 2400, description: "Instant coffee for a quick cup at home or work.", image: "images/product-photos/catalog-23.jpg" },
    { id: 24, name: "Butter Biscuits", category: "Snacks & Treats", price: 850, description: "Crisp biscuits to enjoy with tea or as a snack.", image: "images/product-photos/catalog-24-curated.jpg" },
    { id: 25, name: "Milk Chocolate Bar", category: "Snacks & Treats", price: 950, description: "A smooth milk chocolate treat.", image: "images/product-photos/catalog-25.jpg" },
    { id: 26, name: "Fruit Sweets", category: "Snacks & Treats", price: 500, description: "A colourful assortment of individually wrapped sweets.", image: "images/product-photos/catalog-26-ccby.jpg" },
    { id: 27, name: "Chocolate Chip Cookies", category: "Snacks & Treats", price: 1300, description: "Crunchy cookies dotted with chocolate chips.", image: "images/product-photos/catalog-27.jpg" },
    { id: 28, name: "Salted Popcorn", category: "Snacks & Treats", price: 900, description: "Light, ready-to-eat popcorn for movie time.", image: "images/product-photos/catalog-28-verified.jpg" },
    { id: 29, name: "Potato Chips", category: "Snacks & Treats", price: 750, description: "Crispy potato chips in a classic salted flavour.", image: "images/product-photos/catalog-29-curated.jpg" },
    { id: 30, name: "Laundry Detergent", category: "Household Essentials", price: 3200, description: "Laundry detergent for everyday household washing.", image: "images/product-photos/catalog-30.jpg" },
    { id: 31, name: "Dishwashing Liquid", category: "Household Essentials", price: 1400, description: "Dish soap for cleaning plates and cookware.", image: "images/product-photos/catalog-31.jpg" },
    { id: 32, name: "Toilet Paper Rolls", category: "Household Essentials", price: 2100, description: "Soft bathroom tissue for household use.", image: "images/product-photos/catalog-32-ccby.jpg" },
    { id: 33, name: "Surface Disinfectant", category: "Household Essentials", price: 1800, description: "A household cleaner for common hard surfaces.", image: "images/product-photos/catalog-33-curated.jpg" },
    { id: 34, name: "Multi-Purpose Cleaning Cloths", category: "Household Essentials", price: 950, description: "Reusable cloths for everyday cleaning tasks.", image: "images/product-photos/catalog-34-curated.jpg" },
    { id: 35, name: "Bathing Soap", category: "Personal Care", price: 700, description: "A gentle bar soap for daily bathing.", image: "images/product-photos/catalog-35.jpg" },
    { id: 36, name: "Fluoride Toothpaste", category: "Personal Care", price: 1300, description: "Everyday toothpaste for a clean, fresh mouth.", image: "images/product-photos/catalog-36.jpg" },
    { id: 37, name: "Soft-Bristle Toothbrush", category: "Personal Care", price: 650, description: "A soft-bristle toothbrush for daily oral care.", image: "images/product-photos/catalog-37.jpg" },
    { id: 38, name: "Roll-On Deodorant", category: "Personal Care", price: 1900, description: "A daily roll-on deodorant.", image: "images/product-photos/catalog-38.jpg" },
    { id: 39, name: "Moisturising Body Lotion", category: "Personal Care", price: 2800, description: "Body lotion for everyday skin moisturising.", image: "images/product-photos/catalog-39.jpg" },
    { id: 40, name: "Everyday Shampoo", category: "Personal Care", price: 2300, description: "Shampoo for regular hair washing.", image: "images/product-photos/catalog-40-verified.jpg" },
    { id: 41, name: "USB Phone Charger", category: "Electronics", price: 6500, description: "A compact USB wall charger for compatible devices.", image: "images/product-photos/catalog-41-verified.jpg" },
    { id: 42, name: "Wired Earphones", category: "Electronics", price: 4200, description: "Wired earphones for compatible phones and audio devices.", image: "images/product-photos/catalog-42.jpg" },
    { id: 43, name: "AA Batteries", category: "Electronics", price: 1600, description: "A multi-pack of AA batteries for household devices.", image: "images/product-photos/catalog-43.jpg" },
    { id: 44, name: "LED Light Bulb", category: "Electronics", price: 2300, description: "An energy-saving LED bulb for compatible fittings.", image: "images/product-photos/catalog-44-curated.jpg" },
    { id: 45, name: "USB-C Charging Cable", category: "Electronics", price: 2800, description: "A USB-C cable for charging compatible devices.", image: "images/product-photos/catalog-45.jpg" },
    { id: 46, name: "Baby Diapers", category: "Baby Care", price: 5200, description: "Disposable baby diapers; check packaging for size details.", image: "images/product-photos/catalog-46.jpg" },
    { id: 47, name: "Sensitive Baby Wipes", category: "Baby Care", price: 1700, description: "Soft wipes for everyday baby care.", image: "images/product-photos/catalog-47-verified.jpg" },
    { id: 48, name: "Baby Lotion", category: "Baby Care", price: 2400, description: "A mild lotion formulated for baby care.", image: "images/product-photos/catalog-48.jpg" },
    { id: 49, name: "Baby Soap", category: "Baby Care", price: 1100, description: "Gentle cleansing soap for baby bath time.", image: "images/product-photos/catalog-49.jpg" },
    { id: 50, name: "Baby Cereal", category: "Baby Care", price: 3100, description: "Baby cereal; follow the age and preparation guidance on the pack.", image: "images/product-photos/catalog-50-curated.jpg" },
    { id: 51, name: "Fresh Tomatoes", category: "Fresh Produce", price: 1300, description: "Ripe tomatoes for sauces, stews, and salads.", image: "images/product-photos/catalog-51.jpg" },
    { id: 52, name: "Fresh Peppers", category: "Fresh Produce", price: 900, description: "A selection of peppers for cooking and seasoning.", image: "images/product-photos/catalog-52.jpg" },
    { id: 53, name: "Red Onions", category: "Fresh Produce", price: 800, description: "A kitchen staple for everyday cooking.", image: "images/product-photos/catalog-53.jpg" },
    { id: 54, name: "Potatoes", category: "Fresh Produce", price: 1700, description: "Versatile potatoes for roasting, boiling, or frying.", image: "images/product-photos/catalog-54.jpg" },
    { id: 55, name: "Fresh Carrots", category: "Fresh Produce", price: 1000, description: "Crunchy carrots for snacks, salads, and cooking.", image: "images/product-photos/catalog-55.jpg" },
    { id: 56, name: "Bananas", category: "Fresh Produce", price: 1200, description: "Sweet bananas for snacks and breakfast.", image: "images/product-photos/catalog-56.jpg" },
    { id: 57, name: "Oranges", category: "Fresh Produce", price: 1500, description: "Juicy oranges for a fresh fruit snack.", image: "images/product-photos/catalog-57.jpg" },
    { id: 58, name: "Apples", category: "Fresh Produce", price: 2200, description: "Crisp apples for lunchboxes and snacks.", image: "images/product-photos/catalog-58.jpg" },
    { id: 59, name: "Fresh Spinach", category: "Fresh Produce", price: 700, description: "Leafy greens for soups and home-cooked meals.", image: "images/product-photos/catalog-59.jpg" }
];

const storageKey = "nexora-cart";
const reviewsStorageKey = "nexora-customer-reviews";

const state = {
    filter: "all",
    sort: "featured",
    search: "",
    cart: loadCart(),
    preparedContactMessage: "",
    reviews: loadReviews()
};

const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const cartToggle = document.getElementById("cartToggle");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const mobileMenu = document.getElementById("mobileMenu");
const menuButton = document.getElementById("menuButton");
const mobileCartTrigger = document.getElementById("mobileCartTrigger");
const searchInput = document.getElementById("searchInput");
const mobileSearchInput = document.getElementById("mobileSearchInput");
const subtotalValue = document.getElementById("subtotalValue");
const deliveryValue = document.getElementById("deliveryValue");
const discountValue = document.getElementById("discountValue");
const totalValue = document.getElementById("totalValue");
const cartFeedback = document.getElementById("cartFeedback");
const checkoutButton = document.getElementById("checkoutButton");
const checkoutModal = document.getElementById("checkoutModal");
const closeModal = document.getElementById("closeModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutMessage = document.getElementById("checkoutMessage");
const sortSelect = document.getElementById("sortSelect");
const categoryButtons = document.querySelectorAll(".category-pill");
const trackingForm = document.getElementById("trackingForm");
const trackingMessage = document.getElementById("trackingMessage");
const trackingResult = document.getElementById("trackingResult");
const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");
const copyContactMessage = document.getElementById("copyContactMessage");
const writeReviewButton = document.getElementById("writeReviewButton");
const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");
const reviewFeedback = document.getElementById("reviewFeedback");
const reviewerName = document.getElementById("reviewerName");

function setMobileMenuOpen(isOpen) {
    mobileMenu.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
}

function isValidReviewDate(date) {
    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
    const parsedDate = new Date(`${date}T00:00:00Z`);
    return !Number.isNaN(parsedDate.getTime()) && parsedDate.toISOString().slice(0, 10) === date;
}

function getLocalDateString() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${today.getFullYear()}-${month}-${day}`;
}

function loadReviews() {
    try {
        const savedReviews = JSON.parse(localStorage.getItem(reviewsStorageKey) || "[]");
        if (!Array.isArray(savedReviews)) {
            console.warn("Saved Nexora reviews were not in the expected format.");
            return [];
        }

        const validReviews = savedReviews.filter((review) =>
            review &&
            typeof review.name === "string" &&
            review.name.trim().length >= 2 &&
            review.name.length <= 80 &&
            Number.isInteger(review.rating) &&
            review.rating >= 1 &&
            review.rating <= 5 &&
            typeof review.title === "string" &&
            review.title.trim().length >= 1 &&
            review.title.length <= 100 &&
            typeof review.review === "string" &&
            review.review.trim().length >= 1 &&
            review.review.length <= 1000 &&
            isValidReviewDate(review.date)
        );
        if (validReviews.length !== savedReviews.length) {
            console.warn("Invalid entries in saved Nexora reviews were ignored.");
        }
        return validReviews;
    } catch (error) {
        console.warn("Saved Nexora reviews could not be read; starting with an empty review list.", error);
        return [];
    }
}

function saveReviews() {
    try {
        localStorage.setItem(reviewsStorageKey, JSON.stringify(state.reviews));
        return true;
    } catch (error) {
        console.warn("Nexora reviews could not be saved in this browser.", error);
        return false;
    }
}

function renderReviews() {
    reviewList.replaceChildren();
    if (state.reviews.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-reviews";
        emptyMessage.textContent = "No customer reviews yet. Be the first to share your experience.";
        reviewList.append(emptyMessage);
        return;
    }

    state.reviews.forEach((review) => {
        const card = document.createElement("article");
        card.className = "review-card";

        const cardHeader = document.createElement("div");
        cardHeader.className = "review-card-header";
        const customer = document.createElement("div");
        customer.className = "review-customer";
        const name = document.createElement("h3");
        name.textContent = review.name;
        const date = document.createElement("time");
        date.dateTime = review.date;
        date.textContent = new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
        }).format(new Date(`${review.date}T00:00:00`));
        customer.append(name, date);

        const rating = document.createElement("div");
        rating.className = "review-stars";
        rating.setAttribute("role", "img");
        rating.setAttribute("aria-label", `${review.rating} out of 5 stars`);
        rating.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;
        cardHeader.append(customer, rating);

        const title = document.createElement("h4");
        title.className = "review-card-title";
        title.textContent = review.title;
        const text = document.createElement("p");
        text.className = "review-card-text";
        text.textContent = review.review;
        const source = document.createElement("span");
        source.className = "review-source";
        source.textContent = "Customer-submitted · Not independently verified";

        card.append(cardHeader, title, text, source);
        reviewList.append(card);
    });
}

function loadCart() {
    try {
        const savedCart = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (!Array.isArray(savedCart)) return [];
        const validItems = savedCart.filter((item) =>
            item &&
            Number.isInteger(item.id) &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0 &&
            products.some((product) => product.id === item.id)
        );
        return validItems.reduce((items, item) => {
            const existingItem = items.find((entry) => entry.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                items.push({ id: item.id, quantity: item.quantity });
            }
            return items;
        }, []);
    } catch (error) {
        console.warn("Saved Nexora demo cart could not be read.", error);
        return [];
    }
}

function formatCurrency(value) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    }).format(value);
}

function getProductById(id) {
    return products.find((product) => product.id === id);
}

function saveCart() {
    try {
        localStorage.setItem(storageKey, JSON.stringify(state.cart));
        cartFeedback.textContent = "";
        return true;
    } catch (error) {
        console.error("Nexora demo cart could not be saved.", error);
        cartFeedback.textContent = "Your browser could not save the cart. Check your storage settings; changes may not survive a refresh.";
        return false;
    }
}

function getCartQuantity(productId) {
    const cartItem = state.cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
}

function updateCartCount() {
    const count = state.cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cartCount").textContent = count;
}

function getTotals() {
    const subtotal = state.cart.reduce((sum, item) => {
        const product = getProductById(item.id);
        return product ? sum + product.price * item.quantity : sum;
    }, 0);

    return { subtotal };
}

function renderCart() {
    if (!state.cart.length) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <p>Your cart is empty.</p>
                <span>Add a few fresh essentials to get started.</span>
            </div>
        `;
    } else {
        cartItems.innerHTML = state.cart
            .map((item) => {
                const product = getProductById(item.id);
                if (!product) return "";

                return `
                    <div class="cart-item">
                        <img src="${product.image}" alt="${product.name}" />
                        <div>
                            <h4>${product.name}</h4>
                            <p>${formatCurrency(product.price)} each</p>
                            <div class="cart-item-actions">
                                <div class="item-qty">
                                    <button type="button" data-action="decrease" data-product-id="${product.id}" aria-label="Decrease quantity">−</button>
                                    <span>${item.quantity}</span>
                                    <button type="button" data-action="increase" data-product-id="${product.id}" aria-label="Increase quantity">+</button>
                                </div>
                                <button type="button" class="remove-item" data-action="remove" data-product-id="${product.id}">Remove</button>
                            </div>
                        </div>
                        <strong>${formatCurrency(product.price * item.quantity)}</strong>
                    </div>
                `;
            })
            .join("");
    }

    const totals = getTotals();
    subtotalValue.textContent = formatCurrency(totals.subtotal);
    deliveryValue.textContent = "—";
    discountValue.textContent = "—";
    totalValue.textContent = formatCurrency(totals.subtotal);
    updateCartCount();
    attachImageFallbacks(cartItems);
}

function addToCart(productId) {
    if (!getProductById(productId)) return;

    const existingItem = state.cart.find((item) => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ id: productId, quantity: 1 });
    }

    saveCart();
    renderCart();
    renderProducts();
    cartPanel.classList.add("active");
}

function updateQuantity(productId, change) {
    if (!Number.isInteger(change) || change === 0 || !getProductById(productId)) return;
    let item = state.cart.find((entry) => entry.id === productId);
    if (!item && change > 0) {
        item = { id: productId, quantity: 0 };
        state.cart.push(item);
    }
    if (!item) return;

    item.quantity = Math.max(0, item.quantity + change);

    if (item.quantity <= 0) {
        state.cart = state.cart.filter((entry) => entry.id !== productId);
    }

    saveCart();
    renderCart();
}

function sortProducts(items) {
    const sorted = [...items];
    switch (state.sort) {
        case "price-low":
            sorted.sort((a, b) => a.price - b.price);
            break;
        case "price-high":
            sorted.sort((a, b) => b.price - a.price);
            break;
        default:
            break;
    }
    return sorted;
}

function renderProducts() {
    const loweredSearch = state.search.toLowerCase();
    const filtered = products.filter((product) => {
        const matchesCategory = state.filter === "all" || product.category === state.filter;
        const matchesSearch =
            !loweredSearch ||
            product.name.toLowerCase().includes(loweredSearch) ||
            product.category.toLowerCase().includes(loweredSearch);
        return matchesCategory && matchesSearch;
    });

    const visibleProducts = sortProducts(filtered);

    if (!visibleProducts.length) {
        productGrid.innerHTML = `
            <div class="empty-products">
                <h3>No products match your search.</h3>
                <p>Try another category or keyword.</p>
            </div>
        `;
        return;
    }

    productGrid.innerHTML = visibleProducts
        .map((product) => {
            const quantity = getCartQuantity(product.id);
            return `
                <article class="product-card reveal">
                    <div class="product-image-wrap">
                        <img src="${product.image}" alt="${product.name}" />
                    </div>
                    <div class="product-info">
                        <div class="product-meta">
                            <span>${product.category}</span>
                            <span class="sample-tag">Sample listing</span>
                        </div>
                        <h3>${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price-line">
                            <div class="price-stack">
                                <span class="current-price">${formatCurrency(product.price)}</span>
                            </div>
                        </div>
                        <div class="product-actions">
                            <div class="quantity-picker" aria-label="Change quantity">
                                <button type="button" data-action="decrease" data-product-id="${product.id}" aria-label="Decrease quantity">−</button>
                                <span>${quantity}</span>
                                <button type="button" data-action="increase" data-product-id="${product.id}" aria-label="Increase quantity">+</button>
                            </div>
                            <button type="button" class="add-button" data-action="add" data-product-id="${product.id}">Add to cart</button>
                        </div>
                    </div>
                </article>
            `;
        })
        .join("");

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((element) => {
        element.classList.remove("active");
        requestAnimationFrame(() => element.classList.add("active"));
    });

    attachImageFallbacks(productGrid);
}

function attachImageFallbacks(container) {
    container.querySelectorAll("img").forEach((image) => {
        image.addEventListener("error", handleImageError, { once: true });
    });
}

function handleImageError(event) {
    const image = event.currentTarget;
    if (image.dataset.fallbackApplied === "true") {
        image.hidden = true;
        return;
    }
    image.dataset.fallbackApplied = "true";
    image.addEventListener("error", handleImageError, { once: true });
    image.src = "images/product-photos/catalog-02.jpg";
    image.alt = `${image.alt} (supermarket photo fallback)`;
}

function toggleCartPanel(forceState) {
    const shouldOpen = typeof forceState === "boolean" ? forceState : !cartPanel.classList.contains("active");
    cartPanel.classList.toggle("active", shouldOpen);
}

function openCheckoutModal() {
    if (!state.cart.length) {
        return;
    }

    checkoutModal.classList.add("active");
    checkoutModal.setAttribute("aria-hidden", "false");
}

function closeCheckoutModal() {
    checkoutModal.classList.remove("active");
    checkoutModal.setAttribute("aria-hidden", "true");
    checkoutMessage.textContent = "";
}

function handleCheckoutSubmit(event) {
    event.preventDefault();

    if (!state.cart.length) {
        checkoutMessage.textContent = "Your cart is empty.";
        return;
    }

    checkoutMessage.textContent = "Demo only: no order was placed, no payment was taken, and your cart has been kept.";
}

function handleProductGridClick(event) {
    const button = event.target.closest("button");
    if (!button) return;

    const productId = Number(button.dataset.productId);
    const action = button.dataset.action;
    if (!productId || !action) return;

    if (action === "add") {
        addToCart(productId);
        return;
    }

    if (action === "increase") {
        updateQuantity(productId, 1);
        renderProducts();
        return;
    }

    if (action === "decrease") {
        updateQuantity(productId, -1);
        renderProducts();
    }
}

function handleCartClick(event) {
    const button = event.target.closest("button");
    if (!button) return;

    const productId = Number(button.dataset.productId);
    const action = button.dataset.action;
    if (!action) return;

    if (action === "increase") {
        updateQuantity(productId, 1);
        return;
    }

    if (action === "decrease") {
        updateQuantity(productId, -1);
        return;
    }

    if (action === "remove") {
        state.cart = state.cart.filter((entry) => entry.id !== productId);
        saveCart();
        renderCart();
        renderProducts();
    }
}

searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    mobileSearchInput.value = state.search;
    renderProducts();
});

mobileSearchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    searchInput.value = state.search;
    renderProducts();
});

sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
});

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        categoryButtons.forEach((btn) => {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        });
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
        state.filter = button.dataset.filter;
        renderProducts();
    });
});

productGrid.addEventListener("click", handleProductGridClick);
cartItems.addEventListener("click", handleCartClick);

cartToggle.addEventListener("click", () => toggleCartPanel());
closeCart.addEventListener("click", () => toggleCartPanel(false));
mobileCartTrigger.addEventListener("click", () => {
    setMobileMenuOpen(false);
    toggleCartPanel(true);
});

menuButton.addEventListener("click", () => {
    setMobileMenuOpen(!mobileMenu.classList.contains("active"));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenuOpen(false));
});

document.addEventListener("click", (event) => {
    if (event.target instanceof Node && mobileMenu.classList.contains("active") && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
        setMobileMenuOpen(false);
    }
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1101px)").matches) setMobileMenuOpen(false);
});

checkoutButton.addEventListener("click", openCheckoutModal);
closeModal.addEventListener("click", closeCheckoutModal);
checkoutForm.addEventListener("submit", handleCheckoutSubmit);

window.addEventListener("click", (event) => {
    if (event.target === checkoutModal) {
        closeCheckoutModal();
    }
});

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealElements.forEach((element) => revealObserver.observe(element));

renderProducts();
renderCart();

const demoOrders = {
    "DEMO-NX-1042": {
        status: "Preparing order",
        currentStep: 1,
        steps: ["Order confirmed", "Preparing order", "Ready for dispatch", "Out for delivery", "Delivered"]
    },
    "DEMO-NX-2086": {
        status: "Out for delivery",
        currentStep: 3,
        steps: ["Order confirmed", "Preparing order", "Ready for dispatch", "Out for delivery", "Delivered"]
    }
};

trackingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("orderNumber");
    const orderNumber = input.value.trim().toUpperCase();
    trackingResult.hidden = true;
    trackingMessage.className = "form-message";

    if (!orderNumber) {
        input.setAttribute("aria-invalid", "true");
        trackingMessage.textContent = "Enter an order number to continue.";
        trackingMessage.classList.add("is-error");
        input.focus();
        return;
    }

    if (!/^DEMO-NX-\d{4}$/.test(orderNumber)) {
        input.setAttribute("aria-invalid", "true");
        trackingMessage.textContent = "Use a demo ID such as DEMO-NX-1042.";
        trackingMessage.classList.add("is-error");
        trackingResult.hidden = false;
        trackingResult.innerHTML = `<p class="tracking-error">No real order lookup is connected. Only the sample demo IDs can be previewed.</p>`;
        return;
    }

    input.removeAttribute("aria-invalid");
    const button = trackingForm.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = "Checking…";
    trackingMessage.textContent = "Checking the demonstration records…";
    trackingMessage.classList.add("is-loading");

    window.setTimeout(() => {
        button.disabled = false;
        button.textContent = "Track Order";
        trackingMessage.className = "form-message";
        const order = demoOrders[orderNumber];

        if (!order) {
            trackingMessage.textContent = "No matching demo record was found.";
            trackingMessage.classList.add("is-error");
            trackingResult.hidden = false;
            trackingResult.innerHTML = `<p class="tracking-error">That ID is not in the demo. Try DEMO-NX-1042 or DEMO-NX-2086.</p>`;
            return;
        }

        trackingMessage.textContent = "Sample demonstration record loaded. This is not a live customer order.";
        trackingMessage.classList.add("is-success");
        const steps = order.steps.map((step, index) => `
            <li class="${index <= order.currentStep ? "complete" : ""} ${index === order.currentStep ? "current" : ""}">
                <span aria-hidden="true">${index < order.currentStep ? "✓" : index + 1}</span>
                ${step}
            </li>
        `).join("");
        trackingResult.hidden = false;
        trackingResult.innerHTML = `
            <div class="tracking-result-heading">
                <div><span class="sample-tag">DEMO RECORD</span><h3>${orderNumber}</h3></div>
                <span class="status-pill">${order.status}</span>
            </div>
            <ol class="tracking-timeline">${steps}</ol>
            <p class="tracking-demo-disclaimer">Sample tracking only · no live delivery or customer order data is available.</p>
        `;
    }, 450);
});

document.getElementById("orderNumber").addEventListener("input", (event) => {
    event.currentTarget.removeAttribute("aria-invalid");
    trackingMessage.textContent = "";
    trackingMessage.className = "form-message";
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
    link.addEventListener("click", () => {
        const category = link.dataset.categoryLink;
        const categoryButton = [...categoryButtons].find((button) => button.dataset.filter === category);
        if (!categoryButton) return;
        categoryButtons.forEach((button) => {
            const isActive = button === categoryButton;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
        state.filter = category;
        renderProducts();
    });
});

writeReviewButton.addEventListener("click", () => {
    const shouldOpen = reviewForm.hidden;
    reviewForm.hidden = !shouldOpen;
    writeReviewButton.setAttribute("aria-expanded", String(shouldOpen));
    if (shouldOpen) reviewerName.focus();
});

reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(reviewForm);
    const name = String(formData.get("name") || "").trim();
    const title = String(formData.get("title") || "").trim();
    const text = String(formData.get("review") || "").trim();
    const rating = Number(formData.get("rating"));

    if (!reviewForm.checkValidity() || name.length < 2 || title.length < 3 || text.length < 10 || !Number.isInteger(rating) || rating < 1 || rating > 5) {
        reviewForm.reportValidity();
        reviewFeedback.textContent = "Please enter your name, choose a 1–5 star rating, and complete the title and review (at least 10 characters).";
        reviewFeedback.className = "form-message is-error review-feedback";
        return;
    }

    state.reviews.push({
        name,
        rating,
        title,
        review: text,
        date: getLocalDateString()
    });
    renderReviews();
    const saved = saveReviews();
    reviewForm.reset();
    reviewForm.querySelectorAll(".review-rating-input label").forEach((label) => label.classList.remove("is-selected"));
    reviewForm.hidden = true;
    writeReviewButton.setAttribute("aria-expanded", "false");
    writeReviewButton.focus();
    reviewFeedback.textContent = saved
        ? "Thank you for sharing your review. It is saved only in this browser and is not shared with other customers."
        : "Your review is displayed for this visit, but this browser could not save it. It has not been sent to Nexora.";
    reviewFeedback.className = `form-message ${saved ? "is-success" : "is-error"} review-feedback`;
});

reviewForm.querySelectorAll('input[name="rating"]').forEach((input) => {
    input.addEventListener("change", () => {
        const selectedRating = Number(input.value);
        reviewForm.querySelectorAll(".review-rating-input label").forEach((label, index) => {
            label.classList.toggle("is-selected", index < selectedRating);
        });
    });
});

reviewForm.addEventListener("input", () => {
    if (!reviewFeedback.textContent) return;
    reviewFeedback.textContent = "";
    reviewFeedback.className = "form-message review-feedback";
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        contactFeedback.textContent = "Please complete each field with valid information.";
        contactFeedback.className = "form-message is-error";
        return;
    }

    const formData = new FormData(contactForm);
    state.preparedContactMessage = [
        `Name: ${formData.get("name")}`,
        `Email: ${formData.get("email")}`,
        `Subject: ${formData.get("subject")}`,
        "",
        String(formData.get("message"))
    ].join("\n");
    contactFeedback.textContent = "Thank you. Your message is ready here, but it has not been sent because no contact service is connected.";
    contactFeedback.className = "form-message is-success";
    copyContactMessage.hidden = false;
});

contactForm.addEventListener("input", () => {
    if (!contactFeedback.textContent) return;
    contactFeedback.textContent = "";
    contactFeedback.className = "form-message";
});

copyContactMessage.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(state.preparedContactMessage);
        contactFeedback.textContent = "Message copied. Paste it into your email or preferred messaging app.";
        contactFeedback.className = "form-message is-success";
    } catch (error) {
        contactFeedback.textContent = "Clipboard access was blocked. Select and copy your form details manually.";
        contactFeedback.className = "form-message is-error";
        console.warn("Could not copy the prepared Nexora contact message.", error);
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        toggleCartPanel(false);
        closeCheckoutModal();
        setMobileMenuOpen(false);
    }
});

renderReviews();
setMobileMenuOpen(false);