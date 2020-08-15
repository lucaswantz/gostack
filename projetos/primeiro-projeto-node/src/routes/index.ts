// ser/routes/indes.ts
import { Router } from 'express';

const routes = Router();

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json({ message: 'Hello GoStack' });
});

export default routes;
