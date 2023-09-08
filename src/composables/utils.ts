export function utilAwaitTime(timer: number): Promise<void> {
  return new Promise((resolve) => {
    const timers: NodeJS.Timeout = setTimeout(() => {
      clearTimeout(timers)
      resolve()
    }, timer)
  })
}

export async function utilDownloadBase64Image(base64String: string, filename: string) {
  const link = document.createElement('a')
  link.href = base64String
  link.download = filename
  link.click()
  await utilAwaitTime(1000)
  console.clear()
}
