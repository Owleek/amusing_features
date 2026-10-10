const fetchRetry = async (url: string, retryCount = 5) => {
  let count = 0

  const fetchData = async () => {    
    try {
      const resp = await fetch(url)
      const json = await resp.json()
      return json
    } catch (err: unknown) {
      if (count >= 5) throw new Error(err as string)
      count++
      return fetchData()
    }
  }

  return fetchData()
}

fetchRetry("/", 5);
fetchRetry("/", 2);