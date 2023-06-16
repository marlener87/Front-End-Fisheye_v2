function photographerTemplate(data) {

    /*
                {
                "name": "Mimi Keel",
                "id": 243,
                "city": "London",
                "country": "UK",
                "tagline": "Voir le beau dans le quotidien",
                "price": 400,
                "portrait": "MimiKeel.jpg"
            },
    */
    const { id, name, portrait, city, country, price, tagline } = data;

    // const picture = `assets/photographers/${portrait}`;
    const picture = `assets/images/FishEye_Photos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        // 1ère façon
        //const article = document.createElement('article');

        
        // const img = document.createElement('img');
        // img.setAttribute("src", picture)
        
        // const h2 = document.createElement('h2');
        // h2.textContent = name;

        // const h3 = document.createElement('h3');
        // h3.textContent = city + ', ' + country;

        // const taglines = document.createElement('p');
        // taglines.textContent = tagline;

        // const priceTJM = document.createElement('p');
        // priceTJM.textContent = price + '€/jour';

        
        // article.appendChild(img);
        // article.appendChild(h2);
        // article.appendChild(h3);
        // article.appendChild(taglines);
        // article.appendChild(priceTJM);


        // 2ème façon
        const article = document.createElement('article');
        //article.classList.add('ma_class')
        //article.setAttribute('id', 100)
        //article.setAttribute('src', "coucou")
        //<article class="ma_class" id="100" src="coucou"></article>


        article.innerHTML = `
            <a class="ficheArtiste" href="/photographer.html?id=${id}">
                <div class="divImage">
                    <img src="assets/images/FishEye_Photos/Photographers_ID_Photos/${portrait}" alt="portrait de l'artiste" class="image">
                </div>

                <h2 class="patronyme">${name}</h2>
                <h3 class="localisation">${city}, ${country}</h3>
                <p class="tagline">${tagline}</p>
                <p class="tjm">${price}€/jour</p>
            </a>
        `

        return (article);
    }
    return { id, name, picture, city, country, price, tagline, getUserCardDOM }
}