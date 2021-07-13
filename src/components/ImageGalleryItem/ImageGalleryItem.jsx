import React, { Component } from 'react'
import { GalleryListItem, GalleryListItemimage } from './ImageGalleryItem.style'
import Skeleton from 'react-loading-skeleton'


export class ImageGalleryItem extends Component {
        
    render() {
        return (
            <>
                {this.props.data.map(galleryElement => (
                <GalleryListItem key={galleryElement.id}>
                        <GalleryListItemimage src={galleryElement.webformatURL} alt={galleryElement.tags}  />
                </GalleryListItem>
                ))}
            </>
        )
    }
}
