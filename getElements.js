// getElementsByTagName
// tag의 이름이 'li'인 것들을 가져와서 return하는 method
// const lis = document.getElementsByTagName('li');
// console.log("lis", lis);
// for(i=0; i < lis.length; i++) {
//     lis[i].style.color = 'red';
// }

// getElementsByTagName
// ul 하위의 element에 적용하기
// const ul = document.getElementsByTagName('ul')[0];
// console.log("ul", ul);
// const lis = ul.getElementsByTagName('li');
// for(i=0; i < lis.length; i++) {
//     lis[i].style.color = 'red';
// }

// getElementsByClassName
// className을 갖고 있는 element에 적용
// const lis = document.getElementsByClassName('active');
// for(i=0; i < lis.length; i++) {
//     lis[i].style.color = 'red';
// }

// getElementById
// id를 가지고 있는 element에 적용, 하나의 element만 적용
// 반드시 하나
// const li = document.getElementById('active');
// li.style.color = 'red';

// querySelector
// 선택자에 해당되는 하나의 element에 적용
// li element에 적용
// const li = document.querySelector('li');
// li.style.color = 'red';
// // class="active"에 적용
// const active = document.querySelector('.active');
// active.style.color = 'blue';

// querySelectorAll
// 선택자에 해당되는 모든 element에 적용
const lis = document.querySelectorAll('li');
for(const name in lis) {
    lis[name].style.color = 'blue';
}