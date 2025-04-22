const products = [
        { id: 1, name: 'Notebook', price: 50.00, image: 'images/notebook.jpg', description: 'A standard notebook for daily use.' },
        { id: 2, name: 'Pen', price: 10.00, image: 'images/pen.jpg', description: 'A smooth writing pen.' },
        { id: 3, name: 'Pencil', price: 5.00, image: 'images/pencil.jpg', description: 'A classic wooden pencil.' },
        { id: 4, name: 'Eraser', price: 3.00, image: 'images/eraser.jpg', description: 'Perfect for erasing mistakes.' },
        { id: 5, name: 'Highlighter', price: 20.00, image: 'images/highlighter.jpg', description: 'Bright neon highlighters.' },
        { id: 6, name: 'Marker', price: 25.00, image: 'images/marker.jpg', description: 'Permanent marker for all surfaces.' },
        { id: 7, name: 'Sticky Notes', price: 25.00, image: 'images/sticky_notes.jpg', description: 'Bright sticky notes for reminders.' },
        { id: 8, name: 'Paper Clips', price: 5.00, image: 'images/paper_clips.jpg', description: 'Standard paper clips for organization.' },
        { id: 9, name: 'Stapler', price: 70.00, image: 'images/stapler.jpg', description: 'Heavy-duty stapler for binding papers.' },
        { id: 10, name: 'Notebook Cover', price: 15.00, image: 'images/notebook_cover.jpg', description: 'Protective cover for notebooks.' },
        { id: 11, name: 'Ruler', price: 10.00, image: 'images/ruler.jpg', description: '30cm plastic ruler.' },
        { id: 12, name: 'Glue Stick', price: 10.00, image: 'images/glue_stick.jpg', description: 'Easy-to-use glue stick.' },
        { id: 13, name: 'Binder', price: 40.00, image: 'images/binder.jpg', description: 'Durable binder for documents.' },
        { id: 14, name: 'Scissors', price: 30.00, image: 'images/scissors.jpg', description: 'Sharp scissors for cutting.' },
        { id: 15, name: 'Whiteboard Marker', price: 40.00, image: 'images/whiteboard_marker.jpg', description: 'Dry erase marker for whiteboards.' },
        { id: 16, name: 'Index Cards', price: 20.00, image: 'images/index_cards.jpg', description: 'Perfect for notes and flashcards.' },
        { id: 17, name: 'Folder', price: 15.00, image: 'images/folder.jpg', description: 'Plastic folder for documents.' },
        { id: 18, name: 'Sketchbook', price: 50.00, image: 'images/sketchbook.jpg', description: 'Blank pages for sketches.' },
        { id: 19, name: 'Calculator', price: 200.00, image: 'images/calculator.jpg', description: 'Basic calculator for math.' },
        { id: 20, name: 'USB Flash Drive', price: 240.00, image: 'images/usb_flash_drive.jpg', description: '16GB USB flash drive.' },
      ];
      
  let cart = [];
  
  function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product fade-in';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function filterProducts() {
    const search = document.getElementById('search-bar').value.toLowerCase();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.filter(p => p.name.toLowerCase().includes(search)).forEach(product => {
      const div = document.createElement('div');
      div.className = 'product fade-in';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - ₹${item.price.toFixed(2)}`;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => {
        cart.splice(index, 1);
        updateCart();
      };
  
      li.appendChild(removeBtn);
      cartItems.appendChild(li);
      total += item.price;
    });
  
    document.getElementById('total-price').textContent = `Total: ₹${total.toFixed(2)}`;
  }
  
  function placeOrder() {
  if (cart.length === 0) return alert('Your cart is empty!');

  const orderItems = cart.map(item => item.name); // just send product names

  fetch('http://192.168.137.205:5000/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ order: orderItems })
  })
  .then(response => response.json())
  .then(data => {
    console.log('✅ Order response:', data);
    alert('Order placed successfully! 🎉');
    cart = [];
    updateCart();
  })
  .catch(error => {
    console.error('❌ Error placing order:', error);
    alert('Failed to place order.');
  });
}
// Optional: dark mode toggle
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const toggleBtn = document.getElementById('toggle-theme');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
  
  document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
  
  displayProducts();
  
