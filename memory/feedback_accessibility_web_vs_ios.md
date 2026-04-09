---
name: Accessibility standard — web vs. iOS
description: Touch target requirements differ by platform; don't apply iOS 44pt standard to web reviews
type: feedback
---

EPS.xd designs primarily web software. Touch target accessibility reviews should use WCAG 2.1 AA (24×24px minimum for interactive elements), not the iOS HIG 44pt standard.

**Why:** The 44pt minimum is an Apple Human Interface Guideline for iOS. Applying it to web reviews creates false failures. WCAG 2.1 AA for web is 24×24px minimum; 44×44px is only required at WCAG 2.1 AAA level.

**How to apply:** When reviewing EPS.xd OS site content or any web surface in this project, do not flag touch target size unless elements are below 24×24px. Reserve 44pt standard for iOS/mobile surface reviews only.
