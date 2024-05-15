import { store } from './store'
import { Provider } from 'react-redux'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { CustomSelectPage } from './pages/CustomSelectPage.tsx';
import { Menu } from './components/Menu.tsx';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-wrap bg-white">
          <nav className="mt-4 w-full bg-blue-500">
            <Menu />
          </nav>
          <div className="mt-4 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="custom-select" element={<CustomSelectPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}
