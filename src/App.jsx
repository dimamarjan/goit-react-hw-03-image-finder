import React, { Component } from 'react'

import { Searchbar } from 'components/Searchbar/Searchbar'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import { Loader } from 'components/Loader/Loader'
import { ToastNotify } from 'utils/ToastNotify'
import { Spinner } from 'components/SkeletonComponent/Spinner'
import { ModalWindow } from 'components/ModalWindow/ModalWindow'

import { getData } from 'utils/getData'

class App extends Component {
	state = {
		data: [],
		status: "idle",
		findInputData: null,
		page: null,
		nextPage: null,
		showModal: false,
		currentImg: null
	}


	inputFindingData = inputNameImage => {
		this.setState({
			findInputData: inputNameImage
		});
	}


	loadMoreImage = async () => {
		const prevData = [...this.state.data];
		const newPageNum = this.state.page + 1;
		this.setState({
			 "status": "pending"
		 })
		const newRespData = await getData(this.state.findInputData, newPageNum)
			.then(resp => resp.hits);
		this.setState({
			"data": [...prevData, ...newRespData],
			"page": newPageNum,
			"status": "resolved"
		})
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	}


	togleModal = () => {
		this.setState(({ showModal }) => ({
			"showModal": !showModal,
		}));
	};


	currentImgHendle = (imageId) => {
		this.setState({
			"currentImg": imageId
		})
	}

	keyPressHeandler = (e) => {
		if (e.key === "Escape") {
			this.togleModal();
		}
	} 


	async componentDidUpdate(_, prevState) {
		if (prevState.findInputData !== this.state.findInputData) {
			this.setState({
				"status": "pending"
			});
			const respData = await getData(this.state.findInputData)
				.then(resp => resp.hits)
			if (respData.length === 0) {
				this.setState({
					"status": "rejected",
					"nextPage": false,
					"page": null
				});
			} else {
				this.setState({
					"data": respData,
					"status": "resolved",
					"page": 1
				});
				if (respData.length === 12) {
					this.setState({
					"nextPage": true
				});
				}
			}
		}
		if (this.state.showModal) {
			window.addEventListener("keydown", this.keyPressHeandler)
		}
		if (this.state.showModal === false) {
			window.removeEventListener("keydown", this.keyPressHeandler)
		}
	}


	render() {
		const awaitLoadingData = this.state.status === "pending";
		const dataLoaded = this.state.status === "resolved";
		const noDataFound = this.state.status === "rejected";
		const buttonLoad = this.state.nextPage && this.state.status === "resolved";
		const { showModal } = this.state;

		

		return (
			<div className="App">
				<Searchbar onSubmit={this.inputFindingData} />
				{awaitLoadingData && <Spinner />}
				{dataLoaded && <ImageGallery >
					<ImageGalleryItem
						data={this.state.data}
						togleModalHendle={this.togleModal}
						currentImgHendle={this.currentImgHendle}
					/>
				</ImageGallery>}
				{noDataFound && <ToastNotify />}
				{buttonLoad && <Loader onLoadData={this.loadMoreImage} />}
				{showModal && <ModalWindow currentImage={this.state.currentImg} closeModal={this.togleModal}/>}
			</div>
		)
	}	
}

export default App
