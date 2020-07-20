import { NextApiRequest, NextApiResponse } from 'next'
import { PageApiResponse } from '../../../libs/types'

import { data } from './data'

function getMapKeyValue(obj: { [key: string]: PageApiResponse }, key: string) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key]
  throw new Error('Invalid map key.')
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<PageApiResponse>
): void => {
  const {
    query: { pageId },
  } = req

  if (
    typeof pageId === 'string' &&
    Object.prototype.hasOwnProperty.call(data, pageId)
  ) {
    const page: PageApiResponse = getMapKeyValue(data, pageId)
    res.statusCode = 200
    res.json(page)
  } else {
    res.statusCode = 500
  }
}
