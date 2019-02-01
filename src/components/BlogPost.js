import React, { Component } from 'react';
import '../stylesheets/BlogPost.css';


class BlogPost extends Component { 
    render() {
        return (
            <div className='blogPost'>
                <br/>
                <div className='title'>{this.props.title}</div>
                <div className='date'>{this.props.date}</div>
                <br/>
                <div className='post'>{this.props.post}</div>
            </div>
        );
    }
}

export default BlogPost;