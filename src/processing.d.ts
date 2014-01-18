
interface Window{
    acos: any;
    asin: any;
    atan2: any;
    atan: any;
    background: any;
    canvas: any;
    clamp: any;
    constrain: any;
    context: any;
    cos: any;
    degrees: any;
    dist: any;
    ellipse: any;
    ellipseMode: any;
    fill: any;
    frameCount: any;
    height: any;
    lerp: any;
    line: any;
    mag: any;
    map: any;
    millis: any;
    mouseX: any;
    mouseY: any;
    noFill: any;
    norm: any;
    noStroke: any;
    popMatrix: any;
    pushMatrix: any;
    radians: any;
    random: any;
    rect: any;
    rectMode: any;
    rotate: any;
    scale: any;
    sin: any;
    sketch: any;
    sq: any;
    stroke: any;
    strokeWeight: any;
    tan: any;
    text: any;
    translate: any;
    width: any;
}

declare function acos(angle: number): number;
declare function asin(angle: number): number;
declare function atan(angle: number): number;
declare function atan2(y: number, x: number): number;
declare function background(r: number, g?: number, b?: number): void;
declare function clamp(amt: number, low: number, high: number): number;
declare function constrain(amt: number, low: number, high: number): number;
declare function cos(angle: number): number;
declare function degrees(radians: number): number;
declare function dist(x1: number, y1: number, x2: number, y2: number): number
declare function ellipse(x: number, y: number, width: number, height?: number): void;
declare function ellipseMode(mode: any): void;
declare function fill(r: number, g?: number, b?: number): void;
declare function lerp(start: number, stop: number, amt: number): number;
declare function line(fromX: number, fromY: number, toX: number, toY: number): void;
declare function mag(a: number, b: number, c: number): number;
declare function map(value: number, start1: number, stop1: number, start2: number, stop2: number): number;
declare function noFill(): void;
declare function norm(value: number, start: number, stop: number): number;
declare function noStroke(): void;
declare function popMatrix(): void;
declare function pushMatrix(): void;
declare function radians(degrees: number): number;
declare function random(low: number, high?: number): number;
declare function rect(x: number, y: number, w: number, h: number): void;
declare function rectMode(mode: any): void;
declare function rotate(angle: number): void;
declare function scale(xScale: number, yScale : number): void;
declare function sin(angle: number): number;
declare function sq(n: number): number;
declare function stroke(r: number, g?: number, b?: number): void;
declare function strokeWeight(weight: number): void;
declare function tan(angle: number): number;
declare function text(text: string, x: number, y: number): void;
declare function translate(width: number, height: number): void;

declare var canvas: any;
declare var context: any;
declare var frameCount: number;
declare var height: number;
declare var millis: number;
declare var mouseX: number;
declare var mouseY: number;
declare var sketch: any;
declare var width: number;
