document.addEventListener("DOMContentLoaded",
    function(e){
        let nameEditButton = document.querySelector("#nameEditButton")
        let editNameField = document.querySelector("#editNameField")
        let newName = document.querySelector("#newName")
        let okButton = document.querySelector("#okButton")
        let nameHere = document.querySelector("#nameHere")
        
        nameEditButton.addEventListener("click",
            function(e){
                editNameField.style.display = "block"
                nameEditButton.style.display = "none"
            }
        )

        okButton.addEventListener("click",
            function(e){
                nameHere.textContent = newName.value
                editNameField.style.display = "none"
                nameEditButton.style.display = "inline"
            }
    )
    }
)