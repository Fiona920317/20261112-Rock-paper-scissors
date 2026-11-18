let myChoice = null;
let npcsChoice = null;

//選擇自己要出的拳
const options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", function (e) {
    console.log(e.target.getAttribute("id"));
    myChoice = e.target.getAttribute("id"); //儲存myChoice
    //顯示myChoice
    if (myChoice == "scissors") {
      myDecision.style.backgroundImage = "url(../img/scissors.png)";
    } else if (myChoice == "rock") {
      myDecision.style.backgroundImage = "url(../img/rock.png)";
    } else {
      myDecision.style.backgroundImage = "url(../img/paper.png)";
    }
  });
});

//出拳後發生的事
const decideOption = document.querySelector(".decide-option");
const filter = document.querySelector(".filter");
const myDecision = document.querySelector(".my-decision");
const npcsDecision = document.querySelector(".npcs-decision");
const resultText = document.querySelector(".result-text");
const checkBtn = document.querySelector(".check-btn");
//監聽出拳按鈕
decideOption.addEventListener("click", function (e) {
  //在interactable-area加上遮罩
  filter.classList.add("active");

  //使用Math.random抽取npcsChoice
  const randomNum = Math.random();
  npcsDecision.style.animationName = "none"; //清除預設動畫
  //根據randomNum的值獲得對應結果
  if (randomNum < 1 / 3) {
    npcsDecision.style.backgroundImage = "url(../img/scissors.png)";
    npcsChoice = "scissors";
  } else if (1 / 3 <= randomNum && randomNum < (1 / 3) * 2) {
    npcsDecision.style.backgroundImage = "url(../img/rock.png)";
    npcsChoice = "rock";
  } else {
    npcsDecision.style.backgroundImage = "url(../img/paper.png)";
    npcsChoice = "paper";
  }
  console.log(npcsChoice);

  //延遲一小段時間後，顯示對戰結果
  setTimeout(() => {
    //顯示對戰結果
    if (myChoice == npcsChoice) {
      //如果兩人一樣
      alert("平手");
    } else {
      //如果兩人不一樣
      if (myChoice == "scissors") {
        //1.如果玩家出的是剪刀
        if (npcsChoice == "rock") {
          alert("你輸了");
        } else {
          alert("你贏了");
        }
      }
      if (myChoice == "rock") {
        //1.如果玩家出的是石頭
        if (npcsChoice == "paper") {
          alert("你輸了");
        } else {
          alert("你贏了");
        }
      }
      if (myChoice == "paper") {
        //1.如果玩家出的是布
        if (npcsChoice == "scissors") {
          alert("你輸了");
        } else {
          alert("你贏了");
        }
      }
    }
  }, 1000);

  //延遲一段時間後，全部初始化
  setTimeout(() => {
    init();
  }, 2500);
});

function init() {
  filter.classList.remove("active"); //移除遮罩
  myDecision.style.backgroundImage = "url(../img/問號.png)"; //恢復預設圖案
  npcsDecision.style.animationName = "change-img"; //恢復預設動畫
  myChoice = null;
  npcsChoice = null;
}
