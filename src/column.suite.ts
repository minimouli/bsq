/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, expect, suite, test } from '@minimouli/framework'

suite('Column', () => {

    suite('Opening', () => {

        test('Column with 25% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/column/with-25%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/column/with-25%-obstruction'))
        })

        test('Column with 50% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/column/with-50%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/column/with-50%-obstruction'))
        })

        test('Column with 75% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/column/with-75%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/column/with-75%-obstruction'))
        })

    })

    suite('Generating', () => {

        test('Column with 25% obstruction', async () => {

            const map = [
                '.ooooooo',
                '.ooooooo',
                '.ooooooo',
                'oooooooo',
                '.ooooooo',
                'oooooooo',
                '.ooooooo',
                '.ooooooo'
            ].join('')

            const bsq = new Executable('bsq', ['8', map])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'xooooooo',
                '.ooooooo',
                '.ooooooo',
                'oooooooo',
                '.ooooooo',
                'oooooooo',
                '.ooooooo',
                '.ooooooo',
                ''
            ])
        })

        test('Column with 50% obstruction', async () => {

            const map = [
                '.ooooooo',
                '.ooooooo',
                'oooooooo',
                'oooooooo',
                '.ooooooo',
                'oooooooo',
                '.ooooooo',
                'oooooooo'
            ].join('')

            const bsq = new Executable('bsq', ['8', map])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'xooooooo',
                '.ooooooo',
                'oooooooo',
                'oooooooo',
                '.ooooooo',
                'oooooooo',
                '.ooooooo',
                'oooooooo',
                ''
            ])
        })

        test('Column with 75% obstruction', async () => {

            const map = [
                '.ooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                '.ooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo'
            ].join('')

            const bsq = new Executable('bsq', ['8', map])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'xooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                '.ooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                ''
            ])
        })

    })

})
