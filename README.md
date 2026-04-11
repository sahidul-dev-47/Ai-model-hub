<div align="center">

# 🤖 AI Model Hub

### Explore & Discover the World's Leading AI Models — All in One Place

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/sahidul-dev-47/Ai-model-hub)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/sahidul-dev-47/Ai-model-hub)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/sahidul-dev-47/Ai-model-hub)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://github.com/sahidul-dev-47/Ai-model-hub)
[![JSX](https://img.shields.io/badge/JSX-Components-8B5CF6?style=for-the-badge)](https://github.com/sahidul-dev-47/Ai-model-hub)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://github.com/sahidul-dev-47/Ai-model-hub)

![visitors](https://komarev.com/ghpvc/?username=sahidul-dev-47&label=Repo+Views&color=blueviolet&style=flat-square)

</div>

---

## 📖 About The Project

**AI Model Hub** is a React-based web application that serves as a central directory for exploring and discovering the world's most popular AI models. Built with React and Vite, the app showcases different AI tools and models in a clean, component-driven UI — making it easy for developers and enthusiasts to browse what's available in the AI space.

---

## ✨ Features

- 🤖 **AI Model Directory** — Browse a curated collection of popular AI models
- 🃏 **Component-Based UI** — Each model displayed as a reusable React card component
- ⚡ **Fast & Lightweight** — Powered by Vite for instant dev server and optimized builds
- 🎨 **Clean Design** — Styled with CSS for a modern, responsive layout
- 🔄 **Dynamic Rendering** — Models rendered dynamically using JSX and React state
- 📱 **Responsive Layout** — Works seamlessly across all screen sizes

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | App entry point structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Component styling & responsive layout |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | App logic & interactivity |
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | UI component architecture |
| ![JSX](https://img.shields.io/badge/JSX-8B5CF6?style=flat) | Declarative UI templating |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build tool & dev server |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

```bash
node -v
npm -v
```

### Installation & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/sahidul-dev-47/Ai-model-hub.git

# 2. Navigate into the project folder
cd Ai-model-hub

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

> The app will run at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
Ai-model-hub/
│
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── App.jsx           # Root component
│   ├── main.jsx          # React DOM entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies
└── eslint.config.js      # ESLint rules
```

---

## 🧠 React & JSX Concepts Used

```jsx
// Functional Components
const ModelCard = ({ name, description, category }) => {
  return (
    <div className="model-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="badge">{category}</span>
    </div>
  );
};

// Props & Dynamic Rendering
const App = () => {
  return (
    <div className="grid">
      {models.map((model) => (
        <ModelCard key={model.id} {...model} />
      ))}
    </div>
  );
};

// useState Hook
const [selected, setSelected] = useState(null);

// DOM Interaction via React
element.classList, onClick handlers, conditional rendering
```

---

## 🎯 What I Learned

- Building a **component-based UI** with React and JSX
- Understanding **props** and **state** in functional components
- Using **React hooks** like `useState` for interactivity
- Setting up a modern React project with **Vite**
- Writing **reusable components** and structuring a React app
- Styling React components with **CSS modules and classes**
- Rendering lists dynamically using `.map()` in JSX

---

## 🔮 Future Improvements

- [ ] Add **search & filter** by AI model category
- [ ] Fetch live AI model data from a **public API**
- [ ] Add **detail page** for each AI model
- [ ] Implement **dark / light mode** toggle
- [ ] Add **favourites** feature with localStorage
- [ ] Deploy live with **GitHub Pages or Vercel**

---

## 👨‍💻 Author

**Sahidul Islam**

[![GitHub](https://img.shields.io/badge/GitHub-sahidul--dev--47-181717?style=flat&logo=github)](https://github.com/sahidul-dev-47)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sahidul--islam-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/sahidul-islam-)

---

<div align="center">

*If you found this project useful, please consider giving it a ⭐ — it keeps me motivated!*

</div>
