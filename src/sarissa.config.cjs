export default {
  siteTitle: "Tristan Bourgeois",
  siteDescription: "Hi ! I'm Tristan, a developer passionate about creating solutions for people around me 👋",
  favicon: "/favicon.ico",
  siteImagePath: "/images/tristan.jpg",
  footer: "Tristan's portfolio",
  dateFormat: "dd/MM/yyyy HH:mm",
  socialMedia: {
    linkedin: "bourgeoistristan",
    github: "TristanB12",
  },
  pageSize: 10,
  categories: [
    {
      name: "Project",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 1,
    },
    {
      name: "Article",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 2,
    },
    {
      name: "Mobile",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 3,
    },
  ],
  categorySettings: {
    order: "name", // name | count
    layout: "card", //button | card
    image: "",
    color: "btn-primary",
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: "Search post title and description...",
    },
    archive: {
      select: "Select Year",
    },
    page: "Page",
    resultFound: " result(s) found",
  },
};
