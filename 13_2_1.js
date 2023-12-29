document.addEventListener("DOMContentLoaded",
    function(e){
        let input = document.querySelector("#input")
        // click이라는 이벤트 발생 시 아래 function(e) 가 실행됩니다.
        input.addEventListener("click",
            function(e){
                // type 속성을 로그에 표기
                console.log(e.target.getAttribute("type"))
                // type 속성을 text로 변경
                console.log(e.target.setAttribute("type", "text"))
            }
        )

        input.addEventListener("change",
            function(e){
                    e.target.setAttribute("type", "button")
            }
        )

        let button = document.querySelector("#NextImage")

        let img = document.querySelector("img")
        let img1 = "image/hl 1.jpg"
        let img2 = "image/hl 2.jpg"
        let img3 = "image/profile.jpg"
        
        button.addEventListener("click",
            function(e){
                let src = img.getAttribute("src")
                if (src === img1){
                    img.setAttribute("src", img2)
                } else if(src === img2){
                    img.setAttribute("src", img3)
                } else{
                    img.setAttribute("src", img1)
                }
            }
        )
    }
)