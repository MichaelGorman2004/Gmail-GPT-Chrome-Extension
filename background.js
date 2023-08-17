chrome.runtime.onMessage.addListener(function(gmailMessage, sender, sendResponse){
  if (gmailMessage.type === "request_gpt_response"){
    const gptMessage = {
      type: 'gpt_message',
      content: gmailMessage.content
    };
    chrome.runtime.sendMessage(gptMessage, function(gptResponse){
      const responseToGmail = {
        type: 'gpt_response',
        content: gptResponse
      };
      sendResponse(responseToGmail);
    });

    return true;
  }
)};

chrome.runtime.onMessage.addListener(function(gptResponseMessage, sender, sendResponse){
  if (gptResponseMessage.type === 'messageResponse'){
    const responseToGmail = {
      type: 'gpt_response',
      content: gptResponseMessage.content
    };
    sendResponse(responseToGmail);
  }
});
