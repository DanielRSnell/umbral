export const collections = [
  {
    name: "homepage",
    label: "Homepage",
    path: "src/content/homepage",
    format: "md",
    fields: [
      {
        type: "object",
        name: "banner",
        label: "Banner",
 
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "content", label: "Content" },
          {
            type: "object",
            name: "newsletterButton",
            label: "Newsletter Button",
            fields: [
              { type: "boolean", name: "enable", label: "Enable" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "formPlaceholder", label: "Form Placeholder" },
            ],
          },
          { type: "string", name: "bulletpoints", label: "Bulletpoints", list: true },
          {
            type: "object",
            name: "bannerImages",
            label: "Banner Images",
            fields: [
              { type: "image", name: "left", label: "Left Image" },
              { type: "image", name: "center", label: "Center Image" },
              { type: "image", name: "right", label: "Right Image" },
            ],
          },
          {
            type: "object",
            name: "trustedBrands",
            label: "Trusted Brands",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "list", label: "Brand List", list: true },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "workforceEfficiency",
        label: "Workforce Efficiency",
        fields: [
          { type: "string", name: "title", label: "Title" },
          {
            type: "object",
            name: "list",
            label: "Efficiency List",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "content", label: "Content" },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "discoverProductFeature",
        label: "Discover Product Feature",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "content", label: "Content" },
          {
            type: "object",
            name: "accordionList",
            label: "Accordion List",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "content", label: "Content" },
              { type: "image", name: "image", label: "Image" },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "servicesWithCTA",
        label: "Services with CTA",
        fields: [
          {
            type: "object",
            name: "leftCard",
            label: "Left Card",
            fields: [
              { type: "string", name: "head", label: "Head" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "image", name: "images", label: "Images" },
            ],
          },
          {
            type: "object",
            name: "rightCard",
            label: "Right Card",
            fields: [
              { type: "string", name: "head", label: "Head" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "images",
                label: "Images",
                fields: [
                  { type: "image", name: "left", label: "Left Image" },
                  { type: "image", name: "top", label: "Top Image" },
                  { type: "image", name: "bottom", label: "Bottom Image" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA",
            fields: [
              { type: "boolean", name: "enable", label: "Enable" },
              { type: "string", name: "head", label: "Head" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "button",
                label: "Button",
                fields: [
                  { type: "boolean", name: "enable", label: "Enable" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "link", label: "Link" },
                ],
              },
              {
                type: "object",
                name: "images",
                label: "Images",
                fields: [
                  { type: "image", name: "sm_1", label: "Small Image 1" },
                  { type: "image", name: "sm_2", label: "Small Image 2" },
                  { type: "image", name: "sm_3", label: "Small Image 3" },
                  { type: "image", name: "lg", label: "Large Image" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "about",
    label: "About",
    path: "src/content/about",
    format: "md",
    ui: {
      router: ({ document }) => {
        return "/about";
      },
    },
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "meta_title", label: "Meta Title" },
      { type: "string", name: "description", label: "Description" },
      { type: "boolean", name: "draft", label: "Draft" },
      {
        type: "object",
        name: "hero",
        label: "Hero",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
        ],
      },
      {
        type: "object",
        name: "gallery",
        label: "Gallery",
        fields: [
          { type: "boolean", name: "enable", label: "Enable" },
          {
            type: "object",
            name: "topLeftCard",
            label: "Top Left Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          { type: "image", name: "topCenterImage", label: "Top Center Image" },
          { type: "image", name: "topRightImage", label: "Top Right Image" },
          { type: "image", name: "bottomLeftImage", label: "Bottom Left Image" },
          { type: "image", name: "bottomCenterImage", label: "Bottom Center Image" },
          {
            type: "object",
            name: "bottomRightCard",
            label: "Bottom Right Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              {
                type: "object",
                name: "author",
                label: "Author",
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "position", label: "Position" },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "accomplishments",
        label: "Accomplishments",
        fields: [
          { type: "boolean", name: "enable", label: "Enable" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
          {
            type: "object",
            name: "list",
            label: "Accomplishment List",
            list: true,
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "prefix", label: "Prefix" },
              { type: "string", name: "subtitle", label: "Subtitle" },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "visionMission",
        label: "Vision & Mission",
        fields: [
          { type: "boolean", name: "enable", label: "Enable" },
          {
            type: "object",
            name: "mission",
            label: "Mission",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "list",
                label: "Mission List",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "vision",
            label: "Vision",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "list",
                label: "Vision List",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "companies",
        label: "Companies",
        fields: [
          { type: "boolean", name: "enable", label: "Enable" },
          {
            type: "object",
            name: "list",
            label: "Company List",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "image", name: "logo", label: "Logo" },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "teamTestimonials",
        label: "Team Testimonials",
        fields: [
          { type: "boolean", name: "enable", label: "Enable" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "arrowIcon", label: "Arrow Icon" },
          {
            type: "object",
            name: "list",
            label: "Testimonial List",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "position", label: "Position" },
              { type: "string", name: "company", label: "Company" },
              { type: "image", name: "profileImage", label: "Profile Image" },
              { type: "string", name: "description", label: "Description" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "blog",
    label: "Blog",
    path: "src/content/blog",
    format: "md",
    ui: {
      router: ({ document }) => {
        return `/blog/${document._sys.filename}`;
      },
    },
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "meta_title", label: "Meta Title" },
      { type: "string", name: "description", label: "Description" },
      { type: "datetime", name: "date", label: "Date" },
      { type: "image", name: "image", label: "Image" },
      { type: "boolean", name: "draft", label: "Draft" },
      {
        type: "object",
        name: "hero",
        label: "Hero",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
        ],
      },
    ],
  },
  {
    name: "bookDemo",
    label: "Book Demo",
    path: "src/content/book-demo",
    format: "md",
    ui: {
      router: ({ document }) => {
        return "/book-demo";
      },
    },
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "meta_title", label: "Meta Title" },
      { type: "string", name: "description", label: "Description" },
      { type: "boolean", name: "draft", label: "Draft" },
      {
        type: "object",
        name: "hero",
        label: "Hero",
        fields: [
          { type: "string", name: "head", label: "Head" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
        ],
      },
    ],
  },
  {
    name: "changelog",
    label: "Changelog",
    path: "src/content/changelog",
    format: "md",
    ui: {
      router: ({ document }) => {
        return "/changelog";
      },
    },
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "meta_title", label: "Meta Title" },
      { type: "string", name: "description", label: "Description" },
      { type: "boolean", name: "draft", label: "Draft" },
      {
        type: "object",
        name: "pageHeader",
        label: "Page Header",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
        ],
      },
      {
        type: "object",
        name: "changelogs",
        label: "Changelogs",
        list: true,
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "version", label: "Version" },
          { type: "string", name: "date", label: "Date" },
          { type: "image", name: "image", label: "Image" },
          { type: "string", name: "imageAlt", label: "Image Alt" },
          { type: "string", name: "desc", label: "Description" },
        ],
      },
    ],
  },
  {
    name: "contact",
    label: "Contact",
    path: "src/content/contact",
    format: "md",
    ui: {
      router: ({ document }) => {
        return "/contact";
      },
    },
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "meta_title", label: "Meta Title" },
      { type: "string", name: "description", label: "Description" },
      { type: "boolean", name: "draft", label: "Draft" },
      {
        type: "object",
        name: "formContent",
        label: "Form Content",
        fields: [
          { type: "string", name: "head", label: "Head" },
          { type: "string", name: "icon", label: "Icon" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
          {
            type: "object",
            name: "button",
            label: "Button",
            fields: [
              { type: "boolean", name: "enable", label: "Enable" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "imageContent",
        label: "Image Content",
        fields: [
          { type: "string", name: "content", label: "Content" },
          { type: "string", name: "name", label: "Name" },
          { type: "string", name: "designation", label: "Designation" },
          { type: "image", name: "image", label: "Image" },
        ],
      },
    ],
  },
  {
    name: "features",
    label: "Features",
    path: "src/content/features",
    format: "md",
    ui: {
      router: ({ document }) => {
        return "/features";
      },
    },
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "meta_title", label: "Meta Title" },
      { type: "string", name: "description", label: "Description" },
      { type: "boolean", name: "draft", label: "Draft" },
      {
        type: "object",
        name: "pageHeader",
        label: "Page Header",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
        ],
      },
      {
        type: "object",
        name: "hero",
        label: "Hero",
        fields: [
          {
            type: "object",
            name: "leftImageContainer",
            label: "Left Image Container",
            fields: [
              { type: "image", name: "leftImage", label: "Left Image" },
              { type: "image", name: "rightImage", label: "Right Image" },
            ],
          },
          {
            type: "object",
            name: "rightImageContainer",
            label: "Right Image Container",
            fields: [
              { type: "image", name: "leftImageLg", label: "Left Image Large" },
              { type: "image", name: "rightTopImageSm", label: "Right Top Image Small" },
              { type: "image", name: "rightBottomImageMd", label: "Right Bottom Image Medium" },
            ],
          },
          {
            type: "object",
            name: "featureList",
            label: "Feature List",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "whatWeOffer",
        label: "What We Offer",
        fields: [
          { type: "boolean", name: "enable", label: "Enable" },
          { type: "string", name: "title", label: "Title" },
          {
            type: "object",
            name: "list",
            label: "Offer List",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "subtitle", label: "Subtitle" },
            ],
          },
        ],
      },
      {
        type: "object",
        name: "services",
        label: "Services",
        fields: [
          { type: "boolean", name: "enable", label: "Enable" },
        ],
      },
      {
        type: "object",
        name: "integrationTools",
        label: "Integration Tools",
        fields: [
          { type: "boolean", name: "enable", label: "Enable" },
        ],
      },
      {
        type: "object",
        name: "faq",
        label: "FAQ",
        fields: [
          { type: "boolean", name: "enable", label: "Enable" },
        ],
      },
    ],
  },
  {
    name: "integrations",
    label: "Integrations",
    path: "src/content/integrations",
    format: "md",
    ui: {
      router: ({ document }) => {
        return "/integrations";
      },
    },
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "meta_title", label: "Meta Title" },
      { type: "string", name: "description", label: "Description" },
      { type: "boolean", name: "draft", label: "Draft" },
      {
        type: "object",
        name: "pageHeader",
        label: "Page Header",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
        ],
      },
      {
        type: "object",
        name: "list",
        label: "Integration List",
        list: true,
        fields: [
          { type: "image", name: "logo", label: "Logo" },
          { type: "string", name: "description", label: "Description" },
          {
            type: "object",
            name: "button",
            label: "Button",
            fields: [
              { type: "boolean", name: "enable", label: "Enable" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "link", label: "Link" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "pages",
    label: "Pages",
    path: "src/content/pages",
    format: "md",
    ui: {
      router: ({ document }) => {
        return `/${document._sys.filename}`;
      },
    },
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "meta_title", label: "Meta Title" },
      { type: "string", name: "description", label: "Description" },
      { type: "image", name: "image", label: "Image" },
      { type: "boolean", name: "draft", label: "Draft" },
    ],
  },
  {
    name: "pricing",
    label: "Pricing",
    path: "src/content/pricing",
    format: "md",
    ui: {
      router: ({ document }) => {
        return "/pricing";
      },
    },
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "meta_title", label: "Meta Title" },
      { type: "string", name: "description", label: "Description" },
      { type: "boolean", name: "draft", label: "Draft" },
      {
        type: "object",
        name: "pageHeader",
        label: "Page Header",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
        ],
      },
    ],
  },
];
