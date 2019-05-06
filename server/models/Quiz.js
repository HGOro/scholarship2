var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var Quiz = sequelize.define("Quiz", {

        uuid: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          isUnique :true
        },
        quiz_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { 
                min:1,
                notEmpty:true
            }
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is:["^[a-z]+$",'i'],
                min:1,
                notEmpty:true
            }
        },
        score: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min:1,
                notEmpty:true
            }
        },
        total_time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { 
                min:1,
                notEmpty:true
            }
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE

    });

    // accociations ======================

    Quiz.associate = function(models){
        Quiz.belongsTo(models.User, {
            foreignKey: "userUUID",
            onDelete: 'cascade'
        });
    };

    return Quiz;
}
