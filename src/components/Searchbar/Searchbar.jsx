import React, { Component } from 'react';
import { Header, HeaderForm, Button, InputSection } from './Searchbar.style';

export class Searchbar extends Component {
    render() {
        return (
            <Header>
                <HeaderForm>
                    <Button></Button>
                    <InputSection placeholder="Search images and photos"></InputSection>
                </HeaderForm>
            </Header>
        )
    }
}
