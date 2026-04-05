import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJquery } from "react-icons/si";
import { BiData } from "react-icons/bi"; // for JDBC/JEE fallback
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "JavaScript", icon: FaJs },
  { name: "jQuery", icon: SiJquery },
  { name: "ReactJs", icon: FaReact },
  { name: "Java", icon: FaJava },
  { name: "JEE", icon: BiData },
  { name: "JDBC", icon: BiData },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "MySQL", icon: SiMysql },
  { name: "Python", icon: FaPython },

  
];

export default skills;