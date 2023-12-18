# kitiplex-dev

Root **Vercel CLI**:

```
vercel dev
```

**NEVER** use VERCEL CLI other than running in dev server.

**ALWAYS** build using ``pnpm`` command inside website dir.

```
cd website
```

```
pnpm run build
```

```
pnpm run serve
```

To clear ``build cache``, run inside website dir.

```
pnpm run clear
```
