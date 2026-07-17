// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
import '@lumino/widgets/style/index.css';

// TEMP-INSTRUMENTATION: remove before committing. These root-level hooks
// wrap every test in the bundle: they log tests whose full runnable window
// (all hooks + body) exceeds 100ms, and gaps between runnables over 100ms.
let __tStart = 0;
let __tPrevEnd = 0;
beforeEach(function () {
  __tStart = performance.now();
  const gap = __tStart - __tPrevEnd;
  if (__tPrevEnd > 0 && gap > 100) {
    console.log(
      `SLOWGAP ${Math.round(gap)}ms before: ${this.currentTest?.fullTitle()}`
    );
  }
});
afterEach(function () {
  __tPrevEnd = performance.now();
  const d = __tPrevEnd - __tStart;
  if (d > 100) {
    console.log(`SLOWTEST ${Math.round(d)}ms: ${this.currentTest?.fullTitle()}`);
  }
});

import './accordionlayout.spec';
import './accordionpanel.spec';
import './boxengine.spec';
import './boxlayout.spec';
import './boxpanel.spec';
import './commandpalette.spec';
import './contextmenu.spec';
import './docklayout.spec';
import './dockpanel.spec';
import './focustracker.spec';
import './layout.spec';
import './menu.spec';
import './menubar.spec';
import './panel.spec';
import './panellayout.spec';
import './splitlayout.spec';
import './splitpanel.spec';
import './stackedlayout.spec';
import './stackedpanel.spec';
import './tabbar.spec';
import './tabpanel.spec';
import './title.spec';
import './widget.spec';
