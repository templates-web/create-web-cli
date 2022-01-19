import { setupWorker } from 'msw'

import users from './user'

export const worker = setupWorker(...users)
