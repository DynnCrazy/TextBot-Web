const botName = "Text Bot"
const botDesc = "Bot yang memberikan informasi tentang gampa bumi terbaru, prakiraan cuaca di wilayah Indonesia, fakta tentang fenomena alam, dan lain-lain."
const thisYear = "2024"
const botProfil = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiaBGt7oKPh1TwnB53ayTLW6It5KeuPi_t-aHRstfm39PK6bP0SzubGBPQx0wzSfCWimBD_rMQPKJYIrx00rEPpIWdWWJ8jsSKKVBVBHlYFvFQhKYX7ZO21tjx2_rIeMYrn5gk6Y6cVfuokOcWadKK4QgQuZ9HiXk_sUCQowSr4u3uWqfP16PkF3RsaA/s3264/1000084740.png"

document.getElementById("botprofilimg").src = botProfil;
document.getElementById("botprofilimg").alt = botName;
document.getElementById("ttlthebot").innerHTML =  botName.toUpperCase();
document.getElementById("descthebot").innerHTML = botDesc;
document.getElementById("exgteam").innerHTML =  `&copy; Exagons Team ${thisYear}`;