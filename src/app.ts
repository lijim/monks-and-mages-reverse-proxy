import { server } from './server';

const { PORT = 4001 } = process.env;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${PORT}`);
});
