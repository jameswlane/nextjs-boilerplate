import { server } from './server'

import 'whatwg-fetch'
import '@testing-library/jest-dom'
import 'jest-extended'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
