document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DE ACTUALIZACIÓN DE ESTADÍSTICAS ---
    function updateSheet() {
        let statMods = {};
        const statInputs = document.querySelectorAll('.stat-score');
        
        // El valor de la estadística ES el número que se suma (sin fórmulas extras)
        statInputs.forEach(input => {
            const statName = input.getAttribute('data-stat');
            const score = parseInt(input.value) || 0;
            statMods[statName] = score;
        });

        // Actualizar valores de Habilidades (es igual al valor puro del atributo)
        const skills = document.querySelectorAll('.skill-roll-btn');
        skills.forEach(skillBtn => {
            const stat = skillBtn.getAttribute('data-stat'); 
            const modDisplay = skillBtn.querySelector('.skill-mod');
            
            let totalMod = statMods[stat] || 0;
            
            // Guardar el número dentro del botón
            skillBtn.setAttribute('data-current-mod', totalMod);
            
            // Mostrar en pantalla
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
            // Quita o pone la clase "spent" que lo tiñe de rojo
            dot.classList.toggle('spent');
        });
    });

    // --- 3. LANZAR DADOS AL HACER CLIC EN UNA HABILIDAD ---
    document.querySelectorAll('.skill-roll-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const skillName = btn.getAttribute('data-skill-name');
            const mod = parseInt(btn.getAttribute('data-current-mod')) || 0;
            
            let sign = mod >= 0 ? '+' : ''; 
            let formula = `1d20${sign}${mod}`;
            
            rollDice(`Tirada de ${skillName}`, formula);
        });
    });


    // --- 4. CREADOR DE BOTONES DE ACCIÓN (Ataques) ---
    const addBtn = document.getElementById('add-action-btn');
    const container = document.getElementById('custom-actions-container');

    addBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('new-action-name');
        const diceInput = document.getElementById('new-action-dice');
        
        const name = nameInput.value.trim();
        const diceFormula = diceInput.value.trim().toLowerCase();

        if (name === "" || diceFormula === "") {
            alert("Por favor, escribe un nombre y una fórmula (ej: 1d20+5)");
            return;
        }

        const newBtn = document.createElement('button');
        newBtn.className = 'action-btn';
        newBtn.textContent = name;
        newBtn.setAttribute('data-dice', diceFormula);
        
        newBtn.addEventListener('click', () => {
            rollDice(name, diceFormula);
        });

        container.appendChild(newBtn);
        nameInput.value = "";
        diceInput.value = "";
    });


    // --- 5. MOTOR VIRTUAL DE DADOS Y ANIMACIÓN ---
    const modal = document.getElementById('dice-modal');
    const modalTitle = document.getElementById('modal-title');
    const diceAnimContainer = document.getElementById('dice-animation-container');
    const diceIcon = document.querySelector('.dice-icon');
    const resultContainer = document.getElementById('dice-result-container');
    const diceTotal = document.getElementById('dice-total');
    const diceDetails = document.getElementById('dice-details');
    const closeBtn = document.getElementById('close-modal');

    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

    function rollDice(actionName, formula) {
        const regex = /^(\d+)d(\d+)(?:\s*([\+\-])\s*(\d+))?$/i;
        const match = formula.replace(/\s+/g, '').match(regex);

        if (!match) {
            alert(`Fórmula no válida: ${formula}\nUsa un formato como: 1d20, 2d6+3, 1d8-1`);
            return;
        }

        const numDice = parseInt(match[1]); 
        const sides = parseInt(match[2]);   
        const sign = match[3];              
        const mod = parseInt(match[4] || 0);

        modalTitle.textContent = actionName;
        resultContainer.classList.add('hidden');
        diceAnimContainer.classList.remove('hidden');
        diceIcon.classList.add('shake-anim');
        modal.classList.remove('hidden');

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
