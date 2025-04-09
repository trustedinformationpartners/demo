const scanButton = document.getElementById('scan-button');
const closeScanButton = document.getElementById('close-scan-button');
const readerDiv = document.getElementById('reader');
const floatingQrButton = document.getElementById('qr-scan-button');
const addCardScreen = document.getElementById('add-card-screen');

const walletGrid = document.getElementById('wallet-grid');
const detailsView = document.getElementById('details');
const detailsTitle = document.getElementById('details-title');
const detailsContent = document.getElementById('details-content');
const closeDetailsBtn = document.getElementById('close-details');
const deleteDetailsBtn = document.getElementById('delete-details');
const walletScreen = document.getElementById('wallet-screen');

const menuScreen = document.getElementById('menu-screen');
const menuButton = document.querySelector('.menu-button');
const backMenuBtn = document.getElementById('back-menu-btn');
const activitiesNavbarItem = document.getElementById('activities-navbar-item');
const overviewNavbarItem = document.getElementById('overview-navbar-item');
const bottomNav = document.querySelector('.bottom-nav');
const machtigingNavbarItem = document.getElementById('machtigingen-navbar-item'); 
const machtigingSection = document.getElementById('machtiging-section');

const activitiesOption = document.getElementById('activities-option');
const activitiesSection = document.getElementById('activities-section');
const activitiesList = document.getElementById('activities-list');
const backActivitiesBtn = document.getElementById('back-activities-btn');
const activityScreen = document.getElementById('activities-section');

const pinConfirmationScreenVerifier = document.getElementById('pin-confirmation-screen-verifier');
const confirmPinBtnVerifier = document.getElementById('confirm-pin-verifier');

const successScreen = document.getElementById('verifier-success-screen');
const successMessage = document.getElementById('success-message');
const verifierNameElement = document.getElementById('verifier-name');
const seeActivityBtn = document.getElementById('see-activity-btn');
const closeSuccessBtn = document.getElementById('close-success-btn');

const issuerQuestionModal = document.getElementById('issuer-question-modal');
const saveButton = document.getElementById('save-button');
const stopButtonIssuer = document.getElementById('stop-button-issuer');
const issuerSuccessScreen = document.getElementById('issuer-success-screen');
const closeIssuerSuccessBtn = document.getElementById('close-issuer-success-btn');

const rdfciMultipleModal = document.getElementById('rdfci-multiple-modal');
const rdfciMultipleAcceptButton = document.getElementById('rdfci-multiple-accept-button');
const rdfciMultipleStopButton = document.getElementById('rdfci-multiple-stop-button');
const closeRdfciMultipleModal = document.getElementById('close-rdfci-multiple-modal');
const closeIssuerMultipleSuccessBtn = document.getElementById('close-issuer-multiple-success-button');

const shareQuestionModal = document.getElementById('share-question-modal');
const shareQuestionText = document.getElementById('share-question-text');
const shareDetails = document.getElementById('share-details');
const yesShareBtn = document.getElementById('yes-share-btn');
const stopShareBtn = document.getElementById('stop-share-btn');

const rdfciModal = document.getElementById('rdfci-modal');
const rdfciAgreement = document.getElementById('rdfci-agreement');
const rdfciData = document.getElementById('rdfci-data');
const rdfciAcceptButton = document.getElementById('rdfci-accept-button');
const rdfciStopButton = document.getElementById('rdfci-stop-button');
const confirmPinIssuerBtn = document.getElementById('confirm-pin-issuer');
const pinConfirmationScreenIssuer = document.getElementById('pin-confirmation-screen-issuer');

const rdfcvModal = document.getElementById('rdfcv-modal');
const rdfcvReason = document.getElementById('rdfcv-reason');
const rdfcvDetailsContainer = document.getElementById('rdfcv-details-container');
const rdfcvAgreement = document.getElementById('rdfcv-agreement');
const rdfcvAcceptButton = document.getElementById('rdfcv-accept-button');
const rdfcvStopButton = document.getElementById('rdfcv-stop-button');

const csasModal = document.getElementById('csas-modal');
const csasRequester = document.getElementById('csas-requester');
const csasDetailsContainer = document.getElementById('csas-details-container');
const csasAgreement = document.getElementById('csas-agreement');
const csasAcceptButton = document.getElementById('csas-accept-button');
const csasStopButton = document.getElementById('csas-stop-button');
const csasPinConfirmationScreen = document.getElementById('csas-pin-confirmation-screen');

const csasSuccessScreen = document.getElementById('csas-success-screen');
const csasSuccessRequester = document.getElementById('csas-success-requester');
const csasSuccessCardContainer = document.getElementById('csas-success-card-container');
const closeCsasSuccessBtn = document.getElementById('close-csas-success-btn');

const mandateModal = document.getElementById('mandate-modal');
const mandateRequester = document.getElementById('mandate-requester');
const mandateReason = document.getElementById('mandate-reason');
const mandateDataContainer = document.getElementById('mandate-data-container');
const mandateAgreement = document.getElementById('mandate-agreement');
const mandateRequesterAgreement = document.getElementById('mandate-requester-agreement');
const mandateStopButton = document.getElementById('mandate-stop-button');
const mandateAcceptButton = document.getElementById('mandate-accept-button');

const mandatePinConfirmationScreen = document.getElementById('mandate-pin-confirmation-screen');
const confirmPinMandateBtn = document.getElementById('confirm-pin-mandate');

const mandateSuccessScreen = document.getElementById('mandate-success-screen');
const mandateSuccessRequester = document.getElementById('mandate-success-requester');
const viewMandateButton = document.getElementById('view-mandate-button');
const closeMandateSuccessButton = document.getElementById('close-mandate-success-button');

const signdocModal = document.getElementById('signdoc-modal');
const signdocDocumentElement = document.getElementById('signdoc-document');
const signdocIssuedByElement = document.getElementById('signdoc-issuedBy');
const signdocStopButton = document.getElementById('signdoc-stop-button');
const signdocAcceptButton = document.getElementById('signdoc-accept-button');

const pinConfirmationScreenSigndoc = document.getElementById('pin-confirmation-screen-signdoc');
const confirmPinSigndocBtn = document.getElementById('confirm-pin-signdoc');

const signdocSuccessScreen = document.getElementById('signdoc-success-screen');
const closeSigndocSuccessBtn = document.getElementById('close-signdoc-success-btn');

const rdfcfModal = document.getElementById('rdfcf-modal');
const rdfcfDetailsContainer = document.getElementById('rdfcf-details-container');
const rdfcfAcceptButton = document.getElementById('rdfcf-accept-button');
const rdfcfStopButton = document.getElementById('rdfcf-stop-button');

const pinConfirmationScreenRdfcf = document.getElementById('pin-confirmation-screen-rdfcf');
const confirmPinRdfcfBtn = document.getElementById('confirm-pin-rdfcf');

const rdfcfSuccessScreen = document.getElementById('rdfcf-success-screen');
const closeRdfcfSuccessBtn = document.getElementById('close-rdfcf-success-btn');

const ppopModal = document.getElementById('ppop-modal');
const ppopAmountElement = document.getElementById('ppop-amount');
const ppopRequesterElement = document.getElementById('ppop-requester');
const ppopDetailsContainer = document.getElementById('ppop-details-container');
const ppopStopButton = document.getElementById('ppop-stop-button');
const ppopAcceptButton = document.getElementById('ppop-accept-button');

const ppopPinConfirmationScreen = document.getElementById('ppop-pin-confirmation-screen');
const confirmPinPpopBtn = document.getElementById('confirm-pin-ppop');

const ppopSuccessScreen = document.getElementById('ppop-success-screen');
const ppopSuccessRequester = document.getElementById('ppop-success-requester');
const ppopInvoiceLink = document.getElementById('ppop-invoice-link');
const ppopDownloadButton = document.getElementById('ppop-download-button');
const ppopCloseSuccessButton = document.getElementById('ppop-close-success-button');

const signFromStorageButton = document.getElementById('sign-button');

const signFromStorageFileExplorerModal = document.getElementById('signfromstorage-file-explorer-modal');
const signFromStorageFileInput = document.getElementById('signfromstorage-file-input');
const signFromStorageFileExplorerCloseButton = document.getElementById('signfromstorage-file-explorer-close-button');

const signFromStorageConfirmSignModal = document.getElementById('signfromstorage-confirm-sign-modal');
const signFromStorageConfirmDocumentText = document.getElementById('signfromstorage-confirm-document-text');
const signFromStorageConfirmSignStopButton = document.getElementById('signfromstorage-confirm-sign-stop-button');
const signFromStorageConfirmSignAcceptButton = document.getElementById('signfromstorage-confirm-sign-accept-button');

const signFromStoragePinConfirmationModal = document.getElementById('signfromstorage-pin-confirmation-modal');
const signFromStorageConfirmPinBtn = document.getElementById('signfromstorage-confirm-pin');

const signFromStorageSuccessScreen = document.getElementById('signfromstorage-success-screen');
const signFromStorageCloseSuccessBtn = document.getElementById('signfromstorage-close-success-btn');

const contactsNavbarItem = document.getElementById('contacts-navbar-item');
const trustedContactsSection = document.getElementById('trusted-contacts-section');
const messagesGrid = document.getElementById('messages-grid');
const backTrustedContactsBtn = document.getElementById('back-trusted-contacts');

const messageDetailsScreen = document.getElementById('message-details-screen');
const closeMessageDetailsBtn = document.getElementById('close-message-details');
const contactNameElement = document.getElementById('contact-name');
const messageDatetimeElement = document.getElementById('message-datetime');
const messageTextElement = document.getElementById('message-text');

const notificationBadge = document.getElementById('notification-badge');

const settingsButton = document.getElementById('settings-button');
const instellingenSection = document.getElementById('instellingen-section');
const closeSettingsBtn = document.getElementById('close-settings');

const openCardCatalogueBtn = document.getElementById('open-card-catalogue');
const cardCatalogue = document.getElementById('card-catalogue');
const closeCardCatalogueBtn = document.getElementById('close-card-catalogue');

const openCurrentCardsBtn = document.getElementById('open-current-cards');
const currentCardsSection = document.getElementById('current-cards');
const closeCurrentCardsBtn = document.getElementById('close-current-cards');

const fieldMapping = {
  gn: 'Voornaam',
  vl: 'Voorletter(s)',
  sn: 'Achternaam',
  bd: 'Geboortedatum',
  bsn: 'Burgerservicenummer (BSN)',
  omv: 'Organisatiemachtiging VOG',
  vog: 'Verklaring Omtrent Gedrag (VOG)',
  VOG: 'Verklaring Omtrent Gedrag (VOG)',
  nat: 'Nationaliteit',
  val: 'Geldigheid paspoort',
  UWV: 'Uitvoeringsinstituut Werknemersverzekeringen (UWV)',
  BKR: 'Bureau Krediet Registratie (BKR)',
  BD: 'Belastingdienst',
  SVB: 'Sociale Verzekeringsbank (SVB)',
  ln: 'Lengte',          
  ph: 'Foto',   
  issuedBy: 'Uitgegeven door',
  LEID: 'Organisatie nummer',
  NLEID: 'Namens - Organisatie nummer',
  Issued_Date: 'Uitgiftedatum',
  ID: 'Uitgiftedatum',
  Issued_to_subject: 'Uitgegeven aan',
  ITS: 'Uitgegeven aan',
  Algemeen_profiel: 'Algemeen profiel',
  Specifiek_profiel: 'Specifiek profiel',
  Attestation_Trust_Type: 'Type attestatie',
  LOA: 'Betrouwbaarheidsniveau',
  Namens: 'Uitgegeven namens',
  IBAN: 'IBAN',
  IADR: 'Factuur-adres',
  ATT: 'Type attestatie',
  dipvk: 'Diploma Verpleegkunde',
  a: {
    '12t': 'Opslag: 12 maanden, gedeeld met derden: nee',
    '60t': 'Opslag: 60 maanden, gedeeld met derden: nee',
    'w': 'Bewaarplicht en datadeling met derden volgens wettelijke richtlijnen',
    'b' : 'Volgens bedrijfsrichtlijnen'
  }
};

const valueMapping = {
  "WLDB": "Willeke Liselotte de Bruijn", 
  "MBO": "Machtiging | Belastingdienst | Omzetbelasting",
  "MSVBA1LE": "Machtiging | SVB | A1",
  "MR": "Machtigingen Register",
  "KVK0": "NL_KVK_0000000",
  "KVK1": "NL_KVK_0000001",
  "IV": "Innovatiemakers",
  "BD": "Belastingdienst",
  "BTW": "Omzetbelasting (btw)",
  "WDB": "Willeke de Bruijn",
  "TMV": "Transportbedrijf Maasvlakte Vervoer",
  "TGM": "Toegangspas Maasvlakte",
  "ADRtr": "ADR training",
  "IVPtr": "IVP training",
  "ATEXtr": "ATEX training",
  "EOOT": "Eigendomsbezit object truck",
  "ADR": "ADR-certificaat",
  "IVP": "IVP-certificaat",
  "ATEX": "ATEX-certificaat",
};

function mapValue(value) {
  return (valueMapping && valueMapping.hasOwnProperty(value)) ? valueMapping[value] : value;
}

let html5QrCode = null;
let credentials = [];
let currentVerifierName = "";
let isSharingActionInProgress = false;

document.getElementById('next-welcome').addEventListener('click', function() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('pin-inlog-screen').style.display = 'flex';
});

document.getElementById('submit-pin').disabled = false;

