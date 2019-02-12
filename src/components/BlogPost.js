import React, { Component } from 'react';
import '../stylesheets/BlogPost.css';


class BlogPost extends Component { 
    render() {
        return (
            <div className='blogPost'>
                <div className='title'>{this.props.title}</div>
                <div className='date'>{this.props.date}</div>
                <div className='post'>{this.props.post}</div>
            </div>
        );
    }
}

export default BlogPost;