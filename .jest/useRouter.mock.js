const useRouter = jest.spyOn(require('next/router'), 'useRouter')
export const push = jest.fn()
useRouter.mockImplementation(() => ({
  push: push,
  query: '',
  asPath: '',
  route: '/'
}))
