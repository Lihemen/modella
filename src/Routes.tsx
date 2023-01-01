import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

import {
  HomePage,
  ErrorPage,
  AboutPage,
  RootElement,
  GalleryPage,
} from './pages';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootElement />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'team',
          element: <h1>Team</h1>,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'gallery',
          element: <GalleryPage />,
        },
      ],
    },
  ],
  {
    basename: '/',
  }
);

// Create individual routes for nested routes and update the router object

function Routes() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ModalsProvider>
          {/* <Navbar /> */}
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default Routes;
