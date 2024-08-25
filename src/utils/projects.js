import elementEmporiumImage from "../assets/element_emporium.png";
import portfolioImage from "../assets/portfolio.png";
import expenseTrackerImage from "../assets/expense-tracker.png";

const projects = [
  {
    title: "Element Emporium",
    description: "A small-scale online shop.",
    github: "https://github.com/andrebarros7201/element-emporium",
    live: "https://element-emporium.vercel.app/",
    image: elementEmporiumImage,
  },
  {
    title: "My Portfolio",
    description: "A website to showcase my skills and projects. (Recursion!)",
    github: "https://github.com/andrebarros7201/portfolio",
    live: "TBD",
    image: portfolioImage,
  },
  {
    title: "Expense Tracker - In Development",
    description:
      "A platform to organize personal finance and calculate investments.",
    github: "https://github.com/andrebarros7201/expense-tracker",
    live: "https://expense-tracker-three-iota.vercel.app/",
    image: expenseTrackerImage,
  },
];

export default projects;
