import React from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function ToastNotify() {
	toast.warn('🤷🏻‍♂️ no image found... sorry...', {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})

	return (
		<ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
	)
}