document.getElementById('submit-pin').addEventListener('click', function() {
  document.getElementById('pin-inlog-screen').style.display = 'none';
  document.getElementById('wallet-screen').style.display = 'block';
});

document.getElementById('submit-pin').addEventListener('click', function() {
  document.getElementById('pin-inlog-screen').style.display = 'none';
  document.getElementById('wallet-screen').style.display = 'block';
  bottomNav.style.display = 'flex';
});

overviewNavbarItem.addEventListener('click', () => {
  activitiesSection.style.display = 'none';
  document.getElementById('machtiging-section').style.display = 'none';
  instellingenSection.style.display = 'none';
  document.getElementById('wallet-screen').style.display = 'block';
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  overviewNavbarItem.classList.add('active');
});

activitiesNavbarItem.addEventListener('click', () => {
  document.getElementById('wallet-screen').style.display = 'none';
  document.getElementById('machtiging-section').style.display = 'none';
  instellingenSection.style.display = 'none';
  activitiesSection.style.display = 'flex';
  showActivities();
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  activitiesNavbarItem.classList.add('active');
});

machtigingNavbarItem.addEventListener('click', () => {
  document.getElementById('wallet-screen').style.display = 'none';
  activitiesSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  document.getElementById('machtiging-section').style.display = 'flex';
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  machtigingNavbarItem.classList.add('active');
  displayMachtigingen();
});

function convertToStandardDate(dateString) {
  let [datePart, timePart] = dateString.split(', ');
  let [day, month, year] = datePart.split('-').map(part => part.padStart(2, '0'));
  return `${year}-${month}-${day}T${timePart}`;
}

function showActivities() {
  activitiesList.innerHTML = '';

  const filteredActivities = credentials.filter(cred => {
    if (!cred.actionTimestamp) return false;

    if (cred.isShareAction || cred.isActivity) return true;

    if (cred.type === 'signdoc' || cred.type === 'signfromstorage' || cred.type === 'rdfcf' || cred.type === 'ppop') return true;

    if (cred.issuedBy && cred.type !== 'mandate') return true;

    return false;
  });

  filteredActivities.sort((a, b) => {
    let dateA = Date.parse(convertToStandardDate(a.actionTimestamp));
    let dateB = Date.parse(convertToStandardDate(b.actionTimestamp));
    return dateB - dateA;
  });

  filteredActivities.forEach((cred) => {
    let activityItem = document.createElement('li');

    if (cred.type === 'rdfcf') {
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Formulier ingevuld: ${cred.formName}</strong><br>
        <span style="color: #152A62;">Gegevens gedeeld</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.isShareAction) {
      activityItem.innerHTML = `
        <strong style="color: #152A62;">${cred.name}</strong><br>
        <span style="color: #152A62;">Gegevens gedeeld</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.isActivity) {
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Machtiging aan ${cred.requester}</strong><br>
        <span style="color: #152A62;">Reden: ${cred.reason}</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.type === 'signdoc') {
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Document ondertekend aangeboden door ${cred.issuedBy}</strong><br>
        <span style="color: #152A62;">${cred.data.documentName}</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.type === 'signfromstorage') {
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Document ondertekend uit storage</strong><br>
        <span style="color: #152A62;">${cred.data.documentName}</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.type === 'ppop') {
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Betaling uitgevoerd aan ${cred.issuedBy}</strong><br>
        <span style="color: #152A62;">Bedrag: ${cred.currency} ${cred.amount}</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.issuedBy && cred.type !== 'mandate') {
      const issuerInfo = cred.issuedBy ? cred.issuedBy : "Onbekende uitgever";
      activityItem.innerHTML = `
        <strong style="color: #152A62;">${issuerInfo}</strong><br>
        <span style="color: #152A62;">${cred.name} opgehaald</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    }

    const divider = document.createElement('div');
    divider.className = 'activity-divider';

    activitiesList.appendChild(activityItem);
    activitiesList.appendChild(divider);
  });
}

const cardStyles = {
  'persoonlijke data': {
    imagePath: '${baseUrl}/demo/bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85'
  },
  'woonadres': {
    imagePath: '${baseUrl}/demo/bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85'
  },
  'foto': {
    imagePath: '${baseUrl}/demo/bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85'
  },
  'factuur-adres': {
    iconClass: 'fas fa-briefcase',
    iconColor: '#00588E',
    textColor: '#00588E'
  },
  'iban': {
    iconClass: 'fas fa-landmark', 
    iconColor: '#00588E', 
    textColor: '#00588E'
  },
  'organisatiemachtiging vog': {
    iconClass: 'fas fa-file-signature',
    iconColor: '#D4A5D7',
    textColor: '#7A3E9D'
  },
  'inkomensverklaring': {
    imagePath: '${baseUrl}/demo/bdlogo.svg',
    iconColor: null,
    textColor: '#2681cc'
  },
  'kredietregistratie': {
    imagePath: '${baseUrl}/demo/bkrlogo.svg',
    iconColor: null,
    textColor: '#FDC830'
  },
  'aow-status': {
    imagePath: '${baseUrl}/demo/svblogo.svg',
    iconColor: null,
    textColor: '#57C4E5'
  },
  'verzekeringsgegevens': {
    imagePath: '${baseUrl}/demo/uwvlogo.svg',
    iconColor: null,
    textColor: '#00588E'
  },
  'werkgever': {
    iconClass: 'fas fa-briefcase',
    iconColor: '#FBC4AB',
    textColor: '#D35400'
  },
  'verklaring omtrent gedrag (vog)': {
    imagePath: '${baseUrl}/demo/justislogo.svg',
    iconColor: null,
    textColor: '#00588E'
  },
  'rijbewijs': {
    imagePath: '${baseUrl}/demo/bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85'
  },
  'diploma verpleegkunde': {
    imagePath: '${baseUrl}/demo/duologo.svg',
    iconColor: null,
    textColor: '#4A6C85'
  },
  'toegangspas': {
    iconClass: 'fas fa-file-signature',
    iconColor: '#58AE65',
    textColor: '#58AE65'
  },
  'machtiging | belastingdienst | omzetbelasting': {
    imagePath: '${baseUrl}/demo/key.svg',  
    iconColor: null,
    textColor: '#00588E'
  },
  'machtiging | svb | a1': {
    imagePath: '${baseUrl}/demo/key.svg',  
    iconColor: null,
    textColor: '#00588E'
  },
  'toegang machtigingen register': {
    imagePath: '${baseUrl}/demo/key.svg',  
    iconColor: null,
    textColor: '#00588E'
  }
};

function displayCredentials() {
  walletGrid.innerHTML = '';

  credentials.forEach((cred, index) => {
    if (
      cred.isShareAction ||
      cred.isActivity ||
      cred.type === 'mandate' ||
      cred.type === 'signdoc' ||
      cred.type === 'signfromstorage' ||
      cred.type === 'rdfcf' ||
      cred.type === 'ppop'
    ) {
      return;
    }

    if (typeof cred.name !== 'string') {
      return;
    }

    const card = document.createElement('div');
    card.className = 'card';

    const nameLower = cred.name.toLowerCase();
    const styles = cardStyles[nameLower] || {
      iconClass: 'far fa-id-badge',
      iconColor: '#333',
      textColor: '#333'
    };

    const iconSize = '30px';
    const textSize = '18px';
    const issuerTextSize = '14px';
    const iconMarginBottom = '10px';

    let iconHtml = '';
    if (styles.imagePath) {
      iconHtml = `<img src="${styles.imagePath}" alt="${cred.name} logo" style="width: ${iconSize}; height: ${iconSize}; margin-bottom: ${iconMarginBottom};">`;
    } else {
      iconHtml = `<i class="${styles.iconClass}" style="color: ${styles.iconColor}; font-size: ${iconSize}; margin-bottom: ${iconMarginBottom};"></i>`;
    }

    let issuerText = '';
    const issuedByOnBehalf = cred.data?.["Uitgegeven namens"] || null;
    const issuedByDirect = cred.issuedBy || cred.data?.["Uitgegeven door"] || null;

    if (issuedByOnBehalf) {
      issuerText = `<p style="font-size: ${issuerTextSize}; color: #555; margin: 5px 0 0 0;">
        ${issuedByOnBehalf}
      </p>`;
    } else if (issuedByDirect) {
      issuerText = `<p style="font-size: ${issuerTextSize}; color: #555; margin: 5px 0 0 0;">
        ${issuedByDirect}
      </p>`;
    }

    card.innerHTML = `
      ${iconHtml}
      <div class="card-text" style="font-size: ${textSize};">
        <h3 style="color: ${styles.textColor}; margin: 0;">${cred.name}</h3>
        ${issuerText}
      </div>
    `;

    card.addEventListener('click', () => showDetails(cred, index));
    walletGrid.appendChild(card);
  });
}

function loadDefaultCredentials() {
  const defaultCards = [
    {
      name: 'Persoonlijke data',
      issuedBy: 'Nederlandse overheid',
      isShareAction: false,
      data: {
        'Voornaam': 'Willeke Liselotte',
        'Voorletter(s)': 'W. L.',
        'Achternaam': 'De Bruijn',
        'Geboortedatum': '10-03-1980',
        'Geboorteplaats': 'Delft',
        'Geboorteland': 'Nederland',
        'Geslacht': 'Vrouw',
        'Burgerservicenummer (BSN)': '999999990',
        'Nationaliteit': 'Nederlands',
        'Geldigheid paspoort': '17 juli 2034',
        'Ouder dan 18': 'Ja'
      }
    },
    {
      name: 'Woonadres',
      issuedBy: 'Nederlandse overheid',
      isShareAction: false,
      data: {
        'Straat': 'Wilhelmina van Pruisenweg',
        'Huisnummer': '52',
        'Postcode': '2595 AN',
        'Woonplaats': 'Den Haag'
      }
    },
    {
      name: 'Foto',
      issuedBy: 'Nederlandse overheid',
      isShareAction: false,
      data: {
        'Foto': 'pasfoto.png',
        'Lengte': '1,70 m'
      }
    }
  ];

  defaultCards.forEach(defaultCard => {
    const index = credentials.findIndex(cred => cred.name === defaultCard.name);
    if (index !== -1) {
      credentials[index] = defaultCard;
    } else {
      credentials.push(defaultCard);
    }
  });
}

function loadCredentials() {
  const storedCredentials = localStorage.getItem('credentials');
  if (storedCredentials) {
    credentials = JSON.parse(storedCredentials);
  }
}

function saveCredentials() {
  localStorage.setItem('credentials', JSON.stringify(credentials));
}

function showDetails(credential, index) {
  document.getElementById('wallet-screen').style.display = 'none';
  currentCardsSection.style.display = 'none';  
  bottomNav.style.display = 'none';

  const detailsView = document.getElementById('details');
  detailsView.style.display = 'block';

  detailsTitle.textContent = credential.name;
  detailsContent.innerHTML = '';

  if (credential.name === 'Foto') {
    detailsContent.innerHTML += `<img src="${credential.data['Foto']}" alt="Pasfoto" style="width: 100%; max-width: 300px; height: auto; margin-bottom: 20px;">`;
    detailsContent.innerHTML += `<div class="details-row">
                                <div class="details-label">Lengte:</div>
                                <div class="details-value">${credential.data['Lengte']}</div>
                              </div>`;
  } else if (credential.data) {
    for (const key in credential.data) {
      if (credential.data.hasOwnProperty(key)) {
        detailsContent.innerHTML += `
          <div class="details-row">
            <div class="details-label">${key}:</div>
            <div class="details-value">${credential.data[key]}</div>
          </div>`;
      }
    }
  } else {
    detailsContent.innerHTML = '<p>Geen details beschikbaar.</p>';
  }

  closeDetailsBtn.onclick = () => {
    detailsView.style.display = 'none';
    currentCardsSection.style.display = 'flex';
  };

  if (credential.name !== 'Persoonlijke data' && credential.name !== 'Woonadres' && credential.name !== 'Foto' && credential.name !== 'Factuur-adres' && credential.name !== 'IBAN') {
    deleteDetailsBtn.style.display = 'block';
    deleteDetailsBtn.onclick = () => {
      credentials.splice(index, 1);
      saveCredentials();
      displayCredentials();
      detailsView.style.display = 'none';
      currentCardsSection.style.display = 'flex';
    };
  } else {
    deleteDetailsBtn.style.display = 'none';
  }
}

loadCredentials();
loadDefaultCredentials();
saveCredentials();
displayCredentials();
displayMachtigingen();

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-view-button');
  const buttonList = document.querySelector('.button-list');
  const sectionHeaders = document.getElementById('section-organisation-headers');

  toggleButton.addEventListener('click', function () {
    const icon = toggleButton.querySelector('i');

    if (buttonList.style.display === 'none') {
      buttonList.style.display = 'flex';
      sectionHeaders.style.display = 'none';
      icon.className = 'fas fa-building';
      toggleButton.innerHTML = '<i class="fas fa-building"></i> Weergave per organisatie';
    } else {
      buttonList.style.display = 'none';
      sectionHeaders.style.display = 'block';
      icon.className = 'fas fa-list';
      toggleButton.innerHTML = '<i class="fas fa-list"></i> Weergave per attribuut';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.header-bar');

  headers.forEach(header => {
    header.addEventListener('click', function () {
      const formButtons = header.nextElementSibling;

      if (formButtons.style.display === 'none' || formButtons.style.display === '') {
        formButtons.style.display = 'block';
        header.querySelector('.fa-chevron-down').classList.remove('fa-chevron-down');
        header.querySelector('.header-right i').classList.add('fa-chevron-up');
      } else {
        formButtons.style.display = 'none';
        header.querySelector('.header-right i').classList.remove('fa-chevron-up');
        header.querySelector('.header-right i').classList.add('fa-chevron-down');
      }
    });
  });
});

scanButton.addEventListener('click', () => {
  startQrScan();
});

window.addEventListener("message", function(event) {
  if (event.data.action === "simulateScan" && event.data.qrData) {
    simulateQrScan(event.data.qrData);
  }
});

function simulateQrScan(decodedText) {
  console.log("Simulating QR scan with:", decodedText);
  onScanSuccess(decodedText);
}

function startQrScan() {
  document.querySelector('.scan-container').style.display = 'none';
  closeScanButton.style.display = 'block';
  readerDiv.style.display = 'block';

  if (!html5QrCode) {
    html5QrCode = new Html5Qrcode("reader");
  }

  console.log("Starting QR scanner...");

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    onScanSuccess,
    onScanError
  );
}

