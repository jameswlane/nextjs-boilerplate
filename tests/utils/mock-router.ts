const useRouter = jest.spyOn(require('next/router'), 'useRouter')

/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js
 */
export function mockNextUseRouter(props: {
  route: string
  pathname: string
  query: string
  asPath: string
}): void {
  useRouter.mockImplementationOnce(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
  }))
}
