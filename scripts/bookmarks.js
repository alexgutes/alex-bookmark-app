/* global $, api, bookmarks, store */

const bookmarks = (function() {
  function bindEventListeners() {
    handleCreateBookmarkClicked();
    handleAddBookmarkSubmit();
    handleDeleteBookmark();
    handleExpandedView();
    handleFilterChange();
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
      console.log(bookmarkData);

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
    let bookmarks = store.bookmarks;
    if (store.filter > 0) {
      bookmarks = store.filterBookmarksArray();
    }
    // const filteredArray = store.filterBookmarksArray();

    $('ul.js-bookmark-list').html(bookmarks.map(generateListItemTemplate));
  }
  //function for loop to determine stars
  // take in rating run for loop
  //function generatestars(rating)
  // second generates one star
  function generateListItemTemplate(bookmark) {
    //buttons for visiting link with a href
    //button for deleting
    let expanded = bookmark.expanded;
    if (expanded) {
      expanded = '';
    } else {
      expanded = 'hidden';
    }
    const htmlTemplate = `
    <li class="bookmark-item 
    js-bookmark-item" data-item-id="${bookmark.id}">
    <h2>${bookmark.title}</h2>
    <span>${generateStars(bookmark.rating)}</span>
    <div class="${expanded}" >
    <p>${bookmark.url}</p>
    <p>${bookmark.desc}</p>
    <button id="visit">Visit Site</button>
    <button id="delete">Delete</button>
    </div>
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

  function handleFilterChange() {
    $('#js-rating').change(event => {
      console.log('select clicked');
      const selectedValue = $('#js-rating').val();
      store.updateRating(selectedValue);
      render();
    });
  }
  //function to handle expanded view
  // put listener on li
  function handleExpandedView() {
    $('.js-bookmark-list').on('click', '.js-bookmark-item', event => {
      console.log('li clicked');
      const bookmarkID = getDataID(event.currentTarget);
      store.toggleExpandedStatus(bookmarkID);
      render();
    });
  }

  //function to retrieve bookmark.id from li
  // use to expand, modify, delete
  function getDataID(bookmark) {
    console.log(bookmark);

    return $(bookmark)
      .closest('.js-bookmark-item')
      .data('item-id');
  }
  function handleDeleteBookmark() {
    $('.js-bookmark-list').on('click', '#delete', event => {
      const bookmarkID = getDataID(event.currentTarget);
      console.log('delete clicked');
      console.log(bookmarkID);
      api.deleteBookmark(
        bookmarkID,
        () => {
          store.deleteBookmark(bookmarkID);

          render();
        },
        error => console.log('error')
      );
    });
  }
  //user input, update store, render

  return {
    bindEventListeners,
    render,
    //temporarily expose
    generateStars,
    getDataID
  };
})();
