import React from 'react';

class Post extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                Post id={this.props.match.params.id}
            </div>
        );
    }
}

export default Post;