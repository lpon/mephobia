import React, { Component } from 'react';
import BlogPost from '../BlogPost';


class Blog extends Component {
    render() {
        return (
            <div>
                <h1 className="pageHeader">For Occasional Thoughts</h1>
                <BlogPost
                title={"(╯°□°）╯︵ ┻━┻ "}
                date={"February 11, 2019"}
                post={"My blog is ugly!!!!!"}/>
                <BlogPost
                title={"♥わあ！"}
                date={"January 31, 2019"}
                post={"すごいね!"}/>
            </div>
        );
    }
}

export default Blog;