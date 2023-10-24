Motivation:

Use this to fill-in repeating web-forms with values.

Pre-requisites:

Figure out the "CSS Selectors" for the form input fields.

This is a Chrome extension.  To install in Edge, see [Sideload an Extension](https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/extension-sideloading)

The configuration is in 2 places:

1) In manifest.json, specify a "matches" URL whose form fields need to be routinely filled.

   `  "content_scripts": [
   {
   "matches": ["http...}`

2) data/values.json:
This file contains a map of the CSS selector for the form input field, to the value that should be filled in.

`{
"form.jenkins-form input[value='SERVER'] + input": "vm-name-here",
"form.jenkins-form input[value='BRANCH'] + input": "branch-name-here"
}`

