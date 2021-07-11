import React, { Component } from 'react'

import { Searchbar } from 'components/Searchbar/Searchbar'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

import { getData } from 'utils/getData'

class App extends Component {
	state = {
		data: "",
		status: "",
		page: "",
		findData: ""
	}

	inputFindingData = (e) => {
        e.preventDefault()
        this.setState({
			findData: e.target.children[1].value,
			page: 1,
			status: "loading"
		})
		getData(this.state.findData, 1).then(resp => {
			console.log(resp.hits)
			this.setState({
				data: resp.hits,
				status: "loaded"
			})
		})
    }


	render() {
		return (
			<div className="App">
				<Searchbar onSubmitHeandler={this.inputFindingData} />
				<ImageGallery>
					<ImageGalleryItem data={this.state.data}></ImageGalleryItem>
				</ImageGallery>
			</div>
		)
	}	
}

export default App
