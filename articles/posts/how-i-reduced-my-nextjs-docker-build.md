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
