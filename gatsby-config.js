module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'qijrhjtp3isk',
        accessToken: '22eb01ed780cc101dc081b06cdbcd2c1156f2553aef02dfad402138010a13127'
      }
    }
  ],
}

//http://localhost:8000/___graphql to access graphql