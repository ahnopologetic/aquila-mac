import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  )
}

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-full">
      <h1>Login Page</h1>
      <p>Please log in.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
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
        <main className='p-4'>
          <SidebarTrigger className='mb-4' />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App
