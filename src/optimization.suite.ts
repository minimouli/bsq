/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, expect, suite, test } from '@minimouli/framework'

suite('Optimization', () => {

    suite('Generating', () => {

        test('Square of 100x100', async () => {

            const bsq = new Executable('bsq', [
                '100', '..oooo....oo..oo..oo...o.o.o..oooooo...ooooo..'
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/generating/100x100'))
        })

        test('Square of 200x200', async () => {

            const bsq = new Executable('bsq', [
                '200', '...ooooooooooo...o.....ooooooo....oo...oooo...'
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/generating/200x200'))
        })

        test('Square of 500x500 #1', async () => {

            const bsq = new Executable('bsq', [
                '500', '....oooooooo.........ooooooo..ooooo......ooo..'
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/generating/500x500#1'))
        })

        test('Square of 500x500 #2', async () => {

            const bsq = new Executable('bsq', [
                '500', '..ooo....oooo.....oo.o..oo....oooo....o.o.o..o'
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/generating/500x500#2'))
        })

        test('Square of 1000x1000', async () => {

            const bsq = new Executable('bsq', [
                '1000', '..ooooo.....oooo..oo....ooo.....ooo....oo...oo'
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/generating/1000x1000'))
        })

        test('Square of 2000x2000', async () => {

            const bsq = new Executable('bsq', [
                '2000', '.oooo..ooo.......oooo.....ooo..oo...oo..oooo..'
            ])

            bsq.setTimeout(25_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/generating/2000x2000'))
        })

        test('Square of 5000x5000', async () => {

            const bsq = new Executable('bsq', [
                '5000', '...oo....oooo..oo....ooo...oo....oo...ooooo...'
            ])

            bsq.setTimeout(30_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/generating/5000x5000'))
        })

        test('Square of 10000x10000', async () => {

            const bsq = new Executable('bsq', [
                '10000', '......oooooo....oo.....ooooo.....ooooooo......'
            ])

            bsq.setTimeout(40_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/generating/10000x10000'))
        })

    })

    suite('Opening', () => {

        test('Square of 100x100', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/optimization/100x100')
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/opening/100x100'))
        })

        test('Square of 200x200', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/optimization/200x200')
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/opening/200x200'))
        })

        test('Square of 500x500 #1', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/optimization/500x500#1')
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/opening/500x500#1'))
        })

        test('Square of 500x500 #2', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/optimization/500x500#2')
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/opening/500x500#2'))
        })

        test('Square of 1000x1000', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/optimization/1000x1000')
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/opening/1000x1000'))
        })

        test('Square of 2000x2000', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/optimization/2000x2000')
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/opening/2000x2000'))
        })

        test('Square of 5000x5000', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/optimization/5000x5000')
            ])

            bsq.setTimeout(20_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/opening/5000x5000'))
        })

        test('Square of 10000x10000', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/optimization/10000x10000')
            ])

            bsq.setTimeout(30_000)
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/optimization/opening/10000x10000'))
        })

    })

})
