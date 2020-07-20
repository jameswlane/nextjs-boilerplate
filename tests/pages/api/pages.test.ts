import { NextApiRequest, NextApiResponse } from 'next'

import { mockRequest, mockResponse } from '../../utils/tests-mocks'
import handler from '../../../pages/api/pages'
import { data } from '../../../pages/api/pages/data'

describe('API =>  Pages', () => {
  test('should be a function', async () => {
    expect(handler).toBeInstanceOf(Function)
  })

  test('should return expected response', async () => {
    const req: NextApiRequest = mockRequest()
    const res: NextApiResponse = mockResponse()

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(data))
  })
})
