const INITIAL_STATE = {

    sections : [
        {
            title: 'New Arrivals',
            imageUrl:'https://i.ibb.co/NFSh8Yh/New-Arrivals.jpg',
            id:'1',
            routeName:'ShopPage/NewArrivals',                  
        },

        {
            title: 'Clothings',
            imageUrl:'https://i.ibb.co/B6nP8yQ/Clothing.jpg',
            id:'2',
            routeName:'ShopPage/Clothings',                    
        },


        {
            title: 'Footwears',
            imageUrl:'https://i.ibb.co/m4KMsHZ/Footwears.jpg',
            id:'3',
            routeName:'ShopPage/Footwears',       
        },


        {
            title: 'Watches',
            imageUrl:'https://i.ibb.co/RDCrrf2/watches.jpg',
            size:'large',
            id:'4',
            routeName:'ShopPage/Watches',     
        },

        {
            title: 'Terracotta Jewellery',
            imageUrl:'https://i.ibb.co/Bn2t04y/Handmade-Terracotta-Jewellery.png',
            size:'large',
            id:'5',
            routeName:'ShopPage/TerracottaJewellery', 
        },
    ]
}

const directoryReducer  = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        default:
            return state;
    }
}


export default directoryReducer;