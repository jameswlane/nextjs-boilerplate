import { rest } from 'msw'

import { data } from '../../pages/api/pages/data'

const mocks = [
  rest.get('/api/pages', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data))
  }),
  rest.get('/api/pages/home', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.home))
  }),
  rest.get('/api/pages/about', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.about))
  }),
  rest.get('/api/pages/contact', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.contact))
  }),
]

export { mocks }
