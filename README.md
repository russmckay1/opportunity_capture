Simple Opportunity Capture node.js app by Russ 

1. Ensure that node.js is installed by running the command node -v  If node.js is not installed download from https://nodejs.org
2. Create a new folder caller opportunities. I created a folder in /Users/russmckay/opportunities on my Mac
3. Under the opportunities folder create a new folder called punlic
4. Copy the server.js file into the opportunities folder and the index.html into the public folder
5. Run these two commands:-  npm init -y  and npm install express body-parser fs path
6. Start the app (the server) with  node server.js from the base directory (opportunities, where server.js is stored)
7. To access the application on a browser type localhost:3000 - you can also connect to this app from any PC on your network by changing localhost with the IP address of the host machine.
8. Stop the server / app woth a Ctrl + C
9. The collected opportunity data is stored in opportunities.csv and a backup file called backup_opportunities.csv is also created. These files are both saved in the basse directory 

    
