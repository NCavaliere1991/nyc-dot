export const formatDate = (date: string) => {
  const dateObj = new Date(date)
  const month = dateObj.toLocaleString('default', { month: 'numeric' })
  const day = dateObj.toLocaleString('default', { day: 'numeric' })
  const year = dateObj.toLocaleString('default', { year: 'numeric' })
  const formattedDate = `${month}/${day}/${year}`
  return formattedDate
}
