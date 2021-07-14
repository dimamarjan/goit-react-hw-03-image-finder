import { createPortal } from 'react-dom';
import React, { Component } from 'react'

import { BackDrop, ImageContainer, LargeImg } from './ModalWindow.style';

const modalRoot = document.querySelector("#modal-root");

export class ModalWindow extends Component {
    render() {
        const currentImage = this.props.currentImage.largeImageURL;
        return createPortal(
            <BackDrop>
                <ImageContainer>
                    <LargeImg src={currentImage} />
                </ImageContainer>
            </BackDrop>,
            modalRoot,
        )
    }
}

