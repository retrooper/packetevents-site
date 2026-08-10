---
title: "Release 2.9.2"
date: 2025-07-17
summary: "A patch release fixing UserLoginEvent so it no longer carries null user data, fixing Adventure serializer imports, and adding 1.7.2+ protocol support."
---

## PacketEvents 2.9.2 is out now! 🎉

This is a patch update that fixes issues with UserLoginEvent (which previously contained null user data) and with importing Adventure serializers.

## Brief Announcement 📢⚠️

### We have our very own website: https://packetevents.com

### Documentation: https://docs.packetevents.com

### JavaDocs: https://javadocs.packetevents.com

## What's Changed (Summary)

* Added support for 1.7.2+ Minecraft protocol (useful for proxies)
* Fixed UserLoginEvent. It is now (always) triggered by PlayerJoinEvent to prevent User instances from containing null data.
* Fixed importing Adventure serializers.

**View Full Changelog**: https://github.com/retrooper/packetevents/compare/v2.9.1...v2.9.2

## If you want to support PacketEvents, consider sponsoring us on [GitHub Sponsors](https://github.com/sponsors/retrooper)

## Maven/Gradle Dependency

### **Check out**: https://docs.packetevents.com/getting-started
