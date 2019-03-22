import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import './NewPost.css';

const style = {
    //display: 'inline-block',
    display: 'margin-right:10px',
    padding: '16px',
    backgroundColor: 'lightgreen',//background kursoria gainian jarritta
    color: 'black'
}

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        price: '1€',
        url: ''
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            price: this.state.price,
            url: this.state.url
        };
        axios.post('/posts.json', data)
            .then(response => {
                alert('Saved order');
                //console.log(response);
            }).catch(error => {
                // console.log(error);
                // this.setState({error: true});
                alert('Error order');
            });
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                
                <div className="form-group form-inline">
                <label  style={style} >Nombre</label>
                <input  type="text"  value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                </div>
                <label style={style}>Descripcion</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                
                <label style={style}>Precio</label>
                <select value={this.state.price} onChange={(event) => this.setState({price: event.target.value})}>
                    <option value="1€">1€</option>  
                    <option value="2€">2€</option>
                </select>

                <label style={style}>Url</label>
                <input type="text" value={this.state.url} onChange={(event) => this.setState({url: event.target.value})} />
                
                <button onClick={this.postDataHandler}>Add Post</button>
               
            </div>
        );
    }
}
//price-en vaule=1€ (hartzen dauen valoria) >benetan dakon baloria<
export default NewPost;