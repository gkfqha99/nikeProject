document.addEventListener("DOMContentLoaded", function () {
  let top_banner = document.getElementsByClassName("top_banner")[0]; //top_banner 요소 선택
  let top_banner_cover = document.getElementsByClassName("top_banner_cover")[0];

  /* 스크롤이벤트리스너로 scrollY값 감지후 배너요소들 이동기능*/
  window.addEventListener("scroll", function () {
    // console.log(window.scrollY)
    if (window.scrollY > 30) {
      top_banner.style.top = "-100px";
    } else if (window.scrollY < 30) {
      top_banner.style.top = "0px";
    }
  });

  let rect = top_banner_cover.getBoundingClientRect();
  let top_banner_bottom = rect.bottom;

  // console.log("topbannerbottom =",top_banner_bottom);/*topbannerbottom 위치값 100 나옴.*/
  //top_banner_cover의 위치구해서 scrollY가 100이상일때부터 스크롤Y가 5보다 높아지면 top_banner_cover가 fixed되어 페이지 어디서든 이용가능하게 만드는기능.

  let lastScrollPosition = 0;

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    // console.log("last=" ,lastScrollPosition)
    // console.log("scrollPosition=", scrollPosition)
    if (scrollPosition > 30 && scrollPosition < lastScrollPosition) {
      //포지션 30이상일때만 조건문 트루인 이유는 이렇게 안잡아주면 최상단 t_nav_box영역까지 다 덮어버리기 때문.
      top_banner_cover.style.position = "fixed";
      top_banner_cover.style.top = "0px";
      top_banner.style.top = "0px"; // 스크롤Y 30이상일때 탑배너 -100으로 올라간 포지션 스크롤Y30이상인 위치에서 라스트스크롤 포지션이 현재포지션보다 높을때 탑배너 포지션 다시 0.
    } else {
      top_banner_cover.style.position = "relative";
    }
    lastScrollPosition = scrollPosition;
  }); // 스크롤시 마지막위치가 현재위치보다 크기가 클 경우에만 탑배너 fixed되서 위쪽에 고정되게 만듦.

  //New_menu_wrap이 처음 웹페이지를 열때 , top_banner_nav를 덮는 현상 발생하여
  //모든 New_menu_wrap이 스크롤Y값 20이하일때는 top값을 100px로 주고 , 20이상일때
  //마우스를 올려서 top_banner_nav에 호버시 New_menu_wrap이 나올때 top값을 70만줘서
  //top_banner_nav와 New_menu_wrap이 30px가량 떨어져서 보이는 현상 제어함.
  for (let i = 0; i < 6; i++) {
    (function (num) {
      //함수에 넣어서 해당 구문 반복되서 해줌
      window.addEventListener("scroll", function () {
        let scrollSpot = window.scrollY;
        let newMenuWrap = document.getElementsByClassName("New_menu_wrap")[num]; //해당 순번에 매개변수넣어줌.
        if (newMenuWrap) {
          // 요소가 존재하는지 확인
          if (scrollSpot < 20) {
            newMenuWrap.style.top = "100px";
          } else {
            newMenuWrap.style.top = "70px";
          }
        }
      });
    })(i); // 함수가 끝나자마자 num의 참값에 i를 넣어줘서 적용시킬 메뉴들에 다 적용.
  }

  //아코디언 박스 전체 잡아주고 , 해당 아코디언 박스에 있는 애로우와 서브박스에 전체적으로 얼마나 열릴지
  //스크립트 넣어줌. 열릴때 정확히 sub가 가지고 있는 높이만큼만 열리게 scrollHeight 줌. 약간의 공간을
  //주기위해 10 + "px"로 10px정도 여분줌. 이것도 DOMContentLoaded에 안넣으면 안되서 넣어줌.
  let acodian_box = document.getElementsByClassName("acodian_box");

  for (let i = 0; i < acodian_box.length; i++) {
    let acodian_box_arrow =
      acodian_box[i].getElementsByClassName("acodian_box_arrow")[0];
    let acodian_box_sub = document.getElementsByClassName("acodian_box_sub")[i];

    acodian_box_arrow.addEventListener("click", function () {
      if (
        acodian_box_sub.style.height === "0px" ||
        acodian_box_sub.style.height === ""
      ) {
        acodian_box_sub.style.height = acodian_box_sub.scrollHeight + 10 + "px";
        acodian_box_arrow.textContent = "∧";
      } else {
        acodian_box_sub.style.height = "0";
        acodian_box_arrow.textContent = "∨";
      }
    });
  }
});

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  // console.log("last=" ,lastScrollPosition)
  // console.log("scrollPosition=", scrollPosition)
  if (scrollPosition > 30 && scrollPosition < lastScrollPosition) {
    //포지션 30이상일때만 조건문 트루인 이유는 이렇게 안잡아주면 최상단 t_nav_box영역까지 다 덮어버리기 때문.
    top_banner_cover.style.position = "fixed";
    top_banner_cover.style.top = "0px";
    top_banner.style.top = "0px"; // 스크롤Y 30이상일때 탑배너 -100으로 올라간 포지션 스크롤Y30이상인 위치에서 라스트스크롤 포지션이 현재포지션보다 높을때 탑배너 포지션 다시 0.
  } else {
    top_banner_cover.style.position = "relative";
  }
  lastScrollPosition = scrollPosition;
}); // 스크롤시 마지막위치가 현재위치보다 크기가 클 경우에만 탑배너 fixed되서 위쪽에 고정되게 만듦.

