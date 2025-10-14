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
                <Route path="/Research-Resources/" element={<HomePage />}/>
                <Route path="/Research-Resources/faq" element={<FAQPage />}/>
                <Route path="/Research-Resources/organizations-and-programs" element={<OrganizationsProgramsPage />}/>
                <Route path="/Research-Resources/calendar" element={<CalendarPage />}/>
                <Route path="/Research-Resources/presenting-your-research" element={<PresentingYourResearchPage />} />
                <Route path="/Research-Resources/cs-specific-research" element={<CSSpecificResearchPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}
