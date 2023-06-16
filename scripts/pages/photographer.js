const photographerObject = {
    "name": "Mimi Keel",
    "id": 243,
    "city": "London",
    "country": "UK",
    "tagline": "Voir le beau dans le quotidien",
    "price": 400,
    "portrait": "MimiKeel.jpg"
}


const mediasObject = [
    {
        "id": 623534343,
        "photographerId": 243,
        "title": "Lonesome",
        "image": "Travel_Lonesome.jpg",
        "likes": 88,
        "date": "2019-02-03",
        "price": 45
    },
    {
        "id": 625025343,
        "photographerId": 243,
        "title": "Hillside Color",
        "image": "Travel_HillsideColor.jpg",
        "likes": 85,
        "date": "2019-04-03",
        "price": 45
    },
    {
        "id": 2525345343,
        "photographerId": 243,
        "title": "Wednesday Potrait",
        "image": "Portrait_Wednesday.jpg",
        "likes": 34,
        "date": "2019-04-07",
        "price": 45
    },
    {
        "id": 2523434634,
        "photographerId": 243,
        "title": "Nora Portrait",
        "image": "Portrait_Nora.jpg",
        "likes": 63,
        "date": "2019-04-07",
        "price": 45
    },
    {
        "id": 398847109,
        "photographerId": 243,
        "title": "Raw Black Portrait",
        "image": "Portrait_Background.jpg",
        "likes": 55,
        "date": "2019-06-20",
        "price": 45
    },
    {
        "id": 2534342,
        "photographerId": 243,
        "title": "Seaside Wedding",
        "image": "Event_SeasideWedding.jpg",
        "likes": 25,
        "date": "2019-06-21",
        "price": 45
    },
    {
        "id": 65235234,
        "photographerId": 243,
        "title": "Boulder Wedding",
        "image": "Event_PintoWedding.jpg",
        "likes": 52,
        "date": "2019-06-25",
        "price": 45
    },
    {
        "id": 23523434,
        "photographerId": 243,
        "title": "Benevides Wedding",
        "image": "Event_BenevidesWedding.jpg",
        "likes": 77,
        "date": "2019-06-28",
        "price": 45
    },
    {
        "id": 5234343,
        "photographerId": 243,
        "title": "Wild horses in the mountains",
        "video": "Animals_Wild_Horses_in_the_mountains.mp4",
        "likes": 142,
        "date": "2019-08-23",
        "price": 60
      },
    {
        "id": 95234343,
        "photographerId": 243,
        "title": "Rainbow Bird",
        "image": "Animals_Rainbow.jpg",
        "likes": 59,
        "date": "2019-07-02",
        "price": 60
    }
]


// TODOS
// 1° On fait le design sans se soucier de JavaScript
// 2° On remplace les données statiques (nom, tagline, prix, photo, etc..) dynamiquement en JS comme exmple n°2 en dessous

// 3° BONUS : Faire de même pour les médias
    // 1° On fait le design classique en HTML / CSS
    // 2° Faire une boucle sur mediasObject
        // 2-1° On créer un element div (comme on avait fais avec article) et on l'ajoute au DOM

// Exemple du 2°: 
const photographerName = document.querySelector('.photographer-name')
photographerName.innerHTML = photographerObject.name

const photographerLocalisation = document.querySelector('.photographer-localisation')
photographerLocalisation.innerHTML = photographerObject.city + ', ' + photographerObject.country

const photographerTagline = document.querySelector('.photographer-tagline')
photographerTagline.innerHTML = photographerObject.tagline


// const picture = `assets/photographers/account.png `
// const photographerImage = document.querySelector('.photographer-image')
// //photographerImage.innerHTML = photographerObject.portrait
// photographerImage.setAttribute("src", photographerObject.portrait)



// CODE POUR AFFICHER LES MEDIAS
