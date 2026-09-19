import React from 'react';

const Post = ({ post }) => {
    const { author } = post;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{author}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">show details</button>
                </div>
            </div>
        </div>
    );
};

export default Post;