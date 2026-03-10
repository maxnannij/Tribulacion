document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DE ACTUALIZACIÓN DE ESTADÍSTICAS ---
    function updateSheet() {
        let statMods = {};
        const statInputs = document.querySelectorAll('.stat-score');
        
        statInputs.forEach(input => {
            const statName = input.getAttribute('data-stat');
            const score = parseInt(input.value) || 0;
            statMods[statName] = score;
        });

        const skills = document.querySelectorAll('.skill-roll-btn');
        skills.forEach(skillBtn => {
            const stat = skillBtn.getAttribute('data-stat'); 
            const modDisplay = skillBtn.querySelector('.skill-mod');
            
            let totalMod = statMods[stat] || 0;
            skillBtn.setAttribute('data-current-mod', totalMod);
            modDisplay.textContent = totalMod >= 0 ? `+${totalMod}` : totalMod;
        });
    }

    document.querySelectorAll('.stat-score').forEach(input => {
        input.addEventListener('input', updateSheet);
    });
    
    updateSheet();

    // --- 2. SISTEMA DE ACCIONES (Puntos/Círculos interactivos) ---
    const actionDots = document.querySelectorAll('.action-dot');
    actionDots.forEach(dot => {
        dot.addEventListener('click', () => {
            dot.classList.toggle('spent');
        });
    });

    // --- 3. LANZAR DADOS DE HABILIDAD ---
    document.querySelectorAll('.skill-roll-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const skillName = btn.getAttribute('data-skill-name');
            const mod = parseInt(btn.getAttribute('data-current-mod')) || 0;
            
            let sign = mod >= 0 ? '+' : ''; 
            let formula = `1d20${sign}${mod}`;
            
            rollDice(`Tirada de ${skillName}`, formula);
        });
    });

    // --- 4. BOTONES DE INFORMACIÓN DE HABILIDAD (NUEVO) ---
    const infoModal = document.getElementById('info-modal');
    const infoModalTitle = document.getElementById('info-modal-title');
    const infoModalDesc = document.getElementById('info-modal-desc');
    const closeInfoBtn = document.getElementById('close-info-modal');

    // Cerrar info modal
    closeInfoBtn.addEventListener('click', () => infoModal.classList.add('hidden'));
    window.addEventListener('click', (e) => { if (e.target === infoModal) infoModal.classList.add('hidden'); });

    document.querySelectorAll('.info-btn').forEach(infoBtn => {
        infoBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se tire el dado al tocar la "i"
            
            // Buscar el nombre de la habilidad en el botón padre
            const parentLi = e.target.closest('li');
            const skillName = parentLi.getAttribute('data-skill-name');
            const desc = e.target.getAttribute('data-desc');

            infoModalTitle.textContent = skillName;
            infoModalDesc.textContent = desc;
            infoModal.classList.remove('hidden');
        });
    });

    // --- 5. CREADOR DE BOTONES DE ACCIÓN ---
    const addBtn = document.getElementById('add-action-btn');
    const container = document.getElementById('custom-actions-container');

    addBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('new-action-name');
        const diceInput = document.getElementById('new-action-dice');
        
        const name = nameInput.value.trim();
        const diceFormula = diceInput.value.trim().toLowerCase();

        if (name === "" || diceFormula === "") {
            alert("Por favor, escribe un nombre y una fórmula (ej: 1d20+fue o 1d8+3)");
            return;
        }

        // Crear contenedor (Píldora)
        const wrapper = document.createElement('div');
        wrapper.className = 'action-wrapper';

        // Botón principal de tirar dados
        const newBtn = document.createElement('button');
        newBtn.className = 'action-btn';
        newBtn.textContent = name;
        newBtn.setAttribute('data-dice', diceFormula);
        newBtn.addEventListener('click', () => {
            rollDice(name, diceFormula);
        });

        // Botón rojo (X) de eliminar
        const delBtn = document.createElement('button');
        delBtn.className = 'action-del-btn';
        delBtn.innerHTML = '&times;';
        delBtn.addEventListener('click', () => {
            wrapper.remove(); // Borra el botón de la web
        });

        // Ensamblar
        wrapper.appendChild(newBtn);
        wrapper.appendChild(delBtn);
        container.appendChild(wrapper);
        
        nameInput.value = "";
        diceInput.value = "";
    });


    // --- 6. MOTOR VIRTUAL DE DADOS (Actualizado para leer texto) ---
    const diceModal = document.getElementById('dice-modal');
    const diceModalTitle = document.getElementById('modal-title');
    const diceAnimContainer = document.getElementById('dice-animation-container');
    const diceIcon = document.querySelector('.dice-icon');
    const resultContainer = document.getElementById('dice-result-container');
    const diceTotal = document.getElementById('dice-total');
    const diceDetails = document.getElementById('dice-details');
    const closeDiceBtn = document.getElementById('close-modal');

    closeDiceBtn.addEventListener('click', () => diceModal.classList.add('hidden'));
    window.addEventListener('click', (e) => { if (e.target === diceModal) diceModal.classList.add('hidden'); });

    function rollDice(actionName, formula) {
        // Expresión regular mejorada para permitir letras (Ej: 1d20+fue)
        const regex = /^(\d+)d(\d+)(?:\s*([\+\-])\s*([a-zA-Z]+|\d+))?$/i;
        const match = formula.replace(/\s+/g, '').match(regex);

        if (!match) {
            alert(`Fórmula no válida: ${formula}\nUsa un formato como: 1d20, 1d20+fue, 2d6+3`);
            return;
        }

        const numDice = parseInt(match[1]); 
        const sides = parseInt(match[2]);   
        const sign = match[3];              
        const modRaw = match[4]; // Puede ser un número "3" o un texto "fue"
        
        let mod = 0;

        // Lógica para detectar si escribiste un atributo (fue, des, int, car, vol)
        if (modRaw) {
            if (!isNaN(modRaw)) {
                mod = parseInt(modRaw); // Era un número normal
            } else {
                // Era un texto, buscar a qué estadística pertenece
                const statMap = { 'fue': 'str', 'des': 'dex', 'int': 'int', 'car': 'cha', 'vol': 'vol' };
                const statKey = statMap[modRaw.toLowerCase()];
                
                if (statKey) {
                    // Extraer el valor actual de esa estadística en la hoja
                    mod = parseInt(document.querySelector(`[data-stat="${statKey}"]`).value) || 0;
                } else {
                    alert(`El atributo "${modRaw}" no existe. Escribe: fue, des, int, car o vol.`);
                    return;
                }
            }
        }

        diceModalTitle.textContent = actionName;
        resultContainer.classList.add('hidden');
        diceAnimContainer.classList.remove('hidden');
        diceIcon.classList.add('shake-anim');
        diceModal.classList.remove('hidden');

        let rolls = [];
        let sumRolls = 0;
        
        for (let i = 0; i < numDice; i++) {
            const roll = Math.floor(Math.random() * sides) + 1;
            rolls.push(roll);
            sumRolls += roll;
        }

        let finalTotal = sumRolls;
        let modString = "";
        
        if (sign === '+') { finalTotal += mod; modString = ` + ${mod}`; }
        if (sign === '-') { finalTotal -= mod; modString = ` - ${mod}`; }

        setTimeout(() => {
            diceIcon.classList.remove('shake-anim');
            diceAnimContainer.classList.add('hidden');
            resultContainer.classList.remove('hidden');

            diceTotal.textContent = finalTotal;
            diceDetails.textContent = `[ ${rolls.join(', ')} ] ${modString}`;
            
            if (sides === 20 && numDice === 1) {
                if (rolls[0] === 20) diceTotal.style.color = "#008000"; 
                else if (rolls[0] === 1) diceTotal.style.color = "#ff0000"; 
                else diceTotal.style.color = "var(--primary-color)";
            } else {
                diceTotal.style.color = "var(--primary-color)";
            }
        }, 800); 
    }
});
