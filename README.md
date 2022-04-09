# mavencart-nodejs_interview

## Section 1: 
Create an API endpoint using NodeJS which will accept the name of the person as a path parameter and give back their details in the format shown in Expected Output.

###### Sample Dataset: 

```
[
    {
        "age": "35",
        "name": "Palani",
        "gender": "Male"
    },
    {
        "age": "23",
        "name": "Surya",
        "gender": "Male"
    },
    {
        "age": "35",
        "name": "Pravin",
        "gender": "Male"
    },
    {
        "age": "25",
        "name": "Harish",
        "gender": "Male"
    },
    {
        "age": "29",
        "name": "Priya",
        "gender": "Female"
    },
    {
        "age": "41",
        "name": "Jennifer",
        "gender": "Female"
    },
] 
```

###### Expected Output: (If input is "Palani")
```
[
    {
        "age": "35",
        "gender": "Male",
        "name": "Palani"
    }
]
```

## Section 2: 
Create a Javascript function that will accept an Array of names in the below format and then iterate through them one at a time and get their details by invoking the API that was created as part of Section 1 and return the output as shown below. 

###### Input:
`["Palani", "Jennifer", "Harish", "Priya"]`

###### Expected Output: 
`{"Male": ["Palani", "Harish"], "Female": ["Jennifer", "Priya"]}`
