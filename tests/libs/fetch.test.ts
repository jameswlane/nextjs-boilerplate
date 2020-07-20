import { fetcher } from '../../libs/fetch'

import { data } from '../../pages/api/pages/data'

describe('Library => Fetch', () => {
  it('should call fetch and return a json response', async () => {
    const response = await fetcher('/api/pages')

    expect(response).toEqual(data)
  })
})
