/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import shareImage from '../../images/share-image.jpg'

function SEO({ description, lang, meta, title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
					}
				}
			}
		`
	)

	const page = title ? `${title} | ` : ''
	const metaTitle = `${page}${site.siteMetadata.title}`
	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			htmlAttributes={{ lang }}
			title={metaTitle}
			titleTemplate={`${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: metaTitle
				},
				{
					property: `og:description`,
					content: metaDescription
				},
				{
					property: `og:type`,
					content: `website`
				},
				{
					property: 'og:url',
					content: site.siteMetadata.siteUrl
				},
				{
					property: 'og:image',
					content: `${site.siteMetadata.siteUrl}${shareImage}`
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author
				},
				{
					name: `twitter:title`,
					content: metaTitle
				},
				{
					name: `twitter:description`,
					content: metaDescription
				}
			].concat(meta)}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
	title: ``
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string
}

export default SEO
