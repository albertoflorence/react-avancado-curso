const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
export const push = jest.fn()
useSession.mockImplementation(() => ({ data: { jwt: '123' } }))

export { useSession }
