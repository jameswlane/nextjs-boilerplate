import { NextApiRequest, NextApiResponse } from 'next'
import { PageApiResponse } from '../../../libs/types'
import { data } from './data'

export default (
  req: NextApiRequest,
  res: NextApiResponse<{ [key: string]: PageApiResponse }>
): void => {
  res.statusCode = 200
  res.json(data)
}
