import React ,{useEffect, Component} from "react";
import {connect} from 'react-redux';
import {fetchPosts, fetchpostsAndUsers} from '../state/actions';
import UserHeader from './UserHeader';

class PostList extends Component {
    // useEffect(()=>{
    //     props.fetchPosts();
    // }, []);
    componentDidMount(){
        // this.props.fetchPosts();
        this.props.fetchpostsAndUsers();
    }
    
    render(){
        
        const renderList = this.props.posts.map(post=>{
            return (
            <div key={post.id} className="item">
                <i className="large middle aligned icon user"/>
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}/> 
                </div>
            </div>
            );
        });
        return (
            <div>
              Post list
              {renderList}
            </div>
          )
    }
  
};

const mapStateToProps =state => {
    return {
        posts: state.posts

    }
}

// const mapDispatchToProps = dispatch => {
//     return  {
//         fetchPosts: ()=>dispatch(actions)
//     }
// }

export default connect(mapStateToProps, {fetchpostsAndUsers})(PostList);
