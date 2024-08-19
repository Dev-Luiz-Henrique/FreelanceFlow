CREATE DATABASE FreelanceFlow;
USE FreelanceFlow;

CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(100) NOT NULL,
    Role ENUM('Client', 'Freelancer') NOT NULL
);

INSERT INTO Users (Username, Email, Password, Role)
VALUES
    ('JohnDoe', 'john@example.com', 'password123', 'Client'),
    ('JaneSmith', 'jane@example.com', 'password456', 'Freelancer');
