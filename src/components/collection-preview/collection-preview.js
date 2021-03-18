import React from 'react';
import CollectionItems from '../collection-item/collection-item';
import './collection-preview.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
        {
            items.filter((items, index) => index < 4)

            .map(({id, ...otherItemProps}) => (
                <CollectionItems id={id} {...otherItemProps} />
            ))
        }
        </div>
    </div>
)

export default CollectionPreview;