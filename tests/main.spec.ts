jest.resetModules()

import moment from 'moment'
import tlis from '../src/main'

test('string', () => {
  const d = new Date('2010-05-05T23:00:00.000Z').toString()
  const lis = tlis(d)
  const m = moment('2010-05-05T23:00:00.000Z')
  expect(lis).toEqual(m.toISOString(true).split('+')[0])
})

test('Date', () => {
  const d = new Date('2010-05-05T23:00:00.000Z')
  const lis = tlis(d)
  const m = moment('2010-05-05T23:00:00.000Z')
  expect(lis).toEqual(m.toISOString(true).split('+')[0])
})

test('UNIX Timestamp', () => {
  const d = new Date('2010-05-05T23:00:00.000Z').valueOf()
  const lis = tlis(d)
  const m = moment('2010-05-05T23:00:00.000Z')
  expect(lis).toEqual(m.toISOString(true).split('+')[0])
})

test('Wrong date', () => {
  expect(() => {
    tlis('asdf')
  }).toThrow(TypeError)
})

test('Default now', () => {
  const lis = tlis()
  const m = moment().toISOString(true).split('+')[0]
  expect(Math.abs(moment(lis).diff(m))).toBeLessThanOrEqual(1)
})
