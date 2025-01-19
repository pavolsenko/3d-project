import * as THREE from 'three';
import { ReactNode } from 'react';

type ThreeJSXElements = {
    [K in keyof typeof THREE]: typeof THREE[K] extends new (...args: any) => any
        ? Partial<InstanceType<typeof THREE[K]>> & {
        attach?: string;
        args?: ConstructorParameters<typeof THREE[K]>;
        children?: ReactNode | ReactNode[];
    }
        : never;
};

declare global {
    namespace JSX {
        interface IntrinsicElements extends ThreeJSXElements {
            [key: string]: any;
        }
    }
}