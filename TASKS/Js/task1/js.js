const img = document.querySelector('img');
 async function fetchImg(){
        const response = await fetch(
          "https://api.giphy.com/v1/gifs/search?api_key=bvbDKzvAAyKw5jGCAJLm6LqVLN80TnoA&q=space&limit=1",
        );
        const jsonResponse = await response.json();
        img.src = jsonResponse.data[0].images.original.url;
    };
fetchImg();