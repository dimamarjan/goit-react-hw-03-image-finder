import { createPortal } from 'react-dom';
import React, { Component } from 'react'

import { BackDrop, ImageContainer, LargeImg } from './ModalWindow.style';

const modalRoot = document.querySelector("#modal-root");

export class ModalWindow extends Component {

    foo = (e) => {
        console.log(e);
    };

    closeModalHeandler = (e) => {
        if (e.target.nodeName === "DIV") {
            this.props.closeModal()
        };
    };

    render() {
        const currentImage = this.props.currentImage.largeImageURL;
        return createPortal(
            <BackDrop onClick={this.closeModalHeandler} value="beckdrop" onKeyDown={this.foo}>
                <ImageContainer>
                    <LargeImg src={currentImage} />
                </ImageContainer>
            </BackDrop>,
            modalRoot,
        )
    }
}

