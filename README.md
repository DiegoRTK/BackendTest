## Usage

To use this project, follow these steps:
## 1. Prepare Docker and Docker Compose for orchestrate our backend environment

## 2. Run docker-compose command:
There's no need to create a local daatabase or download anything else but clone this repository and followed previous step. To pull images, build and run your container, all you will need is run `docker-compose up -d --build` or `docker compose up -d --build`, and magic will show up.

## 3. Configure your URL:
The default port used for this project is the 3000.

## 4. Discover every endpoint:

## POST:
You will only need to send in the body the user and the status. User is string and is required, status is an enum (Abierto/Cerrado) and is required. The URL is `BASE_URL`/ticket. Fields like ID, created at and update at will be automatically created.

## PATCH:
You can send in the body the fields that you want to change, for example:

I am goint to update my name, because I made a mistake with surname's spelling. I only need to specify the new user in the body and use the following URL `BASE_URL`ticket/`_id`. The field _id is generated automatically when you execut POST method.

## DELETE:
You will only need to specify the id in the following URL `BASE_URL`/ticket/`_id`. If operation successed, you will get 'Ticket eliminado exitosamente', else error message

## GET:
This method can be used with or without query params. If you need to get all tickets, you will need to use the following URL `URL`/ticket/tickets. In the other hand, if you need to specify your query, then you will need to use the following URL `URL`/ticket/tickets`?user=value`. As you can see, after typing ?, you can send any field that you want to filter.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).