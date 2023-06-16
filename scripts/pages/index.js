    async function getPhotographers() {
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        let photographers = [
            // {
            //     "name": "Ma data test",
            //     "id": 1,
            //     "city": "Paris",
            //     "country": "France",
            //     "tagline": "Ceci est ma data test",
            //     "price": 400,
            //     "portrait": "account.png"
            // },
            // {
            //     "name": "Autre data test",
            //     "id": 2,
            //     "city": "Londres",
            //     "country": "UK",
            //     "tagline": "Ceci est ma data test 2",
            //     "price": 500,
            //     "portrait": "account.png"
            // },
            {
                "name": "Mimi Keel",
                "id": 243,
                "city": "London",
                "country": "UK",
                "tagline": "Voir le beau dans le quotidien",
                "price": 400,
                "portrait": "MimiKeel.jpg"
            },
            {
                "name": "Ellie-Rose Wilkens",
                "id": 930,
                "city": "Paris",
                "country": "France",
                "tagline": "Capturer des compositions complexes",
                "price": 250,
                "portrait": "EllieRoseWilkens.jpg"
            },
            {
                "name": "Tracy Galindo",
                "id": 82,
                "city": "Montreal",
                "country": "Canada",
                "tagline": "Photographe freelance",
                "price": 500,
                "portrait": "TracyGalindo.jpg"
            },
            {
                "name": "Nabeel Bradford",
                "id": 527,
                "city": "Mexico City",
                "country": "Mexico",
                "tagline": "Toujours aller de l'avant",
                "price": 350,
                "portrait": "NabeelBradford.jpg"
            },
            {
                "name": "Rhode Dubois",
                "id": 925,
                "city": "Barcelona",
                "country": "Spain",
                "tagline": "Je crée des souvenirs",
                "price": 275,
                "portrait": "RhodeDubois.jpg"
            },
            {
                "name": "Marcel Nikolic",
                "id": 195,
                "city": "Berlin",
                "country": "Germany",
                "tagline": "Toujours à la recherche de LA photo",
                "price": 300,
                "portrait": "MarcelNikolic.jpg"
            }
        ]
        // et bien retourner le tableau photographers seulement une fois récupéré
        return ({
            //photographers: [...photographers, ...photographers, ...photographers]})
            photographers: [...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {

            // Récupération du HTML d'un photographer
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();

            // Ajout du HTML dans le DOM
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers(); // Récupère les données
        displayData(photographers); // On demande à afficher les données de photographers
    }
    
    init();
    



    // exemple : 
    /*

    const object = {
        name: 'John Doe',
        age: 29,
        country : 'FRANCE'
    }
    console.log(object)



    const name = object.name
    console.log(name)

    // Le destructuring
    const { age , country} = object
    console.log(age, country)
    */



    const object = {
        name :'John Doe',
        age : 29,
        country : 'FRANCE',

        getIdentity () {
            console.log(`Je suis ${this.name} et j'ai ${this.age} ans`)
        }
    }

    console.log(object.getIdentity())