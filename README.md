# [kitiplex-dev](https://github.com/kitiplex) &middot;

This repository contains the website configuration and documentation powering the [Kitiplex website](https://kitiplex.vercel.app/).


## Contents

- [Getting started](#contents)
- [Overview](#contents)
- [Website configuration](#contents)
- [Contributing](#contents)
- [License](#contents)

## ✈️ Getting started

### Prerequisites

1.  [Git](https://git-scm.com/downloads).
1.  [Node](https://nodejs.org/en/download/) _(version 12 or greater)_.
1.  [Yarn](https://yarnpkg.com/lang/en/docs/install/) _(version 1.5 or greater)_.
1.  A fork of the repo _(for any contributions)_.
1.  A clone of the `react-native-website` repo.




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
