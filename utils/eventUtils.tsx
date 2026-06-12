export function isLiveStatus(start: string, end: string) {
    const now = new Date()
    const startDate = new Date(start)
    const endDate = new Date(end)

    return now >= startDate && now <= endDate
}

export function formatEventDate(dateString: string) {
    const date = new Date(dateString)

    return {
        day: date.getDate(),
        month: date.toLocaleString('en-US', { month: 'short' }),
    }
}