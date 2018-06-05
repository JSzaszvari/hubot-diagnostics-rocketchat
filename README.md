# hubot-rocketchat-diagnostics

hubot scripts for diagnosing your hubot in Rocket.Chat

NOTE: This package contains scripts that are only compatible with Rocket.Chat.

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
