import { NextApiRequest, NextApiResponse } from 'next'

export const mockRequest = (body = {}): NextApiRequest =>
  ({
    body,
  } as NextApiRequest)

export const mockResponse = (): NextApiResponse => {
  const res: any = {}
  res.status = jest.fn().mockReturnValue(res)
  res.setHeader = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}
