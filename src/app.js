// const express = require('express');
// const app = express();
// const port = 3000;
// const path = require('path');
//
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });
//
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
