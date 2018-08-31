const bookmarks = function() {
  function bindEventListeners() {
    handleCreateBookmarkClicked();
    handleAddBookmarkSubmit();
  }

  //to-do
  function handleCreateBookmarkClicked() {
    $('#js-create-bookmark').on('click', () => {
      render();
    });
  }

  $.fn.extend({
    serializeJSON: function() {
      const formData = new FormData(this[0]);
      const obj = {};
      formData.forEach((val, name) => (obj[name] = val));
      return JSON.stringify(obj);
    }
  });

  function handleAddBookmarkSubmit() {
    $('#add-item-form').on('submit', function(event) {
      event.preventDefault();

      const bookmarkData = $(event.target).serializeJSON();

      api.postBookmark(
        bookmarkData,
        newBookmark => {
          store.addBookmark(newBookmark);
          render();
        },
        error => {
          console.log(error);
          render();
        }
      );
    });
  }

  // to-do
  function render() {
    return null;
  }

  return {
    bindEventListeners,
    render
  };
};
