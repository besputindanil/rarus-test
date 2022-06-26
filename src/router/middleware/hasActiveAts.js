export default async function authenticated({ next, store, nextMiddleware }) {
  const activeAts = store.getters['ats/activeAts'];

  if (!activeAts) {
    return next({ name: 'ats/1' });
  }

  return nextMiddleware();
}
