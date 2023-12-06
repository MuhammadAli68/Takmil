# Takmil
Repo for the code for takmil backend test

# Important Assumptions
- Since in the test, It was explicitly mentioned that Nest js is not required, therefore the server code has been built using Express js.
- Python client was only required to perform POST call therefore the remaining APIs have been demonstrated using Postman.
- The file including mongoDB URI has not been included in the github repo.

# Important Packages
- NodeJs
  - Express
  - Mongoose
  - Config
- Python
  - Requests
  - Json

# Demonstration
- Before we begin, head over to the server folder and in terminal execute command "node server" to start server.
- You can see that the collections are created when the server starts
    -![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/dd4ccbda-a632-44da-bb4c-a5d4132d04f3)

- ## POST request
  - Open python code in the client directory and execute it. You may use any IDE of your choice. IDLE was used for this demonstration.
    - ### Output
    ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/be54f6d0-ce4c-4538-8759-66f4685fc46f)
    - ### MongoDB
      - ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/84a88d16-e884-4944-b92d-866de30f4a05)
      - ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/285847da-fb2b-4c64-84ae-7dcc3c59f2cf)
      - ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/90dacff4-b518-4dbf-a51c-a03f27e70cbf)
- ## PUT request
  - In Postman add the provided JSON in the request body and alter any field except 'name', 'address' and 'organization' e.g set both 'hasProjector' and 'hasLaptop' to 'true'
    - ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/5ae0bd94-f405-4be6-bff3-d375265b135e)
    - ### Output
      - ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/92daab6a-a4b0-4d9d-a4a5-45934e65b76b)
- ## GET request by ID
  - Before this, remove the body from the request, in Postman, and set body to 'none'. See picture below:
    - ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/b845133a-0dfd-4c47-91ed-b543d84ecd9b)
  - ### Output
    - ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/be9f033a-aa27-4670-94ae-f275490dea3a)
- ## GET request to get all schools
  - Simply remove the ID from the url of the last call and execute request from Postman.
    ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/0a33c384-d6eb-492c-85c3-06b084f6a3cc)
  - ### Output
    - ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/db46e5ba-c3f7-44af-a9ac-9665d0eb763f)
    - Notice how resulting JSON is now inside a list.
- ## DELETE request by ID
  - Switch to DELETE, in Postman, and use the same url from the 'GET request by ID' call.
    ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/058ce8cc-f833-4220-b1f0-40d86744ce68)
  - ### Output
    - ![image](https://github.com/MuhammadAli68/Takmil/assets/57432644/543d7782-dee4-412b-9da1-0db43150ec2e)
    - School is removed from MongoDB






 

