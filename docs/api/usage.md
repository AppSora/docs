# API Usage

> [!NOTE]
> Due to the large amount of requests, We are now limiting API Usage as much as possible. Please self-hosted your own API and we do not accept any offer. We open-source the API for free not close-sourcing it.

## Overview

Since we provided data from Anilist and Gogoanime, you are allowed to use our API to do anything you want.

## Using our API

Our public APIs are hosted on the same free cloud provider and you should not blame us for why the API is unusable.


You are allowed to use our API under the following conditions:

- Testing
- Module (like [Miru](https://github.com/miru-project/miru-app))
- Personal use

All APIs will be rate-limited from 80 to 60 per minute, and you must provide a user agent to use the API. We will block the API that attempted to use our API for larger requests and log as much as possible. We have the right to do it and I don't want to deal with cloud providers.

## Spamming and Misuse

We strictly prohibit any spamming or misuse of the API. This includes but is not limited to:

- Sending more than 60 requests per minute non-stop.
- DDoS
- Using our public API & production API on your high-traffic website
- Data-scraping (my brother in Christ, i also scrape my api from gogo dumbass)

If we detect any spamming or misuse of the API, we reserve the right to block access to the API without notice. We also track the IP address, host and user agent of the API on the header.

## Rate Limit

All of our endpoints are `60 requests per minute`. Rate limiting is great for us because we have a weak server that is hosted using SaSS.

The API will send the following headers in response to each request:

- `X-RateLimit-Limit`: The maximum number of requests allowed per minute.
- `X-RateLimit-Remaining`: The number of requests remaining for the current minute.
- `X-RateLimit-Reset`: The time at which the rate limit will reset, in Unix timestamp format.

## Error messages

If a user exceeds the rate limit or misuses the API, the API will return an error message with the appropriate status code and message. The message will indicate that the user has exceeded the rate limit or misused the API and must stop doing so.

To avoid reaching the limit, you should cache the requests or use a backoff strategy when receiving an error response or self-host your own [amvstrm's API](/docs/api/deploy).

## Self-hosted

We recommend you to self-host our [API](/docs/api/deploy) for better performance and you can implement a caching system (redis) to cache the data and avoid reaching the limit.
