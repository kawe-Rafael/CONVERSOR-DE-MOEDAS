const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currencySelect")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyValeuToConvert = document.querySelector(".currency-valeu-to-convert") // valor real
    const currencyValeuToConverted = document.querySelector(".currency-valeu") // outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.5
    const bitcoinToday = 320000 // valor fictício para 1 BTC em reais

    if (currencySelect.value == "dolar") {
        currencyValeuToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValeuToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValeuToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValeuToConverted.innerHTML = (inputCurrencyValue / bitcoinToday).toFixed(6) + " BTC"
    }

    currencyValeuToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/DOLAR.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/EURO.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/LIBRA.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/BITCOIN.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
