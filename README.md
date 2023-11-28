This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Reproduce

```bash
# Build in standalone mode
npm run build
# Run
node .next/standalone/server.js
# curl with multiple X-Forwarded-Proto headers 
curl -I http://localhost:3000/ \
-H "X-Forwarded-Proto: https" \
-H "X-Forwarded-Proto: https"

# Resultat
# HTTP/1.1 307 Temporary Redirect
# location: https://0.0.0.0:3000/home
```