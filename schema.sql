DROP DATABASE IF EXISTS forum_db;
CREATE DATABASE forum_db;
-- USE forum_db;

-- CREATE TABLE users (
--   id INT(11) NOT NULL AUTO_INCREMENT,
--   name_firstlast VARCHAR(30) NULL,
--   username VARCHAR(30) NULL,
--   password_user VARCHAR(30) NULL,
--   email VARCHAR(30) NULL,
--   create_date VARCHAR(30) NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE topics (
--   id INT(11) NOT NULL AUTO_INCREMENT,
--   topic_name VARCHAR(200) NULL,
--   description_topic VARCHAR(200) NULL,
--   user_id INT(11) NOT NULL,
--   topic_start_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (id)  
-- );

-- CREATE TABLE threads (
--   id INT(11) NOT NULL AUTO_INCREMENT,
--   topic_id INT(11) NOT NULL,
--   user_id INT(11) NOT NULL,
--   thread_title VARCHAR(200) NOT NULL,
--   thread_description VARCHAR(200) NOT NULL,
--   thread_start_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (id) 
-- );


-- CREATE TABLE comments (
--   id INT(11) NOT NULL AUTO_INCREMENT,
--   thread_id INT(11) NOT NULL,
--   user_id INT(11) NOT NULL,
--   comment_text VARCHAR(200) NOT NULL,
--   comment_post_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (id) 
-- );

-- INSERT INTO users (id, name_firstlast, username, password_user, email, create_date)
-- VALUES ();

-- INSERT INTO comments (id, thread_id, user_id, comment_text, comment_post_date)
-- VALUES ();

-- INSERT INTO topics (id, topic_name, decription_topic, user_id, topic_start_date)
-- VALUES ();

-- INSERT INTO threads (id, topic_id, user_id, thread_title, thread_description, thread_start_date)
-- VALUES ());




