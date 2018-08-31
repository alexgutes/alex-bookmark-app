const store = (function() {
  const addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };
  // expanded: null,
  // filter: null,
  // addBookmark: true
  const findByID = function(id) {
    return this.bookmarks.find(item => item.id === id);
  };

  /* 
  store = {
    bookmarks [
      {
        title:
        url:
        description:
        expanded:
        id:
        rating:  
    }],

    functions,
    filter //filter by rating 0-5 
    addingStatus // if adding bookmark
    }
    //filter bookmarks by rating (rating)
    // filter bookmarks array in store
    //toggle expanded status(bookmark id)
    // set rating filter (rating)
    
    */
  //set adding status (true false)
  function setAddingStatus(bool) {
    this.addingBookmark = bool;
  }

  // deleting bookmark (id)
  function deleteBookmark(bookmarkID) {
    this.bookmarks = this.bookmarks.filter(
      bookmark => bookmark.id !== bookmarkID
    );
  }

  // updating rating filters (rating)
  function updateRating(rating) {}

  function filterBookmarks() {
    //call filter store.filter
    //for every bookmark filter if rating greater than this.filter
  }

  function toggleExpandedStatus(id) {
    // set expanded status when clicked
  }

  function setRatingFilter(rating) {
    // filter page results by rating
  }

  return {
    bookmarks: [],
    addBookmark,
    filter: 0,
    addingStatus: false,
    findByID,
    setAddingStatus,
    deleteBookmark,
    updateRating
  };
})();
