const products = [
    {
        id: 1,
        name: "Hills Canine Metabolic + Mobility",
        description: "Es comida de perro 1",
        price: 169990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw3092e7a9/images/1221_m1.jpg',
        tipo: 'perro'
    },
    {
        id: 2,
        name: "Hills Canine J/D Joint Care",
        description: "Es comida de perro 2",
        price: 159990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf21ef611/images/151_m1.jpg',
        tipo: 'perro'
    },
    {
        id: 3,
        name: "Hills Canine Metabolic",
        description: "Es comida de perro 3",
        price: 149990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf1387bed/images/153_m1.jpg',
        tipo: 'perro'
    },
    {
        id: 4,
        name: "Acana Singles Duck & Pear alimento para perro",
        description: "Es alimento de perro 4",
        price: 121990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw50c83657/images/58a34-ds-acana-singles-dog-duck-pear-recipe-front-25lb.jpg',
        tipo: 'perro'
    },
    {
        id: 5,
        name: "Hills Canine Adult Large Breed alimento para perro",
        description: "Es comida de perro 5",
        price: 119990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw2b5f14b9/images/ac423-adult-1-5-large-breed.jpg',
        tipo: 'perro'
    },
    {
        id: 6,
        name: "Orijen Original Dog alimento para perro",
        description: "Es comida de perro 6",
        price: 119990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw6a964dbc/images/b060f-ds-orijen-dog-original-fr-lg.jpg',
        tipo: 'perro'
    },
    {
        id: 7,
        name: "Orijen Six Fish Cat alimento para gato",
        description: "Es comida de gato 1",
        price: 99990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwca353c50/images/118.png',
        tipo: 'gato'
    },
    {
        id: 8,
        name: "Orijen Fit & Trim Cat alimento para gato",
        description: "Es comida de gato 2",
        price: 99990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwc979e9d9/images/920d7-web.jpg',
        tipo: 'gato'
    },
    {
        id: 9,
        name: "Orijen Original cat alimento seco completo para gatos",
        description: "Es comida de gato 3",
        price: 95990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwad977271/images/1317_m1.jpg',
        tipo: 'gato'
    },
    {
        id: 10,
        name: "N&D Quinoa Feline Adult Skin & Coat Peixe alimento para gato",
        description: "Es comida de gato 4",
        price: 89990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf16d9f7c/images/609_m1.jpg',
        tipo: 'gato'
    },
    {
        id: 11,
        name: "Hills Feline Adult Optimal Care Original alimento para gato",
        description: "Es comida de gato 5",
        price: 35990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwd94a0c82/images/1264_m1.jpg',
        tipo: 'gato'
    },
    {
        id: 12,
        name: "Leonardo Adult Salmon Gf alimento para gato",
        description: "Es comida de gato 6",
        price: 22990,
        image: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwb0789dcb/images/2416_m.jpg',
        tipo: 'gato'
    },
    {
        id: 13,
        name: "Leeby Cojín Impermeable Anti Pelos Rojo para perros",
        description: "Es un accesorio 1",
        price: 29990,
        image:'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwc88c327f/images/8097_m-1.jpg',
        tipo: 'accesorio'
    },
    {
        id: 14,
        name: "Coto black loop ball",
        description: "Es un accesorio 2",
        price: 6990,
        image:'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwaa454e36/images/Coto%20black%20loop%20ball.jpg',
        tipo: 'accesorio'
    },
    {
        id: 15,
        name: "Outech cinturón manos libres de paseo",
        description: "Es un accesorio 3",
        price: 10500,
        image:'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwc4a5647e/images/Cinturon%20Manos%20Libres%20De%20Paseo.jpg',
        tipo: 'accesorio'
    },
    {
        id: 16,
        name: "Rascador monica",
        description: "Es un accesorio 4",
        price: 119000,
        image:'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw19d231bc/images/Rascador%20monica%202.jpg',
        tipo: 'accesorio'
    },
    {
        id: 17,
        name: "La caña serpiente unidad",
        description: "Es un accesorio 1",
        price: 2990,
        image:'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwb52a30e3/images/a45fd-8436569704233.1-2-.jpg',
        tipo: 'accesorio'
    },
    {
        id: 18,
        name: "Zeecat collar skull 2.0 para gato",
        description: "Es un accesorio 1",
        price: 5990,
        image:'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw07b61f17/images/c9dbd-zeedog-collar-skull-2.0-para-gato-1-.jpg',
        tipo: 'accesorio'
    },
];

export default products;