function onScanSuccess(decodedText) {
  console.log("QR succesfully code scanned: ", decodedText);

  const isApiUrl = decodedText.startsWith("http") && decodedText.includes("/api/data/");
  
  if (isApiUrl) {
    console.log("API URL detected. Fetching data...");
    fetchQrScandata(decodedText);
    console.log("Decoded text: ", decodedText);
  } else {
    try {
      const data = JSON.parse(decodedText);
      const timestamp = new Date().toLocaleString();
      processScannedData(data, timestamp);
      stopScannerAndResetUI();
    } catch (error) {
      console.error("QR-code parse error: ", error);
    }
  }
}

function onScanError(errorMessage) {
  console.error(`QR scan failed: ${errorMessage}`);
}

function stopScannerAndResetUI() {
  html5QrCode.stop().then(() => {
    console.log("QR scanner stopped.");
    readerDiv.style.display = 'none';
    closeScanButton.style.display = 'none';
    document.querySelector('.scan-container').style.display = 'flex';
  }).catch(err => {
    console.error("Failed to stop scanning: ", err);
  });
}

function fetchQrScandata(apiUrl) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      try {
        const timestamp = new Date().toLocaleString();
        processScannedData(data, timestamp);
        stopScannerAndResetUI();
      } catch (error) {
        console.error("Simulatie van QR-code mislukt: ", error);
      }
    })
    .catch(error => {
      console.error("Fout bij het ophalen van data: ", error);
    });
}

function processScannedData(data, timestamp) {
  console.log("Processing scanned data: ", data, "Timestamp: ", timestamp);

  if (data.type === "mandate") {
    console.log("Mandate QR-code herkend.");
    handleMandateQR(data, timestamp);

  } else if (data.type === "verifier" && data.csas) {
    console.log("CSAS QR-code herkend.");
    window.currentCsasData = data;
    populateCsasModal(data);
    csasModal.style.display = 'flex';

  } else if (data.type === "verifier" && data.rdfcv) {
    console.log("RDFCV QR-code herkend.");
    window.currentRdfcvData = data;
    populateRdfcvModal(data);
    rdfcvModal.style.display = 'flex';

  } else if (data.type === "signdoc") {
    console.log("Signdoc QR-code herkend.");
    populateModalSignDoc(data);

  } else if (data.type === "form" && data.rdfcf) {
    console.log("RDFCF QR-code detected.");
    window.currentRdfcfData = data;
    populateRdfcfModal(data);

  } else if (data.type === "PPOP") {
    console.log("PPOP QR-code herkend.");
    window.currentPpopData = data;
    populatePpopModal(data);
    ppopModal.style.display = 'flex';

  } else if (data.issuedBy && data.name) {
    console.log("Issuer QR-code herkend.");

    if (data.rdfci) {
      console.log("Issuer QR-code met rdfci herkend.");

      if (Array.isArray(data.cardsToIssue) && data.cardsToIssue.length > 0) {
        console.log("Meerdere kaarten gevonden in rdfci flow.");
        populateMultipleRdfciModal(data);
        rdfciMultipleModal.style.display = 'flex';
      } else {
        populateRdfciModal(data);
      }

    } else {
      issuerQuestionModal.style.display = 'flex';
      console.log("Issuer modal geopend.");

      const issuerName = data.issuedBy || 'Onbekende uitgever';
      const cardName = data.name || 'Onbekend kaartje';
      document.getElementById('issuer-data').innerText = cardName;
      document.getElementById('issuer-issuedBy').innerText = issuerName;

      saveButton.onclick = () => {
        console.log("Opslaan-knop ingedrukt voor issuer.");
        credentials.push({
          name: cardName,
          issuedBy: issuerName,
          actionTimestamp: timestamp,
          isShareAction: false,
          data: {
            kaartDetails: data,
            gevraagdeGegevens: data.rdfci.map(field => fieldMapping[field] || field)
          }
        });
        saveCredentials();
        console.log("Issuer gegevens opgeslagen in de wallet.");

        goToIssuerSuccessScreen(cardName, issuerName);
        console.log("Issuer success-scherm weergegeven.");

        issuerQuestionModal.style.display = 'none';
      };

      stopButtonIssuer.onclick = () => {
        console.log("Stop-knop ingedrukt. Issuer actie geannuleerd.");
        issuerQuestionModal.style.display = 'none';
        resetQrScanner();
      };
    }

  } else {
    console.log("Onbekende QR-code structuur.");
  }
}

function resetQrScanner() {
  console.log("Resetting QR scanner...");

  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped.");
    }).catch(err => {
      console.error("Failed to stop scanning: ", err);
    });
  }
  
  readerDiv.style.display = 'none';
  closeScanButton.style.display = 'none';
  document.querySelector('.scan-container').style.display = 'flex';
}
const pinInputs = document.querySelectorAll('.pin-box');
pinInputs.forEach((box, index) => {
    box.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < pinInputs.length - 1) {
            pinInputs[index + 1].focus();
        }
    });
});

function resetPinInputs() {
  pinInputs.forEach((input) => {
      input.value = '';
  });
}

function populateRdfciModal(data) {
  console.log("Data in populateRdfciModal:", data);

  delete data.Issuer;

  const issuedByMapped = mapValue(data.issuedBy) || 'Onbekende uitgever';
  document.getElementById('rdfci-issuedBy').innerText = issuedByMapped;

  const rdfciNameElement = document.getElementById('rdfci-name');
  rdfciNameElement.innerHTML = '';

  const newCardContainer = document.createElement('div');
  newCardContainer.className = 'card-container';

  const newCardHeader = document.createElement('div');
  newCardHeader.className = 'card-header';
  newCardHeader.style.backgroundColor = '#B5DEF4';
  newCardHeader.style.color = '#152A62';
  newCardHeader.style.fontWeight = 'bold';
  newCardHeader.style.padding = '10px';
  newCardHeader.style.textAlign = 'center';

  const nameMapped = mapValue(data.name) || 'Onbekend kaartje';
  newCardHeader.textContent = nameMapped;

  newCardContainer.appendChild(newCardHeader);

  const newCardContent = document.createElement('div');
  newCardContent.className = 'card-content';

  const newCardDetails = document.createElement('div');
  newCardDetails.className = 'card-details';

  const excludedKeys = ['rdfci', 'a', 't', 'name', 'reason', 'verifier', 'type', 'requester'];

  Object.keys(data).forEach(key => {
      if (excludedKeys.includes(key)) {
          return;
      }

      const fieldName = fieldMapping[key] || key;
      const rawValue = data[key];
      const mappedValue = mapValue(rawValue) || 'Niet beschikbaar';

      const detailRow = document.createElement('div');
      detailRow.className = 'detail-row';

      const labelDiv = document.createElement('div');
      labelDiv.className = 'label';
      labelDiv.textContent = `${fieldName}:`;

      const valueDiv = document.createElement('div');
      valueDiv.className = 'value';

      if (fieldName.toLowerCase() === 'foto') {
          const img = document.createElement('img');
          img.src = mappedValue;
          img.alt = 'Foto';
          img.style.width = '100%';
          valueDiv.appendChild(img);
      } else {
          valueDiv.textContent = mappedValue;
      }

      detailRow.appendChild(labelDiv);
      detailRow.appendChild(valueDiv);
      newCardDetails.appendChild(detailRow);
  });

  newCardContent.appendChild(newCardDetails);
  newCardContainer.appendChild(newCardContent);
  rdfciNameElement.appendChild(newCardContainer);

  const detailsContainer = document.getElementById('rdfci-details-container');
  detailsContainer.innerHTML = '';

  let fieldsByCard = {};

  data.rdfci.forEach((field) => {
      const fieldName = fieldMapping[field] || field;

      const matchingCard = credentials.find(cred => {
          return cred.data && cred.data.hasOwnProperty(fieldName);
      });

      if (matchingCard) {
          if (!fieldsByCard[matchingCard.name]) {
              fieldsByCard[matchingCard.name] = { data: matchingCard.data, fields: [] };
          }
          fieldsByCard[matchingCard.name].fields.push(fieldName);
      } else {
          console.warn(`Veld '${fieldName}' niet gevonden in de credentials.`);
      }
  });

  Object.keys(fieldsByCard).forEach((cardName) => {
      const cardInfo = fieldsByCard[cardName];
      const cardContainer = document.createElement('div');
      cardContainer.className = 'card-container';

      const cardHeader = document.createElement('div');
      cardHeader.className = 'card-header';

      switch (cardName) {
          case 'Persoonlijke data':
              cardHeader.style.backgroundColor = '#B5DEF4';
              break;
          case 'Woonadres':
              cardHeader.style.backgroundColor = '#445580';
              break;
          default:
              cardHeader.style.backgroundColor = '#445580';
      }

      cardContainer.appendChild(cardHeader);

      const cardContent = document.createElement('div');
      cardContent.className = 'card-content';

      const cardTitleElement = document.createElement('div');
      cardTitleElement.className = 'card-title';
      const cardNameMapped = mapValue(cardName) || cardName;
      cardTitleElement.textContent = cardNameMapped;
      cardContent.appendChild(cardTitleElement);

      const cardDetails = document.createElement('div');
      cardDetails.className = 'card-details';

      cardInfo.fields.forEach(fieldName => {
          const rawValue = cardInfo.data[fieldName];
          const mappedValue = mapValue(rawValue) || 'Niet beschikbaar';

          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row';

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${fieldName}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';

          if (fieldName.toLowerCase() === 'foto') {
              const img = document.createElement('img');
              img.src = mappedValue;
              img.alt = 'Foto';
              img.style.width = '100%';
              valueDiv.appendChild(img);
          } else {
              valueDiv.textContent = mappedValue;
          }

          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);
          cardDetails.appendChild(detailRow);
      });

      cardContent.appendChild(cardDetails);
      cardContainer.appendChild(cardContent);
      detailsContainer.appendChild(cardContainer);
  });

  if (data.a) {
      const agreementFields = fieldMapping.a[data.a] || data.a;
      document.getElementById('rdfci-agreement').innerText = agreementFields;
  } else {
      document.getElementById('rdfci-agreement').innerText = 'Geen overeenkomst gevonden.';
  }
  console.log("Fields by card after grouping:", fieldsByCard);

  console.log("Check modal elements:", rdfciModal, rdfciAcceptButton, rdfciStopButton);
  rdfciModal.style.display = 'flex';

  rdfciAcceptButton.onclick = () => {
      console.log("Accept button clicked, preparing to map data...");
      const timestamp = new Date().toLocaleString();
      const mappedData = {};

      Object.keys(data).forEach(key => {
          if (
              !['rdfci', 'a', 't', 'name', 'reason', 'verifier', 'issuer', 'type', 'requester'].includes(key)
          ) {
              const fieldName = fieldMapping[key] || key;
              const rawValue = data[key];
              const mappedValue = mapValue(rawValue) || rawValue || 'Niet beschikbaar';
              mappedData[fieldName] = mappedValue;
          }
      });

      console.log("Data before pushing to credentials:", {
          name: mapValue(data.name) || 'Onbekend kaartje',
          issuedBy: mapValue(data.issuedBy) || 'Onbekende uitgever',
          timestamp: timestamp,
          mappedData: mappedData
      });
      credentials.push({
          name: mapValue(data.name) || 'Onbekend kaartje',
          issuedBy: mapValue(data.issuedBy) || 'Onbekende uitgever',
          actionTimestamp: timestamp,
          isShareAction: false,
          data: mappedData
      });

      saveCredentials();

      console.log("Voordat we naar success screen gaan:", data.name, data.issuedBy);
      goToIssuerSuccessScreen(data.name, data.issuedBy);

      rdfciModal.style.display = 'none';
  };

  rdfciStopButton.onclick = () => {
      rdfciModal.style.display = 'none';
      addCardScreen.style.display = 'none';
      walletScreen.style.display = 'block';
      bottomNav.style.display = 'flex';
      resetQrScanner();
  };
}

confirmPinIssuerBtn.onclick = () => {
  const data = window.currentRdfciData;
  const timestamp = new Date().toLocaleString();
  console.log("Data in confirmPinIssuerBtn.onclick:", data);
  const mappedData = {};

  for (let key in data) {
    if (
      data.hasOwnProperty(key) &&
      key !== 'rdfci' &&
      key !== 'a' &&
      key !== 't' &&
      key !== 'name' &&
      key !== 'issuedBy' &&
      key !== 'reason' &&
      key !== 'verifier' &&
      key !== 'issuer' &&
      key !== 'type' &&
      key !== 'requester'
    ) {
      const fieldName = fieldMapping[key] || key;
      mappedData[fieldName] = data[key];
    }
  }
  console.log("Mapped data for credential:", mappedData);
  credentials.push({
    name: data.name || 'Onbekend kaartje',
    issuedBy: data.issuedBy || 'Onbekende uitgever',
    actionTimestamp: timestamp,
    isShareAction: false,
    data: mappedData
  });

  saveCredentials();
  console.log("Credentials after adding new card:", credentials);
  goToIssuerSuccessScreen(data.name, data.issuedBy);

  pinConfirmationScreenIssuer.style.display = 'none';

  resetQrScanner();
};

