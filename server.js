const app = require('./app');
const cors = require('cors');
app.use(cors({
  origin: 'https://job-app-forntend.vercel.app/', 
  optionsSuccessStatus: 200,
}));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
