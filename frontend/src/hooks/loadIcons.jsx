import { loadIcons } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";
import { iconsToLoad } from "../utils/constants";


export const loadAppIcons = () => {
    useEffect(() => {
        loadIcons(iconsToLoad, (loaded, missing, pending, unsubscribe) => {
            if (loaded.length) {
                console.log(
                    `Icons have been loaded and is ready to be renderered.`
                );
                return;
            }

            if (missing.length) {
                console.log(`Some icons does not exist.`);
                return;
            }
        })
    }, []);

}
