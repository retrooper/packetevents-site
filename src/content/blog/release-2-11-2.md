---
title: "Release 2.11.2"
date: 2026-01-27
---

# PacketEvents 2.11.2 is finally out! 🎉

This update fixes various bugs. It's encouraged that users update.
Again, huge thanks to all users who have donated their hard-earned money to PacketEvents since the previous release. It's been received & it's very much appreciated.

Recent donors: PebbleHost, SSomar1607, ipavdev, Meed, frap

Also, thanks to the contributors that made this update possible.

If you intend on donating and do not wish to be mentioned, please add such a note on your donation.

# Announcement 📢⚠️

Visit our website: https://packetevents.com
Documentation: https://docs.packetevents.com
JavaDocs: https://javadocs.packetevents.com
I've released a new YouTube [video](https://youtu.be/G7qYRHpZVIo).

## What's Changed (Summary)
* Fixed SynchronizedRegistriesHandler issues
* Fixed various equality/nullability issues with Registry values
* Explicitly specify 'Locale#ROOT' for all String#toLowerCaser() calls
* Removed 'end skylight' for 1.21.8 and below
* Log warning message when failing to uninject from velocity initializer
* Recommend release builds (and fallback to development builds) to users who run outdated software.
* Add 'CHAIN' to the 'CHAINS' tag
* Add new offset(Blockface face, int i) method to Vector3f/d/i classes
* Fixed 'infiniburn' tag parsing for 1.18.1 and older
* Fixed unexpected NPE if bukkit entity is null during unsafe lookup

**View Full Changelog**: https://github.com/retrooper/packetevents/compare/v2.11.1...v2.11.2

## If you want to support PacketEvents, consider donating to us on [Streamlabs](https://streamlabs.com/retrooper/) or sponsoring us on [GitHub Sponsors](https://github.com/sponsors/retrooper).

## Maven/Gradle Dependency Setup Guide

**Check it out**: https://docs.packetevents.com/introduction/development-setup/
