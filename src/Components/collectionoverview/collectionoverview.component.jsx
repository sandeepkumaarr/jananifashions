import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../Preview-Collection/Preview-Collection.Component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import './collectionoverview.styles.scss';

const CollectionsOverview = ({ collections }) => (

    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key = {id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);