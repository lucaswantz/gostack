import { Router } from 'express';

const usersRouter = Router();

// POST http://localhost:3333/appointments
usersRouter.post('/', async (request, response) => {
  try {
    return response.send();
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
