const apiKey = "IDOrAA6jeXPWxsVUV24Ucc2MbB0AV520";
const div = document.getElementById("gif-images");
document.addEventListener("DOMContentLoaded", giphySearch);

    function giphySearch() {
        document.getElementById("btnSearch").addEventListener("click", e => {
            e.preventDefault();
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=`;
            let str = document.getElementById('search').value.trim();
            url = url.concat(str);
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(content => {
                    console.log(content.data);
                    let fig = document.createElement('figure');
                    let img = document.createElement('img');
                    img.src = content.data[0].images.original.url;
                    fig.appendChild(img);
                    div.insertAdjacentElement('afterbegin', fig);
                    document.querySelector('#search').value = "";
                })
                .catch(err => {
                    console.log(err)
                })
            })


        


        // const userInput = document.getElementsByClassName("giphy").value;
        // console.log(userInput);
        // fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${apiKey}&limit=6`)
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .then(data => {
            
        //     data.forEach(function(){
        //         let url = data.images.original.url
        //         img.src = url
        //     })
        // })

    }

    


    

   
