window.onload = function () {
  window.onhashchange = () => {
    if(window.location.hash.startsWith('#inbox/')) { //maybe add an || or statement in case we want to reply to emails we have already read??
      const spans = document.querySelectorAll('span');
      for (const span of spans) {
        if (span.innerText === 'Reply') {
          span.addEventListener('click', async function() {
            const email = {
              type: 'request_gpt_response',
              content: document.querySelector('.adn.ads').textContent
            };
            try {
              chrome.runtime.sendMessage(email.content, function(gptResponse) {
                const gmailTextBox = document.querySelector('[role=textbox]');
                gmailTextBox.innerText = email.content; //gptResponse;
              });
            } catch (error) {
              console.error('Error: ', error);
            }
          });
        }
      }
    }
  };
}

