# Randiantech© Services

# Summary

Randiantech© Services is the data platform officially used by Randiantech© applications and services.

# Setup

## Prerrequisites

1. NodeJS 10+, Typescript and Yarn must be installed.

## Local setup

1. Clone repository from Github:

```bash
git clone https://github.com/juancancela/rts.git
```

2. Install dependencies:

```bash
yarn
```

3. Copy environment variables:

```bash
cp .env.example to .env:
```

4. Start application:

```bash
yarn run exec:watch
```

# Documentation

RTS documentation can be generated locally. To do that, run:

```bash
yarn docs:generate
```

and then run following command to open generated docs on your default browser:

```bash
yarn run docs:view
```
