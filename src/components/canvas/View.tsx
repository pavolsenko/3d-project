'use client';

import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export interface ViewProps {
    children: ReactNode | ReactNode[];
    className?: string;
    orbit?: any;
}

const View = forwardRef((props: ViewProps, ref) => {
    const localRef = useRef(null)
    useImperativeHandle(ref, () => localRef.current)

    return (
        <Canvas>
            {props.children}
            {props.orbit && <OrbitControls />}
        </Canvas>
    )
})
View.displayName = 'View';

export { View };
