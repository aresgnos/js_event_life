// property 리스너
// const t = document.getElementById('target');
// t.onclick = function() {
//     alert('Hello world');
// }

// event 객체
// 이벤트가 실행된 맥락의 정보가 필요할 때, 인자로 event를 전달
// 이벤트가 실행된 그 시점의 정보를 담고있음.
// const t = document.getElementById('target');
// t.onclick = function(event) {
//     alert('Hello world, '+event.target.value);
//     console.dir(event);
// }

// addEventListener
// 첫번째 인자로 event type을 받음 ex)'click'
// const t = document.getElementById('target');
// t.addEventListener('click', function(event){
//     alert('Hello world, '+event.target.value);
// })

// 하나의 이벤트 대상에 복수의 동일 이벤트 타입 리스너를 등록할 수 있다.
// 이벤트를 추가할 수 있다.(순차적으로)
// const t = document.getElementById('target');
// t.addEventListener('click', function(event){
//     alert(1);
// });
// t.addEventListener('click', function(event){
//     alert(2);
// });

// 하나의 listener를 여러개의 event target에 설치
const t1 = document.getElementById('target1');
const t2 = document.getElementById('target2');
function btn_listener(event) {
    switch(event.target.id) {
        case 'target1':
            alert(1);
            break;
        case 'target2':
            alert(2);
            break;

    }
    console.log(event.target.id);
}
t1.addEventListener('click', btn_listener);
t2.addEventListener('click', btn_listener);

