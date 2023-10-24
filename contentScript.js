// toggle color to check if extension is active on the active tab.
// document.body.style.backgroundColor = "lightblue";

async function getConfig() {
    try {
        const url = chrome.runtime.getURL('data/values.json');
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("response did not return OK.")
        }
        const jsonBody = await response.json()
        return jsonBody
    } catch (error) {
        console.error("Fetch threw error: ", error)
    }

}

async function populateForm() {
    const config = await getConfig()
    for (const key in config) {
        const inputs = document.querySelectorAll(key)
        if (inputs.length) {
            inputs[0].value = config[key]
        } else {
            console.warn(`Did not find a form element matching selector ${key}`)
        }
    }
}

populateForm()


