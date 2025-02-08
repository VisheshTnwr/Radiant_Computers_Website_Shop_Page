// Product Data Structure
const products = {
    software: [
        {
            id: 's1',
            name: 'Microsoft Office 365',
            image: '/images/Microsoft Logo.png',
            details: [
                'Complete suite of productivity apps',
                '1TB OneDrive storage per user',
                'Real-time collaboration features',
                'Exchange email hosting',
                'Teams communication platform'
            ],
            price: 99.99
        },
        {
            id: 's2',
            name: 'Tally Prime',
            image: '/images/Tallly_Icon-removebg-preview.png',
            details: [
                'Full access to Photoshop, Illustrator, and more',
                'Cloud storage and asset syncing',
                'Adobe Fonts and Adobe Stock integration',
                'Regular updates and new features',
                'Cross-platform compatibility'
            ],
            price: 52.99
        },
        {
            id: 's3',
            name: 'Quick Heal',
            image: '/images/Quick Heal Logo.png',
            details: [
                '2D and 3D CAD design tools',
                'Industry-specific toolsets',
                'Cloud storage integration',
                'Mobile app access',
                'Automated drawing tools'
            ],
            price: 1799.99
        },
        {
            id: 's4',
            name: 'Seqrite Endpoint Security',
            image: '/images/seqrite_Logo-removebg-preview.png',
            details: [
                'Advanced security features',
                'Business management tools',
                'Remote desktop access',
                'BitLocker device encryption',
                'Windows Update for Business'
            ],
            price: 199.99
        },
        {
            id: 's5',
            name: 'Windows 11',
            image: '/images/Windows_11_logo.svg.png',
            details: [
                'Real-time threat protection',
                'Secure VPN',
                'Password manager',
                'Cloud backup',
                'Parental controls'
            ],
            price: 89.99
        }
    ],
    laptops: [
        {
            id: 'l1',
            name: 'Lenovo V14',
            image: '/images/Lenovo V 14 FrontSide No Back.png',
            details: [
                'Intel Core Ultra 5 135U processor',
                '16 GB RAM and 512 GB SSD storage',
                '12-hour battery life',
                '1920×1200 IPS display',
                'Robust build with multiple ports including USB-A and USB-C'
            ],
            price: 1299.99
        },
        {
            id: 'l2',
            name: 'HP 240 G8',
            image: '/images/HP240-G8-removebg-preview.png',
            details: [
                'Intel Core Ultra 5 135U processor',
                '16 GB RAM and 512 GB SSD storage',
                '15.4-hour battery life',
                '1920×1200 IPS touchscreen display',
                'Enhanced security features like fingerprint sensor and facial recognition'
            ],
            price: 1499.99
        },
        {
            id: 'l3',
            name: 'Apple Macbook Pro',
            image: '/images/Macbook-removebg-preview.png',
            details: [
                'Intel Meteor Lake processors',
                '2.8K OLED touch display',
                'Up to 11-hour battery life',
                'Convertible 2-in-1 design with pen support',
                'Lightweight aluminum chassis with multiple ports including USB-A and USB-C/Thunderbolt 4'
            ],
            price: 1399.99
        },
        {
            id: 'l4',
            name: 'Dell Latitude 3450',
            image: '/images/Latitude_3450-removebg-preview.png',
            details: [
                'Apple M3 Max chip for high performance',
                '16-inch Retina display',
                'All-day battery life',
                'Premium build quality with sleek design',
                'Advanced security features including Touch ID and secure boot'
            ],
            price: 2499.99
        },
        {
            id: 'l5',
            name: 'Lenovo V 15 Gen 3',
            image: '/images/lenovo-v15-gen-4-core-i5-13th-gen-fhd-laptop-3-400x280h-removebg-preview.png',
            details: [
                'Latest Intel Core i7 processor',
                '16 GB RAM and 1 TB SSD storage',
                '13.4-inch 4K UHD+ display',
                'Slim and lightweight design at 2.8 pounds',
                'Long battery life with multiple connectivity options including USB-C and Thunderbolt 4'
            ],
            price: 1599.99
        }
    ],
    desktop: [
        {
            id: 'd1',
            name: 'HP Envy Move',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'Portable all-in-one design',
                'Intel Core i5-1355U processor',
                '16GB RAM and up to 1TB storage',
                'Touch-enabled display',
                'Built-in battery for mobility'
            ],
            price: 750.00
        },
        {
            id: 'd2',
            name: 'Lenovo ThinkStation P620',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'AMD Ryzen Threadripper Pro 3995WX processor',
                'NVIDIA Quadro RTX 8000 48GB GPU',
                '128GB octa-channel DDR4-3200 ECC RAM',
                '1TB NVMe SSD storage',
                'Ideal for resource-intensive tasks'
            ],
            price: 40000.00
        },
        {
            id: 'd3',
            name: 'HP OmniDesk',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'Compact and elegant design with faux-wood front panel',
                'Compatible with Intel Core Ultra 5 and Ultra 7 200 Series AI processors',
                'Options for 13th and 14th Gen Intel Core or AMD Ryzen 8000-series G-class CPUs',
                'Starting price offers affordability',
                'Ideal for productivity tasks'
            ],
            price: 529.99
        },
        {
            id: 'd4',
            name: 'Origin PC Arachnid',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'Custom-built high-performance desktop',
                'Unique chassis design with separate CPU and GPU zones',
                'Supports high-end components for content creation and gaming',
                'Advanced liquid cooling system',
                'Premium build quality'
            ],
            price: 7000.00
        },
        {
            id: 'd5',
            name: 'Apple Mac Mini (2024)',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'Compact design with a smaller footprint',
                'Multiple USB-C ports, including front-facing',
                'HDMI port available',
                'Elimination of USB-A ports',
                'Ideal for home theaters and versatile setups'
            ],
            price: 999.99
        }
    ],
    networking: [
        {
            id: 'n1',
            name: 'Cisco Catalyst 9300 Series Switches',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'Modular access switches',
                'Up to 1TB stacking bandwidth',
                'Advanced security features',
                'Support for IoT convergence',
                'Cloud-managed with Cisco DNA Center'
            ],
            price: 4500.00
        },
        {
            id: 'n2',
            name: 'Ubiquiti UniFi Dream Machine Pro',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'All-in-one network appliance',
                'Enterprise-class firewall',
                '10G SFP+ ports',
                'Integrated security gateway',
                'UniFi Network Controller'
            ],
            price: 379.00
        },
        {
            id: 'n3',
            name: 'Netgear Nighthawk AX12',
            image: 'https://via.placeholder.com/300x200',
            details: [
                '12-stream Wi-Fi 6 router',
                'Speeds up to 6 Gbps',
                '1.8GHz quad-core processor',
                '8 high-performance antennas',
                '5 Gigabit Ethernet ports'
            ],
            price: 499.99
        },
        {
            id: 'n4',
            name: 'Juniper Networks EX4300 Series',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'Scalable enterprise switches',
                'Virtual Chassis technology',
                'Layer 2 and Layer 3 features',
                'Energy-efficient design',
                'Advanced security capabilities'
            ],
            price: 3200.00
        },
        {
            id: 'n5',
            name: 'Arista 7050X Series Switches',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'High-density 10/40GbE ports',
                'Low-latency performance',
                'Advanced monitoring features',
                'Flexible forwarding tables',
                'Energy-efficient design'
            ],
            price: 6000.00
        }
    ],
    videoconf: [
        {
            id: 'vc1',
            name: 'IPEVO TOTEM 360 Immersive Conference Camera + Speakerphone',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'AI-powered 360-degree camera and speakerphone',
                'Four cameras, four microphones, and one speaker',
                'Four distinct video modes: presentation, close-up, split-screen, and panoramic',
                'Plug-and-play functionality with USB and HDMI connectors',
                'Ideal for medium to large conference rooms'
            ],
            price: 799.99
        },
        {
            id: 'vc2',
            name: 'Logitech BCC950 Conference Camera',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'HD camera with pan, tilt, and zoom capabilities',
                'Integrated speakerphone for clear audio',
                'Adjustable stem to raise camera to eye level',
                'Acoustic properties to reduce ambient noise and echoes',
                'Suitable for small group video conferencing'
            ],
            price: 299.99
        },
        {
            id: 'vc3',
            name: 'Meeting Owl 3',
            image: 'https://via.placeholder.com/300x200',
            details: [
                '360-degree audio and video recording',
                'Automatic speaker highlighting',
                'Compatible with major platforms like Zoom and Microsoft Teams',
                'Powered by Owl Intelligence System™ for swift speaker identification',
                'Expandable for larger rooms'
            ],
            price: 999.99
        },
        {
            id: 'vc4',
            name: 'Plantronics Poly Studio P15',
            image: 'https://via.placeholder.com/300x200',
            details: [
                '4K video resolution with automatic camera framing',
                'Integrated privacy shutter',
                'Powerful integrated speaker with acoustic suspension',
                'Advanced multi-microphone array with NoiseBlockAI and Acoustic Fence',
                'Compatible with PC and Mac; works with Zoom, Microsoft Teams, and other platforms'
            ],
            price: 189.99
        },
        {
            id: 'vc5',
            name: 'Jabra PanaCast 50 Video Bar System',
            image: 'https://via.placeholder.com/300x200',
            details: [
                'AI-enabled video and audio streams',
                '180-degree field of view',
                'Eight professional-grade microphones with voice detection',
                'Four stereo speakers in a zero-vibration stereo setup',
                'Integrated whiteboard content camera stream'
            ],
            price: 1149.00
        }
    ]
    









    
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.querySelector('.close-cart');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close-button');
    const contactForm = document.getElementById('contactForm');
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutButton = document.querySelector('.checkout-button');

    // Cart State
    let cart = [];

    // Render all products on page load
    function renderProducts() {
        Object.entries(products).forEach(([category, items]) => {
            const section = document.getElementById(category);
            if (!section) return;

            const grid = section.querySelector('.product-grid');
            grid.innerHTML = items.map(product => `
                <div class="product-card" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">₹${product.price.toFixed(2)}</div>
                        <ul class="product-details">
                            ${product.details.map(detail => `
                                <li>${detail}</li>
                            `).join('')}
                        </ul>
                        <button class="buy-button" data-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
        });
    }

    // Cart Functions
    function updateCart() {
        // Update cart count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Update cart items display
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-btn" data-id="${item.id}">×</button>
                </div>
            </div>
        `).join('');

        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `₹${total.toFixed(2)}`;
    }

    function addToCart(productId) {
        let product;
        // Find product in all categories
        for (const categoryProducts of Object.values(products)) {
            product = categoryProducts.find(p => p.id === productId);
            if (product) break;
        }

        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
        showNotification('Product added to cart');
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }

    function updateQuantity(productId, delta) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                updateCart();
            }
        }
    }

    // UI Functions
    function toggleCart() {
        cartSidebar.classList.toggle('active');
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
    
        // Remove notification after animation
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    

    // Event Listeners
    function setupEventListeners() {
        // Cart toggle
        cartIcon.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);

        // Close contact form when clicking the close button
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });


        // Buy buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('buy-button')) {
                const productId = e.target.dataset.id;
                addToCart(productId);
            }
        });

        // Cart item controls
        cartItems.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            if (!productId) return;

            if (e.target.classList.contains('plus')) {
                updateQuantity(productId, 1);
            } else if (e.target.classList.contains('minus')) {
                updateQuantity(productId, -1);
            } else if (e.target.classList.contains('remove-btn')) {
                removeFromCart(productId);
            }
        });

        // Overlay click
        overlay.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });

        // Contact form
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            console.log('Form submitted:', Object.fromEntries(formData));
            
            // Clear cart and close modal
            cart = [];
            updateCart();
            modal.style.display = 'none';
            overlay.style.display = 'none';
            
            showNotification('Thank you for your inquiry!');
        });

        // Category navigation
        document.querySelectorAll('.categories a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                document.getElementById(targetId).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        });

        // Checkout button
        checkoutButton.addEventListener('click', () => {
            modal.style.display = 'block';
            overlay.style.display = 'block';
            cartSidebar.classList.remove('active');

            // Pre-fill form with cart items
            const details = cart.map(item => 
                `${item.name} (Quantity: ${item.quantity})`
            ).join('\n');
            document.getElementById('details').value = details;
        });
    }

    // Initialize page
    renderProducts();
    setupEventListeners();
});