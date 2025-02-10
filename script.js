document.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelector("input");
    let buttons = document.querySelectorAll(".btn");
    
    let expression = "";
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;
            
            if (value === "C") {
                expression = "";
            } else if (value === "D") {
                expression = expression.slice(0, -1);
            } else if (value === "=") {
                try {
                    expression = eval(expression.replace("X", "*")).toString();
                } catch (error) {
                    expression = "Error";
                }
            } else {
                expression += value;
            }
            
            input.value = expression;
        });
    });
});
