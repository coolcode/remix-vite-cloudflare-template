# Remix + Vite Cloudflare Template

- [Online Demo](https://remix-vite-cloudflare-eyb.pages.dev)
- [Remix Docs](https://remix.run/docs)
- [Remix Vite docs](https://remix.run/docs/en/main/future/vite)

## Development

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# setup database
wrangler d1 execute demo --local --file=./schema.sql

# start the remix dev server and wrangler
pnpm run dev
```

Open up [http://localhost:5173](http://localhost:5173) and you should be ready to go!

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`
