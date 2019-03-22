import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || this.state.loadedPost.idb !== this.props.id) {
                //axios.get('/posts.json?orderBy="id"&equalTo="' + this.props.id + '"')
                axios.get('/posts.json?orderBy="$key"&equalTo="' + this.props.id + '"')
                    .then(response => {
                        //console.log(response);
                        const posts = [];
                        for (let key in response.data) {
                            posts.push({
                                ...response.data[key],
                                idb: key
                            });
                        }
                        console.log(posts);
                        this.setState({ loadedPost: posts[0] });
                    });
            }
        }
    }

    deleteUpdatePostHandler = () => {
        axios.delete('/posts/' + this.props.id + '.json')
            .then(response => {
                console.log(response);
            });
        // axios.put('/posts/' + this.props.id + '.json', {
        //     ...this.state.loadedPost,
        //     author: "new author added " + new Date()
        // })
        //     .then(response => {
        //         console.log(response);
        //     });
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <p>{this.state.loadedPost.price}</p>
                    <img src={this.state.loadedPost.url} width="500px" height="500px"  ></img>


                    <div className="Edit">
                        <button onClick={this.deleteUpdatePostHandler} className="Delete">Delete or Update</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;