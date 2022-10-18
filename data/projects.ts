interface objectType {
  id: number;
  src: string;
  github: string;
  liveWebsite: string;
  title: string;
}
const projects = [
  {
    id: 1,
    src: require("/assets/projects/pizza.gif"),
    title: "Pizza Landing Page",
    link:"https://pizzalandingpage.vercel.app/",
    github:"https://github.com/jeypzz/React.JS-Pizza-Landing-Page"
  },
  {
    id: 2,
    src: require("/assets/projects/todolist.gif"),
    title: "To Do List Web App",
    link:"https://todolist-22m8ajgs9-jeypzz.vercel.app/",
    github:"https://github.com/jeypzz/To-Do-List-Web-App"
  },
  {
    id: 3,
    src: require("/assets/projects/WorldRanks.gif"),
    title: "Country Ranks",
    link:"https://worldranks-rho.vercel.app/",
    github:"https://github.com/jeypzz/Next.JS-Flag-API"
  },
  {
    id: 4,
    src: require("/assets/projects/event.gif"),
    title: "Event Booking Website",
    link:"https://eventbookingapp.vercel.app/",
    github:"https://github.com/jeypzz/React-JS-Event-Booking-App"
  },
  {
    id: 5,
    src: require("/assets/projects/designify.gif"),
    title: "Website Design Service",
    link:"https://webdesignservice.vercel.app/",
    github:"https://github.com/jeypzz/WebDesign-Service-WebApp"
  },
];

export default projects;
