/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/tailwind.css";
import "./src/styles/global.scss";

import onRouteUpdateObj from "./gatsby/onRouteUpdate";
import onPreRouteUpdateObj from "./gatsby/onPreRouteUpdate";

export const onRouteUpdate = () => onRouteUpdateObj.trustAllScripts();
export const onPreRouteUpdate = () => onPreRouteUpdateObj.killServiceWorker();
