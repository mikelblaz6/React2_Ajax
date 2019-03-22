import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="imagen">
            <img src={props.url} width="250px" height="250px"  ></img>
        </div>
    </article>
);

export default post;