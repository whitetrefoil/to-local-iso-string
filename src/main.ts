export default function tlis(date: Date|string|number = Date.now()): string {
  const d = new Date(date)

  if (isNaN(d.getTime())) {
    throw new TypeError(`"${date}" is not a valid date`)
  }

  return new Date(d.valueOf() - d.getTimezoneOffset() * 60000).toISOString().slice(0, -1)
}
