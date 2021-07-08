import React, {useEffect, Component} from "react";
import {connect} from 'react-redux';
// import {fetchUser} from '../state/actions';

const UserHeader = (props) => {
    // useEffect(()=>{
    //     props.fetchUser(props.userId);
    // }, []);

   const user = props.user;
   console.log(user+ 'user header');
   if(!user) {
       return null;
   }

  return (
    <div>
      user header-: {user.name}
    </div>
  )
};


const mapStateToProps=(state, ownProps)=>{
    return {
        user: state.users.find(user=> user.id===ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader);
