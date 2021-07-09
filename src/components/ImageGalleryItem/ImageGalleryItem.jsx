import React, { Component } from 'react'
import { GalleryListItem, GalleryListItemimage } from './ImageGalleryItem.style'


export class ImageGalleryItem extends Component {
    render() {
        return (
            <GalleryListItem>
                <GalleryListItemimage />
            </GalleryListItem>
        )
    }
}
