/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'

suite('Special cases', () => {

    suite('1x1', () => {

        test('Empty', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/1x1_empty')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/1x1_empty'))
        })

        test('Filled', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/1x1_filled')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/1x1_filled'))
        })

    })

    suite('Line', () => {

        test('Obstacles 25%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/line_25')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/line_25'))
        })

        test('Obstacles 50%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/line_50')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/line_50'))
        })

        test('Obstacles 75%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/line_75')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/line_75'))
        })

        test('Empty', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/line_empty')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/line_empty'))
        })

        test('Filled', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/line_filled')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/line_filled'))
        })

    })

    suite('Column', () => {

        test('Obstacles 25%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/column_25')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/column_25'))
        })

        test('Obstacles 50%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/column_50')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/column_50'))
        })

        test('Obstacles 75%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/column_75')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/column_75'))
        })

        test('Empty', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/column_empty')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/column_empty'))
        })

        test('Filled', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/column_filled')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/column_filled'))
        })

    })

    suite('Edges', () => {

        test('Empty', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/edges_empty')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/edges_empty'))
        })

        test('Filled', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/edges_filled')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/edges_filled'))
        })

    })

})
