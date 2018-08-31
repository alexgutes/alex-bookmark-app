console.log('index.js loaded');

$(function() {
  console.log('DOM ready');
  bookmarks.bindEventListeners();
  bookmarks.render();

  api.getBookmarks(items => {
    items.forEach(item => store.addBookmark(item));
    bookmarks.render();
  });
});
