import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api;

// iOS com Emulador: localhost
// iOS com Físico: IP da máquina 

// Android com Emulador: localhost (utilizando adb reverse tcp:3000 tcp:3000)
// Android com Emulador: 10.0.2.2 (Android Studio)
// Android com Emulador: 10.0.3.2 (Genymotion)
// Android com físico: IP da máquina