let lastScrollTop = 0;
let header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.top = "-100px";
    } else {
        // Scroll up
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

function changeBackground(index) {
    currentIndex = index;
    document.getElementById('index').style.backgroundImage = `url(${images[index]})`;
    updateActiveButton(index);
}

function updateActiveButton(index) {
    const buttons = document.querySelectorAll('.image-buttons button');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[index].classList.add('active');
}

function nextBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('index').style.backgroundImage = `url(${images[currentIndex]})`;
    updateActiveButton(currentIndex);
}

// Change background every 5 seconds
setInterval(nextBackground, 5000);

// Initial background image
changeBackground(currentIndex);

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var events = document.querySelectorAll('.event');
  events.forEach(function(event) {
      if (isInViewport(event)) {
          event.classList.add('fade-in-up');
      } else {
          event.classList.remove('fade-in-up');
      }
  });
}

// Listen for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

document.addEventListener("DOMContentLoaded", function() {
  const articles = document.querySelectorAll(".article");

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      articles.forEach(article => {
          if (isInViewport(article)) {
              article.classList.add("fade-in-left");
          } else {
              article.classList.remove("fade-in-left");
          }
      });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check initially on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var readMoreLink = document.querySelector('.read-more');
    var aboutContent = document.querySelector('.about-content');

    // Toggle class to expand/collapse additional content when "Read More" link is clicked
    readMoreLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        aboutContent.classList.toggle('expand');
        readMoreLink.textContent = aboutContent.classList.contains('expand') ? 'Read Less' : 'Read More';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var missionVisionText = document.querySelector('.mission-vision-text');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleAnimation() {
        if (isInViewport(missionVisionText)) {
            missionVisionText.classList.add('animate');
        }
    }

    window.addEventListener('scroll', function() {
        handleAnimation();
    });

    handleAnimation();
});

document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
  
    readMoreLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const longText = this.previousElementSibling;
        longText.classList.toggle('show');
        if (longText.classList.contains('show')) {
          this.textContent = 'Read Less';
        } else {
          this.textContent = 'Read More';
        }
      });
    });
  });
  
 // Sample data for books
const books = [
    { name: "Book 1", price: 10 },
    { name: "Book 2", price: 15 },
    { name: "Book 3", price: 20 }
  ];
  
  // Function to display books in the Children's Book section
  function displayBooks() {
    const childrenBooksSection = document.getElementById('children-books');
    childrenBooksSection.innerHTML = ''; // Clear previous content
  
    books.forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
  
      // Add book image
      const bookImg = document.createElement('img');
      bookImg.src = 'book-image.jpg'; // Replace with actual image source
      bookDiv.appendChild(bookImg);
  
      // Add book info
      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book-info');
  
      const bookName = document.createElement('h3');
      bookName.textContent = book.name;
      bookInfo.appendChild(bookName);
  
      const bookPrice = document.createElement('p');
      bookPrice.classList.add('price');
      bookPrice.textContent = `$${book.price}`;
      bookInfo.appendChild(bookPrice);
  
      const addToCartBtn = document.createElement('button');
      addToCartBtn.classList.add('add-to-cart');
      addToCartBtn.textContent = 'Add to Cart';
      addToCartBtn.addEventListener('click', () => addToCart(book));
      bookInfo.appendChild(addToCartBtn);
  
      bookDiv.appendChild(bookInfo);
  
      childrenBooksSection.appendChild(bookDiv);
    });
  }
  
  // Function to add book to cart
  function addToCart(book) {
    // Add book to cart logic
    // You can store the cart items in an array and update the total price
  }
 // Function to display cart items and total price on the cart page
function displayCart() {
    const cartItemsDiv = document.querySelector('.cart-items');
    cartItemsDiv.innerHTML = ''; // Clear previous content
  
    let totalPrice = 0;
  
    // Iterate through cart items and display them
    // You can retrieve cart items from local storage or a global variable
    // For this example, I'll use a mock array of cart items
    const cartItems = [
      { name: "Book 1", price: 10 },
      { name: "Book 2", price: 15 }
    ];
  
    cartItems.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.textContent = `${item.name} - $${item.price}`;
      cartItemsDiv.appendChild(cartItemDiv);
      totalPrice += item.price;
    });
  
    // Display total price
    const totalDiv = document.querySelector('.total');
    totalDiv.innerHTML = `Total Price: $${totalPrice}`;
  
    // Display payment method
    const paymentMethodDiv = document.createElement('div');
    paymentMethodDiv.textContent = `Payment Method: PAY BILL, BUSINESS NUMBER 55555, ACCOUNT NUMBER 12345678`;
    cartItemsDiv.appendChild(paymentMethodDiv);
  }
   

  // Set the date of the upcoming event (replace "YYYY/MM/DD HH:MM:SS" with the actual date and time)
const eventDate = new Date("YYYY/MM/DD HH:MM:SS").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time until the event
  const distance = eventDate - now;

  // Calculate hours, minutes, and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the remaining time in the countdown element
  document.getElementById("countdown-timer").innerText = hours + ":" + minutes + ":" + seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown-timer").innerText = "EXPIRED";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  // Toggle the visibility of the navigation links when menu toggle button is clicked
  menuToggle.addEventListener('click', function() {
    const isExpanded = mainNav.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });
});

