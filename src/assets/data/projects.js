import { v4 as uuidv4 } from "uuid";
import UTrackerImg from "../images/utracker.jpg";
import GreenCtgImg from "../images/greenctg.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "U Tracker",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Green CTG",
    desc: "An app to help people to get an overview of how they can make the city beautiful.",
    img: GreenCtgImg,
  },
];

export default projects;
