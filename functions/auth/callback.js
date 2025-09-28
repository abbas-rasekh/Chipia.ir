export async function onRequest(context) {
  return new Response("Callback is working!", {
    headers: { "content-type": "text/plain" },
    status: 200,
  });
}
