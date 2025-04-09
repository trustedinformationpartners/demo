const demoConfig = {
    totalSteps: 12
};

class DemoManager {
    constructor() {
        this.huidigeStap = 1;
        this.totaalAantalStappen = demoConfig.totalSteps;
        this.stappenContainer = document.body;
    }
    
    initialiseer() {
        this.leesStapUitUrl();
        this.verbergOngebruikteStappen();
        this.toonStap(this.huidigeStap);
        this.voegEventListenersToe();
        this.styleerKnoppen();
        
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                window.location.reload();
            }
        });
    }
    
    leesStapUitUrl() {
        const hash = window.location.hash;
        const stapUitHash = hash ? parseInt(hash.replace('#', ''), 10) : 1;
        
        if (stapUitHash > 0 && stapUitHash <= this.totaalAantalStappen) {
            this.huidigeStap = stapUitHash;
        }
    }
    
    verbergOngebruikteStappen() {
        for (let i = this.totaalAantalStappen + 1; i <= 15; i++) {
            const stapElement = document.getElementById(`stap-${i}`);
            if (stapElement) {
                stapElement.style.display = 'none';
            }
        }
    }
    
    voegEventListenersToe() {
        this.stappenContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('next')) {
                const doelStap = e.target.getAttribute('data-go-step');
                if (doelStap) {
                    this.gaNaarStap(parseInt(doelStap, 10));
                } else {
                    this.gaNaarStap(this.huidigeStap + 1);
                }
            } else if (e.target.classList.contains('prev')) {
                this.gaNaarStap(this.huidigeStap - 1);
            } else if (e.target.classList.contains('register-button')) {
                this.gaNaarStap(this.huidigeStap + 1);
            }
        });
    }
    
    styleerKnoppen() {
        document.querySelectorAll('.next').forEach(button => {
            button.innerHTML = 'Volgende stap <i class="fas fa-arrow-right"></i>';
        });
        
        document.querySelectorAll('.prev').forEach(button => {
            button.innerHTML = '<i class="fas fa-arrow-left"></i> Vorige stap';
        });
    }
    
    gaNaarStap(stapNummer) {
        if (stapNummer > 0 && stapNummer <= this.totaalAantalStappen) {
            this.huidigeStap = stapNummer;
            this.toonStap(this.huidigeStap);
            window.location.hash = `#${this.huidigeStap}`;
        }
    }
    
    toonStap(stapNummer) {
        document.querySelectorAll('.stap').forEach((section) => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        const teTonenStap = document.getElementById(`stap-${stapNummer}`);
        if (teTonenStap) {
            teTonenStap.classList.add('active');
            teTonenStap.style.display = 'block';
        }
        
        window.scrollTo(0, 0);
        this.beheerKnoppen();
    }
    
    beheerKnoppen() {
        this.beheerVorigeKnop();
        this.beheerVolgendeKnop();
    }
    
    beheerVorigeKnop() {
        const vorigeKnop = document.querySelector(`#stap-${this.huidigeStap} .prev`);
        if (this.huidigeStap === 1 && vorigeKnop) {
            vorigeKnop.style.display = 'none';
        } else if (vorigeKnop) {
            vorigeKnop.style.display = 'inline-block';
        }
    }
    
    beheerVolgendeKnop() {
        const volgendeKnop = document.querySelector(`#stap-${this.huidigeStap} .next`);
        const knoppenContainer = document.querySelector(`#stap-${this.huidigeStap} .button-container`);
        
        if (this.huidigeStap === this.totaalAantalStappen) {
            if (volgendeKnop) {
                volgendeKnop.style.display = 'none';
            }
            
            this.voegEindeKnoppenToe(knoppenContainer);
        } else if (volgendeKnop) {
            volgendeKnop.style.display = 'inline-block';
        }
    }
    
    voegEindeKnoppenToe(container) {
        if (!document.querySelector('.go-example') && !document.querySelector('.go-home')) {
            const demosKnop = document.createElement('button');
            demosKnop.innerHTML = '<i class="fas fa-play"></i> Naar demos';
            demosKnop.className = 'go-example';
            demosKnop.onclick = () => window.location.href = '${baseUrl}/examples';
            
            const homeKnop = document.createElement('button');
            homeKnop.innerHTML = '<i class="fas fa-home"></i> Terug naar hoofdwebsite';
            homeKnop.className = 'go-home';
            homeKnop.onclick = () => window.location.href = '${baseUrl}';
            
            container.appendChild(demosKnop);
            container.appendChild(homeKnop);
        }
    }
}

