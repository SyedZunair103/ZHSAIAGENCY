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
import BlogPostPage from "./pages/BlogPost";
import Faqs from "./pages/Faqs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminLayout from "./components/admin/Layout";
import AuthGuard from "./components/admin/AuthGuard";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Services from "./pages/admin/Services";
import ServicesNew from "./pages/admin/ServicesNew";
import ServicesEdit from "./pages/admin/ServicesEdit";
import CaseStudiesAdmin from "./pages/admin/CaseStudies";
import CaseStudiesNew from "./pages/admin/CaseStudiesNew";
import CaseStudiesEdit from "./pages/admin/CaseStudiesEdit";
import BlogPosts from "./pages/admin/BlogPosts";
import BlogPostsNew from "./pages/admin/BlogPostsNew";
import BlogPostsEdit from "./pages/admin/BlogPostsEdit";
import FaqsAdmin from "./pages/admin/FaqsAdmin";
import FaqsNew from "./pages/admin/FaqsNew";
import FaqsEdit from "./pages/admin/FaqsEdit";
import LeadsAdmin from "./pages/admin/LeadsAdmin";
import LeadDetail from "./pages/admin/LeadDetail";
import SettingsAdmin from "./pages/admin/SettingsAdmin";
import AdminNotFound from "./pages/admin/NotFound";

export default function App() {
  return (
    <Routes>
      {/* Public routes — wrapped in Layout (Navbar + Footer) */}
      <Route element={<Layout />}>
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
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin login — standalone, no public Navbar/Footer */}
      <Route path="/admin/login" element={<Login />} />

      {/* Admin routes — protected by AuthGuard, wrapped in AdminLayout */}
      <Route element={<AuthGuard />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="services/new" element={<ServicesNew />} />
          <Route path="services/:id" element={<ServicesEdit />} />
          <Route path="case-studies" element={<CaseStudiesAdmin />} />
          <Route path="case-studies/new" element={<CaseStudiesNew />} />
          <Route path="case-studies/:id" element={<CaseStudiesEdit />} />
          <Route path="blog" element={<BlogPosts />} />
          <Route path="blog/new" element={<BlogPostsNew />} />
          <Route path="blog/:id" element={<BlogPostsEdit />} />
          <Route path="faqs" element={<FaqsAdmin />} />
          <Route path="faqs/new" element={<FaqsNew />} />
          <Route path="faqs/:id" element={<FaqsEdit />} />
          <Route path="leads" element={<LeadsAdmin />} />
          <Route path="leads/:id" element={<LeadDetail />} />
          <Route path="settings" element={<SettingsAdmin />} />
          <Route path="*" element={<AdminNotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}
