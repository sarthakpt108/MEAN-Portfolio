import {DiJava, DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { angular, aws, bootstrap, c, cicd, cloudformation, css, docker, documentdb, dynamodb, expressjs, firestore, gcp, hibernate, html, java, javascript, kubernetes, mongodb, mysql, neo4j, nodejs, python, react, rxjs, springboot, tailwind, terraform, typescript } from "./images/skills-icons";
import IconJava from 'react-devicon/java/original'
//import { JavaOriginal, JavascriptOriginal, TypescriptOriginal, PythonOriginal, CplusplusOriginal, Html5Original, Css3Original, TailwindcssOriginal, BootstrapOriginal, ReactOriginal, AngularOriginal, RxjsOriginal, ExpressOriginal, SpringOriginal, HibernateOriginal, MysqlOriginal, MongodbOriginal, DynamodbOriginal, Neo4jOriginal, AmazonwebservicesOriginalWordmark, GooglecloudOriginal, DockerOriginal, KubernetesOriginal, GitlabOriginal, TerraformOriginal, FirebaseOriginal } from 'devicons-react/lib/icons/';
import CplusplusOriginal from 'devicons-react/lib/icons/CplusplusOriginal';
import JavaOriginal from 'devicons-react/lib/icons/JavaOriginal';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import TypescriptOriginal from 'devicons-react/lib/icons/TypescriptOriginal';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import BootstrapOriginal from 'devicons-react/lib/icons/BootstrapOriginal';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import TailwindcssOriginal from 'devicons-react/lib/icons/TailwindcssOriginal';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import AngularOriginal from 'devicons-react/lib/icons/AngularOriginal';
import RxjsOriginal from 'devicons-react/lib/icons/RxjsOriginal';
import ExpressOriginal from 'devicons-react/lib/icons/ExpressOriginal';
import SpringOriginal from 'devicons-react/lib/icons/SpringOriginal';
import HibernateOriginal from 'devicons-react/lib/icons/HibernateOriginal';
import MysqlOriginal from 'devicons-react/lib/icons/MysqlOriginal';
import MongodbOriginal from 'devicons-react/lib/icons/MongodbOriginal';
import DynamodbOriginal from 'devicons-react/lib/icons/DynamodbOriginal';
import Neo4jOriginal from 'devicons-react/lib/icons/Neo4jOriginal';
import AmazonwebservicesOriginalWordmark from 'devicons-react/lib/icons/AmazonwebservicesOriginalWordmark';
import GooglecloudOriginal from 'devicons-react/lib/icons/GooglecloudOriginal';
import DockerOriginal from 'devicons-react/lib/icons/DockerOriginal';
import KubernetesOriginal from 'devicons-react/lib/icons/KubernetesOriginal';
import TerraformOriginal from 'devicons-react/lib/icons/TerraformOriginal';
import GitlabOriginal from 'devicons-react/lib/icons/GitlabOriginal';
import FirebaseOriginal from 'devicons-react/lib/icons/FirebaseOriginal';
import NodejsOriginal from 'devicons-react/lib/icons/NodejsOriginal';
import { amazon, brownie, expense, park, trivia, kubernetesdepl } from "./images/project-images";

export const menu = [
    {name:"Experience"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Contact"},
]



export const projects = [
    { 
      id:1,
      title: 'Brownie Point Application',
      image: brownie,
      category:"Java",
      data:{
         description: [
          "Brownie Point is an app that uses a point system to monitor and manage student engagement and performance in classrooms.",
          "Pioneered GitLab CI/CD for application deployment on Linux virtual machines, created REST APIs for student point transfers.",
          "Followed the TDD to increase the code quality and reliability, as well as achieved the JUnit and Integration testing coverage of 85%."
         ],
         demoLink: "https://github.com/sarthak3136/Brownie-Point",
      },
      stack:["Java SpringBoot", "React Native", "Redux", "Gitlab CI/CD"]
    },
    {
      id:2,
      title: 'Multi Cloud Serverless Trivia Quiz Game',
      image: trivia,
      category:"Web Cloud",
      data:{
        description: [
          "Led a team of 4 people to develop and deploy a multi cloud (AWS and GCP) and multi player trivia quiz application with React JS.",
          "The frontend of the game was deployed on GCP Cloud Run by setting up CI/CD pipeline with GCP Artifact Registry and Docker.",
          "Managed complete UI development and integration of Node Js Lambda functions exposed via API Gateway, as well as implemented AWS Lex Chat Bot."
        ],
        demoLink: "https://github.com/sarthak3136/Multi-Cloud-Serverless-Trivia-Quiz-Game",
      },
      stack:["AWS", "GCP", "React Js", "Node Js"]
    },
    {
      id:3,
      title: 'Expense Ease',
      image: expense,
      category:"Web Cloud",
      data:{
        description: [
          `ExpenseEase is an Expense tracker application developed using React and 9 different AWS Services provisioned through AWS CloudFormation,
          a Infrastructure as a Code (IaC) Tool.`,
          `The frontend was deployed on an AWS EC2 instance, and the backend was implemented as serverless using over 5+ AWS Lambda
          functions exposed via API Gateway`
        ],
        demoLink: "https://github.com/sarthak3136/ExpenseEase",
      },
      stack:["AWS", "React Js", "Node Js"]
    },
    {
      id:4,
      title: "Microservices Deployment and Orchestration on Kubernetes",
      image: kubernetesdepl,
      category:"Kubernetes",
      data:{
        description: [
          `Developed and containerized 2 Node Js microservices using Docker, deployed on Google Kubernetes Engine (GKE) cluster provisioned
          through Terraform, a Infrastructure as a Code (IaC) tool, resulting in a 45% reduction in infrastructure provisioning time.`,
          `Deployment and Services components of Kubernetes were employed on the GKE cluster with the help of GCP Cloud Build CI/CD pipeline,
          reducing the deployment errors by 40%.`,
          `Pods inside the deployment communicated via internal service with the help of Cluster IP and and one of the deployment was exposed
          via the Load Balancer type of external service.`
        ],
        demoLink: "https://github.com/sarthak3136/CSCI-5409-Advanced-Cloud-Computing/tree/main/K8s",
      },
      stack:["GCP", "GKE", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      id:5,
      title: 'Migrate on-premise application to Cloud',
      image: amazon,
      category:"Web Cloud",
      data:{
        description: [
          `Experience banking at your fingertips with our sleek Mobile Bank app design.`,
          `Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights.`,
          `Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`
        ],
        demoLink: "https://github.com/sarthak3136/Amazon-Migrate",
      },
      stack:["AWS", "React Js", "Node Js"]
    },
    {
      id:6,
      title: 'Park Easy',
      image: park,
      category:"Web",
      data:{
        description: [
          `Elevate engagement and knowledge retention with our Quiz App  Development project.`,
          `Seamlessly crafted for interactive learning experiences, our app offers customizable quizzes, real-time feedback, and captivating visuals.`,
          `Empower users to test their knowledge anytime, anywhere, fostering a dynamic learning environment tailored to their needs.`
        ],
        demoLink: "https://github.com/sarthak3136/Park-Easy",
      },
      stack:["React Js", "Node Js", "AWS", "GCP"]
    },
  ]
  

// Skills
export const experience = [
    {
        title:"Programming Language",
        data:[
            {
              skill:"Java",
              icon: <JavaOriginal height={100} width={100}/>
            },
            {
              skill:"JavaScript",
              icon: <JavascriptOriginal height={100} width={100}/>
            },
            {
              skill:"TypeScript",
              icon: <TypescriptOriginal height={100} width={100}/>
            },
            {
              skill: "Python",
              icon: <PythonOriginal height={100} width={100}/>
            },
            {
              skill: "C/C++",
              icon: <CplusplusOriginal height={100} width={100}/>
            },
        ]
    },
    {
        title:"Frontend Development",
        data:[
            {
              skill:"HTML",
              icon: <Html5Original height={100} width={100}/>
            },
            {
              skill:"CSS",
              icon: <Css3Original height={100} width={100}/>
            },
            {
              skill:"Tailwind",
              icon: <TailwindcssOriginal height={100} width={100}/>
            },
            {
              skill:"Bootstrap",
              icon: <BootstrapOriginal height={100} width={100}/>
            },
            {
              skill:"React",
              icon: <ReactOriginal height={100} width={100}/>
            },
            {
              skill: "Angular",
              icon: <AngularOriginal height={100} width={100}/>
            },
            {
              skill: "RxJS",
              icon: <RxjsOriginal height={100} width={100}/>
            },
        ]
    },
    {
        title:"Backend Development",
        data:[
            {
              skill:"Node JS",
              icon: <NodejsOriginal />
            },
            {
              skill:"Express JS",
              icon: <ExpressOriginal height={100} width={100}/>
            },
            {
              skill:"SpringBoot",
              icon: <SpringOriginal height={100} width={100}/>
            },
            {
              skill:"Hibernate",
              icon: <HibernateOriginal height={100} width={100}/>
            },
        ]
    },
    {
      title: "Databases",
      data:[
        {
          skill: "MySQL",
          icon: <MysqlOriginal height={100} width={100}/>
        },
        {
          skill: "MongoDB",
          icon: <MongodbOriginal height={100} width={100}/>
        },
        {
          skill: "DynamoDB",
          icon: <DynamodbOriginal height={100} width={100}/>
        },
        // {
        //   skill: "DocumentDB",
        //   icon: documentdb
        // },
        {
          skill: "FireStore",
          icon: <FirebaseOriginal height={100} width={100}/>
        },
        {
          skill: "Neo4J",
          icon: <Neo4jOriginal height={100} width={100}/>
        }
      ]
    },
    {
      title: "Cloud Technologies",
      data: [
        {
          skill: "AWS",
          icon: <AmazonwebservicesOriginalWordmark height={100} width={100}/>
        },
        {
          skill: "GCP",
          icon: <GooglecloudOriginal height={100} width={100}/>
        }
      ]
    },
    {
      title: "DevOps Tools",
      data: [
        {
          skill: "Docker",
          icon: <DockerOriginal height={100} width={100}/>
        },
        {
          skill: "Kubernetes",
          icon: <KubernetesOriginal height={100} width={100}/>
        },
        {
          skill: "Gitlab CI/CD",
          icon: <GitlabOriginal height={100} width={100}/>
        },
        {
          skill: "Terraform",
          icon: <TerraformOriginal height={100} width={100}/>
        },
        // {
        //   skill: "Cloudformation",
        //   icon: cloudformation
        // }
      ]
    }
]


export const socialHandles = [
  {
    name:"Fiverr",
    icon:<SiFiverr/>,
    link:"",
  },
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"",
  },
];