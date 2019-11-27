const path = require('path');
const router = require('express').Router();
const authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);

// ? If proxied from client, why send back
// If no server-side routes are hit, send React app
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;