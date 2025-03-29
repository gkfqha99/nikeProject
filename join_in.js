let uid =document.getElementById('uid')
uid.addEventListener('blur', function(){

    if (uid.value.replaceAll(" ","").length == 0)
         document.getElementsByClassName('id_msg')[0].style.fontSize="14px"
})


let sel = document.getElementById('sel')
sel.addEventListener('change',function(){
    console.log(this.value)
})


let checkall = document.getElementById('checkall');
let chk = document.getElementsByClassName('chk');
checkall.addEventListener('click',function(){
    console.log(checkall.checked)

    for(let i=0; i<chk.length; i++) {
        chk[i].checked=checkall.checked
    }
      // if(checkall.checked == true) {
    //     for(let i=0; i<chk.length; i++) {
    //         chk[i].checked=true
    //     }
    // }
    // else  {
    //     for(let i=0; i<chk.length; i++) {
    //         chk[i].checked=false
    //     }
    // }
})

let chk_box = document.getElementsByClassName('chk_box');
let chk_mark = document.getElementsByClassName('chk_mark');
let docu_regulation = document.getElementsByClassName('docu_regulation');

for(let i=0;i<chk_box.length;i++) {
    chk_box[i].addEventListener('click',function(){
        console.log(this.nextElementSibling)

        // this.children[1].classList.toggle('active')


        for(let j=0;j<chk_mark.length;j++) {
            if(i!=j) {
                chk_mark[j].classList.remove('active')
            }
        }
        this.children[1].classList.toggle('active')



        for(let j=0;j<docu_regulation.length;j++) {
            if(i!=j) {
                docu_regulation[j].classList.remove('active')
            }
        }
        this.nextElementSibling.classList.toggle('active')
    })
}