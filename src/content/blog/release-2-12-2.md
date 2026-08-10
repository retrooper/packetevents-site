---
title: "Release 2.12.2"
date: 2026-06-01
---

# PacketEvents 2.12.2 is finally out! 🎉

This patch release contains a few critical bug fixes as well as some optimizations and reworks. 

Recent donors: **@PebbleHost, @perlsol, @TRGReal**\
If you intend on donating and do not wish to be mentioned, please add such a note on your donation.

Unfortunately, the PacketEvents PayPal account is no longer active. I hope to resolve any concerns with PayPal, who has frozen funds and activity on the account. If you want to donate, please use [GitHub Sponsors](https://github.com/sponsors/retrooper) or the newly setup [BuyMeACoffee](https://buymeacoffee.com/retrooper).

Thanks to all contributors who helped make this release possible:
- @booky10
- @Beaness
- @SamB440
- @retrooper
- @LeonTG

## What's Changed
* Rework logging system in PacketEvents (now more consistently used across API) [`a1067f5`](https://github.com/retrooper/packetevents/commit/a1067f5e4f53bcd7fbeaa19fb4d8046a3f6248ca)
* Optimize SpigotReflectionUtil.generateEntityId() method [`95afd3f`](https://github.com/retrooper/packetevents/commit/95afd3fce8bfbf7087233a3bd31e0705cd1e4df5)
* Fix transmission/copying of packet wrappers when dealing with multiple packet listeners for the following wrappers: WrapperLoginServerLoginSuccess, WrapperPlayServerDeclareCommands, WrapperPlayServerMapData, WrapperPlayServerPlayerRotation, WrapperPlayServerSpawnWeatherEntity [`20d2bd3`](https://github.com/retrooper/packetevents/commit/20d2bd34326ea9fab602ff07333fcfc713ae6ced)
* Allow for the customization of chat message length limit for legacy Minecraft versions [`a1067f5`](https://github.com/retrooper/packetevents/commit/a1067f5e4f53bcd7fbeaa19fb4d8046a3f6248ca)
* Multiple fixes for WrapperPlayServerSoundEffect [`66d768d`](https://github.com/retrooper/packetevents/commit/66d768d00f6f69c71a9ba27998976a6d2b5020f7), [`73603f8`](https://github.com/retrooper/packetevents/commit/73603f89b7aafab6ff7eed7be488b03fa5e064dc)
* Fix incorrect swapping of pitch and yaw for WrapperPlayServerSpawnEntity on Minecraft versions lower than 1.15 [`0634827`](https://github.com/retrooper/packetevents/commit/063482716d0fd858bef8e65b9c4714c8e1fd4aa9)
* Fix injection cleanup issues on Velocity ([#1489](https://github.com/retrooper/packetevents/issues/1489), [`cb8fb8b`](https://github.com/retrooper/packetevents/commit/cb8fb8b9268f7fb83f2a931432757d7d36ae220b))

**View Full Changelog**: [`v2.12.1...v2.12.2`](https://github.com/retrooper/packetevents/compare/v2.12.1...v2.12.2)
