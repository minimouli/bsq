/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, expect, suite, test } from '@minimouli/framework'

suite('Edges', () => {

    suite('Opening', () => {

        test('Square of 50 with edges', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/edges/with-edges')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/edges/with-edges'))
        })

        test('Square of 50 without edges', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/edges/without-edges')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/edges/without-edges'))
        })

    })

    suite('Generating', () => {

        test('Square of 20 with edges', async () => {

            const bsq = new Executable('bsq', [
                '20', '..o.oo...oo..o....o....o.....o.o...oo...o.o.o...oo...o..oo..'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'xxo.oo...oo..o....o.',
                'xx.o.....o.o...oo...',
                'o.o.o...oo...o..oo..',
                '..o.oo...oo..o....o.',
                '...o.....o.o...oo...',
                'o.o.o...oo...o..oo..',
                '..o.oo...oo..o....o.',
                '...o.....o.o...oo...',
                'o.o.o...oo...o..oo..',
                '..o.oo...oo..o....o.',
                '...o.....o.o...oo...',
                'o.o.o...oo...o..oo..',
                '..o.oo...oo..o....o.',
                '...o.....o.o...oo...',
                'o.o.o...oo...o..oo..',
                '..o.oo...oo..o....o.',
                '...o.....o.o...oo...',
                'o.o.o...oo...o..oo..',
                '..o.oo...oo..o....o.',
                '...o.....o.o...oo...',
                ''
            ])
        })

        test('Square of 20 without edges', async () => {

            const bsq = new Executable('bsq', [
                '20', 'o.o.oo...oo..o....ooo..o.....o.o...oo..o..o.o...oo...o..oo..'
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'o.o.ooxx.oo..o....oo',
                'o..o..xx.o.o...oo..o',
                '..o.o...oo...o..oo..',
                'o.o.oo...oo..o....oo',
                'o..o.....o.o...oo..o',
                '..o.o...oo...o..oo..',
                'o.o.oo...oo..o....oo',
                'o..o.....o.o...oo..o',
                '..o.o...oo...o..oo..',
                'o.o.oo...oo..o....oo',
                'o..o.....o.o...oo..o',
                '..o.o...oo...o..oo..',
                'o.o.oo...oo..o....oo',
                'o..o.....o.o...oo..o',
                '..o.o...oo...o..oo..',
                'o.o.oo...oo..o....oo',
                'o..o.....o.o...oo..o',
                '..o.o...oo...o..oo..',
                'o.o.oo...oo..o....oo',
                'o..o.....o.o...oo..o',
                ''
            ])
        })

    })

})
