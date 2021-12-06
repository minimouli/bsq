/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'

suite('Medium', () => {

    suite('97x21', () => {

        test('Obstacles 25%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/97x21_25')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/97x21_25'))
        })

        test('Obstacles 50%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/97x21_50')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/97x21_50'))
        })

        test('Obstacles 75%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/97x21_75')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/97x21_75'))
        })

        test('Empty', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/97x21_empty')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/97x21_empty'))
        })

        test('Filled', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/97x21_filled')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/97x21_filled'))
        })

    })

    suite('34x137', () => {

        test('Obstacles 25%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/34x137_25')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/34x137_25'))
        })

        test('Obstacles 50%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/34x137_50')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/34x137_50'))
        })

        test('Obstacles 75%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/34x137_75')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/34x137_75'))
        })

        test('Empty', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/34x137_empty')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/34x137_empty'))
        })

        test('Filled', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/34x137_filled')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/34x137_filled'))
        })

    })

    suite('187x187', () => {

        test('Obstacles 25%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/187x187_25')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/187x187_25'))
        })

        test('Obstacles 50%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/187x187_50')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/187x187_50'))
        })

        test('Obstacles 75%', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/187x187_75')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/187x187_75'))
        })

        test('Empty', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/187x187_empty')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/187x187_empty'))
        })

        test('Filled', async () => {

            const exec = new Executable('bsq', [
                Path.fromMouli('/res/maps/187x187_filled')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/187x187_filled'))
        })

    })

})
