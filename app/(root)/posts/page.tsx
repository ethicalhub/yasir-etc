import React from "react";
import { SiSecurityscorecard } from "react-icons/si";

import Post from "@/components/feed/Post";
import { PostType } from "@/constants/Types";
const posts = [
  {
    id: 1,
    title: "Things to do in Brightbells",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- Responsiveness</li>
        <li className="text-sm">- Add Consent Banner</li>
        <li className="text-sm">- Google Analytics</li>
        <li className="text-sm">- Razorpay integration</li>
        <li className="text-sm">- Account Creation Logic (test)</li>
        <li className="text-sm">- Optimizations</li>
        <li className="text-sm">- Fix Location cookies issue</li>
        <li className="text-sm">- Google Analytics</li>
        <li className="text-sm">- Student dashboard features</li>
        <li className="text-sm">- Testing all pages and features</li>
        <li className="text-sm">
          - Book a demo form (test with your id, support@brightbells.com)
        </li>
      </ul>
    ),
    category: "Brightbells",
    tags: ["Curriculum", "Feedback", "Marketing"],
    createdAt: new Date().toISOString(),
  },

  {
    id: 2,
    title: "Things to do in Portfolio Feed",
    content: (
      <ul className="list-outside text-sm">
        <li>- Create database & post model</li>
        <li>- Create Express Server</li>
        <li>- Implement Auth (google, otp) </li>
        <li>- Route & Action Protection </li>
        <li>- Route & Action Protection </li>
        <li>- Implement search, filter using categories and tags</li>
        <li>- Fix feed UI (make it better) </li>
        <li>- Content Rich Text Editor for Feed</li>
        <li>- Add blog, notes, todo cards on the right side(on feed page)</li>
        <li>- Deploy with Docker on vercel, with custom domain name</li>
        <li>- Add AI powered Chatbot</li>
        <li>- Add Goals/Task Management Feature</li>
        <li>- Add like, save, comment option, date of posting</li>
        <li>Same categories post, should bundle up together.</li>
      </ul>
    ),
    category: "Portfolio",
    tags: ["UI/UX", "MongoDB", "NextJS", "Chatbot"],
    createdAt: new Date().toISOString(),
  },

  {
    id: 3,
    title: "Upskilling ToDo",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- Complete TypeScript advanced course.</li>
        <li className="text-sm">- Practice DSA problems daily.</li>
        <li className="text-sm">- Build a small project using GraphQL.</li>
      </ul>
    ),
    category: "Upskilling",
    tags: ["TypeScript", "DSA", "GraphQL"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Chatbot ToDo",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- Implement intent recognition system.</li>
        <li className="text-sm">- Add support for multiple languages.</li>
        <li className="text-sm">- Test integration with APIs.</li>
      </ul>
    ),
    category: "Features",
    tags: ["Chatbot", "APIs", "AI"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: "Notes ToDo",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- Organize research on blockchain topics.</li>
        <li className="text-sm">- Review past meeting notes for insights.</li>
        <li className="text-sm">
          - Create a summary for recent tech articles.
        </li>
      </ul>
    ),
    category: "Notes",
    tags: ["Blockchain", "Research", "Summaries"],
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: "Blog ToDo",
    content: (
      <ul className="list-outside">
        <li className="text-sm">- Draft the blog on Web3 adoption.</li>
        <li className="text-sm">- Proofread the article on AI advancements.</li>
        <li className="text-sm">- Schedule publishing for Frontend Tips.</li>
      </ul>
    ),
    category: "Blog",
    tags: ["Web3", "AI", "Frontend"],
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
