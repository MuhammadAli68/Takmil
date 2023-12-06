import requests
import json

url = "http://localhost:5000/school"

json_document = {
       "name": "School-A",
       "status": "old",
       "startTime": "8:30am",
       "endTime": "1:30pm",
       "shift": "Morning",
       "address": {
           "town": "Nehar Kot",
           "tehsil": "Barkhan",
           "district": "Barkhan",
           "state": "Balochistan",
           "address": "address-1",
           "latitude": 29.79,
           "longitude": 69.47
       },
       "hasProjector": False,
       "hasLaptop": False,
       "organization": {
           "name": "publicschools"
       }
   }

post_response = requests.post(url,json=json_document)

print(post_response)
