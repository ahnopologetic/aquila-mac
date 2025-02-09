import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import LoginPage from './app/login/page'
import DashboardPage from './app/dashboard/page'

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  )
}

function SettingsPage() {
  return (
    <div>
      <h1>Settings Page</h1>
      <p>Here are your settings.</p>
    </div>
  )
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App
