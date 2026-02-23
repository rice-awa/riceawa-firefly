import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response('0afaaac379e24aa8b7de6a969534e2b5', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
