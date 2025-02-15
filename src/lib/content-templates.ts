import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Icône pour X

export const contentTemplates = [
  {
    name: "Tiktok",
    desc: "An AI tool that generates TikTok hashtags based on your post niche and outline information",
    category: "Tiktok",
    icon: FaTiktok,
    aiPrompt:
      "Give me some good examples of TikTok hashtags based on the given niche & outline topic and provide the result in Rich Text Editor format",
    slug: "generate-tiktok-hashtags",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "X",
    desc: "An AI tool that generates X posts based on your post niche and outline information",
    category: "X",
    icon: FaXTwitter, // Icône pour X
    aiPrompt:
      "Give me a 280-character X post example based on the given niche & outline topic",
    slug: "generate-x-post",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];