import { lazy, Suspense } from 'react';
import App from '@/App';
import MainLayout from '@/layouts/MainLayout';
import { createBrowserRouter } from 'react-router-dom';
import { PageLoader } from '@/components/PageLoader';

const PortfolioLayout = lazy(() => import('@/layouts/PortfolioLayout'));
const Portfolio = lazy(() => import('@/pages/portfolio/page'));
const PortfolioDetail = lazy(() => import('@/pages/portfolio-detail/page'));

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />
      }
    ]
  },
  {
    element: withSuspense(PortfolioLayout),
    children: [
      {
        path: '/portfolio',
        element: withSuspense(Portfolio)
      },
      {
        path: '/portfolio/:slug',
        element: withSuspense(PortfolioDetail)
      }
    ]
  }
]);
