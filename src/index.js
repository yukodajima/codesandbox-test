// テンプレート文字列について
// const your_name = "じゃけぇ";
// const age = 28;

// 従来の文字列
// const message1 = "私の名前は" + your_name + "です。年齢は" + age + "です。"

// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${your_name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数について

// 従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function(str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2。アロー関数を使って出力しています"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }
// console.log(func3(10,30));
/*
// 分割代入について
*/
// const myprofile = {
//   your_name: "じゃけぇ",
//   age: 28,
// }

// 従来
// const message1 = `名前は${myprofile.your_name}です。年齢は${myprofile.age}です。`;
// console.log(message1);

// ↓ここから分割代入
// const {your_name, age} = myprofile;  //reactでも分割代入はよく使う
// const message2 = `名前は${your_name}です。年齢は${age}です。`;
// console.log(message2);

// const myprofile = ['じゃけぇ',28];

// const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}です。`;
// console.log(message3);

// const [your_name, age] = myprofile;
// const message4  = `名前は${your_name}です。年齢は${age}です。`
// console.log(message4);

/*
 **デフォルト値
 */
const sayHello = (your_name = "ゲスト") =>
  console.log(`こんにちは${your_name}さん。`); //your_name = ゲスト←ここがデフォルト値
sayHello();
