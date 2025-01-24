// import { GetStaticPaths, GetStaticProps } from "next";
// import Image from "next/image";
// import { investors } from "../components/data/investors";

// type Investor = {
//   id: string;
//   name: string;
//   title: string;
//   description: string;
//   email: string;
//   website: string;
//   articles: string[];
//   image: string;
// };

// type InvestorPageProps = {
//   investor: Investor;
// };

// export default function InvestorPage({ investor }: InvestorPageProps) {
//   return (
//     <div className="bg-blue-50 min-h-screen py-12">
//       <div className="container mx-auto p-6">
//         {/* Profile Section */}
//         <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
//             <Image
//               src={investor.image}
//               alt={`Portrait of ${investor.name}`}
//               width={100}
//               height={100}
//               className="rounded-full mb-4"
//             />
//             <h2 className="text-blue-600 text-sm font-semibold">{investor.title}</h2>
//             <h1 className="text-3xl font-bold text-gray-900">{investor.name}</h1>
//             <p className="text-gray-600 mt-4 text-center">{investor.description}</p>
//           </div>
//           {/* Additional Info */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-gray-900 text-lg font-semibold">More information</h2>
//             <p className="text-gray-600 mt-4">{investor.description}</p>
//             <div className="mt-4">
//               <div className="flex items-center space-x-2">
//                 <i className="fas fa-envelope text-blue-600"></i>
//                 <a href={`mailto:${investor.email}`} className="text-blue-600">
//                   {investor.email}
//                 </a>
//               </div>
//               <div className="flex items-center space-x-2 mt-2">
//                 <i className="fas fa-globe text-blue-600"></i>
//                 <a href={investor.website} className="text-blue-600">
//                   {investor.website} <i className="fas fa-external-link-alt"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Articles Section */}
//         <div className="mt-12 text-center">
//           <h2 className="text-3xl font-bold text-gray-900">Articles by {investor.name}</h2>
//           <ul className="mt-6 space-y-4">
//             {investor.articles.map((article, index) => (
//               <li key={index} className="text-blue-600">
//                 {article}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Generate paths for each investor
// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = investors.map((investor) => ({
//     params: { id: investor.id },
//   }));

//   return { paths, fallback: false };
// };

// // Fetch data for each investor page
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const investor = investors.find((inv) => inv.id === params?.id);

//   if (!investor) {
//     return { notFound: true };
//   }

//   return {
//     props: { investor },
//   };
// };


import { useRouter } from "next/router";
import { investors } from "@/app/components/data/investors";

const InvestorDetails = () => {
  const { query } = useRouter();
  const { id } = query;

  const investor = investors.find((inv) => inv.id === id);

  if (!investor) return <p>Investor not found</p>;

  return (
    <div className="bg-white text-gray-900 px-4 py-12 lg:mx-48 mx-4">
      <h1 className="text-4xl font-bold">{investor.name}</h1>
      <p className="text-lg text-gray-500">{investor.title}</p>
      <p className="mt-4">{investor.description}</p>
      <p className="mt-4 text-blue-500">
        <a href={investor.website} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </p>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Articles</h2>
        <ul className="list-disc pl-5 mt-2">
          {investor.articles.map((article, index) => (
            <li key={index}>{article}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InvestorDetails;
