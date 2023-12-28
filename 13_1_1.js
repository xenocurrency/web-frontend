document.addEventListener("DOMContentLoaded",
    function(e){
        let keydown = document.querySelector("#keydown")
        keydown.addEventListener("keydown",
            function(e){
                console.log(e.target.value)
            }
        )

        let change = document.querySelector("#change")
        change.addEventListener("change",
            function(e){
                console.log(e.target.value)
            }
        )

        let input = document.querySelector("#input")
        input.addEventListener("input",
            function(e){
                console.log(e.target.value)
            }
        )
    }
)

function red(e){
    console.log(e)
    e.target.style.backgroundColor = "red"
}

function blue(e){
    console.log(e)
    e.target.style.backgroundColor = "blue"
}