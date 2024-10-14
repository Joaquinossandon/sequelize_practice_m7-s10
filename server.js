const db = require("./app/models");
const controller = require("./app/controllers/user.controller");

const run = async () => {
    const user1 = await controller.createUser({ name: "José Alberto" });
    const user2 = await controller.createUser({ name: "Carlos Mejías" });

    const project1 = await controller.createProject(user1.id, {
        name: "Proyecto A",
    });
    const project2 = await controller.createProject(user1.id, {
        name: "Proyecto B",
    });
    const project3 = await controller.createProject(user2.id, {
        name: "Proyecto C",
    });
    const project4 = await controller.createProject(user2.id, {
        name: "Proyecto D",
    });

    const userInfo = await controller.findUserByID(1);

    console.log(JSON.stringify(userInfo, null, 4));

    const projectInfo = await controller.findProjectById(4);

    console.log(JSON.stringify(projectInfo, null, 4));

    console.log(
        "------------------ INFO DE TODOS LOS USUARIOS --------------------"
    );

    const allUsers = await controller.findAllUsers();

    console.log(JSON.stringify(allUsers, null, 4));
};

db.sequelize.sync({ force: true }).then(() => {
    console.log("Eliminando y resincronizando la Base de datos.");
    run();
});
