---
title: "Release 2.13.0"
date: 2026-06-22
summary: "Adds support for Minecraft 26.2, with improved chunk reading performance, a new PluginMessage common wrapper, and several bug fixes."
---

## PacketEvents 2.13.0 is finally out! 🎉

This minor release includes mainly support for Minecraft 26.2, but also includes a few smaller fixes and improvements.

Recent donors: **@PebbleHost**\
If you intend on donating and do not wish to be mentioned, please add such a note on your donation.

## Announcement 📢

Visit our website: https://packetevents.com/ \
Documentation: https://docs.packetevents.com/ \
Javadoc: https://javadocs.packetevents.com/

Thanks to all contributors who helped make this release possible:

- @booky10
- @Jan1k1
- @linsaftw
- @rafi67000
- @retrooper
- @Rothes
- @TheFaser

## What's Changed

- Improve chunk reading performance ([#1526](https://github.com/retrooper/packetevents/pull/1526))
- Add PluginMessage Common Wrapper ([#1523](https://github.com/retrooper/packetevents/pull/1523))
- Fix custom world clock use in dimension types ([`7c4dd0b`](https://github.com/retrooper/packetevents/commit/7c4dd0b039e695e5ae7d9c0562082f913cbb2677))
- Add support for 26.2 ([#1529](https://github.com/retrooper/packetevents/pull/1529), [`471a9e2`](https://github.com/retrooper/packetevents/commit/471a9e21144f0ea56e4053bda0477cca8402dc69), [`b1bbbae`](https://github.com/retrooper/packetevents/commit/b1bbbaed2f7bd8e09ff758bfa02f9b63df21c3b1))
- Update Gradle, Gradle plugins and actions ([#1533](https://github.com/retrooper/packetevents/pull/1533), [#1534](https://github.com/retrooper/packetevents/pull/1534))
- Fix nullability annotations for ProtcolManager/PlayerManager ([#1535](https://github.com/retrooper/packetevents/pull/1535))
- Ignore udp listeners during injection ([#1537](https://github.com/retrooper/packetevents/pull/1537))

**View Full Changelog**: [`v2.12.2...v2.13.0`](https://github.com/retrooper/packetevents/compare/v2.12.2...v2.13.0)
