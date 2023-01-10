const name = document.querySelector("#name");
const comment = document.querySelector("#comment");
const myBtn = document.querySelector("#myBtn");
const resultBody = document.querySelector("#resultBody");

//先設一個空陣列
let data = [];
//用forEach跑data資料去組字串
function init() {
  let str = "";
  data.forEach(function (item, index) {
    str +=
      `<tr>
       <td class='nameTag'>${item.name} says</td>
     <td>${item.time}</td>
     </tr>
     <tr class="style">
     <td colspan='2'>${item.comment}</td>
     </tr>
  `;
  })
  resultBody.innerHTML = str;
}

//按鈕被點及執行下面
myBtn.addEventListener("click", function (e) {
  if (name.value == "" || comment.value == "") {
    if (name.value == "") {
      name.value = "Please enter your name";
      name.setAttribute("style", "color:red");
    }
    if (comment.value == "") {
      comment.value = "Please enter your comment";
      comment.setAttribute("style", "color:red");
    }
  } else {
    //新增內容到obj,obj新增到data
    let obj = {};
    obj.name = name.value;
    obj.comment = comment.value;
    obj.time = moment().format("YYYY-MM-DD HH:mm:ss");
    data.push(obj);
    init();
    name.value = "";
    comment.value = "";
  }
});