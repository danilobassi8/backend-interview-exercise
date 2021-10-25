# irobot-exercise
## Introduction
Pets-app is a frontend application where you can:
- Create new pets.
- See all pets created by users.
- Delete pets (only if you are admin).

Sadly we don't have a backend developer and we can't do any of these functionalities :(.
We need you to create a Restful API with its corresponding endpoints to make our app work. You can do it!
## Exercise
Given the frontend app attached in this repo, create a Restful API with the following features:
- Create a pet. The age can be approximated or exact. (Pet model should have a flag indicating if birthdate is approximated or exact)
- List pets by name and age.
- Delete pets. (Only admin users can delete pets).
- User login and sign in.
- EXTRA POINTS: make a script that seed the database with some pets and two users (admin and guest).

This API must be able to be consumed by the frontend app.
In other words, you have to create the necessary endpoints to make the frontend app work.

## Necessary endpoints

Backend must be running on port 8000, and here is some information about the endpoints you need to implement in order to make the right integration with the given Frontend app.

Backend base url that the frontend app is trying to consume is: `http://localhost:8000/api/`

<table>
<tr>
<td> Endpoint </td> <td> HTTP Verb </td> <td> Params / Body </td> <td> Expected response example </td>
</tr>
<tr>
<td> Pets </td>
<td> POST </td>
<td>
body:

```javascript
{
    name: (string)
    birth_date: (string - yyyy-mm-dd format)
    is_birth_approximate: (boolean)

}
```
</td>
<td>

```javascript
{
   birth_date: '2020-06-20',
   id: 25,
   is_birth_approximate: false,
   name: ’Puppy’,
}

```
 </td>
</tr>

<tr>
<td> pets </td>
<td> GET </td>
<td>
body:

```javascript
page: (number)
name: (string)
max_birth_date: (string - yyyy-mm-dd format)

```
</td>
<td>

```javascript
{
   count: 23,
   next: 'http://localhost:8000/api/pets/?page=3',
   previous: ’next: 'http://localhost:8000/api/pets/?page=1',
   results: [
      { id: 1, name: 'perro 1', age: '6 years', is_birth_approximate: false },
      { id: 2, name: 'perro 2', age: '4 months', is_birth_approximate: true },
      { id: 3, name: 'perro 3', age: '3 years and 1 month', is_birth_approximate: false },
      ]
}

```
 </td>
</tr>

</tr>
<tr>
<td> pets/:id </td>
<td> DELETE </td>
<td></td>
<td> status 200 if deleted </td>
</tr>

<tr>
<td> users/login </td>
<td> POST </td>
<td>
body:

```javascript
{
   email: (string)
   password: (string)
}
```

</td>
<td>

```javascript
{
   user: {
      email: 'guest@guest.com',
      first_name: 'guest',
      is_admin: false,
      last_name: 'guest_lastname',
      username: 'guest',
   },
}
```
</td>
</tr>
</table>

You can also check the frontend code if you need more information to integrate the requested API with the frontend app.

**NOTES:**
-  When retrieving pets we need the pet's age instead of its date of birth. This must be handled by the API.
- The pet list should be paginated, and the page size should be 5.
- The exercise must be done using Django Rest Framework (DRF) and its documentation must be in English, indicating how to run the API locally in Ubuntu Linux 18.04 or higher version.

# How to run the frontend app
## Run the frontend app with docker-compose <a name="docker"></a>
A docker-compose.yml file is provided to run the app in a containerized environment.
From the root directory of this repo, run:
```
docker-compose -f ./dockerization/docker-compose.yml up
```

_Info on how to install docker-compose [here](https://docs.docker.com/compose/install/)._

## Run the frontend app locally:
```
cd src/frontend
npm install
ng serve
```
_Info on how to install Angular [here](https://angular.io/guide/setup-local#prerequisites)_

You can check how the Frontend integrated with an API looks with the images inside the folder `images/`