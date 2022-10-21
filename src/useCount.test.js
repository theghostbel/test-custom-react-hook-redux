import { renderHook } from '@testing-library/react-hooks'

import useCount from './useCount'

test('test 1', async () => {
  const { result } = renderHook(() => useCount())

  expect(result.current).toEqual(1)
})
