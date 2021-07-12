import { LoadMoreButton } from "./Loader.style";

import React, { Component } from 'react';


export class Loader extends Component {
    render() {
        return (
            <LoadMoreButton onClick={this.props.onLoadData}>Load more</LoadMoreButton>
        )
    }
}
