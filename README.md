[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![Rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/tunnelmoon/u-azazex-last-text-at-one-percent-ba9fc876/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![Reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/tunnelmoon/u-azazex-last-text-at-one-percent-ba9fc876/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

# Last Text at One Percent

make.fun bounty entry: the funniest final text a dying phone sends at one percent battery, under 200 characters, in the phone's own voice.

The entry:

> I stayed alive at 1% for 20 minutes just to send this. You have 47 unread messages, and I am taking every one of them with me.

`main.ts` (Node 22, stdlib only) embeds the line, validates the gate (1 to 200 characters, single line, not only whitespace), writes it to `entry.txt`, and verifies the write with a round-trip read-back.
