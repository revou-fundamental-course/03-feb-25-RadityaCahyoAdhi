let isConvertToFahrenheit = true;
const penjelasanCelciusToFahrenheit = 
                    `<p>Suhu <span class="remark"><i>S</i></span> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <span class="remark"><i>S</i></span> dalam derajat Celsius (&deg;C) kali <span class="remark">9/5</span> tambah <span class="remark">32</span></p>
                    
                    <p class="remark"><i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C)</sub> x 9/5) + 32</p>
                    <p>atau</p>
                    <p class="remark"><i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C)</sub> x 1.8) + 32</p>`;
const penjelasanFahrenheitToCelcius =
                    `<p>Suhu <span class="remark"><i>S</i></span> dalam derajat Celcius (&deg;C) sama dengan suhu <span class="remark"><i>S</i></span> dalam derajat Fahrenheit (&deg;F) dikurangi <span class="remark">32</span> kali <span class="remark">5/9</span></p>
                    
                    <p class="remark"><i>S</i><sub>(&deg;C)</sub> = (<i>S</i><sub>(&deg;F)</sub> - 32) x 5/9</p>
                    <p>atau</p>
                    <p class="remark"><i>S</i><sub>(&deg;C)</sub> = (<i>S</i><sub>(&deg;F)</sub> - 32) / 1.8</p>`;

function konversiSuhu() {
    const input = document.getElementById('main-input').value;

    if (input === '' || isNaN(input)) {
        alert('Tolong input angka suhu yang ingin dikonversi');
    } else {
        if (isConvertToFahrenheit) {
            convertToFahrenheit(input);
        } else {
            convertToCelcius(input);
        }
    }
}

function convertToFahrenheit(input) {
    result = (input * 9/5) + 32;
    document.getElementById('main-result').value = result;
    document.getElementById('cara-konversi').value = caraCelciusToFahrenheit(input, result);
}

function caraCelciusToFahrenheit(input, result) {
    return `${input}°C * (9/5) + 32 = ${result}°F`;
}

function convertToCelcius(input) {
    result = (input - 32) * 5/9;
    document.getElementById('main-result').value = result;
    document.getElementById('cara-konversi').value = caraFahrenheitToCelcius(input, result);
}

function caraFahrenheitToCelcius(input, result) {
    return `(${input}°F - 32) * (5/9) = ${result}°C`;
}

function resetSuhu() {
    document.getElementById('main-input').value = '';
    document.getElementById('main-result').value = '';
    document.getElementById('cara-konversi').value = '';
}

function reverseSuhu() {
    isConvertToFahrenheit = !isConvertToFahrenheit;
    resetSuhu();
    if (isConvertToFahrenheit) {
        document.querySelector('label[for="main-input"]').innerHTML = "Celcius (&deg;C):";
        document.querySelector('label[for="main-result"]').innerHTML = "Fahrenheit (&deg;F):";
        document.getElementById('judul-penjelasan-konversi').innerHTML = "Cara Konversi Dari Celsius (&deg;C) ke Fahrenheit (&deg;F)";
        document.getElementById('penjelasan-konversi').innerHTML = penjelasanCelciusToFahrenheit;
    } else {
        document.querySelector('label[for="main-input"]').innerHTML = "Fahrenheit (&deg;F):";
        document.querySelector('label[for="main-result"]').innerHTML = "Celcius (&deg;C):";
        document.getElementById('judul-penjelasan-konversi').innerHTML = "Cara Konversi Dari Fahrenheit (&deg;F) ke Celsius (&deg;C)";;
        document.getElementById('penjelasan-konversi').innerHTML = penjelasanFahrenheitToCelcius;
    }
}