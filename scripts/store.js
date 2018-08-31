const store = (function() {
  const addBookmark = function(bookmark) {
    // set expanded to false
    const ifExpanded = {
      expanded: false
    };
    this.bookmarks.push(Object.assign(bookmark, ifExpanded));
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
  function updateRating(rating) {
    this.filter = parseInt(rating);
  }

  function filterBookmarksArray() {
    console.log(this.filter);
    return this.bookmarks.filter(bookmark => {
      console.log(bookmark.rating);
      return bookmark.rating >= this.filter;
    });
  }

  // set expanded status when clicked
  function toggleExpandedStatus(bookmarkID) {
    const bookmarkToggle = this.bookmarks.find(
      bookmark => bookmark.id === bookmarkID
    );
    bookmarkToggle.expanded = !bookmarkToggle.expanded;
  }

  return {
    bookmarks: [],
    addBookmark,
    addingStatus: false,
    findByID,
    setAddingStatus,
    deleteBookmark,
    updateRating,
    toggleExpandedStatus,
    filterBookmarksArray,
    filter: 0
  };
})();
