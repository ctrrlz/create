//калькулятор
const handleTextSubmit = async () => {
    const operation = "A + B" 
    const operands = [2, 3] 
    
    const body = JSON.stringify({ operation, operands })
    
    try {
    const response = await fetch("/calculate", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: body
    })
  
    const result = await response.json()
    
    // отобразить результат в интерфейсе
    } catch (error) {
    // обработать ошибку
    }
    }
    
    // Обработчик POST-запроса с JSON объектом
    const handleJsonSubmit = async () => {
    const data = {
    operation: "A - B", // получаем операцию из интерфейса
    operands: [5, 2] // получаем операнды из интерфейса
    }
    
    try {
    const response = await fetch("/calculate", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    
    
    const result = await response.json()
    
    // отобразить результат в интерфейсе
    } catch (error) {
    // обработать ошибку
    }
    }
    
    // Обработчик GET-запроса с query-строкой
    const handleGetSubmit = async () => {
    const url = "/calc?a=13&b=14&op=plus" // формируем URL из интерфейса
    
    try {
    const response = await fetch(url)
    const result = await response.json()
    

    // отобразить результат в интерфейсе
    } catch (error) {
    // обработать ошибку
    }
    }
    
    // Сторона сервера (Node.js)
    
    const express = require("express")
    const app = express()
    const port = 3000
    
    app.use(express.json())
    
    // Обработчик POST-запроса
    app.post("/calculate", (req, res) => {
    const { operation, operands } = req.body
    
    // выполнить математическую операцию над операндами
    let result
    switch (operation) {
    case "A + B":
    result = operands.reduce((a, b) => a + b)
    break
    case "A - B":
    result = operands.reduce((a, b) => a - b)
    break
    case "A * B":
    result = operands.reduce((a, b) => a * b)
    break
    case "A / B":
    result = operands.reduce((a, b) => a / b)
    break
    default:
    result = "Invalid operation"
    }
    
    res.json({ result })
    })
    
    // Обработчик GET-запроса
    app.get("/calc", (req, res) => {
    const { a, b, op } = req.query
    
    // выполнить математическую операцию над значениями a и b
    let result
    switch (op) {
    case "plus":
    result = Number(a) + Number(b)
    break
    case "minus":
    result = Number(a) - Number(b)
    break
    case "multiply":
    result = Number(a) * Number(b)
    break
    case "divide":
    result = Number(a) / Number(b)
    break
    default:
    result = "Invalid operation"
    }
    
    res.json({ result })
    })
    
    app.listen(port, () => {
    })