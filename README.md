# hubot-rocketchat-diagnostics

hubot scripts for diagnosing your hubot in Rocket.Chat

NOTE: This package contains scripts that are only compatible with Rocket.Chat.

This package is a combo of:
* Scripts put together by @tim.kinnane
* My JS rewrite of the hubot reload script 
* Anything else that could be useful in exploring/testing/debugging the rocket.chat adapter.

See [`src/diagnostics.js`](src/diagnostics.js) for full documentation.

## Installation

In hubot project repo, run:

`npm install hubot-rocketchat-diagnostics --save`

Then add **hubot-rocketchat-diagnostics** to your `external-scripts.json`:

```json
[
  "hubot-rocketchat-diagnostics"
]
```

## Sample Interaction

```
user1>> hubot hello
hubot>> hello!
```
