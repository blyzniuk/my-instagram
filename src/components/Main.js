import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
          <h1>
              <Link to="/">
                <img src="http://www.eclecticmixup.com/file/2016/02/Instagram_logo_vector-2-1024x251.jpg" alt="Instagram logo"/>
              </Link>
          </h1>
          {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
