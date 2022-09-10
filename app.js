class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
      }

    clear () {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number


    }

    chooseOperation(operation) {

    }

    compute () {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand

    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const acButton = document.querySelector('[data-ac]')
const deleteButton = document.querySelector('[data-del]')
const equalsButton = document.querySelector('[data-eqquals]')
const currentOperandTextElement = document.querySelector('[data-current]')
const previousOperandTextElement = document.querySelector('[data-previous]')


const calculator = new Calculator (currentOperandTextElement, previousOperandTextElement);


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


