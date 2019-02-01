import React, { Component } from 'react';
import BlogPost from '../BlogPost';


class Blog extends Component {
    render() {
        return (
            <BlogPost
            title={"わあ！"}
            date={"January 31, 2019"}
            post={"すごいね!"}/>
        );
    }
}

export default Blog;