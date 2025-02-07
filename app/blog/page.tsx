// //app/blog/page.tsx
// import React from "react";
// import Link from "next/link";
// // import { Button } from "@/components/ui/button"

// export const metadata = {
//   title: "Blogs | Harry's Developer Portfolio",
// };
// // Fetch the data
// const data = await fetch("http://localhost:1337/api/blogs?populate=* ", {
//   cache: "no-store",
// });
// const response = await data.json();

// // console.log(response)

// const Blog = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
//           Blogs
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {response.data &&
//             response.data.map((data) => {
//               return (
//                 // Add return here

//                 <div
//                   key={data.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden  dark:border-2 hover:scale-105 ease-in-out duration-300"
//                 >
//                   {/* data post image */}
//                   <img
//                     src={`http://localhost:1337${data.cover.url}`}
//                     alt={data.title}
//                     className="w-full h-64 object-cover"
//                   />

//                   {/* data post content */}
//                   <div className="p-4">
//                     {/* data post title */}
//                     <h2 className="text-2xl font-bold mb-2">{data.title}</h2>

//                     {/* data post description */}
//                     <p className=" mb-4">
//                       {data.description.split(" ").length > 6
//                         ? data.description.split(" ").slice(0, 11).join(" ") +
//                           "..."
//                         : data.description}
//                     </p>

//                     {/* data post author and date */}
//                     <div className="text-sm  mb-4">
//                       <span>By {data.author.name}</span> |{" "}
//                       <span>
//                         {new Date(data.publishedAt).toLocaleDateString(
//                           "en-GB",
//                           { day: "2-digit", month: "long", year: "numeric" }
//                         )}
//                       </span>
//                     </div>

//                     <Link href={`/blogpost/${data.slug}`}>
//                       <button
//                         className="m-2"
//                         variant="outline"
//                         href="/blog-post-1"
//                       >
//                         Read More
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;
// ----------------------------------------------------------------
// app/blog/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface data {
  Title: string;
  id: number;
  Description: string;
  Cover: {
    url: string;
  };
  publishedAt: string;
  authors?: { Name: string }[];
  Slug: string;
}

// Fetch the data server-side
const BlogPage = async () => {
  const res = await fetch("http://localhost:1337/api/blogs?populate=*", {
    cache: "no-store",
  });
  const data: { data: data[] } = await res.json();
  // console.log(data)
  // const imageUrl = new URL(data.Cover.name, "http://localhost:1337");

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.data.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded-lg shadow-md overflow-hidden "
            // hover:scale-105 ease-in-out duration-300"
            >
              {/* Blog cover image */}

              <Image
                src={`http://localhost:1337${data.Cover.url}`}
                // src={imageUrl.toString()}
                alt={data.Title}
                width={500} // Set the width
                height={300} // Set the height
                className="  rounded-lg m-auto mobject-cover"

              />

              {/* Blog content */}
              <div className="p-4">
                {/* Blog title */}
                <h2 className="text-2xl font-bold mb-2">{data.Title}</h2>

                {/* Blog description */}
                <p className="mb-4">
                  {data.Description.split(" ").length > 6
                    ? data.Description.split(" ").slice(0, 11).join(" ") + "..."
                    : data.Description}
                </p>

                {/* Blog author and date */}
                <div className="text-sm mb-4">
                  {/* <span>By {data.author.name}</span> |{" "} */}
                  {data.authors && data.authors.length > 0 && (
                    <p className=" my-4">
                      By {data.authors[0].Name}
                      {/* | Published on {new Date(data.publishedAt).toDateString()} */}
                    </p>
                  )}
                  <span>
                    {new Date(data.publishedAt).toLocaleDateString("en-GB")}
                  </span>
                </div>

                {/* Read more link */}
                <Link href={`/blogpost/${data.Slug}`}>
                  <button className="m-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white p-2">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
