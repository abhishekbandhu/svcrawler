import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatAsHtml(svgStr: string): string {
    return svgStr;
}

export function formatAsReact(svgStr: string): string {
    // Basic conversion for JSX React component
    let reactStr = svgStr
        .replace(/class=/g, 'className=')
        .replace(/xmlns:xlink/g, 'xmlnsXlink')
        .replace(/xlink:href/g, 'xlinkHref')
        .replace(/stroke-width/g, 'strokeWidth')
        .replace(/stroke-linecap/g, 'strokeLinecap')
        .replace(/stroke-linejoin/g, 'strokeLinejoin')
        .replace(/fill-rule/g, 'fillRule')
        .replace(/clip-rule/g, 'clipRule')
        .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
        .replace(/xml:space/g, 'xmlSpace')
        .replace(/stop-color/g, 'stopColor')
        .replace(/stop-opacity/g, 'stopOpacity');
    
    // Quick pascalCase for inline styles if they exist (rare in raw svgs but possible)
    return `export const SvgIcon = (props) => (\n  ${reactStr.replace('<svg', '<svg {...props}')}\n);`;
}

export function formatAsVue(svgStr: string): string {
    return `<template>\n  ${svgStr}\n</template>\n\n<script setup>\n// Vue 3 Composition API\n</script>`;
}
