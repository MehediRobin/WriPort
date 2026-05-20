import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import unbImg from "@/public/UNB.png";
import tecnoImg from "@/public/tecno.png";
import facetedImg from "@/public/faceted.png";
import assetImg from "@/public/asset.png";
import plasticImg from "@/public/plastic.png";
import batteryImg from "@/public/battery.png";
import vibeImg from "@/public/vibe.png";
import cpImg from "@/public/cp.png";
import whcImg from "@/public/whc.png";
import unImg from "@/public/unb.jpg";
import viserImg from "@/public/viserx.png";
import bbImg from "@/public/bb.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Content Writer",
    name: "Coders Passion",
    image: cpImg,
    location: "Khulna, Bangladesh",
    description:
      "Started as an aspiring content writer and got the basic understanding of the world of content writing, SEO, and digital marketing.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Freelance Feature Article Writer",
    name: "United News of Bangladesh",
    image: unImg,
    location: "Dhaka, Bangladesh",
    description:
      "Got onboard with the growing national online newsportal, and been writing feature articles on tech, gadget and gaming topics ever since.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2025",
  },
  {
    title: "Content Writer",
    name: "WoodHead Creative",
    image: whcImg,
    location: "Chennai, Tamil Nadu, India",
    description:
      "Joined a team of energetic creatives working with an effort to make a global impact with their digital marketing expertise. I wrote blog and social media posts for several projects relating to mechanical parts and medical topics",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },

  {
    title: "Creative Content Executive",
    name: "VISER X",
    image: viserImg,
    location: "Dhaka, Bangladesh",
    description:
      "A milestone in my career, at VISER X, I learned and experienced agency activities being at the center of its creative endeavors.",
    icon: React.createElement(CgWorkAlt),
    date: "2025-2026",
  },

  {
    title: "Content Writer Executive",
    name: "Brand's Bro",
    image: bbImg,
    location: "Dhaka, Bangladesh",
    description:
      "Joined this tream of professionals providing digital marketing services worldwide, while rearing their own unique projects. I wrote on Golf instruments and strategies.",
    icon: React.createElement(FaReact),
    date: "2026",
  },
] as const;

export const projectsData = [
  {
    title: "Shopify Filtering and Faceted Navigation SEO Problems",
    description:
      "I went into the technical depth of a common, yet intricate issue faced by ecommerce sites, leading them to lose rank, traffic, and user satisfaction.",
    tags: ["Ecommerce SEO", "Problem Solving", "Ranked", "Info Blog"],
    imageUrl: facetedImg,
    link: "https://brandsbro.com/shopify-filtering-and-faceted-navigation-seo-problems/",
  },

  {
    title: "What is Digital Asset Management? Complete Guide for 2026",
    description:
      "An article that rediscovers the definition and features of a successful digital asset management tool in 2026. It covers each and every aspect of what businesses should opt for when they need an asset management solution.",
    tags: ["SaaS Product", "Digital Management", "Info Blog"],
    imageUrl: assetImg,
    link: "https://taskfino.com/blog/digital-asset-management",
  },

  {
    title: "The Rise of Vibe Coding: Redefining Software Development with AI",
    description:
      "It's a detailed review article that doesn't only describe different features of a phone in details but also compares it to other market dominators by key funtionalities.",
    tags: ["Web Development", "Industry Trend", "AI"],
    imageUrl: vibeImg,
    link: "https://viserx.com/blog/software-development/what-is-vibe-coading",
  },

  {
    title:
      "How to Choose the Right Plastic Cake Slice Container for Your Needs",
    description:
      "Search by the title and you will find the article coming at the top on SERP. It's a comprehensive buying guide that covers all the aspects of the product and more.",
    tags: ["Buying Guide", "Ecommerce", "Ranked"],
    imageUrl: plasticImg,
    link: "https://thedoublewave.com/blogs/blog-articles/choose-the-right-plastic-cake-slice-container-for-your-needs?srsltid=AfmBOopOaLpOyf8Y2ZEr4ka_sc8pvM2fmJYRbZ8KucPAczxy0hUE2OBp",
  },

  {
    title: "What’s the Average Lifespan of a Marine Battery?",
    description:
      "An article written for Impact Battery, ranking top on the first SERpage in USA.",
    tags: ["Autoparts", "Ecommerce Blog", "Ranked"],
    imageUrl: batteryImg,
    link: "https://www.impactbattery.com/blog/post/whats-the-average-lifespan-of-a-marine-battery?srsltid=AfmBOopS3kYZywqKGPWFnqGRf7VjYLPtmjzv-zx_Eh1rWUJ4tR-ZHQO9",
  },

  {
    title: "Detailed Comaparative Review Article",
    description:
      "It's a detailed review article that doesn't only describe different features of a phone in details but also compares it to other market dominators by key funtionalities.",
    tags: ["Feature Article", "Gadget Review", "Tech", "Review Article"],
    imageUrl: tecnoImg,
    link: "https://unb.com.bd/category/Tech/tecno-phantom-v-fold-2-review-pros-cons-and-price-in-bangladesh/154984",
  },

  {
    title: "Featured Article on Gaming",
    description:
      "Writing articles on games demands writers to understand hypes and have abilities to engage gamers and enthusiasts.",
    tags: ["Feature Article", "Listing Article", "Tech", "Gaming"],
    imageUrl: unbImg,
    link: "https://unb.com.bd/category/Tech/february-2025-video-game-releases-top-titles-you-cant-miss/151328",
  },
] as const;

export const skillsData = [
  "Native Writing",
  "SEO",
  "Blog Article",
  "Website Copy",
  "Social Media Posts",
  "Technical Writing",
  "Newsletter Writing",
  "Storytelling",
  "WordPress SEO",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
] as const;
