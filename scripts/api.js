/* global $, api, bookmarks, store */
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alex';

  function getBookmarks(callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  }

  function postBookmark(bookmarkObj, callback, errorCall) {
    // const bookmarkData = JSON.stringify(bookmarkObj);

    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: bookmarkObj,
      success: callback,
      error: errorCall
    });
  }

  function updateBookmark(id, updateObj, callback) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateObj),
      success: callback
    });
  }

  function deleteBookmark(id, callback, errorCall) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      success: callback,
      error: errorCall
    });
  }

  return {
    getBookmarks,
    postBookmark,
    deleteBookmark,
    updateBookmark
  };
})();
