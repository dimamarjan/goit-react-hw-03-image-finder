import { Searchbar } from 'components/Searchbar/Searchbar'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

function App() {
	return (
		<div className="App">
			<Searchbar></Searchbar>
			<ImageGallery>
				<ImageGalleryItem></ImageGalleryItem>
			</ImageGallery>
		</div>
	)
}

export default App
