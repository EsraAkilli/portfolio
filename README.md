# Esra Akilli - AI & ML Engineer CV Website

A modern, professional CV website built with React (TypeScript) frontend and Python (FastAPI) backend. Features beautiful animations, responsive design, and a contact form.

![CV Website Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-brightgreen)

## 🚀 Features

- **Modern Design**: Glass morphism effects, gradient backgrounds, and smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling navigation, hover effects, and form interactions
- **Professional**: Clean layout showcasing experience, education, skills, and portfolio
- **Contact Form**: Functional contact form with backend integration
- **Fast**: Built with Vite for lightning-fast development and builds

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Icons** for beautiful icons
- **Axios** for API calls

### Backend
- **FastAPI** (Python)
- **Pydantic** for data validation
- **CORS** middleware for frontend integration
- **Uvicorn** ASGI server

## 📁 Project Structure

```
cv-website/
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Volunteering.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── App.tsx         # Main App component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Frontend dependencies
│   ├── tailwind.config.js  # TailwindCSS config
│   ├── vite.config.ts      # Vite configuration
│   └── index.html          # HTML template
└── README.md
```

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Python 3.8+**
- **Node.js 16+**
- **npm** or **yarn**

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd cv-website
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the backend server
python main.py
```

The backend will be available at `http://localhost:8000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🔧 Development

### Backend Development

The FastAPI backend provides the following endpoints:

- `GET /` - API health check
- `GET /api/cv` - Get complete CV data
- `GET /api/contact` - Get contact information
- `GET /api/experience` - Get experience data
- `GET /api/education` - Get education data
- `GET /api/skills` - Get skills data
- `POST /api/contact-form` - Submit contact form

### Frontend Development

The React frontend is organized into reusable components:

- **Header**: Navigation with smooth scrolling
- **Hero**: Main introduction section with profile
- **About**: Career objective and stats
- **Experience**: Work experience timeline
- **Education**: Educational background
- **Skills**: Technical skills categorized
- **Volunteering**: Community involvement and personal info
- **Contact**: Contact form and information
- **Footer**: Social links and copyright

### Customization

To customize the CV data, edit the `cv_data` object in `backend/main.py`:

```python
cv_data = {
    "personal_info": {
        "name": "Your Name",
        "title": "Your Title",
        "career_objective": "Your career objective..."
    },
    # ... rest of the data
}
```

### Styling

The project uses TailwindCSS with custom configuration in `frontend/tailwind.config.js`. Custom styles are defined in `frontend/src/index.css`.

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: Full-width layout with animations
- **Tablet**: Adjusted grid layouts and spacing
- **Mobile**: Single-column layout with touch-friendly interactions

## 🎨 Design Features

- **Glass Morphism**: Semi-transparent elements with backdrop blur
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: Framer Motion powered interactions
- **Hover Effects**: Interactive elements with visual feedback
- **Loading States**: Elegant loading spinners and transitions

## 🚀 Deployment

### Backend Deployment

The FastAPI backend can be deployed to platforms like:

- **Heroku**
- **Railway**
- **DigitalOcean**
- **AWS/GCP/Azure**

### Frontend Deployment

The React frontend can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3**

### Build for Production

```bash
# Build frontend
cd frontend
npm run build

# The build files will be in the `dist` directory
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Esra Akilli**
- Email: akilliesa.01@gmail.com
- LinkedIn: [esra-akilli](https://linkedin.com/in/esra-akilli)
- GitHub: [EsraAkilli](https://github.com/EsraAkilli)

---

⭐ If you found this helpful, please give it a star!

Built with ❤️ using React and Python 