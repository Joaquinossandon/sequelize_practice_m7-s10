const db = require("../models");
const User = db.user;
const Project = db.project;

exports.createUser = async (user) => {
    try {
        const userResult = await User.create({
            name: user.name,
        });

        return userResult;
    } catch (error) {
        console.log("No se pudo crear el usuario", error);
    }
};

exports.createProject = async (userId, project) => {
    try {
        const projectResult = await Project.create({
            userId,
            name: project.name,
        });

        return projectResult;
    } catch (error) {
        console.log("Error al crear el proyecto", error);
    }
};

exports.findUserByID = async (userId) => {
    try {
        const user = await User.findByPk(userId, {
            include: ["projects"],
        });

        return user;
    } catch (error) {
        console.log("No se pudo obtener el usuario", error);
    }
};

exports.findProjectById = async (projectId) => {
    try {
        const project = await Project.findByPk(projectId, {
            include: ["user"],
        });

        return project;
    } catch (error) {
        console.log("No se pudo obtener el proyecto", error);
    }
};

exports.findAllUsers = async () => {
    try {
        const users = await User.findAll({
            include: ["projects"],
        });

        return users;
    } catch (error) {
        console.log("No se pudieron obtener los usuarios", error);
    }
};
