import React from 'react'

import SEO from '../SEO'

function NotFound() {
	return (
		<div className="NotFound">
			<SEO title="404: Not found" />
			<h1>404: NOT FOUND</h1>
			<p>You entered an invalid URL.</p>
			<a href="/">Return to website</a>
		</div>
	)
}

export default NotFound
