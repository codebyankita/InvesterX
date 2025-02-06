// //app/blogpost/[slug]/page.tsx
// "use client";
// import React, { useState, useEffect } from "react";
// import MarkdownHTML from "@/components/MarkdownHTML";
// import Link from "next/link";
// import axios from "axios";

// export default function Page({ params }) {
//   const { slug } = params;
//   const [response, setBlog] = useState();
//   const [postResponse, setPost] = useState();
//   const [mediaData, setMediaData] = useState(null);

//   // Fetch blog data
//   const fetchData = async () => {
//     const url = `http://localhost:1337/api/articles?sort[0]=title:asc&filters[slug][$eq]=${slug}&status=published&locale[0]=en&populate=*`;
//     const data = await fetch(url, { cache: "no-store" });
//     const response = await data.json();
//     setBlog(response);
//     document.title = `${response.data[0].title} | Harry's Developer Portfolio`;
//   };

//   // Fetch related posts
//   const fetchPosts = async () => {
//     const url = `http://localhost:1337/api/blogs?populate=* `;
//     const data2 = await fetch(url, { cache: "no-store" });
//     const postResponse = await data2.json();
//     setPost(postResponse);
//   };

//   useEffect(() => {
//     fetchData();
//     fetchPosts();
//     fetchMedia();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="container mx-auto px-4">
//         {/* Blog Title */}
//         <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center cursor-default">
//           {response && response.data[0].title}
//         </h1>

//         {/* Author and Date */}
//         <div className="flex justify-center items-center text-gray-600 mb-8 cursor-default">
//           <div className="text-center">
//             <p className="font-medium">
//               Written by {response && response.data[0].author.name}
//             </p>
//             <p>Published on October 6, 2024</p>
//           </div>
//         </div>

//         {/* Blog Content */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           {response &&
//             response.data[0].blocks.map((item) => {
//               switch (item["__component"]) {
//                 case "shared.rich-text":
//                   return <MarkdownHTML markdown={item.body} key={item.id} />;

//                 case "shared.quote":
//                   return (
//                     <blockquote className="my-4" key={item.id}>
//                       <p>{item.body}</p>
//                       <cite>— {item.title}</cite>
//                     </blockquote>
//                   );

//                 case "shared.slider":
//                   return (
//                     <div key={item.id} className="my-4 slider">
//                       <p>Slider content goes here</p>
//                     </div>
//                   );

//                 default:
//                   return null;
//               }
//             })}
//         </div>

//         {/* Related Posts Section */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             Related Posts
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {postResponse &&
//               postResponse.data.map((data) => (
//                 <Link href={`/blogpost/${data.slug}`} key={data.id}>
//                   <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105 ease-in-out">
//                     <h3 className="text-lg font-semibold text-gray-900">
//                       {data.title}
//                     </h3>
//                     <p className="text-gray-600 mt-2">
//                       {data.description.split(" ").length > 6
//                         ? data.description.split(" ").slice(0, 11).join(" ") +
//                           "..."
//                         : data.description}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import MarkdownHTML from "@/app/components/MarkdownHTML";
// import Link from "next/link";
import Image from "next/image";

interface Blog {
  Title: string;
  Content: string;
  publishedAt: string;
  authors?: { Name: string }[];
  Cover?: { url: string };
}

// Fetch the blog data directly in the component
const BlogDetail = async ({ params }: { params: { slug: string } }) => {
  // Ensure that `params` is awaited
  const { slug } = await params;
  const res = await fetch(`http://localhost:1337/api/blogs?filters[Slug]=${slug}&populate=*`, {
    cache: "no-store", // Prevent caching for fresh data
  });
  const data = await res.json();

  if (data.data.length === 0) {
    return <div>Blog not found!</div>;
  }

  // Now the 'blog' variable is explicitly typed as 'Blog'
  const blog: Blog = data.data[0];

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl mx-20 font-bold">{blog.Title}</h1>
      {blog.authors && blog.authors.length > 0 && (
        <p className="text-gray-500 mx-20 my-4">By {blog.authors[0].Name} | Published on {new Date(blog.publishedAt).toDateString()}</p>
      )}
      {blog.Cover && (
        <Image
          src={`http://localhost:1337${blog.Cover.url}`}
          alt={blog.Title}
          width={800} // Set the width
          height={400} // Set the height
          className=" w-full h-80 object-cover rounded-lg m-auto mx-20"
          priority
        />

      )}
      <div className="mt-6 text-lg text-gray-700  mx-20">
        <MarkdownHTML markdown={blog.Content} />
      </div>
    </div>
  );
};

export default BlogDetail;

