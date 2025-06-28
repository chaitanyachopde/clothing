// Closure-based cart module
const Cart = (function() {
  let count = 0;

  return {
    add: function() {
      count++;
      document.getElementById("cartCount").textContent = count;
    },
    getCount: function() {
      return count;
    }
  };
})();

// Event listener for all "Add to Cart" buttons
document.querySelectorAll(".addCartBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    Cart.add();
  });
});
