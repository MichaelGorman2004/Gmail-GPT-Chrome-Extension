# ChatGPT Gmail Chrome Extension

The ChatGPT Gmail Chrome Extension is a tool that enhances your Gmail experience by allowing you to generate responses to emails using OpenAI's ChatGPT API. This extension integrates seamlessly with Gmail, leveraging UI manipulation to extract email chains and send them to the ChatGPT API for generating relevant responses.

## Features

- Automatically generates responses for emails in Gmail using ChatGPT API.
- Seamless integration into Gmail's user interface for easy interaction.
- Node.js server with Express to handle API requests and communication.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch on the top right.
4. Click on "Load unpacked" and select the directory where you cloned/downloaded the repository.

## Usage

1. Open your Gmail account in Google Chrome.
2. Navigate to an email conversation you want to generate a response for.
3. Click the "Reply" button as usual.
4. The extension will automatically manipulate the Gmail UI and send the email content to the ChatGPT API.
5. The generated response will replace the content of the email textbox.

## Configuration

Before using the extension, you need to set up the following:

1. Obtain an API key from OpenAI to use the ChatGPT API.
2. Create a `.env` file in the root directory with your API key:


