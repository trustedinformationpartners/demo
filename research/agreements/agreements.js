const demoConfig = {
    totalStappen: 7
};

class DemoManager {
    constructor() {
        this.huidigeStap = 1;
        this.totaalAantalStappen = demoConfig.totalStappen;
        this.stappenContainer = document.body;
    }
    
    initialiseer() {
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
    
    verbergOngebruikteStappen() {
        for (let i = this.totaalAantalStappen + 1; i <= 8; i++) {
            const stapElement = document.getElementById(`stap-${i}`);
            if (stapElement) {
                stapElement.style.display = 'none';
            }
        }
    }
    
    voegEventListenersToe() {
        this.stappenContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('next')) {
                this.gaNaarStap(this.huidigeStap + 1);
            } else if (e.target.classList.contains('prev')) {
                this.gaNaarStap(this.huidigeStap - 1);
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
            const onderzoekKnop = document.createElement('button');
            onderzoekKnop.innerHTML = '<i class="fas fa-lightbulb"></i> Naar onderzoek';
            onderzoekKnop.className = 'go-example';
            onderzoekKnop.onclick = () => window.location.href = '${baseUrl}/research';
            
            const homeKnop = document.createElement('button');
            homeKnop.innerHTML = '<i class="fas fa-home"></i> Terug naar hoofdwebsite';
            homeKnop.className = 'go-home';
            homeKnop.onclick = () => window.location.href = '${baseUrl}/';
            
            container.appendChild(onderzoekKnop);
            container.appendChild(homeKnop);
        }
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
    
    const demoManager = new DemoManager();
    demoManager.initialiseer();
});