const path = require('path')
const getAllFiles = require('../utils/getAllFiles')

module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);
  
    for (const eventFolder of eventFolders) {
      const eventFiles = getAllFiles(eventFolder);
      // priority
      eventFiles.sort((a, b) => a > b);
  
      const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();

      const eventFunctions = eventFiles.map((eventFile) => require(eventFile));

      client.on(eventName, async (arg) => {
        for (const eventFunction of eventFunctions) {
          try {
            await eventFunction(client, arg);
          } catch (error) {
            console.error(`Error in "${eventName}" event handler:`, error);
          }
        }
      });
    }
};