'use client'

import { forwardRef, ReactNode, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl, ViewportProps } from '@react-three/drei';
import { Three } from '@/helpers/components/Three'

export interface CommonProps {
    color?: string;
}

export const Common = (props: CommonProps) => (
    <Suspense fallback={null}>
        {props.color && <color attach='background' args={[props.color]} />}
        <ambientLight />
        <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
        <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    </Suspense>
)

export interface ViewProps {
  children: ReactNode | ReactNode[];
  className?: string;
  orbit?: boolean;
}

const View = forwardRef(({ children, orbit, ...props }: ViewProps, ref) => {
    const localRef = useRef(null)
    useImperativeHandle(ref, () => localRef.current)

    return (
        <>
            <div ref={localRef} {...props} />
            <Three>
                <ViewImpl track={localRef}>
                    {children}
                    {orbit && <OrbitControls />}
                </ViewImpl>
            </Three>
        </>
    )
})
View.displayName = 'View'

export { View }
