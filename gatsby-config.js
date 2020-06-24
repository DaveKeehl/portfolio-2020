module.exports = {
	siteMetadata: {
		title: `Davide Ciulla`,
		description: `Hi, my name is Davide Ciulla and I am a UI/UX Design and Front-End Web Developer based in Ticino (Switzerland).`,
		author: `Davide Ciulla`,
		siteUrl: `https://davideciulla.com`
	},
	plugins: [
		`gatsby-plugin-offline`,
		`gatsby-plugin-robots-txt`,
		`gatsby-plugin-sitemap`,
		// `gatsby-plugin-scroll-reveal`,
		// {
		// 	resolve: `gatsby-plugin-scroll-reveal`,
		// 	options: {
		// 		threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
		// 		once: true, // Defines if animation needs to be launched once
		// 		disable: true, // Flag for disabling animations

		// 		// Advanced Options
		// 		selector: "[data-sal]", // Selector of the elements to be animated
		// 		animateClassName: "sal-animate", // Class name which triggers animation
		// 		disabledClassName: "sal-disabled", // Class name which defines the disabled state
		// 		rootMargin: "0% 50%", // Corresponds to root's bounding box margin
		// 		enterEventName: "sal:in", // Enter event name
		// 		exitEventName: "sal:out" // Exit event name
		// 	}
		// },
		`gatsby-plugin-smoothscroll`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Davide Ciulla`,
				short_name: `Davide Ciulla`,
				start_url: `/`,
				background_color: `#2548FF`,
				theme_color: `#2548FF`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
				icons: [
					{
						src: `/favicons/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`
					},
					{
						src: `/favicons/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`
					}
				]
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}
