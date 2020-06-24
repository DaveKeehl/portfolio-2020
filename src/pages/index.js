import React from "react"

import { ExclusiveWindowContextProvider } from "../contexts/exclusiveWindowContext"
import App from "../components/App"

import "typeface-poppins"
import "typeface-roboto"

const IndexPage = () => (
	<ExclusiveWindowContextProvider>
		<App />
	</ExclusiveWindowContextProvider>
)

export default IndexPage
