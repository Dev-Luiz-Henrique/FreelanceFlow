CREATE TABLE [Profiles] (
  [id] INT PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [username] VARCHAR(30) UNIQUE NOT NULL,
  [name] VARCHAR(50) NOT NULL,
  [email] VARCHAR(255) UNIQUE NOT NULL,
  [password] NVARCHAR(255) NOT NULL,
  [phone] CHAR(11) NOT NULL,
  [state] TINYINT NOT NULL,
  [birthdate] DATETIME NOT NULL,
  [bio] NVARCHAR(300),
  [profile_picture] VARCHAR(255),
  [linkedin] NVARCHAR(100),
  [profile_type] TINYINT NOT NULL,
  [created_at] DATETIME NOT NULL
)

CREATE TABLE [Freelancers] (
  [id] INT PRIMARY KEY NOT NULL
)

CREATE TABLE [Owners] (
  [id] INT PRIMARY KEY NOT NULL
)

CREATE TABLE [Offers] (
  [id] INT PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [id_Freelancer] INT NOT NULL,
  [id_Project] INT NOT NULL,
  [status] TINYINT NOT NULL DEFAULT (0),
  [value] DECIMAL(5,2) NOT NULL,
  [deadline] DATETIME NOT NULL,
  [created_at] DATETIME NOT NULL
)

CREATE TABLE [Ratings] (
  [id] INT PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [id_Project] INT NOT NULL,
  [id_Profile] INT NOT NULL,
  [stars] TINYINT NOT NULL,
  [feedback] VARCHAR(500),
  [created_at] DATETIME NOT NULL
)

CREATE TABLE [Projects] (
  [id] INT PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [id_Owner] INT NOT NULL,
  [name] VARCHAR(30) NOT NULL,
  [area_1] TINYINT NOT NULL,
  [area_2] TINYINT,
  [description] NVARCHAR(1000) NOT NULL,
  [value] DECIMAL(5,2) NOT NULL,
  [status] TINYINT NOT NULL DEFAULT (0),
  [deadline] DATETIME NOT NULL,
  [delivery_date] DATETIME,
  [created_at] DATETIME NOT NULL
)

ALTER TABLE [Freelancers] ADD FOREIGN KEY ([id]) REFERENCES [Profiles] ([id])

ALTER TABLE [Owners] ADD FOREIGN KEY ([id]) REFERENCES [Profiles] ([id])

ALTER TABLE [Projects] ADD FOREIGN KEY ([id_Owner]) REFERENCES [Owners] ([id])

ALTER TABLE [Offers] ADD FOREIGN KEY ([id_Project]) REFERENCES [Projects] ([id])

ALTER TABLE [Offers] ADD FOREIGN KEY ([id_Freelancer]) REFERENCES [Freelancers] ([id])

ALTER TABLE [Ratings] ADD FOREIGN KEY ([id_Project]) REFERENCES [Projects] ([id])

ALTER TABLE [Ratings] ADD FOREIGN KEY ([id_Profile]) REFERENCES [Profiles] ([id])