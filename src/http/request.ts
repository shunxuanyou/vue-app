interface HttpResponse<T> extends Response {
  data?: T;
}
export default async function http<T> (request: RequestInfo, method = 'GET'): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request, { method })
  try {
    response.data = await response.json()
  } catch (e) {
    console.log(e)
  }
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response
}
