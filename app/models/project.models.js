module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("project", {
        name: {
            type: DataTypes.STRING,
        },
    });

    return Project;
};
