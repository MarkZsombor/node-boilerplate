  # MZ's basic Node Server Boilerplate
  
    Utilizing Express, EJS, PostGreSQL, SASS
    Just clone the repo, install dependancies locally and you are ready to go.
    
  ## Setup

   Clone to your directory

  ### *Install Dependancies*

   run `npm install`

  ### *To Set up PostgreSQL database*

   Create a `.env` file by using `.env.example` as a reference: `cp .env.example .env`

   Create a Postgres database `createdb <db_name>`

   Update the `.env` file with database name.

   Uncomment out the knex code in server.js and run `npm install --save knex`

  ### *Start server*

   Type `npm start` in your command line.

   Site will now be available locally at [localhost:8000](localhost:8000)