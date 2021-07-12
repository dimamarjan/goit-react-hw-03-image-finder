import React, { Component } from 'react'

import { Searchbar } from 'components/Searchbar/Searchbar'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import { Loader } from 'components/Loader/Loader'

import { getData } from 'utils/getData'

class App extends Component {
	state = {
		data: [],
		status: "idle",
		page: null,
		findInputData: null
	}


	inputFindingData = inputNameImage => {
		this.setState({
			findInputData: inputNameImage
		});
	}


	async componentDidUpdate(_, prevState) {
		if (prevState.findInputData !== this.state.findInputData) {
			this.setState({
				"status": "pending"
			});
			const respData = await getData(this.state.findInputData)
				.then(resp => resp.hits)
			console.log(respData)
			if (respData.length === 0) {
				this.setState({
					"status": "rejected"
				});
				console.log("no matches...")
			} else {
				this.setState({
					"data": respData,
					"status": "resolved",
					"page": 1
				});
			}
		}
	}


	render() {
		const imageData = this.state.data.length !== 0;
		const buttonLoad = this.state.data.length === 12;

		return (
			<div className="App">
				<Searchbar onSubmit={this.inputFindingData} />
				{imageData &&
					<ImageGallery>
						<ImageGalleryItem data={this.state.data} />
					</ImageGallery>
				}
				{buttonLoad && <Loader />}
			</div>
		)
	}	
}

export default App
