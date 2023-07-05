document.getElementById('brand').addEventListener('change', function() {
    var brand = this.value;
    var modelSelect = document.getElementById('model');
    modelSelect.innerHTML = ''; // очистить список моделей

    var models;
    if (brand === 'mazda') {
        models = ['Mazda3', 'Mazda6', 'CX-5', 'CX-9'];
    } else if (brand === 'ford') {
        models = ['Fiesta', 'Focus', 'Mustang', 'Explorer'];
    }

    for (var i = 0; i < models.length; i++) {
        var option = document.createElement('option');
        option.value = models[i];
        option.text = models[i];
        modelSelect.appendChild(option);
    }

    // Показать выбор модели после выбора марки
    modelSelect.classList.remove('d-none');
});

document.getElementById('model').addEventListener('change', function() {
    // Показать выбор типа кузова после выбора модели
    document.getElementById('bodyType').classList.remove('d-none');
});

document.getElementById('bodyType').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        // Снимаем активность со всех кнопок
        var buttons = this.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        // Делаем активной нажатую кнопку
        event.target.classList.add('active');
        // Показать зоны обработки и выбор размера листа после выбора типа кузова
        document.getElementById('processingZones').classList.remove('d-none');
        document.getElementById('sheetSize').classList.remove('d-none');
    }
});

document.getElementById('processingZones').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.classList.toggle('active');
    }
});

document.getElementById('sheetSize').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        // Снимаем активность со всех кнопок
        var buttons = this.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        // Делаем активной нажатую кнопку
        event.target.classList.add('active');
        // Показать выбор качества после выбора размера листа
        document.getElementById('quality').classList.remove('d-none');
    }
});