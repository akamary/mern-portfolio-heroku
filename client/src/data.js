import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faNodeJs,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import FirebaseLogo from "./assets/images/firebase-logo.svg";
import Mysql from "./assets/images/mysql-icon.svg";
import Postgres from "./assets/images/postgresql-white.svg";
import Mongodb from "./assets/images/mongodb.svg";
import JavaS from "./assets/images/java.svg";
import PythonS from "./assets/images/icons8-python.svg";
import bootstrapi from "./assets/images/icons8-bootstrap.svg";
import clang from "./assets/images/c-language.svg";
import springb from "./assets/images/spring.svg";
import linuxic from "./assets/images/linux.svg";
import nginxic from "./assets/images/nginx.svg";
import postmanic from "./assets/images/postman.svg";
import springboot from "./assets/images/springboot.svg";
import dockeric from "./assets/images/docker.svg";
import awsic from "./assets/images/aws.svg";

export const skills = [
  { id: "html", name: "HTML 5", icon: faHtml5, color: "#e34c26" },
  { id: "css", name: "CSS 3", icon: faCss3Alt, color: "#264de4" },
  { id: "js", name: "JavaScript", icon: faJsSquare, color: "#f0db4f" },
  { id: "nodejs", name: "Node.js", icon: faNodeJs, color: "#3c873a" },
  { id: "react", name: "React", icon: faReact, color: "#51dbfb" },

  { id: "firebase", name: "Firebase", svg: FirebaseLogo, color: "#ffa611" },
  { id: "git", name: "Git", icon: faGitAlt, color: "#f1502f" },
  { id: "github", name: "GitHub", icon: faGithub, color: "#888" },
  { id: "mysql", name: "MySQL", svg: Mysql, color: "#51dbfb" },
  { id: "postgress", name: "PostgreSQL", svg: Postgres, color: "#264de4" },
  { id: "mongodb", name: "MongoDB", svg: Mongodb, color: "#3c873a" },
  { id: "java", name: "Java", svg: JavaS, color: "#25467a" },
  { id: "python", name: "Python", svg: PythonS, color: "#264de4" },
  { id: "bootstrap", name: "Bootstrap", svg: bootstrapi, color: "#673ab7" },
  { id: "c-lang", name: "C-Language", svg: clang },
  { id: "spring", name: "Spring", svg: springb, color: "#3c873a" },
  { id: "springboot", name: "Spring Boot", svg: springboot, color: "#3c873a" },
  { id: "linux", name: "Linux", svg: linuxic },
  { id: "nginx", name: "NGINX", svg: nginxic, color: "#3c873a" },
  { id: "postman", name: "Postman", svg: postmanic, color: "#f1502f" },
  { id: "docker", name: "Docker", svg: dockeric, color: "#264de4" },
  { id: "aws", name: "AWS", svg: awsic },
];