function goToIssuerSuccessScreen(cardName, issuedBy) {
  const successScreen = document.getElementById('rdfci-success-screen');
  const successDataElem = document.getElementById('rdfci-success-data');
  const successIssuedByElem = document.getElementById('rdfci-success-issuedBy');
  const successCard = document.getElementById('rdfci-success-card');

  const mappedCardName = mapValue(cardName) || cardName;
  const mappedIssuedBy = mapValue(issuedBy) || issuedBy;

  successDataElem.innerText = mappedCardName;
  successIssuedByElem.innerText = mappedIssuedBy;

  console.log("Computed style of successScreen:", window.getComputedStyle(successScreen).display);

  console.log("After setting text:", 
              "rdfci-success-data =", successDataElem.innerText, 
              "rdfci-success-issuedBy =", successIssuedByElem.innerText);

  console.log("successCard element:", successCard);

  const nameLower = mappedCardName.toLowerCase();
  const styles = cardStyles[nameLower] || {
      iconClass: 'far fa-id-badge',
      iconColor: '#333',
      textColor: '#333'
  };

  const iconSize = '30px';
  const textSize = '18px';
  const iconMarginBottom = '10px';

  successCard.innerHTML = `
      <i class="${styles.iconClass}" 
          style="color: ${styles.iconColor}; font-size: ${iconSize}; margin-bottom: ${iconMarginBottom};">
      </i>
      <div class="card-text" style="font-size: ${textSize};">
        <h3 style="color: ${styles.textColor};">${mappedCardName}</h3>
      </div>
  `;
  successCard.classList.add('card');

  console.log("After updating success card innerHTML.");

  successScreen.style.display = 'flex';
}

const closeRdfciSuccessBtn = document.getElementById('close-rdfci-success-btn');

closeRdfciSuccessBtn.addEventListener('click', () => {
  const successScreen = document.getElementById('rdfci-success-screen');
  successScreen.style.display = 'none';
  displayCredentials();

  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
});

function populateMultipleRdfciModal(data) {
  console.log("populateMultipleRdfciModal aangeroepen met data:", data);
  
  window.currentRdfciData = data;

  const agreementElement = document.getElementById('rdfci-multiple-agreement');
  if (data.a && fieldMapping.a && fieldMapping.a[data.a]) {
      agreementElement.innerText = fieldMapping.a[data.a];
  } else {
      agreementElement.innerText = 'Bewaarplicht en datadeling met derden volgens wettelijke richtlijnen';
  }

  const detailsContainer = document.getElementById('rdfci-multiple-details-container');
  detailsContainer.innerHTML = '';

  const excludedKeys = ['rdfci', 'a', 't', 'type', 'issuer', 'verifier', 'requester', 'name'];

  data.cardsToIssue.forEach((cardData, index) => {
      const cardContainer = document.createElement('div');
      cardContainer.className = 'card-container';

      const cardHeader = document.createElement('div');
      cardHeader.className = 'card-header';

      let mappedName = valueMapping[cardData.name] || cardData.name;
      cardHeader.textContent = mappedName;

      cardContainer.appendChild(cardHeader);

      const cardContent = document.createElement('div');
      cardContent.className = 'card-content';

      for (let key in cardData) {
          if (cardData.hasOwnProperty(key)) {
              if (excludedKeys.includes(key)) {
                  continue;
              }

              const fieldName = fieldMapping[key] || key;
              let value = cardData[key];
      
              if (valueMapping[value]) {
                value = valueMapping[value];
              }

              const detailRow = document.createElement('div');
              detailRow.className = 'detail-row';

              const labelDiv = document.createElement('div');
              labelDiv.className = 'label';
              labelDiv.textContent = `${fieldName}:`;

              const valueDiv = document.createElement('div');
              valueDiv.className = 'value';

              if (fieldName.toLowerCase() === 'foto') {
                  const img = document.createElement('img');
                  img.src = cardData[key];
                  img.alt = 'Foto';
                  img.style.width = '100%';
                  valueDiv.appendChild(img);
              } else {
                  valueDiv.textContent = value || 'Niet beschikbaar';
              }

              detailRow.appendChild(labelDiv);
              detailRow.appendChild(valueDiv);

              cardContent.appendChild(detailRow);
          }
      }

      cardContainer.appendChild(cardContent);
      detailsContainer.appendChild(cardContainer);
  });

  rdfciMultipleModal.style.display = 'flex';
}

rdfciMultipleAcceptButton.onclick = () => {
  const data = window.currentRdfciData;
  if (!data) {
      console.error("Data is niet beschikbaar.");
      return;
  }
  const timestamp = new Date().toLocaleString();

  data.cardsToIssue.forEach(card => {
      const mappedData = {};

      let mappedName = valueMapping[card.name] || card.name || 'Onbekend kaartje';
      let mappedIssuer = valueMapping[card.issuedBy] || card.issuedBy || 'Onbekende uitgever';

      for (let key in card) {
          if (card.hasOwnProperty(key)) {
              const fieldName = fieldMapping[key] || key;
              let value = card[key];

              if (valueMapping[value]) {
                value = valueMapping[value];
              }

              mappedData[fieldName] = value;
          }
      }

      credentials.push({
          name: mappedName,
          issuedBy: mappedIssuer,
          actionTimestamp: timestamp,
          isShareAction: false,
          data: mappedData
      });
  });

  saveCredentials();
  console.log("Credentials na toevoegen multiple RDFCI:", credentials);

  goToMultipleIssuerSuccessScreen(data.cardsToIssue.map(card => card.name), data.issuedBy);

  rdfciMultipleModal.style.display = 'none';
};

rdfciMultipleStopButton.onclick = () => {
  rdfciMultipleModal.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  resetQrScanner();
};

function goToMultipleIssuerSuccessScreen(cardNames, issuerName) {
  const issuerMultipleSuccessScreen = document.getElementById('issuer-multiple-success-screen');
  issuerMultipleSuccessScreen.style.display = 'flex';

  const mappedIssuerName = valueMapping[issuerName] || issuerName;

  const mappedCardNames = cardNames.map(name => {
    return valueMapping[name] || name;
  });

  const cardNamesHTML = mappedCardNames.map(name => `<li>${name}</li>`).join('');
  document.getElementById('issuer-success-data').innerHTML = `<ul>${cardNamesHTML}</ul>`;

  document.getElementById('issuer-success-issuedBy').innerText = mappedIssuerName;

  saveCredentials();
  displayCredentials();
  console.log("Multiple RDFCI kaarten opgeslagen:", credentials);

  closeIssuerMultipleSuccessBtn.onclick = () => {
    issuerMultipleSuccessScreen.style.display = 'none';
    addCardScreen.style.display = 'none';
    walletScreen.style.display = 'block';
    bottomNav.style.display = 'flex';
  };
}

function populateRdfcvModal(data) {
  document.getElementById('rdfcv-reason').innerText = data.reason || 'Geen reden opgegeven.';
  document.getElementById('rdfcv-question-text').innerText = `Wilt u onderstaande gegevens delen met ${data.requester}?`;

  const detailsContainer = document.getElementById('rdfcv-details-container');
  detailsContainer.innerHTML = '';

  let fieldsByCard = {};

  data.rdfcv.forEach((field) => {
    const fieldName = fieldMapping[field] || field;
    console.log(`Mapping field '${field}' to '${fieldName}'`);

    let matchingCard = credentials.find(cred => {
      return cred.data && cred.data.hasOwnProperty(fieldName);
    });

    if (!matchingCard) {
      console.warn(`Veld of kaartje '${fieldName}' niet gevonden in the credentials.`);
      matchingCard = credentials.find(cred => cred.name === fieldName);
    }

    if (matchingCard) {
      console.log(`Found matching card for '${fieldName}':`, matchingCard); 
      const cardName = matchingCard.name;

      if (!fieldsByCard[cardName]) {
        fieldsByCard[cardName] = { data: matchingCard.data, fields: [], showAllFields: false };
      }

      if (matchingCard.name === fieldName) {
        fieldsByCard[cardName].showAllFields = true;
      } else {
        fieldsByCard[cardName].fields.push(fieldName);
      }
    } else {
      console.warn(`Veld of kaartje '${fieldName}' niet gevonden in de credentials.`);
    }
  });

  Object.keys(fieldsByCard).forEach((cardName) => {
    const cardInfo = fieldsByCard[cardName];

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    switch (cardName) {
      case 'Persoonlijke data':
        cardHeader.style.backgroundColor = '#B9E4E2';
        break;
      case 'Woonadres':
        cardHeader.style.backgroundColor = '#b9e4e2';
        break;
      case 'Verklaring Omtrent Gedrag (VOG)':
        cardHeader.style.backgroundColor = '#b9e4e2';
        break;
      case 'Diploma Verpleegkunde':
        cardHeader.style.backgroundColor = '#0061A6';
        break;
      default:
        cardHeader.style.backgroundColor = '#445580';
    }

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardContent);

    const cardTitleElement = document.createElement('div');
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = cardName;
    cardContent.appendChild(cardTitleElement);

    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    if (cardInfo.showAllFields) {
      for (let key in cardInfo.data) {
        if (cardInfo.data.hasOwnProperty(key)) {
          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row';

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${key}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';

          const value = cardInfo.data[key];

          if (key === 'Foto') {
            const img = document.createElement('img');
            img.src = value;
            img.alt = 'Foto';
            img.style.width = '100%';
            valueDiv.appendChild(img);
          } else {
            valueDiv.textContent = value || 'Niet beschikbaar';
          }

          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);
          cardDetails.appendChild(detailRow);
        }
      }
    } else {
      cardInfo.fields.forEach(fieldName => {
        const value = cardInfo.data[fieldName];

        const detailRow = document.createElement('div');
        detailRow.className = 'detail-row';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.textContent = `${fieldName}:`;

        const valueDiv = document.createElement('div');
        valueDiv.className = 'value';
        if (fieldName === 'Foto') {
          const img = document.createElement('img');
          img.src = value;
          img.alt = 'Foto';
          img.style.width = '100%';
          valueDiv.appendChild(img);
        } else {
          valueDiv.textContent = value || 'Niet beschikbaar';
        }

        detailRow.appendChild(labelDiv);
        detailRow.appendChild(valueDiv);
        cardDetails.appendChild(detailRow);
      });
    }

    cardContent.appendChild(cardDetails);
    detailsContainer.appendChild(cardContainer);
  });

  if (data.a) {
    console.log('Data.a:', data.a);
    console.log('Mapped value:', fieldMapping.a[data.a]);
    const agreementText = fieldMapping.a[data.a] || data.a;
    document.getElementById('rdfcv-agreement').innerText = agreementText;
  } else {
    document.getElementById('rdfcv-agreement').innerText = 'Geen overeenkomst gevonden.';
  }
}

rdfcvAcceptButton.onclick = () => {
  const timestamp = new Date().toLocaleString();

  confirmPinBtnVerifier.onclick = null;
  goToPinConfirmationVerifier();

  confirmPinBtnVerifier.onclick = () => {
    if (window.currentRdfcvData) {
      saveSharedData(window.currentRdfcvData, timestamp);
      goToVerifierSuccessScreen(window.currentRdfcvData);
    } else {
      console.error("Geen RDFCV data beschikbaar om op te slaan.");
    }
    pinConfirmationScreenVerifier.style.display = 'none';
    resetPinInputs();
  };

  rdfcvModal.style.display = 'none';
};

rdfcvStopButton.onclick = () => {
  rdfcvModal.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  resetQrScanner();
};

function goToPinConfirmationVerifier() {
  console.log("Navigating to pin confirmation screen...");
  rdfcvModal.style.display = 'none';
  pinConfirmationScreenVerifier.style.display = 'flex';
  resetPinInputs();
}

function goToVerifierSuccessScreen(data) {
  successScreen.style.display = 'flex';
  successMessage.textContent = "Succes!";
  verifierNameElement.textContent = data.requester || 'Onbekende partij';

  console.log("Succes-scherm geopend voor verifier:", data.requester || 'Onbekende partij');

  seeActivityBtn.onclick = function() {
    console.log("Zie Activiteit knop ingedrukt. Wallet-scherm verbergen, activiteiten-scherm tonen.");

    successScreen.style.display = 'none';
    addCardScreen.style.display = 'none';
    walletScreen.style.display = 'none';
    bottomNav.style.display = 'flex';
    activityScreen.style.display = 'block';
    showActivities();

    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active')); 
    document.querySelector('.nav-item:nth-child(2)').classList.add('active');

    console.log("Wallet-scherm verborgen, activiteiten-scherm getoond.");
  };

  closeSuccessBtn.onclick = function() {
    console.log("Sluiten knop ingedrukt. Terug naar het wallet-scherm.");

    successScreen.style.display = 'none';
    addCardScreen.style.display = 'none';
    bottomNav.style.display = 'flex';
    walletScreen.style.display = 'block';
    resetPinInputs();

    isSharingActionInProgress = false;

    console.log("Succes-scherm verborgen, wallet-scherm getoond, deelactie gereset.");
  };
}

