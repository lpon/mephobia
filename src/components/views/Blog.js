import React, { Component } from 'react';
import BlogPost from '../BlogPost';


class Blog extends Component {
    render() {
        return (
            <div>
                <h1 className="pageHeader">For Occasional Thoughts</h1>
                <BlogPost
                title={"Goodbye React.js (for now) "}
                date={"February 15, 2019"}
                post={"My blog is done.. For now ;-; It's not perfect and \
                that will bother me for a while until I forget about it, but \
                I wanted to start on my game! I hope it turns out as fun and cute as I imagine it to be >:3"}/>
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