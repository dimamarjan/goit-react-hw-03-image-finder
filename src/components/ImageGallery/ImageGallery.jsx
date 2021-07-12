import React, { Component } from 'react'
import {GalleryList} from "./ImageGallery.style"

export class ImageGallery extends Component {
    render() {
        return (
            <GalleryList>
                {this.props.children}
            </GalleryList>
        )
    }
}
