
import BaseFetcher from '../base-fetcher'

const cfg = {
  protocol: 'http',
  host: 'example.com',
  base: ''
}

it('should set name', () => {
  const fetcher = new BaseFetcher('test', cfg)
  expect(fetcher.name).toEqual('test')
})

it('should execute with desired functions', async () => {
  const fetcher = new BaseFetcher('test', cfg)
  fetch.mockResponse(JSON.stringify({id: '1234' }))

  const result = await fetcher.execute('/test', () => 'Auth1', 'GET')
  expect(result).toBeInstanceOf(Response)

})

it('should call the auth function if supplied', async () => {
  const fetcher = new BaseFetcher('test', cfg)
  fetch.mockResponse(JSON.stringify({id: '1234' }))

  // this is a mock - jest doesn't distinguish between stubs, mocks and spies like sinon does
  const authSpy = jest.fn()

  const result = await fetcher.execute('/test', authSpy, 'GET')
  expect(authSpy).toHaveBeenCalled()
})
