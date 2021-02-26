module.exports = function(sequelize, dataTypes){
    const alias = "User"
    const cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            
        },
        name: {
           type: dataTypes.STRING(45),

        },
        surname: {
            type: dataTypes.STRING(45),
            alowNull: true,
        },
        email: {
            type: dataTypes.STRING(45),

        },
        password: {
            type: dataTypes.STRING(225),


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
            tableName: "users_df",
            // timestamps: true,
            underscored: true
    }

    const User = sequelize.define(alias, cols, config);

    return User
}