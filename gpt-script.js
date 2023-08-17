//const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

//const app = express();
//app.use(express.json());

const config = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(config);

chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse){
  if (message.type === 'gpt_message') {
    const emailContent = message.content;
    const response = await openai.createCompletion ({
      model: "text-davinci-003",
      prompt: `Respond to the most recent email in a proper manner and if my name is mentioned, sign off with it. Here is the email chain: ${emailContent}`,
      max_tokens: 300
    });
    chrome.runtime.sendMessage({type: 'gpt_response', content: response.data.choices[0].text});
  }
});

//app.post("/gmail-response", async (req, res) => {
  //try {
    //const emailContent = ;
    //const response = await openai.createCompletion({
      //model: "text-davinci-003",
      //prompt: `Response to this email chain in a proper manner, and if my name is mentioned, then sign off with my name, otherwise do not. Here is the email chain: ${emailContent}`,
      //max_tokens: 300,
    //});
    
    //return res.status(200).json({
      //success: true,
      //data: response.data.choices[0].text,
    //});
  //} catch (error) {
    //return res.status(400).json({
    //success: false,
    //error: error.response
      //? error.response.data
      //: "There is an issue on the server",
    //});
  //}
//}); 

//const port = process.env.PORT || 5000;
//app.listen(port, () => console.log(`Server listening on port ${port}`));
