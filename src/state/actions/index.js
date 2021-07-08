import blog from '../../api/blog';
import _ from 'lodash';

export const fetchPosts=()=> {
    return async (dispatch)=> {
        const response = await blog.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data});
    }
    
};

// export const fetchUser=(id)=> {
//     return (dispatch)=> {
//        _fetchUser(id, dispatch);
//     }
// }

// const _fetchUser=_.memoize(async (id, dispatch)=> {
//     const response = await blog.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });

export const fetchUser=(id)=> {
    return async dispatch =>{
        const response = await blog.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER', payload: response.data});
    }
};

export const fetchpostsAndUsers=()=>{
    return async (dispatch, getState)=>{
        await dispatch(fetchPosts());
        const userIds=_.uniq(_.map(getState().posts, 'userId'));
        userIds.forEach(id=>dispatch(fetchUser(id)));
    };
}