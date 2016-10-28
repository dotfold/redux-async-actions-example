/* @flow */

import 'whatwg-fetch'
import bind from 'lodash.bind'

import type { FetcherConfig } from '../../types'

export default class BaseFetcher {
  constructor (name: string, config: FetcherConfig) {
    this.name = name || 'BaseFetcher'
    this.remoteUrl = `${config.protocol}://${config.host}${config.base}`
  }

  name: string
  remoteUrl: string
  resource: string

  // this method should be partially applied in each specialization
  execute (resource: string, getAuth: () => string, method: MethodType ): * {
    console.log(resource, getAuth, method)
    const auth = getAuth()
    const wrappedExecute = bind(async () => {
      const request = new Request(`${this.remoteUrl}${resource}`, {
        method,
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `${auth}`
        })
      })
      return await fetch(request)
    }, this)

    return wrappedExecute()
  }
}
