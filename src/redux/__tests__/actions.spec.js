
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
}

it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    
    fetch.mockResponse(JSON.stringify({id: '1234' }))

    const expectedActions = [
      { type: actions.REQUEST_USERS_LIST },
      { type: actions.RECEIVE_USERS_LIST, payload: { id: '1234'} }
    ]
    const store = mockStore({ users: [] })

    return store.dispatch(actions.fetchUsersList())
      .then(() => { // return of async actions
        const actions = store.getActions()
        // console.log(actions)
        expect(actions[0].type).toEqual('REQUEST_USERS_LIST')
        expect(actions[1].type).toEqual('RECEIVE_USERS_LIST')
        expect(actions[1].payload).toEqual(expectedActions[1].payload)
        expect(actions[1].receivedAt).toBeDefined()
      })
  })

  it('tests window.fetch', () => {
    expect(1 + 1).toEqual(2)
  })

// pit('calls request and success actions if the fetch response was successful', () => {

  // window.fetch = jest.fn().mockImplementation(() =>
  //   Promise.resolve(mockResponse(200, null, '{"id":"1234"}')));

  // return store.dispatch(fetchData(1234))
  //   .then(() => {
      // const expectedActions = store.getActions();
      // expect(expectedActions.length).toBe(2);
      // expect(expectedActions[0]).toEqual({type: types.FETCH_DATA_REQUEST});
      // expect(expectedActions[1]).toEqual({type: types.FETCH_DATA_SUCCESS, id: 1234);
    // })
// });
