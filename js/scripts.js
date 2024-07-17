document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    const bmi = weight / ((height / 100) ** 2);
    const bmiValue = bmi.toFixed(1);
    
    let category;
    if (bmi < 18.5) {
        category = 'Kurus';
    } else if (bmi < 25) {
        category = 'Normal';
    } else if (bmi < 30) {
        category = 'Gemuk';
    } else {
        category = 'Obesitas';
    }
    
    document.getElementById('bmiValue').textContent = `BMI: ${bmiValue}`;
    document.getElementById('bmiCategory').textContent = `Kategori: ${category}`;
    
    const genderText = gender === 'male' ? 'Laki-laki' : 'Perempuan';
    document.getElementById('explanation').innerHTML = `
        <h3>Penjelasan:</h3>
        <p>BMI (Body Mass Index) adalah ukuran yang digunakan untuk menilai apakah berat badan Anda ideal atau tidak.</p>
        <p>Untuk ${genderText}, BMI Anda adalah ${bmiValue} yang termasuk dalam kategori "${category}".</p>
        <p>Kategori BMI:</p>
        <ul>
            <li>Kurus: < 18.5</li>
            <li>Normal: 18.5 - 24.9</li>
            <li>Gemuk: 25 - 29.9</li>
            <li>Obesitas: ≥ 30</li>
        </ul>
        <p>BMI hanya salah satu indikator kesehatan. Konsultasikan dengan dokter untuk evaluasi yang lebih komprehensif.</p>
    `;
  });