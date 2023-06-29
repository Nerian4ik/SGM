document.getElementById('brand').addEventListener('change', function() {
    var brand = this.value;
    var modelSelect = document.getElementById('model');
    modelSelect.innerHTML = ''; // очистить список моделей

    var models;
    if (brand === 'mazda') {
        models = ['3', '6', 'CX-5', 'CX-9'];
    } else if (brand === 'ford') {
        models = ['Fiesta', 'Focus', 'Mustang', 'Explorer'];
    }

    for (var i = 0; i < models.length; i++) {
        var option = document.createElement('option');
        option.value = models[i];
        option.text = models[i];
        modelSelect.appendChild(option);
    }

    // Показать выбор модели и типа кузова после выбора марки
    modelSelect.classList.remove('hidden');
    document.getElementById('bodyType').classList.remove('hidden');
});

document.getElementById('bodyType').addEventListener('click', function() {
    // Показать результаты после выбора типа кузова
    document.getElementById('results').classList.remove('hidden');
});