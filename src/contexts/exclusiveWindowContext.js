import React, { useState } from "react"

const ExclusiveWindowContext = React.createContext()

function ExclusiveWindowContextProvider(props) {
	const [isExclusiveWindowOpen, setIsExclusiveWindowOpen] = useState(false)

	return (
		<ExclusiveWindowContext.Provider
			value={{ isExclusiveWindowOpen, setIsExclusiveWindowOpen }}
		>
			{props.children}
		</ExclusiveWindowContext.Provider>
	)
}

export { ExclusiveWindowContextProvider, ExclusiveWindowContext }
