export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "620401de07a4b00a8912f8c0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-23-studio-3kfkmjzv",
                  apiId: "165d6ef0-eb05-408e-9dff-275103246b7e",
                },
                {
                  buildHookId: "620401de51fc3e0c401e204c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-23-web-bfred25f",
                  apiId: "20204e51-b882-430b-96de-99c5ae10006b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/theapplegates/sanity-gatsby-blog23",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-23-web-bfred25f.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
