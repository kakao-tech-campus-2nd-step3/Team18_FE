import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.tsx';
import { setupMockServiceWorker } from './mocks/setupMockServiceWorker.ts';

setupMockServiceWorker();

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
