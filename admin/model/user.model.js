var Sequelize = require('sequelize');
var sequelize = require('../../config/database');

const getAllPartnersRequests = async (where) => {
    const partnerRequest = Promise.resolve(await sequelize.query(`SELECT p.partner_id, 
    p.name, COUNT(rc.request_count_id) AS total_hits
    FROM partner p  
    INNER JOIN request_count rc ON p.partner_id=rc.partner_id
    ${where}
    GROUP BY rc.partner_id
    ORDER BY p.name ASC `, { type: Sequelize.QueryTypes.SELECT }));
    return partnerRequest;
};

async function addPartnerRequest(insertArr) {

    var insertPartnerRequest = Promise.resolve(await sequelize.query(`INSERT INTO request_count SET
    ${insertArr} `, { type: Sequelize.QueryTypes.INSERT }));
    return insertPartnerRequest;    
};


module.exports = {
    getAllPartnersRequests: getAllPartnersRequests,
    addPartnerRequest: addPartnerRequest
}