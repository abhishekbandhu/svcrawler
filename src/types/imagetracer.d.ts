declare module 'imagetracerjs' {
    export function imageToSVG(
        url: string,
        callback: (svgstr: string) => void,
        options?: any
    ): void;
    export function appendSVGString(svgstr: string, parentid: string): void;
    export const optionpresets: Record<string, any>;
}
