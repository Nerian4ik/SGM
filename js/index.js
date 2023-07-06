window.onload = function() {
    document.body.classList.add('loaded');
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
          buttons[i].classList.add('btn-gray');
        }
        // Делаем активной нажатую кнопку
        event.target.classList.remove('btn-gray');
        event.target.classList.add('active');
        // Показать зоны обработки и выбор размера листа после выбора типа кузова
        document.getElementById('processingZones').classList.remove('d-none');
        document.getElementById('sheetSize').classList.remove('d-none');
      }
    });
  
    document.getElementById('sheetSize').addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
        // Снимаем активность со всех кнопок
        var buttons = this.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('active');
          buttons[i].classList.add('btn-gray');
        }
        // Делаем активной нажатую кнопку
        event.target.classList.remove('btn-gray');
        event.target.classList.add('active');
        // Показать выбор качества после выбора размера листа
        document.getElementById('quality').classList.remove('d-none');
      }
    });
  
    // Новый код
    // Обработка клика по зоне установки
    document.getElementById('processingZones').addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
          event.target.classList.toggle('active');
          event.target.classList.toggle('btn-gray');
          updateQualityBlocks();
        }
      });
    
      // Обновление блоков Премиум, Стандарт и Эконом
      function updateQualityBlocks() {
        var activeZones = document.getElementById('processingZones').getElementsByClassName('active');
        var qualityBlocks = document.getElementById('quality').getElementsByClassName('card-body');
        var materials = ['SGM Альфа', 'SGM Beta', 'SGM Base'];
        var zoneMaterials = {
          'Капот': 4,
          'Крышка багажника': 4,
          'Пол': 24,
          'Двери': [
            {name: 'Внутрь дверей, 4 двери', sheets: 16 },
            {name: 'Тех. отверстия в дверях + пластиковые обшивки, 4 двери', sheets: 12}
          ],
          'Багажник': [
            {name: 'Пол багажника', sheets: 14}, 
            {name: 'Крышка багажника', sheets: 4}
          ],
          'Арки (внешняя обработка)': [
            { name: 'Арки со стороны улицы (металл арок)', sheets: 14 },
            { name: 'Пластиковые подкрылки, 4 арки', sheets: 12 }
          ],
          'Крыша': 24,
          'Перегородка мотороного отсека' : 12, 
        };
    
        for (var i = 0; i < qualityBlocks.length; i++) {
          var block = qualityBlocks[i];
          block.innerHTML = ''; // очистить блок
    
          for (var j = 0; j < activeZones.length; j++) {
            var zone = activeZones[j].textContent;
            var zoneMaterial = zoneMaterials[zone];
    
            if (Array.isArray(zoneMaterial)) {
              for (var k = 0; k < zoneMaterial.length; k++) {
                var p = document.createElement('p');
                p.className = 'card-text';
                p.textContent = zoneMaterial[k].name + ' - ' + zoneMaterial[k].sheets + ' листов ' + materials[i];
                block.appendChild(p);
              }
            } else {
              var p = document.createElement('p');
              p.className = 'card-text';
              p.textContent = zone + ' - ' + zoneMaterial + ' листов ' + materials[i];
              block.appendChild(p);
            }
          }
        }
      }
    };