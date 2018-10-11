import React, { Component } from 'react';

import '../index.css'
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const App=()=>(
    <div>
        <h1 className="box">React -redux with testing</h1>
        <div className="main">
        <CommentBox></CommentBox>
        <CommentList></CommentList>
        </div>
    </div>
)

export default App;