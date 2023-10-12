grant all on teacher_db to spring_boot_teacher_service

use teacher_db;

create table if not exits teachers (
    id bigserial unique not null,
    first_name varchar (150) not null,
    last_name varchar (150) not null,
    email varchar (200) unique not null,
    registration_number varchar unique not null,
    primary key (id)

);

create table if not exists courses(
    id bigserial unique not null,
    teacher_id bigint not null,
    course_name varchar(150) not null,
    foreign key (teacher_id) references teachers (id),
    primary key (id)
);