function saveSharedData(data) {
  const timestamp = new Date().toLocaleString();
  credentials.push({
    name: data.requester || 'Onbekende partij',
    reason: data.reason || 'Geen reden opgegeven',
    sharedData: data.rdfcv.map(field => fieldMapping[field] || field),
    agreement: data.a ? data.a.split(', ').map(agreement => fieldMapping.a[agreement] || agreement) : [],
    actionTimestamp: timestamp,
    isShareAction: true
  });
  saveCredentials();
}

floatingQrButton.addEventListener('click', () => {
  walletScreen.style.display = 'none';
  bottomNav.style.display = 'none';
  addCardScreen.style.display = 'flex';
  startQrScan();
});

if (closeScanButton) {
  closeScanButton.onclick = () => {
    if (html5QrCode) {
      console.log("Stopping QR scanner...");
      html5QrCode.stop().then(() => {
        console.log("QR scanner stopped.");
        readerDiv.style.display = 'none';
        closeScanButton.style.display = 'none';
        document.querySelector('.scan-container').style.display = 'flex';
        html5QrCode = null;
      }).catch(err => {
        console.error("Failed to stop scanning: ", err);
      });
    }

    addCardScreen.style.display = 'none';
    walletScreen.style.display = 'block';
    bottomNav.style.display = 'flex';
  };
}


function populateCsasModal(data) {
  window.currentCsasData = data;
  csasRequester.textContent = data.requester;
  csasDetailsContainer.innerHTML = '';

  const reasonElement = document.getElementById('csas-reason');
  if (data.reason) {
    reasonElement.textContent = ` ${data.reason}`;
  } else {
    reasonElement.textContent = '';
  }

  data.csas.forEach(item => {
    if (item.issuedBy && item.name) {
      const issuerName = fieldMapping[item.issuedBy] || item.issuedBy;
      const cardName = fieldMapping[item.name] || item.name;

      const detail = document.createElement('div');
      detail.className = 'csas-detail';

      detail.innerHTML = `
        <p>Uitgegeven door:</p>
        <p><strong>${issuerName}</strong></p>
        <p>Gegevens:</p>
        <p><strong>${cardName}</strong></p>
      `;

      const divider = document.createElement('div');
      divider.className = 'divider';
      divider.style.borderTop = '1px solid #ccc';
      divider.style.margin = '10px 0';

      csasDetailsContainer.appendChild(detail);
      csasDetailsContainer.appendChild(divider);
    } else {
      console.error('CSAS item ontbreekt belangrijke gegevens: ', item);
    }
  });

  if (data.a && fieldMapping.a[data.a]) {
    csasAgreement.textContent = fieldMapping.a[data.a];
  } else {
    csasAgreement.textContent = 'Geen overeenkomst gevonden.';
  }
}

function saveCsasCredentials(data) {
  console.log("Start met opslaan van CSAS credentials...");
  data.csas.forEach(item => {
    const issuerName = fieldMapping[item.issuedBy] || item.issuedBy;
    const cardName = fieldMapping[item.name.toLowerCase()] || item.name;

    console.log(`Opslaan van credential: Issuer: ${issuerName}, Card: ${cardName}`);

    if (issuerName === 'Justis' && cardName === 'Verklaring Omtrent Gedrag (VOG)') {
      const newCredential = {
        name: 'Verklaring Omtrent Gedrag (VOG)',
        issuedBy: 'Justis',
        actionTimestamp: new Date().toLocaleString(),
        isShareAction: false,
        data: {
          "Issuer": true,
          "name": "Verklaring Omtrent Gedrag (VOG)",
          "issuedBy": "Justis",
          "LEID": "NL_KVK_27378698",
          "Issued_Date": "2023-09-17",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Algemeen_profiel": "4,5,6,7",
          "Specifiek_profiel": "55",
          "Attestation_Trust_Type": "PuB-EAA",
          "rdfci": ["gn", "sn", "bd", "bsn"],
          "a": "12t",
          "t": "w"
        }
      };
      credentials.push(newCredential);
    } else {
      const newCredential = {
        name: cardName,
        issuedBy: issuerName,
        actionTimestamp: new Date().toLocaleString(),
        isShareAction: false,
        data: {
          issuedBy: issuerName,
          cardName: cardName
        }
      };
      credentials.push(newCredential);

      console.log("Nieuw credential toegevoegd aan lijst:", newCredential);
    }
  });

  saveCredentials();
  console.log("Credentials opgeslagen in local storage.");

  displayCredentials();
  console.log("Weergave van wallet bijgewerkt met nieuwe credentials.");

  console.log("Credentials na opslaan:", credentials);
}

document.addEventListener('DOMContentLoaded', function() {
  const confirmPinCsas = document.getElementById('confirm-pin-csas');
  
  if (confirmPinCsas) {
    confirmPinCsas.onclick = () => {
      if (window.currentCsasData) {
        saveCsasCredentials(window.currentCsasData);
        saveCsasShareAction(window.currentCsasData);
        console.log("Credentials en deelactie opgeslagen:", credentials);
      } else {
        console.error("Er is geen CSAS data beschikbaar om op te slaan.");
        return;
      }
 
      goToCsasSuccessScreen();
 
      csasPinConfirmationScreen.style.display = 'none';
 
      if (html5QrCode) {
        console.log("Stopping QR scanner after CSAS confirmation...");
        html5QrCode.stop().then(() => {
          console.log("QR scanner stopped after CSAS confirmation.");
          readerDiv.style.display = 'none';
          closeScanButton.style.display = 'none';
          document.querySelector('.scan-container').style.display = 'flex';
        }).catch(err => {
          console.error("Failed to stop QR scanner: ", err);
        });
      }
    };
  } else {
    console.error("Element 'confirm-pin-csas' niet gevonden.");
  }
});

function goToCsasSuccessScreen() {
  csasSuccessRequester.textContent = csasRequester.textContent;
  csasSuccessCardContainer.innerHTML = '';

  currentCsasData.csas.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const nameLower = item.name.toLowerCase();
    const styles = cardStyles[nameLower] || {
      imagePath: null,
      iconColor: '#333',
      textColor: '#333'
    };

    const issuerName = fieldMapping[item.issuedBy] || item.issuedBy;
    const cardName = fieldMapping[item.name.toLowerCase()] || item.name;

    let logoElement = '';
    if (styles.imagePath) {
      logoElement = `<img src="${styles.imagePath}" alt="${cardName}" class="card-logo" style="width: 30px; height: 30px; margin-bottom: 10px;">`;
    }

    card.innerHTML = `
      ${logoElement}
      <div class="card-text" style="color: ${styles.textColor};">
        <h3>${cardName}</h3>
        <p style="font-size: 14px; color: #555; margin: 5px 0 0 0;">${issuerName}</p>
      </div>
    `;

    csasSuccessCardContainer.appendChild(card);
  });

  csasSuccessScreen.style.display = 'flex';
  addCardScreen.style.display = 'none';

  closeCsasSuccessBtn.onclick = () => {
    csasSuccessScreen.style.display = 'none';
    addCardScreen.style.display = 'none';
    walletScreen.style.display = 'block';
    bottomNav.style.display = 'flex';

    loadCredentials();
    displayCredentials();
  };
}

csasAcceptButton.onclick = () => {
  console.log("CSAS Accept Button clicked.");
  csasPinConfirmationScreen.style.display = 'flex';
  csasModal.style.display = 'none';
};

csasStopButton.onclick = () => {
  console.log("CSAS Stop Button clicked.");
  csasModal.style.display = 'none';
  addCardScreen.style.display = 'none';
  
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  
  if (html5QrCode) {
    console.log("Stopping QR scanner after stopping CSAS...");
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped after CSAS cancellation.");
      readerDiv.style.display = 'none';
      closeScanButton.style.display = 'none';
      document.querySelector('.scan-container').style.display = 'flex';
    }).catch(err => {
      console.error("Failed to stop QR scanner: ", err);
    });
  }
};

function saveCsasShareAction(data) {
  const timestamp = new Date().toLocaleString();
  credentials.push({
    name: data.requester || 'Onbekende partij',
    reason: data.reason || 'Geen reden opgegeven',
    sharedData: data.csas.map(item => {
      return {
        issuedBy: fieldMapping[item.issuedBy] || item.issuedBy,
        name: fieldMapping[item.name] || item.name
      };
    }),
    agreement: data.a ? (fieldMapping.a[data.a] || data.a) : 'Geen overeenkomst',
    actionTimestamp: timestamp,
    isShareAction: true
  });
  saveCredentials();
}