//New_menu_wrap이 처음 웹페이지를 열때 , top_banner_nav를 덮는 현상 발생하여
//모든 New_menu_wrap이 스크롤Y값 20이하일때는 top값을 100px로 주고 , 20이상일때
//마우스를 올려서 top_banner_nav에 호버시 New_menu_wrap이 나올때 top값을 70만줘서
//top_banner_nav와 New_menu_wrap이 30px가량 떨어져서 보이는 현상 제어함.
for (let i = 0; i < 6; i++) {
  (function (num) {
    //함수에 넣어서 해당 구문 반복되서 해줌
    window.addEventListener("scroll", function () {
      let scrollSpot = window.scrollY;
      let newMenuWrap = document.getElementsByClassName("New_menu_wrap")[num]; //해당 순번에 매개변수넣어줌.
      if (newMenuWrap) {
        // 요소가 존재하는지 확인
        if (scrollSpot < 20) {
          newMenuWrap.style.top = "100px";
        } else {
          newMenuWrap.style.top = "70px";
        }
      }
    });
  })(i); // 함수가 끝나자마자 num의 참값에 i를 넣어줘서 적용시킬 메뉴들에 다 적용.
}

var swiper1 = new Swiper(".swiper1", {
  // direction: 'vertical', // 'horizontal' | 'vertical'
  effect: "slide", // 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative' or 'cards'
  slidesPerView: 1, // 한번에 몇개 판 보여줄지 결정. 1 이상의 정수
  //   slidesPerGroup: 1,// 한번에 몇개 판씩 넘길지 결정. 1 이상의 정수
  spaceBetween: 0, // 판 사이사이의 거리
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction", // 'bullets', 'fraction', 'progressbar' or 'custom'
    clickable: true, // 인디케이터/페이징 부분에 클릭 이벤트 달지 말지 결정
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 1000, // 자동슬라이드 되서 가운데에 몇초동안 있을건지
  },
  speed: 1000, // 배너가 바깥에서 가운데로 출발해서 도착할때까지의 시간
});

//밑에 요소잡은건 , 스와이프 되는 이미지 마우스 오버시 스와이프의 loop기능 스탑시키는것.
document
  .getElementsByClassName("mySwiper")[0]
  .addEventListener("mouseenter", function () {
    swiper1.autoplay.stop();
  });
document
  .getElementsByClassName("mySwiper")[0]
  .addEventListener("mouseleave", function () {
    swiper1.autoplay.start();
  });

/* swiper 버튼 */
let left_btn = document.getElementsByClassName("left_btn")[0];
let right_btn = document.getElementsByClassName("right_btn")[0];

var swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  effect: "slide", // 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative' or 'cards'
  slidesPerView: 3, // 한번에 몇개 판 보여줄지 결정. 1 이상의 정수
  //   slidesPerGroup: 1,// 한번에 몇개 판씩 넘길지 결정. 1 이상의 정수
  spaceBetween: 10, // 판 사이사이의 거리
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    type: "progressbar", // 'bullets', 'fraction', 'progressbar' or 'custom'
    clickable: true, // 인디케이터/페이징 부분에 클릭 이벤트 달지 말지 결정
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  autoplay: {
    delay: 1000, // 자동슬라이드 되서 가운데에 몇초동안 있을건지
  },
  speed: 1500, // 배너가 바깥에서 가운데로 출발해서 도착할때까지의 시간
});

document
  .getElementsByClassName("mySwiper2")[0]
  .addEventListener("mouseenter", function () {
    swiper2.autoplay.stop();
  });
document
  .getElementsByClassName("mySwiper2")[0]
  .addEventListener("mouseleave", function () {
    swiper2.autoplay.start();
  });

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  // console.log("last=" ,lastScrollPosition)
  // console.log("scrollPosition=", scrollPosition)
  if (scrollPosition > 30 && scrollPosition < lastScrollPosition) {
    //포지션 30이상일때만 조건문 트루인 이유는 이렇게 안잡아주면 최상단 t_nav_box영역까지 다 덮어버리기 때문.
    top_banner_cover.style.position = "fixed";
    top_banner_cover.style.top = "0px";
    top_banner.style.top = "0px"; // 스크롤Y 30이상일때 탑배너 -100으로 올라간 포지션 스크롤Y30이상인 위치에서 라스트스크롤 포지션이 현재포지션보다 높을때 탑배너 포지션 다시 0.
  } else {
    top_banner_cover.style.position = "relative";
  }
  lastScrollPosition = scrollPosition;
}); // 스크롤시 마지막위치가 현재위치보다 크기가 클 경우에만 탑배너 fixed되서 위쪽에 고정되게 만듦.

