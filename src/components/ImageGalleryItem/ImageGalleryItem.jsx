import React, { Component } from 'react'
import { GalleryListItem, GalleryListItemimage } from './ImageGalleryItem.style'


export class ImageGalleryItem extends Component {
    showImages = (e) => {
        e.target.style.opacity = 1;
    };

    render() {
        return (
            <>
                {this.props.data.map(galleryElement => (
                    <GalleryListItem key={galleryElement.id}>
                        <GalleryListItemimage src={galleryElement.webformatURL} alt={galleryElement.tags} onLoad={this.showImages}/>
                    </GalleryListItem>
                ))}
            </>
        )
    }
}
