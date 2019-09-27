import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections : [
                {
                    title: 'New Arrivals',
                    imageUrl:'https://i.ibb.co/FWbS0BQ/New-Arrivals.jpg',
                    id:'1'
                },
                {
                    title: 'Clothings',
                    imageUrl:'https://i.ibb.co/B6nP8yQ/Clothing.jpg',
                    id:'2'
                },
                {
                    title: 'Footwears',
                    imageUrl:'https://i.ibb.co/m4KMsHZ/Footwears.jpg',
                    id:'3'
                },
                {
                    title: 'Watches',
                    imageUrl:'https://i.ibb.co/RDCrrf2/watches.jpg',
                    size:'large',
                    id:'4'
                },
                {
                    title: 'Terracotta Jewellery',
                    imageUrl:'https://i.ibb.co/Bn2t04y/Handmade-Terracotta-Jewellery.png',
                    size:'large',
                    id:'5'
                },
            ]
        }
    }

    render() {
       return( 
                <div className = "directory-menu">
                    {
                        this.state.sections.map(({title,imageUrl,id,size}) => (
                            <MenuItem id={id} title={title} imageUrl = {imageUrl} size={size} />
                        ))
                    }
                </div>
       )
    }
}


export default Directory;