import React from "react";
import { SiSecurityscorecard } from "react-icons/si";

import Post from "@/components/feed/Post";
import { PostType } from "@/constants/Types";
// ✅
const posts: PostType[] = [
  {
    id: 0,
    title: "Courses I'm enrolled in",
    deadline: "1st March",
    content: (
      <p>
        Welcome to my courses page! Here, I will update and track the courses I
        am enrolled in with the deadlines to catchup and follow
      </p>
    ),
    category: "yasir-etc",
    tags: ["Updates", "Journal"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 1,
    title: "Courses I'm enrolled in",
    deadline: "31st March",
    content: (
      <>
        <p>
          Here I will share the update of the courses, I am enrolled in.
          Priority wise
        </p>
        <ul className="my-2 list-outside">
          <li className="text-sm">
            ❌ DSA - 30 days coding (30 days of coding)
          </li>
          <li className="text-sm">❌ System Design (Namaste frontend).</li>
          <li className="text-sm">
            ❌ Interview Practice (roadside code + 30 days of coding).
          </li>
          <li className="text-sm">
            ❌ Machine Coding Practice. (roadside code)
          </li>
          <li className="text-sm">
            ❌ CS50 computer science fundamentals (on their main website)
          </li>
          <li className="text-sm">
            ❌ Web3, Ethereum, Blockchain (code eater + 30 days of coding)
          </li>
          <li className="text-sm">
            ❌ Coursera (IBM/Meta fullstack certification)
          </li>
          <li className="text-sm">❌ Harkirat (optional)</li>
        </ul>
      </>
    ),
    category: "Learning",
    tags: ["Upslilling", "Certification"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Tech Skills",
    deadline: "31st March",
    content: (
      <>
        <p>List of the skills, I need to learn to upscale my knowledge</p>
        <ul className="my-2 list-outside">
          <li className="text-sm">
            ❌ AI, LLM, langchain.js ai package to implement chatbot or other AI
            feature in the project
          </li>
          <li className="text-sm">
            ❌ Text rich content editor in our platform
          </li>
          <li className="text-sm">❌ Docker, Devops, Deployment</li>
          <li className="text-sm">❌ Framer Motion</li>
          <li className="text-sm">❌ Interview Practice (Soft skills)</li>
          <li className="text-sm">❌ Upskill ReactJS, NextJS with Projects</li>
        </ul>
      </>
    ),
    category: "Learning",
    tags: ["Upslilling", "Certification"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Tech Skills",
    deadline: "31st March",
    content: (
      <>
        <p>List of the projects, I will be working upon</p>
        <ul className="my-2 list-outside">
          <li className="text-sm">❌ Brightbells</li>
          <li className="text-sm">❌ My Portfolio</li>
          <li className="text-sm">❌ Ethicals Lab</li>
          <li className="text-sm">❌ Scrape flow</li>
          <li className="text-sm">❌ AI, Web3 powered project</li>
        </ul>
      </>
    ),
    category: "Projects",
    tags: ["Upslilling", "Certification"],
    createdAt: new Date().toISOString(),
  },
];
const MyCourses = async () => {
  return (
    <section className="section-layout ">
      <h3 className="section-title">
        <SiSecurityscorecard />
        <span>My Course</span>
      </h3>
      {posts?.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </section>
  );
};

export default MyCourses;
