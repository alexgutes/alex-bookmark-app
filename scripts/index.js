console.log('index.js loaded');

const STORE = {
  items: [
    {
      title: 'How Facebook Has Flattened Human Communication',
      stars: 3,
      link:
        'https://medium.com/s/story/how-facebook-has-flattened-human-communication-c1525a15e9aa',
      content: 'Interesting article on Medium'
    },
    {
      title: 'Samsung’s first 8K TV goes on sale next month',
      stars: 5,
      link:
        'https://www.theverge.com/circuitbreaker/2018/8/29/17798782/samsung-8k-tv-announced-release-date-ifa-2018',
      content: 'Cool news story from The Verge'
    },
    {
      title: 'Coming in 2018: Apple\'s Three iPhone Lineup',
      stars: 2,
      link: 'https://www.macrumors.com/roundup/2018-iphones/',
      content: 'Page on Mac Rumors about new iPhones'
    }
  ],
  expanded: null,
  filter: null,
  addBookmark: true
};

const render = function() {
  const htmlItems = STORE.items.map(item => renderItem(item));
  $('ul').html(htmlItems);
};

const renderItem = function(item) {
  let numberStars = '';
  for (let i = 0; i < item.stars; i++) {
    numberStars += '&#9733;';
  }
  return `<li>
  <h2>${item.title}</h2>
  <span>${numberStars}</span>
</li>`;
};

render();
