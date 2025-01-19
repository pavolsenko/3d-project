import { Suspense } from 'react'
import { PerspectiveCamera } from '@react-three/drei'

export interface CommonProps {
    color?: string
}

export function Common(props: CommonProps) {
    return (
        <Suspense fallback={null}>
            {props.color && <color attach='background' args={[props.color]} />}
            <ambientLight />
            <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
            <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
            <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        </Suspense>
    )
}
