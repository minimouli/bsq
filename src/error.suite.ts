/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, expect, suite, test } from '@minimouli/framework'

suite('Error handling', () => {

    suite('Opening', () => {

        test('Bad character', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/invalid/bad-character')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(84)
        })

        test('Different line sizes', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/invalid/different-line-sizes')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(84)
        })

        test('Empty file', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/invalid/empty-file')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(84)
        })

        test('Nonexistent file', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/invalid/nonexistent-file')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(84)
        })

        test('Less lines', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/invalid/less-lines')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(84)
        })

    })

    suite('Generating', () => {

        test('Alpha-numeric size', async () => {

            const bsq = new Executable('bsq', ['a', '...oo'])
            await bsq.execute()

            expect(bsq).toExitWith(84)
        })

        test('Empty pattern', async () => {

            const bsq = new Executable('bsq', ['5', ''])
            await bsq.execute()

            expect(bsq).toExitWith(84)
        })

        test('Invalid pattern characters', async () => {

            const bsq = new Executable('bsq', ['5', '..aoo'])
            await bsq.execute()

            expect(bsq).toExitWith(84)
        })

        test('Negative size', async () => {

            const bsq = new Executable('bsq', ['-2', '...oo'])
            await bsq.execute()

            expect(bsq).toExitWith(84)
        })

    })

})
