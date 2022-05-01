import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const nameArr = ["kim", "lee", "park", "jeong"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(`${index + 1}番目は${nameArr[index]}です`);
// // }

// // const nameArr2 = nameArr.map((name)=>{
// // return name;
// // })
// // console.log(nameArr2);

// //mpaにインデックス使用で順番管理ができる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const nameArr1 = ["kim", "lee", "park"];
// const newName = nameArr1.map((name) => {
//   if (name === "kim") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newName);
// console.log(newName.length);

/**
 *三項演算子
 */
//ある条件？ 条件がtrueの場合：条件がfalseの場合
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// //toLocaleString 3桁数 , コンマ区切りをしてくれるjs関数
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) =>
//   num1 + num2 > 100 ? "100を超えています" : "範囲内です。";
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
const flg1 = true;
const flg2 = false;

// if (flg1 || flg2){
//   console.log("１か２はtrueになります。");
// }

// if (flg1 && flg2){
//   console.log("１か２はtrueになります。");
// }

// || は左側がfalseなら右を返す
// jsではnullはfalse
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
