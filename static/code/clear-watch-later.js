/**
 * YouTube has no way for you to clear your [Watch later playlist](https://www.youtube.com/playlist?list=WL).
 *
 * So I made this.
 */
(async () => {
    await import("https://code.jquery.com/jquery-2.2.4.min.js");
    /** Total videos removed */
    let videosRemoved = 0;
    /** Time between interacting with HTML elements */
    const waitTime = 25;
    /** Time between rounds */
    const intermission = 3_000;
    /** Element selectors */
    const SELECTORS = {
        playlist:             "ytd-playlist-video-list-renderer",
        playlistItem:         "ytd-playlist-video-renderer",
        actionMenuButton:     "button#button",
        actionMenu:           "ytd-menu-popup-renderer",
        actionMenuItem:       "ytd-menu-service-item-renderer",
        actionMenuItemButton: "tp-yt-paper-item",
    };
    /** Async setTimeout */
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    /** Remove a video from the playlist */
    const removeVideo = async (button) => {
        // add some breathing room
        await sleep(waitTime);
        // open the menu
        $(button).trigger("click");
        // wait for the menu to pop up
        await sleep(waitTime);
        // see how many options are in the menu
        const itemCount = $(SELECTORS.actionMenuItem).length;
        let $removeButton
        if (itemCount == 1) {
            // private or deleted video
            $removeButton = $(`${SELECTORS.actionMenuItem}:nth-child(1) ${SELECTORS.actionMenuItemButton}`);
        } else {
            // normal video
            $removeButton = $(`${SELECTORS.actionMenuItem}:nth-child(3) ${SELECTORS.actionMenuItemButton}`);
        }
        if ($removeButton.length) {
            // "Remove from Watch Later"
            $removeButton.trigger("click");
            return true;
        } else {
            return false;
        }
    };
    /** Loop through all videos loaded on the page (100 per load) and remove them */
    const removeLoadedVideos = async (round) => {
        let menuButtons = $(SELECTORS.playlist).find(SELECTORS.actionMenuButton).toArray();
        const buttonCount = menuButtons.length
        if (!(buttonCount > 0)) {
            // no videos loaded
            return false;
        }
        let i = 0;
        for await (const button of menuButtons) {
            i++;
            let wasRemoved = await removeVideo(button);
            if (wasRemoved) {
                videosRemoved++;
            }
            console.log({
                round:        round,
                video:        `${i.toString().padStart(buttonCount.toString().length, 0)}/${menuButtons.length}`,
                removed:      wasRemoved,
                totalRemoved: videosRemoved.toString().padStart(4, " "),
            });
        }
        return true;
    };
    /** Remove all loaded videos, block for `intermission`, repeat for the given number of rounds */
    const main = async (rounds) => {
        let failures = 0;
        for (let i = 1; i <= rounds; i++) {
            await sleep(intermission);
            console.log(`starting round #${i}`);
            const success = await removeLoadedVideos(i);
            if (!success) {
                failures++;
                console.log(`no videos found in round #${i}, pausing for more to load`);
                await sleep(intermission * (failures + 1));
            } else {
                console.log(`finished round #${i}`);
            }
        }
        return null;
    }
    await (main(10))
})();
