let listPost = [];
const MAXPOST = 5;
const post = {
    title: '',
    content: '',
    author: ''
};
export function createPost(newPost) {
    if (listPost.length >= MAXPOST) {
        console.log("Danh sách bài viết đã đầy. Không thể thêm bài viết mới.");
    } else {
        listPost = [...listPost, newPost];
    }
}
export function displayPosts() {
    console.log("Danh sách các bài viết:");
    for (const post of listPost) {
        console.log("Tiêu đề:", post.title);
        console.log("Nội dung:", post.content);
        console.log("Tác giả:", post.author);
    }
}
export function searchPost(keyword) {
    const searchResult = listPost.filter(post =>
        post.title.includes(keyword) || post.content.includes(keyword) || post.author.includes(keyword)
    );
    console.log("Kết quả tìm kiếm:");
    if (searchResult.length === 0) {
        console.log("Không tìm thấy bài viết nào phù hợp.");
    } else {
        for (const post of searchResult) {
            console.log("Tiêu đề:", post.title);
            console.log("Nội dung:", post.content);
            console.log("Tác giả:", post.author);
        }
    }
}