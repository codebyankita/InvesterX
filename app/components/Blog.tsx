import React from "react";
import Image from "next/image";
const BlogPage = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-12">
                    {/* First Blog Post */}
                    <BlogPost
                        category="CATEGORY"
                        title="Roof party normcore before they sold out, cornhole vape"
                        description="Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic."
                        author={{
                            name: "Holden Caulfield",
                            role: "UI DEVELOPER",
                            image: "https://dummyimage.com/104x104",
                        }}
                        views="1.2K"
                        comments="6"
                    />

                    {/* Second Blog Post */}
                    <BlogPost
                        category="CATEGORY"
                        title="Pinterest DIY dreamcatcher gentrify single-origin coffee"
                        description="Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric."
                        author={{
                            name: "Alper Kamu",
                            role: "DESIGNER",
                            image: "https://dummyimage.com/103x103",
                        }}
                        views="1.2K"
                        comments="6"
                    />
                </div>
            </div>
        </section>
    );
};

type BlogPostProps = {
    category: string;
    title: string;
    description: string;
    author: { name: string; role: string; image: string };
    views: string;
    comments: string;
};

const BlogPost: React.FC<BlogPostProps> = ({
    category,
    title,
    description,
    author,
    views,
    comments,
}) => (
    <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
            {category}
        </span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
            {title}
        </h2>
        <p className="leading-relaxed mb-8">{description}</p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <a className="text-indigo-500 inline-flex items-center cursor-pointer">
                Learn More
                <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {views}
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                {comments}
            </span>
        </div>
        <a className="inline-flex items-center">
            <Image
                alt="blog"
                src={author.image}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                    {author.name}
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    {author.role}
                </span>
            </span>
        </a>
    </div>
);

export default BlogPage;
