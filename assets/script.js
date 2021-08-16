const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

const randomQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => {
       quote.innerHTML = data.content;
       author.innerHTML = data.author
      });
     
      fetch('https://picsum.photos/0/0')
      .then((res) =>{
          document.querySelector('.backImg').innerHTML =`<img src=${res.url} />`
      })
};

quote.addEventListener('click', () => randomQuote ());

randomQuote();