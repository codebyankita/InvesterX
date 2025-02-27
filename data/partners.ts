// data/partners.ts
export interface PartnerInfo {
  id: number;
  title: string;
  description: string;
}

export const partners: PartnerInfo[] = [
  {
    id: 1,
    title: "Entrepreneurs",
    description:
      "Our primary partners are the entrepreneurs we support. We work closely with them to understand their vision and challenges, fostering a collaborative environment that encourages innovation and growth.",
  },
  {
    id: 2,
    title: "Industry Experts",
    description:
      "We partner with seasoned professionals and industry experts who provide valuable insights and guidance. Their experience helps our portfolio companies navigate complex markets and make informed decisions.",
  },
  {
    id: 3,
    title: "Other Investors",
    description:
      "We collaborate with co-investors and venture capital firms to leverage collective expertise and resources. This network enhances our investment strategy and opens doors for our entrepreneurs.",
  },
  {
    id: 4,
    title: "Incubators and Accelerators",
    description:
      "By partnering with incubators and accelerators, we help startups gain access to essential resources, mentorship, and networking opportunities that fuel their growth.",
  },
  {
    id: 5,
    title: "Academic Institutions",
    description:
      "Collaborating with universities and research institutions allows us to tap into cutting-edge research and emerging technologies, fostering innovation that can be translated into viable business solutions.",
  },
  {
    id: 6,
    title: "Corporate Partners",
    description:
      "We engage with established companies looking to innovate or explore new markets. These partnerships can provide startups with access to distribution channels, resources, and strategic insights.",
  },
  {
    id: 7,
    title: "Community Organizations",
    description:
      "We partner with local organizations to support entrepreneurship in underserved communities, promoting diversity and inclusivity in the startup ecosystem.",
  },
];

export const summary: string =
  "By building strong relationships with these diverse partners, we create a robust support network that enhances the success of our portfolio companies and drives collective growth.";
