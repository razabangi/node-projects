const fs = require("fs");

const folder = "finance-department";
const filename = "records";
const rename = "debit-records";

// =========== Make Directory ===============
// // fs.mkdir(folder, (err) => {
// //     console.log("folder has been created.");
// // });

// =========== Write content in th file ===============
// fs.writeFile(
//   `${folder}/${filename}.txt`,
//   "All debits records are here in this file.",
//   (err) => {
//     console.log("write something on this file.");
//   }
// );

// =========== Append content in the file ===============
// fs.appendFile(`${folder}/${filename}.txt`, "\nsome new lines.", (err) => {
//     console.log("append some new data.");
// });

// =========== Read content from the file ===============
// fs.readFile(`${folder}/${filename}.txt`, 'utf-8', (err, data) => {
//     console.log(data);
// });

// fs.rename(`${folder}/${filename}.txt`, `${folder}/${rename}.txt`, (err) => {
//     console.log("file has been renamed.");
// });

// fs.mkdir(folder, (err) => {
//   fs.writeFile(
//     `${folder}/${filename}.txt`,
//     "All debits records are here in this file.",
//     (err) => {
//       fs.appendFile(`${folder}/${filename}.txt`, "\nsome new lines.", (err) => {
//         fs.readFile(`${folder}/${filename}.txt`, "utf-8", async (err, data) => {
//           let readData = await data;
//           console.log(readData);
//           fs.rename(
//             `${folder}/${filename}.txt`,
//             `${folder}/${rename}.txt`,
//             (err) => {
//               console.log("file has been renamed.");
//             }
//           );
//         });
//       });
//     }
//   );
// });