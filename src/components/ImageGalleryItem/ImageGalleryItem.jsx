import React, { Component } from 'react'
import { GalleryListItem, GalleryListItemimage } from './ImageGalleryItem.style'


export class ImageGalleryItem extends Component {
    showImages = (e) => {
        e.target.style.opacity = 1;
    };

    getImageId = (e) => {
        console.log(this.props);
        const currentImg = parseInt(e.target.id);
        const dataArr = this.props.data;
        dataArr.forEach(image => {
            if (image.id === currentImg) {
                this.props.currentImgHendle(image);
                this.props.togleModalHendle();
            };
        });
    }

    render() {
        return (
            <>
                {this.props.data.map(galleryElement => (
                    <GalleryListItem key={galleryElement.id}>
                        <GalleryListItemimage
                            id={galleryElement.id}
                            src={galleryElement.webformatURL}
                            alt={galleryElement.tags}
                            onLoad={this.showImages}
                            onClick={this.getImageId}
                        />
                    </GalleryListItem>
                ))}
            </>
        )
    }
}
