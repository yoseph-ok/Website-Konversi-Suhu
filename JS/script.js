function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultElement = document.getElementById('result');
    const formulaElement = document.getElementById('formula');

    // Cek apakah input adalah kosong atau terdiri dari karakter non-numerik
    const nonNumericPattern = /[^0-9.-]/;

    if (temperature === '') {
        resultElement.innerText = 'Mohon masukan suhu.';
        formulaElement.value = '';
        return;
    }

    if (nonNumericPattern.test(temperature)) {
        resultElement.innerText = 'Input tidak sesuai. Mohon masukan hanya angka.';
        formulaElement.value = '';
        return;
    }
    
    // Fungsi Konversi
    let result;
    let formula;
    if (conversionType === 'cToF') {
        result = (parseFloat(temperature) * 9/5) + 32;
        formula = `Rumus: (${temperature}°C × 9/5) + 32 = ${result.toFixed(2)}°F`;
        resultElement.innerText = `${temperature}°C adalah ${result.toFixed(2)}°F`;
    } else {
        result = (parseFloat(temperature) - 32) * 5/9;
        formula = `Rumus: (${temperature}°F - 32) × 5/9 = ${result.toFixed(2)}°C`;
        resultElement.innerText = `${temperature}°F adalah ${result.toFixed(2)}°C`;
    }

    formulaElement.value = formula;
}

// Fungsi hapus input dan output
function resetFields() {
    document.getElementById('temperature').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('formula').value = '';
}
