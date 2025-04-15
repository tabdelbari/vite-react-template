import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import { MainLayout } from './layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';
import './config/i18n'; // Import i18n configuration
import './styles/global.css';
import { ValidateTokenPage } from './pages/ValidateTokenPage';
import { ErrorPage } from './pages/ErrorPage';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/:token" element={<ValidateTokenPage />} />
              <Route path="/401" element={<ErrorPage statusCode={401} />} />
              <Route path="/500" element={<ErrorPage statusCode={500} />} />
              <Route path="*" element={<ErrorPage statusCode={404} />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
