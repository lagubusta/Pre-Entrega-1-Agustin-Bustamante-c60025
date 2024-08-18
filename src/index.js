import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {NavBar} from "./components/NavBar/NavBar"
import { CartWidget } from "./components/CartWidget/CartWidget"

createRoot(document.getElementById('root')).render(
<App />
)