'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { View } from '@/components/canvas/View'
import { Common } from '@/components/canvas/Common'

import './styles.css';

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })

export default function Page() {
    return (
        <div className='red'>
            <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
                <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
                    <p className='w-full uppercase'>Next + React Three Fiber</p>
                    <h1 className='my-4 text-5xl font-bold leading-tight'>Next 3D Starter</h1>
                    <p className='mb-8 text-2xl leading-normal'>
                        A minimalist starter for React, React-three-fiber and Threejs.
                    </p>
                </div>

                <div className='w-full text-center md:w-3/5'>
                    <View className='flex h-96 w-full flex-col items-center justify-center'>
                        <Suspense fallback={null}>
                            <Logo scale={0.6} position={[0, 0, 0]} />
                            <Common />
                        </Suspense>
                    </View>
                </div>
            </div>
        </div>
    )
}
