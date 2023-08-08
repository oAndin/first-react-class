import BlogClose from "./BlogClose";
import BlogTitle from "./BlogTitle";

type BlogProps = {
    title: string,
    content?: string,
    image?: string,
    close?: boolean,
}

const Blog = ({ title, content, image, close }: BlogProps) => {
    return (
        <>
            <BlogTitle title= {title}/>
            {
                close && (
                    <BlogClose />
                )
            }
        </>
    );
}

export default Blog;