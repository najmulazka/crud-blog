const { create, index, show, update, destroy } = require("./helpers/crud");

// test create post
create("test title", "test data");

// test show all post
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
const hapus = 12;
const hapusPos = destroy(hapus);

if (hapusPos) {
  console.log(`Menghapus post dengan ID ${hapus}:`, hapusPos);
} else {
  console.log(`Post dengan ID ${hapus} tidak ditemukan.`);
}
