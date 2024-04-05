import { createPost, displayPosts, searchPost } from './managerPost.js';
const newPost = {
    title: 'Tiêu đề bài viết',
    content: 'Nội dung bài viết',
    author: 'Tác giả bài viết'
};
createPost(newPost);
displayPosts();
searchPost('Tiêu đề');
