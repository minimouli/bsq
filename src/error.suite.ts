/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'

suite('Error handling', () => {

    test('Different sizes', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/invalid/different_sizes')
        ])
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Non-existant', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/invalid/non_existant')
        ])
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Empty map', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/invalid/empty_map')
        ])
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Less lines', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/invalid/less_lines')
        ])
        await exec.execute()

        expect(exec).toExitWith(84)
    })

})
