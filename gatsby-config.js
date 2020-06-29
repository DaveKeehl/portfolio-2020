module.exports = {
	siteMetadata: {
		title: `Davide Ciulla - UI/UX Designer and Front-End Web Developer`,
		description: `Hi, my name is Davide Ciulla and I am a UI/UX Designer and Front-End Web Developer based in Ticino (Switzerland).`,
		author: `Davide Ciulla`,
		siteUrl: `https://davideciulla.com`
	},
	plugins: [
		`gatsby-plugin-robots-txt`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-scroll-reveal`,
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: true, // Flag for disabling animations

				// Advanced Options
				selector: "[data-sal]", // Selector of the elements to be animated
				animateClassName: "sal-animate", // Class name which triggers animation
				disabledClassName: "sal-disabled", // Class name which defines the disabled state
				rootMargin: "0% 50%", // Corresponds to root's bounding box margin
				enterEventName: "sal:in", // Enter event name
				exitEventName: "sal:out" // Exit event name
			}
		},
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
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		}, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
		`gatsby-plugin-offline`
	]
}
