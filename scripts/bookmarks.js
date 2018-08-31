const bookmarks = (function() {
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
    const bookmarks = store.bookmarks;

    $('ul.js-bookmark-list').html(bookmarks.map(generateListItemTemplate));
  }
  //function for loop to determine stars
  // take in rating run for loop
  //function generatestars(rating)
  // second generates one star
  function generateListItemTemplate(bookmark) {
    //buttons for visiting link with a href
    //button for deleting
    const htmlTemplate = `
    <li class="bookmark-item" data-item-id=${bookmark.id}>
    <h2>${bookmark.title}</h2>
    <p>${bookmark.url}</p>
    <p>${bookmark.desc}</p>
    <span>${generateStars(bookmark.rating)}</span>
    <button id="visit">Visit Site</button>
    <button id="delete">Delete</button>
    </li>`;

    return htmlTemplate;
  }

  function generateStars(rating) {
    const starsArray = [];
    for (let i = 0; i < rating; i++) {
      generateSingleStar(starsArray);
    }
    return starsArray.join(' ');
  }

  function generateSingleStar(starsArray) {
    starsArray.push('&#9733;');
  }

  //function to handle expanded view
  // put listener on li

  //function to retrieve bookmark.id from li
  // use to expand, modify, delete

  //user input, update store, render

  return {
    bindEventListeners,
    render,
    //temporarily expose
    generateStars
  };
})();
