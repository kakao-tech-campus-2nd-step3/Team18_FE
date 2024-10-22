export async function setupMockServiceWorker() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./browser');
    worker.start();
  }
}
