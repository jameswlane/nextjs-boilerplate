export const fetcher: (url: string) => Promise<any> = (url) =>
  fetch(url).then((response) => response.json())
