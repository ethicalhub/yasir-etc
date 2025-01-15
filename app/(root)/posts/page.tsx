import React from "react";
import { SiSecurityscorecard } from "react-icons/si";

import Post from "@/components/feed/Post";
import { PostType } from "@/constants/Types";
// ✅
const posts = [
  {
    id: 0,
    title: "Pre Launch - static posts",
    deadline: "1st March",
    content: (
      <p>
        Welcome to my feed! Here, I&apos;ll share my journey—learnings, goals,
        projects, and snippets of everyday life. Stay tuned for updates that
        inspire, challenge, and maybe even entertain!
      </p>
    ),
    category: "yasir-etc",
    tags: ["Updates", "Journal"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 1,
    title: "Things to do in Brightbells",
    deadline: "18th Jan",
    content: (
      <>
        <p>
          Here&apos;s the list of things that need to be done in Brightbells by
          the end of this week to get it ready for deployment.
        </p>
        <ul className="my-2 list-outside">
          <li className="text-sm">❌ Make the platform responsive.</li>
          <li className="text-sm">❌ Add a consent banner.</li>
          <li className="text-sm">❌ Integrate Google Analytics.</li>
          <li className="text-sm">❌ Add Razorpay payments.</li>
          <li className="text-sm">❌ Test account creation logic.</li>
          <li className="text-sm">❌ Optimize site performance.</li>
          <li className="text-sm">❌ Fix location cookie issues.</li>
          <li className="text-sm">❌ Build student dashboard features.</li>
          <li className="text-sm">❌ Test all pages and features.</li>
          <li className="text-sm">❌ Discount logic.</li>
          <li className="text-sm">
            ❌ Test Book a Demo form - email to (support@brightbells.com).
          </li>
        </ul>
      </>
    ),
    category: "Brightbells",
    tags: ["Razorpay", "Google Analytics"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Things to do in Portfolio Feed",
    deadline: "25th Jan",
    content: (
      <ul className="list-outside text-sm">
        <li>- Create mongodb & post model</li>
        <li>- Create express server</li>
        <li>- Implement Auth (google, otp) </li>
        <li>- Route & Action Protection </li>
        <li>- Implement search, filter using categories and tags</li>
        <li>- Fix feed UI (make it better) </li>
        <li>- Content Rich Text Editor for Feed</li>
        <li>- Add blog, notes, todo cards on the right side(on feed page)</li>
        <li>- Deploy with Docker on vercel, with custom domain name</li>
        <li>- Add AI powered Chatbot</li>
        <li>- Add Goals/Task Management Feature</li>
        <li>- Add like, save, comment option, date of posting</li>
        <li>- Same categories post, should bundle up together.</li>
        <li>- Implement Infinity Scrolling.</li>
        <li>- Add Tanstack Query.</li>
      </ul>
    ),
    category: "Portfolio",
    tags: ["MongoDB", "NextJS"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Data Structure & Algorithms",
    deadline: "25th Jan",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- Complete DSA from 30dayscoding.</li>
        <li className="text-sm">- Practice DSA problems.</li>
        <li className="text-sm">
          - Update notes of DSA on (https://learning-etc.vercel.app/).
        </li>
      </ul>
    ),
    category: "Upskilling",
    tags: ["DSA", "Javascript"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Chatbot ToDo",
    deadline: "31st,Jan",
    content: (
      <ul className="list-outside">
        <li className="text-sm">
          - Learn about rag, llm, langchain.js, vector databases, ai package.
          (Understand the eco system)
        </li>
        <li className="text-sm">
          - Create a simple chat application with your resume info, dsa
          knowledge and keep updating it.
        </li>
        <li className="text-sm">- Create a npm package of Chatbot.</li>
      </ul>
    ),
    category: "Features",
    tags: ["Chatbot", "AI"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: "Upcoming tasks",
    deadline: "10th,Feb",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- System Design (frontend).</li>
        <li className="text-sm">- Interview Preparation.</li>
        <li className="text-sm">- Machine Coding Practice.</li>
        <li className="text-sm">- Upskilling ReactJS, NextJS.</li>
        <li className="text-sm">- Web3, Ethereum, Blockchain</li>
        <li className="text-sm">- Framer motion, </li>
      </ul>
    ),
    category: "Notes",
    tags: ["Research", "Summaries"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: "Blog ToDo",
    deadline: "18th Feb",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- Create a plan for content creation.</li>
        <li className="text-sm">
          - Keep updating your feed, regaring daily tracking goals.
        </li>
        <li className="text-sm">- Schedule publishing for Frontend Tips.</li>
      </ul>
    ),
    category: "Blog",
    tags: ["AI", "Frontend"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 7,
    title: "Ethicals Lab",
    deadline: "28th Feb",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- Hire Interns.</li>
        <li className="text-sm">- Create platform.</li>
        <li className="text-sm">- Quizzes, multistep form, etc.</li>
      </ul>
    ),
    category: "Blog",
    tags: ["Frontend"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    title: "Building Projects",
    deadline: "---",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- Portfolio with feed, ToDo .</li>
        <li className="text-sm">- Chatbot based on my portfolio.</li>
        <li className="text-sm">- Quiz Application (ethicals)</li>
        <li className="text-sm">- Use of Socket.io </li>
        <li className="text-sm">- Decentralize Application</li>
        <li className="text-sm">- Build Projects</li>
      </ul>
    ),
    category: "Project",
    tags: ["Frontend, Fullstack"],
    createdAt: new Date().toISOString(),
  },
];
const MyPosts = async () => {
  return (
    <section className="section-layout ">
      <h3 className="section-title">
        <SiSecurityscorecard />
        <span>My Posts</span>
      </h3>
      {posts?.map((post: PostType) => {
        return <Post key={post.id} post={post} />;
      })}
    </section>
  );
};

export default MyPosts;

// const categories = [
//   "ToDo's",
//   "Brightbells",
//   "Portfolio",
//   "Projects",
//   "Upskilling",
//   "Updates",
//   "Blog",
//   "Features",
// ];

// const tags = [
//   "ReactJS",
//   "NextJS",
//   "JavaScript",
//   "TypeScript",
//   "CSS",
//   "HTML",
//   "Frontend",
//   "Backend",
//   "Fullstack",
//   "APIs",
//   "NodeJS",
//   "ExpressJS",
//   "MongoDB",
//   "SQL",
//   "TailwindCSS",
//   "Redux",
//   "Web3",
//   "Blockchain",
//   "UI/UX",
//   "Git",
//   "GraphQL",
//   "Firebase",
//   "Docker",
//   "Performance",
//   "Testing",
// ];
