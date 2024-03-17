const plan1 = document.querySelector("#plan1")
const plan2 = document.querySelector("#plan2")
const plan3 = document.querySelector("#plan3")

const selectPlan = (planNumber) => {
    if (planNumber == 1) {
        plan1.classList.add("plan--selected")
        plan2.classList.remove("plan--selected")
        plan3.classList.remove("plan--selected")
    } else if (planNumber == 2) {
        plan2.classList.add("plan--selected")
        plan1.classList.remove("plan--selected")
        plan3.classList.remove("plan--selected")
    } else {
        plan3.classList.add("plan--selected")
        plan1.classList.remove("plan--selected")
        plan2.classList.remove("plan--selected")
    }
}

selectPlan(1)
selectPlan(2)
selectPlan(3)