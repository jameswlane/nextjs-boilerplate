import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { mocks } from './api-mocks'
const server = setupServer(...mocks)
export { server, rest }
