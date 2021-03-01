module.exports = function(sequelize, dataTypes){
    const alias = "User"
    const cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            
        },
        rol:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        name: {
           type: dataTypes.STRING(45),

        },
        surname: {
            type: dataTypes.STRING(45),
            alowNull: false,
        },
        email: {
            type: dataTypes.STRING(45),      allowNull: false,

        },
        password: {
            type: dataTypes.STRING(225),
            allowNull: false,

        },
        repassword: {
            type: dataTypes.STRING(225),
            alowNull: true,
        },
        created_at: {
            type: dataTypes.DATE,
            alowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            alowNull: true,
        }
        
    }

    const config = {
            tableName: "users",
            timestamps: true,
            underscored: true
    }

    const User = sequelize.define(alias, cols, config);

    return User
}