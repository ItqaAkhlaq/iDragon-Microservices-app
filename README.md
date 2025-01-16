# iDragon-Microservices-app
iDragon game deployed as a microservices app on Docker.

# Steps to deploy the game on docker.

1. Clone the Repository using : git clone https://github.com/ItqaAkhlaq/iDragon-Microservices-app.git
2. Change path to directory: cd path/to/repo
3. To run the container: docker-compose up --build  
4. Open the given localhost ports to play the game.
5. To stop the container:  docker-compose down


### Docker Compose Configuration

This `docker-compose.yml` file defines a multi-service application with the following components:

1. **Frontend Service**  
   - **Directory:** `./frontend`  
   - **Port Mapping:** `3000:3000` (Host:Container)  
   - **Network:** `app-network`  
   - Builds the frontend application.

2. **Game Logic Service**  
   - **Directory:** `./game-logic`  
   - **Port Mapping:** `3001:3001`  
   - **Network:** `app-network`  
   - Handles game-related logic and operations.

3. **Static Assets Service**  
   - **Directory:** `./static-assets`  
   - **Port Mapping:** `3002:80`  
   - **Network:** `app-network`  
   - Serves static assets such as images, stylesheets, or scripts.

4. **Reverse Proxy**  
   - **Image:** `nginx:alpine`  
   - **Volume:** Mounts `nginx.conf` to `/etc/nginx/nginx.conf` for configuration (read-only).  
   - **Port Mapping:** `80:80` (Host:Container)  
   - **Depends On:**  
     - `frontend`  
     - `game-logic`  
     - `static-assets`  
   - **Network:** `app-network`  
   - Acts as a central reverse proxy, routing traffic to appropriate services.

5. **Network Configuration**  
   - **Network Name:** `app-network`  
   - **Driver:** `bridge`  
   - Ensures all services communicate seamlessly within a single network.

This setup allows seamless communication between the services and exposes the application on standard ports for external access.





