to-local-iso-string
=====================================================

Date.prototype.toISOString without force UTC timezone.

Important
---------

1. This module is designed to be used in browsers only.
2. If your code isn't targeting the latest syntax spec of JS / ES,
please use something like babel to transfer this library.

Usage
-----

### Notice

```typescript
import tlis from '@whitetrefoil/to-local-iso-string'

const string = tlis(new Date())
```

Changelog & Roadmap
-------------------

### v0.1.0

* Initial release.
