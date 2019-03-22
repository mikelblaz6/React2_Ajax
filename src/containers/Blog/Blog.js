import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        axios.get( '/posts.json' )
            .then( response => {
                //console.log( response );
                let posts = [];
                for (let key in response.data) {
                    posts.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                posts = posts.slice(0, 4);
                console.log(posts);
                // const updatedPosts = posts.map(post => {
                //     return {
                //         ...post,
                //         author: 'Max'
                //     }
                // });
                this.setState({posts: posts});
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.idb} 
                    title={post.title} 
                    url={post.url}
                    clicked={() => this.postSelectedHandler(post.idb)} />;
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;