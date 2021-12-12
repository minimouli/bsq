/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'

suite('Large', () => {

    test('100x100', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/100x100')
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/100x100'))
    })

    test('200x200', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/200x200')
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/200x200'))
    })

    test('500x500 #1', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/500x500_1')
        ])

        exec.setTimeout(20000)
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/500x500_1'))
    })

    test('500x500 #2', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/500x500_2')
        ])

        exec.setTimeout(20000)
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/500x500_2'))
    })

    test('500x500 #3', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/500x500_3')
        ])

        exec.setTimeout(20000)
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/500x500_3'))
    })

    test('1000x1000 #1', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/1000x1000_1')
        ])

        exec.setTimeout(20000)
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/1000x1000_1'))
    })

    test('1000x1000 #2', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/1000x1000_2')
        ])

        exec.setTimeout(20000)
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/1000x1000_2'))
    })

    test('2000x2000', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/2000x2000')
        ])

        exec.setTimeout(20000)
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/2000x2000'))
    })

    test('5000x5000', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/5000x5000')
        ])

        exec.setTimeout(20000)
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/5000x5000'))
    })

    test('10000x10000', async () => {

        const exec = new Executable('bsq', [
            Path.fromMouli('/res/maps/10000x10000')
        ])

        exec.setTimeout(30000)
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/solved/10000x10000'))
    })

})
