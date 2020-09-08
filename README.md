
## User List Management

#### Initially need to install some package to run this application.
<ul>
  <li>npm install axios</li>
  <li>npm install concurrently</li>
  <li>npm install json-server</li>
  <li>npm install react-router-dom</li>
  <li>npm install bootstrap</li>
</ul>
Then, <br/>
1. create a file name: db.json<br/>
2. Go to: package.json and past those in the script.<br/>
"json-server": "json-server --watch db.json --port 3003",<br/>
"start:dev": "concurrently \"npm start\" \"npm run json-server\"",<br/><br/>

In the project directory, you can run:
### `npm run start:dev`<br/>
for checking the server, localhost:3003/users<br/>

## Screenshot
1. Fetch Data after creating local server
<image  src="https://github.com/alaminstore/conventional-app/blob/master/src/screenshot/Fetch_data.png"/>
2.Add user in this server (Works like Database)
<image  src="https://github.com/alaminstore/conventional-app/blob/master/src/screenshot/Add_user.png"/>
3.Update the JSON data through ID
<image  src="https://github.com/alaminstore/conventional-app/blob/master/src/screenshot/Edit_user.png"/>
4.View data individually
<image  src="https://github.com/alaminstore/conventional-app/blob/master/src/screenshot/View_user.png"/>
5. The local Server
<image  src="https://github.com/alaminstore/conventional-app/blob/master/src/screenshot/Create_server.png"/>
