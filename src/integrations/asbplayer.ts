// @reader content-script

import { showError } from '../content/toast.js';
import { addedObserver, parseVisibleObserver } from './common.js';

try {
    const visible = parseVisibleObserver();

    const added = addedObserver(
        'table.MuiTable-root > tbody > tr > td:nth-child(1), #root > div > div.jss2 > div.jss5 > div > div',
        elements => {
            for (const element of elements) visible.observe(element);
        },
    );

    added.observe(document.querySelector('#textlog, #entry_holder, main') ?? document.body, {
        subtree: true,
        childList: true,
    });
} catch (error) {
    showError(error);
}
