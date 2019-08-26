import React, {useState} from 'react';

const BlogContextStateHook = React.createContext();

export const BlogProviderStateHook = ({children}) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([
            ...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}
        ]);
    };

    return <BlogContextStateHook.Provider value={{blogPosts, addBlogPost}}>
        {children}
    </BlogContextStateHook.Provider>
};

export default BlogContextStateHook;
