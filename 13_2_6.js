document.addEventListener("DOMContentLoaded",
    function(e){
        let button = document.querySelector("#Jscode")
        let p = document.querySelector("#pJscode")
        
        button.addEventListener("click",
            function(e){
                console.log(p.textContent)
                p.textContent = "JS로 입력함"
            }
        )
    }
)