/**
 * @author X·M
 * @date 2022-01-19 10:37:42
 */

import { rest } from 'msw'

import { getUrl } from '@/utils'

export default [
  rest.get(getUrl('/user'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'X·M',
      })
    )
  }),
]
