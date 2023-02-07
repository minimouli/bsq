/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, expect, suite, test } from '@minimouli/framework'

suite('Rectangle', () => {

    suite('Opening 34x137', () => {

        test('Rectangle with 25% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/34x137/with-25%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/34x137/with-25%-obstruction'))
        })

        test('Rectangle with 50% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/34x137/with-50%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/34x137/with-50%-obstruction'))
        })

        test('Rectangle with 75% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/34x137/with-75%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/34x137/with-75%-obstruction'))
        })

    })

    suite('Opening 97x21', () => {

        test('Rectangle with 25% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/97x21/with-25%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/97x21/with-25%-obstruction'))
        })

        test('Rectangle with 50% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/97x21/with-50%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/97x21/with-50%-obstruction'))
        })

        test('Rectangle with 75% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/97x21/with-75%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/97x21/with-75%-obstruction'))
        })

    })

})
