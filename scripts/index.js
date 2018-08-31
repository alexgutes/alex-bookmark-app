console.log('index.js loaded');

$(document).ready(function() {
  console.log('DOM ready');
  bookmarks.bindEventListeners();
  bookmarks.render();

  const newObj = {
    title: 'facebook',
    url: 'http://facebook.com',
    rating: 1,
    desc: 'social media'
  };
  api.postBookmark(
    newObj,
    response => console.log(response),
    error => console.log(error)
  );

  api.getBookmarks(items => {
    items.forEach(item => store.addBookmark(item));
    bookmarks.render();
  });
});
