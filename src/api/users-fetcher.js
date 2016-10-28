/* @flow */

import BaseFetcher from './base-fetcher'
import partialRight from 'lodash.partialright'

import type { FetcherConfig } from '../../types'

export default class UsersFetcher extends BaseFetcher {
  constructor (config: FetcherConfig, authTokenFn: () => string) {
    super('UsersFetcher', config)

    this.execute = partialRight(this.execute, authTokenFn, 'GET')
  }

  async list (): Promise<Response> {
    return await this.execute('/users')
  }

  async scalar (id: string): Promise<Response> {
    return await this.execute(`/users/${id}`)
  }
}
