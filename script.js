console.log("test")
let button = document.querySelector("input")
button.addEventListener("click",
    function(e){
        alert("clicked!")
    }
)

//<p> 태그에서 인라인 이벤트로 호출할 함수를 지정합니다.
function hi(){
    alert("hi")
}