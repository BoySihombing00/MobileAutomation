# MobileTest

Pengujian Mobile adalah proses di mana perangkat lunak aplikasi yang dikembangkan untuk perangkat seluler genggam diuji fungsionalitasnya, kegunaannya, dan konsistensinya.

## Description
Dalam project ini saya akan Mengotomatiskan Aplikasi Asli Android dengan Appium Menggunakan WebdriverIO dan menghasilkan Allure Report menggunakan java script.

## Setup Environment
- [ ] Download and install java jdk
- [ ] Install Node.js
- [ ] Install Android Studio
- [ ] Install Appium desktop application
- [ ] Install tool editor ex Inteliji IDE

## Test

Pada pengujian ini saya menggunakan aplikasi saucelabs, aplikasi demo test yang 
mempunyai fitur seperti ecommerce,
pada test ini sayang hanya menjalankan dua scenario yaitu positive dan negative
- Positive, menginput username dan password yang benar, jika berhasil masuk akan memverify kata product
- Negative, Menginput username dan password yang salah, jika gagal akan memverify alert error

Dan hasil dari pengujian ini bisa di report dengan menjalankan command line
```
npx allure serve allure-results
```

Demikian penjelasan singkat project mobile testing

Terimakasih...