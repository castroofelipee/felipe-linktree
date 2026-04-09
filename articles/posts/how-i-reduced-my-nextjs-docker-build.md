---
title: "How I Reduced My Next.js Docker Build Time from 12 Minutes to 6"
date: "2026-04-09"
description: "In this post, I'll share my experience reducing the build time of my Next.js application from 12 minutes to 6 minutes."
tags: ["nextjs", "docker", "build", "speed"]
coverImage: "/reduce-next-build.png"
---

# How I Reduced My Next.js Docker Build Time from 12 Minutes to 6

Recently, I ran into a frustrating problem: my Next.js app was building very fast locally, but when I deployed it using Docker on Coolify, the build time jumped to around 12 minutes.

That didn’t make sense at first. Same code, same build command — but completely different performance.

Here’s what I learned and how I managed to cut that time in half.

---

## The Problem

Locally, everything was smooth:

* `npm run build` was fast
* No errors
* Good developer experience

But in production (Docker on a 1 vCPU VPS), things were very different:

* Builds took ~12 minutes
* Sometimes network-related delays
* High CPU usage

So clearly, the issue wasn’t the code itself — it was the environment.

---

## What Was Slowing It Down

After investigating, I found a few key problems:

### 1. Huge Docker build context

I didn’t have a `.dockerignore` file.

That meant Docker was sending everything to the build context:

* `node_modules`
* `.next`
* `.git`

This alone added a lot of unnecessary overhead.

---

### 2. Dependency installation issues

My project uses `npm`, but the Dockerfile was using `yarn`.

That caused:

* lockfile mismatch warnings
* unnecessary installs
* no proper caching

---

### 3. No effective caching

Every deploy was basically a “cold build”:

* dependencies reinstalled from scratch
* no reuse of previous layers

On a small VPS, this hurts a lot.

---

### 4. Network dependency during build

I was using `next/font/google`, which fetches fonts during the build.

On a slower or restricted server, this introduces delays or even failures.

---

## What I Changed

Here’s what actually made a difference:

### Added a `.dockerignore`

This reduced the build context dramatically.

```bash
node_modules
.next
.git
.env
```

---

### Fixed the Dockerfile

* Switched fully to `npm`
* Used `npm ci` instead of `npm install`
* Structured layers to improve caching
* Used multi-stage build

---

###  Enabled standalone output

In `next.config.js`:

```js
output: "standalone"
```

This reduced the final image size and made deployment lighter.

---

## The Result

After these changes:

* Build time dropped from ~12 minutes to ~6 minutes
* Builds became more stable
* Fewer network-related issues

---

## What I’d Do Next

Even at 6 minutes, I don’t think building on the server is ideal.

The next step is to:

* build the Docker image in CI (like GitHub Actions)
* push it to a registry
* let Coolify just pull and run it

That way, the server doesn’t waste time (or CPU) building.

---

## Final Thought

This wasn’t really a Next.js problem.

It was a combination of:

* Docker configuration
* lack of caching
* and environment constraints

Once I looked at the system as a whole, the bottlenecks became obvious.

If your local build is fast but your deploy is slow, don’t blame the framework first — look at your pipeline.

That’s usually where the real problem is.
