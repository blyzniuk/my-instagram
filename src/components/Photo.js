import React from 'react';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const toggleStates = {};    

const Photo = React.createClass({
    render() {
        const {post, i, comments} = this.props;

        const toggleLike = () => {
            toggleStates[post.code] = !toggleStates[post.code];
            if (toggleStates[post.code]) {
                this.props.increment.call(null, i)
            } else {
                this.props.decrement.call(null, i)
            }
        }
        
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo"/>
                    </Link>
                <CSSTransitionGroup
                        transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>
                </div>
                
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={toggleLike.bind(this)} className="likes">&hearts; {post.likes}</button>
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-cout">
                                <span className="speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
})

export default Photo;
