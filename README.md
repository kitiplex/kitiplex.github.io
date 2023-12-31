# [kitiplex-dev](https://github.com/kitiplex) &middot;

This repository contains the website configuration and documentation powering the [Kitiplex website](https://kitiplex.vercel.app/).


## Contents

- [Getting started](#contents)
- [Overview](#contents)
- [Website configuration](#contents)
- [Contributing](#contents)
- [License](#contents)

## Getting started

### Prerequisites

1.  [Git](https://git-scm.com/downloads).
1.  [Node](https://nodejs.org/en/download/) _(version 12 or greater)_.
1.  [Yarn](https://yarnpkg.com/lang/en/docs/install/) _(version 1.5 or greater)_.
1.  A fork of the repo _(for any contributions)_.
1.  A clone of the `kitiplex-dev` repo.

### Run locally

1. Change directory to ``website`` from root:

```
cd website
```
2. Install dependencies:

```
pnpm install
```
3. Start locally:

```
pnpm build
```
```
pnpm serve
```

4. (Optional) Should you need to clear ``build cache``:

```
pnpm run clear
```


## Vercel



```
vercel dev
```

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
