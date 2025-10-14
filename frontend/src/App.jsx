import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar.jsx"
import HomePage from "./pages/HomePage.jsx"
import FAQPage from "./pages/FAQPage.jsx"
import OrganizationsProgramsPage from "./pages/OrganizationsProgramsPage.jsx"
import CalendarPage from "./pages/CalendarPage.jsx"
import PresentingYourResearchPage from "./pages/PresentingYourResearchPage.jsx";
import CSSpecificResearchPage from "./pages/CSSpecificResearchPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"


function AppRoutes() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/faq" element={<FAQPage />}/>
                <Route path="/organizations-and-programs" element={<OrganizationsProgramsPage />}/>
                <Route path="/calendar" element={<CalendarPage />}/>
                <Route path="/presenting-your-research" element={<PresentingYourResearchPage />} />
                <Route path="/cs-specific-research" element={<CSSpecificResearchPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default function App() {
    return (
        <BrowserRouter basename="/Research-Resources">
            <AppRoutes />
        </BrowserRouter>
    )
}