class HandelingsomgevingManager {
    constructor(buttonSelector, loginBlockSelector, newCustomerBlockSelector, buttonContainerSelector, qrCodeContainerSelector) {
        this.handelingsButton = document.querySelector(buttonSelector);
        this.loginBlock = document.querySelector(loginBlockSelector);
        this.newCustomerBlock = document.querySelector(newCustomerBlockSelector);
        this.buttonContainer = document.querySelector(buttonContainerSelector);
        this.qrCodeContainer = document.getElementById(qrCodeContainerSelector);
    }
    
    initialiseer() {
        if (this.handelingsButton && this.loginBlock && this.newCustomerBlock && this.qrCodeContainer) {
            this.handelingsButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.loginBlock.style.display = 'none';
                this.newCustomerBlock.style.display = 'none';
                this.qrCodeContainer.style.display = 'block';
                this.buttonContainer.style.display = 'flex';
            });
        }
    }
}

function toggleCustomTypeInput() {
    const organisatieType = document.getElementById('organisatie-type').value;
    const customTypeContainer = document.getElementById('custom-type-container');

    if (organisatieType === 'Other') {
        customTypeContainer.style.display = 'flex';
    } else {
        customTypeContainer.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const exclusiveCheckboxes = document.querySelectorAll('input.exclusive[type="checkbox"]');
    exclusiveCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                const name = checkbox.getAttribute('name');
                const checkboxes = document.querySelectorAll(`input.exclusive[name="${name}"]`);
                checkboxes.forEach((cb) => {
                    if (cb !== checkbox) {
                        cb.checked = false;
                    }
                });
            }
        });
    });

    let emailCount = 1;
    const addEmailButton = document.getElementById('add-email-button');
    if (addEmailButton) {
        addEmailButton.addEventListener('click', () => {
            emailCount++;
            const emailTable = document.getElementById('email-table').querySelector('tbody');
            const addEmailRow = document.getElementById('add-email-row');

            if (!addEmailRow || !emailTable.contains(addEmailRow)) {
                return;
            }

            const emailRow = document.createElement('tr');
            emailRow.id = `email-row-${emailCount}`;

            const labelCell = document.createElement('td');
            const label = document.createElement('label');
            label.setAttribute('for', `email-${emailCount}`);
            label.innerText = `E-mailadres bevoegd vertegenwoordiger:`;
            labelCell.appendChild(label);

            const inputCell = document.createElement('td');
            const input = document.createElement('input');
            input.setAttribute('type', 'email');
            input.setAttribute('id', `email-${emailCount}`);
            input.setAttribute('name', `email-${emailCount}`);
            input.setAttribute('placeholder', 'Vul een e-mailadres in');
            inputCell.appendChild(input);

            emailRow.appendChild(labelCell);
            emailRow.appendChild(inputCell);

            emailTable.insertBefore(emailRow, addEmailRow);
        });
    }

    const demoManager = new DemoManager();
    demoManager.initialiseer();
    
    const handelingsomgeving1 = new HandelingsomgevingManager(
        '.handelingsomgeving-button1',
        '.login-block1',
        '.new-customer-block1',
        '.button-container1',
        'qr-code-container1'
    );
    
    const handelingsomgeving2 = new HandelingsomgevingManager(
        '.handelingsomgeving-button2',
        '.login-block2',
        '.new-customer-block2',
        '.button-container2',
        'qr-code-container2'
    );
    
    handelingsomgeving1.initialiseer();
    handelingsomgeving2.initialiseer();
});