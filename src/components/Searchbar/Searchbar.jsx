import React, { Component } from 'react';
import { Header, HeaderForm, Button, InputSection } from './Searchbar.style';

export class Searchbar extends Component {
    heandleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(event.target.elements.inputSection.value)
    }

    render() {
        return (
            <Header>
                <HeaderForm onSubmit={this.heandleSubmit}>
                    <Button type="submit"></Button>
                    <InputSection placeholder="Search images and photos" name="inputSection"></InputSection>
                </HeaderForm>
            </Header>
        )
    }
}
