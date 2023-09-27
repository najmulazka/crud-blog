const { create, index, show, update, destroy } = require("./helpers/crud");

// test create post

// test show all post
index();
// test show detail post by id
const find = 1;
const found = show(find);

if (found) {
  console.log(`Menampilkan id: ${find}`);
} else {
  console.log(`ID ${find} tidak ditemukan`);
}
// test update post by id
// test delete post by id
const hapus = 1;
const hapusPost = destroy(hapus);

if (hapusPost) {
  console.log(`Menghapus post dengan ID ${hapus}:`, hapusPost);
} else {
  console.log(`Post dengan ID ${hapus} tidak ditemukan.`);
}
