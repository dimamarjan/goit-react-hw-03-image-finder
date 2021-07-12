import React, { Component } from 'react'
import { GalleryListItem, GalleryListItemimage } from './ImageGalleryItem.style'


export class ImageGalleryItem extends Component {

    builderList = (data) => {
        if (data.length !== 0) {
            return this.props.data.map(galleryElement => (
                <GalleryListItem key={galleryElement.id}>
                    <GalleryListItemimage src={galleryElement.webformatURL} alt={galleryElement.tag}/>
                </GalleryListItem>
            ))
        }
    }

    render() {
        return (
            <>
            {this.builderList(this.props.data)}
            </>
        )
    }
}
