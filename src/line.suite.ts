/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, expect, suite, test } from '@minimouli/framework'

suite('Line', () => {

    suite('Opening', () => {

        test('Line with 25% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/line/with-25%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/line/with-25%-obstruction'))
        })

        test('Line with 50% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/line/with-50%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/line/with-50%-obstruction'))
        })

        test('Line with 75% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/line/with-75%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/line/with-75%-obstruction'))
        })

    })

    suite('Generating', () => {

        test('Line with 25% obstruction', async () => {

            const map = [
                '...o.o..',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo'
            ].join('')

            const bsq = new Executable('bsq', ['8', map])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'x..o.o..',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                ''
            ])
        })

        test('Line with 50% obstruction', async () => {

            const map = [
                '..oo.o.o',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo'
            ].join('')

            const bsq = new Executable('bsq', ['8', map])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'x.oo.o.o',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                ''
            ])
        })

        test('Line with 75% obstruction', async () => {

            const map = [
                '.ooo.ooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo'
            ].join('')

            const bsq = new Executable('bsq', ['8', map])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'xooo.ooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                'oooooooo',
                ''
            ])
        })

    })

})
