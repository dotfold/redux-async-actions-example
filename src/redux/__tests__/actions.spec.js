
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

it('creates users fetch actions with correct properties', () => {

    fetch.mockResponse(JSON.stringify({id: '1234' }))

    const expectedActions = [
      { type: actions.REQUEST_USERS_LIST },
      { type: actions.RECEIVE_USERS_LIST, payload: { id: '1234'} }
    ]
    const store = mockStore({ users: [] })

    return store.dispatch(actions.fetchUsersList())
      .then(() => { // return of async actions
        const actions = store.getActions()
        expect(actions[0].type).toEqual('REQUEST_USERS_LIST')
        expect(actions[1].type).toEqual('RECEIVE_USERS_LIST')
        expect(actions[1].payload).toEqual(expectedActions[1].payload)
        expect(actions[1].receivedAt).toBeDefined()
      })
})
