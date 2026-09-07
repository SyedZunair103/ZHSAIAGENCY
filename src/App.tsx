import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import AiAutomation from "./pages/AiAutomation";
import Technology from "./pages/Technology";
import Creative from "./pages/Creative";
import ThreeDStudio from "./pages/ThreeDStudio";
import DigitalGrowth from "./pages/DigitalGrowth";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Faqs from "./pages/Faqs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/ai-automation" element={<AiAutomation />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/3d-studio" element={<ThreeDStudio />} />
        <Route path="/digital-growth" element={<DigitalGrowth />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
