import React, {useReducer} from 'react';

const BlogContextReducerHook = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog':
            return [...state, {title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
};

export const BlogProviderReducerHook = ({children}) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({type: 'add_blog'});
    };

    return (
        <BlogContextReducerHook.Provider value={{blogPosts, addBlogPost}}>
            {children}
        </BlogContextReducerHook.Provider>
    );
};

export default BlogContextReducerHook;
