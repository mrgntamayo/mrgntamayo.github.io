export const site = {
  title: "Morgan Tamayo",
  email: "mrgntamayo@gmail.com",
  description: "Data Scientist in Atlanta, Ga.",
  footer: {
    since: 2019,
    designerName: "Aly Raffauf",
    designerUrl: "https://aly.codes",
  },
  url: "https://morgantamayo.com",
} as const;

export const cv = {
  phone: "+16787996666",
  phoneDisplay: "(678) 799-6666",
  location: "Atlanta, GA",
  email: site.email,
  github: "mrgntamayo",
  linkedin: "morgan-tamayo",
  role: "Data Scientist",
  photo: "/profile.jpeg",
  bio: "I'm a data scientist who provides automated and predictive data models that help clients meet their objectives and key results.",
  skills: [
    "Python", "Dataiku", "Toad", "SAS", "SQL", "R", "Excel", "Tableau",
    "Advanced Regression", "Binary Classification", "Data Mining", "K-means Clustering",
  ],
  education: [
    {
      degree: "MS in Applied Statistics",
      school: "Kennesaw State University",
      time: "Aug 2017-Aug 2019",
    },
    {
      degree: "BS in Mathematics",
      school: "Kennesaw State University",
      time: "Aug 2012-Dec 2016",
    },
  ],
  jobs: [
    {
      employer: "Blue Cross and Blue Shield of Alabama",
      location: "Birmingham, AL",
      time: "Jan 2024-Present",
      roles: [
        {
          title: "Healthcare Analyst II",
          time: "Jan 2024-Present",
        },
      ],
      tasks: [
        "Built and validated SQL queries within a large health insurance data warehouse.",
        "Created and maintained Tableau visualizations for WebFOCUS applications based on stakeholder requirements.",
        "Managed dashboard projects from concept to deployment.",
        "Migrated SQL queries to Bitbucket while ensuring accuracy and consistency.",
        "Improved external-facing WebFOCUS applications in an Agile environment.",
        "Conducted release testing and managed user stories and bugs for production deployments.",
      ],
    },
    {
      employer: "Hawkeye",
      location: "Atlanta, GA",
      time: "Dec 2019-Jan 2024",
      roles: [
        {
          title: "Data Analyst",
          time: "Dec 2019-Jan 2024",
        },
      ],
      tasks: [
        "Acquired, cleaned, and analyzed vendor and internal data sets.",
        "Provided recurring market share and flow share analytics to track customer behavior.",
        "Automated deliverable processes and performed ad hoc analyses using SAS.",
        "Identified and corrected errors to maintain high data quality.",
      ],
    },
    {
      employer: "Blue Cross Blue Shield of Tennessee",
      location: "Chattanooga, TN",
      time: "May 2018-July 2019",
      roles: [
        {
          title: "Data Scientist",
          time: "May 2018-July 2019",
        },
      ],
      tasks: [
        "Collaborated on healthcare data analysis for the Episodes of Care physician performance rating system.",
        "Used Python, SQL, and NLP techniques for data preprocessing and analysis.",
        "Developed and applied an algorithm to group physicians by treatment behaviors and associated costs.",
      ],
    },
    {
      employer: "Kennesaw State University",
      location: "Kennesaw, GA",
      time: "Jan 2018-May 2018",
      roles: [
        {
          title: "Graduate Research Assistant",
          time: "Jan 2018-May 2018",
        },
      ],
      tasks: [
        "Analyzed student performance in introductory chemistry courses.",
        "Provided analysis of textbook representations and ETS data for the Department of Statistics and Analytical Sciences.",
      ],
    },
  ],
  projects: [
    {
      title: "Solar Panel Analysis",
      time: "Fall 2018",
      place: "Southern Company of Atlanta, GA",
      tasks: [
        "Lead team using SAS to analyze solar panel and weather data to recommend ideal panel-washing intervals.",
        "Presented recommendations showing efficiency improvements in scheduling washes to Southern Company.",
      ],
    },
    {
      title: "Weather Panel Analysis",
      time: "Fall 2017",
      place: "Southern Company of Atlanta, GA",
      tasks: [
        "Employed SQL to join airport weather data scraped via R with cleaned and organized customer conversion data.",
        "Created SAS visualizations (maps and graphs) for final presentation to Southern Company executives.",
        "Presented findings detailing correlations between weather data and customer conversion rates.",
      ],
    },
    {
      title: "Clickstream Analysis",
      time: "Summer 2016",
      place: "The Home Depot of Atlanta, GA",
      tasks: [
        "Worked with .5 terabytes of clickstream data to find insights about customer behavior.",
        "Cooperated with The Home Depot on data dictionary definitions.",
        "Merged tabled and selected variables using SQL",
        "Utilized survival analysis for insight into variables leading to customers leaving the THD website.",
        "Presented winning findings and suggestions to The Home Depot executives.",
      ],
    },
  ],
} as const;

export type TimelineItem = {
  readonly title: string;
  readonly time: string;
  readonly place?: string;
  readonly tasks: readonly string[];
};

export type ExperienceGroup = {
  readonly employer: string;
  readonly location: string;
  readonly time: string;
  readonly roles: readonly {
    readonly title: string;
    readonly time: string;
  }[];
  readonly tasks: readonly string[];
};
