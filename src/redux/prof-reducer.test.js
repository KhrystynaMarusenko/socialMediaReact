import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./prof-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'Hi', likesCount: 17}
    ]
}

it('post length should be 3', () => {
    let action = addPostActionCreator("Test post");

    let newState = profileReducer(state, action);
    expect(newState.posts.length ).toBe(3);
})

it('new post should be added with message "Test post" ', () => {
    let action = addPostActionCreator("Test post");

    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('Test post');
})

it('delete post, length should be 2', () => {
    let action = deletePostActionCreator(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
})

it('if post id is incorrect, length shouldn`t change', () => {
    let action = deletePostActionCreator(10000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
})