document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card-button');

  cardButtons.forEach(button => {
    const buttonTextElement = button.querySelector('.button-text');
    if (buttonTextElement && buttonTextElement.textContent.includes("VOG")) {
      button.addEventListener('click', function () {
        const vogData = {
          "Issuer": true,
          "name": "Verklaring Omtrent Gedrag (VOG)",
          "issuedBy": "Justis",
          "LEID": "NL_KVK_27378698",
          "Issued_Date": "2023-09-17",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Algemeen_profiel": "4,5,6,7",
          "Specifiek_profiel": "55",
          "Attestation_Trust_Type": "PUB-EAA",
          "rdfci": [],
          "a": "12t",
          "t": "w"
        };

        window.currentRdfciData = vogData;
        populateRdfciModal(vogData);
        rdfciModal.style.display = 'flex';

        rdfciAcceptButton.onclick = () => {
          pinConfirmationScreenIssuer.style.display = 'flex';
          rdfciModal.style.display = 'none';
          resetPinInputs();
        };

        rdfciStopButton.onclick = () => {
          rdfciModal.style.display = 'none';
          addCardScreen.style.display = 'none';
          walletScreen.style.display = 'block';
          bottomNav.style.display = 'flex';
        };
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card-button');

  cardButtons.forEach(button => {
    const buttonTextElement = button.querySelector('.button-text');
    if (buttonTextElement && buttonTextElement.textContent.includes("Diploma")) {
      button.addEventListener('click', function () {
        const diplomaData = {
          "Issuer": true,
          "name": "Diploma Verpleegkunde",
          "issuedBy": "DUO",
          "LEID": "NL_KVK_27378698",
          "Issued_Date": "2023-06-15",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Diploma_Type": "Bachelor",
          "Institution": "Hogeschool Rotterdam",
          "rdfci": [],
          "a": "12t",
          "t": "w"
        };

        window.currentRdfciData = diplomaData;
        populateRdfciModal(diplomaData);
        rdfciModal.style.display = 'flex';

        rdfciAcceptButton.onclick = () => {
          pinConfirmationScreenIssuer.style.display = 'flex';
          rdfciModal.style.display = 'none';
          resetPinInputs();
        };

        rdfciStopButton.onclick = () => {
          rdfciModal.style.display = 'none';
          addCardScreen.style.display = 'none';
          walletScreen.style.display = 'block';
          bottomNav.style.display = 'flex';
        };
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card-button');

  cardButtons.forEach(button => {
    const buttonTextElement = button.querySelector('.button-text');
    if (buttonTextElement && buttonTextElement.textContent.includes("Rijbewijs")) {
      button.addEventListener('click', function () {
        const diplomaData = {
          "Issuer": true,
          "name": "Rijbewijs",
          "issuedBy": "RDW",
          "LEID": "NL_KVK_000000",
          "Issued_Date": "2023-06-15",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Type": "A, B, D1, T",
          "rdfci": [],
          "a": "w",
          "t": "w"
        };

        window.currentRdfciData = diplomaData;
        populateRdfciModal(diplomaData);
        rdfciModal.style.display = 'flex';

        rdfciAcceptButton.onclick = () => {
          pinConfirmationScreenIssuer.style.display = 'flex';
          rdfciModal.style.display = 'none';
          resetPinInputs();
        };

        rdfciStopButton.onclick = () => {
          rdfciModal.style.display = 'none';
          addCardScreen.style.display = 'none';
          walletScreen.style.display = 'block';
          bottomNav.style.display = 'flex';
        };
      });
    }
  });
});
function handleMandateQR(data, timestamp) {
  if (!data.requester || !data.reason || !Array.isArray(data.mandate)) {
      console.error("Mandate QR-code mist noodzakelijke velden:", data);
      return;
  }

  populateMandateModal(data);
}

function populateMandateModal(data) {
  console.log('populateMandateModal aangeroepen met data:', data);

  window.currentMandateData = data;

  const mandateContentDiv = document.querySelector('.mandate-content-request');

  if (!mandateContentDiv) {
    console.error('mandate-content element niet gevonden in de DOM.');
    return;
  }

  mandateContentDiv.innerHTML = `
   <p>De volgende partij vraagt een machtiging:</p>
   <p><strong>Handelsnaam:</strong> ${data.requester}</p>
   <p><strong>Organisatie ID:</strong> ${data.LEID}</p>
  `;

  const reasonElement = document.getElementById('mandate-reason');
  if (data.reason) {
    reasonElement.textContent = data.reason;
    console.log('Updating mandate-reason:', data.reason);
  } else {
    reasonElement.textContent = 'Geen reden opgegeven.';
    console.log('Updating mandate-reason: Geen reden opgegeven.');
  }

  const mandateDataContainer = document.getElementById('mandate-data-container');
  mandateDataContainer.innerHTML = '';

  data.mandate.forEach((item, idx) => {
    const mappedIssuedBy = fieldMapping[item.issuedBy] || item.issuedBy;
    const mappedName = fieldMapping[item.name.toLowerCase()] || item.name;
    const dienst = item.dienst || 'Onbekende dienst';
    const leid = data.LEID || 'Niet beschikbaar';
    const handelsnaam = data.requester || 'Niet beschikbaar';

    console.log(`Adding mandate detail for item ${idx}: IssuedBy=${mappedIssuedBy}, Name=${mappedName}`);

    const detail = document.createElement('div');
    detail.className = 'mandate-detail';

    detail.innerHTML = `
      <p>Dienstverlener: ${mappedIssuedBy}</p>
      <p>Dienst: ${item.dienst}</p>
      <p>Gegevens: ${item.name}</p>
   `;

    if (idx < data.mandate.length - 1) {
      const hr = document.createElement('hr');
      detail.appendChild(hr);
    }

    mandateDataContainer.appendChild(detail);
  });

  const agreementElement = document.getElementById('mandate-agreement');
  if (data.a && fieldMapping.a && fieldMapping.a[data.a]) {
    agreementElement.textContent = fieldMapping.a[data.a];
  } else {
    agreementElement.textContent = 'Geen overeenkomst gevonden.';
  }

  if (data.geldigheidsduur || data.intrekbaar) {
    const detailContainer = document.createElement('div');
    detailContainer.className = 'additional-details';

    if (data.geldigheidsduur) {
      const durationElement = document.createElement('p');
      durationElement.textContent = `Geldigheidsduur: ${data.geldigheidsduur}`;
      detailContainer.appendChild(durationElement);
    }

    if (data.intrekbaar) {
      const retractableElement = document.createElement('p');
      retractableElement.textContent = `Intrekbaar: ${data.intrekbaar}`;
      detailContainer.appendChild(retractableElement);
    }

    agreementElement.appendChild(detailContainer);
  }

  const mandateRequesterAgreement = document.getElementById('mandate-requester-agreement');
  mandateRequesterAgreement.textContent = data.requester

  document.getElementById('mandate-modal').style.display = 'flex';
}

document.getElementById('mandate-stop-button').addEventListener('click', () => {
  console.log("Mandate Stop Button clicked.");

  document.getElementById('mandate-modal').style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';

  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped.");
    }).catch(err => {
      console.error("Failed to stop scanner: ", err);
    });
  }

  resetQrScanner();

  walletScreen.style.display = 'block';
  addCardScreen.style.display = 'none';
  bottomNav.style.display = 'flex';
});

document.getElementById('mandate-accept-button').addEventListener('click', () => {
  console.log("Mandate Accept Button clicked.");

  document.getElementById('mandate-modal').style.display = 'none';
  document.getElementById('mandate-pin-confirmation-screen').style.display = 'flex';
});

document.getElementById('confirm-pin-mandate').addEventListener('click', () => {
  console.log("Mandate Confirm Pin Button clicked.");

  const currentData = window.currentMandateData;
  if (!currentData) {
      console.error("Er is geen Mandate data beschikbaar om op te slaan.");
      return;
  }

  console.log(currentData);
  processMandate(currentData);

  document.getElementById('mandate-success-screen').style.display = 'flex';
  document.getElementById('mandate-pin-confirmation-screen').style.display = 'none';

  resetPinInputs();
});

function processMandate(data) {
  const timestamp = new Date().toLocaleString();
  console.log("processMandate functie aangeroepen met data:", data);

  const machtigingCard = {
      type: 'mandate',
      requester: data.requester || 'Onbekende requester',
      leid: data.LEID, 
      reason: data.reason || 'Geen reden opgegeven',
      mandate: data.mandate.map(item => ({
          issuedBy: fieldMapping[item.issuedBy] || item.issuedBy,
          name: fieldMapping[item.name.toLowerCase()] || item.name,
          dienst: fieldMapping[item.dienst] || item.dienst
      })),
      a: fieldMapping.a[data.a] || data.a,
      actionTimestamp: timestamp,
      isShareAction: false,
      name: `Machtiging - ${data.requester}`
  };

  if (data.geldigheidsduur) {
    machtigingCard.geldigheidsduur = data.geldigheidsduur;
  }

  if (data.intrekbaar) {
    machtigingCard.intrekbaar = data.intrekbaar;
  }

  credentials.push(machtigingCard);
  saveCredentials();
  displayMachtigingen();

  const activity = {
      type: 'mandate',
      name: 'Machtiging',
      requester: data.requester || 'Onbekende requester',
      reason: data.reason || 'Geen reden opgegeven',
      actionTimestamp: timestamp,
      isActivity: true
  };

  credentials.push(activity);
  saveCredentials();

  showMandateSuccessScreen(data.requester, timestamp);
}

function logActivity(type, requester, timestamp) {
  const activity = {
      type: type,
      requester: requester,
      timestamp: timestamp,
      isActivity: true
  };
  credentials.push(activity);
  saveCredentials();
}

function showMandateSuccessScreen(requester, timestamp) {
  document.getElementById('mandate-success-requester').innerText = requester || 'Onbekende requester';
  document.getElementById('mandate-success-screen').style.display = 'flex';
}

document.getElementById('view-mandate-button').addEventListener('click', () => {
  console.log("Bekijk Machtiging Button clicked.");

  document.getElementById('mandate-success-screen').style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'none';
  bottomNav.style.display = 'flex';
  document.getElementById('machtiging-section').style.display = 'flex';

  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  machtigingNavbarItem.classList.add('active');

  displayMachtigingen();

  console.log("Machtiging-section getoond");
});

document.getElementById('close-mandate-success-button').addEventListener('click', () => {
  console.log("Sluiten Button clicked.");

  document.getElementById('mandate-success-screen').style.display = 'none';
  addCardScreen.style.display = 'none';
  bottomNav.style.display = 'flex';
  walletScreen.style.display = 'block';

  console.log("Terug naar wallet-screen.");
});

function populateModalSignDoc(data) {
  signdocDocumentElement.textContent = data.documentName || 'Onbekend document';
  signdocIssuedByElement.textContent = data.issuedBy || 'Onbekende uitgever';
  signdocModal.style.display = 'flex';
}

signdocStopButton.addEventListener('click', () => {
  signdocModal.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  resetQrScanner();
});

signdocAcceptButton.addEventListener('click', () => {
  signdocModal.style.display = 'none';
  pinConfirmationScreenSigndoc.style.display = 'flex';
  resetPinInputs();
});

confirmPinSigndocBtn.addEventListener('click', () => {
  const timestamp = new Date().toLocaleString();

  const newCredential = {
    name: signdocDocumentElement.textContent || 'Onbekend document',
    issuedBy: signdocIssuedByElement.textContent || 'Onbekende uitgever',
    type: 'signdoc',
    actionTimestamp: timestamp,
    isShareAction: false,
    data: {
        documentName: signdocDocumentElement.textContent,
        issuedBy: signdocIssuedByElement.textContent,
    }
};

  credentials.push(newCredential);
  saveCredentials();
  showActivities();

  pinConfirmationScreenSigndoc.style.display = 'none';
  signdocSuccessScreen.style.display = 'flex';
});

document.getElementById("signdoc-download-btn").addEventListener("click", function () {
    alert("Vanwege demo doeleinden wordt het document niet gedownload.");
});

closeSigndocSuccessBtn.addEventListener('click', () => {
  signdocSuccessScreen.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
});

function scanMockQRCode(mockData) {
  try {
      const data = JSON.parse(mockData);
      const timestamp = new Date().toLocaleString();

      if (data.type === "mandate") {
          console.log("Mandate Mock QR-code herkend.");
          handleMandateQR(data, timestamp);
      }
      else if (data.type === "verifier" && data.csas) {
      }
      else if (data.issuedBy && data.name) {
      } else {
          console.log("Onbekende QR-code structuur.");
      }

  } catch (error) {
      console.error("Mock QR-code parse error: ", error);
  }
}

function showMandateDetails(mandate) {
  document.getElementById('wallet-screen').style.display = 'none';
  machtigingSection.style.display = 'none';
  bottomNav.style.display = 'none';

  const mandateDetailsView = document.getElementById('mandate-details');
  mandateDetailsView.style.display = 'block';

  document.getElementById('mandate-details-title').textContent = `Machtiging aan ${mandate.requester}`;
  
  let detailsHTML = `
    <p><strong>Aanvrager:</strong> ${mandate.requester}</p>
    <p><strong>Organisatie ID:</strong> ${mandate.leid}</p>
      <div class="divider"></div>
    <p><strong>Reden verzoek:</strong> ${mandate.reason}</p>
    <p><strong>Machtiging afgegeven op:</strong> ${mandate.actionTimestamp}</p>
    <div class="divider"></div>
    <p><strong>Tot welke dienstverleners en diensten heeft ${mandate.requester} toegang:</strong></p>
    
  `;

  mandate.mandate.forEach(item => {
    detailsHTML += `
 
      <p>Dienstverlener: ${fieldMapping[item.issuedBy] || item.issuedBy}</p>
      <p>Dienst: ${fieldMapping[item.name.toLowerCase()] || item.dienst}</p>
      <p>Gegevens: ${fieldMapping[item.name.toLowerCase()] || item.name}</p>
      
    `;
  });

  detailsHTML += `
    <div class="divider"></div>
    <p><strong>Gevraagde gegevens voor ophalen:</strong></p>
    <p>Burgerservicenummer (BSN): 999999990</p>
   
  `;

  detailsHTML += `
  <div class="divider"></div>
  <p><strong>Overeenkomst:</strong></p>
  <p>${fieldMapping.a[mandate.a] || mandate.a}</p>
`;

if (mandate.geldigheidsduur) {
  detailsHTML += `<p>Geldigheidsduur: ${mandate.geldigheidsduur}</p>`;
}

if (mandate.intrekbaar) {
  detailsHTML += `<p>Intrekbaar: ${mandate.intrekbaar}</p>`;
}

  document.getElementById('mandate-details-content').innerHTML = detailsHTML;

  document.getElementById('close-details-mandate').onclick = () => {
    mandateDetailsView.style.display = 'none';
    machtigingSection.style.display = 'flex';
    bottomNav.style.display = 'flex';
  };
}

document.getElementById('close-machtiging-section').onclick = () => {
  machtigingSection.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  overviewNavbarItem.classList.add('active');
};

document.getElementById('close-trusted-contacts-section').onclick = () => {
  trustedContactsSection.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  overviewNavbarItem.classList.add('active');
};

function displayMachtigingen() {
  console.log("displayMachtigingen functie aangeroepen");

  const machtigingGrid = document.getElementById('machtiging-grid');
  machtigingGrid.innerHTML = '';

  const machtigingen = credentials.filter(cred => cred.type === 'mandate' && !cred.isActivity);

  machtigingen.sort((a, b) => {
      let dateA = Date.parse(convertToStandardDate(a.actionTimestamp));
      let dateB = Date.parse(convertToStandardDate(b.actionTimestamp));
      return dateB - dateA;
  });
  console.log("Gesorteerde machtigingen:", machtigingen);

  machtigingen.forEach((mandate, index) => {
    const card = document.createElement('div');
    card.className = 'card';

      card.innerHTML = `
          <div class="card-text">
              <h3>${mandate.requester}</h3>
              <p>Reden: ${mandate.reason}</p>
              <p>Datum: ${mandate.actionTimestamp}</p>
          </div>
      `;

      card.addEventListener('click', () => showMandateDetails(mandate));
      machtigingGrid.appendChild(card);
  });
}

overviewNavbarItem.addEventListener('click', () => {
  walletScreen.style.display = 'block';
  activitiesSection.style.display = 'none';
  trustedContactsSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  overviewNavbarItem.classList.add('active');
});

activitiesNavbarItem.addEventListener('click', () => {
  walletScreen.style.display = 'none';
  activitiesSection.style.display = 'flex';
  trustedContactsSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  activitiesNavbarItem.classList.add('active');
});

contactsNavbarItem.addEventListener('click', () => {
  walletScreen.style.display = 'none';
  activitiesSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';
  bottomNav.style.display = 'none';

  trustedContactsSection.style.display = 'block';

  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  contactsNavbarItem.classList.add('active');
});

settingsButton.addEventListener('click', () => {
  walletScreen.style.display = 'none';
  bottomNav.style.display = 'none';
  activitiesSection.style.display = 'none';
  trustedContactsSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  instellingenSection.style.display = 'flex';
});

closeSettingsBtn.addEventListener('click', () => {
  instellingenSection.style.display = 'none';
  activitiesSection.style.display = 'none';
  trustedContactsSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  bottomNav.style.display = 'flex';
  walletScreen.style.display = 'block';
});

function openMessageDetails(sender, message, datetime) {
  contactNameElement.textContent = sender;
  messageDatetimeElement.textContent = datetime;
  messageTextElement.textContent = message;

  trustedContactsSection.style.display = 'none';
  bottomNav.style.display = 'none';
  messageDetailsScreen.style.display = 'block';
}

closeMessageDetailsBtn.addEventListener('click', () => {
  messageDetailsScreen.style.display = 'none';
  trustedContactsSection.style.display = 'block';
});

const messageTexts = {
  ipa5: 'IPA-5 Deel uw diploma met ons voor het aanmeldingsproces. Haal uw diploma op bij DUO.',
  ipa6: 'IPA-6 Wij willen graag dat u uw diploma met ons deelt voor het aanmeldingsproces. Klik op de volgende link: <a href="#" id="share-link">Diploma ophalen</a> om uw diploma op te halen in de catalogus van de wallet',
  ipa7: 'IPA-7 Deel uw diploma met ons voor het aanmeldingsproces. Klik op de volgende link: <a href="#" id="ipa7-share-link">Diploma delen</a>',
  ipa8: 'IPA-8 Woningcorporatie Leijendak heeft een machtiging aangevraagd om namens u gegevens éénmalig op te halen voor een financiële check. Klik op de volgende link: <a href="#" id="ipa8-mandate-link">Eénmalige machtiging ophalen gegevens bekijken</a>',
  notaris: 'Test bericht',
  woningcorporatie: 'Test bericht',
  verzekering: 'Test bericht',
  justis: 'Test bericht',
  duo: 'Test bericht',
  pensioenfonds: 'Test bericht',
  innovatiemakers: 'Beste, uw factuur staat klaar om te betalen. Klik op <a href="#" id="invoice-payment-link">deze link</a> om de betaling te starten.'
};

const IPA5MessageButton = document.getElementById('IPA-5-message-button');

IPA5MessageButton.addEventListener('click', () => {
    addMockMessageToTrustedContacts('Werkgever IPA 5', messageTexts.ipa5, 'ipa5'); 
    instellingenSection.style.display = 'none';
    walletScreen.style.display = 'block';
    bottomNav.style.display = 'flex';
});

const IPA6MessageButton = document.getElementById('IPA-6-message-button');

IPA6MessageButton.addEventListener('click', () => {
    addMockMessageToTrustedContacts('Werkgever IPA 6', messageTexts.ipa6, 'ipa6'); 
    instellingenSection.style.display = 'none';
    bottomNav.style.display = 'flex';
    walletScreen.style.display = 'block';
});

const IPA7MessageButton = document.getElementById('IPA-7-message-button');

IPA7MessageButton.addEventListener('click', () => {
    addMockMessageToTrustedContacts('Werkgever IPA 7', messageTexts.ipa7, 'ipa7'); 
    instellingenSection.style.display = 'none';
    bottomNav.style.display = 'flex';
    walletScreen.style.display = 'block';
});

const IPA8MessageButton = document.getElementById('IPA-8-message-button');

IPA8MessageButton.addEventListener('click', () => {
    addMockMessageToTrustedContacts('Woningcorporatie Leijendak', messageTexts.ipa8, 'ipa8'); 
    instellingenSection.style.display = 'none';
    bottomNav.style.display = 'flex';
    walletScreen.style.display = 'block';
});

const NotarisMessageButton = document.getElementById('notaris-message-button');
const WoningcorporatieMessageButton = document.getElementById('woningcorporatie-message-button');
const VerzekeringMessageButton = document.getElementById('verzekering-message-button');
const JustisMessageButton = document.getElementById('justis-message-button');
const DuoMessageButton = document.getElementById('duo-message-button');
const PensioenfondsMessageButton = document.getElementById('pensioenfonds-message-button');

NotarisMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Notaris', 'Test bericht', 'notaris');
});

WoningcorporatieMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Woningcorporatie', 'Test bericht', 'woningcorporatie');
});

VerzekeringMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Verzekering', 'Test bericht', 'verzekering');
});

JustisMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Justis', 'Test bericht', 'justis');
});

DuoMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Duo', 'Test bericht', 'duo');
});

PensioenfondsMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Pensioenfonds', 'Test bericht', 'pensioenfonds');
});

const InnovatiemakersMessageButton = document.getElementById('innovatiemakers-message-button');

InnovatiemakersMessageButton.addEventListener('click', () => {
    addMockMessageToTrustedContacts('Innovatiemakers', messageTexts.innovatiemakers, 'innovatiemakers'); 
    instellingenSection.style.display = 'none';
    bottomNav.style.display = 'flex';
    walletScreen.style.display = 'block';
});

function openMessageDetails(sender, message, datetime, messageType) {
  bottomNav.style.display = 'none';
  
  const messageDetailsScreen = document.getElementById('message-details-screen');
  messageDetailsScreen.style.display = 'block';
  trustedContactsSection.style.display = 'none';

  const messageSenderElement = document.getElementById('contact-name');
  const messageDatetimeElement = document.getElementById('message-datetime');
  const messageTextElement = document.getElementById('message-text');

  messageSenderElement.textContent = sender;
  messageDatetimeElement.textContent = datetime;
  messageTextElement.innerHTML = message;

  if (messageType === 'ipa6') {
      const shareLink = document.getElementById('share-link');
      if (shareLink) {
          shareLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';
              cardCatalogue.style.display = 'block'; 
              document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              overviewNavbarItem.classList.add('active');
          });
      }
  } else if (messageType === 'ipa7') {
      const shareLink = document.getElementById('ipa7-share-link');
      if (shareLink) {
          shareLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';
              const mockVerifierData = {
                  type: "verifier",
                  requester: "Werkgever IPA-7",
                  reason: "Diploma delen voor aanmeldingsproces",
                  csas: [{ issuedBy: "DUO", name: "Diploma Verpleegkunde" }],
                  a: "12t"
              };
              window.currentCsasData = mockVerifierData;
              populateCsasModal(mockVerifierData);
              csasModal.style.display = 'flex';
              document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              overviewNavbarItem.classList.add('active');
          });
      }
  } else if (messageType === 'ipa8') {
      const mandateLink = document.getElementById('ipa8-mandate-link');
      if (mandateLink) {
          mandateLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';

              const mockMandateData = {
                  type: "mandate",
                  requester: "Woningcorporatie Leijendak",
                  LEID: "NL_KVK_00000000",
                  reason: "financiële check",
                  geldigheidsduur: "30 dagen",
                  intrekbaar: "Niet intrekbaar",
                  mandate: [{ issuedBy: "BD", dienst: "Gegevensuitvraag Inkomensafhankelijke Huurregelingen", name: "Inkomensverklaring" }],
                  a: "12t"
              };

              handleMandateQR(mockMandateData, new Date().toLocaleString());
              mandateModal.style.display = 'flex';
              document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              overviewNavbarItem.classList.add('active');
          });
      }
  } else if (messageType === 'innovatiemakers') {
      const paymentLink = document.getElementById('invoice-payment-link');
      if (paymentLink) {
          paymentLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';
              
              const mockPPOPData = {
                  type: "PPOP",
                  requester: "Innovatiemakers",
                  LEID: "NL_KVK_000000000",
                  amount: "550.00",
                  currency: "EUR",
                  referenceId: "20241007",
                  rdfcppop: ["IBAN", "IADR"],
                  a: "w"
              };
              
              window.currentPpopData = mockPPOPData;
              populatePpopModal(mockPPOPData);
              ppopModal.style.display = 'flex';
              
              document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              overviewNavbarItem.classList.add('active');
          });
      }
  }
}
function addMockMessageToTrustedContacts(sender, message, messageType) {
  const messagesGrid = document.getElementById('messages-grid');
  if (messagesGrid) {
      const datetime = new Date().toLocaleString();
      const messageItem = document.createElement('li');
      messageItem.classList.add('message-item');

      const truncatedSender = sender.length > 10 ? sender.substring(0, 10) + '...' : sender;

      let logoHTML = '';
      switch (sender.toLowerCase()) {
          case 'duo':
              logoHTML = '<img src="${baseUrl}/demo/duologo.svg" alt="DUO logo" class="logo-icon">';
              break;
          case 'belastingdienst':
              logoHTML = '<img src="${baseUrl}/demo/bdlogo.svg" alt="Belastingdienst logo" class="logo-icon">';
              break;
          case 'woningcorporatie leijendak':
              logoHTML = '<img src="${baseUrl}/demo/woningcorporatielogo.svg" alt="Leijendak logo" class="logo-icon">';
              break;
          case 'werkgever ipa 5':
              logoHTML = '<img src="${baseUrl}/demo/ipa5logo.svg" alt="IPA 5 logo" class="logo-icon">';
              break;
          case 'werkgever ipa 6':
              logoHTML = '<img src="${baseUrl}/demo/ipa6logo.svg" alt="IPA 6 logo" class="logo-icon">';
              break;
          case 'werkgever ipa 7':
              logoHTML = '<img src="${baseUrl}/demo/ipa7logo.svg" alt="IPA 7 logo" class="logo-icon">';
              break;
          case 'duo':
              logoHTML = '<img src="${baseUrl}/demo/duologo.svg" alt="DUO logo" class="logo-icon">';
              break;
          case 'justis':
              logoHTML = '<img src="${baseUrl}/demo/bdlogo.svg" alt="Justis logo" class="logo-icon">';
              break;
          case 'woningcorporatie':
              logoHTML = `
                  <div class="icon-circle" style="background-color: #4abd84;">
                      <i class="fas fa-home"></i>
                  </div>`;
              break;
          case 'notaris':
              logoHTML = `
                  <div class="icon-circle" style="background-color: #1E3A5F;">
                      <i class="fas fa-pen-nib" style="color: white;"></i>
                  </div>`;
              break;
          case 'verzekering':
              logoHTML = `
                  <div class="icon-circle" style="background-color: #9ac1db;">
                      <i class="fas fa-shield-alt" style="color: white;"></i>
                  </div>`;
              break;
          case 'pensioenfonds':
              logoHTML = `
                  <div class="icon-circle" style="background-color: #0a73ad;">
                      <i class="fas fa-piggy-bank" style="color: white;"></i>        
                  </div>`;
              break;
          default:
              logoHTML = '';
              break;
      }

      const truncatedMessage = message.length > 50 ? message.substring(0, 50) + '...' : message;

      messageItem.innerHTML = `
          <div class="message-item-container">
              <div class="message-logo">
                  ${logoHTML}
              </div>
              <div class="message-content">
                  <div class="message-header">
                      <strong class="message-sender">${truncatedSender}</strong>
                      <span class="message-datetime">${datetime}</span>
                  </div>
                  <div class="message-body">
                      <span>${truncatedMessage}</span>
                  </div>
              </div>
          </div>
      `;

      messageItem.addEventListener('click', () => {
          openMessageDetails(sender, message, datetime, messageType);

          const notificationBadge = document.getElementById('notification-badge');
          if (notificationBadge) {
              notificationBadge.style.display = 'none';
          }
      });

      messagesGrid.appendChild(messageItem);

      console.log("Berichten voor sortering:", Array.from(messagesGrid.children).map(msg => msg.querySelector('.message-datetime').textContent));

      const sortedMessages = Array.from(messagesGrid.children)
          .sort((a, b) => {
              const dateStrA = a.querySelector('.message-datetime').textContent;
              const dateStrB = b.querySelector('.message-datetime').textContent;
              console.log("Oorspronkelijke datum A:", dateStrA, "Geconverteerde datum A:", convertToStandardDate(dateStrA));
              console.log("Oorspronkelijke datum B:", dateStrB, "Geconverteerde datum B:", convertToStandardDate(dateStrB));
       
              const dateA = new Date(convertToStandardDate(dateStrA));
              const dateB = new Date(convertToStandardDate(dateStrB));
              return dateB - dateA;
          });

      console.log("Berichten na sortering:", sortedMessages.map(msg => msg.querySelector('.message-datetime').textContent));

      messagesGrid.innerHTML = '';
      sortedMessages.forEach(msg => messagesGrid.appendChild(msg));

      const notificationBadge = document.getElementById('notification-badge');
      notificationBadge.style.display = 'flex';
      notificationBadge.textContent = '1';
  } else {
      console.error("Trusted Contacts sectie niet gevonden.");
  }
}

openCardCatalogueBtn.addEventListener('click', () => {
  walletScreen.style.display = 'none';
  cardCatalogue.style.display = 'block';
  bottomNav.style.display = 'none';
});

closeCardCatalogueBtn.addEventListener('click', () => {
  cardCatalogue.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
});

openCurrentCardsBtn.addEventListener('click', function() {
  currentCardsSection.style.display = 'flex';
  walletScreen.style.display = 'none';
  bottomNav.style.display = 'none';
  displayCredentials();
});

closeCurrentCardsBtn.addEventListener('click', function() {
  currentCardsSection.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
});

const searchInput = document.getElementById('search-input');
const demoLinks = document.querySelectorAll('.demo-button');

searchInput.addEventListener('input', function() {
  const filter = searchInput.value.toLowerCase();

  demoLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    if (text.includes(filter)) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
});
let currentSigningDocument = {
  name: '',
  isFake: false
};

signFromStorageButton.addEventListener('click', () => {
signFromStorageFileExplorerModal.style.display = 'flex';
});

signFromStorageFileExplorerCloseButton.addEventListener('click', () => {
signFromStorageFileExplorerModal.style.display = 'none';
signFromStorageFileInput.value = '';
});

const fileListContainer = document.querySelector('.file-list');
fileListContainer.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('fake-file-btn')) {
      const filename = event.target.getAttribute('data-filename');
      signFromStorageConfirmDocumentText.textContent = `Wil je dit document "${filename}" ondertekenen?`;
      signFromStorageFileExplorerModal.style.display = 'none';
      signFromStorageConfirmSignModal.style.display = 'flex';

      currentSigningDocument.name = filename;
      currentSigningDocument.isFake = true;

      const allFakeButtons = document.querySelectorAll('.fake-file-btn');
      allFakeButtons.forEach(btn => btn.classList.remove('clicked'));
      event.target.classList.add('clicked');
  }
});

signFromStorageFileInput.addEventListener('change', (event) => {
const file = event.target.files[0];
if (file) {
    signFromStorageConfirmDocumentText.textContent = `Wil je dit document "${file.name}" ondertekenen?`;
    signFromStorageFileExplorerModal.style.display = 'none';
    signFromStorageConfirmSignModal.style.display = 'flex';
}
}); 

signFromStorageConfirmSignStopButton.addEventListener('click', () => {
signFromStorageConfirmSignModal.style.display = 'none';
signFromStorageFileInput.value = '';
});

