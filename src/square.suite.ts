/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, expect, suite, test } from '@minimouli/framework'

suite('Square', () => {

    suite('Generating 14x14', () => {

        test('Square with 25% obstruction', async () => {

            const bsq = new Executable('bsq', [
                '14', '...o..oo....o....o..'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'xxxo..oo....o.',
                'xxxo.....o..oo',
                'xxx.o....o....',
                '.o..oo....o...',
                '.o.....o..oo..',
                '..o....o.....o',
                '..oo....o....o',
                '.....o..oo....',
                'o....o.....o..',
                'oo....o....o..',
                '...o..oo....o.',
                '...o.....o..oo',
                '....o....o....',
                '.o..oo....o...',
                ''
            ])
        })

        test('Square with 50% obstruction', async () => {

            const bsq = new Executable('bsq', [
                '14', '.o.o..oo..o.oo..ooo.'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                '.o.o..oo..o.oo',
                'xxooo..o.o..oo',
                'xxo.oo..ooo..o',
                '.o..oo..o.oo..',
                'ooo..o.o..oo..',
                'o.oo..ooo..o.o',
                '..oo..o.oo..oo',
                'o..o.o..oo..o.',
                'oo..ooo..o.o..',
                'oo..o.oo..ooo.',
                '.o.o..oo..o.oo',
                '..ooo..o.o..oo',
                '..o.oo..ooo..o',
                '.o..oo..o.oo..',
                ''
            ])
        })

        test('Square with 75% obstruction', async () => {

            const bsq = new Executable('bsq', [
                '14', '.ooooooo..oooo.oooo.'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'xooooooo..oooo',
                '.oooo..ooooooo',
                '..oooo.oooo..o',
                'oooooo..oooo.o',
                'ooo..ooooooo..',
                'oooo.oooo..ooo',
                'oooo..oooo.ooo',
                'o..ooooooo..oo',
                'oo.oooo..ooooo',
                'oo..oooo.oooo.',
                '.ooooooo..oooo',
                '.oooo..ooooooo',
                '..oooo.oooo..o',
                'oooooo..oooo.o',
                ''
            ])
        })

    })

    suite('Generating 60x60', () => {

        test('Square with 25% obstruction', async () => {

            const bsq = new Executable('bsq', [
                '60', '....o...oo.....o...o..o.o...'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/60x60/with-25%-obstruction'))
        })

        test('Square with 50% obstruction', async () => {

            const bsq = new Executable('bsq', [
                '60', '.o.oo...oo.oo..oo..o..o.ooo.'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/60x60/with-50%-obstruction'))
        })

        test('Square with 75% obstruction', async () => {

            const bsq = new Executable('bsq', [
                '60', 'oo.oooo.ooooo..ooo.o.oo.oooo'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/60x60/with-75%-obstruction'))
        })

    })

    suite('Generating 187x187', () => {

        test('Square with 25% obstruction', async () => {

            const bsq = new Executable('bsq', [
                '187', '...oooo.......oo............oooo........'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/187x187/generating/with-25%-obstruction'))
        })

        test('Square with 50% obstruction', async () => {

            const bsq = new Executable('bsq', [
                '187', '...ooooo....oooooo....ooo....oooo...oo..'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/187x187/generating/with-50%-obstruction'))
        })

        test('Square with 75% obstruction', async () => {

            const bsq = new Executable('bsq', [
                '187', '..oooooo..ooooooo..ooooo.oooooo..oooooo.'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/187x187/generating/with-75%-obstruction'))
        })

    })

    suite('Opening 187x187', () => {

        test('Square with 25% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/187x187/with-25%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/187x187/opening/with-25%-obstruction'))
        })

        test('Square with 50% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/187x187/with-50%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/187x187/opening/with-50%-obstruction'))
        })

        test('Square with 75% obstruction', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/187x187/with-75%-obstruction')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/187x187/opening/with-75%-obstruction'))
        })

    })

})
