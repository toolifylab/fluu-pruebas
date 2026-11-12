// ═══════════════════════════════════════════════════════════════
//  CONFIGURACIÓN DE TU ENTORNO DE PRUEBAS
//  Reemplaza cada PEGA_AQUI con tus datos. Deja las comillas '...'
//  y las comas tal como están. Guarda con "Commit changes".
// ═══════════════════════════════════════════════════════════════
window.FLUU_CONFIG = {

  // 1) Datos de tu app web de Firebase
  //    (Firebase → engranaje → Configuración del proyecto → Tus apps)
  firebase: {
    apiKey: 'PEGA_AQUI',
    authDomain: 'PEGA_AQUI',
    projectId: 'PEGA_AQUI',
    storageBucket: 'PEGA_AQUI',
    messagingSenderId: 'PEGA_AQUI',
    appId: 'PEGA_AQUI'
  },

  // 2) Correo del administrador: el mismo que creaste en
  //    Firebase → Authentication → Users → Add user
  adminEmail: 'PEGA_AQUI',

  // 3) Dirección donde queda publicada esta app de pruebas
  //    (cambia TU-USUARIO por tu usuario de GitHub)
  fluuUrl: 'https://TU-USUARIO.github.io/fluu-pruebas/',

  // 4) Dirección de tu página de planes (botón "Ver planes")
  planesUrl: 'https://toolifylab.github.io/'

};
