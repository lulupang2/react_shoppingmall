const { sequelize, Sequelize } = require(".")

module.exports = (sequelize, Sequelize)

const Upload = sequelize.define("upload", {
    p_name: {
        type: Sequelize.STRING
    },    
    p_manu: {
        type: Sequelize.STRING
    },
    p_price: {
        type: Sequelize.NUMBER
    },
    p_qtt: {
        type: Sequelize.NUMBER
    },
    p_kind: {
        type: Sequelize.STRING
    },
    p_subtitle: {
        type: Sequelize.STRING
    },
    p_detail: {
        type: Sequelize.STRING
    },
    p_file: {
        type: Sequelize.STRING
    }    
});
return Upload;