const Api = function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alex';

  function getBookmarks(callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  }

  function postBookmark(bookmarkObj, callback, errorCall) {
    const bookmarkData = JSON.stringify(bookmarkObj);

    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: bookmarkData,
      success: callback,
      error: errorCall
    });
  }

  return {
    getBookmarks,
    postBookmark
  };
};
