# Use OpenJDK 23 as the base image
FROM openjdk:23-ea-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot JAR file from the target directory
COPY target/*.jar app.jar

# Expose port 8080 to allow external access
EXPOSE 8080

# Command to run the JAR file
CMD ["java", "-jar", "app.jar"]