signFromStorageConfirmSignAcceptButton.addEventListener('click', () => {
signFromStorageConfirmSignModal.style.display = 'none';
signFromStoragePinConfirmationModal.style.display = 'flex';
resetPinInputs();
});

signFromStorageConfirmPinBtn.addEventListener('click', () => {
const timestamp = new Date().toLocaleString();

let documentName = 'Onbekend document';
const file = signFromStorageFileInput.files[0];
if (file) {
    documentName = file.name;
} else {
    const lastClickedFakeFile = document.querySelector('.file-list .fake-file-btn.clicked');
    if (lastClickedFakeFile) {
      console.log ("fictief bestand wordt gebruikt voor ondertekening");
        documentName = lastClickedFakeFile.getAttribute('data-filename');
    }
}

 console.log('Document Name:', documentName);

const newCredential = {
    name: documentName,
    issuedBy: 'Gebruiker',
    type: 'signfromstorage',
    actionTimestamp: timestamp,
    isShareAction: false,
  
    data: {
        documentName: documentName,
        issuedBy: 'Gebruiker',
    }
};

credentials.push(newCredential);
saveCredentials();
showActivities();

signFromStoragePinConfirmationModal.style.display = 'none';

signFromStorageSuccessScreen.style.display = 'flex';

signFromStorageFileInput.value = '';
});

signFromStorageCloseSuccessBtn.addEventListener('click', () => {
signFromStorageSuccessScreen.style.display = 'none';
bottomNav.style.display = 'flex';
});

const signFromStorageDownloadBtn = document.getElementById('signfromstorage-download-btn');

signFromStorageDownloadBtn.addEventListener('click', () => {
  if (currentSigningDocument.isFake) {
      addSignedDocumentToFakeList(currentSigningDocument.name);
      alert('Het ondertekende document is toegevoegd aan de bestandenlijst.');
  } else {
      alert('In deze demo-omgeving is het ondertekende document niet beschikbaar.');
  }

  signFromStorageSuccessScreen.style.display = 'none';

  currentSigningDocument = {
      name: '',
      isFake: false
  };
});

function addSignedDocumentToFakeList(originalDocName) {
console.log ("add signed doc to list started");
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const formattedDate = `${year}${month}${day}-${hours}${minutes}${seconds}`;

const lastDotIndex = originalDocName.lastIndexOf('.');
const baseName = lastDotIndex !== -1 ? originalDocName.substring(0, lastDotIndex) : originalDocName;
const extension = lastDotIndex !== -1 ? originalDocName.substring(lastDotIndex) : '.pdf';

const signedDocName = `${baseName}-signed-${formattedDate}${extension}`;

const newFakeFileButton = document.createElement('button');
newFakeFileButton.classList.add('fake-file-btn');
newFakeFileButton.setAttribute('data-filename', signedDocName);
newFakeFileButton.textContent = signedDocName;

newFakeFileButton.addEventListener('click', () => {
    signFromStorageConfirmDocumentText.textContent = `Wil je dit document "${signedDocName}" ondertekenen?`;
    signFromStorageFileExplorerModal.style.display = 'none';
    signFromStorageConfirmSignModal.style.display = 'flex';

    fakeFileButtons.forEach(btn => btn.classList.remove('clicked'));
    newFakeFileButton.classList.add('clicked');
});

const fileListContainer = document.querySelector('.file-list');
fileListContainer.appendChild(newFakeFileButton);
}

window.onload = () => {
loadCredentials();
showActivities();
};

function populateRdfcfModal(data) {
const rdfcfFormNameElement = document.getElementById('rdfcf-form-name');
rdfcfFormNameElement.textContent = data.formName || 'Onbekend formulier';
addCardScreen.style.display = 'none';
rdfcfModal.style.display = 'flex';

rdfcfDetailsContainer.innerHTML = '';

let fieldsByCard = {};

data.rdfcf.forEach((field) => {
  const fieldName = fieldMapping[field] || field;

  let matchingCard = credentials.find(cred => cred.name === fieldName);

  if (matchingCard) {
    const cardName = matchingCard.name;

    if (!fieldsByCard[cardName]) {
      fieldsByCard[cardName] = { data: matchingCard.data, fields: [], showAllFields: true };
    }
  } else {
    matchingCard = credentials.find(cred => cred.data && cred.data.hasOwnProperty(fieldName));

    if (matchingCard) {
      const cardName = matchingCard.name;

      if (!fieldsByCard[cardName]) {
        fieldsByCard[cardName] = { data: matchingCard.data, fields: [], showAllFields: false };
      }

      fieldsByCard[cardName].fields.push(fieldName);
    } else {
      console.warn(`Field or card '${fieldName}' not found in credentials.`);
    }
  }
});

Object.keys(fieldsByCard).forEach((cardName) => {
  const cardInfo = fieldsByCard[cardName];

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardHeader.textContent = cardName;

  if (cardName === 'Persoonlijke data') {
    cardHeader.style.backgroundColor = '#dfeaf2';
  } else if (cardName === 'Verklaring Omtrent Gedrag (VOG)') {
    cardHeader.style.backgroundColor = '#dfeaf2';
  } else {
    cardHeader.style.backgroundColor = '#dfeaf2';
  }

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  cardContainer.appendChild(cardHeader);
  cardContainer.appendChild(cardContent);

  const cardDetails = document.createElement('div');
  cardDetails.className = 'card-details';

  if (cardInfo.showAllFields) {
    for (let key in cardInfo.data) {
      if (cardInfo.data.hasOwnProperty(key)) {
        const detailRow = document.createElement('div');
        detailRow.className = 'detail-row';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.textContent = `${key}:`;

        const valueDiv = document.createElement('div');
        valueDiv.className = 'value';

        const value = cardInfo.data[key];

        if (key === 'Foto') {
          const img = document.createElement('img');
          img.src = value;
          img.alt = 'Foto';
          img.style.width = '100%';
          valueDiv.appendChild(img);
        } else {
          valueDiv.textContent = value || 'Niet beschikbaar';
        }

        detailRow.appendChild(labelDiv);
        detailRow.appendChild(valueDiv);

        cardDetails.appendChild(detailRow);
      }
    }
  } else {
    cardInfo.fields.forEach(fieldName => {
      const value = cardInfo.data[fieldName];

      const detailRow = document.createElement('div');
      detailRow.className = 'detail-row';

      const labelDiv = document.createElement('div');
      labelDiv.className = 'label';
      labelDiv.textContent = `${fieldName}:`;

      const valueDiv = document.createElement('div');
      valueDiv.className = 'value';
      if (fieldName === 'Foto') {
        const img = document.createElement('img');
        img.src = value;
        img.alt = 'Foto';
        img.style.width = '100%';
        valueDiv.appendChild(img);
      } else {
        valueDiv.textContent = value || 'Niet beschikbaar';
      }

      detailRow.appendChild(labelDiv);
      detailRow.appendChild(valueDiv);

      cardDetails.appendChild(detailRow);
    });
  }

  cardContent.appendChild(cardDetails);

  rdfcfDetailsContainer.appendChild(cardContainer);
});
}

rdfcfAcceptButton.onclick = () => {
pinConfirmationScreenRdfcf.style.display = 'flex';
rdfcfModal.style.display = 'none';
resetPinInputs();
};

rdfcfStopButton.onclick = () => {
rdfcfModal.style.display = 'none';
addCardScreen.style.display = 'none';
walletScreen.style.display = 'block';
bottomNav.style.display = 'flex';
resetQrScanner();
};

confirmPinRdfcfBtn.onclick = () => {
pinConfirmationScreenRdfcf.style.display = 'none';
rdfcfSuccessScreen.style.display = 'flex';
resetPinInputs();

if (window.currentRdfcfData) {
  saveRdfcfSharedData(window.currentRdfcfData);
  console.log("RDFCF data saved:", credentials);
} else {
  console.error("No RDFCF data available to save.");
}
};

function saveRdfcfSharedData(data) {
const timestamp = new Date().toLocaleString();
credentials.push({
  type: 'rdfcf',
  formName: data.formName || 'Onbekend formulier',
  sharedData: data.rdfcf.map(field => fieldMapping[field] || field),
  actionTimestamp: timestamp,
  isShareAction: true
});
saveCredentials();
}

closeRdfcfSuccessBtn.onclick = () => {
rdfcfSuccessScreen.style.display = 'none';
addCardScreen.style.display = 'none';
walletScreen.style.display = 'block';
bottomNav.style.display = 'flex';
};

function populatePpopModal(data) {
ppopRequesterElement.textContent = data.requester || 'Onbekende partij';
ppopAmountElement.textContent = `${data.currency || 'EUR'} ${data.amount || '0.00'}`;

ppopDetailsContainer.innerHTML = '';

let fieldsByCard = {};

data.rdfcppop.forEach((field) => {
  const fieldName = fieldMapping[field] || field;

  console.log(`Mapping field '${field}' to '${fieldName}'`);

  let matchingCard = credentials.find(cred => {
    return cred.data && cred.data.hasOwnProperty(fieldName);
  });

  if (!matchingCard) {
    console.warn(`Veld of kaartje '${fieldName}' niet gevonden in de credentials.`);
    matchingCard = credentials.find(cred => cred.name === fieldName);
  }

  if (matchingCard) {
    console.log(`Gevonden matching kaart voor '${fieldName}':`, matchingCard);
    const cardName = matchingCard.name;

    if (!fieldsByCard[cardName]) {
      fieldsByCard[cardName] = { data: matchingCard.data, fields: [], showAllFields: false };
    }

    if (matchingCard.name === fieldName) {
      fieldsByCard[cardName].showAllFields = true;
    } else {
      fieldsByCard[cardName].fields.push(fieldName);
    }
  } else {
    console.warn(`Veld of kaartje '${fieldName}' niet gevonden in de credentials.`);
  }
});

Object.keys(fieldsByCard).forEach((cardName) => {
  const cardInfo = fieldsByCard[cardName];

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardHeader.textContent = cardName;

  switch (cardName) {
    case 'IBAN-account number credentials':
      cardHeader.style.backgroundColor = '#bdcedb';
      break;
    case 'e-invoice address':
      cardHeader.style.backgroundColor = '#bdcedb';
      break;
    default:
      cardHeader.style.backgroundColor = '#bdcedb';
  }

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  cardContainer.appendChild(cardHeader);
  cardContainer.appendChild(cardContent);

  const cardDetails = document.createElement('div');
  cardDetails.className = 'card-details';

  if (cardInfo.showAllFields) {
    for (let key in cardInfo.data) {
      if (cardInfo.data.hasOwnProperty(key)) {
        const detailRow = document.createElement('div');
        detailRow.className = 'detail-row';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.textContent = `${key}:`;

        const valueDiv = document.createElement('div');
        valueDiv.className = 'value';
        valueDiv.textContent = cardInfo.data[key] || 'Niet beschikbaar';

        detailRow.appendChild(labelDiv);
        detailRow.appendChild(valueDiv);

        cardDetails.appendChild(detailRow);
      }
    }
  } else {
    cardInfo.fields.forEach(fieldName => {
      const value = cardInfo.data[fieldName];

      const detailRow = document.createElement('div');
      detailRow.className = 'detail-row';

      const labelDiv = document.createElement('div');
      labelDiv.className = 'label';
      labelDiv.textContent = `${fieldName}:`;

      const valueDiv = document.createElement('div');
      valueDiv.className = 'value';
      valueDiv.textContent = value || 'Niet beschikbaar';

      detailRow.appendChild(labelDiv);
      detailRow.appendChild(valueDiv);

      cardDetails.appendChild(detailRow);
    });
  }

  cardContent.appendChild(cardDetails);

  ppopDetailsContainer.appendChild(cardContainer);
});
}

ppopStopButton.addEventListener('click', () => {
ppopModal.style.display = 'none';
addCardScreen.style.display = 'none';
walletScreen.style.display = 'block';
bottomNav.style.display = 'flex';
resetQrScanner();
});

ppopAcceptButton.addEventListener('click', () => {
ppopModal.style.display = 'none';
ppopPinConfirmationScreen.style.display = 'flex';
resetPinInputs();
});

confirmPinPpopBtn.addEventListener('click', () => {
const timestamp = new Date().toLocaleString();

  const transactionId = 'TX-' + Math.floor(Math.random() * 1000000000);

  window.currentPpopData.transactionId = transactionId;

const newCredential = {
  name: 'Betaling aan ' + (window.currentPpopData.requester || 'Onbekende partij'),
  amount: window.currentPpopData.amount || '0.00',
  currency: window.currentPpopData.currency || 'EUR',
  issuedBy: window.currentPpopData.requester || 'Onbekende partij',
  type: 'ppop',
  actionTimestamp: timestamp,
  isShareAction: false,
  data: {
    requester: window.currentPpopData.requester,
    amount: window.currentPpopData.amount,
    currency: window.currentPpopData.currency,
    referenceId: window.currentPpopData.referenceId,
  }
};

credentials.push(newCredential);
saveCredentials();
showActivities();

ppopPinConfirmationScreen.style.display = 'none';

ppopSuccessRequester.textContent = window.currentPpopData.requester || 'Onbekende partij';
ppopSuccessScreen.style.display = 'flex';
});

ppopCloseSuccessButton.addEventListener('click', () => {
ppopSuccessScreen.style.display = 'none';
addCardScreen.style.display = 'none';
walletScreen.style.display = 'block';
bottomNav.style.display = 'flex';
});

ppopDownloadButton.addEventListener('click', () => {
const link = document.createElement('a');
link.href = 'invoice.pdf';
link.download = 'invoice.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
});