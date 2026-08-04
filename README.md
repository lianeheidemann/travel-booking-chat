<p align="center">
  <img src="assets\logo\brand-logo.png" alt="Viajar - Reservas de Viagem" width="220">
</p>

<p align='center'>
  <img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black' alt='JavaScript'>
  <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white' alt='HTML5'>
  <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css3&amp;logoColor=white' alt='CSS3'><br>
  <a href='https://github.com/lianeheidemann/travel-booking-chatbot/actions/workflows/tests.yml'>
    <img src='https://github.com/lianeheidemann/travel-booking-chatbot/actions/workflows/tests.yml/badge.svg' alt='Tests'>
  </a>
</p>
  
Simple rule-based chatbot that simulates a travel agency assistant.  
The user is guided through a step-by-step flow to collect booking information and view a live reservation summary.

---

## General Information

This project is a frontend exercise built with JavaScript.

It demonstrates:
- DOM manipulation
- Modular JavaScript 
- Basic input validation using keyword matching
- Simple conversational flow logic

The chatbot collects travel information step by step and updates a reservation summary in real time.

---

## Technologies

- HTML5  
- CSS3  
- JavaScript (ES Modules)
- Vitest (unit tests)
- GitHub Actions (CI)

---

## Features

- Step-by-step conversational flow  
- Keyword-based validation system  
- Live reservation summary  

---

## How to Run

This project uses ES Modules, so opening `index.html` directly via `file://` will be blocked by CORS in most browsers. Serve it with a local server instead, for example:

- VS Code: install the **Live Server** extension, right-click `index.html` and choose "Open with Live Server"
- Or via terminal:
  ```bash
  npx serve
  ```

---

## Tests

Unit tests cover the answer-validation logic (`logic.js`) using [Vitest](https://vitest.dev).

```bash
npm install
npm test
```

A GitHub Actions workflow runs this suite automatically on every push and pull request to `main`.

---

## Demonstration

### Desktop
<img src="assets\gif e video\demonstracao-v2.gif" alt="Tela mobile"><br>

### Mobile
<img src="assets\gif e video\demonstracao-v2_mobile.gif" alt="Tela mobile"><br>

---

<p align='center'>Developed by Liane Heidemann<p>
