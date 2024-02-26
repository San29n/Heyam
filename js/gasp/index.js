import { CSSPlugin } from "./CSSPlugin.js";
import { Back, Bounce, Circ, Cubic, Elastic, Expo, Linear, Power0, Power1, Power2, Power3, Power4, Quad, Quart, Quint, Sine, SteppedEase, Strong, TimelineLite, TimelineMax, TweenLite, gsap } from "./gsap-core.js";
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;
export { Back, Bounce, CSSPlugin, Circ, Cubic, Elastic, Expo, Linear, Power0, Power1, Power2, Power3, Power4, Quad, Quart, Quint, Sine, SteppedEase, Strong, TimelineLite, TimelineMax, TweenLite, TweenMaxWithCSS as TweenMax, gsapWithCSS as default, gsapWithCSS as gsap };