//New_menu_wrap이 처음 웹페이지를 열때 , top_banner_nav를 덮는 현상 발생하여
//모든 New_menu_wrap이 스크롤Y값 20이하일때는 top값을 100px로 주고 , 20이상일때
//마우스를 올려서 top_banner_nav에 호버시 New_menu_wrap이 나올때 top값을 70만줘서
//top_banner_nav와 New_menu_wrap이 30px가량 떨어져서 보이는 현상 제어함.
for (let i = 0; i < 6; i++) {
  (function (num) {
    //함수에 넣어서 해당 구문 반복되서 해줌
    window.addEventListener("scroll", function () {
      let scrollSpot = window.scrollY;
      let newMenuWrap = document.getElementsByClassName("New_menu_wrap")[num]; //해당 순번에 매개변수넣어줌.
      if (newMenuWrap) {
        // 요소가 존재하는지 확인
        if (scrollSpot < 20) {
          newMenuWrap.style.top = "100px";
        } else {
          newMenuWrap.style.top = "70px";
        }
      }
    });
  })(i); // 함수가 끝나자마자 num의 참값에 i를 넣어줘서 적용시킬 메뉴들에 다 적용.
}

//open 함수 하는일. open_sec 클릭시 chk_box의 높이담고 있는 nowChkBox의 높이를
//chkBox.offsetHeight 오프셋하잇으로 구해서 높이가 0이면 chk_box의 하잇을 chkBox.scrollHeight에
//+20 px해서 각 sec_box가 가지고 있는 chk_div의 갯수만큼 유동적으로 높이조절하게 해줌.
function open(openSec, chkBox) {
  openSec.addEventListener("click", function () {
    let nowChkBox = chkBox.offsetHeight;
    if (nowChkBox === 0) {
      chkBox.style.height = chkBox.scrollHeight + 10 + "px"; // 요소의 높이 + 20px
      openSec.textContent = "∧"; // 아이콘 변경
      openSec.style.transform = "scale(1)";
    } else {
      chkBox.style.height = "0px"; // 높이 줄이기
      openSec.textContent = "∨"; // 아이콘 변경
      openSec.style.transform = "scale(1)";
    }
  });
}

//sec_box 요소 잡고 자식인 open_sec , chk_box 반복문으로 다 선택해준뒤에
// open 함수의 인자로 open_sec , chk_box 넣어서 모든open_sec , chk_box에 open함수 적용시켜줌.
let secBoxes = document.getElementsByClassName("sec_box");
for (let i = 0; i < secBoxes.length; i++) {
  let openSec = secBoxes[i].getElementsByClassName("open_sec")[0];
  let chkBox = secBoxes[i].getElementsByClassName("chk_box")[0];
  open(openSec, chkBox);
}

//외부 js파일인 item_list.js 파일의 배열을 이용하여 , main_box_items 안의 html을
//반복문으로 꾸며줌. 내부의 각 div에는 item_list.js안의 객체요소 들어감.
let main_box_items = document.getElementsByClassName("main_box_items")[0];

for (let i = 0; i < item_list.length; i++) {
  main_box_items.innerHTML += `
            <div class="main_box_item">
                <a href="./detail.html?itemNo=${item_list[i].item_no}">
                    <div class="img_box">
                        <img src="./img/products/${item_list[i].src}" alt="">
                    </div>
                    <div class="subs_box">
                        <div class="item_no">${item_list[i].item_no}</div>
                        <div class="subs_box_title">${item_list[i].title}</div>
                        <div class="subs_box_section">${
                          item_list[i].section
                        }<div>
                        <div class="subs_box_color">${item_list[i].color}</div>
                        <div class="subs_box_price">
                            ${item_list[i].price.toLocaleString("ko")}
                        </div>
                    </div>
                </a>
            </div> 
        `;
}

//open 함수 하는일. open_sec 클릭시 chk_box의 높이담고 있는 nowChkBox의 높이를
//chkBox.offsetHeight 오프셋하잇으로 구해서 높이가 0이면 chk_box의 하잇을 chkBox.scrollHeight에
//+20 px해서 각 sec_box가 가지고 있는 chk_div의 갯수만큼 유동적으로 높이조절하게 해줌.
function open(openSec, chkBox) {
  openSec.addEventListener("click", function () {
    let nowChkBox = chkBox.offsetHeight;
    if (nowChkBox === 0) {
      chkBox.style.height = chkBox.scrollHeight + 10 + "px"; // 요소의 높이 + 20px
      openSec.textContent = "∧"; // 아이콘 변경
      openSec.style.transform = "scale(1)";
    } else {
      chkBox.style.height = "0px"; // 높이 줄이기
      openSec.textContent = "∨"; // 아이콘 변경
      openSec.style.transform = "scale(1)";
    }
  });
}
