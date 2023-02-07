/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, expect, Path, suite, test } from '@minimouli/framework'

suite('Robustness', () => {

    suite('Generating empty map', () => {

        test('Empty column', async () => {

            const map = [
                '.ooooooo',
                '.ooooooo',
                '.ooooooo',
                '.ooooooo',
                '.ooooooo',
                '.ooooooo',
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
                '.ooooooo',
                '.ooooooo',
                '.ooooooo',
                '.ooooooo',
                '.ooooooo',
                ''
            ])
        })

        test('Empty line', async () => {

            const map = [
                '........',
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
                'x.......',
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

        test('Empty point', async () => {

            const bsq = new Executable('bsq', ['1', '.'])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'x',
                ''
            ])
        })

        test('Empty square', async () => {

            const bsq = new Executable('bsq', ['20', '.'])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                'xxxxxxxxxxxxxxxxxxxx',
                ''
            ])
        })

    })

    suite('Generating filled map', () => {

        test('Filled point', async () => {

            const bsq = new Executable('bsq', ['1', 'o'])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'o',
                ''
            ])
        })

        test('Filled square', async () => {

            const bsq = new Executable('bsq', ['20', 'o'])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                'oooooooooooooooooooo',
                ''
            ])
        })

    })

    suite('Opening empty map', () => {

        test('Empty point', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/1x1/empty')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'x', ''
            ])
        })

        test('Empty column', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/column/empty')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/column/empty'))
        })

        test('Empty line', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/line/empty')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/line/empty'))
        })

        test('Empty square', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/187x187/empty')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/187x187/opening/empty'))
        })

        test('Empty horizontal rectangle', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/97x21/empty')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/97x21/empty'))
        })

        test('Empty vertical rectangle', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/34x137/empty')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/34x137/empty'))
        })

    })

    suite('Opening filled map', () => {

        test('Filled point', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/1x1/filled')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput([
                'o', ''
            ])
        })

        test('Filled column', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/column/filled')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/column/filled'))
        })

        test('Filled line', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/line/filled')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/line/filled'))
        })

        test('Filled square', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/187x187/filled')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/187x187/opening/filled'))
        })

        test('Filled horizontal rectangle', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/97x21/filled')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/97x21/filled'))
        })

        test('Filled vertical rectangle', async () => {

            const bsq = new Executable('bsq', [
                Path.fromMoulinette('./maps/blank/34x137/filled')
            ])
            await bsq.execute()

            expect(bsq).toExitWith(0)
            await expect(bsq).toOutput(Path.fromMoulinette('./maps/solved/34x137/filled'))
        })

    })

})
