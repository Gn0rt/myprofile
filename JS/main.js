const myFb = document.querySelector('.fb');
const ntFb = document.querySelector('.note-fb');
const myGit = document.querySelector('.git');
const ntGit = document.querySelector('.note-git');
const myIns = document.querySelector('.ins');
const ntIns = document.querySelector('.note-ins');

function showNote(variable) {
    variable.classList.add('open');
}
function hideNote(variable) {
    variable.classList.remove('open');
}

myFb.addEventListener('mouseenter', function () {
    showNote(ntFb);
});

myFb.addEventListener('mouseleave', function () {
    hideNote(ntFb);
});

myGit.addEventListener('mouseenter', function () {
    showNote(ntGit);
});

myGit.addEventListener('mouseleave', function () {
    hideNote(ntGit);
});

myIns.addEventListener('mouseenter', function () {
    showNote(ntIns);
});

myIns.addEventListener('mouseleave', function () {
    hideNote(ntIns);
});


const optionList = document.querySelectorAll('.option-item');
const extendsList = document.querySelectorAll('.extend');
optionList.forEach(function (option, index) {
    const pane = extendsList[index];
    option.onclick = function () {
        const optionActive = document.querySelector('.option-item.active');
        const extendActive = document.querySelector('.extend.active');
        optionActive.classList.remove('active');
        extendActive.classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');
    }
})
let list = document.querySelector('.slide .list-slide');
let items = document.querySelectorAll('.slide-box');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let active = 0;
let lengthItems = items.length - 1;
prev.onclick = function () {
    //nếu vị trí active - 1 < 0,tức không còn vị trí nào tương ứng (vì vị trí nhỏ nhất đạt dc chỉ có 0)
    if (active - 1 < 0) {
        active = lengthItems;
    }
    //Nếu thỏa mãn thì ta chỉ cần -1 
    else {
        active -= 1;
    }
    reloadSlider();
}
next.onclick = function () {
    //Nếu khi nhấn next, nếu vị trí hiện tại + 1 lớn hơn số thứ tự thì cho chạy lại từ đầu
    if (active + 1 > lengthItems) {
        active = 0;
    }
    //Nếu thỏa mãn thì cứ cộng 1 bình thường
    else {
        active += 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => { next.click() }, 5000)
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 5000)

}

const options = document.querySelector('.options');
// Thêm sự kiện cuộn
window.addEventListener("scroll", function () {
    // Kiểm tra vị trí cuộn
    if (window.pageYOffset > 50) { // Nếu người dùng đã cuộn xuống 50px
        options.style.top = "0"; // Hiển thị menu ở vị trí top = 0
    } else {
        options.style.top = "300px"; // Ẩn menu bằng cách đưa nó lên ngoài màn hình
    }
});
