import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchPosts} from '../actions/index';

class PostsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

/* Refactor to some Redux shorthand
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
*/

export default connect(null, {fetchPosts})(PostsIndex);