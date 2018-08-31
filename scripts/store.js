const store = (function() {
  const addBookmark = function(item) {
    this.items.push(item);
  };
  // expanded: null,
  // filter: null,
  // addBookmark: true

  return {
    items: [],
    addBookmark
  };
})();
