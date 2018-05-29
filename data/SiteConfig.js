module.exports = {
  blogPostDir: "blog", // The name of directory that contains your posts.
  siteTitle: "Adam's Blog @ RossHQ", // Site title.
  siteTitleAlt: "Adam's Blog @ RossHQ", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://adam.rosshq.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A GatsbyJS stater with Material design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Adam Ross", // Username to display in the author segment.
  userTwitter: "grayside_sb", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "", // User location to display in the author segment.
  userAvatar: "https://s.gravatar.com/avatar/3e2f0386a66cb77f556b166cef941d6c?s=80", // User avatar to display in the author segment.
  userDescription:
    "A few areas of interest: For All Things an API, Open Source, Things in Containers, Developer Acceleration", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/grayside",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/grayside_sb",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:grayside@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018 adam.rosshq.com" // Copyright string for the footer of the website and RSS feed.
};
